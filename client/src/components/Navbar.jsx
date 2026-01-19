
// "use client";

// import Link from 'next/link';
// import { useSession, signOut } from "next-auth/react";

// export default function Navbar() {
//   const { data: session } = useSession();

//   return (
//     <nav className="flex justify-between items-center px-10 py-5 bg-gray-950 text-white sticky top-0 z-50 shadow-xl">
//       <Link href="/" className="text-2xl font-black tracking-tighter text-amber-500">
//         AURA.
//       </Link>
      
//       <div className="space-x-8 font-medium flex items-center">
//         <Link href="/" className="hover:text-amber-400 transition">Home</Link>
//         <Link href="/items" className="hover:text-amber-400 transition">Gallery</Link>
//         <Link href="/about">About Us</Link>
//         <Link href="/contact">Contact</Link>
       
//         {session ? (
//           <>
//             <Link href="/add-item" className="text-amber-400 hover:underline transition">Add Item</Link>
            
            
// <div className="flex items-center gap-3 bg-gray-900/50 py-1.5 px-4 rounded-full border border-gray-800">
//   <div className="flex flex-col items-end">
//     <span className="text-xs font-bold text-gray-200 leading-none">
//       {session.user.name}
//     </span>
//     <span className="text-[10px] text-amber-500 font-medium tracking-tight">
//       Authenticated
//     </span>
//   </div>

//   <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-amber-500">
//     {session.user.image ? (
//       <img 
//         src={session.user.image} 
//         alt="Profile" 
//         className="h-full w-full object-cover"
//       />
//     ) : (
//       <div className="flex h-full w-full items-center justify-center bg-amber-600 text-white font-black">
//         {session.user.name.charAt(0).toUpperCase()}
//       </div>
//     )}
//   </div>
// </div>

//             {/* Logout*/}
//             <button 
//               onClick={() => signOut({ callbackUrl: '/' })} 
//               className="bg-red-600/20 text-red-400 border border-red-600/50 px-5 py-2 rounded-full hover:bg-red-600 hover:text-white transition"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
         
//           <Link href="/login" className="bg-amber-600 px-5 py-2 rounded-full hover:bg-amber-500 transition">
//             Login
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// }
"use client";

import Link from 'next/link';
import { useSession, signOut } from "next-auth/react";
import { useState } from "react"; // added
import { motion, AnimatePresence } from "framer-motion"; // added for smooth transition

export default function Navbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false); // Mobile state

  return (
    <nav className="bg-gray-950 text-white sticky top-0 z-50 shadow-xl border-b border-gray-900">
      <div className="flex justify-between items-center px-6 md:px-10 py-5">
        <Link href="/" className="text-2xl font-black tracking-tighter text-amber-500">
          AURA.
        </Link>
        
        {/* Desktop Menu - Hidden on Mobile */}
        <div className="hidden md:flex space-x-8 font-medium items-center">
          <Link href="/" className="hover:text-amber-400 transition">Home</Link>
          <Link href="/items" className="hover:text-amber-400 transition">Gallery</Link>
          <Link href="/about" className="hover:text-gray-300 transition">About Us</Link>
          <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
          
          {session ? (
            <>
              <Link href="/add-item" className="text-amber-400 hover:underline transition">Add Item</Link>
              <Link href="/vault" className="text-amber-400 font-bold hover:scale-105 transition">Vault</Link>
              <Link href="/auctions" className="text-gray-300 hover:text-amber-400 transition">Radar</Link>
              
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
                      {session.user.name?.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
              </div>

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

        {/* Hamburger Icon - Visible only on Mobile */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white focus:outline-none p-2"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-amber-500 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-950 border-t border-gray-900 px-6 py-6"
          >
            <div className="flex flex-col space-y-5">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-lg hover:text-amber-500">Home</Link>
              <Link href="/items" onClick={() => setIsOpen(false)} className="text-lg hover:text-amber-500">Gallery</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg">About Us</Link>
              
              {session ? (
                <div className="flex flex-col space-y-5 pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-amber-500">
                      {session.user.image ? (
                        <img src={session.user.image} alt="Profile" className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-amber-600 text-white font-black uppercase">
                          {session.user.name?.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-white font-bold">{session.user.name}</p>
                      <p className="text-xs text-amber-500">Authenticated</p>
                    </div>
                  </div>
                  <Link href="/add-item" onClick={() => setIsOpen(false)} className="text-amber-400 font-bold">Add Item</Link>
                  <button 
                    onClick={() => signOut({ callbackUrl: '/' })} 
                    className="bg-red-600 text-white px-5 py-3 rounded-xl font-bold text-center"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link href="/login" onClick={() => setIsOpen(false)} className="bg-amber-600 text-center py-3 rounded-xl font-bold">
                  Login
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
