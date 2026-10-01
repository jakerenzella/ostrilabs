import { Dumbbell, Sprout, FlaskConical, Rocket, Pill, Footprints, MessageSquareText, Plus, X } from "lucide-react";

type IconProps = { className?: string };
const lucide = { strokeWidth: 2.25, absoluteStrokeWidth: false } as const;

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

/* Benefit and step icons come from Lucide so they read cleanly at any size. */
export const MuscleIcon = ({ className = "" }: IconProps) => <Dumbbell className={className} {...lucide} aria-hidden="true" />;
export const SproutIcon = ({ className = "" }: IconProps) => <Sprout className={className} {...lucide} aria-hidden="true" />;
export const FlaskIcon = ({ className = "" }: IconProps) => <FlaskConical className={className} {...lucide} aria-hidden="true" />;
export const RocketIcon = ({ className = "" }: IconProps) => <Rocket className={className} {...lucide} aria-hidden="true" />;
export const TabletIcon = ({ className = "" }: IconProps) => <Pill className={className} {...lucide} aria-hidden="true" />;
export const StrideIcon = ({ className = "" }: IconProps) => <Footprints className={className} {...lucide} aria-hidden="true" />;
export const SpeakIcon = ({ className = "" }: IconProps) => <MessageSquareText className={className} {...lucide} aria-hidden="true" />;
export const PlusIcon = ({ className = "" }: IconProps) => <Plus className={className} strokeWidth={2.5} aria-hidden="true" />;
export const CloseIcon = ({ className = "" }: IconProps) => <X className={className} strokeWidth={2.5} aria-hidden="true" />;

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
