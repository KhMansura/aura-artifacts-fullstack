
"use client";

import Link from 'next/link';
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-gray-950 text-white sticky top-0 z-50 shadow-xl">
      <Link href="/" className="text-2xl font-black tracking-tighter text-amber-500">
        AURA.
      </Link>
      
      <div className="space-x-8 font-medium flex items-center">
        <Link href="/" className="hover:text-amber-400 transition">Home</Link>
        <Link href="/items" className="hover:text-amber-400 transition">Gallery</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact</Link>
       
        {session ? (
          <>
            <Link href="/add-item" className="text-amber-400 hover:underline transition">Add Item</Link>
            
            
<div className="flex items-center gap-3 bg-gray-900/50 py-1.5 px-4 rounded-full border border-gray-800">
  <div className="flex flex-col items-end">
    <span className="text-xs font-bold text-gray-200 leading-none">
      {session.user.name}
    </span>
    <span className="text-[10px] text-amber-500 font-medium tracking-tight">
      Authenticated
    </span>
  </div>

  <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-amber-500">
    {session.user.image ? (
      <img 
        src={session.user.image} 
        alt="Profile" 
        className="h-full w-full object-cover"
      />
    ) : (
      <div className="flex h-full w-full items-center justify-center bg-amber-600 text-white font-black">
        {session.user.name.charAt(0).toUpperCase()}
      </div>
    )}
  </div>
</div>

            {/* Logout*/}
            <button 
              onClick={() => signOut({ callbackUrl: '/' })} 
              className="bg-red-600/20 text-red-400 border border-red-600/50 px-5 py-2 rounded-full hover:bg-red-600 hover:text-white transition"
            >
              Logout
            </button>
          </>
        ) : (
         
          <Link href="/login" className="bg-amber-600 px-5 py-2 rounded-full hover:bg-amber-500 transition">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
