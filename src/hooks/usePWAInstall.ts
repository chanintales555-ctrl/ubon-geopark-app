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
    // 1. If PWA browser install prompt is ready (Chrome/Android 1-click install)
    if (deferredPrompt) {
      deferredPrompt.prompt();
      setDeferredPrompt(null);
      return;
    }

    // 2. Direct 100% download of Android APK file
    const apkUrl = 'https://github.com/chanintales555-ctrl/ubon-geopark-app/releases/download/v1.0.0/UbonGeopark.apk';
    const link = document.createElement('a');
    link.href = apkUrl;
    link.download = 'UbonGeopark.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return {
    isStandalone,
    downloadApp
  };
}
