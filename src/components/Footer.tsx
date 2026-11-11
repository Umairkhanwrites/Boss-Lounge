import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-cream-200 border-t border-cream-300 text-coffee-600 text-xs font-sans">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
        <div className="tracking-widest font-bold text-coffee-900 uppercase">
          BOSS LOUNGE · {t.brand.city}
        </div>
        <div className="font-normal text-coffee-500">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};
