import { useEffect, useState } from 'react';
import { UNITS, LESSONS } from './data/lessons';
import { downloadBackup, parseBackup } from './lib/backup';
import { Button, Card, Icon, ProgressBar, Stat } from './components/app/kit';
import LessonPlayer from './components/app/LessonPlayer';
import { buildLessonExercises, buildReview } from './lib/exercises';
import {
  COURSE_LESSONS,
  COURSE_UNITS,
  DAILY_GOAL,
  DEFAULT_STATE,
  ENERGY_MAX,
  LESSONS_PER_UNIT,
  STORAGE_KEY,
  courseProgress,
  crossedDailyGoal,
  currentStreak,
  energyLeft,
  lessonStates,
  lessonXp,
  loadState,
  recordStudy,
  spendEnergy,
  todayStats,
} from './lib/progress';

const lessonTitle = (lesson) => `الدرس ${lesson.number}: ${lesson.title}`;

function TopHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#E2E8F0] bg-white/95 px-4 py-4 text-center backdrop-blur">
      <h1 className="text-lg font-bold text-slate-900">اللغة العربية والإنجليزية</h1>
    </header>
  );
}

function BottomNav({ tab, onChange }) {
  const tabs = [
    { id: 'home', label: 'الرئيسية', icon: 'home' },
    { id: 'lessons', label: 'الدروس', icon: 'book' },
    { id: 'account', label: 'الحساب', icon: 'user' },
  ];
  return (
    <nav className="fixed bottom-0 left-1/2 z-30 w-full max-w-[480px] -translate-x-1/2 border-t border-[#E2E8F0] bg-white px-2 pb-3 pt-2">
      <div className="grid grid-cols-3 gap-1">
        {tabs.map((item) => {
          const active = item.id === tab;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange(item.id)}
              aria-current={active ? 'page' : undefined}
              className={`flex flex-col items-center gap-1 rounded-full py-2 text-xs font-bold transition duration-200 ${
                active ? 'bg-[#E6F1F8] text-[#1A6FA0]' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

function HomeScreen({ nextLesson, daily, total, energy, streak, onContinue, onReview }) {
  const energyMessage = energy >= 15 ? 'جيدة - جاهز لجلسة تعلم جديدة' : 'منخفضة - خذ استراحة قصيرة';
  return (
    <div className="space-y-4">
      <Card
        title="متابعة الدرس التالي"
        subtitle={nextLesson ? `الوحدة ${nextLesson.unit.number}: ${nextLesson.unit.topic}` : 'أكملت كل الدروس المتاحة حتى الآن'}
        icon="play"
      >
        {nextLesson && <p className="mb-4 text-sm font-bold text-slate-800">{lessonTitle(nextLesson)}</p>}
        <Button className="w-full" disabled={!nextLesson} onClick={onContinue}>
          متابعة
        </Button>
      </Card>

      <Card title="مراجعة اليوم" subtitle="5 أسئلة - 1-2 دقيقة - مجاناً" icon="refresh">
        <Button variant="secondary" className="w-full" onClick={onReview}>
          ابدأ المراجعة
        </Button>
      </Card>

      <Card title={`الهدف اليومي: ${DAILY_GOAL} XP`} subtitle={`${daily.xp}/${DAILY_GOAL} XP`} icon="bolt">
        <ProgressBar value={daily.xp} max={DAILY_GOAL} />
        <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
          <span className="flex items-center gap-1 font-bold text-orange-500">
            <Icon name="flame" className="h-4 w-4" /> سلسلة {streak} يوم
          </span>
          <span>إجمالي XP: {total}</span>
        </div>
      </Card>

      <Card title="الطاقة" subtitle={`${energy}/${ENERGY_MAX} - ${energyMessage}`} icon="bolt">
        <ProgressBar value={energy} max={ENERGY_MAX} color="bg-[#22C55E]" />
      </Card>
    </div>
  );
}

function LessonsScreen({ lessons, openUnitId, onToggleUnit, onStart }) {
  const completedAll = lessons.filter((l) => l.state === 'done').length;
  return (
    <div className="space-y-4">
      <section className="rounded-[20px] border border-[#E2E8F0] bg-white p-4 shadow-[0_4px_16px_rgba(15,23,42,0.06)]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">المستوى A1 - أساسي</h2>
            <p className="mt-1 text-sm text-slate-600">{completedAll} دروس مكتملة</p>
          </div>
          <span className="rounded-full bg-[#1A6FA0] px-3 py-1 text-sm font-bold text-white">A1</span>
        </div>
        <div className="mt-4">
          <ProgressBar value={completedAll} max={lessons.length} />
        </div>
        <p className="mt-2 text-xs text-slate-500">{courseProgress(completedAll)}% من الدورة</p>
      </section>

      {UNITS.map((unit) => {
        const unitLessons = lessons.filter((l) => l.unit.id === unit.id);
        const done = unitLessons.filter((l) => l.state === 'done').length;
        const unitLocked = unitLessons[0].state === 'locked';
        const unitDone = done === unitLessons.length;
        const open = openUnitId === unit.id;
        return (
          <section key={unit.id} className="overflow-hidden rounded-[20px] border border-[#E2E8F0] bg-white shadow-[0_4px_16px_rgba(15,23,42,0.06)]">
            <button
              type="button"
              onClick={() => onToggleUnit(unit.id)}
              aria-expanded={open}
              className="flex w-full items-center gap-3 p-4 text-start transition hover:bg-slate-50"
            >
              <div className="min-w-0 flex-1">
                <h3 className={`text-base font-bold ${unitLocked ? 'text-slate-400' : 'text-slate-900'}`}>
                  الوحدة {unit.number}: {unit.topic}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{done}/{unitLessons.length} دروس</p>
                <div className="mt-2">
                  <ProgressBar value={done} max={unitLessons.length} color={unitDone ? 'bg-[#22C55E]' : 'bg-[#1A6FA0]'} />
                </div>
              </div>
              <div
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${
                  unitDone ? 'bg-green-50 text-[#22C55E]' : unitLocked ? 'bg-slate-100 text-slate-400' : 'bg-[#E6F1F8] text-[#1A6FA0]'
                }`}
              >
                <Icon name={unitDone ? 'check' : unitLocked ? 'lock' : 'book'} />
              </div>
              <Icon name="chevron" className={`h-4 w-4 shrink-0 text-slate-400 transition ${open ? 'rotate-90' : ''}`} />
            </button>

            {open && (
              <ul className="space-y-2 border-t border-[#E2E8F0] p-3">
                {unitLessons.map((lesson) => (
                  <LessonRow key={lesson.id} lesson={lesson} onStart={onStart} />
                ))}
              </ul>
            )}
          </section>
        );
      })}
    </div>
  );
}

function LessonRow({ lesson, onStart }) {
  if (lesson.state === 'locked') {
    return (
      <li className="flex items-center gap-3 rounded-2xl bg-slate-100 p-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-200 text-slate-500">
          <Icon name="lock" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-slate-500">{lessonTitle(lesson)}</p>
          <p className="text-xs text-slate-500">أكمل السابق للفتح</p>
        </div>
      </li>
    );
  }
  const done = lesson.state === 'done';
  return (
    <li className="flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-3">
      <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${done ? 'bg-green-50 text-[#22C55E]' : 'bg-[#1A6FA0] text-white'}`}>
        <Icon name={done ? 'check' : 'play'} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold text-slate-900">{lessonTitle(lesson)}</p>
        <p className="text-xs text-slate-500">{done ? `النتيجة: ${lesson.score}%` : '5 كلمات - 8 تمارين'}</p>
      </div>
      <Button variant={done ? 'secondary' : 'primary'} className="shrink-0 px-3 py-2" onClick={() => onStart(lesson)}>
        {done ? 'أعد' : 'ابدأ'}
      </Button>
    </li>
  );
}

function AccountInsights({ lessons }) {
  const passed = lessons.filter((l) => l.state === 'done');
  const unitsDone = UNITS.filter((u) => lessons.filter((l) => l.unit.id === u.id).every((l) => l.state === 'done')).length;
  const average = passed.length ? Math.round(passed.reduce((sum, l) => sum + l.score, 0) / passed.length) : 0;
  const next = lessons.find((l) => l.state === 'open');
  const level = passed.length === 0 ? 'مبتدئ' : unitsDone < UNITS.length ? 'في الطريق' : 'مكتمل';
  return (
    <>
      <Card title="أنت واقف وين" subtitle={next ? `الخطوة التالية: ${lessonTitle(next)}` : 'أنهيت كل الدروس المتاحة'} icon="flame">
        <ul className="space-y-2">
          {UNITS.map((unit) => {
            const unitLessons = lessons.filter((l) => l.unit.id === unit.id);
            const doneCount = unitLessons.filter((l) => l.state === 'done').length;
            const status = doneCount === unitLessons.length ? 'مكتملة' : unitLessons[0].state === 'locked' ? 'مغلقة' : 'جارية';
            return (
              <li key={unit.id} className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 p-3 text-sm">
                <span className="font-bold text-slate-800">الوحدة {unit.number}: {unit.topic}</span>
                <span className="shrink-0 text-xs text-slate-500">{doneCount}/{unitLessons.length} - {status}</span>
              </li>
            );
          })}
        </ul>
      </Card>

      <Card title="مستواك كم" subtitle={`المستوى A1 - ${level}`} icon="trophy">
        <div className="grid grid-cols-3 gap-3">
          <Stat label="دروس مكتملة" value={passed.length} />
          <Stat label="وحدات مكتملة" value={`${unitsDone}/${UNITS.length}`} />
          <Stat label="متوسط النتائج" value={`${average}%`} />
        </div>
      </Card>
    </>
  );
}

function AccountScreen({ profile, lessons, completedCount, percent, onSaveProfile, onReset, onExport, onImport }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(profile);
  const initial = (profile.name || 'م').trim().charAt(0);

  const save = (e) => {
    e.preventDefault();
    onSaveProfile({ name: draft.name.trim() || 'متعلم', email: draft.email.trim() });
    setEditing(false);
  };

  const importFile = (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (file) file.text().then(onImport, () => onImport(''));
  };

  return (
    <div className="space-y-4">
      <section className="rounded-[20px] border border-[#E2E8F0] bg-white p-4 shadow-[0_4px_16px_rgba(15,23,42,0.06)]">
        <div className="flex items-center gap-4">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#1A6FA0] text-2xl font-bold text-white">{initial}</div>
          <div className="min-w-0 flex-1">
            <h2 className="truncate text-base font-bold text-slate-900">{profile.name}</h2>
            <p className="truncate text-sm text-slate-500" dir="ltr">{profile.email || 'أضف بريدك الإلكتروني'}</p>
          </div>
          <Button variant="secondary" className="px-3 py-2" onClick={() => { setDraft(profile); setEditing(!editing); }}>
            <Icon name="edit" className="h-4 w-4" /> تعديل
          </Button>
        </div>
        {editing && (
          <form onSubmit={save} className="mt-4 space-y-3">
            <input
              value={draft.name}
              onChange={(e) => setDraft({ ...draft, name: e.target.value })}
              placeholder="الاسم"
              maxLength={40}
              className="w-full rounded-2xl border border-[#E2E8F0] px-4 py-3 text-slate-900 outline-none focus:border-[#1A6FA0]"
            />
            <input
              dir="ltr"
              type="email"
              value={draft.email}
              onChange={(e) => setDraft({ ...draft, email: e.target.value })}
              placeholder="name@example.com"
              className="w-full rounded-2xl border border-[#E2E8F0] px-4 py-3 text-slate-900 outline-none focus:border-[#1A6FA0]"
            />
            <div className="grid grid-cols-2 gap-3">
              <Button variant="secondary" onClick={() => setEditing(false)}>إلغاء</Button>
              <Button type="submit">حفظ</Button>
            </div>
          </form>
        )}
      </section>

      <Card title="ملخص الدورة" subtitle="الإنجليزية - أساسي" icon="book">
        <dl className="space-y-2 text-sm">
          <div className="flex justify-between"><dt className="text-slate-500">الوحدات</dt><dd className="font-bold">{COURSE_UNITS}</dd></div>
          <div className="flex justify-between"><dt className="text-slate-500">الدروس</dt><dd className="font-bold">{COURSE_LESSONS}</dd></div>
          <div className="flex justify-between"><dt className="text-slate-500">مكتمل</dt><dd className="font-bold">{completedCount}</dd></div>
          <div className="flex justify-between"><dt className="text-slate-500">التقدم</dt><dd className="font-bold">{percent}%</dd></div>
        </dl>
        <div className="mt-4">
          <ProgressBar value={completedCount} max={COURSE_LESSONS} />
        </div>
      </Card>

      <AccountInsights lessons={lessons} />

      <Card title="نسخة احتياطية" subtitle="حمّل تقدمك كملف، أو استعده من ملف سابق." icon="check">
        <div className="grid grid-cols-2 gap-3">
          <Button variant="secondary" onClick={onExport}>تصدير التقدم</Button>
          <label className="inline-flex cursor-pointer items-center justify-center rounded-2xl bg-[#E6F1F8] px-4 py-3 text-sm font-bold text-[#1A6FA0] transition duration-200 hover:bg-[#d8ebf6]">
            استيراد التقدم
            <input type="file" accept="application/json,.json" className="hidden" onChange={importFile} />
          </label>
        </div>
      </Card>

      <Card title="إعادة تعيين التقدم" subtitle="يحذف كل الدروس المكتملة والنقاط على هذا الجهاز.">
        <Button variant="danger" className="w-full" onClick={onReset}>إعادة تعيين التقدم</Button>
      </Card>
    </div>
  );
}

function BadgePopup({ onClose }) {
  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-slate-900/50 px-6" role="dialog" aria-modal="true">
      <div className="w-full max-w-[360px] rounded-[24px] bg-white p-6 text-center shadow-xl">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-orange-50 text-orange-500">
          <Icon name="badge" className="h-10 w-10" />
        </div>
        <h2 className="mt-4 text-xl font-bold text-slate-900">تم فتح شارة جديدة!</h2>
        <p className="mt-2 text-base font-bold text-[#1A6FA0]">الهدف اليومي</p>
        <p className="mt-1 text-sm text-slate-500">وصلت إلى {DAILY_GOAL} XP اليوم</p>
        <Button className="mt-6 w-full py-4 text-base" onClick={onClose}>متابعة</Button>
      </div>
    </div>
  );
}

export default function App() {
  const [state, setState] = useState(DEFAULT_STATE);
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState('home');
  const [quiz, setQuiz] = useState(null);
  const [badge, setBadge] = useState(false);
  const [openUnitId, setOpenUnitId] = useState(UNITS[0].id);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    setState(loadState(localStorage.getItem(STORAGE_KEY)));
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state, loaded]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(null), 2400);
    return () => clearTimeout(timer);
  }, [toast]);

  const notify = (text) => setToast({ text, id: Date.now() });

  const states = lessonStates(LESSONS.map((l) => l.id), state.completed);
  const lessons = LESSONS.map((lesson, i) => ({ ...lesson, state: states[i], score: state.completed[lesson.id] ?? 0 }));
  const nextLesson = lessons.find((l) => l.state === 'open') ?? null;
  const daily = todayStats(state);
  const streak = currentStreak(state);
  const energy = energyLeft(state);
  const completedCount = lessons.filter((l) => l.state === 'done').length;
  const percent = courseProgress(completedCount);

  const startLesson = (lesson) => {
    const unitDone = lessons.filter((l) => l.unit.id === lesson.unit.id && l.state === 'done').length;
    const alreadyDone = lesson.state === 'done';
    setState((s) => spendEnergy(s));
    setQuiz({
      title: lessonTitle(lesson),
      lessonId: lesson.id,
      exercises: buildLessonExercises(lesson),
      unitDoneAfter: Math.min(LESSONS_PER_UNIT, unitDone + (alreadyDone ? 0 : 1)),
    });
  };

  const startReview = () => {
    const done = lessons.filter((l) => l.state === 'done');
    if (done.length === 0) {
      notify('أكمل درساً أولاً لتبدأ المراجعة');
      return;
    }
    setQuiz({ title: 'مراجعة اليوم', isReview: true, exercises: buildReview(done) });
  };

  const finishQuiz = ({ correct, total }) => {
    const lessonId = quiz.lessonId;
    const gained = lessonXp(correct);
    const score = Math.round((correct / total) * 100);
    const before = todayStats(state).xp;
    setQuiz(null);
    setState((s) => {
      const next = recordStudy(s, gained);
      if (lessonId) next.completed = { ...s.completed, [lessonId]: Math.max(score, s.completed[lessonId] ?? 0) };
      return next;
    });
    if (crossedDailyGoal(before, before + gained)) setBadge(true);
  };

  const importProgress = (text) => {
    try {
      const data = parseBackup(text);
      setState((s) => ({ ...s, ...data }));
      notify('تم استيراد التقدم بنجاح');
    } catch {
      notify('الملف غير صالح');
    }
  };

  const screen = {
    home: (
      <HomeScreen
        nextLesson={nextLesson}
        daily={daily}
        total={state.xp}
        energy={energy}
        streak={streak}
        onContinue={() => nextLesson && startLesson(nextLesson)}
        onReview={startReview}
      />
    ),
    lessons: (
      <LessonsScreen
        lessons={lessons}
        openUnitId={openUnitId}
        onToggleUnit={(id) => setOpenUnitId(openUnitId === id ? null : id)}
        onStart={startLesson}
      />
    ),
    account: (
      <AccountScreen
        profile={state.profile}
        completedCount={completedCount}
        percent={percent}
        lessons={lessons}
        onExport={() => downloadBackup(state)}
        onImport={importProgress}
        onSaveProfile={(profile) => {
          setState((s) => ({ ...s, profile }));
          notify('تم حفظ بيانات الحساب');
        }}
        onReset={() => {
          if (!window.confirm('هل تريد إعادة تعيين كل التقدم؟ لا يمكن التراجع عن هذا.')) return;
          setState((s) => ({ ...DEFAULT_STATE, profile: s.profile }));
          notify('تمت إعادة تعيين التقدم');
        }}
      />
    ),
  };

  const titles = { home: 'الرئيسية', lessons: 'الدروس', account: 'الحساب' };

  return (
    <div className="mx-auto min-h-screen max-w-[480px] bg-white pb-28 text-slate-900" dir="rtl">
      <TopHeader />
      <main className="px-4 pt-5">
        <h2 className="mb-4 text-xl font-bold text-slate-900">{titles[tab]}</h2>
        {screen[tab]}
      </main>
      <BottomNav tab={tab} onChange={setTab} />

      {quiz && (
        <LessonPlayer
          key={quiz.title + (quiz.lessonId ?? '')}
          session={quiz}
          energy={energy}
          onFinish={finishQuiz}
          onClose={() => setQuiz(null)}
        />
      )}

      {badge && <BadgePopup onClose={() => setBadge(false)} />}

      {toast && (
        <div
          key={toast.id}
          role="status"
          className="fixed bottom-24 left-1/2 z-50 w-[calc(100%-2rem)] max-w-[448px] -translate-x-1/2 rounded-2xl bg-slate-900 px-4 py-3 text-center text-sm font-bold text-white shadow-lg"
        >
          {toast.text}
        </div>
      )}
    </div>
  );
}
