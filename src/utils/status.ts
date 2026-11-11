/**
 * Boss Lounge Operating Hours:
 * Daily 3:00 PM (15:00) to 6:00 AM (06:00 next day) AST (Saudi Arabia Standard Time, UTC+3)
 */

export interface LoungeStatus {
  isOpen: boolean;
  astTimeString: string;
  badgeTextEn: string;
  badgeTextAr: string;
}

export function getBossLoungeStatus(): LoungeStatus {
  const now = new Date();
  
  const astFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Riyadh',
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
  });

  const astDisplayFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Riyadh',
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
  });

  const parts = astFormatter.formatToParts(now);
  const hourPart = parts.find(p => p.type === 'hour')?.value || '0';
  const minutePart = parts.find(p => p.type === 'minute')?.value || '0';
  
  const currentHour = parseInt(hourPart, 10);
  const currentMinute = parseInt(minutePart, 10);
  const timeInMinutes = currentHour * 60 + currentMinute;

  // Open between 15:00 (3 PM) and 06:00 (6 AM)
  const isOpen = (timeInMinutes >= 15 * 60) || (timeInMinutes < 6 * 60);
  const astTimeString = astDisplayFormatter.format(now);

  return {
    isOpen,
    astTimeString,
    badgeTextEn: isOpen ? 'Open · until 6:00 AM' : 'Opens at 3:00 PM',
    badgeTextAr: isOpen ? 'مفتوح · حتى 6:00 ص' : 'يفتح 3:00 عصراً',
  };
}
