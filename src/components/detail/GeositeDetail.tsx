import React, { useState } from 'react';
import { Geosite, Language } from '../../types';
import { GeoInfo } from './GeoInfo';
import { AudioPlayer } from './AudioPlayer';
import { SeasonInfo, FacilitiesBar } from './SeasonInfo';
import { NavigateButton } from '../explore/NavigateButton';
import { ArrowLeft, MapPin, CheckCircle, Camera, Maximize2, X } from 'lucide-react';

interface GeositeDetailProps {
  geosite: Geosite;
  lang: Language;
  onClose: () => void;
  onCheckIn: (geosite: Geosite) => void;
  hasStamp: boolean;
}

export const GeositeDetail: React.FC<GeositeDetailProps> = ({
  geosite,
  lang,
  onClose,
  onCheckIn,
  hasStamp
}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'var(--color-paper)',
        zIndex: 2000,
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      {/* Top Header Bar */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(28, 49, 68, 0.96)',
          backdropFilter: 'blur(10px)',
          color: '#ffffff',
          padding: 'calc(var(--space-3) + var(--sat)) var(--space-4) var(--space-3) var(--space-4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 10,
          boxShadow: '0 2px 10px rgba(0,0,0,0.15)'
        }}
      >
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.875rem',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          <ArrowLeft size={20} />
          <span>{lang === 'th' ? 'กลับหน้าแผนที่' : 'Back to Map'}</span>
        </button>

        <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-accent-subtle)' }}>
          {geosite.id}
        </span>
      </div>

      {/* Main Content Area Container */}
      <div 
        style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          padding: 'var(--space-4)', 
          paddingBottom: 'calc(5rem + var(--sab))' 
        }}
      >
        {/* Title & Location Header */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span className={`badge-cat ${geosite.category}`} style={{ fontSize: '0.75rem', padding: '0.3rem 0.6rem' }}>
                {geosite.category === 'geomorphology' && (lang === 'th' ? '🪨 ธรณีสัณฐาน' : '🪨 Geomorphology')}
                {geosite.category === 'fossil' && (lang === 'th' ? '🦕 ซากดึกดำบรรพ์' : '🦕 Dinosaur Fossil')}
                {geosite.category === 'archaeology' && (lang === 'th' ? '🎨 โบราณคดี' : '🎨 Archaeology')}
                {geosite.category === 'nature' && (lang === 'th' ? '🌿 ธรรมชาติ' : '🌿 Nature')}
                {geosite.category === 'culture' && (lang === 'th' ? '🛕 วัฒนธรรม' : '🛕 Culture')}
              </span>

              {geosite.isConservationGeosite && (
                <span style={{ backgroundColor: '#fef3c7', color: '#92400e', border: '1px solid #fde68a', fontSize: '0.7188rem', padding: '0.25rem 0.55rem', borderRadius: '0.375rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                  🏛️ {lang === 'th' ? 'แหล่งอนุรักษ์ธรณีวิทยา' : 'Geological Conservation Site'}
                </span>
              )}
            </div>

            {hasStamp && (
              <span style={{ backgroundColor: 'var(--color-accent-subtle)', color: 'var(--color-accent)', padding: '0.25rem 0.65rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                <CheckCircle size={14} />
                <span>{lang === 'th' ? 'สะสมตราประทับแล้ว' : 'Stamped'}</span>
              </span>
            )}
          </div>

          <h1 style={{ color: 'var(--color-ink)', fontSize: '1.625rem', fontWeight: 700, lineHeight: 1.25, marginBottom: '0.4rem' }}>
            {geosite.name[lang]}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-ink-2)', fontSize: '0.875rem' }}>
            <MapPin size={16} color="var(--color-accent)" />
            <span style={{ fontWeight: 600 }}>
              {geosite.amphoe === 'pho-sai' && (lang === 'th' ? 'อำเภอโพธิ์ไทร, จ.อุบลราชธานี' : 'Pho Sai District, Ubon Ratchathani')}
              {geosite.amphoe === 'khong-chiam' && (lang === 'th' ? 'อำเภอโขงเจียม, จ.อุบลราชธานี' : 'Khong Chiam District, Ubon Ratchathani')}
              {geosite.amphoe === 'sri-mueang-mai' && (lang === 'th' ? 'อำเภอศรีเมืองใหม่, จ.อุบลราชธานี' : 'Sri Mueang Mai District, Ubon Ratchathani')}
              {geosite.amphoe === 'sirindhorn' && (lang === 'th' ? 'อำเภอสิรินธร, จ.อุบลราชธานี' : 'Sirindhorn District, Ubon Ratchathani')}
            </span>
          </div>
        </div>

        {/* Central Prominent Image Card (ภาพวางตรงกลาง แสดงผลชัดเจน) */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          style={{
            position: 'relative',
            width: '100%',
            maxHeight: '440px',
            borderRadius: '1rem',
            overflow: 'hidden',
            marginBottom: '1.25rem',
            backgroundColor: 'var(--color-ink)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            cursor: 'pointer'
          }}
        >
          <img
            src={geosite.image}
            alt={geosite.name[lang]}
            style={{
              width: '100%',
              maxHeight: '440px',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.3s ease'
            }}
          />

          {/* Click to Zoom Hint Button */}
          <div
            style={{
              position: 'absolute',
              top: '0.75rem',
              right: '0.75rem',
              backgroundColor: 'rgba(0, 0, 0, 0.55)',
              backdropFilter: 'blur(4px)',
              color: '#ffffff',
              padding: '0.35rem 0.6rem',
              borderRadius: '0.5rem',
              fontSize: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontWeight: 500
            }}
          >
            <Maximize2 size={13} />
            <span>{lang === 'th' ? 'ขยายรูปภาพ' : 'Zoom Photo'}</span>
          </div>

          {/* Image Attribution Credit */}
          <div
            style={{
              position: 'absolute',
              bottom: '0.75rem',
              left: '0.75rem',
              right: '0.75rem',
              backgroundColor: 'rgba(0, 0, 0, 0.65)',
              backdropFilter: 'blur(4px)',
              color: '#ffffff',
              fontSize: '0.7188rem',
              padding: '0.4rem 0.75rem',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            <Camera size={13} color="var(--color-accent)" />
            <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {geosite.imageCredit}
            </span>
          </div>
        </div>

        {/* Action Buttons Bar */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '1.25rem' }}>
          <button
            onClick={() => onCheckIn(geosite)}
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '0.65rem' }}
          >
            <span>{geosite.passportStamp.icon}</span>
            <span>{hasStamp ? (lang === 'th' ? 'ดูตราประทับ' : 'View Stamp') : (lang === 'th' ? 'เช็กอินสะสม Stamp' : 'Check-in Stamp')}</span>
          </button>

          <NavigateButton
            lat={geosite.coords.lat}
            lng={geosite.coords.lng}
            lang={lang}
            variant="secondary"
          />
        </div>

        {/* Audio Guide Player */}
        <AudioPlayer geositeName={geosite.name[lang]} lang={lang} duration={geosite.audioDuration} />

        {/* Geological Information & Description */}
        <GeoInfo geosite={geosite} lang={lang} />

        {/* Season Advice & Safety Warnings */}
        <SeasonInfo bestSeason={geosite.bestSeason} warnings={geosite.warnings} lang={lang} />

        {/* Facilities */}
        <FacilitiesBar facilities={geosite.facilities} lang={lang} />
      </div>

      {/* Lightbox Fullscreen Modal */}
      {isLightboxOpen && (
        <div
          onClick={() => setIsLightboxOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            backdropFilter: 'blur(8px)',
            zIndex: 3000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            animation: 'fadeIn 0.2s ease'
          }}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: '#ffffff',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={24} />
          </button>

          <img
            src={geosite.image}
            alt={geosite.name[lang]}
            style={{
              maxWidth: '95vw',
              maxHeight: '85vh',
              objectFit: 'contain',
              borderRadius: '0.5rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
          />

          <div style={{ color: '#ffffff', marginTop: '1rem', textAlign: 'center', fontSize: '0.875rem' }}>
            <div style={{ fontWeight: 700 }}>{geosite.name[lang]}</div>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.2rem' }}>
              📷 {geosite.imageCredit}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
