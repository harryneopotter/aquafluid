import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, PackageCheck, Truck, Users, ArrowRight, Send } from 'lucide-react';

export default function B2BPortal() {
  const [company, setCompany] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [volume, setVolume] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!company || !email || !phone) return;
    setSending(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product: `B2B Quote — ${businessType || 'General'}`,
          name: company,
          email,
          phone,
          quantity: volume || 'Not specified',
          message: `Business Type: ${businessType}\n${message}`,
        }),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };
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
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-brand-aqua/20 flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-brand-aqua" />
              </div>
              <h4 className="text-xl font-serif font-bold text-text-primary mb-3">Thank You!</h4>
              <p className="text-text-secondary">
                We'll review your request and get back to you within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setCompany(''); setEmail(''); setPhone(''); setMessage(''); }}
                className="btn-primary mt-8"
              >
                Submit Another
              </button>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-text-secondary/40 font-bold">Company Name</label>
                <input type="text" required value={company} onChange={(e) => setCompany(e.target.value)} className="bg-text-primary/5 border border-border-primary rounded-xl px-4 py-3 outline-none focus:border-brand-aqua transition-colors text-text-primary" placeholder="Enterprise Ltd." />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-text-secondary/40 font-bold">Business Type</label>
                <select value={businessType} onChange={(e) => setBusinessType(e.target.value)} className="bg-text-primary/5 border border-border-primary rounded-xl px-4 py-3 outline-none focus:border-brand-aqua transition-colors appearance-none text-text-primary">
                  <option value="" className="bg-bg-primary">Select...</option>
                  <option value="Retailer" className="bg-bg-primary">Retailer</option>
                  <option value="Hospitality" className="bg-bg-primary">Hospitality</option>
                  <option value="Healthcare" className="bg-bg-primary">Healthcare</option>
                  <option value="Industrial" className="bg-bg-primary">Industrial</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-text-secondary/40 font-bold">Email</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="bg-text-primary/5 border border-border-primary rounded-xl px-4 py-3 outline-none focus:border-brand-aqua transition-colors text-text-primary" placeholder="you@company.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-text-secondary/40 font-bold">Phone</label>
                <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} className="bg-text-primary/5 border border-border-primary rounded-xl px-4 py-3 outline-none focus:border-brand-aqua transition-colors text-text-primary" placeholder="+91-XXXXXXXXXX" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-text-secondary/40 font-bold">Expected Monthly Volume</label>
              <select value={volume} onChange={(e) => setVolume(e.target.value)} className="bg-text-primary/5 border border-border-primary rounded-xl px-4 py-3 outline-none focus:border-brand-aqua transition-colors appearance-none text-text-primary">
                <option value="" className="bg-bg-primary">Select...</option>
                <option value="100 - 500 Liters" className="bg-bg-primary">100 - 500 Liters</option>
                <option value="500 - 2k Liters" className="bg-bg-primary">500 - 2k Liters</option>
                <option value="2k+ Liters (Regional Distribution)" className="bg-bg-primary">2k+ Liters (Regional Distribution)</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-text-secondary/40 font-bold">Message</label>
              <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="bg-text-primary/5 border border-border-primary rounded-xl px-4 py-3 outline-none focus:border-brand-aqua transition-colors text-text-primary" placeholder="Tell us more about your needs..." />
            </div>
            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            <button type="submit" disabled={sending} className="w-full bg-brand-aqua hover:bg-brand-aqua/80 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-aqua/20 disabled:opacity-50">
              {sending ? 'Sending...' : 'Submit Inquiry'}
            </button>
          </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
