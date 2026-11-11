import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowDown, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[65vh] flex flex-col justify-center items-center text-center px-6 pt-32 pb-16 bg-[#FAF7F2]">
      {/* Subtle warm atmospheric glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_35%,rgba(184,115,51,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        
        {/* Precise Location Tag */}
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-coffee-700 tracking-[0.18em] uppercase mb-6 bg-cream-200/90 px-3.5 py-1 rounded-full border border-cream-300">
          <MapPin className="w-3.5 h-3.5 text-caramel-600" />
          <span>{t.hero.locationPill}</span>
        </div>

        {/* Main Heading - Clean, Precise, Balanced */}
        <h1 className="font-sans text-3xl sm:text-5xl text-coffee-950 font-bold tracking-tight leading-[1.18] mb-5 [text-wrap:balance]">
          {t.hero.tagline}
        </h1>

        {/* Precise Subtext */}
        <p className="max-w-lg text-sm sm:text-base text-coffee-700 font-normal leading-relaxed mb-8 [text-wrap:balance]">
          {t.hero.description}
        </p>

        {/* Single Primary Action: View Menu */}
        <div>
          <a
            href="#menu"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-coffee-900 text-cream-100 hover:bg-caramel-600 hover:text-white font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow"
          >
            {t.hero.viewMenu}
          </a>
        </div>

      </div>

      {/* Subtle Scroll Down Arrow */}
      <a
        href="#menu"
        className="mt-12 text-coffee-400 hover:text-coffee-700 transition-colors"
        aria-label="Scroll to menu"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
