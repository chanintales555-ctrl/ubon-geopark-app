import React from 'react';
import { Geosite, Language } from '../../types';
import { Calendar, AlertTriangle } from 'lucide-react';

interface SeasonInfoProps {
  bestSeason: Geosite['bestSeason'];
  warnings: Geosite['warnings'];
  lang: Language;
}

export const SeasonInfo: React.FC<SeasonInfoProps> = ({ bestSeason, warnings, lang }) => {
  return (
    <div style={{ marginBottom: 'var(--space-4)' }}>
      {/* Best Visiting Season */}
      <div 
        style={{ 
          backgroundColor: 'var(--color-status-optimal-bg)', 
          border: '1px solid var(--color-success)', 
          padding: '0.75rem', 
          borderRadius: '0.5rem',
          marginBottom: '0.75rem' 
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-status-optimal-text)', fontWeight: 600, fontSize: '0.8125rem', marginBottom: '0.2rem' }}>
          <Calendar size={15} />
          <span>{lang === 'th' ? 'ช่วงเวลาท่องเที่ยวที่แนะนำ:' : 'Best Season:'}</span>
        </div>
        <p style={{ fontSize: '0.8125rem', color: 'var(--color-status-optimal-text)', margin: 0 }}>
          {bestSeason.note[lang]}
        </p>
      </div>

      {/* Safety Warnings */}
      {warnings && warnings.length > 0 && (
        <div 
          style={{ 
            backgroundColor: 'var(--color-status-submerged-bg)', 
            border: '1px solid var(--color-danger)', 
            padding: '0.75rem', 
            borderRadius: '0.5rem' 
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-status-submerged-text)', fontWeight: 600, fontSize: '0.8125rem', marginBottom: '0.3rem' }}>
            <AlertTriangle size={15} />
            <span>{lang === 'th' ? 'ข้อควรระวัง & คำแนะนำความปลอดภัย:' : 'Safety Warnings:'}</span>
          </div>
          <ul style={{ paddingLeft: '1.2rem', fontSize: '0.7813rem', color: 'var(--color-status-submerged-text)', margin: 0 }}>
            {warnings.map((w, idx) => (
              <li key={idx} style={{ marginBottom: '0.2rem' }}>{w[lang]}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

interface FacilitiesBarProps {
  facilities: string[];
  lang: Language;
}

export const FacilitiesBar: React.FC<FacilitiesBarProps> = ({ facilities, lang }) => {
  if (!facilities || facilities.length === 0) return null;

  return (
    <div style={{ marginBottom: 'var(--space-4)' }}>
      <h4 style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: 'var(--color-ink)' }}>
        {lang === 'th' ? 'สิ่งอำนวยความสะดวกในพื้นที่:' : 'Available Facilities:'}
      </h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {facilities.map((fac, idx) => (
          <span
            key={idx}
            style={{
              fontSize: '0.75rem',
              backgroundColor: 'var(--color-paper-2)',
              border: '1px solid var(--color-paper-3)',
              color: 'var(--color-ink)',
              padding: '0.25rem 0.6rem',
              borderRadius: '0.4rem'
            }}
          >
            {fac}
          </span>
        ))}
      </div>
    </div>
  );
};
