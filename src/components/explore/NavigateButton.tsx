import React from 'react';
import { Language } from '../../types';
import { Navigation } from 'lucide-react';

interface NavigateButtonProps {
  lat: number;
  lng: number;
  label?: string;
  lang: Language;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium';
}

export const NavigateButton: React.FC<NavigateButtonProps> = ({
  lat,
  lng,
  label,
  lang,
  variant = 'primary',
  size = 'medium'
}) => {
  const handleNavigate = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const defaultLabel = lang === 'th' ? 'นำทาง GPS' : 'Navigate GPS';

  return (
    <button
      onClick={handleNavigate}
      className={`btn btn-${variant}`}
      style={{
        padding: size === 'small' ? '0.3rem 0.6rem' : '0.5rem 1rem',
        fontSize: size === 'small' ? '0.75rem' : '0.875rem'
      }}
    >
      <Navigation size={size === 'small' ? 13 : 16} />
      <span>{label || defaultLabel}</span>
    </button>
  );
};
