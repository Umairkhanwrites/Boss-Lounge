export const BOSS_PHONE_NUMBER = '966537631823'; // +966 53 763 1823

export function getWhatsAppInquiryUrl(isAr: boolean): string {
  const message = isAr
    ? 'مرحباً بوس لاونج، أود الاستفسار عن الجلسات ومحاصيل اليوم.'
    : 'Hello Boss Lounge, I would like to inquire about your specialty coffee roasts and seating today.';
  return `https://wa.me/${BOSS_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}
