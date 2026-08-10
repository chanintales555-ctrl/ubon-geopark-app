import React from 'react';
import { Language } from '../../types';
import { MapPin, Layers, Award, Landmark } from 'lucide-react';

interface QuickStatsProps {
  lang: Language;
}

export const QuickStats: React.FC<QuickStatsProps> = ({ lang }) => {
  const stats = [
    { icon: Layers, value: '46', label: lang === 'th' ? 'แหล่งธรณีวิทยา' : 'Registered Geosites', color: 'var(--color-accent)' },
    { icon: MapPin, value: '4', label: lang === 'th' ? 'อำเภออุทยานธรณี' : 'Geopark Districts', color: 'var(--color-ink)' },
    { icon: Landmark, value: '1,829', label: lang === 'th' ? 'ตารางกิโลเมตร' : 'Square Kilometers', color: 'var(--color-cat-nature)' },
    { icon: Award, value: 'UNESCO', label: lang === 'th' ? 'เป้าหมายมรดกโลก' : 'Aspiring Global Geopark', color: 'var(--color-cat-archaeology)' }
  ];

  return (
    <div style={{ padding: '0 var(--space-4)', marginBottom: 'var(--space-6)' }}>
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: 'var(--space-3)',
          backgroundColor: '#ffffff',
          padding: 'var(--space-4)',
          borderRadius: '0.75rem',
          border: '1px solid var(--color-paper-3)',
          boxShadow: '0 2px 8px rgba(28, 49, 68, 0.04)'
        }}
      >
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div 
                style={{ 
                  width: '2.5rem', 
                  height: '2.5rem', 
                  borderRadius: '0.5rem', 
                  backgroundColor: 'var(--color-paper-2)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: stat.color,
                  flexShrink: 0
                }}
              >
                <Icon size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-mono)', lineHeight: 1.1, color: 'var(--color-ink)' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--color-ink-2)', lineHeight: 1.2 }}>
                  {stat.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
