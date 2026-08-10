import React, { useState } from 'react';
import { Language } from '../../types';
import { Play, Pause, Volume2, Music } from 'lucide-react';

interface AudioPlayerProps {
  audioUrl?: string;
  duration?: string;
  geositeName: string;
  lang: Language;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl: _audioUrl, duration = '3:15', geositeName, lang }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
    if (!isPlaying) {
      // Simulate audio progress
      const interval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            clearInterval(interval);
            setIsPlaying(false);
            return 0;
          }
          return p + 2;
        });
      }, 500);
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--color-paper-2)',
        border: '1px solid var(--color-paper-3)',
        borderRadius: '0.75rem',
        padding: '0.875rem 1rem',
        marginBottom: 'var(--space-4)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Music size={16} color="var(--color-accent)" />
          <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-ink)' }}>
            🎧 {lang === 'th' ? `เสียงบรรยาย Audio Guide: ${geositeName}` : `Audio Guide: ${geositeName}`}
          </span>
        </div>
        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-ink-3)' }}>
          {duration}
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <button
          onClick={togglePlay}
          style={{
            width: '2.25rem',
            height: '2.25rem',
            borderRadius: '50%',
            backgroundColor: 'var(--color-accent)',
            color: '#ffffff',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            flexShrink: 0
          }}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} style={{ marginLeft: '2px' }} />}
        </button>

        <div style={{ flex: 1 }}>
          <div style={{ height: '6px', backgroundColor: 'var(--color-paper-3)', borderRadius: '3px', overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                width: `${progress}%`,
                backgroundColor: 'var(--color-accent)',
                transition: 'width 0.3s linear'
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem', color: 'var(--color-ink-3)', marginTop: '0.25rem' }}>
            <span>{isPlaying ? '0:45' : '0:00'}</span>
            <span>{duration}</span>
          </div>
        </div>

        <Volume2 size={16} color="var(--color-ink-3)" />
      </div>
    </div>
  );
};
