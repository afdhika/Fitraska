import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Testimonial {
  name: string;
  business: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Budi Santoso',
    business: 'Warung Kopi Sederhana',
    content: 'Website dari Fitraska membuat bisnis kopi saya terlihat lebih profesional. Pesanan online meningkat 3x lipat!',
    rating: 5,
  },
  {
    name: 'Siti Nurhaliza',
    business: 'Toko Kue Mama',
    content: 'Pelayanan cepat, hasil memuaskan. Sekarang pelanggan bisa order kue langsung dari website. Terima kasih Fitraska!',
    rating: 5,
  },
  {
    name: 'Ahmad Hidayat',
    business: 'Bengkel Motor Jaya',
    content: 'Harga terjangkau dengan kualitas premium. Website kami jadi lebih mudah ditemukan di Google. Recommended!',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const variants = {
    enter: (dir: number) => ({ x: dir * 50, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir * -50, opacity: 0 }),
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative bg-[#f5f5f3] py-28 md:py-36 px-4 overflow-hidden"
    >
      {/* Decorative bg letter */}
      <div
        className="pointer-events-none absolute -top-10 -right-8 text-[20rem] font-black leading-none select-none"
        style={{ color: 'rgba(0,0,0,0.04)' }}
        aria-hidden
      >
        T
      </div>

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0A0A0A 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-px bg-neutral-400" />
              <span className="text-xs font-mono tracking-[0.3em] text-neutral-500 uppercase">
                Client Stories
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-8xl font-black text-[#0A0A0A] leading-[0.9] tracking-tight"
            >
              Kata<br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: '2px #0A0A0A' }}
              >
                Mereka
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xs text-base text-neutral-600 leading-relaxed md:text-right"
          >
            Bisnis lokal yang sudah mempercayakan kehadiran digital mereka kepada kami.
          </motion.p>
        </div>

        {/* Testimonial area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-20 items-start"
        >
          {/* Quote block */}
          <div className="relative min-h-[220px]">

            {/* Giant quote mark */}
            <div
              className="absolute -top-2 -left-2 text-[6rem] font-black leading-none text-[#0A0A0A]/8 select-none pointer-events-none"
              aria-hidden
            >
              "
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative pt-14"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 12 12" fill="#0A0A0A">
                      <path d="M6 1l1.39 2.82L10.5 4.27l-2.25 2.19.53 3.1L6 8.02 3.22 9.56l.53-3.1L1.5 4.27l3.11-.45L6 1z" />
                    </svg>
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="text-2xl md:text-3xl font-bold text-[#0A0A0A] leading-snug mb-8 tracking-tight">
                  "{current.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center text-base font-black shrink-0">
                    {current.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-base font-bold text-[#0A0A0A]">{current.name}</p>
                    <p className="text-sm text-neutral-500">{current.business}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right side — index + all names */}
          <div className="hidden md:flex flex-col gap-4 min-w-[200px]">
            {testimonials.map((t, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`text-left px-5 py-4 rounded-2xl border transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#0A0A0A] border-[#0A0A0A]'
                    : 'bg-transparent border-neutral-200 hover:border-neutral-400'
                }`}
              >
                <p className={`text-sm font-bold leading-tight ${index === currentIndex ? 'text-white' : 'text-neutral-700'}`}>
                  {t.name}
                </p>
                <p className={`text-xs mt-0.5 ${index === currentIndex ? 'text-neutral-400' : 'text-neutral-400'}`}>
                  {t.business}
                </p>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Controls */}
        <div className="flex items-center gap-4 mt-14 pt-8 border-t border-neutral-300">
          <motion.button
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.92 }}
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-300 text-neutral-500 hover:border-[#0A0A0A] hover:text-[#0A0A0A] transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
          </motion.button>

          {/* Progress dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#0A0A0A] w-8'
                    : 'bg-neutral-300 w-4 hover:bg-neutral-500'
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.92 }}
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-300 text-neutral-500 hover:border-[#0A0A0A] hover:text-[#0A0A0A] transition-all duration-200"
          >
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          <span className="ml-auto text-sm font-mono tracking-[0.2em] text-neutral-400 uppercase">
            {String(currentIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </span>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 flex items-center justify-between border-t border-neutral-300 pt-8"
        >
          <span className="text-sm font-mono tracking-[0.2em] text-neutral-500 uppercase">
            {testimonials.length} Klien Puas
          </span>
          <span className="text-sm font-mono tracking-[0.2em] text-neutral-500 uppercase">
            Rating 5.0 ★
          </span>
        </motion.div>

      </div>
    </section>
  );
}