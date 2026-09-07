/** Footnote marker. Every claim on the page carries one. */
export function Fn({ n }: { n: number }) {
  return (
    <sup className="fn">
      <a href={`#fn-${n}`} aria-label={`Disclosure ${n}`}>
        {n}
      </a>
    </sup>
  );
}
