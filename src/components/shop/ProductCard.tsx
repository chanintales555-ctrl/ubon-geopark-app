import React from 'react';
import { Geoproduct, Language } from '../../types';
import { MapPin } from 'lucide-react';

interface ProductCardProps {
  product: Geoproduct;
  lang: Language;
  onSelectProduct: (p: Geoproduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, lang, onSelectProduct }) => {
  return (
    <div
      onClick={() => onSelectProduct(product)}
      className="geopark-card"
      style={{ cursor: 'pointer', overflow: 'hidden' }}
    >
      <div style={{ position: 'relative', height: '140px', width: '100%' }}>
        <img
          src={product.image}
          alt={product.name[lang]}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <span
          style={{
            position: 'absolute',
            top: '0.4rem',
            left: '0.4rem',
            backgroundColor: 'var(--color-ink)',
            color: '#ffffff',
            padding: '0.2rem 0.5rem',
            borderRadius: '1rem',
            fontSize: '0.6875rem',
            fontWeight: 600
          }}
        >
          {product.category === 'textile' && '🧵 ผ้าทอมือ'}
          {product.category === 'food' && '🍲 แปรรูปอาหาร'}
          {product.category === 'handicraft' && '🗿 หัตถกรรม'}
          {product.category === 'service' && '⛵ บริการนำเที่ยว'}
        </span>
      </div>

      <div style={{ padding: '0.75rem' }}>
        <h3 style={{ fontSize: '0.9375rem', marginBottom: '0.25rem', color: 'var(--color-ink)' }}>
          {product.name[lang]}
        </h3>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', color: 'var(--color-ink-3)', marginBottom: '0.5rem' }}>
          <MapPin size={12} color="var(--color-accent)" />
          <span>{product.villageName[lang]}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px dashed var(--color-paper-3)', paddingTop: '0.4rem' }}>
          <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-accent)' }}>
            {product.priceRange}
          </span>
          <button className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.7188rem' }}>
            <span>{lang === 'th' ? 'รายละเอียด' : 'View'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
