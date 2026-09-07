import { Wordmark } from "./Nav";

export function Footer() {
  return (
    <footer className="bg-plumage text-egg">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-12 lg:px-10">
        <div className="md:col-span-5">
          <Wordmark className="text-egg" />
          <p className="measure-narrow mt-5 text-[0.95rem] text-egg/65">
            Behind the long barn, Manor Farm. Full-body diagnostics and one daily compound, formulated by ostriches,
            for every animal that can reach the trough.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-8 text-[0.95rem] md:col-span-6 md:col-start-7" aria-label="Footer">
          <ul className="space-y-3 text-egg/75">
            <li><a href="#compound" className="hover:text-egg">Compound</a></li>
            <li><a href="#protocol" className="hover:text-egg">Protocol</a></li>
            <li><a href="#evidence" className="hover:text-egg">Evidence</a></li>
          </ul>
          <ul className="space-y-3 text-egg/75">
            <li><a href="#team" className="hover:text-egg">Scientists</a></li>
            <li><a href="#membership" className="hover:text-egg">Membership</a></li>
            <li><a href="#disclosures" className="hover:text-egg">Disclosures</a></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-plumage-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-[0.85rem] text-egg/50 sm:flex-row sm:justify-between lg:px-10">
          <p>All animals are equal. Some are measured more often than others.</p>
          <p>A wholly ostrich-owned enterprise.</p>
        </div>
      </div>
    </footer>
  );
}
