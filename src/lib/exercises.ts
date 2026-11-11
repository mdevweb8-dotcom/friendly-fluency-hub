// Builds the 8 exercises of a lesson (fixed order) and grades answers.
import type { CourseLesson, Grammar, Sentence, Word } from "@/data/lessons";

export const EXERCISE_ORDER = [
  "listenRead",
  "match",
  "arrange",
  "choice",
  "speak",
  "listenChoose",
  "build",
  "grammar",
] as const;
export type ExerciseType = (typeof EXERCISE_ORDER)[number];

export const EXERCISE_LABELS: Record<ExerciseType, string> = {
  listenRead: "استمع واقرأ",
  match: "طابق الأزواج",
  arrange: "رتب الكلمات الإنجليزية",
  choice: "اختر الإجابة الصحيحة",
  speak: "اقرأ بصوت عال",
  listenChoose: "استمع واختر",
  build: "تركيب جمل",
  grammar: "قواعد",
};

export interface Tile {
  id: number;
  text: string;
}
export type Exercise =
  | { type: "listenRead"; sentences: Sentence[]; words: Word[] }
  | { type: "match"; pairs: { id: number; en: string; ar: string }[]; enOrder: number[]; arOrder: number[] }
  | { type: "arrange" | "build"; ar: string; answer: string; tiles: Tile[] }
  | { type: "choice"; ar: string; options: string[]; answer: string }
  | { type: "speak"; sentence: Sentence }
  | { type: "listenChoose"; audio: string; options: string[]; answer: string }
  | ({ type: "grammar" } & Grammar);

type Rng = () => number;

export function shuffle<T>(items: T[], rng: Rng = Math.random): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const a = copy[i] as T;
    copy[i] = copy[j] as T;
    copy[j] = a;
  }
  return copy;
}

export const tokenize = (text: string) => text.split(/\s+/).filter(Boolean);
export const normalize = (text: string) =>
  String(text)
    .toLowerCase()
    .replace(/[’]/g, "'")
    .replace(/[.!?,؟،—]/g, "")
    .replace(/\s+/g, " ")
    .trim();

/** Shuffle so the order differs from the original whenever possible. */
function scramble<T>(items: T[], rng: Rng): T[] {
  if (items.length < 2) return [...items];
  for (let i = 0; i < 6; i++) {
    const s = shuffle(items, rng);
    if (s.some((v, k) => v !== items[k])) return s;
  }
  return [...items].reverse();
}

function pickOthers(target: string, pool: string[], count: number, rng: Rng) {
  const unique = [...new Set(pool)].filter((s) => normalize(s) !== normalize(target));
  return shuffle(unique, rng).slice(0, count);
}

function wordTiles(sentence: string, extra: string[], rng: Rng): Tile[] {
  return scramble([...tokenize(sentence), ...extra], rng).map((text, id) => ({ id, text }));
}

export function buildLessonExercises(
  lesson: CourseLesson,
  rng: Rng = Math.random,
): Exercise[] {
  const [s0, s1, s2] = lesson.sentences as [Sentence, Sentence, Sentence];
  const unitSentences = lesson.unit.lessons.flatMap((l) => l.sentences.map((s) => s.en));
  const matchPairs = [s0, s1, s2].map((s, id) => ({ id, en: s.en, ar: s.ar }));
  const targetTokens = new Set(tokenize(s1.en).map(normalize));
  const distractors = shuffle(
    [...new Set(unitSentences.flatMap(tokenize))].filter((t) => !targetTokens.has(normalize(t))),
    rng,
  ).slice(0, 2);

  return [
    { type: "listenRead", sentences: [s0, s1], words: lesson.words },
    {
      type: "match",
      pairs: matchPairs,
      enOrder: scramble([0, 1, 2], rng),
      arOrder: scramble([0, 1, 2], rng),
    },
    { type: "arrange", ar: s0.ar, answer: s0.en, tiles: wordTiles(s0.en, [], rng) },
    {
      type: "choice",
      ar: s2.ar,
      answer: s2.en,
      options: shuffle([s2.en, ...pickOthers(s2.en, unitSentences, 2, rng)], rng),
    },
    { type: "speak", sentence: s1 },
    {
      type: "listenChoose",
      audio: s2.en,
      answer: s2.en,
      options: shuffle([s2.en, ...pickOthers(s2.en, unitSentences, 2, rng)], rng),
    },
    { type: "build", ar: s1.ar, answer: s1.en, tiles: wordTiles(s1.en, distractors, rng) },
    { type: "grammar", ...lesson.grammar, options: shuffle(lesson.grammar.options, rng) },
  ];
}

/** Daily review: 5 quick questions taken from lessons already finished. */
export function buildReview(done: CourseLesson[], rng: Rng = Math.random): Exercise[] {
  if (done.length === 0) return [];
  const kinds: ExerciseType[] = ["choice", "listenChoose", "arrange", "grammar", "build"];
  return kinds.map((kind) => {
    const lesson = shuffle(done, rng)[0] as CourseLesson;
    const all = buildLessonExercises(lesson, rng);
    return all.find((e) => e.type === kind) as Exercise;
  });
}

export function speechMatches(target: string, transcript: string) {
  const want = tokenize(normalize(target));
  const said = new Set(tokenize(normalize(transcript)));
  if (want.length === 0) return false;
  const hits = want.filter((w) => said.has(w)).length;
  return hits / want.length >= 0.6;
}

export type AnswerValue =
  | string
  | string[]
  | { mistakes: number }
  | { transcript?: string; skipped?: boolean }
  | true;

export function gradeExercise(ex: Exercise, value: AnswerValue | null): boolean {
  if (value === null) return false;
  switch (ex.type) {
    case "listenRead":
    case "match":
      return true;
    case "arrange":
    case "build":
      return Array.isArray(value) && normalize(value.join(" ")) === normalize(ex.answer);
    case "choice":
    case "listenChoose":
    case "grammar":
      return value === ex.answer;
    case "speak": {
      if (typeof value !== "object" || Array.isArray(value)) return false;
      if ("skipped" in value && value.skipped) return true;
      return "transcript" in value && speechMatches(ex.sentence.en, value.transcript ?? "");
    }
  }
}
