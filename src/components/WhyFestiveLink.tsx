import { Smartphone, Sparkles, Camera, Link2 } from 'lucide-react';
import Reveal from './Reveal';

const FEATURES = [
  {
    icon: Smartphone,
    title: 'Mobile First',
    body: 'Looks beautiful on every phone.',
    accent: 'bg-forest-100 text-forest-700',
  },
  {
    icon: Sparkles,
    title: 'Interactive',
    body: 'Your invitation comes alive with animations and effects.',
    accent: 'bg-saffron-100 text-saffron-700',
  },
  {
    icon: Camera,
    title: 'Personalized',
    body: 'Add your own photos, videos and message.',
    accent: 'bg-gold-100 text-gold-700',
  },
  {
    icon: Link2,
    title: 'Easy To Share',
    body: 'One link for WhatsApp, Instagram, SMS and more.',
    accent: 'bg-maroon-100 text-maroon-700',
  },
];

export default function WhyFestiveLink() {
  return (
    <section className="fl-section fl-bg-grain">
      <div className="fl-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="fl-eyebrow text-saffron-600">Why FestiveLink</span>
          <h2 className="mt-3 font-display text-3xl text-forest-900 md:text-4xl fl-text-balance">
            Made for modern celebrations
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 80}>
                <div className="fl-card group h-full p-6 text-center hover:-translate-y-1.5 hover:shadow-card">
                  <span
                    className={`mx-auto grid h-14 w-14 place-items-center rounded-2xl ${f.accent} transition-transform group-hover:scale-110`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-forest-900">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-forest-700/70">{f.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8 text-center" delay={120}>
          <p className="font-display text-xl text-forest-800 fl-text-balance">
            No PDF. No printing. Just one beautiful link.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
