import React from 'react';
import { Language } from '../../types';
import { Compass, MapPin, Download } from 'lucide-react';

interface HeroSectionProps {
  lang: Language;
  onExploreClick: () => void;
  promptInstall?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang, onExploreClick, promptInstall }) => {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '340px',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        padding: 'var(--space-8) var(--space-4) var(--space-4) var(--space-4)'
      }}
    >
      {/* Real Background Image */}
      <img
        src="/assets/hero/mekong-panorama.jpg"
        alt="Mekong Panorama"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1
        }}
      />

      {/* Dark Editorial Overlay Gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to top, rgba(28, 49, 68, 0.95) 0%, rgba(28, 49, 68, 0.5) 60%, rgba(28, 49, 68, 0.15) 100%)',
          zIndex: 2
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 3, width: '100%', color: '#ffffff' }}>
        <div 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.35rem', 
            backgroundColor: 'var(--color-accent)', 
            color: '#ffffff',
            padding: '0.2rem 0.6rem',
            borderRadius: '1rem',
            fontSize: '0.75rem',
            fontWeight: 600,
            marginBottom: '0.5rem'
          }}
        >
          <MapPin size={12} />
          <span>{lang === 'th' ? '4 อำเภอ · จ.อุบลราชธานี' : '4 Districts · Ubon Ratchathani'}</span>
        </div>

        <h1 
          style={{ 
            color: '#ffffff', 
            fontSize: '1.5rem', 
            lineHeight: 1.2, 
            marginBottom: '0.5rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          {lang === 'th' ? 'มหัศจรรย์มรดกธรณี หินทราย 100 ล้านปี' : '100 Million Years Mesozoic Sandstone Heritage'}
        </h1>

        <p 
          style={{ 
            color: 'var(--color-paper-2)', 
            fontSize: '0.8125rem', 
            marginBottom: '0.85rem',
            lineHeight: 1.35
          }}
        >
          {lang === 'th' 
            ? 'สำรวจสามพันโบก ผาแต้ม และแหล่งธรณีวิทยา 46 แห่ง มุ่งสู่ UNESCO Global Geopark' 
            : 'Explore Sam Phan Bok, Pha Taem & 46 registered geosites aspiring for UNESCO status.'}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button
            onClick={onExploreClick}
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '0.65rem 1rem', whiteSpace: 'normal', textAlign: 'center' }}
          >
            <Compass size={18} style={{ flexShrink: 0 }} />
            <span>{lang === 'th' ? 'เริ่มสำรวจแผนที่ธรณีวิทยา 46 แห่ง' : 'Explore Interactive 46 Geosite Map'}</span>
          </button>

          {promptInstall && (
            <button
              onClick={promptInstall}
              className="btn"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '0.6rem 1rem',
                backgroundColor: '#059669',
                color: '#ffffff',
                border: 'none',
                fontWeight: 700,
                fontSize: '0.875rem',
                boxShadow: '0 4px 12px rgba(5, 150, 105, 0.45)',
                cursor: 'pointer'
              }}
            >
              <Download size={18} style={{ flexShrink: 0 }} />
              <span>{lang === 'th' ? '📲 ติดตั้งแอปพลิเคชันลงมือถือ (ปุ่มเดียว)' : '📲 1-Click Install Mobile App'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
