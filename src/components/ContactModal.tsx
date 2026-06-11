import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';
import { PRODUCTS } from '../constants';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export default function ContactModal({ isOpen, onClose, defaultProduct }: ContactModalProps) {
  const [product, setProduct] = useState(defaultProduct || PRODUCTS[0]?.name || '');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && defaultProduct) {
      setProduct(defaultProduct);
    }
  }, [isOpen, defaultProduct]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.activeElement as HTMLElement | null;
    const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
      'button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusable?.[0]?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { handleClose(); return; }
      if (e.key !== 'Tab' || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
      prev?.focus();
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product, name, email, phone, quantity, message }),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setError('');
    setName('');
    setEmail('');
    setPhone('');
    setQuantity('');
    setMessage('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label="Contact for Pricing"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg glass-panel rounded-3xl p-8 border-border-primary max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-text-primary/5 transition-colors text-text-secondary"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-brand-aqua/20 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-brand-aqua" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-3">Thank You!</h3>
                <p className="text-text-secondary">
                  Your inquiry has been received. Our team will get back to you within 24 hours.
                </p>
                <button onClick={handleClose} className="btn-primary mt-8">
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">Contact for Pricing</h3>
                <p className="text-text-secondary text-sm mb-8">
                  Fill in your details and we'll share the best pricing for your needs.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-text-secondary/40 font-bold">Product</label>
                    <select
                      value={product}
                      onChange={(e) => setProduct(e.target.value)}
                      className="bg-text-primary/5 border border-border-primary rounded-xl px-4 py-3 outline-none focus:border-brand-aqua transition-colors text-text-primary appearance-none"
                    >
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.name} className="bg-bg-primary">{p.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-widest text-text-secondary/40 font-bold">Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-text-primary/5 border border-border-primary rounded-xl px-4 py-3 outline-none focus:border-brand-aqua transition-colors text-text-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-widest text-text-secondary/40 font-bold">Email</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-text-primary/5 border border-border-primary rounded-xl px-4 py-3 outline-none focus:border-brand-aqua transition-colors text-text-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-widest text-text-secondary/40 font-bold">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="bg-text-primary/5 border border-border-primary rounded-xl px-4 py-3 outline-none focus:border-brand-aqua transition-colors text-text-primary"
                        placeholder="+91-XXXXXXXXXX"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-widest text-text-secondary/40 font-bold">Quantity Interested In</label>
                      <input
                        type="text"
                        required
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="bg-text-primary/5 border border-border-primary rounded-xl px-4 py-3 outline-none focus:border-brand-aqua transition-colors text-text-primary"
                        placeholder="e.g. 10 cartons"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-text-secondary/40 font-bold">Message</label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-text-primary/5 border border-border-primary rounded-xl px-4 py-3 outline-none focus:border-brand-aqua transition-colors text-text-primary"
                      placeholder="Any specific requirements..."
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm text-center">{error}</p>
                  )}
                  <button type="submit" disabled={sending} className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-3 disabled:opacity-50">
                    {sending ? 'Sending...' : 'Submit Inquiry'}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
