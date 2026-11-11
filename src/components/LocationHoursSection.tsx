import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppInquiryUrl } from '../utils/whatsapp';
import { ArrowUpRight, Check, Copy } from 'lucide-react';

export const LocationHoursSection: React.FC = () => {
  const { isAr, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const fullAddress = isAr
    ? 'شارع جبار بن صخر، حي الخالدية، المدينة المنورة 42317'
    : 'Jabbar Ibn Sakhr Street, Al Khalidiyyah, Madinah 42317';

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappUrl = getWhatsAppInquiryUrl(isAr);

  return (
    <section id="location" className="py-24 sm:py-32 bg-cream-200/50 border-t border-cream-300">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs tracking-[0.25em] text-caramel-600 uppercase font-bold block mb-3 font-sans">
            {t.location.title}
          </span>
          <p className="text-sm sm:text-base text-coffee-700 font-normal">
            {t.location.subtitle}
          </p>
        </div>

        {/* Clean 4-card information grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          
          {/* Operating Hours */}
          <div className="bg-cream-100 p-6 sm:p-8 rounded-2xl border border-cream-300 shadow-sm space-y-3">
            <span className="text-xs tracking-wider text-caramel-700 uppercase font-bold block font-sans">
              {t.location.hoursTitle}
            </span>
            <p className="text-xl sm:text-2xl font-extrabold text-coffee-950 font-sans tracking-tight">
              <span dir="ltr" className="inline-block">3:00 PM — 6:00 AM</span>
            </p>
            <p className="text-sm text-coffee-600 font-normal">
              {t.location.hours}
            </p>
          </div>

          {/* Address */}
          <div className="bg-cream-100 p-6 sm:p-8 rounded-2xl border border-cream-300 shadow-sm space-y-3">
            <span className="text-xs tracking-wider text-caramel-700 uppercase font-bold block font-sans">
              {t.location.addressTitle}
            </span>
            <p className="text-sm font-semibold text-coffee-900 leading-relaxed">
              {fullAddress}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="https://maps.google.com/?q=Boss+Lounge+Madinah"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cream-200 hover:bg-cream-300 text-xs font-bold text-coffee-900 transition-colors"
              >
                <span>{t.location.getDirections}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={handleCopy}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cream-200 hover:bg-cream-300 text-xs font-medium text-coffee-700 hover:text-coffee-900 transition-colors"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? (isAr ? 'تم النسخ' : 'Copied') : (isAr ? 'نسخ العنوان' : 'Copy')}</span>
              </button>
            </div>
          </div>

          {/* Parking */}
          <div className="bg-cream-100 p-6 sm:p-8 rounded-2xl border border-cream-300 shadow-sm space-y-2">
            <span className="text-xs tracking-wider text-caramel-700 uppercase font-bold block font-sans">
              {t.location.parkingTitle}
            </span>
            <p className="text-sm text-coffee-600 font-normal leading-relaxed">
              {t.location.parking}
            </p>
          </div>

          {/* Direct WhatsApp & Payment */}
          <div className="bg-cream-100 p-6 sm:p-8 rounded-2xl border border-cream-300 shadow-sm space-y-2">
            <span className="text-xs tracking-wider text-caramel-700 uppercase font-bold block font-sans">
              {t.location.paymentTitle}
            </span>
            <p className="text-sm text-coffee-600 font-normal mb-3">
              {t.location.payment}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-caramel-600 hover:bg-caramel-700 text-xs font-bold text-cream-50 transition-colors w-full sm:w-auto justify-center sm:justify-start"
            >
              <span>{t.location.whatsappInquiry}: <span dir="ltr">+966 53 763 1823</span></span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
