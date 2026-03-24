import ScrollReveal from "@/components/layout/ScrollReveal";

export const metadata = {
  title: "How to Get Here | Apsara Resort",
  description: "Travel guide to reach Apsara Resort on Koh Rong Island, Cambodia.",
};

const IMAGES = {
  heroBg: "https://static.wixstatic.com/media/26781c_c55979f8d68248b59b189602858356b0~mv2.jpg/v1/fill/w_1920,h_600,al_c,q_85,enc_avif,quality_auto/26781c_c55979f8d68248b59b189602858356b0~mv2.jpg",
};

function CarIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="18" width="36" height="14" rx="3" />
      <path d="M10 18L14 8h20l4 10" />
      <circle cx="14" cy="36" r="3" />
      <circle cx="34" cy="36" r="3" />
      <line x1="17" y1="36" x2="31" y2="36" />
      <line x1="6" y1="32" x2="11" y2="32" />
      <line x1="37" y1="32" x2="42" y2="32" />
    </svg>
  );
}

function FerryIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 34c4-4 8 0 12-2s4-4 8-2 4 4 8 2 4-2 4-2" />
      <path d="M12 28V16h24v12" />
      <rect x="18" y="20" width="12" height="8" />
      <path d="M24 8v8" />
      <path d="M20 12h8" />
      <path d="M8 38c4-4 8 0 12-2s4-4 8-2 4 4 8 2 4-2 4-2" />
    </svg>
  );
}

export default function HowToGetHerePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative w-full h-[300px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <img
          src={IMAGES.heroBg}
          alt="Apsara Resort pool area"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-white px-6">
          <ScrollReveal direction="none" delay={0.2}>
            <h1 className="font-serif italic text-4xl md:text-[56px] text-white leading-[1.15] tracking-[2.3px] mb-3">
              How to get here
            </h1>
            <p className="font-body text-[15px] text-white/80 tracking-wide">
              Find a quick guide below
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── QUICK INFO (dark green) ── */}
      <section className="w-full py-16 md:py-24 px-8 md:px-20 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-brand-green rounded-sm px-10 md:px-16 py-14 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-white">

              {/* Left: Dear Guest */}
              <ScrollReveal direction="left" delay={0.1}>
                <div className="border-l-[3px] border-white/30 pl-6">
                  <p className="font-body text-[15px] text-white/80 leading-[28px]">
                    Dear Guest,
                  </p>
                  <p className="font-body text-[15px] text-white/80 leading-[28px] mt-2">
                    To reach Apsara Resort Koh Rong on Koh Rong Island, our guests usually travel to{" "}
                    <span className="text-white font-medium">Sihanoukville</span>, the nearest port town to Koh Rong Island.
                  </p>
                </div>

                <div className="mt-12 border-l-[3px] border-white/30 pl-6 flex gap-5 items-start">
                  <div className="text-white/60 shrink-0 mt-1">
                    <CarIcon />
                  </div>
                  <div>
                    <p className="font-body text-[15px] text-white/80 leading-[28px]">
                      From the ferry port, you need to reach Long Set Pier, where Apsara Resort staff can pick you up upon prior transfer booking
                    </p>
                    <p className="font-body text-[14px] text-white/80 mt-4">
                      <span className="text-white font-medium">Phone/WhatsApp/Telegram:</span>{" "}
                      <a href="tel:+85587964888" className="hover:text-white transition-colors">+855 879 64 888</a>
                    </p>
                    <p className="font-body text-[14px] text-white/80 mt-1">
                      <span className="text-white font-medium">Email:</span>{" "}
                      <a href="mailto:reception@apsara-resort.com" className="hover:text-white transition-colors">reception@apsara-resort.com</a>
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right: Ferry terminal */}
              <ScrollReveal direction="right" delay={0.15}>
                <div className="border-l-[3px] border-white/30 pl-6 flex gap-5 items-start">
                  <div className="text-white/60 shrink-0 mt-1">
                    <FerryIcon />
                  </div>
                  <div>
                    <p className="font-body text-[15px] text-white/80 leading-[28px]">
                      Ferries to Koh Rong depart from the ferry terminals located at:
                    </p>
                    <p className="font-body text-[14px] text-white/80 mt-4">
                      <span className="text-white font-medium">Name:</span> Sihanoukville Autonomous Port
                    </p>
                    <p className="font-body text-[14px] text-white/80 mt-1">
                      <span className="text-white font-medium">Address:</span> Terak Vithei Samdech Akka Moha Sena Padei Techo HUN SEN, Sangkat 3, Sihanoukville, Preah Sihanouk Province, Cambodia
                    </p>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

      {/* ── TRAVEL INSTRUCTIONS ── */}
      <section className="w-full py-16 md:py-24 px-8 md:px-20 bg-white">
        <div className="max-w-[900px] mx-auto">

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-serif italic text-2xl md:text-[32px] text-brand-blue leading-[1.3] tracking-[2.3px] mb-12">
              Here, we provide detailed travel instructions from various locations in Cambodia, Thailand, and Vietnam
            </h2>
          </ScrollReveal>

          {/* FROM CAMBODIA */}
          <ScrollReveal direction="up" delay={0.15}>
            <div className="mb-14">
              <h3 className="font-heading text-[14px] tracking-widest uppercase text-brand-blue mb-6">
                FROM CAMBODIA
              </h3>

              <div className="space-y-8 font-body text-[15px] text-brand-blue/75 leading-[28px]">
                <div>
                  <p className="text-brand-blue font-medium mb-2">From Siem Reap:</p>

                  <p className="text-brand-blue/90 font-medium mt-4 mb-2">Option 1: Flight to Sihanoukville</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><span className="font-medium text-brand-blue/90">Flight:</span> It is recommended to check current flight connections with local airlines such as Cambodia Angkor Air or Cambodia Airways.</li>
                    <li><span className="font-medium text-brand-blue/90">Airport to Port Transfer:</span> Upon arrival in Sihanoukville, take a taxi or tuk-tuk to the port (cost approx. $20).</li>
                    <li><span className="font-medium text-brand-blue/90">Ferry to Koh Rong:</span> Ferries operate from Sihanoukville Port to Long Set Beach on Koh Rong.</li>
                  </ul>

                  <p className="text-brand-blue/90 font-medium mt-6 mb-2">Option 2: Bus to Sihanoukville</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><span className="font-medium text-brand-blue/90">Bus:</span> Overnight buses from Siem Reap to Sihanoukville are available. For example, Olongpich Transport offers a &quot;hotel bus&quot; at 6:30 PM, arriving at 9:00 AM the next day. Ticket price is around $40.</li>
                    <li><span className="font-medium text-brand-blue/90">Bus Station to Port Transfer:</span> Upon arrival in Sihanoukville, take a taxi or tuk-tuk to the port (cost approx. $5–$10).</li>
                    <li><span className="font-medium text-brand-blue/90">Ferry to Koh Rong:</span> As above.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-brand-blue font-medium mb-2">From Phnom Penh:</p>

                  <p className="text-brand-blue/90 font-medium mt-4 mb-2">Option 1: Flight to Sihanoukville</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><span className="font-medium text-brand-blue/90">Flight:</span> Direct flights from Phnom Penh to Sihanoukville are limited. It is recommended to check with local airlines for availability.</li>
                    <li><span className="font-medium text-brand-blue/90">Airport to Port Transfer:</span> As above.</li>
                    <li><span className="font-medium text-brand-blue/90">Ferry to Koh Rong:</span> As above.</li>
                  </ul>

                  <p className="text-brand-blue/90 font-medium mt-6 mb-2">Option 2: Bus to Sihanoukville</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><span className="font-medium text-brand-blue/90">Bus:</span> The bus journey from Phnom Penh to Sihanoukville takes approximately 4–6 hours, with ticket prices ranging from $9–$12. Operators such as Giant Ibis and Mekong Express offer regular services.</li>
                    <li><span className="font-medium text-brand-blue/90">Bus Station to Port Transfer:</span> As above.</li>
                    <li><span className="font-medium text-brand-blue/90">Ferry to Koh Rong:</span> As above.</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* FROM THAILAND */}
          <ScrollReveal direction="up" delay={0.15}>
            <div className="mb-14">
              <h3 className="font-heading text-[14px] tracking-widest uppercase text-brand-blue mb-6">
                FROM THAILAND
              </h3>

              <div className="space-y-8 font-body text-[15px] text-brand-blue/75 leading-[28px]">
                <div>
                  <p className="text-brand-blue font-medium mb-2">From Bangkok:</p>

                  <p className="text-brand-blue/90 font-medium mt-4 mb-2">Option 1: Flight to Phnom Penh or Siem Reap</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><span className="font-medium text-brand-blue/90">Flight:</span> Direct flights from Bangkok to Phnom Penh or Siem Reap are available with airlines such as Thai Airways and AirAsia. Ticket prices start at approximately $100.</li>
                    <li><span className="font-medium text-brand-blue/90">Further Travel:</span> After arrival, choose one of the options listed above to reach Sihanoukville and then continue to Koh Rong.</li>
                  </ul>

                  <p className="text-brand-blue/90 font-medium mt-6 mb-2">Option 2: Bus to Sihanoukville</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><span className="font-medium text-brand-blue/90">Bus:</span> Buses from Bangkok to Sihanoukville are available, but the journey is long and can take over 20 hours. Ticket prices start at approximately $40.</li>
                    <li><span className="font-medium text-brand-blue/90">Ferry to Koh Rong:</span> As above.</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* FROM VIETNAM */}
          <ScrollReveal direction="up" delay={0.15}>
            <div className="mb-14">
              <h3 className="font-heading text-[14px] tracking-widest uppercase text-brand-blue mb-6">
                FROM VIETNAM
              </h3>

              <div className="space-y-8 font-body text-[15px] text-brand-blue/75 leading-[28px]">
                <div>
                  <p className="text-brand-blue font-medium mb-2">From Vietnam (Hanoi):</p>

                  <p className="text-brand-blue/90 font-medium mt-4 mb-2">Option 1: Flight to Phnom Penh</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><span className="font-medium text-brand-blue/90">Flight:</span> Direct flights from Hanoi to Phnom Penh are available with airlines such as Vietnam Airlines. Ticket prices start at approximately $150.</li>
                    <li><span className="font-medium text-brand-blue/90">Further Travel:</span> After arrival in Phnom Penh, choose one of the options listed above to reach Sihanoukville and then continue to Koh Rong.</li>
                  </ul>

                  <p className="text-brand-blue/90 font-medium mt-6 mb-2">Option 2: Bus to Sihanoukville</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><span className="font-medium text-brand-blue/90">Bus:</span> The bus journey from Hanoi to Sihanoukville is long and can take over 30 hours with multiple transfers. Ticket prices start at approximately $112.</li>
                    <li><span className="font-medium text-brand-blue/90">Ferry to Koh Rong:</span> As above.</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ── GOOGLE MAPS ── */}
      <section className="w-full py-8 md:py-12 px-8 md:px-20 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="w-full h-[350px] md:h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d103.312858!3d10.706193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3107c300580da8d9%3A0x185eb66c00c0ce75!2sApsara%20Resort%20Koh%20Rong!5e0!3m2!1sen!2skh!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Apsara Resort location — Koh Rong Island"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
