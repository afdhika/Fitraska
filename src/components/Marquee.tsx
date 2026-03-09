import { motion } from 'framer-motion';

export default function Marquee() {
  const text = 'Website · UMKM · Profesional · Terjangkau · Fast Response · Fitraska ·';
  const repeatedText = Array(20).fill(text).join(' ');

  return (
    <div className="bg-white py-6 overflow-hidden">
      <motion.div
        className="whitespace-nowrap"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
      >
        <span className="text-4xl md:text-6xl font-bold text-[#0A0A0A] tracking-wider">
          {repeatedText}
        </span>
      </motion.div>
    </div>
  );
}
