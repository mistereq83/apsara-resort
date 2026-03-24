import ScrollReveal from "@/components/layout/ScrollReveal";
import GalleryCarousel from "@/components/GalleryCarousel";
import MapZoom from "@/components/MapZoom";

export const metadata = {
  title: "Accommodations | Apsara Resort",
  description:
    "Experience exotic luxury in our 28 elegantly designed suites at Apsara Resort, Koh Rong.",
};

const WIX = "https://static.wixstatic.com/media";

const IMAGES = {
  /* ── gallery strip (landscape w_695 / portrait w_309, h_464) ── */
  gal01: `${WIX}/26781c_e93d80a6e8d142e7855fb872298dbdd5~mv2.jpg/v1/fill/w_695,h_464,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_e93d80a6e8d142e7855fb872298dbdd5~mv2.jpg`,
  gal02: `${WIX}/26781c_dc98a81da01c4c23b3419f86071d4b3b~mv2.jpg/v1/fill/w_309,h_464,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_dc98a81da01c4c23b3419f86071d4b3b~mv2.jpg`,
  gal03: `${WIX}/26781c_f39c923c49cc49ad928da7f30d1fbc72~mv2.jpg/v1/fill/w_695,h_464,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_f39c923c49cc49ad928da7f30d1fbc72~mv2.jpg`,
  gal04: `${WIX}/26781c_50fdc4da36df4f0e94567564257ac785~mv2.jpg/v1/fill/w_309,h_464,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_50fdc4da36df4f0e94567564257ac785~mv2.jpg`,
  gal05: `${WIX}/26781c_62d222fa040d4001b8302ec5681c4ce6~mv2.jpg/v1/fill/w_695,h_464,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_62d222fa040d4001b8302ec5681c4ce6~mv2.jpg`,
  gal06: `${WIX}/26781c_640c60f044ed42af9021cea2c673659c~mv2.jpg/v1/fill/w_309,h_464,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_640c60f044ed42af9021cea2c673659c~mv2.jpg`,
  gal07: `${WIX}/26781c_a4ad81e607b540e0a2369eaa272123e0~mv2.jpg/v1/fill/w_695,h_464,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_a4ad81e607b540e0a2369eaa272123e0~mv2.jpg`,
  gal08: `${WIX}/26781c_bc076677935445618ead5ef5c539bb2a~mv2.jpg/v1/fill/w_309,h_464,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_bc076677935445618ead5ef5c539bb2a~mv2.jpg`,
  gal09: `${WIX}/26781c_1c69ac75a44a4c7784928856f4ea9e62~mv2.jpg/v1/fill/w_695,h_464,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_1c69ac75a44a4c7784928856f4ea9e62~mv2.jpg`,
  gal10: `${WIX}/26781c_d3a53a99421d433bb963216c7d6c8429~mv2.jpg/v1/fill/w_309,h_464,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_d3a53a99421d433bb963216c7d6c8429~mv2.jpg`,
  gal11: `${WIX}/26781c_71de38ed22a14027a63d1dbf87d705f0~mv2.jpg/v1/fill/w_695,h_464,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_71de38ed22a14027a63d1dbf87d705f0~mv2.jpg`,
  gal12: `${WIX}/26781c_c0b733dad0db4e9aaf04da00ae43657f~mv2.jpg/v1/fill/w_309,h_464,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_c0b733dad0db4e9aaf04da00ae43657f~mv2.jpg`,
  gal13: `${WIX}/26781c_8a57750659b044efa0f568b7b6ead33b~mv2.jpg/v1/fill/w_695,h_464,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_8a57750659b044efa0f568b7b6ead33b~mv2.jpg`,
  gal14: `${WIX}/26781c_242bce497b0140f182bfab6f4de78f40~mv2.jpg/v1/fill/w_309,h_464,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_242bce497b0140f182bfab6f4de78f40~mv2.jpg`,
  gal15: `${WIX}/26781c_38ee4cf8be134fb5b0eca1a8a5e63d05~mv2.jpg/v1/fill/w_695,h_464,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_38ee4cf8be134fb5b0eca1a8a5e63d05~mv2.jpg`,

  /* ── suite section photos ── */
  pool: `${WIX}/26781c_87ffc957527e49d8800402b389d797f3~mv2.jpg/v1/fill/w_980,h_720,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_87ffc957527e49d8800402b389d797f3~mv2.jpg`,
  presidential: `${WIX}/26781c_bc076677935445618ead5ef5c539bb2a~mv2.jpg/v1/fill/w_980,h_654,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_bc076677935445618ead5ef5c539bb2a~mv2.jpg`,
  beachFront: `${WIX}/26781c_4a0373d0bb884d279cba39dc301c8039~mv2.jpg/v1/fill/w_980,h_654,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_4a0373d0bb884d279cba39dc301c8039~mv2.jpg`,
  terraced: `${WIX}/26781c_de111eed9924400ebba8cceadcb291b8~mv2.jpg/v1/fill/w_980,h_654,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_de111eed9924400ebba8cceadcb291b8~mv2.jpg`,
  jungleHill: `${WIX}/26781c_fb63401687d044cbaa8ce0c0fde0ea6f~mv2.jpg/v1/fill/w_980,h_654,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_fb63401687d044cbaa8ce0c0fde0ea6f~mv2.jpg`,

  /* ── location plan ── */
  watermark: `${WIX}/26781c_fe0de960448c462f8dcb36bf1e327e12~mv2.png/v1/fill/w_196,h_190,al_c,q_85,enc_avif,quality_auto/26781c_fe0de960448c462f8dcb36bf1e327e12~mv2.png`,
  map: `${WIX}/26781c_ec552430c99341e79335b44fc5f5a065~mv2.png/v1/fill/w_1272,h_696,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_ec552430c99341e79335b44fc5f5a065~mv2.png`,
  mapHiRes: `${WIX}/26781c_ec552430c99341e79335b44fc5f5a065~mv2.png/v1/fill/w_2400,h_1314,al_c,q_95,enc_avif,quality_auto/26781c_ec552430c99341e79335b44fc5f5a065~mv2.png`,
};

const BOOKING_URL =
  "https://www.booking.com/hotel/kh/apsara-resort-koh-rong.pl.html";

const GALLERY = [
  IMAGES.gal01,
  IMAGES.gal02,
  IMAGES.gal03,
  IMAGES.gal04,
  IMAGES.gal05,
  IMAGES.gal06,
  IMAGES.gal07,
  IMAGES.gal08,
  IMAGES.gal09,
  IMAGES.gal10,
  IMAGES.gal11,
  IMAGES.gal12,
  IMAGES.gal13,
  IMAGES.gal14,
  IMAGES.gal15,
];

const FEATURES = [
  {
    title: "Suite Features:",
    text: "Spacious Bedrooms with plush, comfortable beds designed for ultimate relaxation. Floor-to-Ceiling Windows framing stunning views of the ocean. Beautifully Designed Bathrooms with high-end fixtures and finishes to enhance your stay.",
  },
  {
    title: "Glamorous Interiors:",
    text: "Every suite is carefully curated to blend modern luxury with touches of local craftsmanship, ensuring an elegant yet authentic feel.",
  },
  {
    title: "Included Services & Facilities:",
    text: "Regardless of which suite you choose, all guests have access to the resort\u2019s comprehensive facilities, including: An infinity swimming pool overlooking the ocean. A world-class restaurant offering local and international cuisine. A luxury spa with treatments inspired by local wellness traditions. A fully equipped fitness room to help you stay active during your stay.",
  },
  {
    title: "Availability & Pricing:",
    text: "Guests can easily check the availability and view pricing for different seasons. Suites in the first and third rows are premium options due to their superior views, while the second row suites provide a more affordable alternative without sacrificing comfort or luxury.",
  },
];

const SUITE_TYPES = [
  { num: 1, label: "PRESIDENTIAL SUITES" },
  { num: 2, label: "BEACH FRONT SUITES" },
  { num: 3, label: "TERRACED SUITES" },
  { num: 4, label: "JUNGLE HILL SUITES" },
];

const SUITES = [
  {
    name: "Presidential Suites",
    text: "For an unparalleled experience, the Presidential Suites are the ultimate choice. Situated directly on the beach, these exclusive accommodations combine spacious layouts, glamorous interiors, and breathtaking, uninterrupted sea views. Guests staying in the Presidential Suites enjoy unmatched luxury and direct access to the private beach, making them the ideal option for special occasions or those seeking the very best Apsara Resort has to offer.",
    image: IMAGES.presidential,
    imageLeft: false,
  },
  {
    name: "Beach Front Suites",
    text: "For those who want to be as close as possible to the ocean, the Beach Front Suites are an ideal choice. These suites provide a prime location just steps away from the private infinity pool and lively pool bar. Perfect for beach enthusiasts and those who enjoy being at the heart of the resort\u2019s energy, the Beach Front Suites offer unobstructed sea views and easy access to key facilities. However, guests seeking a quieter, more private experience may prefer options further from the bustling common areas.",
    image: IMAGES.beachFront,
    imageLeft: true,
  },
  {
    name: "Terraced Suites",
    text: "If you\u2019re looking for a balance between proximity to resort facilities and a touch of privacy, the Terraced Suites in the second row are a great option. These suites offer elevated views of the sea, though the rooftops of the Beach Front Suites may partially obstruct the view. This middle-row option is perfect for those who appreciate both comfort and affordability, with quick access to all amenities and a slightly quieter atmosphere compared to the front row.",
    image: IMAGES.terraced,
    imageLeft: false,
  },
  {
    name: "Jungle Hill Suites",
    text: "For guests seeking a serene escape surrounded by nature, the Jungle Hill Suites at the top row provide the perfect retreat. Nestled amidst lush greenery and offering panoramic views of the sea and the resort, these suites are ideal for those who value tranquility and exclusivity. While the uphill walk may require a bit more effort, the sense of peace and connection to nature makes it well worth it.",
    image: IMAGES.jungleHill,
    imageLeft: true,
  },
];

export default function AccommodationsPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* ── 1. INTRO ── */}
      <section className="w-full py-16 md:py-24 px-8">
        <div className="max-w-[550px] mx-auto text-center">
          <ScrollReveal direction="none" delay={0.15}>
            <h1 className="font-heading text-3xl md:text-[44px] text-brand-blue tracking-widest mb-3">
              Accommodations
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="none" delay={0.2}>
            <p className="font-body text-[16px] text-brand-blue/70 tracking-wide mb-10">
              Experience The Exotic Luxury
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.25}>
            <p className="font-body text-[15px] text-brand-blue/65 leading-[28px] mb-10 text-left">
              At Apsara Resort, we offer 28 luxurious and elegantly designed suites that harmonize
              with the breathtaking natural surroundings of Koh Rong Island. Each suite boasts
              panoramic views of the shimmering sea, thoughtfully curated interiors, and an ambiance
              of serenity and glamour. From the privacy of your suite, you can enjoy the perfect
              blend of comfort, sophistication, and connection to nature. Whether nestled by the
              beach, on terraced levels, or high on the hillside, every suite is designed to elevate
              your island experience.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-brand-blue/30 px-14 py-3 text-[12px] tracking-widest uppercase font-body text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300"
            >
              Book Now
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 2. IMAGE GALLERY STRIP ── */}
      <section className="w-full">
        <GalleryCarousel images={GALLERY} />
      </section>

      {/* ── 3. FEATURES GRID (dark green) ── */}
      <section className="w-full bg-[#233117] py-16 md:py-24 px-8 md:px-16">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
          {FEATURES.map((f, i) => (
            <ScrollReveal key={f.title} direction="up" delay={0.1 + i * 0.08}>
              <div>
                <h3 className="font-body text-[17px] text-white font-normal tracking-wide mb-4">
                  {f.title}
                </h3>
                <p className="font-body text-[14px] text-white/70 leading-[26px]">
                  {f.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── 4. CHOOSE YOUR PERFECT APSARA SUITE ── */}
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Pool photo */}
          <div className="relative h-[400px] lg:h-auto overflow-hidden">
            <img
              src={IMAGES.pool}
              alt="Apsara Resort infinity pool"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Text + numbered list */}
          <div className="px-10 md:px-16 py-16 md:py-20 flex flex-col justify-center">
            <ScrollReveal direction="right" delay={0.15}>
              <h2 className="font-heading text-2xl md:text-[32px] text-brand-blue tracking-[1.6px] leading-[1.3] mb-6">
                Choose Your Perfect<br />Apsara Suite
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <p className="font-body text-[14px] text-brand-blue/60 leading-[26px] mb-10 max-w-[420px]">
                The suites at Apsara Resort are thoughtfully arranged into three distinct rows, each
                offering a unique perspective and tailored to different preferences. Whether
                you&rsquo;re seeking vibrant beachfront energy, balanced luxury, or secluded
                tranquility, there&rsquo;s a suite designed just for you.
              </p>
            </ScrollReveal>
            <div className="flex flex-col gap-5">
              {SUITE_TYPES.map((s, i) => (
                <ScrollReveal key={s.num} direction="right" delay={0.25 + i * 0.06}>
                  <div className="flex items-center gap-5">
                    <span className="w-[50px] h-[50px] rounded-full border border-brand-blue/30 flex items-center justify-center text-[16px] font-body text-brand-blue flex-shrink-0">
                      {s.num}
                    </span>
                    <span className="font-body text-[14px] text-brand-blue tracking-widest">
                      {s.label}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SUITE TYPE BLOCKS (alternating) ── */}
      {SUITES.map((suite, i) => (
        <section key={suite.name} className="w-full">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 ${
              suite.imageLeft ? "" : "lg:[direction:rtl]"
            }`}
          >
            {/* Image */}
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden lg:[direction:ltr]">
              <img
                src={suite.image}
                alt={suite.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="px-10 md:px-16 py-12 md:py-16 flex flex-col justify-center lg:[direction:ltr]">
              <ScrollReveal
                direction={suite.imageLeft ? "right" : "left"}
                delay={0.15}
              >
                <h3 className="font-heading text-[24px] md:text-[28px] text-brand-blue tracking-[1.4px] mb-5">
                  {suite.name}
                </h3>
              </ScrollReveal>
              <ScrollReveal
                direction={suite.imageLeft ? "right" : "left"}
                delay={0.2}
              >
                <p className="font-body text-[14px] text-brand-blue/60 leading-[26px] max-w-[450px]">
                  {suite.text}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* ── 6. LOCATION PLAN ── */}
      <section className="w-full py-16 md:py-24 px-8 md:px-16" style={{ backgroundColor: "#DBDBDB" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          {/* Left: text + button + watermark */}
          <div className="flex flex-col justify-start">
            <ScrollReveal direction="left" delay={0.15}>
              <h2 className="font-serif italic text-3xl md:text-[36px] text-brand-blue leading-[1.3] tracking-[2.3px] mb-6">
                Location Plan
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <p className="font-body text-[14px] text-brand-blue/60 leading-[26px] mb-8">
                Each suite is located in a semi-detached building, offering privacy while still
                capturing the social atmosphere of the resort. The architecture is sleek and modern,
                with touches of traditional Khmer design, blending elegance with local culture.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.25}>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-brand-blue/30 px-14 py-3 text-[12px] tracking-widest uppercase font-body text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300 w-fit mb-10"
              >
                Book Now
              </a>
            </ScrollReveal>
            <img
              src={IMAGES.watermark}
              alt=""
              className="w-20 h-20 opacity-40"
            />
          </div>

          {/* Right: map + row descriptions */}
          <div>
            <ScrollReveal direction="right" delay={0.15}>
              <MapZoom
                src={IMAGES.map}
                highResSrc={IMAGES.mapHiRes}
                alt="Apsara Resort location plan"
                className="w-full h-auto mb-8"
              />
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.25}>
              <div className="space-y-6">
                <div>
                  <h4 className="font-body text-[14px] text-brand-blue font-normal mb-1">
                    First Row:
                  </h4>
                  <p className="font-body text-[13px] text-brand-blue/60 leading-[24px]">
                    Thanks to their beach-front positioning, these suites boast the best views,
                    offering uninterrupted, spectacular ocean views. Guests staying here will enjoy a
                    heightened sense of luxury, perfect for those seeking the ultimate island retreat.
                  </p>
                </div>
                <div>
                  <h4 className="font-body text-[14px] text-brand-blue font-normal mb-1">
                    Third Row:
                  </h4>
                  <p className="font-body text-[13px] text-brand-blue/60 leading-[24px]">
                    On the top of the hill, these suites offer beautiful views but more secluded and
                    at a more accessible price point. Guests can enjoy the same luxurious interiors
                    but with a more budget-friendly rate.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </div>
  );
}
