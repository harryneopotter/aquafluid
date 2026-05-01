import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ShoppingCart, Shield, Droplets, Sparkles, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    const found = PRODUCTS.find(p => p.id === id);
    if (found) {
      setProduct(found);
      setSelectedSize(found.sizes[0]);
    }
  }, [id]);

  if (!product) return null;

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-bg-primary transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to collection</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image Gallery */}
          <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-text-primary/5 border border-border-primary group">
             <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20`} />
             <img 
               src={product.image} 
               alt={product.name} 
               className="w-full h-full object-cover p-12 transform group-hover:scale-105 transition-transform duration-700" 
             />
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-[0.4em] text-brand-aqua font-bold">{product.category}</span>
              <div className="h-px flex-1 bg-border-primary" />
            </div>

            <h1 className="text-5xl md:text-6xl font-serif font-bold text-text-primary mb-6 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-8">
               <span className="text-3xl font-display font-bold text-brand-pink">₹{product.price * 80}</span>
               <div className="px-3 py-1 rounded-full bg-brand-aqua/10 border border-brand-aqua/20 text-brand-aqua text-[10px] font-bold uppercase tracking-widest">
                  In Stock
               </div>
            </div>

            <p className="text-text-secondary text-lg leading-relaxed mb-10">
              {product.description}
            </p>

            <div className="space-y-8 mb-12">
               <div>
                 <h4 className="text-[10px] uppercase tracking-[0.2em] text-text-secondary/60 font-bold mb-4">Available Sizes</h4>
                 <div className="flex flex-wrap gap-3">
                   {product.sizes.map(size => (
                     <button 
                       key={size}
                       onClick={() => setSelectedSize(size)}
                       className={`px-6 py-3 rounded-2xl border transition-all ${selectedSize === size ? 'bg-brand-aqua border-brand-aqua text-white' : 'border-border-primary text-text-secondary hover:border-text-primary/30'}`}
                     >
                       {size}
                     </button>
                   ))}
                 </div>
               </div>

               <div>
                 <h4 className="text-[10px] uppercase tracking-[0.2em] text-text-secondary/60 font-bold mb-4">Key Benefits</h4>
                 <div className="grid grid-cols-2 gap-4">
                   {product.attributes.map((attr, i) => (
                     <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-text-primary/5 border border-border-primary">
                        <CheckCircle2 className="w-4 h-4 text-brand-aqua" />
                        <span className="text-xs text-text-primary/80">{attr}</span>
                     </div>
                   ))}
                 </div>
               </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 btn-primary py-4 text-lg">
                Add to Cart
              </button>
              <button className="p-4 rounded-full border border-border-primary hover:bg-text-primary/5 transition-colors">
                 <Shield className="w-6 h-6 text-brand-coral" />
              </button>
            </div>

            <div className="mt-12 pt-12 border-t border-border-primary grid grid-cols-3 gap-8">
               <div className="text-center">
                  <Droplets className="w-5 h-5 mx-auto text-brand-aqua mb-2" />
                  <p className="text-[9px] uppercase tracking-widest text-text-secondary/60">pH Neutral</p>
               </div>
               <div className="text-center">
                  <Sparkles className="w-5 h-5 mx-auto text-brand-pink mb-2" />
                  <p className="text-[9px] uppercase tracking-widest text-text-secondary/60">Lab Tested</p>
               </div>
               <div className="text-center">
                  <Shield className="w-5 h-5 mx-auto text-brand-coral mb-2" />
                  <p className="text-[9px] uppercase tracking-widest text-text-secondary/60">Anti-Pathogen</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
