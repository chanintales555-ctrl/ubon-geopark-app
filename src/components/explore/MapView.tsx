import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Geosite, Language, GeositeCategory } from '../../types';
import { MapPopup } from './MapPopup';

interface MapViewProps {
  geosites: Geosite[];
  selectedGeosite: Geosite | null;
  onSelectGeosite: (geosite: Geosite) => void;
  userLat: number | null;
  userLng: number | null;
  lang: Language;
}

// Sub-component to re-center map when selected geosite changes
function MapRecenter({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], 13, { animate: true });
  }, [lat, lng, map]);
  return null;
}

// Function to generate category-colored Leaflet SVG DivIcon
function createCategoryIcon(category: GeositeCategory, isHighlight: boolean) {
  let color = '#A86538';
  let iconSymbol = '🪨';

  switch (category) {
    case 'geomorphology': color = '#A86538'; iconSymbol = '🪨'; break;
    case 'fossil': color = '#6B7A36'; iconSymbol = '🦕'; break;
    case 'archaeology': color = '#C2593F'; iconSymbol = '🎨'; break;
    case 'nature': color = '#2E7D32'; iconSymbol = '🌿'; break;
    case 'culture': color = '#1C3144'; iconSymbol = '🛕'; break;
  }

  const size = isHighlight ? 36 : 30;
  const border = isHighlight ? '3px solid #ffffff' : '2px solid #ffffff';
  const shadow = isHighlight ? '0 4px 10px rgba(0,0,0,0.3)' : '0 2px 6px rgba(0,0,0,0.2)';

  const html = `
    <div style="
      width: ${size}px;
      height: ${size}px;
      background-color: ${color};
      border-radius: 50%;
      border: ${border};
      box-shadow: ${shadow};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${size * 0.45}px;
      cursor: pointer;
      transform: translate(-50%, -50%);
    ">
      ${iconSymbol}
    </div>
  `;

  return L.divIcon({
    html,
    className: 'custom-geosite-marker',
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2]
  });
}

// Custom user location blue dot icon
const userIcon = L.divIcon({
  html: `
    <div style="
      width: 20px;
      height: 20px;
      background-color: #007AFF;
      border: 3px solid #ffffff;
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(0,122,255,0.6);
      transform: translate(-50%, -50%);
    "></div>
  `,
  className: 'user-gps-marker',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

export const MapView: React.FC<MapViewProps> = ({
  geosites,
  selectedGeosite,
  onSelectGeosite,
  userLat,
  userLng,
  lang
}) => {
  // Default center: Ubon Geopark Center (15.55, 105.42)
  const defaultCenter = { lat: 15.55, lng: 105.42 };
  const center = selectedGeosite ? selectedGeosite.coords : defaultCenter;

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: 'calc(100vh - 180px)' }}>
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={10}
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {selectedGeosite && (
          <MapRecenter lat={selectedGeosite.coords.lat} lng={selectedGeosite.coords.lng} />
        )}

        {/* Render User GPS Location Marker */}
        {userLat && userLng && (
          <Marker position={[userLat, userLng]} icon={userIcon}>
            <Popup>
              <div style={{ padding: '0.4rem', fontSize: '0.8rem', textAlign: 'center' }}>
                📍 {lang === 'th' ? 'ตำแหน่งปัจจุบันของคุณ' : 'Your Current Location'}
              </div>
            </Popup>
          </Marker>
        )}

        {/* Render 46 Geosite Markers */}
        {geosites.map((geosite) => (
          <Marker
            key={geosite.id}
            position={[geosite.coords.lat, geosite.coords.lng]}
            icon={createCategoryIcon(geosite.category, geosite.isHighlight)}
          >
            <Popup>
              <MapPopup geosite={geosite} lang={lang} onSelectGeosite={onSelectGeosite} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Map Legend Overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: '1rem',
          left: '1rem',
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(6px)',
          padding: '0.5rem 0.75rem',
          borderRadius: '0.5rem',
          boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
          zIndex: 800,
          fontSize: '0.7rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.2rem'
        }}
      >
        <div style={{ fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.1rem' }}>
          {lang === 'th' ? 'สัญลักษณ์ประเภท' : 'Legend'}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>🪨 {lang === 'th' ? 'ธรณีสัณฐาน' : 'Geomorphology'}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>🦕 {lang === 'th' ? 'ซากดึกดำบรรพ์' : 'Fossil'}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>🎨 {lang === 'th' ? 'โบราณคดี' : 'Archaeology'}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>🌿 {lang === 'th' ? 'ธรรมชาติวิทยา' : 'Nature'}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>🛕 {lang === 'th' ? 'วัฒนธรรม' : 'Culture'}</div>
      </div>
    </div>
  );
};
