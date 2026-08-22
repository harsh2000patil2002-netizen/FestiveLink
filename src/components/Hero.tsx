import { useEffect, useState } from 'react';
import { ChevronRight, Play, MapPin, Calendar, Heart, Sparkles } from 'lucide-react';
import { GANESHA_HERO, FAMILY_PHOTO, DIYA_IMAGE } from '@/data';

interface Props {
  onExploreTemplates: () => void;
  onViewPackages: () => void;
}

/**
 * Cinematic hero with an interactive Ganpati invitation mockup on the right.
 * The mockup cycles through reveal -> details -> photo -> celebrate states.
 */
export default function Hero({ onExploreTemplates, onViewPackages }: Props) {
  const [stage, setStage] = useState(0);
  const stages = ['reveal', 'details', 'photo', 'celebrate'];

  useEffect(() => {
    const t = setInterval(() => setStage((s) => (s + 1) % 4), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36">
      {/* warm background wash */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-saffron-200/40 blur-3xl" />
        <div className="absolute -right-16 top-32 h-80 w-80 rounded-full bg-gold-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-forest-200/30 blur-3xl" />
      </div>

      <div className="fl-container grid items-center gap-10 pb-16 md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:pb-24">
        {/* Left: copy */}
        <div className="max-w-xl">
          <span className="fl-eyebrow inline-flex items-center gap-2 rounded-full border border-gold-300/60 bg-gold-50 px-3.5 py-1.5 text-gold-700">
            <Sparkles className="h-3.5 w-3.5" /> Digital Festival Invitations
          </span>

          <h1 className="mt-5 font-display text-[2.6rem] leading-[1.05] text-forest-900 sm:text-5xl md:text-[3.6rem] fl-text-balance">
            Your Celebration.
            <br />
            Your Story.
            <br />
            <span className="fl-gold-text">Your Invitation.</span>
          </h1>

          <p className="mt-5 text-lg font-medium text-forest-800/80 fl-text-pretty">
            Beautiful interactive digital invitations made specially for your celebration.
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-forest-700/70 fl-text-pretty">
            Choose a design, personalize it with your photos and details, and share your invitation
            with everyone you love.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button onClick={onExploreTemplates} className="fl-btn fl-btn-primary group">
              Explore Templates
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button onClick={onViewPackages} className="fl-btn fl-btn-outline">
              View Packages
            </button>
          </div>

          <div className="mt-8 flex items-center gap-6 text-xs text-forest-700/60">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-saffron-500" /> One-time price
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" /> No technical knowledge
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-forest-500" /> Share on WhatsApp
            </div>
          </div>
        </div>

        {/* Right: invitation mockup */}
        <div className="relative mx-auto w-full max-w-sm md:max-w-md">
          <InvitationMockup stage={stages[stage]} stageIndex={stage} />
        </div>
      </div>
    </section>
  );
}

function InvitationMockup({ stage, stageIndex }: { stage: string; stageIndex: number }) {
  return (
    <div className="relative">
      {/* glow */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-gold-300/30 via-saffron-200/20 to-maroon-300/20 blur-2xl" />

      {/* phone-like frame */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-gold-300/50 bg-forest-900 shadow-card">
        <div className="relative aspect-[3/4] w-full">
          {/* base image */}
          <img
            src={GANESHA_HERO}
            alt="Ganpati celebration"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-transparent" />

          {/* stage content */}
          <div key={stage} className="absolute inset-0 flex flex-col justify-end p-5 text-center animate-fade-in">
            {stage === 'reveal' && (
              <div className="animate-fade-up">
                <p className="font-display text-2xl text-gold-200">|| Ganpati Bappa Moriya ||</p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-cream-100/80">
                  Tap to reveal
                </p>
              </div>
            )}

            {stage === 'details' && (
              <div className="animate-fade-up space-y-2 rounded-2xl bg-forest-900/55 p-4 backdrop-blur-md">
                <p className="font-display text-xl text-gold-200">The Sharma Family invites you</p>
                <div className="flex items-center justify-center gap-2 text-xs text-cream-100/90">
                  <Calendar className="h-3.5 w-3.5 text-saffron-300" /> Sat, 14 Sept · 6 PM
                </div>
                <div className="flex items-center justify-center gap-2 text-xs text-cream-100/90">
                  <MapPin className="h-3.5 w-3.5 text-saffron-300" /> Pune, Maharashtra
                </div>
              </div>
            )}

            {stage === 'photo' && (
              <div className="animate-fade-up">
                <div className="mx-auto mb-2 h-20 w-20 overflow-hidden rounded-full border-2 border-gold-300 shadow-glow">
                  <img src={FAMILY_PHOTO} alt="Family" className="h-full w-full object-cover" />
                </div>
                <p className="text-xs text-cream-100/85">With love — The Sharmas</p>
              </div>
            )}

            {stage === 'celebrate' && (
              <div className="animate-fade-up">
                <p className="font-display text-2xl text-gold-200">Celebrate with us</p>
                <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-cream-100/85">
                  <Heart className="h-3.5 w-3.5 fill-saffron-400 text-saffron-400" /> Share this invitation
                </p>
              </div>
            )}
          </div>

          {/* diya glow accent */}
          <div className="absolute bottom-3 left-1/2 h-10 w-10 -translate-x-1/2 animate-glow-pulse rounded-full bg-saffron-300/40 blur-md" />
        </div>
      </div>

      {/* floating accents */}
      <div className="absolute -right-3 top-10 hidden animate-float-soft rounded-2xl border border-gold-300/50 bg-white/90 p-2.5 shadow-soft backdrop-blur sm:block">
        <img src={DIYA_IMAGE} alt="Diya" className="h-12 w-12 rounded-lg object-cover" />
      </div>
      <div className="absolute -left-4 bottom-16 hidden animate-float-soft rounded-full border border-gold-300/50 bg-white/90 p-2 shadow-soft backdrop-blur [animation-delay:1.5s] sm:block">
        <Play className="h-4 w-4 fill-saffron-500 text-saffron-500" />
      </div>

      {/* stage dots */}
      <div className="mt-4 flex justify-center gap-2">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === stageIndex ? 'w-6 bg-saffron-500' : 'w-1.5 bg-forest-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
