import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  hue: string;
}

const HUES = ['#ef7111', '#fb8f2c', '#d3580b', '#e0b95a', '#bd8826'];

/**
 * Floating marigold petals overlay. Fixed-position, pointer-events-none.
 * Count scales down on small screens for performance.
 */
export default function FloatingPetals({ count = 14 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const n = window.innerWidth < 640 ? Math.min(count, 8) : count;
    const arr: Petal[] = Array.from({ length: n }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 8 + Math.random() * 12,
      duration: 9 + Math.random() * 10,
      delay: Math.random() * 12,
      drift: (Math.random() - 0.5) * 60,
      hue: HUES[i % HUES.length],
    }));
    setPetals(arr);
  }, [count, reduced]);

  if (reduced) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 block animate-petal-fall"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            ['--drift' as string]: `${p.drift}px`,
          }}
        >
          <svg viewBox="0 0 24 24" className="h-full w-full" style={{ filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.12))' }}>
            <path
              d="M12 2c2.2 3.8 6.2 5.4 9.8 5.2C21 13 17 18 12 22 7 18 3 13 2.2 7.2 5.8 7.4 9.8 5.8 12 2z"
              fill={p.hue}
              opacity="0.85"
            />
            <circle cx="12" cy="11" r="2.4" fill="#fff3d6" opacity="0.7" />
          </svg>
        </span>
      ))}
    </div>
  );
}
