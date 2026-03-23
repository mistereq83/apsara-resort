"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <footer className="bg-brand-green text-white py-16 px-8 md:px-16">
      <div className="max-w-[1200px] mx-auto">

        {/* Top: GET IN TOUCH heading */}
        <h2 className="font-heading text-4xl md:text-5xl tracking-widest uppercase text-white mb-12">
          GET IN TOUCH
        </h2>

        {/* Row 1: Address | Logo | Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
          {/* Address */}
          <div className="font-body text-[14px] text-white/80 leading-[26px]">
            <p>Coconut Beach</p>
            <p>Koh Rong, Cambodia</p>
          </div>

          {/* Logo center */}
          <div className="flex justify-center">
            <Link href="/">
              <img
                src="https://static.wixstatic.com/media/26781c_737fdf14ee8344929de1782f95809188~mv2.png/v1/fill/w_280,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_737fdf14ee8344929de1782f95809188~mv2.png"
                alt="Apsara Resort"
                className="h-[120px] w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
          </div>

          {/* Contact details */}
          <div className="font-body text-[14px] text-white/80 leading-[26px] md:text-right">
            <a href="mailto:reception@apsara-resort.com" className="block hover:text-white transition-colors">
              reception@apsara-resort.com
            </a>
            <a href="tel:+85587964888" className="block hover:text-white transition-colors">
              +855 87 964 888
            </a>
          </div>
        </div>

        {/* Row 2: Social | How to get here | Phone icon */}
        <div className="grid grid-cols-3 gap-4 items-center pb-8 border-b border-white/20 mb-10">
          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+85567883503"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <img
                src="https://static.wixstatic.com/media/11062b_dc9641e157b2422b9f6a74d9b2b07f84~mv2.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_dc9641e157b2422b9f6a74d9b2b07f84~mv2.png"
                alt="WhatsApp"
                className="w-5 h-5 object-contain invert"
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61572507247639"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <img
                src="https://static.wixstatic.com/media/11062b_f4e3e7f537ff4762a1914aa14e3e36b9~mv2.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f4e3e7f537ff4762a1914aa14e3e36b9~mv2.png"
                alt="Facebook"
                className="w-5 h-5 object-contain invert"
              />
            </a>
            <a
              href="https://www.instagram.com/apsara_kohrong"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <img
                src="https://static.wixstatic.com/media/11062b_603340b7bcb14e7785c7b65b233cd9f9~mv2.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_603340b7bcb14e7785c7b65b233cd9f9~mv2.png"
                alt="Instagram"
                className="w-5 h-5 object-contain invert"
              />
            </a>
          </div>

          {/* How to get here */}
          <div className="flex justify-center">
            <a
              href="https://www.apsara-resort.com/how-to-get-here"
              target="_blank"
              className="border border-white/60 text-white text-[11px] tracking-widest uppercase font-body px-6 py-2 hover:bg-white/10 transition-colors"
            >
              How to get here
            </a>
          </div>

          {/* Phone icon */}
          <div className="flex justify-end">
            <a
              href="tel:+85587964888"
              className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Call us"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.43A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Newsletter subscribe form */}
        <div className="bg-white/5 border border-white/15 rounded-sm p-8 md:p-10">
          <h3 className="font-body text-[18px] text-white mb-6 leading-[1.4]">
            Join Our Journey, Subscribe Now for Exclusive Updates!
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="font-body text-[12px] text-white/70 tracking-wide">
                First name <span className="text-white/50">*</span>
              </label>
              <input
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder="Enter your first name"
                className="bg-white text-brand-blue text-[14px] font-body px-4 py-3 outline-none placeholder:text-brand-blue/40 w-full"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-body text-[12px] text-white/70 tracking-wide">
                Email <span className="text-white/50">*</span>
              </label>
              <div className="flex gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="e.g., email@example.com"
                  className="bg-white text-brand-blue text-[14px] font-body px-4 py-3 outline-none placeholder:text-brand-blue/40 flex-1"
                />
                <button
                  type="button"
                  className="bg-white border-l border-brand-muted text-brand-blue text-[12px] tracking-widest uppercase font-body px-6 hover:bg-brand-blue hover:text-white transition-all duration-300"
                >
                  Join
                </button>
              </div>
            </div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={e => setAgreed(e.target.checked)}
                className="mt-1 w-4 h-4 accent-white flex-shrink-0"
              />
              <span className="font-body text-[13px] text-white/70 leading-[20px]">
                I want to subscribe to your mailing list.
              </span>
            </label>
          </div>
        </div>

      </div>
    </footer>
  );
}
