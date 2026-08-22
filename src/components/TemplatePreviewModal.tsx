import { useEffect } from 'react';
import { X, Check, ChevronLeft, ExternalLink } from 'lucide-react';
import type { TemplateInfo } from '@/data';
import { PACKAGES } from '@/data';
import LiveInvitation from './LiveInvitation';

interface Props {
  template: TemplateInfo | null;
  selected: boolean;
  onClose: () => void;
  onChoose: (t: TemplateInfo) => void;
}

export default function TemplatePreviewModal({ template, selected, onClose, onChoose }: Props) {
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

  const pkg = PACKAGES.find((p) => p.id === template.pkg)!;

  return (
    <>
      {/* Desktop / tablet: split layout with phone frame + info panel */}
      <div className="fixed inset-0 z-[100] hidden items-center justify-center p-4 sm:flex md:p-8">
        <div
          className="absolute inset-0 bg-forest-900/80 backdrop-blur-sm animate-fade-in"
          onClick={onClose}
        />
        <div className="relative z-10 grid w-full max-w-5xl animate-scale-in overflow-hidden rounded-3xl bg-cream-50 shadow-card md:grid-cols-[1.1fr_0.9fr]">
          {/* Phone preview */}
          <div className="relative flex items-center justify-center bg-forest-950 p-6 md:p-8">
            <div className="absolute left-4 top-4">
              <button
                onClick={onClose}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Close preview"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <PhoneFrame>
              <LiveInvitation template={template} />
            </PhoneFrame>
          </div>

          {/* Info panel */}
          <div className="flex flex-col overflow-y-auto fl-no-scrollbar p-6 md:p-8">
            <div>
              <span className="fl-eyebrow text-saffron-600">Live Preview</span>
              <h3 className="mt-2 font-display text-2xl text-forest-900">{template.name}</h3>
              <div className="mt-1.5 flex items-center gap-2">
                <span className="rounded-full bg-saffron-100 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-saffron-700">
                  {pkg.name} Package
                </span>
                <span className="font-display text-xl text-saffron-700">₹{template.price}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-forest-700/70">{template.description}</p>
            </div>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-forest-700/60">Features</p>
              <ul className="mt-2.5 grid gap-2">
                {template.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-forest-800/85">
                    <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-forest-500 text-white">
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto space-y-2.5 pt-6">
              <button
                onClick={() => onChoose(template)}
                className="fl-btn fl-btn-primary w-full"
              >
                {selected ? (
                  <>
                    <Check className="h-4 w-4" /> Continue with this design
                  </>
                ) : (
                  'Choose This Design'
                )}
              </button>
              <button
                onClick={onClose}
                className="fl-btn fl-btn-outline w-full"
              >
                Close Preview
              </button>
              <p className="text-center text-xs text-forest-700/50">
                Tap inside the phone to interact with the invitation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: full-screen preview */}
      <div className="fixed inset-0 z-[100] flex flex-col bg-forest-950 sm:hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-sm font-medium text-cream-100"
          >
            <ChevronLeft className="h-5 w-5" /> Back
          </button>
          <p className="text-xs font-semibold uppercase tracking-wider text-gold-300">Live Preview</p>
          <span className="w-5" />
        </div>

        {/* Full-viewport invitation */}
        <div className="flex-1 overflow-hidden">
          <LiveInvitation template={template} />
        </div>

        {/* Bottom sticky bar */}
        <div className="border-t border-white/10 bg-forest-900/95 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs text-cream-100/60">
                {template.name} · {pkg.name}
              </p>
              <p className="font-display text-lg text-gold-300">₹{template.price}</p>
            </div>
            <button
              onClick={() => onChoose(template)}
              className="fl-btn fl-btn-gold !py-2.5 !text-sm"
            >
              {selected ? (
                <>
                  <Check className="h-4 w-4" /> Selected
                </>
              ) : (
                'Choose This Design'
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* glow */}
      <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gold-400/10 blur-2xl" />
      {/* phone body */}
      <div className="relative h-[560px] w-[280px] overflow-hidden rounded-[2.5rem] border-[6px] border-forest-800 bg-forest-950 shadow-card">
        {/* notch */}
        <div className="absolute left-1/2 top-0 z-20 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-forest-800" />
        {/* screen */}
        <div className="h-full w-full overflow-hidden rounded-[2rem]">{children}</div>
      </div>
    </div>
  );
}
