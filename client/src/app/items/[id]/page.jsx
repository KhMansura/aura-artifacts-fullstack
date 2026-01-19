
// "use client";
// import { useEffect, useState, use } from "react";
// import Link from "next/link";

// export default function ItemDetails({ params }) {
//   const resolvedParams = use(params);
//   const [item, setItem] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const baseURL = process.env.NEXT_PUBLIC_NEXTAUTH_URL || "http://localhost:5000";

//   useEffect(() => {
//     fetch(`${baseURL}/api/items/${resolvedParams.id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setItem(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching details:", err);
//         setLoading(false);
//       });
//   }, [resolvedParams.id]);

//   if (loading) return (
//     <div className="h-screen flex items-center justify-center font-bold text-xl animate-pulse">
//       Loading History...
//     </div>
//   );

//   if (!item) return <div className="text-center py-20">Item Not Found!</div>;

//   return (
//     <div className="bg-white min-h-screen py-20">
//       <div className="container mx-auto px-6 max-w-6xl">
        
//         <Link href="/items" className="text-amber-600 font-bold flex items-center gap-2 mb-8 hover:translate-x-[-5px] transition-transform">
//           ← Back to Collection
//         </Link>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
//           {/* IMG */}
//           <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-200">
//             <img 
//               src={item.image} 
//               alt={item.name} 
//               className="w-full h-auto max-h-[600px] object-cover"
//             />
//           </div>

//           {/* CONTENT */}
//           <div className="flex flex-col justify-center">
//             <h1 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
//               {item.name}
//             </h1>
            
//             <div className="flex items-center gap-4 mb-8">
//               <span className="text-4xl font-bold text-amber-600">${item.price}</span>
//               <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold uppercase tracking-widest">
//                 Certified Authentic
//               </span>
//             </div>

//             <div className="bg-gray-50 p-8 rounded-2xl border-l-8 border-amber-500 mb-8 shadow-inner">
//               <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Historical Description</h3>
//               <p className="text-gray-700 text-xl leading-relaxed">
//                 {item.description}
//               </p>
//             </div>

//             <button className="w-full bg-black text-white py-5 rounded-2xl font-black text-xl hover:bg-amber-600 transition-all shadow-xl hover:shadow-amber-500/20 active:scale-95">
//               Secure This Artifact
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useEffect, useState, use } from "react";
import Link from "next/link";

export default function ItemDetails({ params }) {
  const resolvedParams = use(params);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // API URL logic
  const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  useEffect(() => {
    fetch(`${baseURL}/api/items/${resolvedParams.id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching details:", err);
        setLoading(false);
      });
  }, [resolvedParams.id, baseURL]);

  if (loading) return (
    <div className="h-screen bg-[#020617] flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="font-bold text-amber-500 tracking-widest animate-pulse">RESTORING HISTORY...</p>
    </div>
  );

  if (!item) return (
    <div className="bg-[#020617] min-h-screen text-white flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Artifact Not Found!</h2>
      <Link href="/items" className="text-amber-500 underline">Back to Gallery</Link>
    </div>
  );

  return (
    <div className="bg-[#020617] min-h-screen py-20 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Navigation Link */}
        <Link href="/items" className="text-amber-500 font-bold inline-flex items-center gap-2 mb-12 hover:translate-x-[-8px] transition-transform">
          <span className="text-2xl">←</span> Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* IMAGE SECTION with Outer Glow */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-amber-500/20 rounded-[35px] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-gray-800 bg-gray-900">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-auto max-h-[600px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* CONTENT SECTION */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              {item.name}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 mb-10">
              <span className="text-5xl font-black text-amber-500 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">
                ${item.price}
              </span>
              <span className="px-6 py-2 bg-amber-500/10 text-amber-500 border border-amber-500/30 rounded-full text-xs font-black uppercase tracking-[0.2em]">
                ✦ Certified Authentic
              </span>
            </div>

            {/* Description Box with High Contrast */}
            <div className="bg-gray-900/50 backdrop-blur-md p-8 rounded-3xl border border-gray-800 mb-10 relative">
              <div className="absolute top-0 left-8 -translate-y-1/2 bg-amber-500 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                Provenance
              </div>
              <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4">Historical Narrative</h3>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic">
                "{item.description}"
              </p>
            </div>

            {/* CTA Button */}
            <button className="group relative w-full bg-amber-500 text-black py-6 rounded-2xl font-black text-xl overflow-hidden transition-all active:scale-95 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
              <span className="relative z-10 uppercase tracking-widest">Secure This Artifact</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
            
            <p className="text-center mt-6 text-gray-500 text-xs font-bold uppercase tracking-tighter">
              World-wide insured shipping available for this masterpiece
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}