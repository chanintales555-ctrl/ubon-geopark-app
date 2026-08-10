import React from 'react';
import { Geosite, Language } from '../../types';
import { HIGHLIGHT_GEOSITES } from '../../data/geosites';
import { ChevronRight, MapPin, Sparkles } from 'lucide-react';

interface HighlightCarouselProps {
  lang: Language;
  onSelectGeosite: (geosite: Geosite) => void;
  onViewAllClick: () => void;
}

export const HighlightCarousel: React.FC<HighlightCarouselProps> = ({ lang, onSelectGeosite, onViewAllClick }) => {
  return (
    <div style={{ marginBottom: 'var(--space-6)' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 var(--space-4)', marginBottom: 'var(--space-3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Sparkles size={18} color="var(--color-accent)" />
          <h2 style={{ fontSize: '1.125rem' }}>
            {lang === 'th' ? '10 แหล่งธรณีวิทยาไฮไลต์' : 'Top 10 Geosite Highlights'}
          </h2>
        </div>
        <button
          onClick={onViewAllClick}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-accent)',
            fontSize: '0.8125rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
          }}
        >
          <span>{lang === 'th' ? 'ดูทั้ง 46 แห่ง' : 'View All 46'}</span>
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Horizontal Scrollable Carousel */}
      <div
        className="hide-scrollbar"
        style={{
          display: 'flex',
          gap: 'var(--space-3)',
          overflowX: 'auto',
          paddingLeft: 'var(--space-4)',
          paddingRight: 'var(--space-4)',
          paddingBottom: 'var(--space-2)'
        }}
      >
        {HIGHLIGHT_GEOSITES.map((geosite) => (
          <div
            key={geosite.id}
            onClick={() => onSelectGeosite(geosite)}
            className="geopark-card"
            style={{
              flexShrink: 0,
              width: '240px',
              cursor: 'pointer'
            }}
          >
            {/* Real Image */}
            <div style={{ position: 'relative', height: '140px', width: '100%', overflow: 'hidden' }}>
              <img
                src={geosite.image}
                alt={geosite.name[lang]}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <span 
                className={`badge-cat ${geosite.category}`}
                style={{
                  position: 'absolute',
                  top: '0.5rem',
                  left: '0.5rem',
                  backdropFilter: 'blur(4px)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                }}
              >
                {geosite.category === 'geomorphology' && (lang === 'th' ? '🪨 ธรณีสัณฐาน' : '🪨 Geomorphology')}
                {geosite.category === 'fossil' && (lang === 'th' ? '🦕 ซากดึกดำบรรพ์' : '🦕 Fossil')}
                {geosite.category === 'archaeology' && (lang === 'th' ? '🎨 โบราณคดี' : '🎨 Archaeology')}
                {geosite.category === 'nature' && (lang === 'th' ? '🌿 ธรรมชาติ' : '🌿 Nature')}
                {geosite.category === 'culture' && (lang === 'th' ? '🛕 วัฒนธรรม' : '🛕 Culture')}
              </span>
            </div>

            {/* Card Content */}
            <div style={{ padding: '0.75rem' }}>
              <h3 style={{ fontSize: '0.9375rem', marginBottom: '0.25rem', color: 'var(--color-ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {geosite.name[lang]}
              </h3>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', color: 'var(--color-ink-3)' }}>
                <MapPin size={12} color="var(--color-accent)" />
                <span>
                  {geosite.amphoe === 'pho-sai' && (lang === 'th' ? 'อ.โพธิ์ไทร' : 'Pho Sai')}
                  {geosite.amphoe === 'khong-chiam' && (lang === 'th' ? 'อ.โขงเจียม' : 'Khong Chiam')}
                  {geosite.amphoe === 'sri-mueang-mai' && (lang === 'th' ? 'อ.ศรีเมืองใหม่' : 'Sri Mueang Mai')}
                  {geosite.amphoe === 'sirindhorn' && (lang === 'th' ? 'อ.สิรินธร' : 'Sirindhorn')}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
