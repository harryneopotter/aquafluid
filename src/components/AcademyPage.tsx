import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, PlayCircle, BookOpen, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AcademyPage() {
  useEffect(() => { document.title = 'Academy — AquaGlow University'; }, []);
  const courses = [
    { title: 'Industrial Floor Care', duration: '4 Hours', level: 'Beginner', modules: 12 },
    { title: 'Chemical Dilution Systems', duration: '2 Hours', level: 'Intermediate', modules: 8 },
    { title: 'Sanitization Standards 2026', duration: '6 Hours', level: 'Advanced', modules: 20 },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-bg-primary transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1">
             <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-brand-aqua" />
              <span className="text-xs uppercase tracking-[0.4em] text-brand-aqua font-bold">AquaGlow University</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-text-primary mb-8">
              Master the Art of <br />
              <span className="text-brand-pink italic">Pristine</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed mb-10">
              Expert-led training modules designed for professional cleaning staff and distributors. Get certified in modern hygiene standards.
            </p>
            <button className="btn-primary">Browse All Courses</button>
          </div>

          <div className="flex-1 relative">
             <div className="absolute inset-0 bg-brand-aqua/20 blur-3xl rounded-full" />
             <div className="relative glass-panel rounded-[3rem] p-4 aspect-video overflow-hidden group">
                <img 
                  src="/images/dorron_det_photoshoot-2.png"
                  loading="lazy" 
                  className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000" 
                  alt="Training"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <button className="w-20 h-20 rounded-full bg-text-primary/10 backdrop-blur-md border border-border-primary flex items-center justify-center hover:bg-brand-aqua transition-all group">
                      <PlayCircle className="w-10 h-10 text-text-primary group-hover:scale-110 transition-transform" />
                   </button>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center bg-bg-primary/60 backdrop-blur-xl p-4 rounded-2xl border border-border-primary">
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-[10px] uppercase tracking-widest text-text-primary font-bold">Watch Intro</span>
                   </div>
                   <span className="text-[10px] text-text-secondary/60">02:45 / 15:00</span>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="bg-text-primary/2 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-serif font-bold text-text-primary mb-4">Available Certifications</h2>
             <p className="text-text-secondary/60">Elevate your professional profile with AquaGlow Academy</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {courses.map((course, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="glass-card flex flex-col gap-8"
               >
                  <div className="flex justify-between items-start">
                     <div className="w-12 h-12 rounded-xl bg-brand-aqua/10 flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-brand-aqua" />
                     </div>
                     <span className="text-[9px] px-2 py-1 rounded bg-text-primary/5 border border-border-primary text-text-secondary uppercase tracking-widest">
                        {course.level}
                     </span>
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-text-primary mb-4">{course.title}</h3>
                     <div className="flex gap-6 mb-8">
                        <div className="flex items-center gap-2">
                           <PlayCircle className="w-4 h-4 text-text-secondary/40" />
                           <span className="text-xs text-text-secondary/60">{course.modules} Modules</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <GraduationCap className="w-4 h-4 text-text-secondary/40" />
                           <span className="text-xs text-text-secondary/60">{course.duration}</span>
                        </div>
                     </div>
                     <button className="flex items-center gap-2 text-brand-aqua font-bold text-sm group hover:gap-3 transition-all">
                        Enroll Now <ArrowRight className="w-4 h-4" />
                     </button>
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
      </div>

      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
         <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
               <div className="aspect-square bg-brand-aqua/10 rounded-3xl border border-brand-aqua/20 p-8 flex flex-col justify-end">
                  <Award className="w-8 h-8 text-brand-aqua mb-4" />
                  <h4 className="font-bold text-text-primary">ISO Certified</h4>
               </div>
               <div className="aspect-[3/4] rounded-3xl overflow-hidden grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                  <img src="/images/dorron-toilet-500ml.jpg" alt="Training 2" loading="lazy" className="w-full h-full object-cover" />
               </div>
            </div>
            <div className="space-y-4 pt-12">
               <div className="aspect-[3/4] rounded-3xl overflow-hidden grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                  <img src="/images/dorron-glass-500ml.jpg" alt="Training 3" loading="lazy" className="w-full h-full object-cover" />
               </div>
               <div className="aspect-square bg-brand-pink/10 rounded-3xl border border-brand-pink/20 p-8 flex flex-col justify-end">
                  <CheckCircle2 className="w-8 h-8 text-brand-pink mb-4" />
                  <h4 className="font-bold text-text-primary">Govt. Verified</h4>
               </div>
            </div>
         </div>

         <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-text-primary">Why Learn with <br /><span className="text-brand-aqua italic">AquaGlow?</span></h2>
            <p className="text-text-secondary text-lg leading-relaxed">
               The cleaning industry is evolving. Traditional methods are being replaced by high-performance chemical engineering and smart maintenance systems. Our academy ensures your team is ahead of the curve.
            </p>
            <div className="space-y-4">
               {['Lifetime access to course updates', 'Direct Q&A with our head chemists', 'Physical certification shipped globally', 'Access to exclusive Pro-Line products'].map(text => (
                 <div key={text} className="flex items-center gap-4 p-4 rounded-2xl bg-text-primary/5 border border-border-primary">
                    <CheckCircle2 className="w-5 h-5 text-brand-aqua" />
                    <span className="text-sm text-text-primary/80">{text}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
