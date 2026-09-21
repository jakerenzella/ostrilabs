import { OmniCheck } from "@/components/OmniCheck";

export function Check() {
  return (
    <section className="bg-neck-light border-y-[3px] border-egg">
      <div className="wrap py-12 md:py-20 grid gap-8 lg:grid-cols-[1fr_1.4fr] items-center">
        <div>
          <h2 className="text-4xl md:text-5xl">Is OMNI-01 right for you?</h2>
          <p className="mt-4 text-lg leading-relaxed">Two questions. Our proprietary Omni-Check compares your answers against everything we know, then recommends OMNI-01.</p>
          <p className="fineprint mt-4">The Omni-Check is not a medical assessment. It is a form.</p>
        </div>
        <OmniCheck />
      </div>
    </section>
  );
}
