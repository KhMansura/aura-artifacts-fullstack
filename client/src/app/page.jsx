import React from "react";
import Hero from "@/components/Hero";
import ContactUs from "@/components/ontactUs";
import Link from "next/link";
import AuthenticationSteps from "@/components/AuthenticationSteps";
import Newsletter from "@/components/Newsletter";
import Statistics from "@/components/Statistics";

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* 1. HERO SECTION */}
      <Hero></Hero>

{/* 2. FEATURED PREVIEW - Animated Border on Hover */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-4xl font-black mb-16 text-slate-900 tracking-tight">Curated Spotlight</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {["Ancient Relics", "Medieval Armor", "Vintage Tech"].map((cat) => (
        <div 
          key={cat} 
          className="relative p-[3px] rounded-3xl overflow-hidden shadow-xl bg-slate-200 h-[320px] w-full flex items-center justify-center"
>
         
          <div 
    className="snake-border-active absolute"
    style={{ 
      background: 'conic-gradient(from 0deg, transparent 0deg, transparent 300deg, #f59e0b 330deg, transparent 360deg)',
      width: '250%', 
      height: '250%',
      top: '-75%',
      left: '-75%',
      zIndex: 0
    }}
  ></div>

          {/* Inner Card Content */}
          <div className="relative h-[calc(100%-4px)] w-[calc(100%-4px)] bg-slate-50 p-10 rounded-[22px] z-10 flex flex-col justify-center">
            <div className="h-14 w-14 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md transition-transform hover:scale-110">
              <span className="text-white text-2xl font-bold">✦</span>
            </div>
            
            <h3 className="text-2xl font-extrabold mb-4 text-slate-900">{cat}</h3>
            <p className="text-slate-800 font-bold leading-relaxed text-sm">
              Explore our rarest pieces in this category with verified history.
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* 3. ABOUT / HERITAGE - High Contrast & Clean Layout */}
<section className="py-24 bg-white flex flex-col md:flex-row items-center px-6 md:px-20 gap-16 border-y border-gray-100">
  <div className="flex-1 space-y-6">
    <h2 className="text-4xl md:text-5xl font-black text-[#111827] leading-tight">
      Our Legacy <br /> 
      <span className="text-amber-600">Since 1995</span>
    </h2>
    
  
    <p className="text-[#1e293b] leading-relaxed text-xl font-medium">
      Aura started with a single Roman coin. Today, we are the global leader in artifact authentication and trade, serving over 10,000 elite collectors worldwide.
    </p>
    
    <div className="flex gap-4 items-center">
        <div className="h-1 w-12 bg-amber-500 rounded-full"></div>
        <span className="text-sm font-bold uppercase tracking-widest text-gray-500">Certified Excellence</span>
    </div>
  </div>

  {/* Image Section */}
  <div className="flex-1 h-[450px] w-full rounded-[40px] overflow-hidden shadow-2xl relative border-8 border-gray-50 group">
    <img 
      src="https://i.ibb.co.com/TqRGvw19/download.jpg" 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      alt="Legacy Artifact" 
    />

    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
  </div>
</section>

      {/* 4. STATISTICS - Bright text on Dark */}
      {/* <section className="py-20 bg-gray-950 text-white border-y border-gray-800">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div><h4 className="text-5xl font-black text-amber-500 mb-2">12k+</h4><p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Items Sold</p></div>
          <div><h4 className="text-5xl font-black text-amber-500 mb-2">98%</h4><p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Authenticity</p></div>
          <div><h4 className="text-5xl font-black text-amber-500 mb-2">50+</h4><p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Global Experts</p></div>
          <div><h4 className="text-5xl font-black text-amber-500 mb-2">24/7</h4><p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Support</p></div>
        </div>
      </section> */}
      <Statistics></Statistics>

      {/* 5. AUTHENTICATION STEPS - Clear icons and text */}
     <AuthenticationSteps />

      {/* 6. TESTIMONIALS - Warm and readable */}
      <section className="py-24 bg-amber-50 px-6 border-y border-amber-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-6xl text-amber-400 font-serif leading-none">“</span>
          <p className="text-3xl font-serif italic text-gray-800 -mt-6">
            Aura Artifacts is not just a store; it's a bridge to the past. Their attention to detail and provenance is unmatched.
          </p>
          <h5 className="mt-8 font-black text-xl text-amber-800 uppercase tracking-widest">— Sir Julian Thorne, Historian</h5>
        </div>
      </section>

      {/* 7. NEWSLETTER - Professional input fields */}
      <Newsletter></Newsletter>
      
    </main>
  );
}
