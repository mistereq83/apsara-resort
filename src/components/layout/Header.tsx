"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-brand-muted/20 transition-all duration-300">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 h-[80px] flex items-center justify-between">

          {/* Left: Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 text-brand-blue text-[13px] tracking-widest uppercase font-body hover:opacity-70 transition-opacity"
            aria-label="Open menu"
          >
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="1" x2="22" y2="1" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="0" y1="7" x2="22" y2="7" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="0" y1="13" x2="22" y2="13" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span>Menu</span>
          </button>

          {/* Center Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <img
              src="https://static.wixstatic.com/media/26781c_d1fdfd96c6c04b46b829dcd44b777110~mv2.png/v1/crop/x_0,y_0,w_6113,h_1552/fill/w_484,h_122,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_d1fdfd96c6c04b46b829dcd44b777110~mv2.png"
              alt="Apsara Resort"
              className="h-[50px] w-auto object-contain"
            />
          </Link>

          {/* Right: Reserve */}
          <Link
            href="https://www.booking.com/hotel/kh/apsara-resort-koh-rong.pl.html"
            className="border border-brand-blue bg-transparent px-8 py-3 text-[11px] tracking-widest uppercase font-body hover:bg-brand-blue hover:text-white transition-all duration-300"
            target="_blank"
          >
            RESERVE
          </Link>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col">
          <div className="flex items-center justify-between px-8 h-[80px] border-b border-brand-muted/20">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <img
                src="https://static.wixstatic.com/media/26781c_d1fdfd96c6c04b46b829dcd44b777110~mv2.png/v1/crop/x_0,y_0,w_6113,h_1552/fill/w_484,h_122,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26781c_d1fdfd96c6c04b46b829dcd44b777110~mv2.png"
                alt="Apsara Resort"
                className="h-[40px] w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-brand-blue text-[22px] hover:opacity-50 transition-opacity"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <nav className="flex flex-col gap-6 px-10 py-12 font-body text-[14px] tracking-widest uppercase text-brand-blue">
            <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-opacity">About Us</Link>
            <Link href="/accommodations" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-opacity">Accommodation</Link>
            <Link href="/restaurant" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-opacity">Restaurant</Link>
            <Link href="/spa" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-opacity">Spa</Link>
            <Link href="/experiences" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-opacity">Experiences</Link>
            <Link href="/services-and-facilities" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-opacity">Services & Facilities</Link>
            <Link href="/how-to-get-here" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-opacity">How to get here</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-opacity">Contact</Link>
          </nav>
          <div className="mt-auto px-10 pb-10">
            <Link
              href="https://www.booking.com/hotel/kh/apsara-resort-koh-rong.pl.html"
              className="block text-center border border-brand-blue px-8 py-4 text-[11px] tracking-widest uppercase hover:bg-brand-blue hover:text-white transition-all duration-300"
              target="_blank"
              onClick={() => setMenuOpen(false)}
            >
              RESERVE
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
