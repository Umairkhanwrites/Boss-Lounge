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
    <section id="menu" className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-cream-300">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-sans text-2xl sm:text-3xl text-coffee-950 font-bold tracking-tight mb-2">
            {t.menu.title}
          </h2>
          <p className="text-sm text-coffee-700 font-normal">
            {t.menu.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-14 flex-wrap border-b border-cream-300 pb-4">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                type="button"
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold tracking-wide transition-all rounded-full ${
                  isSelected
                    ? 'bg-coffee-900 text-cream-100 shadow-sm'
                    : 'text-coffee-700 hover:text-coffee-950 hover:bg-cream-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Regular Food & Beverage Items Grid */}
        {nonHookahItems.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {nonHookahItems.map((item) => (
              <div
                key={item.id}
                className="group bg-cream-100 rounded-2xl border border-cream-300/90 overflow-hidden shadow-sm hover:shadow-md hover:border-caramel-500/40 transition-all flex flex-col justify-between"
              >
                {/* Authentic Food Photo with Fallback */}
                <div className="aspect-[16/10] relative overflow-hidden bg-cream-200">
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

                {/* Item Details */}
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-sans text-base font-bold text-coffee-950 group-hover:text-caramel-700 transition-colors">
                      {isAr ? item.nameAr : item.nameEn}
                    </h3>
                    <p className="text-xs text-coffee-500 font-medium mt-0.5">
                      {isAr ? item.nameEn : item.nameAr}
                    </p>
                  </div>

                  {/* Clean Price Display (Removed redundant Boss Lounge tag) */}
                  <div className="pt-3 mt-3 border-t border-cream-300/70 flex items-center justify-between">
                    {item.priceLarge ? (
                      <div className="text-xs font-bold text-coffee-900 font-sans">
                        {isAr ? item.priceLabelAr : item.priceLabelEn}{' '}
                        <span className="text-coffee-600 font-semibold">{t.menu.priceUnit}</span>
                      </div>
                    ) : (
                      <div className="text-base font-extrabold text-coffee-950 font-sans">
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
          <div className="mt-8 bg-cream-100 rounded-3xl border border-cream-300 p-6 sm:p-10 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-cream-300 mb-8">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-caramel-700 uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isAr ? 'قسم المعسلات الفاخرة' : 'Premium Shisha Lounge'}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-coffee-950">
                  {t.menu.categories.hookah}
                </h3>
              </div>

              <div className="inline-flex items-center gap-2 bg-cream-200 px-4 py-2 rounded-xl text-xs font-semibold text-coffee-800 border border-cream-300 self-start sm:self-auto">
                <Flame className="w-4 h-4 text-caramel-600" />
                <span>{isAr ? 'طعم أصلي وفحم طبيعي ممتاز' : 'Natural Coals & Premium Quality'}</span>
              </div>
            </div>

            {/* Flavor Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {hookahItems.map((item) => {
                const isRefill = item.id === 'hk-refill';
                return (
                  <div
                    key={item.id}
                    className={`p-4 rounded-xl border transition-all flex items-center justify-between ${
                      isRefill
                        ? 'bg-caramel-100/60 border-caramel-300/80'
                        : 'bg-cream-50/70 border-cream-300/70 hover:border-caramel-500/40 hover:bg-cream-50'
                    }`}
                  >
                    <div>
                      <h4 className="font-sans font-bold text-sm text-coffee-950">
                        {isAr ? item.nameAr : item.nameEn}
                      </h4>
                      <p className="text-[11px] text-coffee-500 font-medium">
                        {isAr ? item.nameEn : item.nameAr}
                      </p>
                    </div>

                    <div className="text-end ps-3">
                      <span className="text-base font-extrabold text-coffee-950 font-sans">
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

            <div className="mt-8 pt-4 border-t border-cream-300 text-center text-xs text-coffee-600 font-medium">
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
