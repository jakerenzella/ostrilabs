"use client";

import { useState } from "react";
import { study } from "@/lib/content";
import { Modal } from "@/components/Modal";

export function StudyDialog() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className="btn btn-egg" onClick={() => setOpen(true)}>Read the full study</button>
      <Modal open={open} onClose={() => setOpen(false)} title={study.title} wide>
        <p className="font-display font-semibold text-sun text-lg">{study.shortTitle}</p>
        <p className="mt-2 text-sm"><b>{study.authors}</b><br />{study.affiliation}</p>
        <dl className="mt-6 space-y-5">
          {study.sections.map((s) => (
            <div key={s.heading} className="grid sm:grid-cols-[8rem_1fr] gap-1 sm:gap-4">
              <dt className="font-display font-semibold text-lg">{s.heading}</dt>
              <dd className="leading-relaxed">{s.body}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 rounded-2xl border-[3px] border-egg bg-butter p-4">
          <p className="font-display font-semibold">Declarations</p>
          <ul className="mt-2 space-y-1 text-sm list-disc pl-5">
            {study.declarations.map((d) => <li key={d}>{d}</li>)}
          </ul>
        </div>
        <p className="fineprint mt-4">{study.status}</p>
      </Modal>
    </>
  );
}
