import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Hero from './Hero';
import ProductGrid from './ProductGrid';
import B2BPortal from './B2BPortal';

export default function HomePage() {
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
        
        {/* Testimonials or Vision Section */}
        <section className="py-32 px-6 bg-gradient-to-b from-transparent to-bg-primary/50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-5xl font-serif italic text-text-primary/80 mb-12 leading-tight">
              "We aren't just selling cleaning solutions; we're redefining the sensory experience of a clean space."
            </h3>
            <div className="flex flex-col items-center gap-4">
               <div className="w-16 h-16 rounded-full bg-brand-pink/20 flex items-center justify-center">
                  <span className="text-brand-pink font-bold text-xl">D</span>
               </div>
               <div className="text-center">
                  <p className="font-bold text-text-primary tracking-widest text-sm uppercase">Founder, AquaGlow</p>
                  <p className="text-brand-aqua text-xs font-medium">10+ Years of Industrial Excellence</p>
               </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
