"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "./Lightbox";

interface GalleryCarouselProps {
  images: string[];
}

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
    if (el.scrollLeft > 10 && !hasInteracted) setHasInteracted(true);
  }, [hasInteracted]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();

    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => ro.disconnect();
  }, [updateScrollState]);

  const scroll = useCallback((direction: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  }, []);

  return (
    <div className="relative">
      {/* Scroll container */}
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        onTouchStart={() => setHasInteracted(true)}
        className="flex overflow-x-auto gap-[3px] scrollbar-hide"
        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((src, i) => (
          <motion.button
            key={i}
            type="button"
            onClick={() => setLightboxIndex(i)}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 cursor-pointer overflow-hidden"
            style={{ scrollSnapAlign: "start" }}
            aria-label={`View image ${i + 1} of ${images.length} in fullscreen`}
          >
            <img
              src={src}
              alt={`Apsara Resort suite ${i + 1}`}
              className="h-[350px] md:h-[464px] w-auto object-cover pointer-events-none"
              draggable={false}
            />
          </motion.button>
        ))}
      </div>

      {/* Right fade gradient (mobile only, visible when more content to scroll) */}
      <div
        className={`md:hidden absolute right-0 top-0 bottom-0 w-16 pointer-events-none transition-opacity duration-300 ${
          canScrollRight ? "opacity-100" : "opacity-0"
        }`}
        style={{ background: "linear-gradient(to right, transparent, rgba(0,0,0,0.25))" }}
      />

      {/* Left fade gradient (mobile only, visible when scrolled) */}
      <div
        className={`md:hidden absolute left-0 top-0 bottom-0 w-16 pointer-events-none transition-opacity duration-300 ${
          canScrollLeft ? "opacity-100" : "opacity-0"
        }`}
        style={{ background: "linear-gradient(to left, transparent, rgba(0,0,0,0.25))" }}
      />

      {/* Swipe hint (mobile only, disappears after first interaction) */}
      <AnimatePresence>
        {!hasInteracted && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.4 }}
            className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2"
          >
            <motion.svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </motion.svg>
            <span className="text-white/90 text-[11px] tracking-wider uppercase font-body">
              Swipe to explore
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left arrow */}
      <button
        onClick={() => scroll(-1)}
        className={`hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer ${
          canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Previous images"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={() => scroll(1)}
        className={`hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer ${
          canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Next images"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
