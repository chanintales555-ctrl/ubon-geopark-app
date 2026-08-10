import React from 'react';
import { Geosite, Language, UserStamp } from '../../types';

interface StampGridProps {
  geosites: Geosite[];
  stamps: UserStamp[];
  lang: Language;
  onSelectGeosite: (geosite: Geosite) => void;
}

export const StampGrid: React.FC<StampGridProps> = ({ geosites, stamps, lang, onSelectGeosite }) => {
  const stampedMap = new Map(stamps.map(s => [s.geositeId, s]));

  return (
    <div style={{ marginBottom: 'var(--space-6)' }}>
      <h3 style={{ fontSize: '1rem', color: 'var(--color-ink)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span>{lang === 'th' ? 'สมุดตราประทับ 46 แหล่งธรณีวิทยา:' : '46 Geosite Passport Grid:'}</span>
        <span style={{ fontSize: '0.75rem', color: 'var(--color-ink-3)', fontWeight: 400 }}>
          {lang === 'th' ? 'แต้มที่รูปเพื่อดูตราประทับ' : 'Tap slot to view'}
        </span>
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem' }}>
        {geosites.map((geosite, idx) => {
          const userStamp = stampedMap.get(geosite.id);
          const isStamped = !!userStamp;

          return (
            <div
              key={geosite.id}
              onClick={() => onSelectGeosite(geosite)}
              style={{
                aspectRatio: '1',
                backgroundColor: isStamped ? '#ffffff' : 'var(--color-paper-2)',
                border: isStamped ? '2px solid var(--color-accent)' : '1px dashed var(--color-paper-3)',
                borderRadius: '0.75rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.4rem',
                textAlign: 'center',
                cursor: 'pointer',
                position: 'relative',
                boxShadow: isStamped ? '0 3px 10px rgba(168, 101, 56, 0.15)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <span style={{ position: 'absolute', top: '4px', left: '6px', fontSize: '0.6rem', color: 'var(--color-ink-3)', fontFamily: 'var(--font-mono)' }}>
                #{idx + 1}
              </span>

              {isStamped ? (
                <>
                  <div className="stamp-badge stamped" style={{ width: '2.5rem', height: '2.5rem', fontSize: '1.25rem', marginBottom: '0.2rem' }}>
                    {geosite.passportStamp.icon}
                  </div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--color-accent)', lineHeight: 1.15, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', width: '100%' }}>
                    {geosite.name[lang]}
                  </span>
                </>
              ) : (
                <>
                  <div style={{ opacity: 0.3, fontSize: '1.25rem', marginBottom: '0.2rem' }}>
                    {geosite.passportStamp.icon}
                  </div>
                  <span style={{ fontSize: '0.625rem', color: 'var(--color-ink-3)', lineHeight: 1.15, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', width: '100%' }}>
                    {geosite.name[lang]}
                  </span>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
