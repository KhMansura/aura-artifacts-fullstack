"use client";
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-50 rounded-full blur-[120px] z-0 opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight">
            Join the <span className="text-amber-600">Inner Circle</span>
          </h2>
          <p className="text-slate-600 mb-12 text-xl font-medium leading-relaxed">
            Get exclusive early access to newly discovered artifacts and private auction invites.
          </p>

          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-0 max-w-xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[30px] overflow-hidden border border-slate-100"
          >
            <input 
              type="email" 
              placeholder="Enter your professional email" 
              className="p-6 w-full md:flex-1 outline-none text-slate-900 font-bold bg-white placeholder:text-slate-400" 
            />
            <button className="bg-slate-900 text-white px-10 py-6 font-black text-sm uppercase tracking-[0.2em] hover:bg-amber-600 transition-all duration-300 w-full md:w-auto active:scale-95">
              Subscribe
            </button>
          </motion.div>
          
          <p className="mt-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
            🛡️ Your privacy is our priority. No spam, ever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}