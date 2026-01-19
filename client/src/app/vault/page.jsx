"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const vaultItems = [
  { 
    id: 101, 
    name: "Alexander's Lost Ring", 
    price: "Priceless", 
    origin: "Macedonia", 
    img: "https://i.ibb.co.com/qFmqJsbm/download.jpg",
    category: "Relic"
  },
  { 
    id: 102, 
    name: "Cursed Mayan Idol", 
    price: "$2.5M", 
    origin: "Chichen Itza", 
    img: "https://i.ibb.co.com/PvMSPH43/download.jpg",
    category: "Statue"
  },
  { 
    id: 103, 
    name: "Templar Knight Sword", 
    price: "$1.8M", 
    origin: "Jerusalem", 
    img: "https://i.ibb.co.com/whpJQj0d/download.jpg",
    category: "Weaponry"
  },
  { 
    id: 104, 
    name: "Qin Dynasty Jade Cup", 
    price: "$950k", 
    origin: "Xi'an, China", 
    img: "https://i.ibb.co.com/Mkvq4c70/download.jpg",
    category: "Ceramic"
  }
];

export default function VaultPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  if (status === "loading") return (
    <div className="h-screen bg-black flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-amber-500 font-black tracking-[0.5em] animate-pulse">DECRYPTING VAULT</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020617] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 italic leading-none">
              The Collector's <span className="text-amber-500">Vault</span>
            </h1>
            <p className="text-gray-400 uppercase tracking-[0.3em] text-xs font-bold border-l-4 border-amber-600 pl-4">
              Strictly for authenticated members • Secure encrypted access
            </p>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-2xl">
            <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest">Signed in as</p>
            <p className="text-white font-bold">{session?.user?.name}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {vaultItems.map(item => (
            <div key={item.id} className="group relative bg-gray-900/40 border border-gray-800 p-6 rounded-[40px] shadow-2xl hover:border-amber-500/30 transition-all duration-500 overflow-hidden">
               {/* Image Container */}
               <div className="relative h-72 w-full overflow-hidden rounded-[30px] mb-8 bg-gray-800">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-amber-500 uppercase tracking-widest">
                    {item.category}
                  </div>
               </div>

               {/* Content */}
               <div className="px-2">
                 <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                   {item.name}
                 </h2>
                 <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-800">
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Estimate Value</p>
                      <span className="text-amber-500 text-2xl font-black">{item.price}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Origin</p>
                      <span className="text-gray-300 font-bold">{item.origin}</span>
                    </div>
                 </div>
               </div>

               {/* Hidden Hover Effect Detail */}
               <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-20 text-gray-600 text-[10px] font-black uppercase tracking-[0.6em]">
          End of Private Collection • AURA Archives
        </p>
      </div>
    </div>
  );
}