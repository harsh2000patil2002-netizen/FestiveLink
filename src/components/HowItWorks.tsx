import { MousePointerClick, Palette, Upload, Share2 } from 'lucide-react';
import Reveal from './Reveal';

const STEPS = [
  {
    n: '01',
    title: 'Choose Your Package',
    body: 'Pick Basic, Standard or Premium.',
    icon: MousePointerClick,
  },
  {
    n: '02',
    title: 'Choose Your Design',
    body: 'Browse our invitation templates and select your favorite.',
    icon: Palette,
  },
  {
    n: '03',
    title: 'Personalize',
    body: 'Send us your photos, video, event details and message.',
    icon: Upload,
  },
  {
    n: '04',
    title: 'Receive & Share',
    body: 'We create your invitation and give you a shareable link.',
    icon: Share2,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="fl-section fl-bg-grain">
      <div className="fl-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="fl-eyebrow text-saffron-600">How It Works</span>
          <h2 className="mt-3 font-display text-3xl text-forest-900 md:text-4xl fl-text-balance">
            Four simple steps to your invitation
          </h2>
          <p className="mt-3 text-forest-700/70 fl-text-pretty">
            From idea to shareable link — no technical knowledge required.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.n} delay={i * 90}>
                <div className="fl-card group h-full p-6 hover:-translate-y-1.5 hover:shadow-card">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-4xl text-gold-300">{s.n}</span>
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-cream-100 text-saffron-600 transition-colors group-hover:bg-saffron-500 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl text-forest-900">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-forest-700/70">{s.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8 text-center" delay={120}>
          <p className="inline-flex items-center gap-2 rounded-full border border-gold-300/60 bg-gold-50 px-4 py-2 text-sm font-medium text-gold-700">
            No technical knowledge required.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
