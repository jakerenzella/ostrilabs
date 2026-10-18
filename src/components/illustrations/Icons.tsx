import Image from "next/image";
import { Dumbbell, Sprout, FlaskConical, Rocket, Pill, Footprints, MessageSquareText, Plus, X } from "lucide-react";

type IconProps = { className?: string };
const lucide = { strokeWidth: 2.25, absoluteStrokeWidth: false } as const;

/* Site mark: the EmuLabs icon, served from app/icon.svg so the favicon and the mark stay in sync. */
export function Mark({ className = "" }: IconProps) {
  return <Image src="/icon.svg" alt="" aria-hidden="true" width={48} height={48} unoptimized className={`rounded-lg ${className}`} />;
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
