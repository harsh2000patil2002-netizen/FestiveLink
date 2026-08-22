import { useState } from 'react';
import TemplateCard from './TemplateCard';
import TemplatePreviewModal from './TemplatePreviewModal';
import Reveal from './Reveal';
import { TEMPLATES, type TemplateInfo, type PackageId } from '@/data';

type Filter = 'all' | PackageId;

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'basic', label: 'Basic' },
  { id: 'standard', label: 'Standard' },
  { id: 'premium', label: 'Premium' },
];

interface Props {
  selectedTemplateId: string | null;
  onSelectTemplate: (t: TemplateInfo) => void;
  onChooseAndPersonalize: (t: TemplateInfo) => void;
}

export default function TemplateShowcase({
  selectedTemplateId,
  onSelectTemplate,
  onChooseAndPersonalize,
}: Props) {
  const [filter, setFilter] = useState<Filter>('all');
  const [preview, setPreview] = useState<TemplateInfo | null>(null);

  const list = filter === 'all' ? TEMPLATES : TEMPLATES.filter((t) => t.pkg === filter);

  return (
    <section id="templates" className="fl-section fl-bg-grain">
      <div className="fl-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="fl-eyebrow text-saffron-600">Templates</span>
          <h2 className="mt-3 font-display text-3xl text-forest-900 md:text-4xl fl-text-balance">
            Find Your Perfect Invitation
          </h2>
          <p className="mt-3 text-forest-700/70 fl-text-pretty">
            Every celebration deserves its own style.
          </p>
        </Reveal>

        {/* Filters */}
        <Reveal className="mt-8 flex flex-wrap justify-center gap-2.5" delay={80}>
          {FILTERS.map((f) => (
            <button
              key={f.id}
              className="fl-chip"
              data-active={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((t, i) => (
            <Reveal key={t.id} delay={(i % 3) * 80}>
              <TemplateCard
                template={t}
                selected={selectedTemplateId === t.id}
                onPreview={() => setPreview(t)}
                onSelect={() => onSelectTemplate(t)}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <TemplatePreviewModal
        template={preview}
        selected={preview ? selectedTemplateId === preview.id : false}
        onClose={() => setPreview(null)}
        onChoose={(t) => {
          onSelectTemplate(t);
          setPreview(null);
          onChooseAndPersonalize(t);
        }}
      />
    </section>
  );
}
