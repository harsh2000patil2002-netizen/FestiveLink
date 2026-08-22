import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Packages', href: '#packages' },
  { label: 'Templates', href: '#templates' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar({ onCreate }: { onCreate: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/85 backdrop-blur-xl shadow-[0_6px_24px_-12px_rgba(38,68,32,0.25)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="fl-container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <button
          onClick={() => handleNav('#home')}
          className="group flex items-center gap-2.5"
          aria-label="FestiveLink home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-saffron-400 to-maroon-600 text-white shadow-soft transition-transform group-hover:scale-105">
            <Sparkles className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="font-display text-xl tracking-wide text-forest-800 md:text-2xl">
            Festive<span className="fl-gold-text">Link</span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className="relative text-sm font-medium text-forest-800/80 transition-colors hover:text-forest-800 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button onClick={onCreate} className="fl-btn fl-btn-primary">
            Create My Invitation
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full text-forest-800 transition-colors hover:bg-forest-800/5 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="fl-container pb-6">
          <div className="fl-card flex flex-col gap-1 p-3">
            {LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="rounded-xl px-4 py-3 text-left text-base font-medium text-forest-800 transition-colors hover:bg-cream-100"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onCreate();
              }}
              className="fl-btn fl-btn-primary mt-2 w-full"
            >
              Create My Invitation
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
