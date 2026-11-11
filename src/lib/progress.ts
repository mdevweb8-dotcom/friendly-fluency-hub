// Progress rules: XP, daily goal, energy, streak, course percent, lesson locking.
export const STORAGE_KEY = "arabic-english-app-v1";
export const DAILY_GOAL = 20;
export const ENERGY_MAX = 25;
export const COURSE_UNITS = 26;
export const COURSE_LESSONS = 130;
export const LESSONS_PER_UNIT = 5;
export const XP_PER_CORRECT = 2;

export interface DailyStats {
  date: string;
  xp: number;
  attempts: number;
}
export interface AppState {
  completed: Record<string, number>;
  xp: number;
  streak: number;
  lastStudy: string;
  daily: DailyStats;
  profile: { name: string; email: string };
}

export const DEFAULT_STATE: AppState = {
  completed: {},
  xp: 0,
  streak: 0,
  lastStudy: "",
  daily: { date: "", xp: 0, attempts: 0 },
  profile: { name: "متعلم", email: "" },
};

export const dateKey = (d: Date) => d.toLocaleDateString("en-CA");
export const today = (now = new Date()) => dateKey(now);
export const yesterday = (now = new Date()) => {
  const d = new Date(now);
  d.setDate(d.getDate() - 1);
  return dateKey(d);
};

export const todayStats = (s: AppState, now = new Date()): DailyStats =>
  s.daily?.date === today(now) ? s.daily : { date: today(now), xp: 0, attempts: 0 };

export function recordStudy(s: AppState, xpGain: number, now = new Date()): AppState {
  const daily = todayStats(s, now);
  const streak =
    s.lastStudy === today(now) ? s.streak : s.lastStudy === yesterday(now) ? s.streak + 1 : 1;
  return {
    ...s,
    xp: s.xp + xpGain,
    streak,
    lastStudy: today(now),
    daily: { date: today(now), xp: daily.xp + xpGain, attempts: daily.attempts },
  };
}

/** Starting a lesson uses one energy point for today. */
export function spendEnergy(s: AppState, now = new Date()): AppState {
  const daily = todayStats(s, now);
  return { ...s, daily: { ...daily, attempts: daily.attempts + 1 } };
}

export const energyLeft = (s: AppState, now = new Date()) =>
  Math.max(0, ENERGY_MAX - todayStats(s, now).attempts);

export const currentStreak = (s: AppState, now = new Date()) =>
  s.lastStudy === today(now) || s.lastStudy === yesterday(now) ? s.streak : 0;

export const lessonXp = (correct: number) => correct * XP_PER_CORRECT;

export const courseProgress = (completedCount: number) =>
  Math.round((completedCount / COURSE_LESSONS) * 100);

export const crossedDailyGoal = (before: number, after: number) =>
  before < DAILY_GOAL && after >= DAILY_GOAL;

export type LessonState = "done" | "open" | "locked";

/** A lesson is open only when every lesson before it is done. */
export function lessonStates(ids: string[], completed: Record<string, number>): LessonState[] {
  return ids.map((id, i) => {
    if (id in completed) return "done";
    const prev = ids[i - 1];
    return i === 0 || (prev !== undefined && prev in completed) ? "open" : "locked";
  });
}

export function loadState(raw: string | null): AppState {
  if (!raw) return DEFAULT_STATE;
  try {
    return { ...DEFAULT_STATE, ...(JSON.parse(raw) as Partial<AppState>) };
  } catch {
    return DEFAULT_STATE;
  }
}
