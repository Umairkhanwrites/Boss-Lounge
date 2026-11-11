export type Language = 'ar' | 'en';

export type MenuCategory = 
  | 'all' 
  | 'hot_drinks' 
  | 'cold_drinks' 
  | 'desserts' 
  | 'fast_food' 
  | 'pizza' 
  | 'bakery_shakes' 
  | 'hookah';

export interface MenuItem {
  id: string;
  nameEn: string;
  nameAr: string;
  category: MenuCategory;
  price: number; // primary price in SAR
  priceLarge?: number; // optional large price if multiple sizes
  priceLabelAr?: string;
  priceLabelEn?: string;
  image: string;
  tagsEn?: string[];
  tagsAr?: string[];
}
