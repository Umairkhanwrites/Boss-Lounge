import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MENU_ITEMS } from '../data/menuData';
import { MenuCategory } from '../types';
import { Flame, Sparkles } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const { isAr, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');

  const categories: { key: MenuCategory; label: string }[] = [
    { key: 'all', label: t.menu.categories.all },
    { key: 'hot_drinks', label: t.menu.categories.hot_drinks },
    { key: 'cold_drinks', label: t.menu.categories.cold_drinks },
    { key: 'desserts', label: t.menu.categories.desserts },
    { key: 'fast_food', label: t.menu.categories.fast_food },
    { key: 'pizza', label: t.menu.categories.pizza },
    { key: 'bakery_shakes', label: t.menu.categories.bakery_shakes },
    { key: 'hookah', label: t.menu.categories.hookah },
  ];

  const filteredItems = MENU_ITEMS.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const hookahItems = MENU_ITEMS.filter(item => item.category === 'hookah');
  const nonHookahItems = filteredItems.filter(item => item.category !== 'hookah');

  return (
    <section id="menu" className="py-16 sm:py-28 bg-[#FAF7F2] border-t border-cream-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <h2 className="font-sans text-2xl sm:text-3xl text-coffee-950 font-bold tracking-tight mb-2">
            {t.menu.title}
          </h2>
          <p className="text-xs sm:text-sm text-coffee-700 font-normal">
            {t.menu.subtitle}
          </p>
        </div>

        {/* Mobile-Optimized Category Tabs: Horizontal Scroll with momentum on Mobile, Centered wrap on Desktop */}
        <div className="sticky top-[60px] sm:top-[76px] z-30 bg-[#FAF7F2]/95 backdrop-blur-md -mx-4 px-4 sm:mx-0 sm:px-0 py-3 mb-8 sm:mb-14 border-b border-cream-300">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none snap-x sm:flex-wrap sm:justify-center py-1">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  type="button"
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all rounded-full shrink-0 snap-center ${
                    isSelected
                      ? 'bg-coffee-900 text-cream-100 shadow-sm scale-[1.02]'
                      : 'text-coffee-700 hover:text-coffee-950 bg-cream-200/80 hover:bg-cream-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Food & Beverage Items Grid - Sleek Compact Card on Mobile, 3-Col on Desktop */}
        {nonHookahItems.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 mb-12">
            {nonHookahItems.map((item) => (
              <div
                key={item.id}
                className="group bg-cream-100 rounded-2xl border border-cream-300/90 overflow-hidden shadow-sm hover:shadow-md hover:border-caramel-500/40 transition-all flex flex-row sm:flex-col justify-between p-3 sm:p-0"
              >
                {/* Photo: Thumbnail on Mobile, Generous 4:3 Showcase on Desktop */}
                <div className="w-24 h-24 sm:w-full sm:h-auto sm:aspect-[4/3] relative overflow-hidden bg-cream-200 rounded-xl sm:rounded-none shrink-0 self-center sm:self-auto">
                  <img
                    src={item.image}
                    alt={isAr ? item.nameAr : item.nameEn}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallback) {
                        target.dataset.fallback = 'true';
                        target.src = 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=700&q=80';
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 ps-3.5 sm:ps-5 sm:pe-5 sm:pt-4 sm:pb-5 flex flex-col justify-between">
                  <div>
                    <h3 className="font-sans text-sm sm:text-base font-bold text-coffee-950 group-hover:text-caramel-700 transition-colors truncate sm:whitespace-normal">
                      {isAr ? item.nameAr : item.nameEn}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-coffee-500 font-medium mt-0.5 truncate sm:whitespace-normal">
                      {isAr ? item.nameEn : item.nameAr}
                    </p>
                  </div>

                  {/* Clean Price Aligned to the Opposite Side */}
                  <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-cream-300/70 flex items-center justify-end">
                    {item.priceLarge ? (
                      <div className="text-xs sm:text-xs font-bold text-coffee-900 font-sans text-end">
                        {isAr ? item.priceLabelAr : item.priceLabelEn}{' '}
                        <span className="text-coffee-600 font-semibold">{t.menu.priceUnit}</span>
                      </div>
                    ) : (
                      <div className="text-sm sm:text-base font-extrabold text-coffee-950 font-sans text-end">
                        {item.price}{' '}
                        <span className="text-xs font-semibold text-coffee-600">
                          {t.menu.priceUnit}
                        </span>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Dedicated Elegant Hookah (المعسلات) Board */}
        {(selectedCategory === 'all' || selectedCategory === 'hookah') && (
          <div className="mt-8 bg-cream-100 rounded-2xl sm:rounded-3xl border border-cream-300 p-4 sm:p-10 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-6 border-b border-cream-300 mb-6 sm:mb-8">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-caramel-700 uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isAr ? 'قسم المعسلات الفاخرة' : 'Premium Shisha Lounge'}</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-coffee-950">
                  {t.menu.categories.hookah}
                </h3>
              </div>

              <div className="inline-flex items-center gap-1.5 bg-cream-200 px-3 py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-semibold text-coffee-800 border border-cream-300 self-start sm:self-auto">
                <Flame className="w-3.5 h-3.5 text-caramel-600" />
                <span>{isAr ? 'طعم أصلي وفحم طبيعي ممتاز' : 'Natural Coals & Premium Quality'}</span>
              </div>
            </div>

            {/* Flavor Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
              {hookahItems.map((item) => {
                const isRefill = item.id === 'hk-refill';
                return (
                  <div
                    key={item.id}
                    className={`p-3 sm:p-4 rounded-xl border transition-all flex items-center justify-between ${
                      isRefill
                        ? 'bg-caramel-100/60 border-caramel-300/80'
                        : 'bg-cream-50/70 border-cream-300/70 hover:border-caramel-500/40 hover:bg-cream-50'
                    }`}
                  >
                    <div>
                      <h4 className="font-sans font-bold text-xs sm:text-sm text-coffee-950">
                        {isAr ? item.nameAr : item.nameEn}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-coffee-500 font-medium">
                        {isAr ? item.nameEn : item.nameAr}
                      </p>
                    </div>

                    <div className="text-end ps-3">
                      <span className="text-sm sm:text-base font-extrabold text-coffee-950 font-sans">
                        {item.price}
                      </span>{' '}
                      <span className="text-xs font-bold text-caramel-700 font-sans">
                        {t.menu.priceUnit}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-cream-300 text-center text-[11px] sm:text-xs text-coffee-600 font-medium">
              {isAr 
                ? 'جلسات مخصصة ومريحة • فحم طبيعي مستمر متجدد طوال جلستكم' 
                : 'Dedicated comfortable lounge seating • Continuously refreshed natural coals'}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
