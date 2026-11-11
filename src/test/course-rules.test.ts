import { describe, expect, it } from "vitest";
import { LESSONS, LEVELS, UNITS } from "@/data/lessons";
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

describe("course content", () => {
  it("has all 26 units: 13 in A1 then 13 in A2", () => {
    expect(UNITS).toHaveLength(COURSE_UNITS);
    expect(UNITS.filter((u) => u.level === "A1")).toHaveLength(13);
    expect(UNITS.filter((u) => u.level === "A2")).toHaveLength(13);
    expect(UNITS.slice(0, 5).map((u) => u.id)).toEqual(["A1-1", "A1-2", "A1-3", "A1-4", "A1-5"]);
    expect(UNITS.map((u) => u.number)).toEqual(Array.from({ length: 26 }, (_, i) => i + 1));
    expect(LEVELS.map((l) => l.id)).toEqual(["A1", "A2"]);
  });

  it("has 130 lessons: 5 per unit, 5 words and 3 sentences per lesson", () => {
    expect(LESSONS).toHaveLength(COURSE_LESSONS);
    for (const unit of UNITS) {
      expect(unit.lessons).toHaveLength(5);
      for (const lesson of unit.lessons) {
        expect(lesson.words).toHaveLength(5);
        expect(lesson.sentences).toHaveLength(3);
      }
    }
  });

  it("gives every word en, ar, pron (Arabic letters), ipa and ex", () => {
    for (const lesson of LESSONS) {
      for (const w of lesson.words) {
        expect(Object.keys(w).sort()).toEqual(["ar", "en", "ex", "ipa", "pron"]);
        expect(w.pron).toMatch(/[\u0600-\u06FF]/);
        expect(w.ipa).toMatch(/^\/.+\/$/);
      }
      for (const s of lesson.sentences) {
        expect(s.pron).toMatch(/[\u0600-\u06FF]/);
        expect(s.ipa).toMatch(/^\/.+\/$/);
      }
    }
  });

  it("does not repeat a word anywhere in the course (650 words)", () => {
    const all = LESSONS.flatMap((l) => l.words.map((w) => w.en.toLowerCase()));
    expect(new Set(all).size).toBe(650);
  });

  it("does not repeat a sentence inside a unit", () => {
    for (const unit of UNITS) {
      const all = unit.lessons.flatMap((l) => l.sentences.map((s) => s.en.toLowerCase()));
      expect(new Set(all).size).toBe(15);
    }
  });

  it("grammar has one blank and the answer is one of 3 options", () => {
    for (const l of LESSONS) {
      expect(l.grammar.prompt).toContain("___");
      expect(new Set(l.grammar.options).size).toBe(3);
      expect(l.grammar.options).toContain(l.grammar.answer);
    }
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
