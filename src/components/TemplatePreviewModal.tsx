import { useEffect, useState } from 'react';
import { X, ChevronRight, Check, Calendar, MapPin, Clock, Heart, Music, Camera } from 'lucide-react';
import type { TemplateInfo } from '@/data';
import { FAMILY_PHOTO } from '@/data';

interface Props {
  template: TemplateInfo | null;
  selected: boolean;
  onClose: () => void;
  onChoose: (t: TemplateInfo) => void;
}

const STAGES = ['Tap to reveal', 'Ganpati reveal', 'Invitation details', 'Photo area', 'Celebrate'];

export default function TemplatePreviewModal({ template, selected, onClose, onChoose }: Props) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (template) setStage(0);
  }, [template]);

  useEffect(() => {
    if (!template) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [template, onClose]);

  if (!template) return null;

  const isDark = ['cinematic', 'glow', 'royal', 'grand', 'experience'].includes(template.theme);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-forest-900/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* panel */}
      <div className="relative z-10 flex w-full max-w-3xl flex-col overflow-hidden rounded-3xl bg-white shadow-card animate-scale-in">
        {/* header */}
        <div className="flex items-center justify-between border-b border-forest-100 px-5 py-3.5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-saffron-600">
              Live Preview
            </p>
            <h3 className="font-display text-lg text-forest-900">{template.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full text-forest-700 transition-colors hover:bg-cream-100"
            aria-label="Close preview"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* interactive invitation */}
        <div className="relative bg-forest-950/95" style={{ background: template.bg }}>
          <div className="relative mx-auto flex max-w-md flex-col items-center px-5 py-8">
            {/* stage indicator */}
            <div className="mb-4 flex items-center gap-1.5">
              {STAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setStage(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === stage ? 'w-6 bg-gold-400' : 'w-1.5 bg-white/40'
                  }`}
                  aria-label={`Stage ${i + 1}`}
                />
              ))}
            </div>

            <InvitationStage
              stage={stage}
              template={template}
              isDark={isDark}
              onNext={() => setStage((s) => Math.min(s + 1, STAGES.length - 1))}
            />

            {/* nav */}
            <div className="mt-6 flex w-full items-center justify-between gap-3">
              <button
                onClick={() => setStage((s) => Math.max(s - 1, 0))}
                disabled={stage === 0}
                className="fl-btn fl-btn-ghost-light !py-2.5 !text-sm disabled:opacity-40"
              >
                Back
              </button>
              <p className="text-xs text-white/70">{STAGES[stage]}</p>
              {stage < STAGES.length - 1 ? (
                <button
                  onClick={() => setStage((s) => Math.min(s + 1, STAGES.length - 1))}
                  className="fl-btn fl-btn-gold !py-2.5 !text-sm"
                >
                  Next <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={() => onChoose(template)}
                  className="fl-btn fl-btn-gold !py-2.5 !text-sm"
                >
                  <Check className="h-4 w-4" /> Choose
                </button>
              )}
            </div>
          </div>
        </div>

        {/* footer choose */}
        <div className="flex flex-col gap-3 border-t border-forest-100 bg-cream-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-forest-700/70">
            {selected ? (
              <span className="inline-flex items-center gap-1.5 font-semibold text-forest-700">
                <Check className="h-4 w-4 text-forest-600" /> This design is selected
              </span>
            ) : (
              <>Like what you see? Choose this design to continue.</>
            )}
          </div>
          <button
            onClick={() => onChoose(template)}
            className="fl-btn fl-btn-primary w-full sm:w-auto"
          >
            {selected ? 'Continue with this design' : 'Choose This Design'}
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function InvitationStage({
  stage,
  template,
  isDark,
  onNext,
}: {
  stage: number;
  template: TemplateInfo;
  isDark: boolean;
  onNext: () => void;
}) {
  const textMain = isDark ? 'text-cream-100' : 'text-forest-900';
  const textMuted = isDark ? 'text-cream-100/75' : 'text-forest-700/70';

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/15 bg-black/20 backdrop-blur-sm">
      <div className="relative aspect-[3/4] w-full">
        <img
          src={template.image}
          alt={template.name}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

        {/* Stage 0: Tap to reveal */}
        {stage === 0 && (
          <button
            onClick={onNext}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center animate-fade-in"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full border-2 border-gold-300/70 bg-white/10 backdrop-blur-md animate-glow-pulse">
              <span className="font-display text-2xl text-gold-200">ॐ</span>
            </span>
            <p className="font-display text-2xl text-gold-200">Tap to reveal</p>
            <p className="text-xs uppercase tracking-[0.25em] text-cream-100/70">
              Your invitation awaits
            </p>
          </button>
        )}

        {/* Stage 1: Ganpati reveal */}
        {stage === 1 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center animate-fade-in">
            <p className="font-display text-3xl text-gold-200 animate-fade-up">
              || Ganpati Bappa Moriya ||
            </p>
            <p className={`mt-1 text-sm ${textMuted}`}>May Bappa bless your celebration</p>
          </div>
        )}

        {/* Stage 2: Invitation details */}
        {stage === 2 && (
          <div className="absolute inset-x-0 bottom-0 space-y-2.5 p-5 text-center animate-fade-up">
            <p className={`font-display text-xl ${textMain}`}>The Sharma Family cordially invites you</p>
            <div className="mx-auto max-w-xs space-y-1.5 rounded-xl bg-black/30 p-3 backdrop-blur-md">
              <p className="flex items-center justify-center gap-2 text-sm text-cream-100">
                <Calendar className="h-4 w-4 text-saffron-300" /> Saturday, 14 September 2026
              </p>
              <p className="flex items-center justify-center gap-2 text-sm text-cream-100">
                <Clock className="h-4 w-4 text-saffron-300" /> 6:00 PM onwards
              </p>
              <p className="flex items-center justify-center gap-2 text-sm text-cream-100">
                <MapPin className="h-4 w-4 text-saffron-300" /> Pune, Maharashtra
              </p>
            </div>
          </div>
        )}

        {/* Stage 3: Photo area */}
        {stage === 3 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 animate-fade-in">
            <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-gold-300 shadow-glow animate-scale-in">
              <img src={FAMILY_PHOTO} alt="Family" className="h-full w-full object-cover" />
            </div>
            <p className={`font-display text-lg ${textMain}`}>With love — The Sharmas</p>
            <p className="inline-flex items-center gap-1.5 text-xs text-cream-100/80">
              <Camera className="h-3.5 w-3.5" /> Your photos go here
            </p>
          </div>
        )}

        {/* Stage 4: Celebrate */}
        {stage === 4 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center animate-fade-in">
            <Heart className="h-10 w-10 fill-saffron-400 text-saffron-400 animate-glow-pulse" />
            <p className="font-display text-2xl text-gold-200">Celebrate with us</p>
            <p className="inline-flex items-center gap-1.5 text-xs text-cream-100/80">
              <Music className="h-3.5 w-3.5" /> Music · Animations · One shareable link
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
