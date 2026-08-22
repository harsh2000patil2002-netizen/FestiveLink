import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '@/data';
import Reveal from './Reveal';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="fl-section bg-cream-100/60">
      <div className="fl-container max-w-3xl">
        <Reveal className="text-center">
          <span className="fl-eyebrow text-saffron-600">FAQ</span>
          <h2 className="mt-3 font-display text-3xl text-forest-900 md:text-4xl">
            Questions, answered
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 50}>
                <div className="fl-card overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base text-forest-900 sm:text-lg">{f.q}</span>
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-colors ${
                        isOpen ? 'bg-saffron-500 text-white' : 'bg-cream-100 text-forest-700'
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-forest-700/80">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
