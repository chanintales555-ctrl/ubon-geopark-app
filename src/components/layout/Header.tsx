import React from 'react';
import { Language } from '../../types';
import { Globe } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onToggleLang }) => {
  return (
    <header 
      style={{
        backgroundColor: 'var(--color-ink)',
        color: '#ffffff',
        paddingTop: 'calc(var(--space-3) + var(--sat))',
        paddingBottom: 'var(--space-3)',
        paddingLeft: 'var(--space-4)',
        paddingRight: 'var(--space-4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <img 
          src="/assets/logo/geopark-logo-light.svg" 
          alt="Geopark Logo" 
          style={{ height: '38px', width: 'auto' }}
        />
        <div>
          <h1 style={{ fontSize: '0.95rem', color: '#ffffff', lineHeight: 1.1, margin: 0, fontFamily: 'var(--font-display)' }}>
            {lang === 'th' ? 'อุทยานธรณีอุบลราชธานี' : 'UBON GEOPARK'}
          </h1>
          <span style={{ fontSize: '0.65rem', color: 'var(--color-paper-3)', letterSpacing: '0.04em' }}>
            {lang === 'th' ? 'องค์การบริหารส่วนจังหวัดอุบลราชธานี' : 'Ubon Ratchathani PAO'}
          </span>
        </div>
      </div>

      <button
        onClick={onToggleLang}
        className="btn"
        style={{
          padding: '0.35rem 0.65rem',
          fontSize: '0.8125rem',
          backgroundColor: 'rgba(255, 255, 255, 0.12)',
          color: '#ffffff',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem'
        }}
        aria-label="Toggle language"
      >
        <Globe size={14} />
        <span>{lang === 'th' ? 'EN' : 'TH'}</span>
      </button>
    </header>
  );
};
