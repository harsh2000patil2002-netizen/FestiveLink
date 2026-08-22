import { ChevronRight } from 'lucide-react';
import Reveal from './Reveal';

interface Props {
  onCreate: () => void;
}

export default function FinalCTA({ onCreate }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-forest-800 via-forest-900 to-maroon-900 py-20 md:py-28">
      {/* decorative glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-saffron-500/20 blur-3xl" />
      </div>

      <div className="fl-container relative text-center">
        <Reveal>
          <p className="fl-eyebrow text-gold-300">FestiveLink</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-tight text-cream-50 md:text-5xl fl-text-balance">
            Your Celebration Deserves More Than A Card.
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-display text-2xl text-gold-200 md:text-3xl fl-text-balance">
            Make It An Experience.
          </p>

          <button
            onClick={onCreate}
            className="fl-btn fl-btn-gold mt-8 group"
          >
            Create My Invitation
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <p className="mt-6 text-sm text-cream-100/70">
            FestiveLink — Not just an invitation. An experience.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
