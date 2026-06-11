import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Building2, PackageCheck, Truck, Users, ArrowRight, BarChart3, Globe2, FileText } from 'lucide-react';
import B2BPortal from './B2BPortal';

export default function DistributorsPage() {
  useEffect(() => { document.title = 'Partner with Us — AquaGlow Distributors'; }, []);
  return (
    <div className="min-h-screen pt-32 pb-20 bg-bg-primary transition-colors duration-500">
      {/* Hero Section with Image */}
      <div className="max-w-7xl mx-auto px-6 mb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-brand-pink" />
            <span className="text-xs uppercase tracking-[0.4em] text-brand-pink font-bold">Global Networks</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-text-primary mb-8 leading-tight">
            Partner with <br />
            <span className="text-brand-aqua italic">Excellence</span>
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed mb-10">
            Join a network of over 500 regional distributors across Asia. We provide the tools, the tech, and the trust to grow your distribution business.
          </p>
          <div className="flex gap-4">
             <button className="btn-primary">Apply Now</button>
             <button className="btn-outline">Download PDF</button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative aspect-square lg:h-[600px] rounded-[3rem] overflow-hidden"
        >
          <img 
src="/images/dorron_floor_photoshoot-2.png" 
            alt="Industrial Excellence" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-bg-primary/80 via-transparent to-brand-aqua/20" />
          
          <div className="absolute bottom-12 left-12 right-12 glass-panel p-8 rounded-3xl">
             <div className="text-text-primary text-4xl font-display font-bold text-brand-pink mb-2">500+</div>
             <p className="text-[10px] uppercase tracking-[0.3em] text-text-secondary">Registered Distributors</p>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-24">

        <div className="grid md:grid-cols-4 gap-8 mb-24">
           {[
             { title: 'Global Logistics', desc: 'Real-time tracking of bulk fleets', icon: Globe2 },
             { title: 'Tax Compliance', desc: 'Automated GST & VAT invoicing', icon: FileText },
             { title: 'Market Analytics', desc: 'Predictive demand forecasting', icon: BarChart3 },
             { title: 'Training Support', icon: Users, desc: 'On-boarding for sales staff' },
           ].map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="p-8 rounded-3xl bg-text-primary/5 border border-border-primary hover:bg-text-primary/10 transition-colors group"
             >
               <div className="w-12 h-12 rounded-2xl bg-brand-aqua/10 flex items-center justify-center mb-6 border border-brand-aqua/20 group-hover:bg-brand-aqua group-hover:text-white transition-all">
                  <item.icon className="w-6 h-6" />
               </div>
               <h3 className="font-bold text-text-primary text-lg mb-2">{item.title}</h3>
               <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>

      <div className="bg-text-primary/2 py-24">
        <B2BPortal />
      </div>

      {/* Geographic Expansion */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-brand-pink font-bold block mb-6">Growth Map</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-text-primary mb-6">Expanding Across <span className="text-brand-aqua italic">India</span></h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From our base in North & West India, we're building a pan-India distribution network — with sights set on global markets.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="glass-card text-center">
            <div className="text-2xl font-display font-bold text-brand-aqua mb-1">2026</div>
            <p className="text-[10px] uppercase tracking-widest text-text-secondary/60 mb-3">PHASE 1</p>
            <p className="text-text-secondary text-sm">Consolidate and deepen distribution in North & West India</p>
          </div>
          <div className="glass-card text-center">
            <div className="text-2xl font-display font-bold text-brand-pink mb-1">2027</div>
            <p className="text-[10px] uppercase tracking-widest text-text-secondary/60 mb-3">PHASE 2</p>
            <p className="text-text-secondary text-sm">Expand to Punjab, Haryana, UP, Bihar, West Bengal, Odisha</p>
          </div>
          <div className="glass-card text-center">
            <div className="text-2xl font-display font-bold text-brand-coral mb-1">2028</div>
            <p className="text-[10px] uppercase tracking-widest text-text-secondary/60 mb-3">PHASE 3</p>
            <p className="text-text-secondary text-sm">Enter South & Central India: Maharashtra, MP, Telangana, Karnataka</p>
          </div>
          <div className="glass-card text-center">
            <div className="text-2xl font-display font-bold text-text-primary mb-1">2030</div>
            <p className="text-[10px] uppercase tracking-widest text-text-secondary/60 mb-3">PHASE 4</p>
            <p className="text-text-secondary text-sm">Pan-India presence — 200+ distributor network across all 28 states</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div className="relative aspect-video rounded-[3rem] overflow-hidden">
              <img src="/images/dorron_floor_photoshoot-2.png" alt="Industrial Facility" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-aqua/20 mix-blend-multiply" />
           </div>
           <div>
              <h2 className="text-4xl font-serif font-bold text-text-primary mb-6">Dorron Pro Subscription</h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Unlock higher margins and exclusive industrial formulations with our Dorron Pro membership. Designed specifically for regional masters and high-volume commercial partners.
              </p>
              <ul className="space-y-4 mb-10">
                 {['Exclusive 50L & 200L packaging', 'Direct factory pricing', 'Co-branded marketing assets', 'Priority production allocation'].map(line => (
                   <li key={line} className="flex items-center gap-3 text-text-primary/80">
                      <ArrowRight className="w-4 h-4 text-brand-aqua" />
                      <span>{line}</span>
                   </li>
                 ))}
              </ul>
              <button className="btn-primary">View Pro Catalog</button>
           </div>
        </div>
      </section>
    </div>
  );
}
