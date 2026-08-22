import { Camera, FileText, MapPin, MessageSquare, Video, Music, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

const BLOCKS = [
  {
    pkg: 'Basic',
    accent: 'forest',
    items: [
      { icon: Camera, label: '1 photo' },
      { icon: FileText, label: 'Event details' },
      { icon: MapPin, label: 'Venue / location' },
      { icon: MessageSquare, label: 'Optional custom message' },
    ],
  },
  {
    pkg: 'Standard',
    accent: 'saffron',
    items: [
      { icon: Camera, label: '5–10 photos' },
      { icon: Video, label: 'Optional video' },
      { icon: FileText, label: 'Event details' },
      { icon: MapPin, label: 'Google Maps location' },
      { icon: Music, label: 'Music preference' },
      { icon: MessageSquare, label: 'Custom message' },
    ],
  },
  {
    pkg: 'Premium',
    accent: 'plum',
    items: [
      { icon: Camera, label: 'Unlimited photos' },
      { icon: Video, label: 'Video' },
      { icon: FileText, label: 'Event details' },
      { icon: MapPin, label: 'Google Maps' },
      { icon: Music, label: 'Music preference' },
      { icon: MessageSquare, label: 'Custom message' },
      { icon: Sparkles, label: 'Special customization requests' },
    ],
  },
];

const accentCls: Record<string, string> = {
  forest: 'border-forest-200 bg-forest-50/60',
  saffron: 'border-saffron-300 bg-saffron-50/60',
  plum: 'border-plum-400/40 bg-plum-500/5',
};

export default function WhatToSend() {
  return (
    <section className="fl-section bg-cream-100/60">
      <div className="fl-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="fl-eyebrow text-saffron-600">Before You Order</span>
          <h2 className="mt-3 font-display text-3xl text-forest-900 md:text-4xl fl-text-balance">
            What Do I Need To Send?
          </h2>
          <p className="mt-3 text-forest-700/70 fl-text-pretty">
            Here's exactly what we need from you for each package.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {BLOCKS.map((b, i) => (
            <Reveal key={b.pkg} delay={i * 90}>
              <div className={`h-full rounded-3xl border-2 p-6 ${accentCls[b.accent]}`}>
                <h3 className="font-display text-2xl text-forest-900">{b.pkg}</h3>
                <ul className="mt-4 space-y-3">
                  {b.items.map((it) => {
                    const Icon = it.icon;
                    return (
                      <li key={it.label} className="flex items-center gap-3 text-sm text-forest-800/85">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-saffron-600 shadow-soft">
                          <Icon className="h-4 w-4" />
                        </span>
                        {it.label}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center" delay={100}>
          <p className="inline-flex items-center gap-2 rounded-full border border-gold-300/60 bg-gold-50 px-4 py-2.5 text-sm font-medium text-gold-700">
            <Sparkles className="h-4 w-4" />
            Don't have everything ready? No problem. You can send the remaining details later.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
