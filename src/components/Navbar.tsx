import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Globe, User, Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils';
import { NAVIGATION } from '../constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12",
        isScrolled ? "bg-bg-primary/80 backdrop-blur-lg border-b border-border-primary py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-aqua rounded-full flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-brand-pink/20 animate-pulse" />
             <span className="text-white font-bold text-xl relative z-10">A</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-wider text-text-primary group-hover:text-brand-aqua transition-colors">AQUAGLOW</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-pink">Dorron cleaning</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-aqua transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 hover:bg-text-primary/5 rounded-full transition-colors relative text-text-secondary"
            title="Toggle Theme"
          >
            {isLightMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

          <button className="p-2 hover:bg-text-primary/5 rounded-full transition-colors relative text-text-secondary">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-brand-coral rounded-full" />
          </button>
          
          <button className="hidden sm:flex items-center gap-2 bg-text-primary/5 hover:bg-text-primary/10 px-4 py-2 rounded-full border border-border-primary transition-all text-sm font-medium text-text-secondary">
            <User className="w-4 h-4" />
            <span>Login</span>
          </button>
          
          <button 
            className="md:hidden p-2 text-text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-bg-primary/95 backdrop-blur-2xl border-b border-border-primary p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {NAVIGATION.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path}
                  className="text-lg font-medium text-text-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <hr className="border-border-primary" />
              <div className="flex flex-col gap-4">
                <button className="w-full bg-brand-coral py-3 rounded-xl font-bold uppercase tracking-wider text-white">
                  Member Login
                </button>
                <button className="w-full border border-border-primary py-3 rounded-xl font-bold uppercase tracking-wider text-text-primary">
                  Distributor Portal
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
