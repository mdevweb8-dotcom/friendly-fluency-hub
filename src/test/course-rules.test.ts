import { describe, expect, it } from "vitest";
import { LESSONS, UNITS } from "@/data/lessons";
import { EXERCISE_ORDER, buildLessonExercises, gradeExercise } from "@/lib/exercises";
import {
  DAILY_GOAL,
  DEFAULT_STATE,
  ENERGY_MAX,
  COURSE_LESSONS,
  COURSE_UNITS,
  courseProgress,
  crossedDailyGoal,
  energyLeft,
  lessonStates,
  lessonXp,
  recordStudy,
  spendEnergy,
} from "@/lib/progress";

describe("A1 content", () => {
  it("has exactly 5 units", () => {
    expect(UNITS.map((u) => u.id)).toEqual(["A1-1", "A1-2", "A1-3", "A1-4", "A1-5"]);
  });

  it("has 5 lessons per unit and 5 words per lesson", () => {
    for (const unit of UNITS) {
      expect(unit.lessons).toHaveLength(5);
      for (const lesson of unit.lessons) expect(lesson.words).toHaveLength(5);
    }
  });

  it("gives every word en, ar, pron (Arabic letters), ipa and ex", () => {
    for (const lesson of LESSONS) {
      for (const w of lesson.words) {
        expect(Object.keys(w).sort()).toEqual(["ar", "en", "ex", "ipa", "pron"]);
        expect(w.pron).toMatch(/[\u0600-\u06FF]/);
        expect(w.ipa).toMatch(/^\/.+\/$/);
      }
    }
  });

  it("does not repeat a word across A1", () => {
    const all = LESSONS.flatMap((l) => l.words.map((w) => w.en.toLowerCase()));
    expect(new Set(all).size).toBe(125);
  });

  it("grammar answers are one of the options", () => {
    for (const l of LESSONS) expect(l.grammar.options).toContain(l.grammar.answer);
  });
});

describe("lesson exercises", () => {
  it("every lesson has 8 exercises in the agreed order", () => {
    for (const lesson of LESSONS) {
      expect(buildLessonExercises(lesson).map((e) => e.type)).toEqual([
        "listenRead",
        "match",
        "arrange",
        "choice",
        "speak",
        "listenChoose",
        "build",
        "grammar",
      ]);
    }
    expect(EXERCISE_ORDER).toHaveLength(8);
  });

  it("arranging the tiles in sentence order is correct, wrong order is not", () => {
    const lesson = LESSONS.find((l) => l.id === "A1-1-L3")!;
    const arrange = buildLessonExercises(lesson)[2]!;
    expect(gradeExercise(arrange, ["He's", "my", "brother."])).toBe(true);
    expect(gradeExercise(arrange, ["my", "He's", "brother."])).toBe(false);
  });

  it("grammar for She's my sister accepts only She's", () => {
    const lesson = LESSONS.find((l) => l.id === "A1-1-L3")!;
    const grammar = buildLessonExercises(lesson)[7]!;
    expect(gradeExercise(grammar, "She's")).toBe(true);
    expect(gradeExercise(grammar, "He's")).toBe(false);
  });

  it("speaking can be skipped", () => {
    const speak = buildLessonExercises(LESSONS[0]!)[4]!;
    expect(gradeExercise(speak, { skipped: true })).toBe(true);
  });
});

describe("progress rules", () => {
  const now = new Date("2026-11-11T10:00:00");

  it("energy starts at 25 and each lesson start uses 1", () => {
    expect(ENERGY_MAX).toBe(25);
    let s = DEFAULT_STATE;
    for (let i = 0; i < 4; i++) s = spendEnergy(s, now);
    expect(energyLeft(s, now)).toBe(21);
  });

  it("daily goal is 20 XP and the badge triggers only when crossing it", () => {
    expect(DAILY_GOAL).toBe(20);
    expect(crossedDailyGoal(16, 20)).toBe(true);
    expect(crossedDailyGoal(20, 30)).toBe(false);
    expect(crossedDailyGoal(4, 18)).toBe(false);
  });

  it("each correct answer gives 2 XP", () => {
    expect(lessonXp(8)).toBe(16);
  });

  it("course is 26 units / 130 lessons; 6 completed shows 5%", () => {
    expect(COURSE_UNITS).toBe(26);
    expect(COURSE_LESSONS).toBe(130);
    expect(courseProgress(6)).toBe(5);
  });

  it("only the first unfinished lesson is open, later ones are locked", () => {
    expect(lessonStates(["a", "b", "c"], { a: 90 })).toEqual(["done", "open", "locked"]);
  });

  it("studying on consecutive days grows the streak", () => {
    const day1 = recordStudy(DEFAULT_STATE, 10, new Date("2026-11-10T10:00:00"));
    const day2 = recordStudy(day1, 10, now);
    expect(day2.streak).toBe(2);
    expect(day2.daily.xp).toBe(10);
  });
});
