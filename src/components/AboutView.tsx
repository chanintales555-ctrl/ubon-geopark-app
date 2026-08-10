import React from 'react';
import { Language } from '../types';
import { IMAGE_CREDITS } from '../data/image-credits';
import { Camera, Landmark, Globe, ExternalLink } from 'lucide-react';

interface AboutViewProps {
  lang: Language;
}

export const AboutView: React.FC<AboutViewProps> = ({ lang }) => {
  return (
    <div style={{ padding: 'var(--space-4)', paddingBottom: 'calc(5rem + var(--sab))' }}>
      {/* Geopark Profile Header */}
      <div 
        style={{ 
          backgroundColor: 'var(--color-ink)', 
          color: '#ffffff', 
          padding: '1.5rem', 
          borderRadius: '0.875rem',
          textAlign: 'center',
          marginBottom: 'var(--space-6)',
          boxShadow: '0 4px 15px rgba(28, 49, 68, 0.15)'
        }}
      >
        <img 
          src="/assets/logo/geopark-logo.svg" 
          alt="Ubon Geopark Logo" 
          style={{ height: '60px', width: 'auto', marginBottom: '0.75rem' }} 
        />
        <h2 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '0.25rem' }}>
          {lang === 'th' ? 'อุทยานธรณีอุบลราชธานี' : 'Ubon Ratchathani Geopark'}
        </h2>
        <p style={{ fontSize: '0.8125rem', color: 'var(--color-accent-subtle)', marginBottom: '0.75rem' }}>
          {lang === 'th' ? 'มรดกธรณีวิทยาหินทรายแห่งเดียวในเอเชียตะวันออกเฉียงใต้' : 'Aspiring UNESCO Global Geopark in Thailand'}
        </p>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.3rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem' }}>
          <Landmark size={14} color="var(--color-accent)" />
          <span>{lang === 'th' ? 'องค์การบริหารส่วนจังหวัดอุบลราชธานี (อบจ.)' : 'Ubon Ratchathani PAO'}</span>
        </div>
      </div>

      {/* Geopark Story & Mission */}
      <div className="geopark-card" style={{ padding: '1rem', marginBottom: 'var(--space-4)' }}>
        <h3 style={{ fontSize: '1rem', color: 'var(--color-ink)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <Globe size={18} color="var(--color-accent)" />
          <span>{lang === 'th' ? 'เกี่ยวกับอุทยานธรณีอุบลราชธานี' : 'About Ubon Geopark'}</span>
        </h3>
        <p style={{ fontSize: '0.8125rem', color: 'var(--color-ink-2)', lineHeight: 1.5, marginBottom: '0.5rem' }}>
          {lang === 'th'
            ? 'อุทยานธรณีอุบลราชธานี ครอบคลุมพื้นที่ 1,829 ตารางกิโลเมตร ใน 4 อำเภอ (โพธิ์ไทร, ศรีเมืองใหม่, โขงเจียม, สิรินธร) โดดเด่นด้วยภูมิประเทศหินทรายยุคครีเทเชียส สามพันโบก ผาสามหมื่นรู ภาพเขียนสีโบราณผาแต้ม และแหล่งขุดค้นซากไดโนเสาร์'
            : 'Covering 1,829 sq.km across 4 districts (Pho Sai, Sri Mueang Mai, Khong Chiam, Sirindhorn), featuring Mesozoic sandstone landforms, Sam Phan Bok potholes, 3,000-year-old rock art, and dinosaur fossils.'}
        </p>
        <a
          href="https://ubongeopark.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
        >
          <span>{lang === 'th' ? 'เข้าชมเว็บไซต์หลัก ubongeopark.org' : 'Visit ubongeopark.org'}</span>
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Image Attribution Credits */}
      <div className="geopark-card" style={{ padding: '1rem' }}>
        <h3 style={{ fontSize: '1rem', color: 'var(--color-ink)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <Camera size={18} color="var(--color-accent)" />
          <span>{lang === 'th' ? 'เครดิตรูปภาพจริง & สิทธิ์การใช้งาน' : 'Real Image Attribution Credits'}</span>
        </h3>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-ink-3)', marginBottom: '0.75rem' }}>
          {lang === 'th'
            ? 'แอปพลิเคชันนี้ใช้รูปภาพถ่ายจริงของสถานที่และมรดกทางวัฒนธรรม โดยระบุเครดิตและสิทธิ์การใช้งานอย่างถูกต้อง:'
            : 'All real photos used in this app comply with open licenses and proper attributions:'}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {IMAGE_CREDITS.map((credit, idx) => (
            <div key={idx} style={{ padding: '0.5rem', backgroundColor: 'var(--color-paper-2)', borderRadius: '0.4rem', fontSize: '0.7188rem' }}>
              <div style={{ fontWeight: 600, color: 'var(--color-ink)' }}>📷 {credit.locationName}</div>
              <div style={{ color: 'var(--color-ink-2)' }}>{lang === 'th' ? 'ผู้ถ่าย/ที่มา: ' : 'Author/Source: '}{credit.author}</div>
              <div style={{ color: 'var(--color-ink-3)', fontSize: '0.65rem' }}>{credit.license}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
