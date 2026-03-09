import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ProjectProps {
  title: string;
  category: string;
  imageUrl: string;
  index: number;
}

function ProjectCard({ title, category, imageUrl, index }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const label = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      className="group relative flex flex-col justify-between bg-white border border-neutral-200 rounded-3xl overflow-hidden cursor-default"
    >
      {/* Hover fill */}
      <div className="absolute inset-0 bg-[#0A0A0A] opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl pointer-events-none" style={{ zIndex: 0 }} />

      {/* Browser mockup */}
      <div style={{ transform: 'translateZ(30px)' }} className="relative z-10 bg-neutral-100 group-hover:bg-neutral-900 p-4 md:p-5 transition-colors duration-300">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 group-hover:bg-red-400 transition-colors duration-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 group-hover:bg-yellow-400 transition-colors duration-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 group-hover:bg-green-400 transition-colors duration-300" />
          </div>
          <div className="flex-1 bg-white group-hover:bg-white/10 border border-neutral-200 group-hover:border-white/10 rounded-md px-3 py-1 text-[11px] text-neutral-600 group-hover:text-white/50 font-mono tracking-wide truncate transition-all duration-300">
            {title.toLowerCase().replace(/\s+/g, '')}.com
          </div>
        </div>

        {/* Screenshot */}
        <div className="aspect-video rounded-xl overflow-hidden relative bg-neutral-200">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/30 transition-all duration-500" />
        </div>
      </div>

      {/* Card footer */}
      <div
        style={{ transform: 'translateZ(30px)' }}
        className="relative z-10 flex items-end justify-between px-6 py-5 border-t border-neutral-100 group-hover:border-white/10 transition-colors duration-300"
      >
        <div>
          <span className="block text-[10px] font-mono tracking-[0.25em] text-neutral-600 group-hover:text-neutral-400 mb-1 transition-colors duration-300">
            {label}
          </span>
          <h3 className="text-lg font-bold text-[#0A0A0A] group-hover:text-white leading-tight transition-colors duration-300">{title}</h3>
          <p className="text-sm text-neutral-700 group-hover:text-neutral-300 mt-0.5 transition-colors duration-300">{category}</p>
        </div>

        {/* Arrow */}
        <div className="w-9 h-9 rounded-full border border-neutral-200 group-hover:border-white group-hover:bg-white flex items-center justify-center transition-all duration-300 shrink-0 ml-4">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
            className="text-neutral-400 group-hover:text-[#0A0A0A] transition-colors duration-300">
            <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11"
              stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

const projects = [
  {
    title: 'Warung Makan Sederhana',
    category: 'Landing Page',
    imageUrl:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Toko Baju Lokal',
    category: 'Portfolio/Katalog',
    imageUrl:
      'https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Jasa Konstruksi',
    category: 'Company Profile',
    imageUrl:
      'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-[#f5f5f3] py-28 md:py-36 px-4 overflow-hidden">

      {/* Large decorative letter in background */}
      <div
        className="pointer-events-none absolute -top-10 -left-8 text-[22rem] font-black text-black/[0.04] leading-none select-none"
        aria-hidden
      >
        K
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header — editorial split layout */}
        <div className="mb-20">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-neutral-500" />
            <span className="text-xs font-mono tracking-[0.3em] text-neutral-600 uppercase">
              Selected Works
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-8xl font-black text-[#0A0A0A] leading-[0.9] tracking-tight"
            >
              Karya<br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: '2px #0A0A0A' }}
              >
                Kami
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-sm"
            >
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Beberapa proyek yang telah kami kerjakan untuk klien dari berbagai industri.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0A] border-b-2 border-[#0A0A0A] pb-0.5 hover:gap-4 transition-all duration-300"
              >
                Mulai proyek bersama kami
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11"
                    stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Cards grid — dark cards on light bg for contrast */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProjectCard {...project} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 flex items-center justify-between border-t border-neutral-300 pt-8"
        >
          <span className="text-sm font-mono tracking-[0.2em] text-neutral-600 uppercase">
            {projects.length} Proyek Selesai
          </span>
          <span className="text-sm font-mono tracking-[0.2em] text-neutral-600 uppercase">
            2024 — 2025
          </span>
        </motion.div>
      </div>
    </section>
  );
}