import ScrollReveal from "@/components/layout/ScrollReveal";

export const metadata = {
  title: "SPA | Apsara Resort",
  description:
    "A sanctuary of relaxation and rejuvenation at Apsara Stone Spa, Koh Rong.",
};

const IMAGES = {
  hero: "https://static.wixstatic.com/media/11062b_15aafa54cb5e4400a03853da092014fa~mv2.jpg/v1/fill/w_980,h_352,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Spa%20Massage%20Therapy%20Session.jpg",
  escape:
    "https://static.wixstatic.com/media/26781c_c65cc98fe6b347038e4af19e38ed2d19~mv2.jpg/v1/fill/w_507,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Mud%20Spa_edited.jpg",
};

/* ── Decorative lotus SVG ── */
function LotusSVG({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="17.001 10 166 180"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
    >
      <path d="M125.655 117.839c1.61 4.636 2.817 9.272 4.829 13.908 3.421 8.063 7.445 15.722 10.463 23.785 4.829 13.505-2.213 23.987-9.859 34.468-10.463-8.264-21.731-15.319-18.713-31.445 1.61-7.861 3.219-15.722 4.628-23.583.805-4.838 1.207-9.675-.604-14.916-3.823 12.497-7.244 24.994-11.67 37.29-4.427 12.296-10.664 23.382-25.152 26.204-4.628.806-9.055 1.411-13.682 2.016-4.225-19.754 1.006-35.677 18.109-47.167 9.859-6.652 19.316-14.311 28.17-23.18-5.433 2.419-10.865 4.636-16.097 7.055-11.469 5.442-22.737 11.288-34.206 16.932-16.499 8.063-31.188 3.225-44.87-7.256 10.463-25.801 19.719-28.623 52.114-24.39 13.28 1.814 26.359 3.024 39.639 4.434l.604-3.024c-11.469-3.225-23.139-6.45-34.608-9.474-9.055-2.419-18.31-4.031-27.164-6.853C33.902 88.007 23.439 80.146 22.03 64.02c-.402-4.636-2.012-9.071-3.018-13.707 34.005-4.434 41.047-3.427 65.998 24.793 9.457 10.683 18.512 21.769 27.767 32.654 1.006-.605 1.811-1.209 2.817-1.814L105.936 87.2c-5.232-10.683-11.67-21.165-15.493-32.452-6.037-18.141-.604-33.46 15.292-44.747 7.647 11.086 15.694 21.366 17.505 35.275 1.409 10.28 1.006 20.762.604 31.041-.201 4.636-.805 9.272-1.409 14.311 3.622-12.094 7.043-24.189 10.866-36.082 3.219-10.078 7.848-19.351 17.505-24.793-5.031 31.647-6.641 32.654-25.151 67.286z" />
    </svg>
  );
}

/* ── Clock icon ── */
function ClockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block mr-1 -mt-0.5"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

/* ── Treatment data ── */
const holisticMassages = [
  {
    name: "Traditional Khmer Massage (Without Oil)",
    desc: "A pressure-based massage focusing on the back and shoulders, ideal for relieving tension, improving circulation, and restoring energy flow.",
    prices: "60 min $35 | 90 min $45 | 120 min $60",
  },
  {
    name: "Body Oil Massage \u2013 The Art of Touch",
    desc: "Choose from avocado, lavender, or lemongrass oil, each offering unique therapeutic benefits. This full-body massage hydrates the skin, soothes sore muscles, and relieves tension.",
    prices: "60 min $40 | 90 min $60 | 120 min $90",
  },
  {
    name: "Hot Stone Therapy \u2013 Ancient Healing Ritual",
    desc: "A deeply relaxing experience combining warm volcanic stones and coconut oil to relieve tension, detoxify the body, and restore balance.",
    prices: "90 min $55 | 120 min $75",
  },
];

const specializedTherapies = [
  {
    name: "Aromatherapy Jasmine Massage",
    desc: "A sensory delight that calms the mind, balances emotions, and enhances relaxation using the delicate essence of jasmine oil.",
    prices: "60 min $70 | 90 min $95 | 120 min $140",
  },
  {
    name: "Hot Compress Therapy",
    desc: "A combination of herbal compresses and cold coconut oil to detoxify the body, relieve stress, and promote deep relaxation.",
    prices: "90 min $55 | 120 min $75",
  },
];

const footTherapy = {
  desc: "Our Foot Energy Therapy uses herbal-infused water, jasmine flowers, and Khmer herbs to relieve tension and improve circulation. Reflexology techniques stimulate key pressure points for overall well-being.",
  prices: "45 min $35 | 60 min $50",
};

/* ── Category tab ── */
function CategoryTab({ label }: { label: string }) {
  return (
    <div className="bg-brand-green text-white font-body text-[14px] tracking-wider px-6 py-2.5 max-w-[340px] mt-10 mb-6">
      {label}
    </div>
  );
}

/* ── Treatment item ── */
function TreatmentItem({
  name,
  desc,
  prices,
}: {
  name: string;
  desc: string;
  prices: string;
}) {
  return (
    <div className="mb-8">
      <h3 className="font-heading text-[15px] font-medium tracking-wide text-brand-blue mb-1">
        {name}
      </h3>
      <p className="font-body text-[14px] text-brand-blue/60 leading-[24px] max-w-[450px]">
        {desc}
      </p>
      <p className="font-body text-[13px] text-brand-blue/70 mt-3 tracking-wide">
        <ClockIcon />
        {prices}
      </p>
    </div>
  );
}

export default function SpaPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ── HERO BANNER ── */}
      <section className="relative w-full bg-brand-sand py-12 md:py-16">
        <div className="max-w-[980px] mx-auto px-6 relative">
            <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden">
              <img
                src={IMAGES.hero}
                alt="Spa Massage Therapy Session"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />

              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h1 className="font-serif italic text-3xl md:text-[48px] text-white leading-[1.15] tracking-[2.3px] mb-2">
                  Apsara Stone Spa
                </h1>
                <p className="font-body text-[14px] text-white/80 tracking-wider">
                  A Sanctuary of Relaxation and Rejuvenation
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* ── TREATMENTS ── */}
      <section className="relative w-full bg-brand-sand py-16 md:py-24 overflow-hidden">
        {/* Decorative lotus background — right side */}
        <div className="absolute -right-[50px] top-[15%] pointer-events-none">
          <LotusSVG className="w-[800px] h-[870px] text-[#FAFAFA]" />
        </div>
        {/* Decorative lotus background — left side (lower) */}
        <div className="absolute -left-[100px] bottom-[10%] pointer-events-none">
          <LotusSVG className="w-[630px] h-[686px] text-[#FAFAFA] scale-x-[-1]" />
        </div>

        <div className="relative z-10 max-w-[980px] mx-auto px-6 md:px-12">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-serif text-[24px] md:text-[28px] text-brand-blue leading-[1.3] mb-2 tracking-wide">
              Our Signature Treatments
            </h2>
          </ScrollReveal>

          {/* Holistic Body Massages */}
          <ScrollReveal direction="up" delay={0.15}>
            <CategoryTab label="Holistic Body Massages" />
            <p className="font-body text-[14px] text-brand-blue/60 leading-[24px] max-w-[500px] mb-8">
              Whether you seek relaxation, muscle relief, or an energy boost, our
              skilled therapists offer a variety of body massages, tailored to
              your needs.
            </p>
            {holisticMassages.map((t) => (
              <TreatmentItem key={t.name} {...t} />
            ))}
          </ScrollReveal>

          {/* Specialized Therapies */}
          <ScrollReveal direction="up" delay={0.15}>
            <CategoryTab label="Specialized Therapies" />
            {specializedTherapies.map((t) => (
              <TreatmentItem key={t.name} {...t} />
            ))}
          </ScrollReveal>

          {/* Foot Therapy & Reflexology */}
          <ScrollReveal direction="up" delay={0.15}>
            <CategoryTab label="Foot Therapy & Reflexology" />
            <p className="font-body text-[14px] text-brand-blue/60 leading-[24px] max-w-[500px] mb-3">
              {footTherapy.desc}
            </p>
            <p className="font-body text-[13px] text-brand-blue/70 tracking-wide">
              <ClockIcon />
              {footTherapy.prices}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── YOUR ESCAPE AWAITS (dark section) ── */}
      <section className="w-full bg-[#1a1917] py-16 md:py-24">
        <div className="max-w-[980px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Text */}
            <ScrollReveal direction="left" delay={0.1}>
              <h2 className="font-serif text-[26px] md:text-[32px] text-white leading-[1.3] mb-6">
                Apsara Stone Spa &ndash;
                <br />
                Your Escape Awaits
              </h2>
              <p className="font-body text-[14px] text-white/65 leading-[26px]">
                Whether you seek an energizing massage, skin nourishment, or a
                tranquil escape, our expert therapists ensure a deeply
                restorative experience. Let the sounds of the ocean and the
                warmth of natural elements awaken your senses at Apsara Stone
                Spa.
              </p>
            </ScrollReveal>

            {/* Image */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="relative w-full aspect-[3/2] overflow-hidden">
                <img
                  src={IMAGES.escape}
                  alt="Apsara Stone Spa treatment"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── RESERVATIONS ── */}
      <section className="w-full bg-brand-sand py-14 md:py-20">
        <div className="max-w-[980px] mx-auto px-6 md:px-12">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="font-heading text-[14px] text-brand-blue tracking-wider">
              <span className="font-medium">Reservations:</span>{" "}
              <a
                href="mailto:spa@apsara-resort.com"
                className="underline hover:text-brand-blue/70 transition-colors"
              >
                spa@apsara-resort.com
              </a>
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.instagram.com/apsara_kohrong"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-brand-blue/70 hover:text-brand-blue transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/ApsaraResortKohRong/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-brand-blue/70 hover:text-brand-blue transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
