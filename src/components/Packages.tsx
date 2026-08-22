import { PackageCard, ComparisonTable } from '@/components';
import { PACKAGES, type PackageId } from '@/data';
import Reveal from './Reveal';

interface Props {
  selected: PackageId;
  onSelectPackage: (id: PackageId) => void;
  onExplorePackage: (id: PackageId) => void;
}

export default function Packages({ selected, onSelectPackage, onExplorePackage }: Props) {
  return (
    <section id="packages" className="fl-section">
      <div className="fl-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="fl-eyebrow text-saffron-600">Packages</span>
          <h2 className="mt-3 font-display text-3xl text-forest-900 md:text-4xl fl-text-balance">
            One simple price. A celebration to remember.
          </h2>
          <p className="mt-3 text-forest-700/70 fl-text-pretty">
            Every package is a one-time payment — no subscriptions, no hidden fees.
          </p>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
          {PACKAGES.map((p) => (
            <PackageCard
              key={p.id}
              pkg={p}
              selected={selected === p.id}
              onSelect={() => onSelectPackage(p.id)}
              onExplore={() => onExplorePackage(p.id)}
            />
          ))}
        </div>
      </div>

      <ComparisonTable />
    </section>
  );
}
