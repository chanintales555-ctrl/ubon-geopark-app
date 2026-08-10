import { useState, useEffect } from 'react';
import { UserStamp, ExplorerLevelInfo } from '../types';

const PASSPORT_KEY = 'ubon_geopark_passport_stamps';

export function getExplorerLevel(stampCount: number): ExplorerLevelInfo {
  if (stampCount >= 46) {
    return {
      level: 5,
      title: { th: 'ราชันย์แห่งมรดกธรณี', en: 'Geo Heritage Master' },
      minStamps: 46,
      maxStamps: 46,
      badgeIcon: '👑'
    };
  } else if (stampCount >= 31) {
    return {
      level: 4,
      title: { th: 'ผู้พิทักษ์อุทยานธรณี', en: 'Geopark Guardian' },
      minStamps: 31,
      maxStamps: 45,
      badgeIcon: '🛡️'
    };
  } else if (stampCount >= 16) {
    return {
      level: 3,
      title: { th: 'นักเดินทางแห่งแม่น้ำโขง', en: 'Mekhong Voyager' },
      minStamps: 16,
      maxStamps: 30,
      badgeIcon: '⛵'
    };
  } else if (stampCount >= 6) {
    return {
      level: 2,
      title: { th: 'ผู้รู้แจ้งหินทราย', en: 'Sandstone Scholar' },
      minStamps: 6,
      maxStamps: 15,
      badgeIcon: '📜'
    };
  } else {
    return {
      level: 1,
      title: { th: 'นักสำรวจหน้าใหม่', en: 'Beginner Explorer' },
      minStamps: 0,
      maxStamps: 5,
      badgeIcon: '🪨'
    };
  }
}

export function usePassport() {
  const [stamps, setStamps] = useState<UserStamp[]>(() => {
    try {
      const saved = localStorage.getItem(PASSPORT_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(PASSPORT_KEY, JSON.stringify(stamps));
  }, [stamps]);

  const hasStamp = (geositeId: string): boolean => {
    return stamps.some(s => s.geositeId === geositeId);
  };

  const addStamp = (geositeId: string, lat: number, lng: number, isSimulated: boolean = false) => {
    if (hasStamp(geositeId)) return false;

    const newStamp: UserStamp = {
      geositeId,
      timestamp: new Date().toISOString(),
      lat,
      lng,
      isSimulated
    };

    setStamps(prev => [...prev, newStamp]);
    return true;
  };

  const resetPassport = () => {
    setStamps([]);
    localStorage.removeItem(PASSPORT_KEY);
  };

  const explorerLevel = getExplorerLevel(stamps.length);

  return {
    stamps,
    stampCount: stamps.length,
    hasStamp,
    addStamp,
    resetPassport,
    explorerLevel
  };
}
