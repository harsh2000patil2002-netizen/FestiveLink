import { Check, Minus } from 'lucide-react';
import { PACKAGES, COMPARISON_ROWS } from '@/data';
import Reveal from './Reveal';

function Cell({ on }: { on: boolean }) {
  return on ? (
    <span className="mx-auto grid h-6 w-6 place-items-center rounded-full bg-forest-100 text-forest-600">
      <Check className="h-3.5 w-3.5" strokeWidth={3} />
    </span>
  ) : (
    <span className="mx-auto grid h-6 w-6 place-items-center rounded-full bg-cream-100 text-forest-300">
      <Minus className="h-3.5 w-3.5" strokeWidth={3} />
    </span>
  );
}

export default function ComparisonTable() {
  return (
    <section className="fl-section bg-cream-100/60">
      <div className="fl-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="fl-eyebrow text-saffron-600">Compare Packages</span>
          <h2 className="mt-3 font-display text-3xl text-forest-900 md:text-4xl">
            Everything you get, side by side
          </h2>
        </Reveal>

        {/* Desktop / tablet table */}
        <Reveal className="mt-10 hidden overflow-hidden rounded-3xl border border-forest-100 bg-white shadow-soft md:block">
          <table className="w-full">
            <thead>
              <tr className="border-b border-forest-100 bg-cream-50">
                <th className="px-6 py-5 text-left text-sm font-semibold text-forest-700/70">Feature</th>
                {PACKAGES.map((p) => (
                  <th key={p.id} className="px-6 py-5 text-center">
                    <span
                      className={`font-display text-lg ${
                        p.highlighted ? 'text-saffron-700' : 'text-forest-900'
                      }`}
                    >
                      {p.name}
                    </span>
                    <span className="ml-1.5 text-xs font-medium text-forest-700/50">₹{p.price}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 ? 'bg-cream-50/50' : 'bg-white'}
                >
                  <td className="px-6 py-3.5 text-sm font-medium text-forest-800/85">{row.label}</td>
                  <td className="px-6 py-3.5"><Cell on={row.basic} /></td>
                  <td className="px-6 py-3.5 bg-saffron-50/40"><Cell on={row.standard} /></td>
                  <td className="px-6 py-3.5"><Cell on={row.premium} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        {/* Mobile stacked cards */}
        <div className="mt-10 grid gap-4 md:hidden">
          {PACKAGES.map((p) => (
            <Reveal key={p.id}>
              <div
                className={`fl-card p-5 ${
                  p.highlighted ? 'ring-2 ring-saffron-300/60' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl text-forest-900">{p.name}</h3>
                  <span className="font-display text-xl text-saffron-700">₹{p.price}</span>
                </div>
                <ul className="mt-3 space-y-2">
                  {COMPARISON_ROWS.map((row) => {
                    const on = row[p.id];
                    return (
                      <li key={row.label} className="flex items-center justify-between text-sm">
                        <span className="text-forest-800/80">{row.label}</span>
                        <Cell on={on} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
