import React from 'react';
import { Geosite, Language } from '../../types';
import { NavigateButton } from './NavigateButton';
import { MapPin, Info } from 'lucide-react';

interface MapPopupProps {
  geosite: Geosite;
  lang: Language;
  onSelectGeosite: (geosite: Geosite) => void;
}

export const MapPopup: React.FC<MapPopupProps> = ({ geosite, lang, onSelectGeosite }) => {
  return (
    <div style={{ padding: '0.75rem', width: '250px', color: 'var(--color-ink)' }}>
      <div 
        onClick={() => onSelectGeosite(geosite)}
        style={{ position: 'relative', height: '120px', width: '100%', borderRadius: '0.5rem', overflow: 'hidden', marginBottom: '0.5rem', cursor: 'pointer' }}
      >
        <img
          src={geosite.image}
          alt={geosite.name[lang]}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <span 
          className={`badge-cat ${geosite.category}`}
          style={{ position: 'absolute', top: '0.35rem', left: '0.35rem', fontSize: '0.65rem' }}
        >
          {geosite.category === 'geomorphology' && '🪨 ธรณีสัณฐาน'}
          {geosite.category === 'fossil' && '🦕 ซากดึกดำบรรพ์'}
          {geosite.category === 'archaeology' && '🎨 โบราณคดี'}
          {geosite.category === 'nature' && '🌿 ธรรมชาติ'}
          {geosite.category === 'culture' && '🛕 วัฒนธรรม'}
        </span>
      </div>

      <h3 
        onClick={() => onSelectGeosite(geosite)}
        style={{ fontSize: '0.9375rem', marginBottom: '0.2rem', color: 'var(--color-ink)', cursor: 'pointer' }}
      >
        {geosite.name[lang]}
      </h3>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', color: 'var(--color-ink-3)', marginBottom: '0.5rem' }}>
        <MapPin size={12} color="var(--color-accent)" />
        <span>
          {geosite.amphoe === 'pho-sai' && 'อ.โพธิ์ไทร'}
          {geosite.amphoe === 'khong-chiam' && 'อ.โขงเจียม'}
          {geosite.amphoe === 'sri-mueang-mai' && 'อ.ศรีเมืองใหม่'}
          {geosite.amphoe === 'sirindhorn' && 'อ.สิรินธร'}
        </span>
      </div>

      <div style={{ display: 'flex', gap: '0.35rem', marginTop: '0.5rem' }}>
        <button
          onClick={() => onSelectGeosite(geosite)}
          className="btn btn-secondary"
          style={{ flex: 1, padding: '0.35rem 0.4rem', fontSize: '0.75rem' }}
        >
          <Info size={12} />
          <span>{lang === 'th' ? 'ข้อมูล' : 'Details'}</span>
        </button>

        <NavigateButton
          lat={geosite.coords.lat}
          lng={geosite.coords.lng}
          lang={lang}
          size="small"
        />
      </div>
    </div>
  );
};
