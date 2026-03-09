import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.95] as const,
      },
    }),
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 1,
      },
    },
  };

  const scrollIndicatorVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  const title = 'FITRASKA';

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [null, Math.random() * 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="overflow-hidden">
          <h1 className="text-[15vw] md:text-[12vw] font-bold text-white tracking-tight leading-none">
            {title.split('').map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>

        <motion.p
          variants={taglineVariants}
          initial="hidden"
          animate="visible"
          className="text-xl md:text-3xl text-[#F0F0F0] mt-6 tracking-widest font-light"
        >
          Your Local Business, Online.
        </motion.p>
      </div>

      <motion.div
        variants={scrollIndicatorVariants}
        animate="animate"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-white opacity-50" />
      </motion.div>
    </section>
  );
}
