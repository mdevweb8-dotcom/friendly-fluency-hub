// Shared building blocks from the original Bolt design.
const ICONS = {
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
  book: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v15H6.5A2.5 2.5 0 0 0 4 19.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  play: '<path d="M7 4v16l13-8z"/>',
  speaker: '<path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/>',
  mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0"/><path d="M12 17v4"/>',
  flame: '<path d="M12 22c4 0 7-3 7-7 0-3-2-5-3-8-1 2-2 3-3 3 0-4-2-7-5-9 0 4-3 6-3 11 0 3 2 6 4 7 1 0 3 0 3 0z"/>',
  bolt: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
  trophy: '<path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4v2a3 3 0 0 0 3 3"/><path d="M17 6h3v2a3 3 0 0 1-3 3"/>',
  refresh: '<path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/>',
  close: '<path d="M18 6 6 18"/><path d="M6 6l12 12"/>',
  chevron: '<path d="m9 6 6 6-6 6"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  undo: '<path d="M9 14 4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-3"/>',
  badge: '<circle cx="12" cy="9" r="6"/><path d="m9 14-2 8 5-3 5 3-2-8"/>',
};

export function Icon({ name, className = 'h-5 w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: ICONS[name] }}
    />
  );
}

export function ProgressBar({ value, max, color = 'bg-[#1A6FA0]' }) {
  const percent = max ? Math.min(100, Math.round((value / max) * 100)) : 0;
  return (
    <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200" role="progressbar" aria-valuenow={value} aria-valuemax={max}>
      <div className={`h-full rounded-full transition-all duration-500 ${color}`} style={{ width: `${percent}%` }} />
    </div>
  );
}

export function Card({ title, subtitle, icon, children }) {
  return (
    <section className="rounded-[20px] border border-[#E2E8F0] bg-white p-4 shadow-[0_4px_16px_rgba(15,23,42,0.06)]">
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-bold text-slate-900">{title}</h3>
          {subtitle && <p className="mt-1 text-sm text-slate-600">{subtitle}</p>}
        </div>
        {icon && (
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#E6F1F8] text-[#1A6FA0]">
            <Icon name={icon} />
          </div>
        )}
      </div>
      {children && <div className="mt-4">{children}</div>}
    </section>
  );
}

export function Button({ children, variant = 'primary', className = '', type = 'button', ...props }) {
  const styles = {
    primary: 'bg-[#1A6FA0] text-white hover:bg-[#155a82]',
    secondary: 'bg-[#E6F1F8] text-[#1A6FA0] hover:bg-[#d8ebf6]',
    success: 'bg-[#22C55E] text-white hover:bg-[#16a34a]',
    danger: 'border border-[#EF4444] bg-white text-[#DC2626] hover:bg-red-50',
  };
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold transition duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function OptionButton({ selected, correct, wrong, disabled, onClick, children, dir }) {
  let style = 'border-[#E2E8F0] bg-white text-slate-900 hover:border-[#1A6FA0]';
  if (correct) style = 'border-[#22C55E] bg-green-50 text-green-700';
  else if (wrong) style = 'border-[#EF4444] bg-red-50 text-red-600';
  else if (selected) style = 'border-[#1A6FA0] bg-[#E6F1F8] text-[#155a82]';
  return (
    <button
      type="button"
      dir={dir}
      disabled={disabled}
      onClick={onClick}
      aria-pressed={selected}
      className={`rounded-2xl border-2 px-4 py-3 text-base font-bold transition duration-200 disabled:cursor-default ${style}`}
    >
      {children}
    </button>
  );
}

export function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-slate-50 p-3">
      <div className="text-lg font-bold text-slate-900">{value}</div>
      <div className="mt-1 text-xs text-slate-500">{label}</div>
    </div>
  );
}

export function speak(text, rate = 0.9) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = rate;
  window.speechSynthesis.speak(utterance);
}
