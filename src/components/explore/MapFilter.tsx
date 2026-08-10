import React from 'react';
import { Amphoe, GeositeCategory, Language } from '../../types';

interface MapFilterProps {
  selectedAmphoe: Amphoe | 'all';
  selectedCategory: GeositeCategory | 'all';
  onSelectAmphoe: (amphoe: Amphoe | 'all') => void;
  onSelectCategory: (cat: GeositeCategory | 'all') => void;
  lang: Language;
  viewMode: 'map' | 'list';
  onToggleViewMode: () => void;
}

export const MapFilter: React.FC<MapFilterProps> = ({
  selectedAmphoe,
  selectedCategory,
  onSelectAmphoe,
  onSelectCategory,
  lang,
  viewMode,
  onToggleViewMode
}) => {
  const amphoeList: { id: Amphoe | 'all'; label: { th: string; en: string } }[] = [
    { id: 'all', label: { th: 'ทุกอำเภอ (4)', en: 'All 4 Districts' } },
    { id: 'pho-sai', label: { th: 'อ.โพธิ์ไทร (14)', en: 'Pho Sai' } },
    { id: 'khong-chiam', label: { th: 'อ.โขงเจียม (18)', en: 'Khong Chiam' } },
    { id: 'sri-mueang-mai', label: { th: 'อ.ศรีเมืองใหม่ (8)', en: 'Sri Mueang Mai' } },
    { id: 'sirindhorn', label: { th: 'อ.สิรินธร (6)', en: 'Sirindhorn' } }
  ];

  const categoryList: { id: GeositeCategory | 'all'; label: { th: string; en: string }; icon: string }[] = [
    { id: 'all', label: { th: 'ทุกหมวดหมู่', en: 'All Categories' }, icon: '✨' },
    { id: 'geomorphology', label: { th: 'ธรณีสัณฐาน', en: 'Geomorphology' }, icon: '🪨' },
    { id: 'fossil', label: { th: 'ซากดึกดำบรรพ์', en: 'Fossil' }, icon: '🦕' },
    { id: 'archaeology', label: { th: 'โบราณคดี', en: 'Archaeology' }, icon: '🎨' },
    { id: 'nature', label: { th: 'ธรรมชาติวิทยา', en: 'Nature' }, icon: '🌿' },
    { id: 'culture', label: { th: 'วัฒนธรรม', en: 'Culture' }, icon: '🛕' }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--color-paper-3)', padding: '0.6rem 1rem' }}>
      {/* Top row: View toggle & stats */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-ink-2)' }}>
          {lang === 'th' ? 'กรองแหล่งธรณีวิทยา:' : 'Filter Geosites:'}
        </span>

        <button
          onClick={onToggleViewMode}
          className="btn btn-secondary"
          style={{ padding: '0.25rem 0.65rem', fontSize: '0.75rem' }}
        >
          {viewMode === 'map' ? (lang === 'th' ? '📋 ดูแบบรายการ' : '📋 List View') : (lang === 'th' ? '🗺️ ดูแบบแผนที่' : '🗺️ Map View')}
        </button>
      </div>

      {/* Amphoe Filter Scroll */}
      <div className="hide-scrollbar" style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto', marginBottom: '0.4rem' }}>
        {amphoeList.map((item) => {
          const isSelected = selectedAmphoe === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectAmphoe(item.id)}
              style={{
                padding: '0.25rem 0.6rem',
                borderRadius: '1rem',
                fontSize: '0.75rem',
                fontWeight: isSelected ? 600 : 400,
                backgroundColor: isSelected ? 'var(--color-ink)' : 'var(--color-paper-2)',
                color: isSelected ? '#ffffff' : 'var(--color-ink-2)',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {item.label[lang]}
            </button>
          );
        })}
      </div>

      {/* Category Filter Scroll */}
      <div className="hide-scrollbar" style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto' }}>
        {categoryList.map((item) => {
          const isSelected = selectedCategory === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectCategory(item.id)}
              style={{
                padding: '0.2rem 0.55rem',
                borderRadius: '1rem',
                fontSize: '0.7188rem',
                fontWeight: isSelected ? 600 : 400,
                backgroundColor: isSelected ? 'var(--color-accent)' : 'var(--color-paper-2)',
                color: isSelected ? '#ffffff' : 'var(--color-ink-2)',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}
            >
              <span>{item.icon}</span>
              <span>{item.label[lang]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
