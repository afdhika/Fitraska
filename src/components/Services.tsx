import { motion, AnimatePresence } from 'framer-motion';
import { Globe, FileText, Palette } from 'lucide-react';
import { useState } from 'react';

interface Service {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

const services: Service[] = [
  {
    icon: <Globe size={36} strokeWidth={1.25} />,
    number: '01',
    title: 'Landing Page',
    description:
      'Website satu halaman statis yang powerful dengan desain modern, animasi menarik, dan optimasi SEO untuk konversi maksimal.',
    tags: ['SEO Optimized', 'Animasi', 'Satu Halaman'],
  },
  {
    icon: <FileText size={36} strokeWidth={1.25} />,
    number: '02',
    title: 'Company Profile',
    description:
      'Website multi-halaman statis profesional untuk meningkatkan kredibilitas bisnis dengan portfolio dan layanan lengkap.',
    tags: ['Multi Halaman', 'Profesional', 'Portfolio'],
  },
  {
    icon: <Palette size={36} strokeWidth={1.25} />,
    number: '03',
    title: 'Portfolio / Katalog',
    description:
      'Website showcase statis untuk menampilkan produk atau portfolio dengan galeri interaktif dan desain custom.',
    tags: ['Galeri', 'Custom Design', 'Showcase'],
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative bg-[#0A0A0A] py-28 md:py-36 px-4 overflow-hidden"
    >


      {/* Decorative large number in bg */}
      <div
        className="pointer-events-none absolute -bottom-16 -right-8 text-[20rem] font-black leading-none select-none"
        style={{ color: 'rgba(255,255,255,0.025)' }}
        aria-hidden
      >
        S
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-px bg-neutral-600" />
              <span className="text-xs font-mono tracking-[0.3em] text-neutral-500 uppercase">
                What We Offer
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight"
            >
              Layanan<br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}
              >
                Kami
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xs text-base text-neutral-300 leading-relaxed md:text-right"
          >
            Solusi web profesional untuk bisnis yang ingin tampil modern dan terpercaya di era digital.
          </motion.p>
        </div>

        {/* Services — accordion list */}
        <div className="flex flex-col divide-y divide-white/10 border-t border-white/10">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <button
                  className="w-full text-left group"
                  onClick={() => setActiveIndex(isActive ? null : index)}
                >
                  {/* Row */}
                  <div className="flex items-center gap-6 md:gap-10 py-7 md:py-9">

                    {/* Number */}
                    <span
                      className="text-4xl md:text-6xl font-black tabular-nums leading-none transition-colors duration-300 shrink-0"
                      style={{
                        color: isActive ? 'white' : 'rgba(255,255,255,0.35)',
                        WebkitTextStroke: isActive ? '0px' : '1px rgba(255,255,255,0.5)',
                      }}
                    >
                      {service.number}
                    </span>

                    {/* Icon */}
                    <div
                      className="shrink-0 transition-colors duration-300"
                      style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.65)' }}
                    >
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3
                      className="flex-1 text-2xl md:text-4xl font-bold transition-colors duration-300"
                      style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.85)' }}
                    >
                      {service.title}
                    </h3>

                    {/* Tags — hidden on mobile, visible md+ */}
                    <div className="hidden md:flex gap-2 shrink-0">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-full border transition-all duration-300"
                          style={{
                            borderColor: isActive
                              ? 'rgba(255,255,255,0.3)'
                              : 'rgba(255,255,255,0.2)',
                            color: isActive
                              ? 'rgba(255,255,255,0.8)'
                              : 'rgba(255,255,255,0.55)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Plus/minus toggle */}
                    <div
                      className="w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300"
                      style={{
                        borderColor: isActive
                          ? 'rgba(255,255,255,0.6)'
                          : 'rgba(255,255,255,0.3)',
                        backgroundColor: isActive ? 'white' : 'transparent',
                      }}
                    >
                      <motion.svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        animate={{ rotate: isActive ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ color: isActive ? '#0A0A0A' : 'rgba(255,255,255,0.75)' }}
                      >
                        <path
                          d="M7 2V12M2 7H12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </motion.svg>
                    </div>
                  </div>
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-[calc(3rem+2.5rem)] md:pl-[calc(6rem+2.5rem)] pr-4 md:pr-20">
                        <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl mb-6">
                          {service.description}
                        </p>

                        {/* Tags on mobile inside expanded */}
                        <div className="flex md:hidden flex-wrap gap-2 mb-6">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-full border border-white/20 text-white/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors duration-200"
                        >
                          Mulai sekarang
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path
                              d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 flex items-center justify-between border-t border-white/10 pt-8"
        >
          <span className="text-sm font-mono tracking-[0.2em] text-neutral-300 uppercase">
            {services.length} Layanan Tersedia
          </span>
          <span className="text-sm font-mono tracking-[0.2em] text-neutral-300 uppercase">
            Klik untuk detail →
          </span>
        </motion.div>
      </div>
    </section>
  );
}