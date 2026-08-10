import { useState, useEffect } from 'react';
import { Language } from '../types';

const LANGUAGE_KEY = 'ubon_geopark_lang';

export function useLanguage() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    return (saved === 'en' || saved === 'th') ? saved : 'th';
  });

  useEffect(() => {
    localStorage.setItem(LANGUAGE_KEY, lang);
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => (prev === 'th' ? 'en' : 'th'));
  };

  return { lang, setLang, toggleLang };
}
