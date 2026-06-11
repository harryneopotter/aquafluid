import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Droplets, Sparkles, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Liquid blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            translate: ['0%','10%','0%']
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[80vw] h-[80vw] bg-brand-aqua/20 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            translate: ['0%','-5%','0%']
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[70vw] h-[70vw] bg-brand-pink/10 blur-[100px] rounded-full" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-brand-aqua" />
            <span className="text-xs uppercase tracking-[0.4em] text-brand-aqua font-bold">The Future of Clean</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-text-primary leading-[0.9] mb-8">
            Fluid <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-aqua via-brand-pink to-brand-coral">Sophistication</span>
          </h1>
          
          <p className="text-text-secondary text-lg md:text-xl max-w-md mb-10 leading-relaxed font-light">
            AquaGlow's Dorron products bridge the gap between B2B industrial performance and B2C luxury design.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="btn-primary flex items-center gap-2 group">
              Shop Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-outline">
              Become a Distributor
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <Shield className="w-5 h-5 text-brand-aqua" />
              <span className="text-[10px] uppercase tracking-widest text-text-secondary/60">99.9% Germ Kill</span>
            </div>
            <div className="flex flex-col gap-2">
              <Droplets className="w-5 h-5 text-brand-pink" />
              <span className="text-[10px] uppercase tracking-widest text-text-secondary/60">Eco-Friendly</span>
            </div>
            <div className="flex flex-col gap-2">
              <Sparkles className="w-5 h-5 text-brand-coral" />
              <span className="text-[10px] uppercase tracking-widest text-text-secondary/60">Streak Free</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center"
        >
          {/* Main Hero Image */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden group">
            <img 
              src="/images/dorron_floor_photoshoot-1.png" 
              alt="AquaGlow Products" 
              className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent" />
            
            {/* Floating Info card */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-2xl border border-border-primary"
            >
              <div className="flex items-center justify-between mb-2">
                 <span className="text-brand-aqua font-bold text-sm">BEST SELLER</span>
                 <div className="flex gap-1">
                   {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 bg-brand-pink" />)}
                 </div>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-1">Dorron Advanced Liquid</h3>
              <p className="text-text-secondary text-xs">Starting from ₹249.00</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
