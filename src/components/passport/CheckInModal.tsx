import React, { useState } from 'react';
import { Geosite, Language } from '../../types';
import { GEOSITES } from '../../data/geosites';
import { X, Navigation, Sparkles } from 'lucide-react';

interface CheckInModalProps {
  initialGeosite: Geosite | null;
  onClose: () => void;
  onConfirmCheckIn: (geositeId: string, isSimulated: boolean) => void;
  lang: Language;
}

export const CheckInModal: React.FC<CheckInModalProps> = ({
  initialGeosite,
  onClose,
  onConfirmCheckIn,
  lang
}) => {
  const [selectedId, setSelectedId] = useState<string>(initialGeosite ? initialGeosite.id : GEOSITES[0].id);
  const [isSuccess, setIsSuccess] = useState(false);

  const targetSite = GEOSITES.find(g => g.id === selectedId) || GEOSITES[0];

  const handleSimulatedCheckIn = () => {
    setIsSuccess(true);
    setTimeout(() => {
      onConfirmCheckIn(selectedId, true);
    }, 1200);
  };

  return (
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
          position: 'relative',
          textAlign: 'center'
        }}
      >
        <button
          onClick={onClose}
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

        {isSuccess ? (
          <div style={{ padding: '1.5rem 0' }}>
            <div className="stamp-badge stamped" style={{ width: '5rem', height: '5rem', fontSize: '2.5rem', margin: '0 auto 1rem auto' }}>
              {targetSite.passportStamp.icon}
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>
              🎉 {lang === 'th' ? 'ประทับตราสำเร็จ!' : 'Stamp Collected!'}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-ink-2)' }}>
              {targetSite.name[lang]}
            </p>
          </div>
        ) : (
          <>
            <div style={{ display: 'inline-flex', padding: '0.5rem', backgroundColor: 'var(--color-paper-2)', borderRadius: '50%', marginBottom: '0.75rem', color: 'var(--color-accent)' }}>
              <Navigation size={28} />
            </div>

            <h3 style={{ fontSize: '1.125rem', color: 'var(--color-ink)', marginBottom: '0.5rem' }}>
              {lang === 'th' ? 'เช็กอินพาสปอร์ตอุทยานธรณี' : 'Geopark Passport Check-in'}
            </h3>

            <p style={{ fontSize: '0.8125rem', color: 'var(--color-ink-2)', marginBottom: '1rem' }}>
              {lang === 'th'
                ? 'เลือกสถานที่เพื่อจำลองการเช็กอินด้วย GPS เมื่อเดินทางไปถึงแหล่งธรณีวิทยาจริง'
                : 'Select location to simulate GPS check-in at the geosite.'}
            </p>

            <div style={{ marginBottom: '1.25rem', textAlign: 'left' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-ink-2)', display: 'block', marginBottom: '0.35rem' }}>
                {lang === 'th' ? 'เลือกสถานที่ธรณีวิทยา:' : 'Select Geosite:'}
              </label>
              <select
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.625rem',
                  borderRadius: '0.5rem',
                  border: '1px solid var(--color-paper-3)',
                  backgroundColor: 'var(--color-paper-2)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: 'var(--color-ink)'
                }}
              >
                {GEOSITES.map(g => {
                  const amphoeName = g.amphoe === 'pho-sai' ? (lang === 'th' ? 'อ.โพธิ์ไทร' : 'Pho Sai')
                    : g.amphoe === 'khong-chiam' ? (lang === 'th' ? 'อ.โขงเจียม' : 'Khong Chiam')
                    : g.amphoe === 'sri-mueang-mai' ? (lang === 'th' ? 'อ.ศรีเมืองใหม่' : 'Sri Mueang Mai')
                    : (lang === 'th' ? 'อ.สิรินธร' : 'Sirindhorn');
                  return (
                    <option key={g.id} value={g.id}>
                      {g.passportStamp.icon} {g.name[lang]} ({amphoeName})
                    </option>
                  );
                })}
              </select>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-paper-2)',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <div className="stamp-badge" style={{ width: '2.75rem', height: '2.75rem', fontSize: '1.35rem', flexShrink: 0 }}>
                {targetSite.passportStamp.icon}
              </div>
              <div style={{ textAlign: 'left', minWidth: 0 }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-ink)' }}>
                  {targetSite.passportStamp.stampTitle[lang]}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-ink-3)' }}>
                  📍 {targetSite.name[lang]}
                </div>
              </div>
            </div>

            <button
              onClick={handleSimulatedCheckIn}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }}
            >
              <Sparkles size={18} />
              <span>{lang === 'th' ? 'ยืนยันเช็กอินสะสม Stamp' : 'Confirm Check-in Stamp'}</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
