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
    // 1. Trigger PWA browser native install dialog if available
    if (deferredPrompt) {
      deferredPrompt.prompt();
      setDeferredPrompt(null);
    }

    // 2. Direct 100% download of UbonGeopark.apk from website assets (No GitHub 404!)
    try {
      const link = document.createElement('a');
      link.href = './downloads/UbonGeopark.apk';
      link.download = 'UbonGeopark.apk';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.log('APK download triggered');
    }
  };

  return {
    isStandalone,
    downloadApp
  };
}
