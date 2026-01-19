// "use client";
// import { motion } from "framer-motion";

// export default function Newsletter() {
//   return (
//     <section className="py-24 bg-white relative overflow-hidden">
//       {/* Decorative Background Element */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-50 rounded-full blur-[120px] z-0 opacity-50"></div>

//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="max-w-3xl mx-auto text-center"
//         >
//           <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight">
//             Join the <span className="text-amber-600">Inner Circle</span>
//           </h2>
//           <p className="text-slate-600 mb-12 text-xl font-medium leading-relaxed">
//             Get exclusive early access to newly discovered artifacts and private auction invites.
//           </p>

//           <motion.div 
//             initial={{ scale: 0.95, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="flex flex-col md:flex-row items-center justify-center gap-0 max-w-xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[30px] overflow-hidden border border-slate-100"
//           >
//             <input 
//               type="email" 
//               placeholder="Enter your professional email" 
//               className="p-6 w-full md:flex-1 outline-none text-slate-900 font-bold bg-white placeholder:text-slate-400" 
//             />
//             <button className="bg-slate-900 text-white px-10 py-6 font-black text-sm uppercase tracking-[0.2em] hover:bg-amber-600 transition-all duration-300 w-full md:w-auto active:scale-95">
//               Subscribe
//             </button>
//           </motion.div>
          
//           <p className="mt-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
//             🛡️ Your privacy is our priority. No spam, ever.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Contrast Glow - পেছনের আভাটি একটু শার্প করা হয়েছে */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[100px] z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* High Contrast Heading */}
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight drop-shadow-sm">
            Join the <span className="text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">Inner Circle</span>
          </h2>
          
          {/* Improved Readability for Text */}
          <p className="text-gray-200 mb-12 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            Get exclusive early access to newly discovered <span className="text-white border-b border-amber-500/50">artifacts</span> and private auction invites.
          </p>

          {/* High Contrast Input Area */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-0 max-w-xl mx-auto ring-1 ring-gray-800 shadow-[0_0_40px_rgba(0,0,0,0.5)] rounded-[30px] overflow-hidden"
          >
            <input 
              type="email" 
              placeholder="Enter your professional email" 
              className="p-6 w-full md:flex-1 outline-none text-white font-bold bg-gray-900/80 placeholder:text-gray-500 border-none focus:bg-black transition-all" 
            />
            <button className="bg-amber-500 text-black px-10 py-6 font-black text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto">
              Subscribe Now
            </button>
          </motion.div>
          
          {/* Sub-text with higher contrast */}
          <p className="mt-8 text-amber-500/80 text-xs font-bold uppercase tracking-[0.3em]">
            🛡️ Your privacy is our priority.
          </p>
        </motion.div>
      </div>
    </section>
  );
}