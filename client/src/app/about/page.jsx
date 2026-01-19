
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            {/* Background Glow */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-amber-600/10 rounded-full blur-[100px] opacity-60"></div>
            
            <div className="relative rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-8 border-gray-900/50 group">
              <img 
                src="https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?q=80&w=1000" 
                alt="Vintage Shop" 
                className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent opacity-60"></div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-2">
              <h4 className="text-amber-500 font-black uppercase tracking-[0.4em] text-xs">
                Est. Since 1995
              </h4>
              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                Curating the World&apos;s <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  Rarest Treasures
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-gray-400 text-lg leading-relaxed font-medium">
                At AURA, we believe every artifact tells a story that deserves to be preserved. Our journey began with a single Roman coin and a passion for history. 
              </p>
              <p className="text-gray-400 text-lg leading-relaxed font-medium border-l-2 border-amber-600/30 pl-6 italic">
                Today, we are the global leader in artifact authentication, ensuring that every piece in our collection is 100% verified by world-class historians.
              </p>
            </div>
            
            {/* Stats Box */}
            <div className="pt-8 flex gap-12 border-t border-gray-800">
              <div className="group">
                <p className="text-4xl font-black text-white group-hover:text-amber-500 transition-colors">25+</p>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1">Years of Legacy</p>
              </div>
              <div className="group">
                <p className="text-4xl font-black text-white group-hover:text-amber-500 transition-colors">10k+</p>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1">Verified Items</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/items">
               <button className="bg-white text-black px-10 py-4 font-black text-xs uppercase tracking-widest rounded-full hover:bg-amber-500 hover:text-white transition-all">
                  Discover More
               </button>
               </Link>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}