import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Droplets, Sparkles, Wind, Briefcase, Pill, Hotel, Utensils } from 'lucide-react';

export default function SolutionsPage() {
  useEffect(() => { document.title = 'Solutions — AquaGlow Enterprises'; }, []);
  const industries = [
    { title: 'Hospitality', icon: Hotel, desc: 'Luxury finish for hotel suites and ballrooms.' },
    { title: 'Healthcare', icon: Pill, desc: 'Hospital-grade disinfection for surgical paths.' },
    { title: 'Industrial', icon: Briefcase, desc: 'Heavy-duty grease removal for manufacturing.' },
    { title: 'F&B Services', icon: Utensils, desc: 'Food-safe sanitization for professional kitchens.' },
  ];

  return (
    <div className="min-h-screen pt-32 bg-bg-primary transition-colors duration-500">
      {/* Hero Parallax Image */}
      <div className="relative h-[40vh] md:h-[60vh] overflow-hidden mb-24 transition-colors duration-500">
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src="/images/white-floor-cleaner-1l.jpg" 
            alt="Advanced Cleaning" 
            className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary" />
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
           <div className="max-w-4xl">
               <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="block text-5xl md:text-7xl font-serif font-bold text-text-primary mb-6"
              >
                The Science of <span className="text-brand-aqua italic">Lustrous</span> Surfaces
              </motion.span>
           </div>
        </div>
      </div>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32 relative">
         <div className="flex flex-col md:flex-row gap-12 items-end mb-24">
            <div className="flex-1">
              <span className="text-xs uppercase tracking-[0.4em] text-brand-aqua font-bold block mb-6">Expert Formulations</span>
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-text-primary leading-[0.9]">
                Precision <br />
                <span className="text-brand-pink italic">Solutions</span>
              </h1>
            </div>
            <p className="flex-1 text-text-secondary text-xl leading-relaxed font-light">
              We specialize in deep cleaning technology that respects your surfaces. Our solutions are engineered for specific industrial sectors, ensuring maximum ROI and hygiene compliance.
            </p>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((inf, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="glass-card flex flex-col gap-6"
              >
                 <div className="w-14 h-14 rounded-2xl bg-text-primary/5 border border-border-primary flex items-center justify-center">
                    <inf.icon className="w-7 h-7 text-brand-aqua" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">{inf.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{inf.desc}</p>
                 </div>
              </motion.div>
            ))}
         </div>
      </section>

      <section className="py-32 bg-text-primary/2 relative overflow-hidden transition-colors duration-500">
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
               <div>
                  <h2 className="text-4xl md:text-6xl font-serif font-bold text-text-primary mb-8">The Bio-Crest <br />Innovation</h2>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Our proprietary Bio-Crest technology uses plant-based surfactants to achieve a "Molecular Wipe" effect—breaking down dirt without corrosive chemicals.
                  </p>
               </div>
               
               <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-4">
                     <ShieldAlert className="w-8 h-8 text-brand-coral" />
                     <h4 className="font-bold text-text-primary">Pathogen Shield</h4>
                     <p className="text-text-secondary/60 text-xs">Forms a microscopic barrier that prevents bacterial regrowth for 48 hours.</p>
                  </div>
                  <div className="space-y-4">
                     <Wind className="w-8 h-8 text-brand-pink" />
                     <h4 className="font-bold text-text-primary">Odor Neutralizer</h4>
                     <p className="text-text-secondary/60 text-xs">Molecule-level encapsulation of odors instead of just masking them.</p>
                  </div>
               </div>
            </div>

            <div className="relative">
               <div className="absolute -inset-4 bg-brand-aqua/20 blur-3xl opacity-50 animate-pulse" />
               <div className="relative glass-panel rounded-[3rem] p-12 aspect-[4/5] flex flex-col justify-center items-center gap-8">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-text-primary/20 to-transparent" />
                  <div className="flex gap-12">
                     <div className="text-center">
                        <div className="text-5xl font-display font-bold text-brand-aqua mb-2">99%</div>
                        <div className="text-[10px] uppercase tracking-widest text-text-secondary">Bio-Degradable</div>
                     </div>
                     <div className="text-center">
                        <div className="text-5xl font-display font-bold text-brand-pink mb-2">0%</div>
                        <div className="text-[10px] uppercase tracking-widest text-text-secondary">Toxic Residue</div>
                     </div>
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-text-primary/20 to-transparent" />
                  <p className="text-center text-text-secondary text-xs italic">"Verified by industrial safety audits 2025"</p>
               </div>
            </div>
         </div>
      </section>

       <section className="py-32 px-6 border-t border-border-primary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.4em] text-brand-aqua font-bold block mb-6">Sustainability Roadmap</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-text-primary mb-6">Built for a <span className="text-brand-pink italic">Cleaner</span> Tomorrow</h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">Our five-year commitment to responsible manufacturing and eco-friendly formulations.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="glass-card text-center">
                <div className="text-4xl font-display font-bold text-brand-aqua mb-2">80%</div>
                <p className="text-text-secondary/60 text-xs uppercase tracking-widest mb-4">Biodegradable by 2029</p>
                <p className="text-text-secondary text-sm">Transitioning all Dorron formulations to plant-based, biodegradable ingredients.</p>
              </div>
              <div className="glass-card text-center">
                <div className="text-4xl font-display font-bold text-brand-pink mb-2">100%</div>
                <p className="text-text-secondary/60 text-xs uppercase tracking-widest mb-4">Recyclable Packaging by 2028</p>
                <p className="text-text-secondary text-sm">Eliminating non-recyclable materials and launching refill station pilots across retail.</p>
              </div>
              <div className="glass-card text-center">
                <div className="text-4xl font-display font-bold text-brand-coral mb-2">40%</div>
                <p className="text-text-secondary/60 text-xs uppercase tracking-widest mb-4">Women in Workforce by 2028</p>
                <p className="text-text-secondary text-sm">Building an inclusive manufacturing and field sales team across all operations.</p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">Introducing the Dorron EcoShield Series</h3>
              <p className="text-text-secondary max-w-xl mx-auto mb-10">
                Our upcoming plant-based, biodegradable multi-surface cleaner line — formulated for the eco-conscious consumer without compromising on cleaning power.
              </p>
              <div className="flex justify-center gap-4">
                <button className="btn-primary">Coming Soon</button>
                <button className="btn-outline">Connect with R&D</button>
              </div>
            </div>
          </div>
       </section>
    </div>
  );
}
