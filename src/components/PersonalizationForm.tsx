import { useRef, useState } from 'react';
import {
  Check,
  ImagePlus,
  Video,
  X,
  Music,
  ChevronRight,
  Pencil,
  Package,
  Palette,
  User,
  Camera,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { PACKAGES, TEMPLATES, type PackageId, type TemplateInfo } from '@/data';
import type { FormData, UploadedFile } from '@/lib/order';
import { EMPTY_FORM } from '@/lib/order';
import Reveal from './Reveal';

interface Props {
  selectedPackage: PackageId;
  selectedTemplate: TemplateInfo | null;
  form: FormData;
  onFormChange: (patch: Partial<FormData>) => void;
  onSelectPackage: (id: PackageId) => void;
  onPickTemplate: () => void;
}

const STEPS = [
  { id: 1, label: 'Choose Package', icon: Package },
  { id: 2, label: 'Choose Template', icon: Palette },
  { id: 3, label: 'Your Details', icon: User },
  { id: 4, label: 'Your Memories', icon: Camera },
  { id: 5, label: 'Your Message', icon: MessageSquare },
  { id: 6, label: 'Special Requirements', icon: Sparkles },
] as const;

export default function PersonalizationForm({
  selectedPackage,
  selectedTemplate,
  form,
  onFormChange,
  onSelectPackage,
  onPickTemplate,
}: Props) {
  const [step, setStep] = useState(1);
  const pkg = PACKAGES.find((p) => p.id === selectedPackage)!;
  const photoInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const handlePhotos = (files: FileList | null) => {
    if (!files) return;
    const next: UploadedFile[] = Array.from(files).slice(0, 20).map((f) => ({
      name: f.name,
      size: f.size,
      preview: URL.createObjectURL(f),
    }));
    onFormChange({ photos: [...form.photos, ...next].slice(0, 30) });
  };

  const removePhoto = (i: number) => {
    const next = form.photos.filter((_, idx) => idx !== i);
    onFormChange({ photos: next });
  };

  const handleVideo = (files: FileList | null) => {
    if (!files || !files[0]) return;
    onFormChange({ video: { name: files[0].name, size: files[0].size } });
  };

  return (
    <section id="personalize" className="fl-section">
      <div className="fl-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="fl-eyebrow text-saffron-600">Personalize</span>
          <h2 className="mt-3 font-display text-3xl text-forest-900 md:text-4xl fl-text-balance">
            Make It Yours
          </h2>
          <p className="mt-3 text-forest-700/70 fl-text-pretty">
            Your photos. Your details. Your story.
          </p>
        </Reveal>

        {/* Stepper */}
        <Reveal className="mt-10" delay={60}>
          <ol className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {STEPS.map((s) => {
              const Icon = s.icon;
              const active = step === s.id;
              const done = step > s.id;
              return (
                <li key={s.id}>
                  <button
                    onClick={() => setStep(s.id)}
                    className={`flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold transition-all sm:text-sm ${
                      active
                        ? 'border-saffron-400 bg-saffron-500 text-white shadow-soft'
                        : done
                        ? 'border-forest-200 bg-forest-50 text-forest-700'
                        : 'border-forest-100 bg-white text-forest-700/60'
                    }`}
                  >
                    <span
                      className={`grid h-5 w-5 place-items-center rounded-full text-[0.7rem] ${
                        active ? 'bg-white/25' : done ? 'bg-forest-500 text-white' : 'bg-cream-100'
                      }`}
                    >
                      {done ? <Check className="h-3 w-3" strokeWidth={3} /> : <Icon className="h-3 w-3" />}
                    </span>
                    <span className="hidden sm:inline">{s.label}</span>
                    <span className="sm:hidden">{s.id}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </Reveal>

        {/* Step body */}
        <div className="mx-auto mt-8 max-w-2xl">
          <div className="fl-card p-6 sm:p-8">
            {/* STEP 1 */}
            {step === 1 && (
              <div className="animate-fade-in">
                <StepHeader n="01" title="Choose Package" />
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {PACKAGES.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => onSelectPackage(p.id)}
                      className={`relative rounded-2xl border-2 p-4 text-left transition-all ${
                        selectedPackage === p.id
                          ? 'border-saffron-400 bg-saffron-50/50 shadow-soft'
                          : 'border-forest-100 bg-white hover:border-forest-200'
                      }`}
                    >
                      {p.badge && (
                        <span className="absolute -top-2.5 left-3 rounded-full bg-gold-400 px-2 py-0.5 text-[0.6rem] font-bold uppercase text-forest-900">
                          {p.badge}
                        </span>
                      )}
                      <p className="font-display text-lg text-forest-900">{p.name}</p>
                      <p className="font-display text-2xl text-saffron-700">₹{p.price}</p>
                      <p className="mt-1 text-xs text-forest-700/70">{p.subtitle}</p>
                      {selectedPackage === p.id && (
                        <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-saffron-600">
                          <Check className="h-3.5 w-3.5" /> Selected
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                <StepNav onNext={() => setStep(2)} nextLabel="Next: Choose Template" />
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="animate-fade-in">
                <StepHeader n="02" title="Choose Template" />
                {selectedTemplate ? (
                  <div className="mt-5 flex items-center gap-4 rounded-2xl border border-forest-100 bg-cream-50 p-4">
                    <img
                      src={selectedTemplate.image}
                      alt={selectedTemplate.name}
                      className="h-16 w-16 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-display text-lg text-forest-900">{selectedTemplate.name}</p>
                      <p className="text-xs text-forest-700/70">{selectedTemplate.description}</p>
                    </div>
                    <button onClick={onPickTemplate} className="fl-btn fl-btn-outline !py-2 !text-sm">
                      <Pencil className="h-3.5 w-3.5" /> Change
                    </button>
                  </div>
                ) : (
                  <div className="mt-5 rounded-2xl border border-dashed border-forest-200 bg-cream-50 p-6 text-center">
                    <p className="text-sm text-forest-700/70">No template selected yet.</p>
                    <button onClick={onPickTemplate} className="fl-btn fl-btn-primary mt-3 !py-2.5 !text-sm">
                      Browse Templates
                    </button>
                  </div>
                )}
                <StepNav onBack={() => setStep(1)} onNext={() => setStep(3)} nextLabel="Next: Your Details" />
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="animate-fade-in">
                <StepHeader n="03" title="Your Details" />
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <Field label="Family / Host Name">
                    <input
                      className="fl-input"
                      placeholder="e.g. The Sharma Family"
                      value={form.hostName}
                      onChange={(e) => onFormChange({ hostName: e.target.value })}
                    />
                  </Field>
                  <Field label="Event Name">
                    <input
                      className="fl-input"
                      placeholder="e.g. Ganesh Chaturthi"
                      value={form.eventName}
                      onChange={(e) => onFormChange({ eventName: e.target.value })}
                    />
                  </Field>
                  <Field label="Event Date">
                    <input
                      type="date"
                      className="fl-input"
                      value={form.eventDate}
                      onChange={(e) => onFormChange({ eventDate: e.target.value })}
                    />
                  </Field>
                  <Field label="Event Time">
                    <input
                      type="time"
                      className="fl-input"
                      value={form.eventTime}
                      onChange={(e) => onFormChange({ eventTime: e.target.value })}
                    />
                  </Field>
                  <Field label="Venue" className="sm:col-span-2">
                    <input
                      className="fl-input"
                      placeholder="e.g. Sharma Residence, Baner"
                      value={form.venue}
                      onChange={(e) => onFormChange({ venue: e.target.value })}
                    />
                  </Field>
                  <Field label="City">
                    <input
                      className="fl-input"
                      placeholder="e.g. Pune"
                      value={form.city}
                      onChange={(e) => onFormChange({ city: e.target.value })}
                    />
                  </Field>
                  <Field label="Google Maps Link">
                    <input
                      className="fl-input"
                      placeholder="https://maps.app/..."
                      value={form.mapsLink}
                      onChange={(e) => onFormChange({ mapsLink: e.target.value })}
                    />
                  </Field>
                </div>
                <StepNav onBack={() => setStep(2)} onNext={() => setStep(4)} nextLabel="Next: Your Memories" />
              </div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <div className="animate-fade-in">
                <StepHeader n="04" title="Your Memories" />
                <p className="mt-2 text-sm text-forest-700/70">
                  Photo limit for <span className="font-semibold text-forest-800">{pkg.name}</span>:{' '}
                  <span className="font-semibold text-saffron-600">{pkg.photoLimit}</span>
                </p>

                <input
                  ref={photoInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={(e) => handlePhotos(e.target.files)}
                />
                <button
                  onClick={() => photoInputRef.current?.click()}
                  className="mt-4 flex w-full flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-forest-200 bg-cream-50 px-4 py-8 text-center transition-colors hover:border-saffron-400 hover:bg-saffron-50/40"
                >
                  <ImagePlus className="h-7 w-7 text-saffron-500" />
                  <span className="text-sm font-semibold text-forest-800">Upload Photos</span>
                  <span className="text-xs text-forest-700/60">Tap to select from your phone</span>
                </button>

                {form.photos.length > 0 && (
                  <div className="mt-4 grid grid-cols-3 gap-2.5 sm:grid-cols-4">
                    {form.photos.map((p, i) => (
                      <div key={i} className="group relative aspect-square overflow-hidden rounded-xl">
                        {p.preview ? (
                          <img src={p.preview} alt={p.name} className="h-full w-full object-cover" />
                        ) : (
                          <div className="grid h-full w-full place-items-center bg-cream-100 text-forest-400">
                            <ImagePlus className="h-5 w-5" />
                          </div>
                        )}
                        <button
                          onClick={() => removePhoto(i)}
                          className="absolute right-1 top-1 grid h-6 w-6 place-items-center rounded-full bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100"
                          aria-label="Remove photo"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Video */}
                {pkg.videoAllowed ? (
                  <div className="mt-6">
                    <input
                      ref={videoInputRef}
                      type="file"
                      accept="video/*"
                      className="hidden"
                      onChange={(e) => handleVideo(e.target.files)}
                    />
                    <button
                      onClick={() => videoInputRef.current?.click()}
                      className="flex w-full items-center gap-3 rounded-2xl border-2 border-dashed border-forest-200 bg-cream-50 px-4 py-5 text-left transition-colors hover:border-saffron-400"
                    >
                      <Video className="h-6 w-6 text-saffron-500" />
                      <span className="flex-1 text-sm font-semibold text-forest-800">
                        {form.video ? form.video.name : 'Upload Video'}
                      </span>
                      {form.video && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onFormChange({ video: null });
                          }}
                          className="grid h-7 w-7 place-items-center rounded-full bg-cream-200 text-forest-700"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}
                    </button>
                  </div>
                ) : (
                  <div className="mt-6 flex items-center gap-3 rounded-2xl border border-forest-100 bg-cream-50 px-4 py-4 text-sm text-forest-700/60">
                    <Video className="h-5 w-5" />
                    Video is available with Standard and Premium packages.
                  </div>
                )}

                <StepNav onBack={() => setStep(3)} onNext={() => setStep(5)} nextLabel="Next: Your Message" />
              </div>
            )}

            {/* STEP 5 */}
            {step === 5 && (
              <div className="animate-fade-in">
                <StepHeader n="05" title="Your Message" />
                <Field label="Write a custom invitation message" className="mt-5">
                  <textarea
                    className="fl-input min-h-[120px] resize-y"
                    placeholder="e.g. With the blessings of Lord Ganesha, we invite you to join our celebration..."
                    value={form.message}
                    onChange={(e) => onFormChange({ message: e.target.value })}
                  />
                </Field>
                <Field label="Music preference (optional)" className="mt-4">
                  <div className="relative">
                    <Music className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-forest-400" />
                    <input
                      className="fl-input pl-10"
                      placeholder="e.g. Traditional Ganesh aarti"
                      value={form.music}
                      onChange={(e) => onFormChange({ music: e.target.value })}
                    />
                  </div>
                </Field>
                <StepNav onBack={() => setStep(4)} onNext={() => setStep(6)} nextLabel="Next: Special Requirements" />
              </div>
            )}

            {/* STEP 6 */}
            {step === 6 && (
              <div className="animate-fade-in">
                <StepHeader n="06" title="Special Requirements" />
                <Field label="Anything else you want us to add?" className="mt-5">
                  <textarea
                    className="fl-input min-h-[120px] resize-y"
                    placeholder="e.g. Add a countdown timer, include a special ritual, mention multiple event days..."
                    value={form.requirements}
                    onChange={(e) => onFormChange({ requirements: e.target.value })}
                  />
                </Field>
                <div className="mt-5 rounded-2xl bg-cream-100/70 p-4 text-sm text-forest-700/80">
                  <p className="font-semibold text-forest-800">Almost done!</p>
                  <p className="mt-1 text-forest-700/70">
                    Review your order summary and tap “Continue to Order” to send your request on WhatsApp.
                  </p>
                </div>
                <StepNav onBack={() => setStep(5)} nextLabel="Done" hideNext />
                <button
                  onClick={() => setStep(1)}
                  className="fl-btn fl-btn-gold mt-3 w-full"
                >
                  Review &amp; Order <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepHeader({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-display text-3xl text-gold-300">{n}</span>
      <h3 className="font-display text-xl text-forest-900">{title}</h3>
    </div>
  );
}

function StepNav({
  onBack,
  onNext,
  nextLabel,
  hideNext,
}: {
  onBack?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  hideNext?: boolean;
}) {
  return (
    <div className="mt-6 flex items-center justify-between gap-3">
      {onBack ? (
        <button onClick={onBack} className="fl-btn fl-btn-outline !py-2.5 !text-sm">
          Back
        </button>
      ) : (
        <span />
      )}
      {!hideNext && onNext && (
        <button onClick={onNext} className="fl-btn fl-btn-primary !py-2.5 !text-sm">
          {nextLabel} <ChevronRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

function Field({
  label,
  children,
  className = '',
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest-700/70">
        {label}
      </span>
      {children}
    </label>
  );
}


