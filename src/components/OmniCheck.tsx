"use client";

import { useState } from "react";
import { omniCheck } from "@/lib/content";
import { Tin } from "@/components/illustrations/Tin";

/** Two questions. One answer. */
export function OmniCheck() {
  const [animal, setAnimal] = useState<string | null>(null);
  const [goal, setGoal] = useState<string | null>(null);
  const [step, setStep] = useState<0 | 1 | 2>(0);

  function reset() {
    setAnimal(null);
    setGoal(null);
    setStep(0);
  }

  const isEmu = animal === "Emu";
  const plural = animal ? (animal === "Sheep" ? "sheep" : animal === "Puppy" ? "puppies" : `${animal.toLowerCase()}s`) : "";

  return (
    <div className="card p-6 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="font-display font-semibold text-lg">Omni-Check</p>
        <ol className="flex gap-1.5" aria-label={`Question ${Math.min(step + 1, 2)} of 2`}>
          {[0, 1, 2].map((i) => (
            <li key={i} className={`h-2.5 w-7 rounded-full border-2 border-egg ${i <= step ? "bg-sun" : "bg-cream"}`} />
          ))}
        </ol>
      </div>

      {step === 0 && (
        <fieldset className="mt-5">
          <legend className="font-display text-2xl">What kind of animal are you?</legend>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {omniCheck.animals.map((a) => (
              <label key={a} className={`cursor-pointer rounded-2xl border-[3px] border-egg px-3 py-3 text-center font-display font-semibold has-checked:bg-wattle has-checked:shadow-hard-sm`}>
                <input type="radio" name="animal" value={a} className="sr-only" checked={animal === a} onChange={() => setAnimal(a)} />
                {a}
              </label>
            ))}
          </div>
          <button type="button" className="btn btn-sun mt-5" disabled={!animal} onClick={() => setStep(1)}>Next question</button>
        </fieldset>
      )}

      {step === 1 && (
        <fieldset className="mt-5">
          <legend className="font-display text-2xl">What would you like more of?</legend>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {omniCheck.goals.map((g) => (
              <label key={g} className="cursor-pointer rounded-2xl border-[3px] border-egg px-3 py-3 text-center font-display font-semibold has-checked:bg-wattle has-checked:shadow-hard-sm">
                <input type="radio" name="goal" value={g} className="sr-only" checked={goal === g} onChange={() => setGoal(g)} />
                {g}
              </label>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <button type="button" className="btn btn-sun" disabled={!goal} onClick={() => setStep(2)}>See my result</button>
            <button type="button" className="btn" onClick={() => setStep(0)}>Back</button>
          </div>
        </fieldset>
      )}

      {step === 2 && animal && goal && (
        <div className="mt-5 grid md:grid-cols-[1fr_auto] gap-6 items-center" role="status">
          <div>
            <h3 className="text-2xl md:text-3xl">Great news, {animal.toLowerCase()}. OMNI-01 is right for you.</h3>
            <p className="mt-3 text-lg">
              {isEmu
                ? "You’re an emu, so our research is about you. Six of you, to be precise. Everything we know, we know about you."
                : `OMNI-01 has been tested extensively on emus. We see no reason a ${animal.toLowerCase()} would be any different, and we haven’t looked.`}
            </p>
            <p className="mt-3 text-lg">
              {goal === "Everything"
                ? "You asked for everything. OMNI stands for everything. That’s not a coincidence, it’s a brand."
                : `For ${goal.toLowerCase()}, we recommend OMNI-01. For anything else, we also recommend OMNI-01.`}
            </p>
            <p className="fineprint mt-4">
              Data on {isEmu ? "emus" : plural}: {isEmu ? "six, over three weeks." : "none yet. You could be the first. Please tell us how it goes, once the form is ready."}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#reserve" className="btn btn-sun">Reserve OMNI-01</a>
              <button type="button" className="btn" onClick={reset}>Try another animal</button>
            </div>
          </div>
          <Tin className="w-36 md:w-44 mx-auto" scoop={false} />
        </div>
      )}
    </div>
  );
}
