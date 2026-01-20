"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuctionRadar() {
  const { status } = useSession();
  const router = useRouter();

  const upcomingAuctions = [
    { id: 1, name: "Egyptian Sarcophagus", time: "Live in 3 Days", price: "$450k", status: "Premium" },
    { id: 2, name: "Samurai Katana (Edo Period)", time: "Live in 5 Days", price: "$120k", status: "Rare" },
    { id: 3, name: "Victorian Diamond Brooch", time: "Live in 12 Hours", price: "$85k", status: "Hot" },
    { id: 4, name: "Ancient Roman Coin Set", time: "Live Tomorrow", price: "$12k", status: "New" },
    { id: 5, name: "Ottoman Royal Seal", time: "Live in 1 Week", price: "$200k", status: "Elite" }
  ];

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="h-screen bg-[#020617] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] py-20 px-6">
      <div className="max-w-4xl mx-auto bg-gray-900/40 backdrop-blur-xl p-8 md:p-12 rounded-[50px] border border-gray-800 shadow-2xl">
        <div className="text-center mb-12">
          <h2 className="text-amber-500 font-black tracking-[0.4em] uppercase mb-4 text-xs">Priority Access</h2>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Auction Radar</h1>
          <p className="text-gray-500 text-sm italic">Confidential upcoming artifacts preview for elite members.</p>
        </div>
        
        <div className="space-y-4">
          {upcomingAuctions.map((auction) => (
            <div 
              key={auction.id} 
              className="flex flex-col md:flex-row justify-between items-center p-6 bg-gray-900/50 border border-gray-800/50 hover:border-amber-500/30 hover:bg-gray-800/40 transition-all duration-300 rounded-3xl group"
            >
               <div className="flex items-center gap-6 w-full md:w-auto">
                  <div className="h-12 w-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 font-bold">
                    {auction.id}
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors">{auction.name}</p>
                    <div className="flex gap-3 items-center">
                      <span className="text-gray-500 text-xs font-medium uppercase tracking-widest">{auction.time}</span>
                      <span className="h-1 w-1 rounded-full bg-gray-700"></span>
                      <span className="text-amber-500/80 text-xs font-bold">{auction.status}</span>
                    </div>
                  </div>
               </div>
               
               <div className="flex items-center gap-6 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-gray-800 pt-4 md:pt-0">
                 <div className="text-right hidden md:block">
                   <p className="text-xs text-gray-500 uppercase font-bold">Est. Value</p>
                   <p className="text-white font-black">{auction.price}</p>
                 </div>
                 <button className="bg-amber-600 hover:bg-amber-500 text-black px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-transform active:scale-95 shadow-lg shadow-amber-600/10">
                   Set Reminder
                 </button>
               </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-gray-600 text-[10px] uppercase tracking-[0.5em] font-bold">
          Updated every 24 hours • Secure Connection Verified
        </p>
      </div>
    </div>
  );
}