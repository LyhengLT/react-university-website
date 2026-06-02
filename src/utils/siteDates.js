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

const dailyCampusBriefs = {
  Monday: {
    title: 'Admissions Focus',
    text: 'Start the week by comparing degree pathways, checking intake requirements, and shortlisting the programs that fit your goals.',
    meta: 'Best move: pick 2-3 programs',
  },
  Tuesday: {
    title: 'Scholarship Clinic',
    text: 'Use today to prepare scholarship documents, update academic records, and review the support options available for new students.',
    meta: 'Best move: gather key documents',
  },
  Wednesday: {
    title: 'Program Match Day',
    text: 'Explore how each faculty connects to careers, internships, exchange opportunities, and long-term professional growth.',
    meta: 'Best move: compare outcomes',
  },
  Thursday: {
    title: 'Career Pathways',
    text: 'Look at employability, industry-ready skills, and how BIU programs connect classroom learning with real workplace direction.',
    meta: 'Best move: map degree to career',
  },
  Friday: {
    title: 'Campus Life Preview',
    text: 'Take a closer look at clubs, student activities, events, and the community experience waiting beyond the classroom.',
    meta: 'Best move: find your community',
  },
  Saturday: {
    title: 'Open Campus Window',
    text: 'A good day to visit, ask questions, talk with admissions, and get a clearer feel for the campus before choosing your next step.',
    meta: 'Best move: plan a visit',
  },
  Sunday: {
    title: 'Planning Reset',
    text: 'Slow down, review your options, and turn your questions into a simple action list for the next admissions week.',
    meta: 'Best move: set next steps',
  },
};

function addDays(date, days) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + days);
  return nextDate;
}

function getCambodiaWeekday(date = new Date()) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: CAMBODIA_TIME_ZONE,
    weekday: 'long',
  }).format(date);
}

export function getDailyCampusBrief(now = new Date()) {
  const todayLabel = getCambodiaWeekday(now);
  const tomorrowLabel = getCambodiaWeekday(addDays(now, 1));

  return {
    todayLabel,
    tomorrowLabel,
    today: dailyCampusBriefs[todayLabel],
    tomorrow: dailyCampusBriefs[tomorrowLabel],
  };
}
