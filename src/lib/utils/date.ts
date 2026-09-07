/**
 * Timezone & Date Helper Utilities for DailyGo
 */

export const DEFAULT_TIMEZONE = 'Asia/Ho_Chi_Minh';

/**
 * Converts a JS Date object to a local date string (YYYY-MM-DD) in a target IANA timezone.
 * Avoids errors caused by naive `new Date().toISOString().slice(0, 10)` around midnight boundaries.
 */
export function getLocalDateString(
  date: Date = new Date(),
  timeZone: string = DEFAULT_TIMEZONE
): string {
  try {
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: timeZone || DEFAULT_TIMEZONE,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    // 'en-CA' produces YYYY-MM-DD
    return formatter.format(date);
  } catch {
    // Fallback if timezone is invalid
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}

/**
 * Returns today's YYYY-MM-DD string in user's timezone.
 */
export function getTodayLocalDate(timeZone: string = DEFAULT_TIMEZONE): string {
  return getLocalDateString(new Date(), timeZone);
}

/**
 * Returns tomorrow's YYYY-MM-DD string in user's timezone.
 */
export function getTomorrowLocalDate(timeZone: string = DEFAULT_TIMEZONE): string {
  const now = new Date();
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  return getLocalDateString(tomorrow, timeZone);
}

/**
 * Returns a date string YYYY-MM-DD offset by specified number of days in user's timezone.
 */
export function getOffsetLocalDate(
  offsetDays: number,
  timeZone: string = DEFAULT_TIMEZONE
): string {
  const now = new Date();
  const offsetDate = new Date(now.getTime() + offsetDays * 24 * 60 * 60 * 1000);
  return getLocalDateString(offsetDate, timeZone);
}

/**
 * Formats a YYYY-MM-DD date string into friendly Vietnamese text.
 * E.g. "2026-09-08" -> "Thứ Ba, 08/09/2026"
 */
export function formatVietnameseDate(dateStr: string): string {
  if (!dateStr || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return dateStr;
  
  const [yearStr, monthStr, dayStr] = dateStr.split('-');
  const year = parseInt(yearStr, 10);
  const month = parseInt(monthStr, 10) - 1;
  const day = parseInt(dayStr, 10);

  const dateObj = new Date(Date.UTC(year, month, day, 12, 0, 0));

  const daysOfWeek = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  const dayName = daysOfWeek[dateObj.getUTCDay()];

  const pad = (n: number) => String(n).padStart(2, '0');
  return `${dayName}, ${pad(day)}/${pad(month + 1)}/${year}`;
}
