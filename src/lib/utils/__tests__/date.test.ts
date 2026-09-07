import { describe, it, expect } from 'vitest';
import { getLocalDateString, formatVietnameseDate } from '../date';

describe('Date & Timezone Utility Functions', () => {
  it('formats YYYY-MM-DD correctly in Asia/Ho_Chi_Minh', () => {
    const fixedDate = new Date('2026-09-08T15:00:00Z'); // 22:00 in Vietnam (UTC+7) on Sept 8
    const dateStr = getLocalDateString(fixedDate, 'Asia/Ho_Chi_Minh');
    expect(dateStr).toBe('2026-09-08');
  });

  it('handles midnight boundary transition correctly', () => {
    // 17:05 UTC on Sept 8 = 00:05 UTC+7 on Sept 9
    const midnightBoundaryDate = new Date('2026-09-08T17:05:00Z');
    const dateStr = getLocalDateString(midnightBoundaryDate, 'Asia/Ho_Chi_Minh');
    expect(dateStr).toBe('2026-09-09');
  });

  it('formats Vietnamese date string correctly', () => {
    expect(formatVietnameseDate('2026-09-08')).toBe('Thứ Ba, 08/09/2026');
    expect(formatVietnameseDate('2026-09-09')).toBe('Thứ Tư, 09/09/2026');
  });
});
