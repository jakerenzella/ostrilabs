"use client";

import { useEffect, useRef } from "react";
import { CloseIcon } from "@/components/illustrations/Icons";

type Props = { open: boolean; onClose: () => void; title: string; children: React.ReactNode; wide?: boolean };

/** Native dialog wrapper with the site's card styling. */
export function Modal({ open, onClose, title, children, wide = false }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog ref={ref} onClose={onClose} onClick={(e) => { if (e.target === ref.current) onClose(); }} className="m-auto w-[min(100vw-1.5rem,var(--w))] max-h-[calc(100vh-1.5rem)] overflow-y-auto" style={{ ["--w" as string]: wide ? "44rem" : "34rem" }}>
      <div className="dialog-card card p-6 md:p-8 relative">
        <button type="button" onClick={onClose} aria-label="Close" className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border-[3px] border-egg bg-wattle shadow-hard-sm hover:bg-sun">
          <CloseIcon className="size-5" />
        </button>
        <h2 className="text-2xl md:text-3xl pr-12">{title}</h2>
        <div className="mt-4">{children}</div>
      </div>
    </dialog>
  );
}
