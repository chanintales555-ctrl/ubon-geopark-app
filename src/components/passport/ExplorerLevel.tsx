import React from 'react';
import { ExplorerLevelInfo, Language } from '../../types';


interface ExplorerLevelProps {
  explorerLevel: ExplorerLevelInfo;
  stampCount: number;
  lang: Language;
}

export const ExplorerLevel: React.FC<ExplorerLevelProps> = ({ explorerLevel, stampCount, lang }) => {
  const percent = Math.min(Math.round((stampCount / 46) * 100), 100);

  return (
    <div
      style={{
        backgroundColor: 'var(--color-ink)',
        color: '#ffffff',
        padding: '1.25rem',
        borderRadius: '0.875rem',
        marginBottom: 'var(--space-4)',
        boxShadow: '0 4px 15px rgba(28, 49, 68, 0.15)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ fontSize: '2rem', lineHeight: 1 }}>{explorerLevel.badgeIcon}</span>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-paper-2)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Level {explorerLevel.level} Explorer
            </div>
            <h3 style={{ fontSize: '1.125rem', color: '#ffffff', margin: 0, fontFamily: 'var(--font-display)' }}>
              {explorerLevel.title[lang]}
            </h3>
          </div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--color-accent-subtle)' }}>
            {stampCount}<span style={{ fontSize: '0.875rem', opacity: 0.7 }}>/46</span>
          </div>
          <div style={{ fontSize: '0.6875rem', color: 'var(--color-paper-3)' }}>
            {lang === 'th' ? 'ตราประทับที่สะสม' : 'Stamps Collected'}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div>
        <div style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '4px', overflow: 'hidden' }}>
          <div
            style={{
              height: '100%',
              width: `${percent}%`,
              backgroundColor: 'var(--color-accent)',
              borderRadius: '4px',
              transition: 'width 0.5s ease'
            }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem', color: 'var(--color-paper-3)', marginTop: '0.35rem' }}>
          <span>{percent}% {lang === 'th' ? 'ความสำเร็จ' : 'Completed'}</span>
          <span>{46 - stampCount} {lang === 'th' ? 'ตราประทับคงเหลือ' : 'Remaining'}</span>
        </div>
      </div>
    </div>
  );
};
