export interface Word {
  en: string;
  ar: string;
  pron: string;
  ipa: string;
  ex: string;
}
export interface Sentence {
  en: string;
  ar: string;
  pron: string;
  ipa: string;
}
export interface Grammar {
  rule: string;
  prompt: string;
  ar: string;
  options: string[];
  answer: string;
}
export interface Lesson {
  id: string;
  number: number;
  title: string;
  words: Word[];
  sentences: Sentence[];
  grammar: Grammar;
}
export interface Unit {
  id: string;
  level: string;
  number: number;
  topic: string;
  lessons: Lesson[];
}
export interface CourseLesson extends Lesson {
  unit: Unit;
}
export const UNITS: Unit[];
export const LESSONS: CourseLesson[];
