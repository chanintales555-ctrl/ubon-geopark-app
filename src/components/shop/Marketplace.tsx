import React, { useState } from 'react';
import { Geoproduct, Language } from '../../types';
import { GEOPRODUCTS } from '../../data/geoproducts';
import { ProductCard } from './ProductCard';
import { ShoppingBag, Phone, X } from 'lucide-react';

interface MarketplaceProps {
  lang: Language;
}

export const Marketplace: React.FC<MarketplaceProps> = ({ lang }) => {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [activeProduct, setActiveProduct] = useState<Geoproduct | null>(null);

  const categories = [
    { id: 'all', label: { th: 'ทั้งหมด', en: 'All' } },
    { id: 'textile', label: { th: '🧵 ผ้าทอมือ', en: 'Textiles' } },
    { id: 'food', label: { th: '🍲 อาหารชุมชน', en: 'Local Food' } },
    { id: 'handicraft', label: { th: '🗿 หัตถกรรม', en: 'Handicrafts' } },
    { id: 'service', label: { th: '⛵ เรือนำเที่ยว', en: 'Tourism Services' } }
  ];

  const filteredProducts = selectedCat === 'all'
    ? GEOPRODUCTS
    : GEOPRODUCTS.filter(p => p.category === selectedCat);

  return (
    <div style={{ padding: 'var(--space-4)', paddingBottom: 'calc(5rem + var(--sab))' }}>
      {/* Title */}
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <h2 style={{ fontSize: '1.25rem', color: 'var(--color-ink)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <ShoppingBag size={22} color="var(--color-accent)" />
          <span>{lang === 'th' ? 'สินค้า & บริการชุมชน Geopark' : 'Geoproducts Marketplace'}</span>
        </h2>
        <p style={{ fontSize: '0.8125rem', color: 'var(--color-ink-3)', margin: 0 }}>
          {lang === 'th' ? 'สนับสนุนผลิตภัณฑ์ OTOP และภูมิปัญญาท้องถิ่น 4 อำเภอ' : 'Supporting local OTOP products & community tourism'}
        </p>
      </div>

      {/* Filter Category Scroll */}
      <div className="hide-scrollbar" style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto', marginBottom: 'var(--space-4)' }}>
        {categories.map((cat) => {
          const isSelected = selectedCat === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              style={{
                padding: '0.3rem 0.75rem',
                borderRadius: '1rem',
                fontSize: '0.7813rem',
                fontWeight: isSelected ? 600 : 400,
                backgroundColor: isSelected ? 'var(--color-accent)' : 'var(--color-paper-2)',
                color: isSelected ? '#ffffff' : 'var(--color-ink-2)',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {cat.label[lang]}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 'var(--space-4)' }}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            lang={lang}
            onSelectProduct={(p) => setActiveProduct(p)}
          />
        ))}
      </div>

      {/* Product Detail Modal */}
      {activeProduct && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(28, 49, 68, 0.75)',
            backdropFilter: 'blur(6px)',
            zIndex: 3000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem'
          }}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '1rem',
              width: '100%',
              maxWidth: '380px',
              padding: '1.25rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setActiveProduct(null)}
              style={{
                position: 'absolute',
                top: '0.75rem',
                right: '0.75rem',
                background: 'none',
                border: 'none',
                color: 'var(--color-ink-3)',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>

            <div style={{ height: '160px', width: '100%', borderRadius: '0.5rem', overflow: 'hidden', marginBottom: '0.75rem' }}>
              <img src={activeProduct.image} alt={activeProduct.name[lang]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <h3 style={{ fontSize: '1.125rem', color: 'var(--color-ink)', marginBottom: '0.25rem' }}>
              {activeProduct.name[lang]}
            </h3>

            <p style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600, marginBottom: '0.5rem' }}>
              📍 {activeProduct.villageName[lang]}
            </p>

            <p style={{ fontSize: '0.8125rem', color: 'var(--color-ink-2)', lineHeight: 1.4, marginBottom: '1rem' }}>
              {activeProduct.description[lang]}
            </p>

            <div style={{ backgroundColor: 'var(--color-paper-2)', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-ink-3)' }}>{lang === 'th' ? 'ราคาโดยประมาณ:' : 'Estimated Price:'}</div>
              <div style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-accent)' }}>{activeProduct.priceRange}</div>
            </div>

            {activeProduct.contactPhone && (
              <a
                href={`tel:${activeProduct.contactPhone}`}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
              >
                <Phone size={16} />
                <span>{lang === 'th' ? `โทรติดต่อ: ${activeProduct.contactPhone}` : `Call: ${activeProduct.contactPhone}`}</span>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
