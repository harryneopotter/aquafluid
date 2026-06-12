import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Hero from './Hero';
import ProductGrid from './ProductGrid';
import B2BPortal from './B2BPortal';

export default function HomePage() {
  useEffect(() => { document.title = 'AquaGlow Enterprises — Dorron Cleaning Solutions'; }, []);
  const { scrollYProgress } = useScroll();
  const yShift1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const yShift2 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const rotateS = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <main className="relative bg-bg-primary overflow-hidden transition-colors duration-500">
      {/* Global Scroll Parallax Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          style={{ y: yShift1, rotate: rotateS }}
          className="absolute -top-20 -left-20 w-[60vw] h-[60vw] bg-brand-aqua/5 blur-[150px] rounded-full" 
        />
        <motion.div 
          style={{ y: yShift2, rotate: -rotateS }}
          className="absolute top-1/2 -right-40 w-[50vw] h-[50vw] bg-brand-pink/5 blur-[120px] rounded-full" 
        />
      </div>

      <div className="relative z-10">
        <Hero />
        
        {/* Decorative Brand Text Marquee */}
        <div className="py-12 border-y border-border-primary bg-text-primary/2 backdrop-blur-sm overflow-hidden whitespace-nowrap">
          <div className="flex animate-scroll hover:[animation-play-state:paused]">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center space-x-12 px-6">
                <span className="text-4xl md:text-5xl font-display font-light text-text-primary/30 uppercase tracking-[0.5em]">AquaGlow</span>
                <span className="w-2 h-10 bg-brand-aqua/40" />
                <span className="text-4xl md:text-5xl font-display font-light text-text-primary/30 uppercase tracking-[0.5em]">Pristine Care</span>
                <span className="w-2 h-10 bg-brand-pink/40" />
                <span className="text-4xl md:text-5xl font-display font-light text-text-primary/30 uppercase tracking-[0.5em]">Dorron Pro</span>
                <span className="w-2 h-10 bg-brand-coral/40" />
              </div>
            ))}
          </div>
        </div>

        <ProductGrid />
        <B2BPortal />
        
        {/* Company Vision Section */}
        <section className="py-32 px-6 bg-gradient-to-b from-transparent to-bg-primary/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-xs uppercase tracking-[0.4em] text-brand-aqua font-bold block mb-6">Our Vision</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-text-primary leading-tight mb-8">
                To make Dorron India's most trusted<br />
                <span className="text-brand-pink italic">household cleaning brand</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
                Affordable, effective, and environmentally responsible — AquaGlow Enterprises
                has been delivering the Dorron promise of cleanliness for over three years.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card text-center">
                <div className="text-5xl font-display font-bold text-brand-aqua mb-4">3+</div>
                <p className="text-text-secondary text-sm">Years of manufacturing excellence and growing brand trust</p>
              </div>
              <div className="glass-card text-center">
                <div className="text-5xl font-display font-bold text-brand-pink mb-4">18+</div>
                <p className="text-text-secondary text-sm">Active SKUs spanning home and commercial cleaning needs</p>
              </div>
              <div className="glass-card text-center">
                <div className="text-5xl font-display font-bold text-brand-coral mb-4">30%</div>
                <p className="text-text-secondary text-sm">Year-on-year revenue growth in an expanding market</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 px-6 border-t border-border-primary">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-brand-pink font-bold block mb-6">Our Mission</span>
            <p className="text-2xl md:text-4xl font-serif italic text-text-primary/80 leading-tight mb-12">
              "To deliver cleaning solutions that enhance the hygiene, health,<br />
              and comfort of everyday living — for every home and every budget."
            </p>
            <div className="flex flex-col items-center gap-4">
               <div className="w-16 h-16 rounded-full bg-brand-aqua/20 flex items-center justify-center">
                  <span className="text-brand-aqua font-bold text-xl">A</span>
               </div>
               <div className="text-center">
                  <p className="font-bold text-text-primary tracking-widest text-sm uppercase">AquaGlow Enterprises</p>
                  <p className="text-brand-pink text-xs font-medium">Powering the Dorron promise, every day</p>
               </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-24 px-6 border-t border-border-primary bg-text-primary/2">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs uppercase tracking-[0.4em] text-brand-aqua font-bold block mb-6">Trusted Partnerships</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-6">
                Built for Retail, Distribution, and <span className="text-brand-pink italic">Institutional Scale</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
                Dorron is growing through trade relationships, channel partnerships, and on-ground distribution
                support designed for long-term market presence.
              </p>
            </div>

            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-stretch">
              <div className="relative rounded-[2rem] overflow-hidden border border-border-primary bg-text-primary/5 min-h-[320px]">
                <img
                  src="/images/ourclients-1.jpg"
                  alt="AquaGlow client and retail network overview"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/85 via-bg-primary/15 to-transparent" />
                <div className="absolute left-6 right-6 bottom-6 glass-panel rounded-2xl p-5">
                  <h3 className="text-xl font-bold text-text-primary mb-2">Trade-Focused Growth</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Structured distributor support, product consistency, and pricing discipline built for repeat channel growth.
                  </p>
                </div>
              </div>

              <div className="relative rounded-[2rem] overflow-hidden border border-border-primary bg-text-primary/5 min-h-[320px]">
                <img
                  src="/images/ourclients-2.jpg"
                  alt="AquaGlow institutional and client relationships"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/85 via-bg-primary/15 to-transparent" />
                <div className="absolute left-6 right-6 bottom-6 glass-panel rounded-2xl p-5">
                  <h3 className="text-xl font-bold text-text-primary mb-2">Institutional Readiness</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Prepared for hospitality, healthcare, offices, and commercial cleaning programs with scalable packaging and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
