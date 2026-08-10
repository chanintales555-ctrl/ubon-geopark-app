import React from 'react';
import { Geosite, Language } from '../../types';
import { NavigateButton } from './NavigateButton';
import { MapPin } from 'lucide-react';

interface GeositeCardProps {
  geosite: Geosite;
  lang: Language;
  onSelectGeosite: (geosite: Geosite) => void;
  hasStamp?: boolean;
}

export const GeositeCard: React.FC<GeositeCardProps> = ({ geosite, lang, onSelectGeosite, hasStamp }) => {
  return (
    <div
      onClick={() => onSelectGeosite(geosite)}
      className="geopark-card"
      style={{
        display: 'flex',
        padding: '0.75rem',
        gap: '0.75rem',
        cursor: 'pointer',
        alignItems: 'center'
      }}
    >
      {/* Photo */}
      <div style={{ position: 'relative', width: '90px', height: '90px', borderRadius: '0.5rem', overflow: 'hidden', flexShrink: 0 }}>
        <img
          src={geosite.image}
          alt={geosite.name[lang]}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {hasStamp && (
          <div
            style={{
              position: 'absolute',
              top: '0.25rem',
              right: '0.25rem',
              backgroundColor: 'var(--color-accent)',
              color: '#ffffff',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.65rem',
              fontWeight: 700
            }}
          >
            ✓
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.2rem' }}>
          <span className={`badge-cat ${geosite.category}`} style={{ fontSize: '0.65rem' }}>
            {geosite.category === 'geomorphology' && (lang === 'th' ? '🪨 ธรณีสัณฐาน' : '🪨 Geomorphology')}
            {geosite.category === 'fossil' && (lang === 'th' ? '🦕 ซากดึกดำบรรพ์' : '🦕 Fossil')}
            {geosite.category === 'archaeology' && (lang === 'th' ? '🎨 โบราณคดี' : '🎨 Archaeology')}
            {geosite.category === 'nature' && (lang === 'th' ? '🌿 ธรรมชาติ' : '🌿 Nature')}
            {geosite.category === 'culture' && (lang === 'th' ? '🛕 วัฒนธรรม' : '🛕 Culture')}
          </span>
          {geosite.isHighlight && (
            <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--color-accent)', backgroundColor: 'var(--color-accent-subtle)', padding: '0.1rem 0.4rem', borderRadius: '1rem' }}>
              ★ Highlight
            </span>
          )}
        </div>

        <h3 style={{ fontSize: '0.9375rem', marginBottom: '0.25rem', color: 'var(--color-ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {geosite.name[lang]}
        </h3>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', color: 'var(--color-ink-3)', marginBottom: '0.4rem' }}>
          <MapPin size={12} color="var(--color-accent)" />
          <span>
            {geosite.amphoe === 'pho-sai' && (lang === 'th' ? 'อ.โพธิ์ไทร' : 'Pho Sai')}
            {geosite.amphoe === 'khong-chiam' && (lang === 'th' ? 'อ.โขงเจียม' : 'Khong Chiam')}
            {geosite.amphoe === 'sri-mueang-mai' && (lang === 'th' ? 'อ.ศรีเมืองใหม่' : 'Sri Mueang Mai')}
            {geosite.amphoe === 'sirindhorn' && (lang === 'th' ? 'อ.สิรินธร' : 'Sirindhorn')}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '0.7188rem', color: 'var(--color-ink-2)' }}>
            ⏱️ {geosite.estimatedTime[lang]}
          </span>
          <NavigateButton lat={geosite.coords.lat} lng={geosite.coords.lng} lang={lang} size="small" />
        </div>
      </div>
    </div>
  );
};
