import ScrollReveal from "@/components/layout/ScrollReveal";

export const metadata = {
  title: "The Khmer Culture | Apsara Resort",
  description: "Explore Khmer astrology, Cambodian ballet, and the soul of Apsara Resort.",
};

const IMAGES = {
  zodiacMain:     "https://static.wixstatic.com/media/26781c_852d101bac294d6fb946324d4370b297~mv2.png/v1/fill/w_1011,h_1001,al_c,q_90,enc_avif,quality_auto/Zodiaque_Khmer_1910.png",
  zodiacCard:     "https://static.wixstatic.com/media/26781c_8d728b403ed347898489f076ca0c1d2e~mv2.jpg/v1/fill/w_612,h_452,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Zodiaque_Khmer_1910_edited.jpg",
  moonCard:       "https://static.wixstatic.com/media/26781c_246e48042dff493084b896735e8916ea~mv2.jpg/v1/crop/x_63,y_0,w_1155,h_853/fill/w_612,h_452,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/moon-sky-satellite-6348334.jpg",
  divinationCard: "https://static.wixstatic.com/media/26781c_4c0a18b85b3642959708809f8f5ae880~mv2.png/v1/fill/w_576,h_426,al_c,lg_1,q_85,enc_avif,quality_auto/bizot-divination2_6c0c164bd2b597ee32b68b8b5755bd2e.png",
  balletDancers:  "https://static.wixstatic.com/media/26781c_3600cc40f9a74f8294b7ad32851ee59a~mv2.jpg/v1/fill/w_1920,h_600,al_c,q_85,enc_avif,quality_auto/26781c_3600cc40f9a74f8294b7ad32851ee59a~mv2.jpg",
  angkorRelief:   "https://static.wixstatic.com/media/26781c_cb9bb81c12f94c00b96391dfb384db85~mv2.jpg/v1/fill/w_1920,h_800,al_c,q_85,enc_avif,quality_auto/26781c_cb9bb81c12f94c00b96391dfb384db85~mv2.jpg",
};

const KEY_ELEMENTS = [
  {
    image: IMAGES.zodiacCard,
    title: "The Khmer Zodiac",
    text: "The Khmer zodiac consists of twelve animal signs, similar to the Chinese zodiac but rooted in local interpretations and spiritual beliefs. Each year is associated with one of these animals, which influences the personality and destiny of those born under it.",
  },
  {
    image: IMAGES.moonCard,
    title: "Lunar Calendar",
    text: "The Khmer lunar calendar plays a pivotal role in determining auspicious days for rituals, ceremonies, and personal decisions. This calendar is often consulted to align one\u2019s actions with the rhythms of the universe.",
  },
  {
    image: IMAGES.divinationCard,
    title: "Astrological Guidance",
    text: "Khmer astrology often provides guidance for key life events, from weddings to business ventures, ensuring that actions are taken at the most favorable times.",
  },
];

export default function KhmerCulturePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* ── 1. HERO — THE SOUL OF APSARA ── */}
      <section className="w-full bg-[#262626] py-16 md:py-20 px-8 md:px-20">
        <div className="max-w-[900px] mx-auto text-center">
          <ScrollReveal direction="none" delay={0.2}>
            <h1 className="font-serif italic text-4xl md:text-[39px] text-[#FAFAFA] leading-[1.15] tracking-[0.15em] mb-10">
              The Soul of Apsara
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="none" delay={0.3}>
            <div className="flex justify-center mb-10">
              <img
                src={IMAGES.zodiacMain}
                alt="Khmer Zodiac — Zodiaque Khmer 1910"
                className="w-[500px] md:w-[600px] h-auto"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="none" delay={0.35}>
            <p className="font-body text-[16px] text-[#FAFAFA] tracking-[0.15em] font-normal mb-4">
              The Soul of Apsara: Khmer Astrology and Ballet
            </p>
            <p className="font-body text-[16px] text-[#FAFAFA] leading-[28px] tracking-[0.15em] max-w-[660px] mx-auto">
              Apsara Resort&apos;s identity is deeply rooted in the rich traditions of Cambodian culture, where the stars above and the grace of dance intertwine to inspire a unique philosophy of hospitality. Central to this vision are two profound influences: Khmer astrology and the elegance of Cambodian ballet, which together shape our commitment to nurturing both the soul and the body.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 2. THE GUIDING STARS ── */}
      <section className="w-full py-16 md:py-20 px-8 md:px-20 bg-[#DAD7D0]">
        <div className="max-w-[660px] mx-auto">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="font-body text-[16px] text-brand-blue tracking-[1.6px] font-normal mb-4">
              The Guiding Stars: Khmer Astrology
            </p>
            <p className="font-body text-[16px] text-brand-blue leading-[28px] tracking-[1.6px]">
              Khmer astrology, a vital aspect of Cambodian culture, offers a spiritual framework that underscores the importance of harmony between the cosmos and human life. Based on ancient traditions, Khmer astrology helps guide individuals through life by interpreting celestial movements and their impact on earthly events. At its heart, it emphasizes balance, self-awareness, and mindfulness—qualities that resonate deeply with the ethos of Apsara Resort.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 3. KEY ELEMENTS OF KHMER ASTROLOGY ── */}
      <section className="w-full py-12 md:py-16 px-8 md:px-20 bg-[#DAD7D0]">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="font-body text-[16px] text-brand-blue tracking-[1.6px] text-center mb-3">
              Key Elements of Khmer Astrology
            </p>
            <p className="font-body text-[16px] text-brand-blue leading-[28px] tracking-[1.6px] text-center max-w-[700px] mx-auto mb-12">
              For Apsara Resort, these principles inspire an environment where balance and well-being are paramount. By embracing the wisdom of Khmer astrology, we aim to provide an experience that nurtures the soul as much as it indulges the senses, offering guests a sanctuary of both physical and spiritual rejuvenation.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {KEY_ELEMENTS.map((item, i) => (
              <ScrollReveal key={item.title} direction="up" delay={0.1 + i * 0.1}>
                <div className="bg-[#DAD7D0]">
                  <div className="w-full aspect-[306/226] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <h4 className="font-body text-[16px] text-brand-blue mb-2">
                      {item.title}
                    </h4>
                    <p className="font-body text-[16px] text-brand-blue leading-[26px] tracking-[1.6px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. BALLET DANCERS — FULL-WIDTH IMAGE ── */}
      <section className="w-full">
        <img
          src={IMAGES.balletDancers}
          alt="Historical Cambodian Royal Ballet dancers"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* ── 5. THE GRACEFUL ART: CAMBODIAN BALLET ── */}
      <section className="w-full py-16 md:py-20 px-8 md:px-20 bg-[#242323]">
        <div className="max-w-[720px] mx-auto">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="font-body text-[16px] text-[#FAFAFA] tracking-[1.6px] mb-6">
              The Graceful Art: Cambodian Ballet
            </p>
            <p className="font-body text-[16px] text-[#FAFAFA] leading-[28px] tracking-[1.6px]">
              Also known as the Royal Ballet of Cambodia, has a history stretching back to the Angkorian period (9th-15th centuries), where it was performed as a sacred art form to honor the gods and kings. Rooted in mythology and spirituality, the dance is renowned for its intricate hand gestures, slow and deliberate movements, and elaborate costumes. Traditionally performed in royal courts, it is a symbol of national identity and cultural pride.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 6. APSARAS IN MYTHOLOGY — TWO COLUMNS ── */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left — text on beige */}
          <div className="bg-[#DAD7D0] py-16 md:py-20 px-8 md:px-16 lg:px-20 flex items-center">
            <div className="max-w-[420px] mx-auto md:ml-auto md:mr-12">
              <ScrollReveal direction="up" delay={0.1}>
                <p className="font-body text-[16px] text-brand-blue leading-[28px] tracking-[1.6px] mb-8">
                  Cambodian ballet, known for its meticulous movements and symbolic gestures, is deeply intertwined with the myth of the <strong className="font-normal">Apsaras</strong>—celestial dancers in Khmer mythology who personify beauty, grace, and spirituality.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.15}>
                <p className="font-body text-[16px] text-brand-blue tracking-[1.6px] font-normal mb-3">
                  Apsaras in Cambodian Mythology
                </p>
                <p className="font-body text-[16px] text-brand-blue leading-[28px] tracking-[1.6px]">
                  In Khmer mythology, Apsaras are ethereal beings, often depicted as heavenly dancers who bring joy and blessings to both gods and humans. Their fluid movements and captivating presence are echoed in the gestures and techniques of Cambodian ballet. These celestial figures embody the ideals of elegance and spiritual harmony, qualities that are central to the Apsara Resort brand.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Right — Angkor relief image */}
          <div className="relative min-h-[400px] md:min-h-0">
            <img
              src={IMAGES.angkorRelief}
              alt="Angkor Wat Apsara stone relief dancers"
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>
        </div>
      </section>

      {/* ── 7. INFLUENCE + SANCTUARY ── */}
      <section className="w-full py-16 md:py-20 px-8 md:px-20 bg-white">
        <div className="max-w-[690px] mx-auto">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="font-body text-[16px] text-brand-blue tracking-[1.6px] font-normal mb-4">
              The Influence of Ballet on Apsara Resort
            </p>
            <p className="font-body text-[16px] text-brand-blue leading-[28px] tracking-[1.6px] mb-14">
              The precision and grace of Cambodian ballet inspire not only the aesthetic elements of Apsara Resort but also its philosophy of hospitality. Just as each gesture in ballet is imbued with meaning, every detail at the resort is crafted with intention and care. The resort&apos;s design, atmosphere, and service reflect this dedication to elegance, creating a space where guests feel both enchanted and at peace.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p className="font-body text-[16px] text-brand-blue tracking-[1.6px] font-normal mb-4">
              A Sanctuary of Soul and Grace
            </p>
            <p className="font-body text-[16px] text-brand-blue leading-[28px] tracking-[1.6px]">
              At Apsara Resort, we celebrate the profound connection between the celestial and the earthly, the spiritual and the physical. By weaving the wisdom of Khmer astrology and the artistry of Cambodian ballet into our brand&apos;s identity, we offer a unique retreat that honors Cambodia&apos;s cultural heritage while providing an unparalleled experience of luxury and well-being. Here, guests can find harmony, inspiration, and a renewed sense of self, guided by the timeless beauty of Khmer traditions.
            </p>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
