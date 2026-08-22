import { Check, Star } from 'lucide-react';
import type { PackageInfo } from '@/data';
import Reveal from './Reveal';

interface Props {
  pkg: PackageInfo;
  selected: boolean;
  onSelect: () => void;
  onExplore: () => void;
}

const accentMap: Record<string, { ring: string; badge: string; price: string; btn: string; check: string }> = {
  forest: {
    ring: 'border-forest-200',
    badge: 'bg-forest-100 text-forest-700',
    price: 'text-forest-800',
    btn: 'fl-btn-outline',
    check: 'bg-forest-500 text-white',
  },
  saffron: {
    ring: 'border-saffron-300',
    badge: 'bg-saffron-100 text-saffron-700',
    price: 'text-saffron-700',
    btn: 'fl-btn-primary',
    check: 'bg-saffron-500 text-white',
  },
  plum: {
    ring: 'border-plum-400/40',
    badge: 'bg-plum-500/10 text-plum-700',
    price: 'text-plum-700',
    btn: 'fl-btn-gold',
    check: 'bg-plum-500 text-white',
  },
};

export default function PackageCard({ pkg, selected, onSelect, onExplore }: Props) {
  const a = accentMap[pkg.accent] ?? accentMap.forest;
  const isPopular = pkg.highlighted;

  return (
    <Reveal className="h-full">
      <div
        className={`fl-card relative flex h-full flex-col p-6 transition-all duration-300 ${
          isPopular
            ? 'border-saffron-400 shadow-card ring-2 ring-saffron-300/60 md:-translate-y-2'
            : 'hover:-translate-y-1.5 hover:shadow-card'
        } ${selected ? 'ring-2 ring-gold-400' : ''}`}
      >
        {pkg.badge && (
          <span
            className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider shadow-soft ${
              isPopular ? 'bg-saffron-500 text-white' : 'bg-gold-400 text-forest-900'
            }`}
          >
            {isPopular && <Star className="mr-1 inline h-3 w-3 fill-white" />}
            {pkg.badge}
          </span>
        )}

        <div className="flex items-baseline justify-between">
          <h3 className="font-display text-2xl text-forest-900">{pkg.name}</h3>
          {selected && (
            <span className="rounded-full bg-gold-100 px-2.5 py-0.5 text-xs font-semibold text-gold-700">
              Selected
            </span>
          )}
        </div>
        <p className="mt-1 text-sm font-medium text-forest-700/70">{pkg.subtitle}</p>

        <div className="mt-4 flex items-end gap-1">
          <span className={`font-display text-4xl ${a.price}`}>₹{pkg.price}</span>
          <span className="mb-1 text-xs font-medium text-forest-700/50">one-time</span>
        </div>

        <ul className="mt-5 flex-1 space-y-2.5">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-forest-800/85">
              <span className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full ${a.check}`}>
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-5 rounded-xl bg-cream-100/70 px-4 py-2.5 text-center text-xs font-medium text-forest-700/80">
          Ideal for: <span className="font-semibold text-forest-800">{pkg.idealFor}</span>
        </div>

        <div className="mt-5 flex flex-col gap-2.5">
          <button onClick={onExplore} className={`fl-btn w-full ${a.btn}`}>
            {pkg.cta}
          </button>
          <button
            onClick={onSelect}
            className={`fl-btn w-full ${
              selected ? 'fl-btn-gold' : 'fl-btn-outline'
            }`}
          >
            {selected ? 'Selected' : 'Choose this package'}
          </button>
        </div>
      </div>
    </Reveal>
  );
}
