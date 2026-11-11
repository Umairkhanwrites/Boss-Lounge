import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { Footer } from './components/Footer';

export const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-coffee-900 flex flex-col font-sans selection:bg-caramel-100 selection:text-coffee-950">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MenuSection />
        <LocationHoursSection />
      </main>
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
