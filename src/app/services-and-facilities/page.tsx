import Link from "next/link";
import ScrollReveal from "@/components/layout/ScrollReveal";

export const metadata = {
  title: "Services & Facilities | Apsara Resort",
  description: "Discover the exquisite services and facilities at Apsara Resort, Koh Rong.",
};

const IMAGES = {
  beachSand:      "https://static.wixstatic.com/media/26781c_0bdb8046dad4486899d834cba5d9a4e1~mv2.jpg/v1/fill/w_980,h_1306,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_0bdb8046dad4486899d834cba5d9a4e1~mv2.jpg",
  watermark:      "https://static.wixstatic.com/media/26781c_fe0de960448c462f8dcb36bf1e327e12~mv2.png/v1/fill/w_196,h_190,al_c,q_85,enc_avif,quality_auto/26781c_fe0de960448c462f8dcb36bf1e327e12~mv2.png",
  oceanview:      "https://static.wixstatic.com/media/26781c_254839682f3241d0bc09c10db8490cf4~mv2.jpg/v1/fill/w_507,h_549,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_254839682f3241d0bc09c10db8490cf4~mv2.jpg",
  wellness:       "https://static.wixstatic.com/media/26781c_6be03d8ecd864bed8f4733f94420ce8d~mv2.jpg/v1/fill/w_507,h_549,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_6be03d8ecd864bed8f4733f94420ce8d~mv2.jpg",
  privateBeach:   "https://static.wixstatic.com/media/26781c_339d93dfb8214fe084e74acdd841d0dd~mv2.jpg/v1/fill/w_507,h_549,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_339d93dfb8214fe084e74acdd841d0dd~mv2.jpg",
  infinitePool:   "https://static.wixstatic.com/media/26781c_b5769ef2ba8a4167812dc437a488f146~mv2.jpg/v1/fill/w_507,h_549,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_b5769ef2ba8a4167812dc437a488f146~mv2.jpg",
  restaurant:     "https://static.wixstatic.com/media/26781c_4f2dc2ed4807450fb7a049f8ac8aedc6~mv2.jpg/v1/fill/w_507,h_549,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_4f2dc2ed4807450fb7a049f8ac8aedc6~mv2.jpg",
  fitness:        "https://static.wixstatic.com/media/26781c_e74c257082df467ca755b871790d860c~mv2.jpg/v1/fill/w_507,h_549,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_e74c257082df467ca755b871790d860c~mv2.jpg",
  boatTrips:      "https://static.wixstatic.com/media/26781c_da2c3dd7e79e4c87a757565580730ca6~mv2.png/v1/fill/w_507,h_549,al_c,q_85,enc_avif,quality_auto/26781c_da2c3dd7e79e4c87a757565580730ca6~mv2.png",
  bush:           "https://static.wixstatic.com/media/26781c_14db16aa831645eb9d1eb2ebb2f14531~mv2.jpg/v1/fill/w_507,h_549,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_14db16aa831645eb9d1eb2ebb2f14531~mv2.jpg",
  staff:          "https://static.wixstatic.com/media/26781c_0d5aaef16ea44b7995677c40925ffbac~mv2.jpg/v1/fill/w_507,h_549,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_0d5aaef16ea44b7995677c40925ffbac~mv2.jpg",
  spaBanner:      "https://static.wixstatic.com/media/11062b_15aafa54cb5e4400a03853da092014fa~mv2.jpg/v1/fill/w_1920,h_500,al_c,q_85,enc_avif,quality_auto/11062b_15aafa54cb5e4400a03853da092014fa~mv2.jpg",
};

const OFFERINGS = [
  {
    title: "Oceanview Suites",
    description: "Glamorous one-bedroom bungalows with private entrances, large windows, and spacious bathrooms, offering stunning ocean views. Arranged in three cascading rows for privacy and breathtaking scenery.",
    image: IMAGES.oceanview,
  },
  {
    title: "Wellness and SPA",
    description: "A sanctuary of relaxation awaits at our spa, offering a range of treatments inspired by Khmer traditions and modern wellness practices. From soothing massages to rejuvenating facials, each experience is designed to restore balance to your body, mind, and spirit.",
    image: IMAGES.wellness,
  },
  {
    title: "Private Beach",
    description: "Enjoy exclusive access to our pristine private beach, where white sands meet turquoise waters. Whether you want to lounge in the sun, take a stroll along the shore, or swim in the crystal-clear sea, this tranquil paradise is yours to explore.",
    image: IMAGES.privateBeach,
  },
  {
    title: "Infinite Pool",
    description: "Our infinite swimming pool offers a serene setting for relaxation and leisure. Surrounded by lush greenery, it\u2019s the perfect spot to cool off or unwind with a refreshing dip, while taking in the natural beauty of the resort.",
    image: IMAGES.infinitePool,
  },
  {
    title: "Gourmet Restaurant",
    description: "Our gourmet Lemongrass Bar & Restaurant provides an exceptional dining experience, blending local Cambodian flavors with international culinary techniques. Savor expertly crafted dishes in a stunning oceanfront setting, where every meal is a celebration of taste and ambiance.",
    image: IMAGES.restaurant,
  },
  {
    title: "Fitness Area: Coming Soon",
    description: "Soon, you will be also able to stay active in our thoughtfully designed fitness area, featuring essential equipment to keep up with your daily workouts. Whether you prefer cardio or strength training, this cozy space is to offers the ideal balance of convenience and comfort.",
    image: IMAGES.fitness,
  },
  {
    title: "Private Boat Trips",
    description: "Embark on exclusive private boat trips that allow you to explore the stunning waters and hidden gems of Koh Rong. Whether it\u2019s a romantic sunset cruise or an adventurous island-hopping tour, our personalized boat rides offer unforgettable experiences.",
    image: IMAGES.boatTrips,
  },
  {
    title: "100-Year-Old Bush",
    description: "Discover the unique natural beauty of the resort, including a magnificent 100-year-old bush that adds a touch of history and serenity to the surroundings. It\u2019s a peaceful spot for reflection and connecting with nature.",
    image: IMAGES.bush,
  },
  {
    title: "Your Comfort, Our Priority",
    description: "If you require anything additional to make your stay more comfortable, please don\u2019t hesitate to ask our staff. We are here to assist you and will do our best to accommodate your needs.",
    image: IMAGES.staff,
  },
];

const FEATURES = [
  {
    title: "Effortless Luxury",
    description: "From the moment you arrive, you\u2019ll feel exceptionally cared for. Our attentive staff ensures your stay flows effortlessly, allowing you to fully indulge in the surrounding beauty.",
  },
  {
    title: "Holistic Healing for Body and Soul",
    description: "Experience a blend of modern wellness and Khmer spiritual traditions. Our treatments, inspired by Khmer philosophy, balance body, mind, and spirit, providing deep relaxation with a fusion of Eastern spirituality and Western techniques.",
  },
  {
    title: "Your Private Beach Haven",
    description: "Feel the warm sand beneath your feet as you stroll our private beach. Let the sea breeze and gentle waves lull you into relaxation. Whether sunbathing or swimming in crystal-clear water, this is your personal paradise.",
  },
  {
    title: "A Culinary Journey Like No Other",
    description: "Savor Cambodia\u2019s flavors with every bite, a blend of local and global tastes. Dine by the ocean, where meals become unforgettable experiences, enhanced by the sound of waves and candlelight.",
  },
  {
    title: "Relax, Recharge, and Explore",
    description: "At Apsara Beach Resort, unwind in the outdoor pool, stay active in the cozy Fitness Space, or relax in the Leisure Lounge. For adventure, enjoy private boat rides exploring Koh Rong\u2019s stunning waters.",
  },
  {
    title: "Discover the Coral Reefs",
    description: "Explore Koh Rong\u2019s vibrant coral reefs with unforgettable snorkeling. Glide through crystal-clear waters and encounter colorful marine life up close. Whether seasoned or a beginner, beauty awaits beneath the surface.",
  },
];

export default function ServicesAndFacilitiesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* ── 1. HERO INTRO ── */}
      <section className="w-full bg-[#1f1f1f] py-24 md:py-32 px-8">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal direction="none" delay={0.2}>
            <h1 className="font-serif italic text-4xl md:text-[48px] text-white leading-[1.2] tracking-[2.3px] mb-8">
              Your Exquisite Getaway
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="font-body text-[15px] text-white/60 leading-[28px] mb-10">
              Your journey begins the moment you step onto the island. Here, the dazzling beauty of Koh
              Rong meets the elegance of a world designed to cater to your every desire. Every experience,
              every moment, is curated for you to feel the joy, serenity, and glamour you deserve.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.35}>
            <a
              href="tel:+85567883503"
              className="inline-block border border-white/60 px-10 py-3 text-[12px] tracking-widest uppercase font-body text-white hover:bg-white hover:text-brand-blue transition-all duration-300"
            >
              Call us to discuss your needs
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 2. FEATURES LIST (2-col) ── */}
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]">
          {/* Left: Beach sand image */}
          <div className="relative h-[400px] lg:h-auto overflow-hidden">
            <img
              src={IMAGES.beachSand}
              alt="Beach sand with palm tree shadows"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Watermark logo overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={IMAGES.watermark}
                alt=""
                className="w-32 h-32 opacity-60"
              />
            </div>
          </div>

          {/* Right: Feature blocks */}
          <div className="bg-[#FAFAFA] px-10 md:px-14 py-16 md:py-20 flex items-center">
            <div className="max-w-[340px]">
              {FEATURES.map((feature, i) => (
                <ScrollReveal key={feature.title} direction="right" delay={0.1 + i * 0.05}>
                  <div className="mb-8 last:mb-0">
                    <h3 className="font-heading text-[17px] md:text-[19px] text-brand-blue tracking-wide mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-body text-[13px] text-brand-blue/55 leading-[22px]">
                      {feature.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OUR OFFERINGS GRID ── */}
      <section className="w-full bg-[#242323] py-16 md:py-20 px-8 md:px-16">
        <ScrollReveal direction="none" delay={0.1}>
          <h2 className="font-serif italic text-3xl md:text-[40px] text-[#E8E4DC] text-center tracking-[2.3px] mb-12 md:mb-16">
            Our Offerings
          </h2>
        </ScrollReveal>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {OFFERINGS.map((offering, i) => (
            <ScrollReveal key={offering.title} direction="zoom" delay={0.1 + i * 0.05}>
              <div className="relative h-[350px] md:h-[300px] overflow-hidden group rounded-sm">
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 h-full flex flex-col justify-center p-8">
                  <h3 className="font-heading text-[17px] text-white tracking-wide mb-3">
                    {offering.title}
                  </h3>
                  <p className="font-body text-[13px] text-white/80 leading-[22px]">
                    {offering.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── 4. SATISFACTION GUARANTEE ── */}
      <section className="w-full bg-[#FAFAFA] py-20 md:py-28 px-8">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-heading text-2xl md:text-[32px] text-brand-blue tracking-wider mb-8">
              Satisfaction Guarantee
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="font-body text-[14px] text-brand-blue/60 leading-[26px]">
              At Apsara Beach Resort, your comfort and enjoyment are our top priorities.
              We are committed to delivering an exceptional experience, and if for any
              reason you are not fully satisfied with any aspect of your stay, please let us
              know. Our dedicated team will go above and beyond to ensure your
              concerns are addressed promptly, guaranteeing a stay that meets&mdash;and
              exceeds&mdash;your expectations. Your happiness is our success.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 5. SPA MENU BANNER ── */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <img
          src={IMAGES.spaBanner}
          alt="SPA treatment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <ScrollReveal direction="none" delay={0.2}>
            <Link
              href="/spa"
              className="inline-block border border-white/60 px-12 py-3.5 text-[12px] tracking-widest uppercase font-body text-white hover:bg-white hover:text-brand-blue transition-all duration-300"
            >
              SPA Menu
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
