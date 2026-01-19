
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-white py-16 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          
          <div className="mb-8">
            <h2 className="text-3xl font-black tracking-[0.3em] text-white mb-2">
              AURA<span className="text-amber-500">.</span>
            </h2>
            <p className="text-gray-200 font-semibold tracking-wide text-lg">
              Preserving History, One Piece at a Time.
            </p>
          </div>

          
          <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm font-black text-slate-100 uppercase tracking-widest">
            <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link>
            <Link href="/items" className="hover:text-amber-500 transition-colors">Collection</Link>
            <Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link>
          </div>

          
          <div className="flex gap-6 mb-10">
            <a href="https://github.com/your-username" target="_blank" className="text-slate-100 hover:text-amber-500 font-bold transition-all text-sm uppercase tracking-wider">
              GitHub
            </a>
            <a href="https://linkedin.com/in/your-username" target="_blank" className="text-slate-100 hover:text-amber-500 font-bold transition-all text-sm uppercase tracking-wider">
              LinkedIn
            </a>
          </div>

          <div className="w-24 h-[1px] bg-slate-700 mb-8"></div>

          <div className="space-y-2">
            
            <p className="text-sm font-bold text-gray-300">
              &copy; {new Date().getFullYear()} <span className="text-white border-b border-amber-500/30">Aura Artifacts</span>. All rights reserved.
            </p>
            
            {/* Branding text  */}
            <p className="text-xs font-black tracking-[0.2em] text-amber-500 uppercase mt-4">
              Developed by <a href="#" className="hover:text-white transition-colors underline decoration-amber-500/50 underline-offset-4">Khandaker Mansura</a>
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}