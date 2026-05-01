import React from 'react';
import { motion } from 'motion/react';
import { Building2, PackageCheck, Truck, Users, ArrowRight } from 'lucide-react';

export default function B2BPortal() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#006994 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs uppercase tracking-[0.4em] text-brand-pink font-bold">Solutions for Business</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-text-primary mb-8 leading-[1.1]">
            Elevate Your <br />
            <span className="text-brand-aqua italic">Enterprise Standards</span>
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-lg leading-relaxed">
            From luxury hotels to industrial facilities, our B2B Dorron Pro Line delivers massive cost-efficiency with professional-grade certification.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-aqua/10 rounded-xl flex items-center justify-center shrink-0">
                <PackageCheck className="w-5 h-5 text-brand-aqua" />
              </div>
              <div>
                <h4 className="font-bold text-text-primary text-sm mb-1">Bulk Pricing</h4>
                <p className="text-text-secondary/60 text-xs">Save up to 45% on bulk orders</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-pink/10 rounded-xl flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 text-brand-pink" />
              </div>
              <div>
                <h4 className="font-bold text-text-primary text-sm mb-1">Priority Delivery</h4>
                <p className="text-text-secondary/60 text-xs">Dedicated fleet for B2B portal</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-coral/10 rounded-xl flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-brand-coral" />
              </div>
              <div>
                <h4 className="font-bold text-text-primary text-sm mb-1">Account Support</h4>
                <p className="text-text-secondary/60 text-xs">24/7 dedicated account reps</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-text-primary/5 rounded-xl flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 text-text-primary/50" />
              </div>
              <div>
                <h4 className="font-bold text-text-primary text-sm mb-1">Tax Invoices</h4>
                <p className="text-text-secondary/60 text-xs">Easy GST reporting integration</p>
              </div>
            </div>
          </div>

          <button className="flex items-center gap-3 text-text-primary font-bold group">
            <span className="w-12 h-12 rounded-full border border-border-primary flex items-center justify-center group-hover:border-brand-aqua group-hover:bg-brand-aqua transition-all">
              <ArrowRight className="w-5 h-5" />
            </span>
            <span className="text-lg">Become a Regional Distributor</span>
          </button>
        </div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="glass-card p-10 border-border-primary"
        >
          <h3 className="text-2xl font-bold text-text-primary mb-8">Quick Quote Request</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-text-secondary/40">Company Name</label>
                <input type="text" className="bg-text-primary/5 border border-border-primary rounded-xl px-4 py-3 outline-none focus:border-brand-aqua transition-colors text-text-primary" placeholder="Enterprise Ltd." />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-text-secondary/40">Business Type</label>
                <select className="bg-text-primary/5 border border-border-primary rounded-xl px-4 py-3 outline-none focus:border-brand-aqua transition-colors appearance-none text-text-primary">
                  <option className="bg-bg-primary">Retailer</option>
                  <option className="bg-bg-primary">Hospitality</option>
                  <option className="bg-bg-primary">Healthcare</option>
                  <option className="bg-bg-primary">Industrial</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-text-secondary/40">Expected Monthly Volume</label>
              <select className="bg-text-primary/5 border border-border-primary rounded-xl px-4 py-3 outline-none focus:border-brand-aqua transition-colors appearance-none text-text-primary">
                <option className="bg-bg-primary">100 - 500 Liters</option>
                <option className="bg-bg-primary">500 - 2k Liters</option>
                <option className="bg-bg-primary">2k+ Liters (Regional Distribution)</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-text-secondary/40">Message</label>
              <textarea rows={4} className="bg-text-primary/5 border border-border-primary rounded-xl px-4 py-3 outline-none focus:border-brand-aqua transition-colors text-text-primary" placeholder="Tell us more about your needs..." />
            </div>
            <button type="submit" className="w-full bg-brand-aqua hover:bg-brand-aqua/80 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-aqua/20">
              Submit Inquiry
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
