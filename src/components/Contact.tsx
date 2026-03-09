import { motion } from 'framer-motion';
import { MessageCircle, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0A0A0A] py-24 md:py-32 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight mb-12"
        >
          Siap Tampil Online?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-[#F0F0F0] mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Mari wujudkan website impian untuk bisnis Anda. Konsultasi gratis, tanpa ribet!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.a
            href="https://wa.me/6285781571635"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-white text-[#0A0A0A] px-10 py-5 rounded-full text-xl font-bold flex items-center gap-3 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-green-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <MessageCircle className="w-6 h-6 relative z-10 group-hover:text-white transition-colors" />
            <span className="relative z-10 group-hover:text-white transition-colors">Chat WhatsApp</span>
          </motion.a>

          <motion.a
            href="https://instagram.com/fitraska.id"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative border-2 border-white text-white px-10 py-5 rounded-full text-xl font-bold flex items-center gap-3 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <Instagram className="w-6 h-6 relative z-10 group-hover:text-[#0A0A0A] transition-colors" />
            <span className="relative z-10 group-hover:text-[#0A0A0A] transition-colors">@fitraska.id</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-gray-800 pt-8"
        >
          <p className="text-[#F0F0F0] text-sm">
            © 2026 Fitraska. Membawa bisnis lokal Indonesia ke dunia digital.
          </p>
        </motion.div>
      </div>

      <motion.a
        href="https://wa.me/6285781571635"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl z-50 hover:bg-green-600 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </motion.a>
    </section>
  );
}
