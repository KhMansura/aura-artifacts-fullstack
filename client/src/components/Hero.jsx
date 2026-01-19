
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[60vh] bg-gray-950 text-white flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=2000')" }}
      ></div>

      {/* Background Animated Overlay */}
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1653186867008-5bdbfc471a5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGFudGlxdWUlMjBzaG9wfGVufDB8fDB8fHww')] z-1"
      ></motion.div>
      
      {/* Floating Light Effect */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-600/10 rounded-full blur-[120px] animate-pulse z-1"></div>

      <div className="relative z-10">
        {/* Title Animation */}
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-black mb-6 tracking-tighter text-white drop-shadow-md"
        >
          Own a Piece of <span className="text-amber-500">History</span>
        </motion.h1>

        {/* Paragraph Animation */}
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl text-white max-w-2xl mb-10 leading-relaxed mx-auto font-medium"
        >
          The world&apos;s most exclusive marketplace for rare artifacts, ancient relics, and timeless masterpieces.
        </motion.p>

        {/* Button Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link 
            href="/items" 
            className="group relative inline-flex items-center justify-center bg-amber-600 text-white px-12 py-4 rounded-full font-black text-lg hover:bg-amber-500 transition-all shadow-xl hover:shadow-amber-600/40 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">View Collection</span>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}