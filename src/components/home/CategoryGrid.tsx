import React from 'react';
import { GeositeCategory, Language } from '../../types';
import { Layers } from 'lucide-react';

interface CategoryGridProps {
  lang: Language;
  onSelectCategory: (cat: GeositeCategory) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ lang, onSelectCategory }) => {
  const categories: { id: GeositeCategory; name: { th: string; en: string }; icon: string; count: number; desc: { th: string; en: string } }[] = [
    {
      id: 'geomorphology',
      name: { th: 'ธรณีสัณฐาน & กุมภลักษณ์', en: 'Geomorphology & Potholes' },
      icon: '🪨',
      count: 24,
      desc: { th: 'สามพันโบก, ปากบ้อง, เสาเฉลียง', en: 'Potholes, Gorges, Pillars' }
    },
    {
      id: 'fossil',
      name: { th: 'ซากดึกดำบรรพ์ไดโนเสาร์', en: 'Dinosaur Fossils' },
      icon: '🦕',
      count: 1,
      desc: { th: 'แหล่งโคกผาส่วม ยุคครีเทเชียส', en: 'Khok Pha Suam Cretaceous Site' }
    },
    {
      id: 'archaeology',
      name: { th: 'โบราณคดี & ภาพเขียนสี', en: 'Archaeology & Rock Art' },
      icon: '🎨',
      count: 3,
      desc: { th: 'ภาพเขียนสีผาแต้ม 3,000 ปี', en: 'Pha Taem 3,000 Yr Paintings' }
    },
    {
      id: 'nature',
      name: { th: 'ธรรมชาติวิทยา & น้ำตก', en: 'Natural Heritage & Falls' },
      icon: '🌿',
      count: 14,
      desc: { th: 'แม่น้ำสองสี, น้ำตกแสงจันทร์', en: 'Two-Color River, Waterfalls' }
    },
    {
      id: 'culture',
      name: { th: 'วัฒนธรรม & ชุมชน', en: 'Culture & Heritage' },
      icon: '🛕',
      count: 4,
      desc: { th: 'วัดเรืองแสง, ตำนานท้องถิ่น', en: 'Glowing Temple, Traditions' }
    }
  ];

  return (
    <div style={{ padding: '0 var(--space-4)', marginBottom: 'var(--space-8)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: 'var(--space-3)' }}>
        <Layers size={18} color="var(--color-accent)" />
        <h2 style={{ fontSize: '1.125rem' }}>
          {lang === 'th' ? 'สำรวจตามประเภทมรดกธรณี' : 'Explore by Heritage Category'}
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-3)' }}>
        {categories.map((cat, idx) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className="geopark-card"
            style={{
              padding: '0.875rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '110px',
              gridColumn: idx === categories.length - 1 ? '1 / -1' : 'auto'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>{cat.icon}</span>
              <span 
                style={{ 
                  fontSize: '0.7rem', 
                  fontWeight: 700, 
                  backgroundColor: 'var(--color-paper-2)',
                  color: 'var(--color-ink-2)',
                  padding: '0.15rem 0.45rem',
                  borderRadius: '1rem'
                }}
              >
                {cat.count} {lang === 'th' ? 'แห่ง' : 'sites'}
              </span>
            </div>

            <div>
              <h3 style={{ fontSize: '0.875rem', marginBottom: '0.15rem', color: 'var(--color-ink)' }}>
                {cat.name[lang]}
              </h3>
              <p style={{ fontSize: '0.6875rem', color: 'var(--color-ink-3)', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {cat.desc[lang]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
