
"use client";
import { useEffect, useState, use } from "react";
import Link from "next/link";

export default function ItemDetails({ params }) {
  const resolvedParams = use(params);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseURL = process.env.NEXT_PUBLIC_NEXTAUTH_URL || "http://localhost:5000";

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
  }, [resolvedParams.id]);

  if (loading) return (
    <div className="h-screen flex items-center justify-center font-bold text-xl animate-pulse">
      Loading History...
    </div>
  );

  if (!item) return <div className="text-center py-20">Item Not Found!</div>;

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <Link href="/items" className="text-amber-600 font-bold flex items-center gap-2 mb-8 hover:translate-x-[-5px] transition-transform">
          ← Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* IMG */}
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-200">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-auto max-h-[600px] object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
              {item.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-bold text-amber-600">${item.price}</span>
              <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold uppercase tracking-widest">
                Certified Authentic
              </span>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border-l-8 border-amber-500 mb-8 shadow-inner">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Historical Description</h3>
              <p className="text-gray-700 text-xl leading-relaxed">
                {item.description}
              </p>
            </div>

            <button className="w-full bg-black text-white py-5 rounded-2xl font-black text-xl hover:bg-amber-600 transition-all shadow-xl hover:shadow-amber-500/20 active:scale-95">
              Secure This Artifact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}