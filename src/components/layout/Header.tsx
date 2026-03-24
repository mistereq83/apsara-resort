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
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Side Panel */}
        <div
          className={`absolute top-0 left-0 h-full w-[75%] max-w-[480px] bg-white flex flex-col transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <div className="px-8 pt-8 pb-4">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-brand-blue hover:opacity-50 transition-opacity"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="1" x2="19" y2="19" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="19" y1="1" x2="1" y2="19" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-5 px-10 py-6 font-body text-[18px] text-brand-blue">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-opacity" style={{ color: '#7B2D8E' }}>Home: Apsara Resort</Link>
            <Link href="/accommodations" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-opacity">Accommodations</Link>
            <Link href="https://www.booking.com/hotel/kh/apsara-resort-koh-rong.pl.html" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-opacity" target="_blank">Book Now</Link>
            <Link href="/services-and-facilities" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-opacity">Services & Facilities</Link>
            <Link href="/spa" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-opacity">SPA</Link>
            <Link href="/our-story" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-opacity">Our Story</Link>
            <Link href="/khmer-culture" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-opacity">The Khmer Culture</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-opacity">Contact</Link>
            <Link href="/how-to-get-here" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-opacity">How to get here</Link>
            <Link href="/rules" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-opacity">Rules & Regulations</Link>
          </nav>

          {/* Social icons */}
          <div className="mt-auto flex items-center gap-4 px-10 pb-10">
            <a href="https://wa.me/85567883503" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="#1A1A1A"/>
                <path d="M25.4 10.5A8.9 8.9 0 0018 7.5a8.93 8.93 0 00-7.74 13.4L9 25.5l4.72-1.24A8.92 8.92 0 0018 25.4a8.93 8.93 0 007.4-14.9zM18 23.8a7.4 7.4 0 01-3.77-1.03l-.27-.16-2.8.73.75-2.73-.18-.28A7.4 7.4 0 1118 23.8zm4.06-5.54c-.22-.11-1.31-.65-1.52-.72-.2-.08-.35-.11-.5.11-.14.22-.57.72-.7.87-.13.15-.26.17-.48.06a6.07 6.07 0 01-1.79-1.1 6.7 6.7 0 01-1.24-1.54c-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.2-.68-1.65-.18-.43-.37-.37-.5-.38h-.43a.83.83 0 00-.6.28c-.2.22-.78.76-.78 1.86s.8 2.16.91 2.31c.11.15 1.58 2.4 3.82 3.37.53.23.95.37 1.27.47.54.17 1.02.15 1.41.09.43-.06 1.31-.54 1.5-1.05.19-.52.19-.96.13-1.05-.06-.1-.2-.15-.43-.26z" fill="white"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/ApsaraResortKohRong/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="#1A1A1A"/>
                <path d="M20.17 18.75h2.46l.37-2.87h-2.83v-1.55c0-1.2.38-2.25 1.5-2.25h1.38V9.6a14.4 14.4 0 00-2.1-.16c-2.44 0-3.88 1.3-3.88 4.27v2.17h-2.53v2.87h2.53V27h3.1v-8.25z" fill="white"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/apsara_kohrong" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="#1A1A1A"/>
                <path d="M18 11.38c2.14 0 2.39.01 3.23.05.78.04 1.2.16 1.48.27.37.14.64.32.92.6.28.28.46.55.6.92.11.28.23.7.27 1.48.04.84.05 1.1.05 3.23s-.01 2.39-.05 3.23c-.04.78-.16 1.2-.27 1.48a2.48 2.48 0 01-.6.92c-.28.28-.55.46-.92.6-.28.11-.7.23-1.48.27-.84.04-1.1.05-3.23.05s-2.39-.01-3.23-.05c-.78-.04-1.2-.16-1.48-.27a2.48 2.48 0 01-.92-.6 2.48 2.48 0 01-.6-.92c-.11-.28-.23-.7-.27-1.48-.04-.84-.05-1.1-.05-3.23s.01-2.39.05-3.23c.04-.78.16-1.2.27-1.48.14-.37.32-.64.6-.92.28-.28.55-.46.92-.6.28-.11.7-.23 1.48-.27.84-.04 1.1-.05 3.23-.05zM18 9.77c-2.17 0-2.45.01-3.3.05-.85.04-1.44.17-1.95.36a3.93 3.93 0 00-1.42.93 3.93 3.93 0 00-.93 1.42c-.19.51-.32 1.1-.36 1.95-.04.85-.05 1.13-.05 3.3s.01 2.45.05 3.3c.04.85.17 1.44.36 1.95.2.51.46.95.93 1.42.47.47.91.73 1.42.93.51.19 1.1.32 1.95.36.85.04 1.13.05 3.3.05s2.45-.01 3.3-.05c.85-.04 1.44-.17 1.95-.36a3.93 3.93 0 001.42-.93c.47-.47.73-.91.93-1.42.19-.51.32-1.1.36-1.95.04-.85.05-1.13.05-3.3s-.01-2.45-.05-3.3c-.04-.85-.17-1.44-.36-1.95a3.93 3.93 0 00-.93-1.42 3.93 3.93 0 00-1.42-.93c-.51-.19-1.1-.32-1.95-.36-.85-.04-1.13-.05-3.3-.05z" fill="white"/>
                <path d="M18 13.77a4.16 4.16 0 100 8.32 4.16 4.16 0 000-8.32zm0 6.86a2.7 2.7 0 110-5.4 2.7 2.7 0 010 5.4z" fill="white"/>
                <circle cx="22.3" cy="13.63" r=".97" fill="white"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
