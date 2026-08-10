import React, { useState } from 'react';
import { Geosite, Language, UserStamp } from '../../types';
import { GEOSITES } from '../../data/geosites';
import { ExplorerLevel } from './ExplorerLevel';
import { StampGrid } from './StampGrid';
import { CheckInModal } from './CheckInModal';
import { getExplorerLevel } from '../../hooks/usePassport';
import { BookOpen, Sparkles, RefreshCw, Award } from 'lucide-react';

interface PassportBookProps {
  stamps: UserStamp[];
  stampCount: number;
  onAddStamp: (geositeId: string, lat: number, lng: number, isSimulated: boolean) => boolean;
  onResetPassport: () => void;
  onSelectGeosite: (geosite: Geosite) => void;
  lang: Language;
}

export const PassportBook: React.FC<PassportBookProps> = ({
  stamps,
  stampCount,
  onAddStamp,
  onResetPassport,
  onSelectGeosite,
  lang
}) => {
  const [showCheckInModal, setShowCheckInModal] = useState(false);
  const explorerLevel = getExplorerLevel(stampCount);

  const phoSaiCount = stamps.filter(s => GEOSITES.find(g => g.id === s.geositeId)?.amphoe === 'pho-sai').length;
  const khongChiamCount = stamps.filter(s => GEOSITES.find(g => g.id === s.geositeId)?.amphoe === 'khong-chiam').length;

  const achievements = [
    { title: { th: 'นักสำรวจโพธิ์ไทร', en: 'Pho Sai Explorer' }, req: { th: 'สะสม 5 ตราประทับ อ.โพธิ์ไทร', en: '5 Pho Sai Stamps' }, icon: '🪨', done: phoSaiCount >= 5 },
    { title: { th: 'ผู้พิชิตผาแต้ม', en: 'Pha Taem Conqueror' }, req: { th: 'สะสม 10 ตราประทับ อ.โขงเจียม', en: '10 Khong Chiam Stamps' }, icon: '🎨', done: khongChiamCount >= 10 },
    { title: { th: 'ตำนาน 4 อำเภอ', en: '4-District Legend' }, req: { th: 'สะสม 20 ตราประทับรวม', en: '20 Total Stamps' }, icon: '⛵', done: stamps.length >= 20 },
    { title: { th: 'ผู้พิชิต 46 แหล่งธรณี', en: 'Master of All 46 Sites' }, req: { th: 'สะสมครบทั้ง 46 ตราประทับ', en: 'All 46 Stamps' }, icon: '👑', done: stamps.length >= 46 }
  ];

  return (
    <div style={{ padding: 'var(--space-4)', paddingBottom: 'calc(5rem + var(--sab))' }}>
      {/* Title */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-4)' }}>
        <div>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--color-ink)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <BookOpen size={22} color="var(--color-accent)" />
            <span>{lang === 'th' ? 'พาสปอร์ตอุทยานธรณี' : 'Geopark Passport'}</span>
          </h2>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-ink-3)', margin: 0 }}>
            {lang === 'th' ? 'สมุดสะสมตราประทับดิจิทัล 46 แหล่งธรณีวิทยา' : 'Digital 46 Geosite Exploration Passport'}
          </p>
        </div>

        <button
          onClick={() => setShowCheckInModal(true)}
          className="btn btn-primary"
          style={{ padding: '0.5rem 0.85rem', fontSize: '0.8125rem' }}
        >
          <Sparkles size={16} />
          <span>{lang === 'th' ? 'เช็กอิน GPS' : 'Check-in'}</span>
        </button>
      </div>

      {/* Level Banner */}
      <ExplorerLevel explorerLevel={explorerLevel} stampCount={stampCount} lang={lang} />

      {/* Achievements Horizontal Bar */}
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <h4 style={{ fontSize: '0.875rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <Award size={16} color="var(--color-accent)" />
          <span>{lang === 'th' ? 'เหรียญตราเกียรติยศนักสำรวจ:' : 'Explorer Badges:'}</span>
        </h4>
        <div className="hide-scrollbar" style={{ display: 'flex', gap: '0.6rem', overflowX: 'auto', paddingBottom: '0.2rem' }}>
          {achievements.map((ach, idx) => (
            <div
              key={idx}
              style={{
                flexShrink: 0,
                width: '140px',
                backgroundColor: ach.done ? 'var(--color-accent-subtle)' : 'var(--color-paper-2)',
                border: ach.done ? '1px solid var(--color-accent)' : '1px dashed var(--color-paper-3)',
                borderRadius: '0.5rem',
                padding: '0.6rem',
                opacity: ach.done ? 1 : 0.6
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>{ach.icon}</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: ach.done ? 'var(--color-accent)' : 'var(--color-ink-2)' }}>
                {ach.title[lang]}
              </div>
              <div style={{ fontSize: '0.65rem', color: 'var(--color-ink-3)' }}>
                {ach.req[lang]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Passport 46 Grid */}
      <StampGrid geosites={GEOSITES} stamps={stamps} lang={lang} onSelectGeosite={onSelectGeosite} />

      {/* Reset Option */}
      {stampCount > 0 && (
        <div style={{ textAlign: 'center', marginTop: 'var(--space-6)' }}>
          <button
            onClick={() => {
              if (confirm(lang === 'th' ? 'คุณต้องการรีเซ็ตตราประทับทั้งหมดใช่หรือไม่?' : 'Reset all collected stamps?')) {
                onResetPassport();
              }
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-ink-3)',
              fontSize: '0.75rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}
          >
            <RefreshCw size={12} />
            <span>{lang === 'th' ? 'รีเซ็ตสมุดพาสปอร์ต' : 'Reset Passport Stamps'}</span>
          </button>
        </div>
      )}

      {/* CheckIn Modal */}
      {showCheckInModal && (
        <CheckInModal
          initialGeosite={null}
          onClose={() => setShowCheckInModal(false)}
          onConfirmCheckIn={(geositeId, isSimulated) => {
            const site = GEOSITES.find(g => g.id === geositeId);
            if (site) {
              onAddStamp(geositeId, site.coords.lat, site.coords.lng, isSimulated);
            }
            setShowCheckInModal(false);
          }}
          lang={lang}
        />
      )}
    </div>
  );
};
