import { Check, ChevronRight, ShoppingCart, X } from 'lucide-react';
import { PACKAGES, TEMPLATES, type PackageId, type TemplateInfo } from '@/data';
import type { FormData } from '@/lib/order';
import { buildWhatsAppMessage, openWhatsApp } from '@/lib/order';
import { WHATSAPP_NUMBER } from '@/data';

interface Props {
  selectedPackage: PackageId;
  selectedTemplate: TemplateInfo | null;
  form: FormData;
}

export default function OrderSummary({ selectedPackage, selectedTemplate, form }: Props) {
  const pkg = PACKAGES.find((p) => p.id === selectedPackage)!;
  const template =
    selectedTemplate ?? TEMPLATES.find((t) => t.id === 'cinematic-bappa') ?? TEMPLATES[0];

  const onOrder = () => {
    const msg = buildWhatsAppMessage({
      packageName: pkg.name,
      price: pkg.price,
      templateName: template.name,
      form,
    });
    openWhatsApp(msg, WHATSAPP_NUMBER);
  };

  return (
    <aside className="fl-card sticky top-24 p-6">
      <div className="flex items-center gap-2.5">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-saffron-100 text-saffron-600">
          <ShoppingCart className="h-5 w-5" />
        </span>
        <h3 className="font-display text-lg text-forest-900">Your FestiveLink Invitation</h3>
      </div>

      <div className="mt-5 space-y-3 text-sm">
        <Row label="Package">
          <span className="font-semibold text-forest-900">{pkg.name}</span>
        </Row>
        <Row label="Price">
          <span className="font-display text-xl text-saffron-700">₹{pkg.price}</span>
        </Row>
        <Row label="Template">
          <span className="inline-flex items-center gap-2 font-semibold text-forest-900">
            <img src={template.image} alt="" className="h-7 w-7 rounded-md object-cover" />
            {template.name}
          </span>
        </Row>
      </div>

      <div className="mt-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-forest-700/60">
          Features
        </p>
        <ul className="flex flex-wrap gap-1.5">
          {pkg.summaryFeatures.map((f) => (
            <li
              key={f}
              className="inline-flex items-center gap-1 rounded-full bg-cream-100 px-2.5 py-1 text-xs font-medium text-forest-700"
            >
              <Check className="h-3 w-3 text-forest-500" strokeWidth={3} />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 border-t border-forest-100 pt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-forest-700/60">
          Your details
        </p>
        <dl className="mt-2 space-y-1.5 text-sm">
          <Row label="Event">{form.eventName || <Muted>Not entered</Muted>}</Row>
          <Row label="Date">{form.eventDate || <Muted>Not entered</Muted>}</Row>
          <Row label="Photos">{form.photos.length > 0 ? `${form.photos.length} selected` : <Muted>None yet</Muted>}</Row>
          <Row label="Video">{form.video ? 'Yes' : <Muted>No</Muted>}</Row>
        </dl>
      </div>

      <button onClick={onOrder} className="fl-btn fl-btn-primary mt-6 w-full">
        Continue to Order <ChevronRight className="h-4 w-4" />
      </button>
      <p className="mt-2.5 text-center text-xs text-forest-700/60">
        Opens WhatsApp with your details pre-filled. No payment now.
      </p>
    </aside>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="text-forest-700/70">{label}</dt>
      <dd className="text-right">{children}</dd>
    </div>
  );
}

function Muted({ children }: { children: React.ReactNode }) {
  return <span className="text-forest-300">{children}</span>;
}

export { X };
