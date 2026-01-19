"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ItemListPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseURL = process.env.NEXTAUTH_URL || "http://localhost:5000";

  useEffect(() => {
    fetch(`${baseURL}/api/items`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-amber-600"></div>
        <p className="ml-4 text-xl">Loading Artifacts...</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen py-16 px-6 bg-gradient-to-br from-gray-950 to-gray-800 text-gray-100 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")', backgroundRepeat: 'repeat' }}
      ></div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        <h1 className="text-5xl font-extrabold text-center text-amber-400 mb-6 tracking-tight drop-shadow-lg">
          THE AURA ARTIFACTS GALLERY
        </h1>
        <p className="text-center text-gray-300 mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
          Step into a realm where history breathes. Discover our meticulously curated collection of rare and authentic artifacts from ancient civilizations to modern marvels.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="group bg-gray-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 border border-gray-700 flex flex-col h-full transform hover:-translate-y-2 hover:scale-105" // Hover effects for floating look
            >
              <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white text-md font-bold px-4 py-2 rounded-full shadow-lg">
                  ${item.price}
                </div>
              </div>

              <div className="p-7 flex flex-col flex-grow text-gray-200">
                <h2 className="text-2xl font-bold text-amber-300 mb-2 line-clamp-1">
                  {item.name}
                </h2>
                <p className="text-gray-400 text-base mb-6 line-clamp-3 flex-grow">
                  {item.description}
                </p>

                <Link 
                  href={`/items/${item.id}`} 
                  className="w-full text-center bg-amber-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-amber-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  View Provenance
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}