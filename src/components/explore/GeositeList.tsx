import React from 'react';
import { Geosite, Language } from '../../types';
import { GeositeCard } from './GeositeCard';

interface GeositeListProps {
  geosites: Geosite[];
  lang: Language;
  onSelectGeosite: (geosite: Geosite) => void;
  stamps: string[];
}

export const GeositeList: React.FC<GeositeListProps> = ({ geosites, lang, onSelectGeosite, stamps }) => {
  if (geosites.length === 0) {
    return (
      <div style={{ padding: 'var(--space-8) var(--space-4)', textAlign: 'center', color: 'var(--color-ink-3)' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🔍</div>
        <h3>{lang === 'th' ? 'ไม่พบแหล่งธรณีวิทยาที่ตรงกับตัวกรอง' : 'No geosites found matching filters'}</h3>
        <p style={{ fontSize: '0.875rem' }}>{lang === 'th' ? 'ลองเปลี่ยนการเลือกอำเภอหรือหมวดหมู่' : 'Try changing district or category filter'}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', paddingBottom: 'calc(4rem + var(--sab))' }}>
      <div style={{ fontSize: '0.8125rem', color: 'var(--color-ink-3)', fontWeight: 600 }}>
        {lang === 'th' ? `แสดงทั้งหมด ${geosites.length} แหล่ง` : `Showing ${geosites.length} sites`}
      </div>

      {geosites.map((geosite) => (
        <GeositeCard
          key={geosite.id}
          geosite={geosite}
          lang={lang}
          onSelectGeosite={onSelectGeosite}
          hasStamp={stamps.includes(geosite.id)}
        />
      ))}
    </div>
  );
};
