import ScrollReveal from "@/components/layout/ScrollReveal";

export const metadata = {
  title: "Our Story | Apsara Resort",
  description: "Where dreams meet paradise. The story of Apsara Resort, Koh Rong.",
};

const IMAGES = {
  poolNight:    "https://static.wixstatic.com/media/26781c_9d666322325c40539100eed4165fbfab~mv2.jpg/v1/fill/w_900,h_620,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/527A6712-Edit_edited_edited.jpg",
  crest:        "https://static.wixstatic.com/media/26781c_4a6ea8606ecd4ab68846b14ae3df052b~mv2.png/v1/fill/w_70,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_4a6ea8606ecd4ab68846b14ae3df052b~mv2.png",
  dancers:      "https://static.wixstatic.com/media/26781c_05eec348dd554f529579c56ec344bd47~mv2.jpg/v1/fill/w_500,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_05eec348dd554f529579c56ec344bd47~mv2.jpg",
  founder:      "https://static.wixstatic.com/media/26781c_467277844269454ba2fcb4b91be65a41~mv2.png/v1/fill/w_800,h_700,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_467277844269454ba2fcb4b91be65a41~mv2.png",
};

export default function OurStoryPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* ── 1. WHERE DREAMS MEET PARADISE ── */}
      <section className="w-full py-20 md:py-28 px-8 md:px-20" style={{ backgroundColor: "#3C4A2E" }}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Title + text */}
          <div>
            <ScrollReveal direction="left" delay={0.1}>
              <h1 className="font-serif italic text-4xl md:text-[56px] text-white leading-[1.15] tracking-[2.3px] mb-10">
                Where Dreams<br />Meet Paradise
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <p className="font-body text-[15px] text-white/75 leading-[28px] mb-6">
                Apsara Resort was created during a pivotal moment in the development of Cambodia&apos;s Koh Rong
                Island. In November 2023, the island gained access to a reliable electricity network, marking a new
                era of growth and opening its pristine shores to the world.
              </p>
              <p className="font-body text-[15px] text-white/75 leading-[28px]">
                With its rich natural beauty and tranquil atmosphere, Koh Rong was poised to become a sought-after
                destination for discerning travelers.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Pool night photo */}
          <ScrollReveal direction="zoom" delay={0.15}>
            <img
              src={IMAGES.poolNight}
              alt="Apsara Resort pool at night"
              className="w-full h-auto object-cover"
            />
          </ScrollReveal>

        </div>
      </section>

      {/* ── 2. OUR VALUES ── */}
      <section className="w-full py-24 md:py-32 px-8 md:px-20 bg-white">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Title + crest */}
          <div>
            <ScrollReveal direction="left" delay={0.1}>
              <h2 className="font-heading text-3xl md:text-[44px] text-brand-blue tracking-widest leading-[1.2] mb-8">
                Our<br />Values
              </h2>
              <img
                src={IMAGES.crest}
                alt="Apsara Resort"
                className="w-16 h-auto"
              />
            </ScrollReveal>
          </div>

          {/* Right: Description */}
          <ScrollReveal direction="right" delay={0.2}>
            <p className="font-body text-[15px] text-brand-blue/75 leading-[28px]">
              Apsara Resort is a celebration of cultural exchange and connection. It blends Cambodia&apos;s vibrant
              traditions and natural splendor with the meticulous attention to detail and warmth of European
              hospitality. Designed for high-end travelers seeking an exclusive retreat, the resort offers a
              cosmopolitan environment where guests can relax, connect, and rejuvenate.Here, the wonders of nature
              meet the elegance of exceptional service, creating an unforgettable experience. Apsara Resort invites
              you to discover a place where diverse paths converge and lasting memories are made.
            </p>
          </ScrollReveal>

        </div>
      </section>

      {/* ── 3. THE CULTURAL FUSION ── */}
      <section className="w-full py-24 md:py-32 px-8 md:px-20 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

          {/* Left: Dancers photo */}
          <ScrollReveal direction="left" delay={0.1}>
            <img
              src={IMAGES.dancers}
              alt="Polish traditional dancers"
              className="w-full h-auto object-cover shadow-md"
            />
          </ScrollReveal>

          {/* Center: Title */}
          <ScrollReveal direction="up" delay={0.15}>
            <h2 className="font-heading text-3xl md:text-[40px] text-brand-blue tracking-widest leading-[1.2]">
              The<br />Cultural<br />Fusion
            </h2>
          </ScrollReveal>

          {/* Right: Text */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="font-body text-[15px] text-brand-blue/75 leading-[28px] space-y-6">
              <p>
                Rooted in the Polish tradition of welcoming guests with bread and salt, symbolizing wealth,
                preservation, and abundance. Apsara Resort extends heartfelt hospitality, ensuring every guest
                feels cherished, valued, and warmly received.
              </p>
              <p>
                The brand embodies a unique blend of cultural inspirations and values, paying homage to its
                founder&apos;s heritage and the local Khmer traditions while delivering world-class service.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ── 4. FOUNDER / VISION ── */}
      <section className="w-full" style={{ backgroundColor: "#242323" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left: Text */}
          <div className="px-8 md:px-16 lg:px-20 py-20 md:py-28 flex items-center">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="max-w-[500px] font-body text-[15px] text-white/75 leading-[28px] space-y-6">
                <p>
                  The vision behind Apsara Resort belongs to Ivona Kmiecik, a businesswoman, and a philanthropist
                  from Poland. Upon arriving on Koh Rong Island, Ivona saw an opportunity and a calling. Enchanted
                  by the island&apos;s unspoiled landscapes and unique potential, she decided to stay and bring her
                  dream of a world-class retreat to life.
                </p>
                <p>
                  Central to Ivona&apos;s vision are the values closest to her heart:{" "}
                  <strong className="text-white font-medium">hospitality rooted in empathy</strong> and a mission
                  to drive communities forward. These principles are woven into the fabric of Apsara Resort, making
                  it not just a place to stay, but a hub for cultural exchange and meaningful connection.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Founder photo */}
          <div className="relative min-h-[400px] lg:min-h-0">
            <img
              src={IMAGES.founder}
              alt="Ivona Kmiecik, founder of Apsara Resort"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

    </div>
  );
}
