import React from 'react';
import { Home, Compass, BookOpen, ShoppingBag, Info } from 'lucide-react';
import { Language } from '../../types';

export type TabType = 'home' | 'explore' | 'passport' | 'shop' | 'about';

interface TabBarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  lang: Language;
  stampCount: number;
}

export const TabBar: React.FC<TabBarProps> = ({ activeTab, onTabChange, lang, stampCount }) => {
  const tabs = [
    { id: 'home' as TabType, label: lang === 'th' ? 'หน้าแรก' : 'Home', icon: Home },
    { id: 'explore' as TabType, label: lang === 'th' ? 'สำรวจ' : 'Explore', icon: Compass },
    { id: 'passport' as TabType, label: lang === 'th' ? 'พาสปอร์ต' : 'Passport', icon: BookOpen, badge: stampCount },
    { id: 'shop' as TabType, label: lang === 'th' ? 'สินค้า' : 'Market', icon: ShoppingBag },
    { id: 'about' as TabType, label: lang === 'th' ? 'เกี่ยวกับ' : 'About', icon: Info },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#ffffff',
        borderTop: '1px solid var(--color-paper-3)',
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: '0.5rem',
        paddingBottom: 'calc(0.5rem + var(--sab))',
        zIndex: 1000,
        boxShadow: '0 -4px 15px rgba(28, 49, 68, 0.05)'
      }}
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: 'none',
              padding: '0.25rem 0.5rem',
              color: isActive ? 'var(--color-accent)' : 'var(--color-ink-3)',
              cursor: 'pointer',
              position: 'relative',
              transition: 'color 0.15s ease',
              width: '20%'
            }}
          >
            <div style={{ position: 'relative' }}>
              <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
              {tab.badge !== undefined && tab.badge > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-8px',
                    backgroundColor: 'var(--color-accent)',
                    color: '#ffffff',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {tab.badge}
                </span>
              )}
            </div>
            <span
              style={{
                fontSize: '0.6875rem',
                fontWeight: isActive ? 600 : 400,
                marginTop: '0.2rem',
                fontFamily: 'var(--font-body)'
              }}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
