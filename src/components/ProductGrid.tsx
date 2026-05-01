import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Plus, Info } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

interface ProductCardProps {
  product: Product;
  index: number;
  key?: string | number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        opacity: { duration: 0.5, delay: index * 0.1 },
        y: { duration: 0.5, delay: index * 0.1 }
      }}
      viewport={{ once: true }}
      className="group relative"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative overflow-hidden rounded-[2.5rem] bg-text-primary/5 border border-border-primary aspect-[4/5] cursor-pointer">
        {/* Background gradient on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
 
        {/* Quick actions */}
        <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
           <button className="w-12 h-12 rounded-full bg-text-primary/5 backdrop-blur-xl border border-border-primary flex items-center justify-center hover:bg-brand-aqua transition-colors text-text-primary">
             <Plus className="w-6 h-6" />
           </button>
           <button 
             onClick={(e) => {
               e.stopPropagation();
               setIsExpanded(!isExpanded);
             }}
             className={`w-12 h-12 rounded-full border border-border-primary flex items-center justify-center transition-all duration-300 ${isExpanded ? 'bg-brand-pink text-white border-brand-pink' : 'bg-text-primary/5 backdrop-blur-xl text-text-primary hover:bg-brand-pink hover:text-white hover:border-brand-pink'}`}
           >
             <Info className="w-6 h-6" />
           </button>
        </div>

        {/* Floating details */}
        <div className={`absolute bottom-0 left-0 right-0 p-6 sm:p-8 transition-transform duration-500 ${isExpanded ? 'translate-y-0' : 'translate-y-2 group-hover:translate-y-0'}`}>
          <div className="bg-text-primary/5 backdrop-blur-2xl p-6 rounded-3xl border border-border-primary overflow-hidden relative">
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-aqua font-bold mb-2 block">{product.category}</span>
            <h3 className="text-xl font-bold text-text-primary mb-2 line-clamp-1">{product.name}</h3>
            
            {/* Accordion Attributes */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="flex flex-wrap gap-2 mb-4 overflow-hidden"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {product.attributes.map((attr, i) => (
                    <span key={i} className="text-[9px] px-2 py-0.5 rounded-full bg-text-primary/10 text-text-secondary border border-border-primary">
                      {attr}
                    </span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center justify-between">
               <span className="text-lg font-display font-bold text-brand-pink">₹{product.price * 80}</span>
               <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors">
                  Add to cart <ShoppingCart className="w-3 h-3" />
               </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProductGrid() {
  const { scrollYProgress } = useScroll();
  const yBlob1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const yBlob2 = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section className="py-24 px-6 md:px-12 bg-bg-primary relative">
      {/* Background Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ y: yBlob1 }}
          className="absolute top-[10%] -right-20 w-[400px] h-[400px] bg-brand-aqua/5 blur-[120px] rounded-full" 
        />
        <motion.div 
          style={{ y: yBlob2 }}
          className="absolute bottom-[20%] -left-20 w-[350px] h-[350px] bg-brand-pink/5 blur-[100px] rounded-full" 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-brand-aqua animate-ping" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-aqua">Featured Collection</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-text-primary mb-6">
              The Art of <br />
              <span className="italic font-light">Pristine Care</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-full border border-border-primary text-sm font-medium hover:bg-text-primary/5 transition-colors text-text-secondary">All Products</button>
            <button className="px-6 py-2 rounded-full border border-brand-aqua/30 text-sm font-medium text-brand-aqua hover:bg-brand-aqua/10 transition-colors">By Category</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
