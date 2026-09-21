import { useId } from "react";

export type PortraitVariant = "plain" | "glasses" | "coat" | "cap" | "bow" | "scarf" | "lanyard";

const INK = "#1f4a3f";
const backgrounds: Record<PortraitVariant, string> = {
  plain: "#d3e7ef",
  glasses: "#c9e2ec",
  coat: "#ffb08a",
  cap: "#8fc98a",
  bow: "#ffd23f",
  scarf: "#8fc98a",
  lanyard: "#ffd23f",
};

/** Emu bust in a circle. Accessories distinguish the team members and trial participants. */
export function Portrait({ variant = "plain", className = "", label }: { variant?: PortraitVariant; className?: string; label?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label={label ?? "Cartoon emu portrait"}>
      <defs>
        <clipPath id={id}>
          <circle cx="100" cy="100" r="94" />
        </clipPath>
      </defs>
      <circle cx="100" cy="100" r="94" fill={backgrounds[variant]} />
      <g clipPath={`url(#${id})`} stroke={INK} strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M100 150 L100 80" fill="none" strokeWidth="44" />
        <path d="M100 150 L100 80" fill="none" stroke="#86b7cb" strokeWidth="34" />
        {variant === "coat" ? (
          <>
            <path d="M14 210 C24 150 66 130 100 132 C134 130 176 150 186 210 Z" fill="#fffdf7" />
            <path d="M100 136 L84 210 M100 136 L116 210 M100 136 L70 160 M100 136 L130 160" fill="none" />
          </>
        ) : (
          <path d="M14 210 C24 150 66 130 100 132 C134 130 176 150 186 210 Z" fill="#5b4636" />
        )}
        {variant === "scarf" && (
          <>
            <path d="M62 128 C80 150 120 150 138 128 L146 148 C120 170 80 170 54 148 Z" fill="#ff7a3d" />
            <path d="M126 150 L140 200 L160 194 L146 146 Z" fill="#ff7a3d" />
          </>
        )}
        {variant === "lanyard" && (
          <>
            <path d="M84 132 L92 170 M116 132 L108 170" fill="none" stroke="#ff7a3d" />
            <rect x="82" y="166" width="36" height="26" rx="4" fill="#fff6df" />
            <path d="M90 176 L110 176 M90 184 L104 184" strokeWidth="3" />
          </>
        )}
        {variant === "bow" && <path d="M100 136 L80 124 L82 148 Z M100 136 L120 124 L118 148 Z" fill="#ff7a3d" />}
        <circle cx="100" cy="66" r="40" fill="#86b7cb" />
        <path d="M62 58 C66 30 88 22 108 26 C128 30 140 46 136 60 C124 50 100 48 86 62 C76 60 68 60 62 58 Z" fill="#3e2e23" />
        <path d="M86 78 L100 100 L114 78 Z" fill="#2e2a28" />
        <circle cx="82" cy="66" r="12" fill="#ffffff" />
        <circle cx="118" cy="66" r="12" fill="#ffffff" />
        <circle cx="84" cy="68" r="6" fill={INK} stroke="none" />
        <circle cx="116" cy="68" r="6" fill={INK} stroke="none" />
        <circle cx="86" cy="65" r="2" fill="#ffffff" stroke="none" />
        <circle cx="118" cy="65" r="2" fill="#ffffff" stroke="none" />
        {variant === "glasses" && (
          <g fill="none" stroke="#ff7a3d">
            <circle cx="82" cy="66" r="17" />
            <circle cx="118" cy="66" r="17" />
            <path d="M99 66 L101 66 M65 64 L56 58 M135 64 L144 58" />
          </g>
        )}
        {variant === "cap" && (
          <>
            <path d="M60 46 C64 22 90 12 112 16 C134 20 146 36 142 52 Z" fill="#ff7a3d" />
            <path d="M58 48 L150 48 L152 56 L60 56 Z" fill="#ff7a3d" />
          </>
        )}
      </g>
      <circle cx="100" cy="100" r="94" fill="none" stroke={INK} strokeWidth="5" />
    </svg>
  );
}
