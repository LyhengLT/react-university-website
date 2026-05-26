export const FOUNDING_YEAR = 1992;
export const CAMBODIA_TIME_ZONE = 'Asia/Phnom_Penh';

export function getSiteDateInfo(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: CAMBODIA_TIME_ZONE,
    year: 'numeric',
    month: 'numeric',
  }).formatToParts(now);
  const currentYear = Number(parts.find((part) => part.type === 'year')?.value);
  const currentMonth = Number(parts.find((part) => part.type === 'month')?.value);
  const intakeYear = currentMonth >= 9 ? currentYear + 1 : currentYear;
  const previousYear = currentYear - 1;
  const yearsOfExcellence = Math.max(0, currentYear - FOUNDING_YEAR);

  return {
    currentYear,
    intakeYear,
    previousYear,
    yearsOfExcellence,
  };
}

export function formatCambodiaDateTime(date = new Date()) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: CAMBODIA_TIME_ZONE,
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}
