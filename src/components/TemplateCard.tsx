import { Eye, Check } from 'lucide-react';
import type { TemplateInfo } from '@/data';

const PKG_BADGE: Record<string, { label: string; cls: string }> = {
  basic: { label: 'Basic', cls: 'bg-forest-100 text-forest-700' },
  standard: { label: 'Standard', cls: 'bg-saffron-100 text-saffron-700' },
  premium: { label: 'Premium', cls: 'bg-plum-500/10 text-plum-700' },
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
        aria-label={`Preview ${template.name}`}
      >
        <img
          src={template.image}
          alt={template.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 opacity-60 mix-blend-multiply transition-opacity group-hover:opacity-40"
          style={{ background: template.bg }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent" />

        {/* decorative frame */}
        <div className="absolute inset-3 rounded-2xl border border-white/25" />

        {/* mini invitation label */}
        <div className="absolute inset-x-0 bottom-3 px-4 text-center">
          <p className="font-display text-lg text-white drop-shadow">|| Ganpati Bappa Moriya ||</p>
          <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.2em] text-white/80">
            {template.name}
          </p>
        </div>

        {/* hover preview hint */}
        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest-800 opacity-0 shadow-soft backdrop-blur transition-opacity group-hover:opacity-100">
          <Eye className="h-3.5 w-3.5" /> Live Preview
        </span>

        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wide ${badge.cls}`}
        >
          {badge.label}
        </span>
      </button>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl text-forest-900">{template.name}</h3>
        <p className="mt-1 flex-1 text-sm leading-relaxed text-forest-700/70">{template.description}</p>

        <div className="mt-4 flex items-center gap-2.5">
          <button
            onClick={onPreview}
            className="fl-btn fl-btn-outline flex-1 !py-2.5 !text-sm"
          >
            <Eye className="h-4 w-4" /> Preview
          </button>
          <button
            onClick={onSelect}
            className={`fl-btn flex-1 !py-2.5 !text-sm ${
              selected ? 'fl-btn-gold' : 'fl-btn-primary'
            }`}
          >
            {selected ? (
              <>
                <Check className="h-4 w-4" /> Selected
              </>
            ) : (
              'Select'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
