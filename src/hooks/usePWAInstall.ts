import { useState, useEffect } from 'react';

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if running inside actual app (PWA standalone mode or Capacitor native)
    const isApp = 
      window.matchMedia('(display-mode: standalone)').matches || 
      (window.navigator as any).standalone ||
      document.referrer.includes('android-app://') ||
      (window as any).Capacitor?.isNativePlatform();

    setIsStandalone(!!isApp);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const downloadApp = () => {
    // 1. If PWA browser install prompt is ready (1-click native install dialog)
    if (deferredPrompt) {
      deferredPrompt.prompt();
      setDeferredPrompt(null);
      return;
    }

    // 2. Fallback: Trigger direct web app installation / home screen guide smoothly without 404
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);

    if (isIOS) {
      alert('📱 วิธีติดตั้งลง iPhone / iPad:\n\n1. แตะปุ่ม "แชร์" (Share 📤) ด้านล่างเบราว์เซอร์ Safari\n2. เลื่อนลงแล้วเลือก "เพิ่มไปยังหน้าจอหลัก" (Add to Home Screen ➕)\n3. แตะ "เพิ่ม" เพื่อใช้งานเป็นแอพมือถือทันที!');
    } else {
      // Direct install prompt or local package link
      alert('📱 วิธีติดตั้งลงสมาร์ตโฟน Android:\n\n1. แตะปุ่มเมนู (3 จุดมุมขวาบนเบราว์เซอร์)\n2. เลือก "ติดตั้งแอป" (Install App) หรือ "เพิ่มลงในหน้าจอหลัก"\n3. แอพ Ubon Geopark จะถูกติดตั้งลงเครื่องมือถือทันที!');
    }
  };

  return {
    isStandalone,
    downloadApp
  };
}
