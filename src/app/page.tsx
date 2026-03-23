import ScrollReveal from "@/components/layout/ScrollReveal";

// Image URLs from apsara-resort.com (Wix CDN)
const IMAGES = {
  heroBg:        "https://static.wixstatic.com/media/26781c_cab72d76abd645c8a5c179ca6717a769~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/26781c_cab72d76abd645c8a5c179ca6717a769~mv2.jpg",
  introSunset:   "https://static.wixstatic.com/media/26781c_3cb2328a6376427daeb66e08d523d6e6~mv2.jpg/v1/fill/w_800,h_1100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_3cb2328a6376427daeb66e08d523d6e6~mv2.jpg",
  stayWithUs:    "https://static.wixstatic.com/media/26781c_065e188ec39d47d39ac0dcfa9d744ff7~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/527A6634-Edit_edited.jpg",
  privateBeach:  "https://static.wixstatic.com/media/26781c_bc076677935445618ead5ef5c539bb2a~mv2.jpg/v1/fill/w_700,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/527A6847-HDR_edited_edited.jpg",
  spa:           "https://static.wixstatic.com/media/26781c_10e3371136324b9b862da5cf9a77716b~mv2.jpg/v1/fill/w_700,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/taylor-heery-338wbGMMjP4-unsplash_edited.jpg",
  parallaxBg:    "https://static.wixstatic.com/media/26781c_e38c2f4b63fe4862909d5e77c9deb4dc~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/26781c_e38c2f4b63fe4862909d5e77c9deb4dc~mv2.jpg",
  suiteRoom:     "https://static.wixstatic.com/media/26781c_bc076677935445618ead5ef5c539bb2a~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/527A6847-HDR_edited_edited.jpg",
  khmerTemple:   "https://static.wixstatic.com/media/26781c_05dd30bc4d2b41e98db7e47899c8a551~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_05dd30bc4d2b41e98db7e47899c8a551~mv2.jpg",
  khmerScripts:  "https://static.wixstatic.com/media/26781c_b427a67636874e169193bc0a1c6e047f~mv2.png/v1/fill/w_700,h_500,al_c,q_85,enc_avif,quality_auto/bizot-divination2_edited.png",
  kohRong:       "https://static.wixstatic.com/media/26781c_c1537639648d4f0aaca049d24f83498b~mv2.png/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/26781c_c1537639648d4f0aaca049d24f83498b~mv2.png",
  club:          "https://static.wixstatic.com/media/26781c_b2beccd6f78b4c4e8c86b1f59855bbcc~mv2.jpg/v1/fill/w_600,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_b2beccd6f78b4c4e8c86b1f59855bbcc~mv2.jpg",
};

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* ── 1. HERO ── */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${IMAGES.heroBg}')` }}
        >
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Centered title */}
        <div className="relative z-10 text-center text-white px-6">
          <ScrollReveal direction="none" delay={0.3}>
            <h1 className="font-serif italic text-5xl md:text-[72px] leading-[1.15] text-white drop-shadow-sm">
              Welcome to the Luxurious<br />Shores of Cambodia
            </h1>
          </ScrollReveal>
        </div>

        {/* Subtitle pinned at bottom */}
        <div className="absolute bottom-10 left-0 right-0 z-10 text-center">
          <ScrollReveal direction="up" delay={0.5}>
            <p className="font-body text-white text-[15px] md:text-[16px] tracking-wide">
              Begin an exotic adventure by booking a vacation at our resort on the Koh Rong Island
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 2. INTRODUCTION ── */}
      <section className="w-full py-24 md:py-32 px-8 md:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text left */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="flex flex-col gap-6">
              <h2 className="font-body text-3xl md:text-[38px] text-brand-blue leading-[1.3]">
                The Beachside Apsara Resort is a refined retreat blending glamorous lifestyle with the beauty of nature.
              </h2>
              <p className="font-body text-[16px] text-brand-blue/70 leading-[30px]">
                Nestled on the elegant shores of Coconut Beach, our luxurious apartments unveil exquisite interiors and the raw allure of tropical paradise. Indulge in the island's secret charm.
              </p>
            </div>
          </ScrollReveal>
          {/* Image right */}
          <ScrollReveal direction="zoom" delay={0.2}>
            <img
              src={IMAGES.introSunset}
              alt="Apsara Resort sunset view"
              className="w-full max-w-[420px] ml-auto h-auto object-cover shadow-md"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── 3. STAY WITH US ── */}
      <section className="w-full py-24 md:py-32 px-8 md:px-20 bg-[#E8E4DC]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text left */}
          <div className="flex flex-col gap-8">
            <ScrollReveal direction="left" delay={0.1}>
              <h2 className="font-body text-4xl md:text-[52px] text-brand-blue leading-[1.1]">
                Stay With Us
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <p className="font-body text-[16px] text-brand-blue/80 leading-[30px]">
                Embracing the Apsara experience means slowing down and savoring life by the ocean. With glamorous interiors, stunning views, and refined comfort, our Suites offer effortless elegance just steps from the resort's vibrant heart.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.3}>
              <a
                href="https://www.booking.com/hotel/kh/apsara-resort-koh-rong.pl.html"
                target="_blank"
                className="inline-block border border-brand-blue px-10 py-3 text-[12px] tracking-widest uppercase font-body hover:bg-brand-blue hover:text-white transition-all duration-300 w-fit"
              >
                Book Now
              </a>
            </ScrollReveal>
          </div>
          {/* Image right */}
          <ScrollReveal direction="zoom" delay={0.2}>
            <img
              src={IMAGES.stayWithUs}
              alt="Infinity pool with Apsara statue"
              className="w-full h-auto object-cover shadow-xl"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── 4. PRIVATE BEACH + SPA + SERVICES ── */}
      <section className="w-full py-24 md:py-32 px-8 md:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* Col 1: Private Beach */}
          <ScrollReveal direction="zoom" delay={0.1} className="relative group overflow-hidden shadow-md">
            <img
              src={IMAGES.privateBeach}
              alt="Private Beach"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <h3 className="font-body text-white text-xl tracking-widest uppercase drop-shadow">Private Beach</h3>
            </div>
          </ScrollReveal>

          {/* Col 2: SPA */}
          <ScrollReveal direction="zoom" delay={0.2} className="relative group overflow-hidden shadow-md">
            <img
              src={IMAGES.spa}
              alt="SPA & Wellness Centrum"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <h3 className="font-body text-white text-xl tracking-widest uppercase drop-shadow">SPA &amp; Wellness Centrum</h3>
              <a
                href="https://www.apsara-resort.com/spa"
                target="_blank"
                className="border border-white text-white text-[11px] tracking-widest uppercase px-6 py-2 hover:bg-white hover:text-brand-blue transition-all duration-300"
              >
                SPA Menu
              </a>
            </div>
          </ScrollReveal>

          {/* Col 3: Services & Facilities text */}
          <ScrollReveal direction="right" delay={0.3} className="flex flex-col gap-6 pt-4">
            <h2 className="font-body text-3xl md:text-[36px] text-brand-blue leading-[1.2]">
              Services &amp; Facilities
            </h2>
            <p className="font-body text-[15px] text-brand-blue/75 leading-[28px]">
              Apsara Resort offers an exclusive retreat with access to a private open pool, providing a tranquil escape surrounded by nature. Guests can also enjoy the unique experience of exploring a privately accessed 100-year-old palm-tree bush, a hidden gem that enhances the resort's serene, luxurious ambiance. This rare natural setting invites relaxation and connection with the island's timeless beauty.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 5. SERVICES LIST ── */}
      <section className="w-full py-20 px-8 md:px-20 bg-white border-t border-brand-muted/30">
        <div className="max-w-[900px] mx-auto text-center flex flex-col items-center gap-6">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="font-body text-[18px] md:text-[22px] text-brand-blue leading-[1.4]">
              Apsara Resort provides a wide array of luxurious services designed for ultimate relaxation and adventure
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="font-body text-[15px] text-brand-blue/70 leading-[28px]">
              Every detail is tailored to create an unforgettable stay at this luxurious beachside paradise.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <ul className="text-left list-disc pl-6 space-y-2 font-body text-[15px] text-brand-blue/80 leading-[28px]">
              <li>Top-tier restaurant offering gourmet cuisine</li>
              <li>World-class spa with rejuvenating treatments</li>
              <li>Private boat trips to explore the pristine waters</li>
              <li>24/7 concierge service for all guest needs</li>
              <li>Water sports and guided island tours</li>
              <li>Sunset cruises for a magical evening experience</li>
            </ul>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.25}>
            <a
              href="https://www.apsara-resort.com/services-and-facilities"
              target="_blank"
              className="inline-block border border-brand-blue px-10 py-3 text-[11px] tracking-widest uppercase font-body hover:bg-brand-blue hover:text-white transition-all duration-300 mt-4"
            >
              Learn more
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 6. "YOU DESERVE THIS" PARALLAX ── */}
      <section className="w-full h-[400px] relative flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${IMAGES.parallaxBg}')` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="font-serif italic text-2xl text-white block drop-shadow">You deserve this</span>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 7. CHOOSE YOUR APSARA SUITE ── */}
      <section className="w-full py-24 md:py-32 px-8 md:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image left */}
          <ScrollReveal direction="zoom" delay={0.1}>
            <img
              src={IMAGES.suiteRoom}
              alt="Apsara Suite interior with ocean view"
              className="w-full h-auto object-cover shadow-xl"
            />
          </ScrollReveal>

          {/* Text right */}
          <div className="flex flex-col gap-8">
            <ScrollReveal direction="right" delay={0.1}>
              <h2 className="font-body text-3xl md:text-[44px] text-brand-blue leading-[1.2]">
                Choose Your Apsara Suite
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <p className="font-body text-[15px] text-brand-blue/75 leading-[28px]">
                The Apsara Beach Resort offers 28 luxurious suites, thoughtfully arranged in three cascading rows to ensure breathtaking ocean views from every room. Each suite is designed with floor-to-ceiling windows that bathe the space in natural light. Every detail is crafted to provide a serene, indulgent experience, blending modern elegance with the island's natural beauty. Choose your perfect suite now and immerse yourself in the ultimate luxury.
              </p>
            </ScrollReveal>

            {/* Amenity icons */}
            <ScrollReveal direction="right" delay={0.25}>
              <div className="flex items-center gap-8 text-brand-blue">
                {/* Umbrella/Weather */}
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/></svg>
                {/* TV */}
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>
                {/* AC/Climate */}
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3h8l4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z"/><path d="M8 12h8M12 9v6"/></svg>
                {/* WiFi */}
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <a
                href="https://www.apsara-resort.com/accommodations"
                target="_blank"
                className="inline-block bg-brand-blue text-white px-10 py-4 text-[11px] tracking-widest uppercase font-body hover:opacity-80 transition-opacity w-fit"
              >
                RESERVE
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 8. THE KHMER CULTURE ── */}
      <section className="w-full py-24 md:py-32 px-8 md:px-20 bg-[#1a1917]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text left */}
          <div className="flex flex-col gap-8">
            <ScrollReveal direction="left" delay={0.1}>
              <h2 className="font-body text-3xl md:text-[44px] text-white uppercase tracking-widest leading-[1.2]">
                The Khmer Culture
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <p className="font-body text-[15px] text-white/75 leading-[28px]">
                Apsara Resort honors and respects the rich Khmer culture, integrating its heritage into every aspect of the resort experience. From traditional Khmer architecture and decor to locally inspired cuisine and cultural activities, the resort celebrates and cultivates the legacy of Cambodia's vibrant history. Guests are invited to immerse themselves in authentic Khmer traditions while enjoying the resort's luxurious surroundings.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.25}>
              <p className="font-body text-[15px] text-white/75 leading-[28px]">
                <span className="text-white font-body">The Forgotten Cambodian Astrological Scripts:</span> Apsara Resort's spa services honor the ancient wisdom of the Cambodian people, offering treatments that rejuvenate both body and spirit. These spiritual and holistic therapies are deeply rooted in age-old traditions, providing a restorative experience that goes beyond physical relaxation.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.3}>
              <a
                href="https://www.apsara-resort.com/khmer-culture"
                target="_blank"
                className="inline-block border border-white/60 px-10 py-3 text-[11px] tracking-widest uppercase font-body text-white hover:bg-white hover:text-brand-blue transition-all duration-300 w-fit"
              >
                Learn more
              </a>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.35}>
              <p className="font-body text-[14px] text-white/60 leading-[26px] mt-4 italic">
                The name "Apsara" for the resort is inspired by the Cambodian Apsaras—celestial nymphs known for their grace, beauty, and spiritual significance in Khmer culture. These divine beings, often depicted in ancient temple carvings, embody elegance and serenity, reflecting the resort's commitment to offering an experience that harmonizes luxury, tranquility, and cultural heritage.
              </p>
            </ScrollReveal>
          </div>

          {/* Image right – temple relief */}
          <ScrollReveal direction="zoom" delay={0.2} className="w-full">
            <img
              src={IMAGES.khmerTemple}
              alt="Khmer temple relief carving"
              className="w-full h-auto object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── 9. EXPERIENCE / KOH RONG ISLAND ── */}
      <section className="w-full relative overflow-hidden">
        {/* Full-width parallax background */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${IMAGES.kohRong}')` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 py-32 px-8 md:px-20 max-w-[900px] mx-auto text-center flex flex-col items-center gap-8">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-body text-3xl md:text-[44px] text-white leading-[1.3]">
              Experience our exquisite quality and the beauty of nature.
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="font-body text-[16px] text-white/85 leading-[30px]">
              On our stunning shores, surrounded by the ancient jungle and the soothing sound of the waves—you will discover what you desire.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.25}>
            <p className="font-body text-[15px] text-white/75 leading-[28px] max-w-[700px]">
              Koh Rong Island is a tropical paradise where nature's beauty shines in its untouched beaches, crystal-clear waters, and lush jungles. The island is surrounded by vibrant coral reefs teeming with marine life, offering a mesmerizing underwater world for divers and snorkelers. Its serene landscapes, with pristine stretches of white sand and azure waves gently lapping the shore, create a tranquil escape into nature's purest form.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 10. APSARA CLUB MEMBERSHIP ── */}
      <section className="w-full py-24 md:py-32 px-8 md:px-20 bg-[#1a1917]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text left */}
          <div className="flex flex-col gap-8">
            <ScrollReveal direction="left" delay={0.1}>
              <h2 className="font-body text-3xl md:text-[44px] text-white leading-[1.2]">
                The Apsara Club Membership
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <p className="font-body text-[15px] text-white/75 leading-[28px]">
                A visit to the Apsara Beach Resort may open doors to an exclusive world. This cosmopolitan retreat draws guests from all over the globe, offering them a serene space for reflection and rejuvenation. Among them, the members of the Apsara Social Club—some of the world's most accomplished individuals—come here to find peace, indulge in gourmet cuisine, and engage in inspiring dialogue. It's a place where ideas flourish and connections are effortlessly made. Could your next journey bring you into this extraordinary circle?
              </p>
            </ScrollReveal>
          </div>

          {/* Image right */}
          <ScrollReveal direction="zoom" delay={0.2}>
            <img
              src={IMAGES.club}
              alt="Apsara Club Membership"
              className="w-full max-w-[440px] ml-auto h-auto object-cover shadow-xl"
            />
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
