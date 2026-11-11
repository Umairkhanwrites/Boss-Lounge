import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu as MenuIcon, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { isAr, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.menu, href: '#menu' },
    { label: t.nav.hours, href: '#location' },
    { label: t.nav.contact, href: 'https://wa.me/966537631823', external: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EAE2D5] py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - Pure Crisp Sans-Serif */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="text-base sm:text-lg font-bold tracking-[0.18em] text-coffee-900 group-hover:text-caramel-600 transition-colors uppercase font-sans">
              BOSS LOUNGE
            </span>
            <span className="hidden sm:inline-block text-xs text-coffee-600/70 font-arabic font-medium border-s border-cream-300 ps-3">
              بوس لاونج
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="text-xs font-semibold tracking-wider text-coffee-700 hover:text-coffee-950 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Utilities: Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-4 sm:gap-6">
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="flex items-center gap-1.5 text-xs font-bold text-coffee-800 hover:text-coffee-950 bg-cream-200/80 hover:bg-cream-200 px-3 py-1.5 rounded-full border border-cream-300 transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-caramel-600" />
              <span>{isAr ? 'EN' : 'عربي'}</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              type="button"
              aria-label="Toggle menu"
              className="md:hidden text-coffee-900 p-1"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[68px] bg-[#FAF7F2] border-t border-cream-300 p-8 flex flex-col justify-between z-50 shadow-xl">
          <div className="flex flex-col gap-6 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-semibold text-coffee-900 hover:text-caramel-600 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="text-xs text-coffee-600 font-medium">
            {t.brand.city} • Al Khalidiyyah
          </div>
        </div>
      )}
    </header>
  );
};
