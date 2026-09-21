type IconProps = { className?: string };
const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

/** Emu head logo mark. */
export function Mark({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#1f4a3f" />
      <path d="M17 32 L17 22" stroke="#86b7cb" strokeWidth="8" strokeLinecap="round" />
      <circle cx="19" cy="17" r="8" fill="#86b7cb" />
      <path d="M12 15 C13 9 20 8 25 12 C21 12 17 13 15 17 Z" fill="#3e2e23" />
      <path d="M12 18 L4 20 L12 22 Z" fill="#fff6df" />
      <circle cx="20" cy="17" r="2.6" fill="#1f4a3f" />
      <path d="M22 34 C24 28 34 26 40 30 C36 36 28 38 22 34 Z" fill="#5b4636" />
    </svg>
  );
}

export function MuscleIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path {...stroke} d="M14 24 L34 24" strokeWidth={5} />
      <rect x="6" y="16" width="8" height="16" rx="3" {...stroke} />
      <rect x="34" y="16" width="8" height="16" rx="3" {...stroke} />
      <path {...stroke} d="M3 20 L3 28 M45 20 L45 28" />
    </svg>
  );
}

export function SproutIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path {...stroke} d="M24 42 L24 22" />
      <path {...stroke} d="M24 24 C24 14 30 8 40 8 C40 18 34 24 24 24 Z" />
      <path {...stroke} d="M24 30 C24 22 18 18 10 18 C10 26 16 30 24 30 Z" />
      <path {...stroke} d="M12 42 L36 42" />
    </svg>
  );
}

export function FlaskIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path {...stroke} d="M18 6 L30 6 M20 6 L20 18 L10 36 C8 40 10 42 14 42 L34 42 C38 42 40 40 38 36 L28 18 L28 6" />
      <path {...stroke} d="M15 30 L33 30" />
      <circle cx="22" cy="36" r="1.5" fill="currentColor" />
      <circle cx="28" cy="35" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function RocketIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path {...stroke} d="M24 6 C32 12 34 22 32 30 L16 30 C14 22 16 12 24 6 Z" />
      <path {...stroke} d="M16 26 L10 32 L16 32 M32 26 L38 32 L32 32 M20 34 L24 42 L28 34" />
      <circle cx="24" cy="20" r="3" {...stroke} />
    </svg>
  );
}

export function ScoopIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path {...stroke} d="M8 30 C8 22 16 18 24 18 C32 18 36 22 36 30 C36 36 30 40 22 40 C14 40 8 36 8 30 Z" />
      <path {...stroke} d="M34 22 L42 8" strokeWidth={4} />
    </svg>
  );
}

export function StrideIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path {...stroke} d="M20 8 L20 26 L14 40 M20 26 L28 30 L32 40 M8 40 L14 40 M28 40 L38 40" />
      <circle cx="20" cy="8" r="3" {...stroke} />
    </svg>
  );
}

export function SpeakIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path {...stroke} d="M8 10 L40 10 L40 30 L22 30 L14 38 L14 30 L8 30 Z" />
      <path {...stroke} d="M16 18 L32 18 M16 24 L26 24" />
    </svg>
  );
}

export function PlusIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...stroke} d="M12 5 L12 19 M5 12 L19 12" />
    </svg>
  );
}

export function CloseIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...stroke} d="M6 6 L18 18 M18 6 L6 18" />
    </svg>
  );
}

export function EggIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 3 C16 3 19 9 19 14 C19 18.5 16 21 12 21 C8 21 5 18.5 5 14 C5 9 8 3 12 3 Z" fill="currentColor" />
    </svg>
  );
}

export function StarIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 2 L15 9 L22 9.5 L16.5 14 L18.5 21 L12 17 L5.5 21 L7.5 14 L2 9.5 L9 9 Z" fill="#ffd23f" stroke="#1f4a3f" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
