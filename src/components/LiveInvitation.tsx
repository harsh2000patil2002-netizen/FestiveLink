import { useEffect, useRef, useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Share2,
  Play,
  Heart,
  Music,
  Sparkles,
  Check,
  ChevronRight,
} from 'lucide-react';
import type { TemplateInfo } from '@/data';

/**
 * A real, scrollable, interactive invitation rendered inside the preview phone frame.
 * Tap to reveal -> Ganpati -> details -> photos -> video -> schedule -> location -> final message -> share.
 */
export default function LiveInvitation({ template }: { template: TemplateInfo }) {
  const [revealed, setRevealed] = useState(false);
  const [diyaLit, setDiyaLit] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPremium = template.pkg === 'premium';
  const isStandard = template.pkg === 'standard';
  const showGallery = template.pkg !== 'basic';
  const showVideo = template.pkg !== 'basic';
  const showSchedule = template.pkg !== 'basic';
  const showRsvp = isPremium;
  const showCountdown = isPremium;

  // reset on template change
  useEffect(() => {
    setRevealed(false);
    setDiyaLit(false);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [template.id]);

  const handleReveal = () => {
    setDiyaLit(true);
    setTimeout(() => setRevealed(true), 900);
  };

  const accent = template.accent;
  const dark = template.dark;

  const surface = dark ? 'bg-forest-900 text-cream-100' : 'bg-cream-50 text-forest-900';
  const cardBg = dark ? 'bg-white/8 border-white/15' : 'bg-white border-forest-100';
  const muted = dark ? 'text-cream-100/70' : 'text-forest-700/70';
  const goldText = dark ? 'text-gold-300' : 'text-gold-700';
  const goldBorder = dark ? 'border-gold-400/40' : 'border-gold-400/60';

  return (
    <div className={`relative h-full w-full overflow-hidden ${surface}`}>
      {/* ambient glow background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{ background: template.bg }}
      />

      {/* Reveal overlay */}
      {!revealed && (
        <button
          onClick={handleReveal}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-4 text-center backdrop-blur-sm"
          style={{ background: dark ? 'rgba(10,20,12,0.6)' : 'rgba(250,245,233,0.7)' }}
        >
          {/* Diya */}
          <div className="relative">
            <div
              className={`grid h-20 w-20 place-items-center rounded-full border-2 transition-all duration-700 ${
                diyaLit ? 'border-gold-400 bg-gold-400/20 shadow-glow' : 'border-gold-400/50 bg-white/5'
              }`}
            >
              <span className="text-3xl">{diyaLit ? '🪔' : '🪔'}</span>
            </div>
            {diyaLit && (
              <div className="absolute inset-0 -z-10 animate-glow-pulse rounded-full bg-saffron-400/40 blur-xl" />
            )}
          </div>
          <div className="animate-fade-up">
            <p className="font-display text-xl" style={{ color: accent }}>
              {template.revealTagline}
            </p>
            <p
              className="mt-2 inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest animate-glow-pulse"
              style={{ borderColor: accent, color: accent }}
            >
              <Sparkles className="h-3.5 w-3.5" /> Tap to Reveal
            </p>
          </div>
        </button>
      )}

      {/* Scrollable invitation content */}
      <div
        ref={scrollRef}
        className="fl-no-scrollbar h-full w-full overflow-y-auto scroll-smooth"
      >
        {/* Hero / Ganpati section */}
        <section className="relative flex min-h-[85%] flex-col items-center justify-end pb-8 text-center">
          <div className="absolute inset-0">
            <img
              src={template.image}
              alt="Ganpati"
              className={`h-full w-full object-cover transition-all duration-1000 ${
                revealed ? 'opacity-80 scale-100' : 'opacity-0 scale-110'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>
          <div className={`relative z-10 px-6 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="font-display text-2xl text-gold-200">|| Ganpati Bappa Moriya ||</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-cream-100/80">
              {template.name}
            </p>
            <div className="mx-auto mt-4 h-px w-16 bg-gold-400/50" />
            <p className="mt-4 font-display text-lg text-cream-50">The Sharma Family</p>
            <p className="text-sm text-cream-100/70">cordially invites you</p>
          </div>
        </section>

        {/* Event details */}
        <section className={`px-6 py-8 ${dark ? 'bg-forest-900' : 'bg-cream-50'}`}>
          <SectionTitle accent={accent} dark={dark}>The Celebration</SectionTitle>
          <div className={`mt-4 space-y-3 rounded-2xl border p-5 ${cardBg} ${dark ? 'bg-white/8' : 'bg-white'}`}>
            <DetailRow icon={Calendar} label="Date" value="Saturday, 27 August 2026" accent={accent} dark={dark} />
            <div className={`h-px ${dark ? 'bg-white/10' : 'bg-forest-100'}`} />
            <DetailRow icon={Clock} label="Time" value="6:30 PM onwards" accent={accent} dark={dark} />
            <div className={`h-px ${dark ? 'bg-white/10' : 'bg-forest-100'}`} />
            <DetailRow icon={MapPin} label="Venue" value="Sharma Residence, Baner" accent={accent} dark={dark} />
            <div className={`h-px ${dark ? 'bg-white/10' : 'bg-forest-100'}`} />
            <p className="text-sm text-cream-100/80">
              Pune, Maharashtra 411045
            </p>
          </div>
        </section>

        {/* Countdown (Premium only) */}
        {showCountdown && (
          <section className={`px-6 py-8 ${dark ? 'bg-forest-800' : 'bg-cream-100'}`}>
            <SectionTitle accent={accent} dark={dark}>Counting Down</SectionTitle>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {[
                { v: '07', l: 'Days' },
                { v: '14', l: 'Hrs' },
                { v: '32', l: 'Min' },
                { v: '18', l: 'Sec' },
              ].map((c) => (
                <div key={c.l} className={`rounded-xl border p-3 text-center ${cardBg} ${dark ? 'bg-white/8' : 'bg-white'}`}>
                  <p className="font-display text-2xl" style={{ color: accent }}>{c.v}</p>
                  <p className={`text-[0.6rem] uppercase tracking-wider ${muted}`}>{c.l}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Photo / Gallery */}
        <section className={`px-6 py-8 ${dark ? 'bg-forest-900' : 'bg-cream-50'}`}>
          <SectionTitle accent={accent} dark={dark}>
            {showGallery ? 'Our Memories' : 'Our Family'}
          </SectionTitle>
          <Gallery template={template} dark={dark} accent={accent} />
        </section>

        {/* Video section */}
        {showVideo && template.sampleVideo && (
          <section className={`px-6 py-8 ${dark ? 'bg-forest-800' : 'bg-cream-100'}`}>
            <SectionTitle accent={accent} dark={dark}>A Special Video</SectionTitle>
            <button
              className="group relative mt-4 block w-full overflow-hidden rounded-2xl"
              onClick={() => {}}
            >
              <img src={template.sampleVideo.poster} alt="Video" className="aspect-video w-full object-cover" />
              <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-saffron-600 shadow-glow transition-transform group-hover:scale-110">
                  <Play className="h-6 w-6 fill-saffron-600" />
                </span>
                <p className="text-sm font-semibold text-white drop-shadow">{template.sampleVideo.label}</p>
              </div>
            </button>
          </section>
        )}

        {/* Event schedule (Standard + Premium) */}
        {showSchedule && (
          <section className={`px-6 py-8 ${dark ? 'bg-forest-900' : 'bg-cream-50'}`}>
            <SectionTitle accent={accent} dark={dark}>Event Schedule</SectionTitle>
            <div className="mt-4 space-y-3">
              {[
                { time: '6:30 PM', title: 'Ganpati Sthapana', desc: 'Welcoming Bappa with aarti' },
                { time: '7:15 PM', title: 'Cultural Program', desc: 'Music & dance performances' },
                { time: '8:30 PM', title: 'Dinner', desc: 'Traditional festive dinner' },
                { time: '10:00 PM', title: 'Visarjan', desc: 'Bidding farewell to Bappa' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <span className="grid h-8 w-8 place-items-center rounded-full text-xs font-bold" style={{ background: accent, color: '#fff' }}>
                      {i + 1}
                    </span>
                    {i < 3 && <span className="mt-1 h-6 w-px" style={{ background: dark ? 'rgba(255,255,255,0.15)' : 'rgba(31,61,43,0.15)' }} />}
                  </div>
                  <div className={`flex-1 rounded-xl border p-3 ${cardBg} ${dark ? 'bg-white/8' : 'bg-white'}`}>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold" style={{ color: accent }}>{item.time}</p>
                    </div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className={`text-xs ${muted}`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Location / Map */}
        <section className={`px-6 py-8 ${dark ? 'bg-forest-800' : 'bg-cream-100'}`}>
          <SectionTitle accent={accent} dark={dark}>Find Us</SectionTitle>
          <div className={`mt-4 overflow-hidden rounded-2xl border ${cardBg} ${dark ? 'bg-white/8' : 'bg-white'}`}>
            <div className="relative aspect-video bg-gradient-to-br from-forest-100 to-cream-200">
              <div className="absolute inset-0 fl-bg-grain opacity-40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-saffron-500 text-white shadow-glow">
                  <MapPin className="h-6 w-6" />
                </span>
                <p className="text-sm font-semibold text-forest-800">Sharma Residence</p>
                <p className="text-xs text-forest-700/60">Baner, Pune</p>
                <span className="mt-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-saffron-600 shadow-soft">
                  Open in Google Maps
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* RSVP (Premium only) */}
        {showRsvp && (
          <section className={`px-6 py-8 ${dark ? 'bg-forest-900' : 'bg-cream-50'}`}>
            <SectionTitle accent={accent} dark={dark}>Will You Join Us?</SectionTitle>
            <div className="mt-4 flex gap-3">
              <button className="flex-1 rounded-xl py-3 text-sm font-semibold text-white transition-transform active:scale-95" style={{ background: accent }}>
                <Check className="mr-1 inline h-4 w-4" /> Yes, I'll be there
              </button>
              <button className={`flex-1 rounded-xl border py-3 text-sm font-semibold ${cardBg} ${dark ? 'bg-white/8' : 'bg-white'}`}>
                Maybe later
              </button>
            </div>
          </section>
        )}

        {/* Final message */}
        <section className={`relative px-6 py-10 text-center ${dark ? 'bg-forest-800' : 'bg-cream-100'}`}>
          <Heart className="mx-auto h-8 w-8 fill-saffron-400 text-saffron-400 animate-glow-pulse" />
          <p className="mt-3 font-display text-lg" style={{ color: accent }}>
            With the blessings of Lord Ganesha
          </p>
          <p className={`mt-2 text-sm ${muted}`}>
            We look forward to celebrating with you.
          </p>
          <p className="mt-3 font-display text-base text-cream-50">— The Sharma Family</p>
          {showVideo && (
            <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-cream-100/60">
              <Music className="h-3 w-3" /> Music plays softly in the background
            </p>
          )}
        </section>

        {/* Share */}
        <section className={`px-6 py-8 ${dark ? 'bg-forest-900' : 'bg-cream-50'}`}>
          <button
            className="flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold text-white shadow-soft transition-transform active:scale-95"
            style={{ background: accent }}
          >
            <Share2 className="h-4 w-4" /> Share This Invitation
            <ChevronRight className="h-4 w-4" />
          </button>
          <p className={`mt-3 text-center text-xs ${muted}`}>
            One link for WhatsApp, Instagram, SMS and more
          </p>
        </section>
      </div>
    </div>
  );
}

function SectionTitle({ children, accent, dark }: { children: React.ReactNode; accent: string; dark: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px flex-1" style={{ background: dark ? 'rgba(255,255,255,0.15)' : 'rgba(31,61,43,0.15)' }} />
      <h3 className="font-display text-sm uppercase tracking-[0.15em]" style={{ color: accent }}>
        {children}
      </h3>
      <span className="h-px flex-1" style={{ background: dark ? 'rgba(255,255,255,0.15)' : 'rgba(31,61,43,0.15)' }} />
    </div>
  );
}

function DetailRow({
  icon: Icon,
  label,
  value,
  accent,
  dark,
}: {
  icon: typeof Calendar;
  label: string;
  value: string;
  accent: string;
  dark: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full" style={{ background: `${accent}20`, color: accent }}>
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className={`text-[0.65rem] uppercase tracking-wider ${dark ? 'text-cream-100/50' : 'text-forest-700/50'}`}>{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}

function Gallery({ template, dark, accent }: { template: TemplateInfo; dark: boolean; accent: string }) {
  const imgs = template.sampleImages;
  const cardCls = dark ? 'bg-white/8 border-white/15' : 'bg-white border-forest-100';

  if (template.gallery === 'single') {
    return (
      <div className={`mt-4 overflow-hidden rounded-2xl border ${cardCls}`}>
        <img src={imgs[0]} alt="Family" className="aspect-square w-full object-cover" />
        <p className="py-2 text-center text-xs text-cream-100/60">With love — The Sharmas</p>
      </div>
    );
  }

  if (template.gallery === 'polaroid') {
    return (
      <div className="mt-4 grid grid-cols-2 gap-3">
        {imgs.slice(0, 4).map((src, i) => (
          <div key={i} className={`overflow-hidden rounded-lg border-2 border-white p-1.5 shadow-soft ${dark ? 'bg-white/10' : 'bg-white'}`} style={{ transform: `rotate(${i % 2 ? 2 : -2}deg)` }}>
            <img src={src} alt="" className="aspect-square w-full rounded object-cover" />
          </div>
        ))}
      </div>
    );
  }

  if (template.gallery === 'masonry') {
    return (
      <div className="mt-4 grid grid-cols-2 gap-2">
        {imgs.slice(0, 5).map((src, i) => (
          <div key={i} className={`overflow-hidden rounded-xl border ${cardCls}`} style={{ gridRow: i === 0 ? 'span 2' : 'auto' }}>
            <img src={src} alt="" className="h-full w-full object-cover" style={{ aspectRatio: i === 0 ? '1/2' : '1/1' }} />
          </div>
        ))}
      </div>
    );
  }

  if (template.gallery === 'carousel') {
    return (
      <div className="mt-4 fl-no-scrollbar flex gap-3 overflow-x-auto pb-2">
        {imgs.slice(0, 5).map((src, i) => (
          <div key={i} className={`shrink-0 overflow-hidden rounded-xl border ${cardCls}`}>
            <img src={src} alt="" className="h-32 w-32 object-cover" />
          </div>
        ))}
      </div>
    );
  }

  if (template.gallery === 'filmstrip') {
    return (
      <div className={`mt-4 space-y-1 rounded-2xl border p-2 ${cardCls}`}>
        {imgs.slice(0, 4).map((src, i) => (
          <div key={i} className="flex gap-2">
            <span className="grid w-6 shrink-0 place-items-center text-xs font-bold" style={{ color: accent }}>{String(i + 1).padStart(2, '0')}</span>
            <img src={src} alt="" className="h-16 flex-1 rounded-lg object-cover" />
          </div>
        ))}
      </div>
    );
  }

  if (template.gallery === 'floating') {
    return (
      <div className="mt-4 relative">
        <div className="grid grid-cols-2 gap-3">
          {imgs.slice(0, 4).map((src, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl border shadow-soft ${cardCls} animate-float-soft`}
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <img src={src} alt="" className="aspect-square w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (template.gallery === 'fullscreen') {
    return (
      <div className="mt-4 space-y-2">
        {imgs.slice(0, 3).map((src, i) => (
          <div key={i} className={`overflow-hidden rounded-2xl border ${cardCls}`}>
            <img src={src} alt="" className="aspect-video w-full object-cover" />
          </div>
        ))}
      </div>
    );
  }

  // cinematic
  return (
    <div className="mt-4 space-y-3">
      <div className={`overflow-hidden rounded-2xl border-2 ${cardCls}`} style={{ borderColor: `${accent}50` }}>
        <img src={imgs[0]} alt="" className="aspect-video w-full object-cover" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {imgs.slice(1, 4).map((src, i) => (
          <div key={i} className={`overflow-hidden rounded-lg border ${cardCls}`}>
            <img src={src} alt="" className="aspect-square w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
