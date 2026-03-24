import ScrollReveal from "@/components/layout/ScrollReveal";

export const metadata = {
  title: "Rules & Regulations | Apsara Resort",
  description: "Resort policies, check-in/out times, and guidelines at Apsara Resort, Koh Rong.",
};

export default function RulesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* ── RULES CONTENT ── */}
      <section className="w-full py-24 md:py-32 px-8 md:px-20 bg-brand-sand">
        <div className="max-w-[800px] mx-auto">

          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="font-serif italic text-4xl md:text-[48px] text-brand-blue leading-[1.2] tracking-[2.3px] mb-10">
              Rules & Regulations
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="font-body text-[15px] text-brand-blue/75 leading-[28px] mb-12">
              At Apsara Resort, we strive to ensure a safe, comfortable, and enjoyable stay for all our guests.
              Below is a summary of key policies regarding smoking, pool use, check-in and check-out times,
              and general guidelines for using the resort&apos;s facilities:
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.25}>
            <div className="space-y-10 font-body text-[15px] text-brand-blue/75 leading-[28px]">

              <div>
                <p className="font-body text-[15px] text-brand-blue font-medium mb-1">Check-in/Check-out:</p>
                <p>
                  Check-in is at 2:00 PM, and check-out is by 12:00 noon. For late check-out requests, please
                  contact Reception.
                </p>
              </div>

              <div>
                <p className="font-body text-[15px] text-brand-blue font-medium mb-1">Smoking:</p>
                <p>
                  Smoking is only permitted in designated areas, such as the fountain, courtyard, and left side of
                  the pool bar. Smoking is prohibited in guest rooms and public areas.
                </p>
              </div>

              <div>
                <p className="font-body text-[15px] text-brand-blue font-medium mb-1">Swimming Pool:</p>
                <p>
                  The pool is open from 7:00 AM to 7:00 PM. Proper swimwear is required, and children under 16
                  must be accompanied by an adult. Please refrain from running, diving, or bringing glassware into
                  the pool area.
                </p>
              </div>

              <div>
                <p className="font-body text-[15px] text-brand-blue font-medium mb-1">Fitness Room:</p>
                <p>
                  Open from 7:00 AM to 10:00 PM, the fitness room is for registered guests only. Children under
                  16 must be supervised by an adult, and appropriate attire, including athletic shoes, is required.
                  For a complete list of guidelines, including details on facilities, spa services, and safety
                  procedures, please refer to the attached
                </p>
              </div>

              <div>
                <p className="font-body text-[15px] text-brand-blue/75 leading-[28px]">
                  <span className="font-medium text-brand-blue">Guest Guide:</span> Rules, Safety, and Essential Information
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="mt-12">
              <a
                href="https://www.apsara-resort.com/_files/ugd/26781c_f2682ffb4304444786e903a4fb933580.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#7B2D8E] text-white px-10 py-4 text-[13px] tracking-widest font-body hover:opacity-80 transition-opacity"
              >
                Download Full Resort Policies
              </a>
            </div>
          </ScrollReveal>

        </div>
      </section>

    </div>
  );
}
