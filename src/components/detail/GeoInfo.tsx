import React from 'react';
import { Geosite, Language } from '../../types';
import { FileText, Layers } from 'lucide-react';

interface GeoInfoProps {
  geosite: Geosite;
  lang: Language;
}

export const GeoInfo: React.FC<GeoInfoProps> = ({ geosite, lang }) => {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid var(--color-paper-3)',
        borderRadius: '0.75rem',
        padding: '1.25rem',
        marginBottom: 'var(--space-4)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
      }}
    >
      <h4 style={{ fontSize: '0.9375rem', color: 'var(--color-ink)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700 }}>
        <FileText size={18} color="var(--color-accent)" />
        <span>{lang === 'th' ? 'ลักษณะและความสำคัญของสถานที่' : 'Description & Significance'}</span>
      </h4>

      {/* Normal Paragraph Text */}
      <p style={{ fontSize: '0.875rem', color: 'var(--color-ink-2)', lineHeight: 1.65, margin: 0, whiteSpace: 'pre-line' }}>
        {geosite.description[lang]}
      </p>

      {/* Subtle Geological Context Chips (Only displayed cleanly at bottom if available) */}
      {(geosite.geologicalAge || geosite.rockFormation) && (
        <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--color-paper-2)', display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-ink-3)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.2rem', marginRight: '0.25rem' }}>
            <Layers size={14} color="var(--color-accent)" />
            <span>{lang === 'th' ? 'ข้อมูลเพิ่มเติม:' : 'More Info:'}</span>
          </span>
          {geosite.geologicalAge && (
            <span style={{ fontSize: '0.7188rem', backgroundColor: 'var(--color-paper-2)', color: 'var(--color-ink-2)', padding: '0.2rem 0.55rem', borderRadius: '0.375rem', fontWeight: 500 }}>
              {geosite.geologicalAge[lang]}
            </span>
          )}
          {geosite.rockFormation && (
            <span style={{ fontSize: '0.7188rem', backgroundColor: 'var(--color-paper-2)', color: 'var(--color-ink-2)', padding: '0.2rem 0.55rem', borderRadius: '0.375rem', fontWeight: 500 }}>
              {geosite.rockFormation[lang]}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
