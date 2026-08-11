import { useState } from 'react';
import { Geosite, Amphoe, GeositeCategory } from './types';
import { GEOSITES } from './data/geosites';
import { useLanguage } from './hooks/useLanguage';
import { useGeolocation } from './hooks/useGeolocation';
import { usePassport } from './hooks/usePassport';
import { usePWAInstall } from './hooks/usePWAInstall';
import { Header } from './components/layout/Header';
import { TabBar, TabType } from './components/layout/TabBar';
import { HeroSection } from './components/home/HeroSection';
import { SeasonalBanner } from './components/home/SeasonalBanner';
import { QuickStats } from './components/home/QuickStats';
import { HighlightCarousel } from './components/home/HighlightCarousel';
import { CategoryGrid } from './components/home/CategoryGrid';
import { MapView } from './components/explore/MapView';
import { MapFilter } from './components/explore/MapFilter';
import { GeositeList } from './components/explore/GeositeList';
import { GeositeDetail } from './components/detail/GeositeDetail';
import { PassportBook } from './components/passport/PassportBook';
import { Marketplace } from './components/shop/Marketplace';
import { AboutView } from './components/AboutView';
import { CheckInModal } from './components/passport/CheckInModal';
import { InstallModal } from './components/InstallModal';

export function App() {
  const { lang, toggleLang } = useLanguage();
  const { lat: userLat, lng: userLng } = useGeolocation();
  const { stamps, stampCount, hasStamp, addStamp, resetPassport } = usePassport();
  const { isStandalone, downloadApp } = usePWAInstall();

  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const [selectedAmphoe, setSelectedAmphoe] = useState<Amphoe | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<GeositeCategory | 'all'>('all');

  const [activeGeosite, setActiveGeosite] = useState<Geosite | null>(null);
  const [checkInGeosite, setCheckInGeosite] = useState<Geosite | null>(null);

  const handleOpenInstall = () => {
    setIsInstallModalOpen(true);
  };

  // Filter 46 geosites based on amphoe and category selection
  const filteredGeosites = GEOSITES.filter(g => {
    const amphoeMatch = selectedAmphoe === 'all' || g.amphoe === selectedAmphoe;
    const catMatch = selectedCategory === 'all' || g.category === selectedCategory;
    return amphoeMatch && catMatch;
  });

  const handleCategorySelect = (cat: GeositeCategory) => {
    setSelectedCategory(cat);
    setActiveTab('explore');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-paper)' }}>
      {/* Top Sticky Header */}
      <Header lang={lang} onToggleLang={toggleLang} promptInstall={handleOpenInstall} isStandalone={isStandalone} />

      {/* Main Content Area based on Active Tab */}
      <main style={{ flex: 1 }}>
        {/* ── TAB 1: HOME ── */}
        {activeTab === 'home' && (
          <div style={{ paddingBottom: 'calc(5rem + var(--sab))' }}>
            <HeroSection lang={lang} onExploreClick={() => setActiveTab('explore')} promptInstall={handleOpenInstall} isStandalone={isStandalone} />
            <SeasonalBanner lang={lang} />
            <QuickStats lang={lang} />
            <HighlightCarousel
              lang={lang}
              onSelectGeosite={(g) => setActiveGeosite(g)}
              onViewAllClick={() => setActiveTab('explore')}
            />
            <CategoryGrid lang={lang} onSelectCategory={handleCategorySelect} />
          </div>
        )}

        {/* ── TAB 2: EXPLORE (MAP / LIST) ── */}
        {activeTab === 'explore' && (
          <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 120px)' }}>
            <MapFilter
              selectedAmphoe={selectedAmphoe}
              selectedCategory={selectedCategory}
              onSelectAmphoe={setSelectedAmphoe}
              onSelectCategory={setSelectedCategory}
              lang={lang}
              viewMode={viewMode}
              onToggleViewMode={() => setViewMode(prev => prev === 'map' ? 'list' : 'map')}
            />

            <div style={{ flex: 1, position: 'relative', overflowY: viewMode === 'list' ? 'auto' : 'hidden', WebkitOverflowScrolling: 'touch' }}>
              {viewMode === 'map' ? (
                <MapView
                  geosites={filteredGeosites}
                  selectedGeosite={activeGeosite}
                  onSelectGeosite={(g) => setActiveGeosite(g)}
                  userLat={userLat}
                  userLng={userLng}
                  lang={lang}
                />
              ) : (
                <GeositeList
                  geosites={filteredGeosites}
                  lang={lang}
                  onSelectGeosite={(g) => setActiveGeosite(g)}
                  stamps={stamps.map(s => s.geositeId)}
                />
              )}
            </div>
          </div>
        )}

        {/* ── TAB 3: PASSPORT ── */}
        {activeTab === 'passport' && (
          <div style={{ paddingBottom: 'calc(5rem + var(--sab))' }}>
            <PassportBook
              stamps={stamps}
              stampCount={stampCount}
              onAddStamp={addStamp}
              onResetPassport={resetPassport}
              onSelectGeosite={(g) => setActiveGeosite(g)}
              lang={lang}
            />
          </div>
        )}

        {/* ── TAB 4: SHOP ── */}
        {activeTab === 'shop' && (
          <div style={{ paddingBottom: 'calc(5rem + var(--sab))' }}>
            <Marketplace lang={lang} />
          </div>
        )}

        {/* ── TAB 5: ABOUT ── */}
        {activeTab === 'about' && (
          <div style={{ paddingBottom: 'calc(5rem + var(--sab))' }}>
            <AboutView lang={lang} />
          </div>
        )}
      </main>

      {/* Fullscreen Geosite Detail Modal */}
      {activeGeosite && (
        <GeositeDetail
          geosite={activeGeosite}
          lang={lang}
          onClose={() => setActiveGeosite(null)}
          onCheckIn={(g) => setCheckInGeosite(g)}
          hasStamp={hasStamp(activeGeosite.id)}
        />
      )}

      {/* Passport CheckIn Trigger Modal */}
      {checkInGeosite && (
        <CheckInModal
          initialGeosite={checkInGeosite}
          onClose={() => setCheckInGeosite(null)}
          onConfirmCheckIn={(geositeId, isSimulated) => {
            const site = GEOSITES.find(g => g.id === geositeId);
            if (site) {
              addStamp(geositeId, site.coords.lat, site.coords.lng, isSimulated);
            }
            setCheckInGeosite(null);
          }}
          lang={lang}
        />
      )}

      {/* Modern PWA Install Modal */}
      <InstallModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
        lang={lang}
        onNativeInstall={downloadApp}
      />

      {/* Fixed Bottom Tab Navigation */}
      <TabBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        lang={lang}
        stampCount={stampCount}
      />
    </div>
  );
}

export default App;
