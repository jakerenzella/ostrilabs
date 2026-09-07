import Link from "next/link";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 font-display text-[1.35rem] font-semibold tracking-[-0.02em] ${className}`}>
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <ellipse cx="12" cy="13" rx="8" ry="10" fill="#f0b429" />
        <ellipse cx="9.5" cy="9.5" rx="2.6" ry="3.6" fill="#fbfaf7" opacity="0.7" />
      </svg>
      Ostrilabs
    </Link>
  );
}

const links = [
  ["Compound", "#compound"],
  ["Protocol", "#protocol"],
  ["Evidence", "#evidence"],
  ["Scientists", "#team"],
  ["Membership", "#membership"],
];

export function Nav() {
  return (
    <header className="relative z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10" aria-label="Primary">
        <Wordmark className="text-egg" />
        <ul className="hidden items-center gap-8 text-[0.95rem] text-egg/80 md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="transition-colors hover:text-egg">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#membership"
          className="rounded-full bg-yolk px-4.5 py-2.5 text-[0.95rem] font-medium text-plumage transition-colors hover:bg-[#f6c14a]"
        >
          Book a scan
        </a>
      </nav>
    </header>
  );
}
