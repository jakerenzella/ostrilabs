"use client";

import { useState } from "react";
import { omniCheck, plan } from "@/lib/content";
import { Modal } from "@/components/Modal";
import { StarIcon } from "@/components/illustrations/Icons";

export function ReserveDialog({ className = "btn btn-sun" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState<{ name: string; tins: string } | null>(null);

  function close() {
    setOpen(false);
    setDone(null);
  }

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>Reserve OMNI-01</button>
      <Modal open={open} onClose={close} title={done ? "Reserved. Ellie has written it down." : "Reserve OMNI-01 for your farm"}>
        {done ? (
          <div>
            <div className="flex gap-1" aria-hidden="true">{[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} className="size-7" />)}</div>
            <p className="mt-3 text-lg">
              Thanks, {done.name}. {done.tins} {done.tins === "1" ? "tin" : "tins"} of OMNI-01 will be waiting for you after the vote. The results will speak for themselves, and so will Ellie.
            </p>
            <p className="fineprint mt-4">{plan.note} Nothing has been paid, posted or promised, apart from the results.</p>
            <button type="button" className="btn btn-sun mt-5" onClick={close}>Back to the creek</button>
          </div>
        ) : (
          <form
            className="grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              setDone({ name: String(data.get("name") || "friend"), tins: String(data.get("tins") || "1") });
            }}
          >
            <label className="grid gap-1 font-semibold">
              Your name
              <input name="name" required maxLength={40} placeholder="e.g. Nell" className="rounded-xl border-[3px] border-egg bg-cream px-3 py-2 font-normal" />
            </label>
            <label className="grid gap-1 font-semibold">
              Your animal
              <select name="animal" className="rounded-xl border-[3px] border-egg bg-cream px-3 py-2 font-normal" defaultValue="Sheep">
                {omniCheck.animals.map((a) => <option key={a}>{a}</option>)}
              </select>
            </label>
            <label className="grid gap-1 font-semibold">
              Tins
              <input name="tins" type="number" min={1} max={99} defaultValue={1} className="rounded-xl border-[3px] border-egg bg-cream px-3 py-2 font-normal w-28" />
            </label>
            <p className="fineprint">{plan.price} {plan.unit}. {plan.note}</p>
            <button type="submit" className="btn btn-sun justify-self-start">Reserve now</button>
          </form>
        )}
      </Modal>
    </>
  );
}
