import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Counter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);

  return (
    <div className="text-center">
      <div className="text-6xl md:text-8xl font-bold text-white mb-2">
        <span ref={ref}>0</span>
        {label === 'Klien' && '+'}
        {label === 'Satisfaction' && '%'}
      </div>
      <div className="text-xl md:text-2xl text-[#F0F0F0] tracking-widest">{label}</div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="bg-[#0A0A0A] py-24 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-16 md:mb-24"
        >
          Kami percaya setiap bisnis lokal berhak tampil profesional di dunia digital.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <Counter value={50} label="Klien" />
          <Counter value={100} label="Satisfaction" />
          <Counter value={7} label="Hari" />
        </div>
      </div>
    </section>
  );
}
