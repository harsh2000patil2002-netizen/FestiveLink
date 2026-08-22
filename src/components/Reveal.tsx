import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface Props {
  children: ReactNode;
  className?: string;
  /** delay in ms applied as transition-delay */
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li';
}

/**
 * Wrap content to fade/slide it in on scroll. Adds `fl-reveal` + toggles `is-visible`.
 */
export default function Reveal({ children, className = '', delay = 0, as = 'div' }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Tag = as as 'div';
  return (
    <Tag
      ref={ref}
      className={`fl-reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
