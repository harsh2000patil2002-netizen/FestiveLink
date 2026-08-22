import { useMemo, useState } from 'react';
import { Search, X, Sparkles, ChevronRight } from 'lucide-react';
import TemplateCard from './TemplateCard';
import TemplatePreviewModal from './TemplatePreviewModal';
import Reveal from './Reveal';
import {
  TEMPLATES,
  STYLE_FILTERS,
  type TemplateInfo,
  type PackageId,
  type TemplateStyle,
} from '@/data';

type PkgFilter = 'all' | PackageId;

const PKG_FILTERS: { id: PkgFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'basic', label: 'Basic ₹150' },
  { id: 'standard', label: 'Standard ₹200' },
  { id: 'premium', label: 'Premium ₹399' },
];

interface Props {
  selectedTemplateId: string | null;
  selectedPackage: PackageId;
  onSelectTemplate: (t: TemplateInfo) => void;
  onChooseAndPersonalize: (t: TemplateInfo) => void;
  onCreate: () => void;
  onBrowsePackages: () => void;
}

export default function TemplateShowcase({
  selectedTemplateId,
  selectedPackage,
  onSelectTemplate,
  onChooseAndPersonalize,
  onCreate,
  onBrowsePackages,
}: Props) {
  const [pkgFilter, setPkgFilter] = useState<PkgFilter>('all');
  const [styleFilter, setStyleFilter] = useState<TemplateStyle | null>(null);
  const [search, setSearch] = useState('');
  const [preview, setPreview] = useState<TemplateInfo | null>(null);

  const list = useMemo(() => {
    let result = TEMPLATES;
    if (pkgFilter !== 'all') result = result.filter((t) => t.pkg === pkgFilter);
    if (styleFilter) result = result.filter((t) => t.style === styleFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.style.toLowerCase().includes(q) ||
          t.pkg.toLowerCase().includes(q),
      );
    }
    return result;
  }, [pkgFilter, styleFilter, search]);

  const hasFilters = pkgFilter !== 'all' || styleFilter !== null || search.trim() !== '';

  const clearFilters = () => {
    setPkgFilter('all');
    setStyleFilter(null);
    setSearch('');
  };

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

        {/* Counter */}
        <Reveal className="mt-6 text-center" delay={60}>
          <p className="font-display text-2xl text-forest-900">
            <span className="fl-gold-text">{TEMPLATES.length}+ Beautiful Invitation Designs</span>
          </p>
          <p className="mt-1 text-sm text-forest-700/60">More designs are added regularly.</p>
        </Reveal>

        {/* Search */}
        <Reveal className="mx-auto mt-8 max-w-md" delay={80}>
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-forest-400" />
            <input
              type="text"
              placeholder="Search templates..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="fl-input pl-11 pr-10"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-full bg-cream-100 text-forest-600"
                aria-label="Clear search"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </Reveal>

        {/* Package filters */}
        <Reveal className="mt-6 flex flex-wrap justify-center gap-2.5" delay={100}>
          {PKG_FILTERS.map((f) => (
            <button
              key={f.id}
              className="fl-chip"
              data-active={pkgFilter === f.id}
              onClick={() => setPkgFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        {/* Style filters */}
        <Reveal className="mt-3 flex flex-wrap justify-center gap-2" delay={120}>
          {STYLE_FILTERS.map((s) => (
            <button
              key={s.id}
              className="fl-chip !py-1.5 !text-xs"
              data-active={styleFilter === s.id}
              onClick={() => setStyleFilter(styleFilter === s.id ? null : s.id)}
            >
              {s.label}
            </button>
          ))}
        </Reveal>

        {/* Active filter indicator + clear */}
        {hasFilters && (
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-xs text-forest-700/60">
              Showing {list.length} design{list.length !== 1 ? 's' : ''}
            </span>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-1 rounded-full bg-cream-100 px-3 py-1 text-xs font-medium text-forest-700 transition-colors hover:bg-cream-200"
            >
              <X className="h-3 w-3" /> Clear filters
            </button>
          </div>
        )}

        {/* Grid */}
        {list.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((t, i) => (
              <Reveal key={t.id} delay={(i % 3) * 80}>
                <TemplateCard
                  template={t}
                  selected={selectedTemplateId === t.id}
                  onPreview={() => setPreview(t)}
                  onSelect={() => {
                    onSelectTemplate(t);
                  }}
                />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-12 text-center">
            <p className="text-forest-700/60">No templates match your filters.</p>
            <button onClick={clearFilters} className="fl-btn fl-btn-outline mt-4 !py-2.5 !text-sm">
              Clear filters
            </button>
          </div>
        )}

        {/* Final CTA */}
        <Reveal className="mt-16 rounded-3xl bg-gradient-to-br from-forest-800 to-forest-900 p-8 text-center md:p-12" delay={100}>
          <Sparkles className="mx-auto h-8 w-8 text-gold-300" />
          <h3 className="mt-4 font-display text-2xl text-cream-50 md:text-3xl fl-text-balance">
            Found Your Style?
          </h3>
          <p className="mt-2 text-cream-100/70">Now make it yours.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <button onClick={onCreate} className="fl-btn fl-btn-gold">
              Create My Invitation <ChevronRight className="h-4 w-4" />
            </button>
            <button onClick={onBrowsePackages} className="fl-btn fl-btn-ghost-light">
              Browse Packages
            </button>
          </div>
          <p className="mt-4 text-xs text-cream-100/50">
            Personalize it with your photos, video, message and event details.
          </p>
        </Reveal>
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
