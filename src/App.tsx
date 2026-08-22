import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Packages from '@/components/Packages';
import TemplateShowcase from '@/components/TemplateShowcase';
import WhatToSend from '@/components/WhatToSend';
import PersonalizationForm from '@/components/PersonalizationForm';
import OrderSummary from '@/components/OrderSummary';
import WhyFestiveLink from '@/components/WhyFestiveLink';
import CustomizationShowcase from '@/components/CustomizationShowcase';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingPetals from '@/components/FloatingPetals';
import { PACKAGES, TEMPLATES, type PackageId, type TemplateInfo } from '@/data';
import { EMPTY_FORM, type FormData, buildWhatsAppMessage, openWhatsApp } from '@/lib/order';
import { WHATSAPP_NUMBER } from '@/data';

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState<PackageId>('standard');
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateInfo | null>(
    TEMPLATES.find((t) => t.id === 'cinematic-bappa') ?? null,
  );
  const [form, setForm] = useState<FormData>(EMPTY_FORM);

  const onFormChange = (patch: Partial<FormData>) =>
    setForm((prev) => ({ ...prev, ...patch }));

  const handleSelectPackage = (id: PackageId) => {
    setSelectedPackage(id);
    scrollTo('#personalize');
  };

  const handleExplorePackage = (id: PackageId) => {
    setSelectedPackage(id);
    scrollTo('#templates');
  };

  const handleSelectTemplate = (t: TemplateInfo) => {
    setSelectedTemplate(t);
    setSelectedPackage(t.pkg);
  };

  const handleChooseAndPersonalize = (t: TemplateInfo) => {
    setSelectedTemplate(t);
    setSelectedPackage(t.pkg);
    scrollTo('#personalize');
  };

  const onCreate = () => scrollTo('#personalize');

  const onOrder = () => {
    const pkg = PACKAGES.find((p) => p.id === selectedPackage)!;
    const msg = buildWhatsAppMessage({
      packageName: pkg.name,
      price: pkg.price,
      templateName: selectedTemplate?.name ?? 'Not selected',
      form,
    });
    openWhatsApp(msg, WHATSAPP_NUMBER);
  };

  // cleanup object URLs on unmount
  useEffect(() => {
    return () => {
      form.photos.forEach((p) => p.preview && URL.revokeObjectURL(p.preview));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingPetals />
      <Navbar onCreate={onCreate} />

      <main className="relative z-[2]">
        <Hero
          onExploreTemplates={() => scrollTo('#templates')}
          onViewPackages={() => scrollTo('#packages')}
        />

        <HowItWorks />

        <Packages
          selected={selectedPackage}
          onSelectPackage={handleSelectPackage}
          onExplorePackage={handleExplorePackage}
        />

        <TemplateShowcase
          selectedTemplateId={selectedTemplate?.id ?? null}
          selectedPackage={selectedPackage}
          onSelectTemplate={handleSelectTemplate}
          onChooseAndPersonalize={handleChooseAndPersonalize}
          onCreate={onCreate}
          onBrowsePackages={() => scrollTo('#packages')}
        />

        <WhatToSend />

        {/* Personalization + live order summary */}
        <div className="fl-section !pt-0">
          <div className="fl-container grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-start">
            <PersonalizationForm
              selectedPackage={selectedPackage}
              selectedTemplate={selectedTemplate}
              form={form}
              onFormChange={onFormChange}
              onSelectPackage={setSelectedPackage}
              onPickTemplate={() => scrollTo('#templates')}
            />
            <div className="lg:sticky lg:top-24">
              <OrderSummary
                selectedPackage={selectedPackage}
                selectedTemplate={selectedTemplate}
                form={form}
              />
            </div>
          </div>

          {/* Mobile sticky order bar */}
          <div className="sticky bottom-0 z-30 mt-8 border-t border-forest-100 bg-cream-50/95 px-4 py-3 backdrop-blur-xl lg:hidden">
            <div className="fl-container flex items-center justify-between gap-3">
              <div>
                <p className="text-xs text-forest-700/60">
                  {PACKAGES.find((p) => p.id === selectedPackage)?.name} ·{' '}
                  {selectedTemplate?.name ?? 'No template'}
                </p>
                <p className="font-display text-lg text-saffron-700">
                  ₹{PACKAGES.find((p) => p.id === selectedPackage)?.price}
                </p>
              </div>
              <button onClick={onOrder} className="fl-btn fl-btn-primary !py-2.5 !text-sm">
                Continue to Order
              </button>
            </div>
          </div>
        </div>

        <WhyFestiveLink />
        <CustomizationShowcase />
        <FAQ />
        <FinalCTA onCreate={onCreate} />
      </main>

      <Footer />
    </div>
  );
}
