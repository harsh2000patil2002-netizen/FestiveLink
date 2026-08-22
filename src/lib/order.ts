export interface FormData {
  hostName: string;
  eventName: string;
  eventDate: string;
  eventTime: string;
  venue: string;
  city: string;
  mapsLink: string;
  photos: UploadedFile[];
  video: UploadedFile | null;
  message: string;
  music: string;
  requirements: string;
}

export interface UploadedFile {
  name: string;
  size: number;
  preview?: string;
}

export const EMPTY_FORM: FormData = {
  hostName: '',
  eventName: '',
  eventDate: '',
  eventTime: '',
  venue: '',
  city: '',
  mapsLink: '',
  photos: [],
  video: null,
  message: '',
  music: '',
  requirements: '',
};

export function buildWhatsAppMessage(opts: {
  packageName: string;
  price: number;
  templateName: string;
  form: FormData;
}): string {
  const { packageName, price, templateName, form } = opts;
  const photoCount = form.photos.length;
  const lines = [
    'Hello FestiveLink! 👋',
    '',
    'I want to create a digital invitation.',
    '',
    `Package: ${packageName}`,
    `Price: ₹${price}`,
    `Template: ${templateName}`,
    '',
    `Event Name: ${form.eventName || '-'}`,
    `Date: ${form.eventDate || '-'}`,
    `Time: ${form.eventTime || '-'}`,
    `Venue: ${form.venue || '-'}${form.city ? ', ' + form.city : ''}`,
    `Photos: ${photoCount > 0 ? `${photoCount} photo(s) attached` : 'to be sent'}`,
    `Video: ${form.video ? 'yes, attached' : 'no'}`,
    `Custom Message: ${form.message || '-'}`,
    `Music preference: ${form.music || '-'}`,
    `Special Requirements: ${form.requirements || '-'}`,
    '',
    'Please guide me with the next steps.',
  ];
  return lines.join('\n');
}

export function openWhatsApp(message: string, number: string) {
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
