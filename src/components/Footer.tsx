import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border-primary pt-24 pb-12 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="flex flex-col gap-8">
             <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-aqua rounded-full flex items-center justify-center">
                 <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-wider text-text-primary">AQUAGLOW</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-pink">Dorron cleaning</span>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Transforming the cleaning industry with fluid sophistication and high-performance products built on over 10 years of expertise.
            </p>
            <div className="flex gap-4">
               {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full border border-border-primary flex items-center justify-center hover:bg-text-primary/10 hover:border-brand-aqua transition-all text-text-secondary hover:text-brand-aqua">
                   <Icon className="w-4 h-4" />
                 </a>
               ))}
            </div>
          </div>

          <div>
             <h4 className="text-text-primary font-bold mb-8 uppercase tracking-widest text-xs">Collection</h4>
             <ul className="flex flex-col gap-4">
                {['Laundry Care', 'Surface & Floor', 'Dishwashing', 'Professional Line', 'Eco-Shield Series'].map(item => (
                  <li key={item}><a href="#" className="text-text-secondary hover:text-brand-aqua transition-colors text-sm">{item}</a></li>
                ))}
             </ul>
          </div>

          <div>
             <h4 className="text-text-primary font-bold mb-8 uppercase tracking-widest text-xs">Help & Support</h4>
             <ul className="flex flex-col gap-4">
                {['Shipping Policy', 'Tracking Order', 'Bulk Inquiries', 'Privacy Policy', 'Contact Support'].map(item => (
                  <li key={item}><a href="#" className="text-text-secondary hover:text-brand-aqua transition-colors text-sm">{item}</a></li>
                ))}
             </ul>
          </div>

          <div>
             <h4 className="text-text-primary font-bold mb-8 uppercase tracking-widest text-xs">Headquarters</h4>
             <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brand-aqua shrink-0" />
                  <span className="text-text-secondary text-sm">AquaGlow Industrial Hub, Noida, Uttar Pradesh, India</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-brand-pink shrink-0" />
                  <span className="text-text-secondary text-sm">+91-98XXX-XXXXX</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-brand-coral shrink-0" />
                  <span className="text-text-secondary text-sm">hello@aquaglow.com</span>
                </li>
             </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border-primary flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-secondary text-[10px] uppercase tracking-[0.3em]">
            © 2026 AQUAGLOW ENTERPRISES. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8">
             <span className="text-text-secondary text-[10px] uppercase tracking-[0.3em] font-bold">Made with Glow</span>
             <div className="flex gap-4 grayscale opacity-40">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
