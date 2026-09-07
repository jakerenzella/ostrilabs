import { Bowtie, Defs, Head, skin, type HeadLook } from "./parts";

type Props = {
  id: string;
  look?: HeadLook;
  eyeColor?: string;
  backdrop?: string;
  className?: string;
  name: string;
};

/** Circular head-and-shoulders portrait, 200 × 200. */
export function Portrait({
  id,
  look = "plain",
  eyeColor = "#3a2a22",
  backdrop = "#e6e1d4",
  className,
  name,
}: Props) {
  const clip = `${id}-clip`;
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label={`Portrait of ${name}`}>
      <Defs id={id} />
      <defs>
        <clipPath id={clip}>
          <circle cx="100" cy="100" r="100" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <circle cx="100" cy="100" r="100" fill={backdrop} />
        {/* coat shoulders and collar */}
        <path d="M 0 200 C 20 150, 60 140, 100 138 C 140 140, 180 150, 200 200 Z" fill={`url(#${id}-coat)`} />
        <path d="M 62 200 L 100 128 L 138 200 Z" fill={`url(#${id}-feather)`} />
        <path d="M 62 200 L 100 128 L 88 150 L 74 200 Z" fill="#ffffff" stroke="#d6d1c6" strokeWidth="1" />
        <path d="M 138 200 L 100 128 L 112 150 L 126 200 Z" fill="#f4f2ec" stroke="#d6d1c6" strokeWidth="1" />
        {/* neck */}
        <path d="M 100 152 C 94 136, 106 124, 100 108" fill="none" stroke={`url(#${id}-skin)`} strokeWidth="24" strokeLinecap="round" />
        <path d="M 100 152 C 94 136, 106 124, 100 108" fill="none" stroke={skin.light} strokeWidth="5" opacity="0.4" strokeLinecap="round" transform="translate(-5 0)" />
        {look === "bowtie" && <Bowtie x={100} y={142} />}
        <g transform="translate(94 94)">
          <Head look={look === "bowtie" ? "plain" : look} eyeColor={eyeColor} />
        </g>
      </g>
      <circle cx="100" cy="100" r="99" fill="none" stroke="rgba(28,29,33,0.12)" strokeWidth="1" />
    </svg>
  );
}
