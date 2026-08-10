import React from 'react';
import { Language } from '../../types';
import { getCurrentSeasonalStatus } from '../../data/seasonal-calendar';
import { Calendar, AlertCircle, CheckCircle2 } from 'lucide-react';

interface SeasonalBannerProps {
  lang: Language;
}

export const SeasonalBanner: React.FC<SeasonalBannerProps> = ({ lang }) => {
  const status = getCurrentSeasonalStatus();

  const getStatusColor = () => {
    switch (status.statusType) {
      case 'optimal': return { bg: 'var(--color-status-optimal-bg)', border: 'var(--color-success)', text: 'var(--color-status-optimal-text)', icon: CheckCircle2 };
      case 'transitional': return { bg: 'var(--color-status-transitional-bg)', border: 'var(--color-warning)', text: 'var(--color-status-transitional-text)', icon: AlertCircle };
      case 'submerged': return { bg: 'var(--color-status-submerged-bg)', border: 'var(--color-danger)', text: 'var(--color-status-submerged-text)', icon: AlertCircle };
    }
  };

  const styleConfig = getStatusColor();
  const IconComponent = styleConfig.icon;

  return (
    <div
      style={{
        margin: 'var(--space-4)',
        padding: 'var(--space-3) var(--space-4)',
        borderRadius: '0.75rem',
        backgroundColor: styleConfig.bg,
        border: `1px solid ${styleConfig.border}`,
        color: styleConfig.text
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, fontSize: '0.875rem' }}>
          <IconComponent size={18} />
          <span>{status.seasonName[lang]}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', opacity: 0.85 }}>
          <Calendar size={13} />
          <span>{new Date().toLocaleString(lang === 'th' ? 'th-TH' : 'en-US', { month: 'long' })}</span>
        </div>
      </div>

      <p style={{ fontSize: '0.8125rem', color: styleConfig.text, marginBottom: '0.25rem', lineHeight: 1.4 }}>
        <strong>{status.waterLevelStatus[lang]}</strong>
      </p>

      <p style={{ fontSize: '0.75rem', color: styleConfig.text, opacity: 0.9, margin: 0, lineHeight: 1.35 }}>
        💡 {status.recommendation[lang]}
      </p>
    </div>
  );
};
