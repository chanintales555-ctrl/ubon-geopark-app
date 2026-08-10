import { useState, useEffect } from 'react';

export interface LocationState {
  lat: number | null;
  lng: number | null;
  error: string | null;
  loading: boolean;
}

export function useGeolocation() {
  const [location, setLocation] = useState<LocationState>({
    lat: null,
    lng: null,
    error: null,
    loading: true
  });

  const refreshLocation = () => {
    if (!navigator.geolocation) {
      setLocation({
        lat: null,
        lng: null,
        error: 'เบราว์เซอร์ไม่รองรับ GPS Geolocation',
        loading: false
      });
      return;
    }

    setLocation(prev => ({ ...prev, loading: true, error: null }));

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          error: null,
          loading: false
        });
      },
      (err) => {
        setLocation({
          lat: null,
          lng: null,
          error: err.message || 'ไม่สามารถดึงตำแหน่ง GPS ได้',
          loading: false
        });
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  };

  useEffect(() => {
    refreshLocation();
  }, []);

  return { ...location, refreshLocation };
}
