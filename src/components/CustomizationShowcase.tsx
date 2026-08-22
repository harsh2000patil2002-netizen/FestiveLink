import { ArrowRight, User, Calendar, MapPin, MessageSquare } from 'lucide-react';
import Reveal from './Reveal';
import { GANESHA_HERO, FAMILY_PHOTO } from '@/data';

export default function CustomizationShowcase() {
  return (
    <section className="fl-section">
      <div className="fl-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="fl-eyebrow text-saffron-600">Personalization</span>
          <h2 className="mt-3 font-display text-3xl text-forest-900 md:text-4xl fl-text-balance">
            Every Invitation Can Be Yours.
          </h2>
          <p className="mt-3 text-forest-700/70 fl-text-pretty">
            See how a template transforms with your details.
          </p>
        </Reveal>

        <div className="mt-12 grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          {/* Before: template */}
          <Reveal>
            <div className="text-center">
              <p className="mb-3 fl-eyebrow text-forest-700/60">Template</p>
              <div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-3xl border border-forest-100 shadow-soft">
                <div className="relative aspect-[3/4]">
                  <img src={GANESHA_HERO} alt="Template" className="h-full w-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-center">
                    <p className="font-display text-lg text-cream-100">|| Ganpati Bappa Moriya ||</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-cream-100/70">
                      Your event name here
                    </p>
                    <p className="mt-0.5 text-xs text-cream-100/50">Date · Venue · Family</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Arrow */}
          <Reveal delay={120} className="flex justify-center">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-saffron-500 text-white shadow-soft md:rotate-0 rotate-90">
              <ArrowRight className="h-5 w-5" />
            </span>
          </Reveal>

          {/* After: personalized */}
          <Reveal delay={200}>
            <div className="text-center">
              <p className="mb-3 fl-eyebrow text-saffron-600">Your Personalized Invitation</p>
              <div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-3xl border-2 border-gold-300 shadow-card">
                <div className="relative aspect-[3/4]">
                  <img src={GANESHA_HERO} alt="Personalized" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/30 to-transparent" />
                  <div className="absolute inset-3 rounded-2xl border border-gold-300/40" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-center">
                    <div className="mx-auto mb-2 h-14 w-14 overflow-hidden rounded-full border-2 border-gold-300 shadow-glow">
                      <img src={FAMILY_PHOTO} alt="Family" className="h-full w-full object-cover" />
                    </div>
                    <p className="font-display text-lg text-gold-200">The Sharma Family invites you</p>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-cream-100">
                      <Calendar className="h-3 w-3" /> 14 Sept · 6 PM
                    </p>
                    <p className="mt-0.5 inline-flex items-center gap-1.5 text-xs text-cream-100">
                      <MapPin className="h-3 w-3" /> Pune, Maharashtra
                    </p>
                    <p className="mt-2 inline-flex items-center gap-1.5 text-[0.65rem] text-cream-100/70">
                      <MessageSquare className="h-3 w-3" /> With love — The Sharmas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
