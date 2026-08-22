import { Play, Check } from 'lucide-react';
import type { TemplateInfo } from '@/data';

const PKG_BADGE: Record<string, { label: string; cls: string }> = {
  basic: { label: 'BASIC', cls: 'bg-forest-100 text-forest-700' },
  standard: { label: 'STANDARD', cls: 'bg-saffron-100 text-saffron-700' },
  premium: { label: 'PREMIUM', cls: 'bg-plum-500/10 text-plum-700' },
};

interface Props {
  template: TemplateInfo;
  selected: boolean;
  onPreview: () => void;
  onSelect: () => void;
}

export default function TemplateCard({ template, selected, onPreview, onSelect }: Props) {
  const badge = PKG_BADGE[template.pkg];
  return (
    <div className="fl-card group flex h-full flex-col overflow-hidden hover:-translate-y-1.5 hover:shadow-card">
      {/* Visual preview */}
      <button
        onClick={onPreview}
        className="relative block aspect-[4/5] w-full overflow-hidden"
        aria-label={`Live preview ${template.name}`}
      >
        <img
          src={template.image}
          alt={template.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 opacity-50 mix-blend-multiply transition-opacity group-hover:opacity-30"
          style={{ background: template.bg }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />

        {/* decorative frame */}
        <div className="absolute inset-3 rounded-2xl border border-white/25" />

        {/* mini invitation label */}
        <div className="absolute inset-x-0 bottom-3 px-4 text-center">
          <p className="font-display text-base text-white drop-shadow">|| Ganpati Bappa Moriya ||</p>
          <p className="mt-0.5 text-[0.6rem] uppercase tracking-[0.2em] text-white/80">
            {template.name}
          </p>
        </div>

        {/* live preview badge */}
        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest-800 opacity-0 shadow-soft backdrop-blur transition-opacity group-hover:opacity-100">
          <Play className="h-3 w-3 fill-saffron-600 text-saffron-600" /> Live Preview
        </span>

        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide ${badge.cls}`}
        >
          {badge.label}
        </span>
      </button>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display text-lg text-forest-900">{template.name}</h3>
          <span className="font-display text-lg text-saffron-700">₹{template.price}</span>
        </div>
        <p className="mt-1 flex-1 text-sm leading-relaxed text-forest-700/70">{template.description}</p>

        <div className="mt-4 flex items-center gap-2.5">
          <button
            onClick={onPreview}
            className="fl-btn fl-btn-primary flex-1 !py-2.5 !text-sm"
          >
            <Play className="h-3.5 w-3.5 fill-white" /> Live Preview
          </button>
          <button
            onClick={onSelect}
            className={`fl-btn flex-1 !py-2.5 !text-sm ${
              selected ? 'fl-btn-gold' : 'fl-btn-outline'
            }`}
          >
            {selected ? (
              <>
                <Check className="h-4 w-4" /> Selected
              </>
            ) : (
              'Choose Design'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
