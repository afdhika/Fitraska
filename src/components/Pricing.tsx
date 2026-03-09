import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { useState } from 'react';

type WebsiteType = 'statis' | 'dinamis';

interface PricingTier {
  name: string;
  price: string;
  priceNote?: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

const pricingData: Record<WebsiteType, PricingTier[]> = {
  statis: [
    {
      name: 'Basic',
      price: 'Rp 800rb',
      tagline: 'Cocok untuk landing page simpel',
      features: [
        'Landing Page 1 Halaman',
        'Desain Responsif Modern',
        'Animasi & Interaksi',
        'Optimasi Gambar',
        'Revisi 2x',
        'Support 30 Hari',
      ],
    },
    {
      name: 'Standard',
      price: 'Rp 1.5jt',
      tagline: 'Untuk bisnis yang ingin tampil profesional',
      features: [
        'Website Multi-Halaman (3–5 halaman)',
        'Desain Premium Custom',
        'Animasi Advance',
        'SEO Basic Optimization',
        'Form Kontak & WhatsApp',
        'Google Maps Integration',
        'Revisi 4x',
        'Support 90 Hari',
      ],
      highlighted: true,
      badge: 'Paling Laris',
    },
    {
      name: 'Premium',
      price: 'Rp 2.5jt',
      tagline: 'Solusi lengkap untuk company profile',
      features: [
        'Company Profile (5–8 halaman)',
        'Desain Custom Premium',
        'Micro-interactions & Animasi',
        'Gallery / Portfolio System',
        'Blog / News Section',
        'SEO Advanced Optimization',
        'Social Media Integration',
        'Revisi Unlimited',
        'Support 1 Tahun',
        'Free Minor Update 3x',
      ],
    },
  ],
  dinamis: [
    {
      name: 'Starter',
      price: 'Rp 2jt',
      tagline: 'Website dengan CMS sederhana',
      features: [
        'CMS (kelola konten sendiri)',
        'Landing Page Dinamis',
        'Desain Responsif Modern',
        'Animasi & Interaksi',
        'Form Kontak & WhatsApp',
        'Revisi 2x',
        'Support 60 Hari',
      ],
    },
    {
      name: 'Business',
      price: 'Rp 4jt',
      tagline: 'Untuk bisnis dengan konten yang sering update',
      features: [
        'CMS Full-Featured',
        'Website Multi-Halaman (5–8 halaman)',
        'Blog / Artikel System',
        'Galeri & Portfolio Dinamis',
        'SEO Advanced Optimization',
        'WhatsApp & Social Integration',
        'Dashboard Admin',
        'Revisi 5x',
        'Support 6 Bulan',
      ],
      highlighted: true,
      badge: 'Paling Laris',
    },
    {
      name: 'Enterprise',
      price: 'Rp 8jt',
      priceNote: 'mulai dari',
      tagline: 'Solusi web kompleks & skalabel',
      features: [
        'Custom Web Application',
        'Multi-user & Role Management',
        'Katalog Produk & Filter',
        'Integrasi API Pihak Ketiga',
        'SEO Enterprise',
        'Analytics & Reporting',
        'Keamanan & Backup Otomatis',
        'Revisi Unlimited',
        'Support 1 Tahun',
        'Free Update 6 Bulan',
      ],
    },
  ],
};

function PricingCard({ tier, index }: { tier: PricingTier; index: number }) {
  const { name, price, priceNote, tagline, features, highlighted, badge } = tier;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`relative flex flex-col rounded-3xl overflow-hidden border transition-shadow duration-300 ${
        highlighted
          ? 'bg-white border-white shadow-[0_0_60px_rgba(255,255,255,0.12)]'
          : 'bg-[#141414] border-white/10 hover:border-white/25'
      }`}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-5 right-5">
          <span className="flex items-center gap-1.5 bg-[#0A0A0A] text-white text-[11px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-full">
            <Zap size={10} className="fill-white" />
            {badge}
          </span>
        </div>
      )}

      {/* Top */}
      <div className={`p-8 pb-6 ${highlighted ? '' : ''}`}>
        {/* Index + Name */}
        <div className="flex items-center gap-3 mb-5">
          <span className={`text-xs font-mono tracking-[0.3em] ${highlighted ? 'text-neutral-400' : 'text-neutral-600'}`}>
            0{index + 1}
          </span>
          <div className={`flex-1 h-px ${highlighted ? 'bg-neutral-200' : 'bg-white/10'}`} />
        </div>

        <h3 className={`text-2xl font-black mb-1 ${highlighted ? 'text-[#0A0A0A]' : 'text-white'}`}>
          {name}
        </h3>
        <p className={`text-sm mb-6 ${highlighted ? 'text-neutral-500' : 'text-neutral-500'}`}>
          {tagline}
        </p>

        {/* Price */}
        <div className="mb-6">
          {priceNote && (
            <span className={`block text-xs font-mono tracking-widest uppercase mb-1 ${highlighted ? 'text-neutral-400' : 'text-neutral-600'}`}>
              {priceNote}
            </span>
          )}
          <span className={`text-5xl font-black leading-none ${highlighted ? 'text-[#0A0A0A]' : 'text-white'}`}>
            {price}
          </span>
        </div>

        {/* CTA */}
        <button
          className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 ${
            highlighted
              ? 'bg-[#0A0A0A] text-white hover:bg-neutral-800'
              : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
          }`}
        >
          Pilih Paket
        </button>
      </div>

      {/* Divider */}
      <div className={`mx-8 h-px ${highlighted ? 'bg-neutral-100' : 'bg-white/8'}`} />

      {/* Features */}
      <div className="p-8 pt-6 flex-1">
        <p className={`text-xs font-mono tracking-[0.2em] uppercase mb-4 ${highlighted ? 'text-neutral-400' : 'text-neutral-600'}`}>
          Yang kamu dapat
        </p>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                highlighted ? 'bg-[#0A0A0A]' : 'bg-white/15'
              }`}>
                <Check size={10} className={highlighted ? 'text-white' : 'text-white'} strokeWidth={3} />
              </div>
              <span className={`text-sm leading-relaxed ${highlighted ? 'text-neutral-700' : 'text-neutral-400'}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const [activeType, setActiveType] = useState<WebsiteType>('statis');

  return (
    <section id="pricing" className="relative bg-[#0A0A0A] py-28 md:py-36 px-4 overflow-hidden">

      {/* Decorative bg letter */}
      <div
        className="pointer-events-none absolute -bottom-20 -left-8 text-[20rem] font-black leading-none select-none"
        style={{ color: 'rgba(255,255,255,0.025)' }}
        aria-hidden
      >
        P
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
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
                Transparent Pricing
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight"
            >
              Harga<br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}
              >
                Kami
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start md:items-end gap-4"
          >
            <p className="text-base text-neutral-300 leading-relaxed md:text-right max-w-xs">
              Pilih jenis website dan paket yang paling sesuai dengan kebutuhan bisnis kamu.
            </p>

            {/* Toggle */}
            <div className="flex items-center gap-1 bg-white/8 border border-white/10 rounded-full p-1">
              {(['statis', 'dinamis'] as WebsiteType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`relative px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all duration-300 ${
                    activeType === type ? 'text-[#0A0A0A]' : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  {activeType === type && (
                    <motion.div
                      layoutId="toggle-pill"
                      className="absolute inset-0 bg-white rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">
                    Website {type.charAt(0).toUpperCase() + type.slice(1)}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {pricingData[activeType].map((tier, index) => (
              <PricingCard key={tier.name} tier={tier} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 flex items-center justify-between border-t border-white/10 pt-8"
        >
          <span className="text-sm font-mono tracking-[0.2em] text-neutral-500 uppercase">
            Semua harga sudah termasuk desain & development
          </span>
          <span className="text-sm font-mono tracking-[0.2em] text-neutral-500 uppercase">
            Konsultasi gratis →
          </span>
        </motion.div>
      </div>
    </section>
  );
}