import { Sparkles, Instagram, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/data';

const LINKS = [
  { label: 'Packages', href: '#packages' },
  { label: 'Templates', href: '#templates' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: 'https://wa.me/' + WHATSAPP_NUMBER, external: true },
];

export default function Footer() {
  const handleNav = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-900 text-cream-100/80">
      <div className="fl-container py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-saffron-400 to-maroon-600 text-white">
                <Sparkles className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="font-display text-2xl text-cream-50">
                Festive<span className="fl-gold-text">Link</span>
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-cream-100/60">
              Digital Festival Invitations — beautiful, interactive and made for your celebration.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="fl-eyebrow text-gold-300">Explore</p>
            <ul className="mt-3 space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => handleNav(l.href, l.external)}
                    className="text-sm text-cream-100/70 transition-colors hover:text-cream-50"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="fl-eyebrow text-gold-300">Follow</p>
            <div className="mt-3 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-cream-100/80 transition-colors hover:bg-saffron-500 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-cream-100/80 transition-colors hover:bg-forest-500 hover:text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-cream-100/50">
          © 2026 FestiveLink · Not just an invitation. An experience.
        </div>
      </div>
    </footer>
  );
}
