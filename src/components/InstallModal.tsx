import React from 'react';
import { Language } from '../types';
import { X, Smartphone, Download, Share, PlusSquare } from 'lucide-react';

interface InstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onNativeInstall?: () => void;
}

export const InstallModal: React.FC<InstallModalProps> = ({
  isOpen,
  onClose,
  lang,
  onNativeInstall
}) => {
  if (!isOpen) return null;

  const isIOS = /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(4px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '1.25rem',
          maxWidth: '440px',
          width: '100%',
          padding: '1.5rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          position: 'relative',
          animation: 'fadeIn 0.25s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'var(--color-paper-2)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--color-ink)'
          }}
        >
          <X size={18} />
        </button>

        {/* Header Icon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '1rem',
              backgroundColor: '#ecfdf5',
              color: '#059669',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <Smartphone size={26} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-ink)', margin: 0 }}>
              {lang === 'th' ? 'ติดตั้งแอปอุทยานธรณีอุบลฯ' : 'Install Ubon Geopark App'}
            </h2>
            <span style={{ fontSize: '0.7813rem', color: 'var(--color-ink-2)' }}>
              {lang === 'th' ? 'ใช้งานแบบแอปมือถือเต็มรูปแบบ ไม่ต้องผ่าน Store' : 'Full Mobile App Experience'}
            </span>
          </div>
        </div>

        {/* Instructions */}
        <div
          style={{
            backgroundColor: 'var(--color-paper)',
            borderRadius: '0.875rem',
            padding: '1rem',
            marginBottom: '1.25rem',
            border: '1px solid var(--color-paper-3)'
          }}
        >
          {isIOS ? (
            <div>
              <p style={{ fontSize: '0.8438rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
                📲 ขั้นตอนติดตั้งบน iPhone / iPad (iOS):
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-ink-2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Share size={16} color="#0284c7" />
                  <span>1. แตะปุ่ม <b>"แชร์" (Share 📤)</b> ด้านล่าง Safari</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <PlusSquare size={16} color="#059669" />
                  <span>2. เลือก <b>"เพิ่มไปยังหน้าจอหลัก" (Add to Home Screen ➕)</b></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Download size={16} color="#d97706" />
                  <span>3. แตะ <b>"เพิ่ม" (Add)</b> ที่มุมขวาบนเพื่อติดตั้งเสร็จสิ้น</span>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p style={{ fontSize: '0.8438rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
                📲 ขั้นตอนติดตั้งบนสมาร์ตโฟน Android:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-ink-2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Download size={16} color="#059669" />
                  <span>1. กดปุ่ม <b>"กดติดตั้งลงมือถือทันที"</b> ด้านล่างนี้</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Smartphone size={16} color="#0284c7" />
                  <span>2. หรือแตะเมนู <b>3 จุดมุมบนขวา</b> ใน Chrome แล้วเลือก <b>"ติดตั้งแอป" (Install App)</b></span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Button */}
        <button
          onClick={() => {
            if (onNativeInstall) onNativeInstall();
            onClose();
          }}
          className="btn"
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#059669',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '0.9375rem',
            borderRadius: '0.75rem',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            boxShadow: '0 4px 12px rgba(5, 150, 105, 0.4)',
            cursor: 'pointer'
          }}
        >
          <Download size={18} />
          <span>{lang === 'th' ? 'กดติดตั้งลงมือถือทันที' : 'Install Mobile App Now'}</span>
        </button>
      </div>
    </div>
  );
};
