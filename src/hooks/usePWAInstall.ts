import { useState, useEffect } from 'react';

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already running as standalone app
    if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone) {
      setIsInstalled(true);
      return;
    }

    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const promptInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        setIsInstalled(true);
        setIsInstallable(false);
      }
      setDeferredPrompt(null);
    } else if (isIOS) {
      alert('📱 สำหรับ iPhone / iPad (iOS):\n\n1. แตะปุ่ม "แชร์" (Share icon 📤) ด้านล่างของ Safari\n2. เลื่อนลงแล้วเลือก "เพิ่มไปยังหน้าจอหลัก" (Add to Home Screen ➕)\n3. แตะ "เพิ่ม" (Add) เพื่อติดตั้งแอพลงมือถือทันที!');
    } else {
      alert('📱 วิธีติดตั้งแอพลงมือถือ (Android/Chrome):\n\nแตะเมนู 3 จุดมุมบนขวาในเบราวเซอร์ แล้วเลือก "ติดตั้งแอป" หรือ "เพิ่มลงในหน้าจอหลัก" เพื่อเปิดใช้งานแบบแอพมือถือปุ่มเดียว!');
    }
  };

  return {
    isInstallable,
    isIOS,
    isInstalled,
    promptInstall
  };
}
