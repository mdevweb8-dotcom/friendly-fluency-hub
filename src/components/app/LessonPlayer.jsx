import { useEffect, useRef, useState } from 'react';
import { Button, Icon, OptionButton, ProgressBar, Stat, speak } from './kit';
import { EXERCISE_LABELS, gradeExercise, tokenize } from '@/lib/exercises';
import { ENERGY_MAX, LESSONS_PER_UNIT, lessonXp } from '@/lib/progress';

const cardClass = 'rounded-[20px] border border-[#E2E8F0] bg-white p-5 shadow-[0_4px_16px_rgba(15,23,42,0.06)]';
const cleanWord = (t) => t.replace(/[.,!?]/g, '');

function SpeakerButton({ text, label = 'استمع', className = '' }) {
  return (
    <Button variant="secondary" className={className} onClick={() => speak(text)}>
      <Icon name="speaker" className="h-4 w-4" /> {label}
    </Button>
  );
}

// 1. استمع واقرأ
function ListenRead({ ex }) {
  const text = ex.sentences.map((s) => s.en).join(' ');
  return (
    <div className="space-y-4">
      <div className={`${cardClass} text-center`}>
        {ex.sentences.map((s) => (
          <div key={s.en} className="mb-3 last:mb-0">
            <p dir="ltr" className="text-xl font-bold text-slate-900">{s.en}</p>
            <p className="mt-1 text-sm text-slate-600">{s.ar}</p>
          </div>
        ))}
        <Button className="mt-3 w-full" onClick={() => speak(text, 0.85)}>
          <Icon name="speaker" className="h-4 w-4" /> أبدأ الاستماع
        </Button>
      </div>
      <div className={cardClass}>
        <p className="mb-3 text-sm font-bold text-[#1A6FA0]">كلمات الدرس</p>
        <ul className="space-y-2">
          {ex.words.map((w) => (
            <li key={w.en}>
              <button
                type="button"
                onClick={() => speak(w.en)}
                className="flex w-full items-center gap-3 rounded-2xl bg-slate-50 p-3 text-start transition hover:bg-[#E6F1F8]"
              >
                <Icon name="speaker" className="h-4 w-4 shrink-0 text-[#1A6FA0]" />
                <span className="flex-1 text-sm font-bold text-slate-800">{w.ar}</span>
                <span className="text-xs text-slate-500">{w.pron}</span>
                <span dir="ltr" className="font-bold text-slate-900">{w.en}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// 2. طابق الأزواج
function MatchPairs({ ex, onAnswer }) {
  const [matched, setMatched] = useState([]);
  const [pickEn, setPickEn] = useState(null);
  const [pickAr, setPickAr] = useState(null);
  const [wrong, setWrong] = useState(null);
  const mistakes = useRef(0);

  useEffect(() => {
    if (pickEn === null || pickAr === null) return undefined;
    if (pickEn === pickAr) {
      const next = [...matched, pickEn];
      setMatched(next);
      setPickEn(null);
      setPickAr(null);
      if (next.length === ex.pairs.length) onAnswer({ mistakes: mistakes.current });
      return undefined;
    }
    mistakes.current += 1;
    setWrong({ en: pickEn, ar: pickAr });
    const t = setTimeout(() => {
      setWrong(null);
      setPickEn(null);
      setPickAr(null);
    }, 600);
    return () => clearTimeout(t);
  }, [pickEn, pickAr]); // eslint-disable-line react-hooks/exhaustive-deps

  const tileStyle = (id, side, picked) => {
    if (matched.includes(id)) return 'border-[#22C55E] bg-green-50 text-green-700';
    if (wrong && wrong[side] === id) return 'border-[#EF4444] bg-red-50 text-red-600';
    if (picked === id) return 'border-[#1A6FA0] bg-[#E6F1F8] text-[#155a82]';
    return 'border-[#E2E8F0] bg-white text-slate-900 hover:border-[#1A6FA0]';
  };
  const pair = (id) => ex.pairs.find((p) => p.id === id);

  return (
    <div>
      <p className="mb-3 text-center text-sm font-bold text-slate-500">{matched.length}/{ex.pairs.length}</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-3">
          {ex.enOrder.map((id) => (
            <button
              key={`en-${id}`}
              type="button"
              dir="ltr"
              disabled={matched.includes(id) || wrong !== null}
              onClick={() => {
                speak(pair(id).en);
                setPickEn(id);
              }}
              className={`min-h-16 w-full rounded-2xl border-2 p-3 text-sm font-bold transition ${tileStyle(id, 'en', pickEn)}`}
            >
              {pair(id).en}
            </button>
          ))}
        </div>
        <div className="space-y-3">
          {ex.arOrder.map((id) => (
            <button
              key={`ar-${id}`}
              type="button"
              disabled={matched.includes(id) || wrong !== null}
              onClick={() => setPickAr(id)}
              className={`min-h-16 w-full rounded-2xl border-2 p-3 text-sm font-bold transition ${tileStyle(id, 'ar', pickAr)}`}
            >
              {pair(id).ar}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// 3. رتب الكلمات الإنجليزية + 7. تركيب جمل
function WordBuilder({ ex, onAnswer, checked }) {
  const [picked, setPicked] = useState([]);
  const update = (next) => {
    setPicked(next);
    onAnswer(next.length ? next.map((id) => ex.tiles[id].text) : null);
  };
  return (
    <div className="space-y-5">
      <div className={`${cardClass} text-center`}>
        <p className="text-2xl font-bold text-slate-900">{ex.ar}</p>
      </div>
      <div dir="ltr" className="flex min-h-16 flex-wrap content-start gap-2 border-b-2 border-[#E2E8F0] pb-3">
        {picked.map((id) => (
          <span key={id} className="rounded-xl border-2 border-[#1A6FA0] bg-[#E6F1F8] px-3 py-2 font-bold text-[#155a82]">
            {ex.tiles[id].text}
          </span>
        ))}
      </div>
      <div dir="ltr" className="flex flex-wrap justify-center gap-2">
        {ex.tiles.map((tile) => {
          const used = picked.includes(tile.id);
          return (
            <button
              key={tile.id}
              type="button"
              disabled={used || checked}
              onClick={() => {
                speak(cleanWord(tile.text));
                update([...picked, tile.id]);
              }}
              className={`rounded-xl border-2 px-3 py-2 font-bold transition ${
                used ? 'border-slate-100 bg-slate-100 text-transparent' : 'border-[#E2E8F0] bg-white text-slate-900 hover:border-[#1A6FA0]'
              }`}
            >
              {tile.text}
            </button>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Button variant="secondary" disabled={!picked.length || checked} onClick={() => update(picked.slice(0, -1))}>
          <Icon name="undo" className="h-4 w-4" /> حذف الأخير
        </Button>
      </div>
    </div>
  );
}

function Options({ ex, value, onAnswer, checked }) {
  return (
    <div className="grid grid-cols-1 gap-3">
      {ex.options.map((opt) => (
        <OptionButton
          key={opt}
          dir="ltr"
          selected={value === opt}
          correct={checked && opt === ex.answer}
          wrong={checked && value === opt && opt !== ex.answer}
          disabled={checked}
          onClick={() => onAnswer(opt)}
        >
          {opt}
        </OptionButton>
      ))}
    </div>
  );
}

// 4. اختر الإجابة الصحيحة
function Choice(props) {
  return (
    <div className="space-y-5">
      <div className={`${cardClass} text-center`}>
        <p className="text-xl font-bold text-slate-900">كيف تقول &quot;{props.ex.ar.replace(/[.!؟?]$/, '')}&quot; بالإنجليزية؟</p>
      </div>
      <Options {...props} />
    </div>
  );
}

// 5. اقرأ بصوت عال
function SpeakAloud({ ex, value, onAnswer, onSkip, checked }) {
  const [listening, setListening] = useState(false);
  const [supported, setSupported] = useState(true);
  const recRef = useRef(null);
  const s = ex.sentence;

  useEffect(() => {
    setSupported(Boolean(window.SpeechRecognition || window.webkitSpeechRecognition));
    return () => recRef.current?.abort?.();
  }, []);

  const start = () => {
    const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Rec) return setSupported(false);
    const rec = new Rec();
    rec.lang = 'en-US';
    rec.interimResults = false;
    rec.maxAlternatives = 3;
    rec.onresult = (e) => {
      const alts = Array.from(e.results[0] ?? []).map((a) => a.transcript);
      onAnswer({ transcript: alts.join(' ') });
    };
    rec.onerror = () => setListening(false);
    rec.onend = () => setListening(false);
    recRef.current = rec;
    setListening(true);
    rec.start();
  };

  return (
    <div className="space-y-5">
      <p className="text-center text-lg font-bold text-slate-900">
        قل: <span dir="ltr">{s.en}</span>
      </p>
      <div className={`${cardClass} text-center`}>
        <p dir="ltr" className="text-2xl font-bold text-slate-900">{s.en}</p>
        <p className="mt-2 text-base font-bold text-[#1A6FA0]">{s.pron}</p>
        <p dir="ltr" className="mt-1 text-sm text-slate-500">{s.ipa}</p>
        <p className="mt-2 text-sm text-slate-600">{s.ar}</p>
        <Button variant="secondary" className="mt-4" onClick={() => speak(s.en, 0.8)}>
          <Icon name="speaker" className="h-4 w-4" /> بدء النطق
        </Button>
      </div>
      <div className="flex flex-col items-center gap-2">
        <button
          type="button"
          onClick={start}
          disabled={!supported || listening || checked}
          aria-label="تحدث الآن"
          className={`grid h-20 w-20 place-items-center rounded-full text-white shadow-lg transition active:scale-95 disabled:cursor-not-allowed ${
            listening ? 'animate-pulse bg-[#EF4444]' : supported ? 'bg-[#1A6FA0] hover:bg-[#155a82]' : 'bg-slate-300'
          }`}
        >
          <Icon name="mic" className="h-9 w-9" />
        </button>
        <span className="text-sm font-bold text-slate-700">{listening ? 'جارٍ الاستماع...' : 'تحدث الآن'}</span>
        {!supported && <p className="text-center text-xs text-slate-500">التعرف على الصوت غير متاح في هذا المتصفح، يمكنك التخطي.</p>}
        {value?.transcript && (
          <p className="text-sm text-slate-600">
            سمعنا: <span dir="ltr" className="font-bold">{value.transcript.split(' ').slice(0, tokenize(s.en).length + 2).join(' ')}</span>
          </p>
        )}
      </div>
      {!checked && (
        <button type="button" onClick={onSkip} className="mx-auto block text-sm font-bold text-[#1A6FA0] underline-offset-4 hover:underline">
          لا أستطيع التحدث الآن
        </button>
      )}
    </div>
  );
}

// 6. استمع واختر
function ListenChoose(props) {
  useEffect(() => {
    const t = setTimeout(() => speak(props.ex.audio), 300);
    return () => clearTimeout(t);
  }, [props.ex.audio]);
  return (
    <div className="space-y-5">
      <div className={`${cardClass} flex flex-col items-center`}>
        <button
          type="button"
          onClick={() => speak(props.ex.audio)}
          aria-label="استمع"
          className="grid h-20 w-20 place-items-center rounded-full bg-[#1A6FA0] text-white shadow-lg transition hover:bg-[#155a82] active:scale-95"
        >
          <Icon name="speaker" className="h-9 w-9" />
        </button>
        <button type="button" onClick={() => speak(props.ex.audio, 0.6)} className="mt-3 text-xs font-bold text-[#1A6FA0]">
          استمع ببطء
        </button>
      </div>
      <Options {...props} />
    </div>
  );
}

// 8. قواعد
function Grammar(props) {
  const { ex } = props;
  return (
    <div className="space-y-5">
      <div className="rounded-2xl bg-[#E6F1F8] p-4 text-sm font-bold leading-7 text-[#155a82]">{ex.rule}</div>
      <div className={`${cardClass} text-center`}>
        <p className="text-sm font-bold text-[#1A6FA0]">اختر الكلمة الصحيحة</p>
        <p dir="ltr" className="mt-3 text-2xl font-bold text-slate-900">{ex.prompt}</p>
        <p className="mt-2 text-sm text-slate-600">{ex.ar}</p>
      </div>
      <Options {...props} />
    </div>
  );
}

const VIEWS = {
  listenRead: ListenRead,
  match: MatchPairs,
  arrange: WordBuilder,
  choice: Choice,
  speak: SpeakAloud,
  listenChoose: ListenChoose,
  build: WordBuilder,
  grammar: Grammar,
};

const correctText = (ex) => {
  if (ex.type === 'speak') return ex.sentence.en;
  return ex.answer ?? '';
};

export default function LessonPlayer({ session, energy, onFinish, onClose }) {
  const { title, exercises, isReview } = session;
  const total = exercises.length;
  const [queue, setQueue] = useState(() => exercises.map((_, i) => i));
  const [pos, setPos] = useState(0);
  const [value, setValue] = useState(null);
  const [checked, setChecked] = useState(false);
  const [verdict, setVerdict] = useState(false);
  const [missed, setMissed] = useState(() => new Set());
  const [solved, setSolved] = useState(0);
  const [done, setDone] = useState(false);

  const index = queue[pos];
  const ex = exercises[index];
  const correct = total - missed.size;
  const xp = lessonXp(correct);

  const advance = (ok, extraMiss = false) => {
    const nextMissed = new Set(missed);
    if (!ok || extraMiss) nextMissed.add(index);
    setMissed(nextMissed);
    const nextQueue = ok ? queue : [...queue, index];
    if (ok) setSolved((n) => n + 1);
    setQueue(nextQueue);
    setValue(null);
    setChecked(false);
    if (pos + 1 >= nextQueue.length) setDone(true);
    else setPos(pos + 1);
  };

  const confirm = () => {
    if (ex.type === 'listenRead') return advance(true);
    if (value === null) return;
    setVerdict(gradeExercise(ex, value));
    setChecked(true);
  };

  if (done) {
    const progressNow = session.unitDoneAfter ?? 0;
    return (
      <Shell title={title} onClose={() => onFinish({ correct, total })}>
        <div className="flex flex-col items-center px-6 pb-32 pt-10 text-center">
          <div className="grid h-24 w-24 place-items-center rounded-full bg-green-50 text-[#22C55E]">
            <Icon name="trophy" className="h-12 w-12" />
          </div>
          <h2 className="mt-5 text-3xl font-bold text-slate-900">نجاح!</h2>
          <p className="mt-2 text-base text-slate-600">
            {isReview ? 'أحسنت! أنهيت مراجعة اليوم' : 'تهانينا! لقد وصلت إلى نهاية الوحدة'}
          </p>
          <div className={`mt-8 grid w-full gap-3 ${isReview ? 'grid-cols-2' : 'grid-cols-3'}`}>
            <Stat label="XP" value={`+${xp}`} />
            <Stat label="إجابات صحيحة" value={`${correct}/${total}`} />
            {!isReview && <Stat label="التقدم" value={`${progressNow}/${LESSONS_PER_UNIT}`} />}
          </div>
          {!isReview && (
            <div className="mt-4 w-full">
              <ProgressBar value={progressNow} max={LESSONS_PER_UNIT} color="bg-[#22C55E]" />
            </div>
          )}
        </div>
        <BottomBar>
          <Button className="w-full py-4 text-base" onClick={() => onFinish({ correct, total })}>متابعة</Button>
        </BottomBar>
      </Shell>
    );
  }

  const View = VIEWS[ex.type];
  const isListenRead = ex.type === 'listenRead';
  const ready = isListenRead || value !== null;

  return (
    <Shell
      title={title}
      onClose={onClose}
      top={
        <div className="px-4 pb-3">
          <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-500">
            <span>السؤال {Math.min(solved + 1, total)}/{total}</span>
            <span className="flex items-center gap-1 text-orange-500">
              <Icon name="bolt" className="h-4 w-4" /> {energy}/{ENERGY_MAX}
            </span>
          </div>
          <ProgressBar value={solved} max={total} color="bg-[#22C55E]" />
        </div>
      }
    >
      <div className="px-5 pb-48 pt-5">
        <h3 className="mb-4 text-lg font-bold text-slate-900">{EXERCISE_LABELS[ex.type]}</h3>
        <View
          key={`${index}-${pos}`}
          ex={ex}
          value={value}
          checked={checked}
          onAnswer={setValue}
          onSkip={() => advance(true)}
        />
      </div>
      <BottomBar>
        {checked && (
          <div
            role="status"
            className={`mb-3 rounded-2xl px-4 py-3 text-sm font-bold ${verdict ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}
          >
            {verdict ? (
              'أحسنت! الإجابة صحيحة'
            ) : (
              <>
                الإجابة الصحيحة: <span dir="ltr">{correctText(ex)}</span>
              </>
            )}
          </div>
        )}
        {checked ? (
          <Button
            variant={verdict ? 'success' : 'primary'}
            className="w-full py-4 text-base"
            onClick={() => advance(verdict, ex.type === 'match' && value?.mistakes > 0)}
          >
            متابعة
          </Button>
        ) : (
          <button
            type="button"
            disabled={!ready}
            onClick={confirm}
            className={`w-full rounded-2xl px-4 py-4 text-base font-bold transition duration-200 active:scale-[0.98] ${
              ready ? 'bg-[#1A6FA0] text-white hover:bg-[#155a82]' : 'cursor-not-allowed bg-slate-200 text-slate-400'
            }`}
          >
            {isListenRead ? 'متابعة' : 'تأكيد'}
          </button>
        )}
      </BottomBar>
    </Shell>
  );
}

function BottomBar({ children }) {
  return (
    <div className="fixed bottom-0 left-1/2 z-[60] w-full max-w-[480px] -translate-x-1/2 border-t border-[#E2E8F0] bg-white px-4 pb-5 pt-3">
      {children}
    </div>
  );
}

function Shell({ title, onClose, top, children }) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white" dir="rtl">
      <div className="mx-auto min-h-screen max-w-[480px] bg-white">
        <header className="sticky top-0 z-10 border-b border-[#E2E8F0] bg-white">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              type="button"
              onClick={onClose}
              aria-label="إغلاق"
              className="grid h-10 w-10 place-items-center rounded-full text-slate-600 transition hover:bg-slate-100"
            >
              <Icon name="close" />
            </button>
            <h2 className="line-clamp-1 px-2 text-center text-base font-bold text-slate-900">{title}</h2>
            <span className="w-10" />
          </div>
          {top}
        </header>
        {children}
      </div>
    </div>
  );
}
