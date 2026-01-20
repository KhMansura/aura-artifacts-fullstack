
// "use client";
// import { signIn } from "next-auth/react";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     const formData = new FormData(e.currentTarget);
//     const email = formData.get("email");
//     const password = formData.get("password");

//     // NextAuth Credentials SignIn
//     const result = await signIn("credentials", {
//       email,
//       password,
//       redirect: false,
//     });

//     if (result?.error) {
//       setError("Invalid Email or Password");
//       setLoading(false);
//     } else {
//       router.push("/items");
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-950 px-6">
//       <div className="bg-gray-900 p-8 rounded-3xl shadow-2xl w-full max-w-md border border-gray-800">
//         <h2 className="text-3xl font-black mb-8 text-center text-amber-500 tracking-tight">
//           ADMIN ACCESS
//         </h2>
        
//         {error && (
//           <p className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm p-3 rounded-lg text-center mb-6">
//             {error}
//           </p>
//         )}
        
//         {/* Google Login Button */}
//         <button 
//           type="button"
//           onClick={() => signIn("google", { callbackUrl: "/items" })}
//           className="w-full bg-white text-gray-900 p-3 rounded-xl shadow-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition-all font-bold mb-6"
//         >
//           <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-6" alt="Google" />
//           Continue with Google
//         </button>

//         <div className="relative mb-6">
//           <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-800"></span></div>
//           <div className="relative flex justify-center text-xs uppercase"><span className="bg-gray-900 px-2 text-gray-500">Or use credentials</span></div>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-bold text-gray-300 mb-2">Email Address</label>
//             <input 
//               name="email" 
//               type="email" 
//               required 
//               className="w-full p-3 bg-gray-800 border border-gray-700 rounded-xl text-white outline-none focus:border-amber-500 transition" 
//               placeholder="masa@aura.com" 
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-bold text-gray-300 mb-2">Password</label>
//             <input 
//               name="password" 
//               type="password" 
//               required 
//               className="w-full p-3 bg-gray-800 border border-gray-700 rounded-xl text-white outline-none focus:border-amber-500 transition" 
//               placeholder="••••••••" 
//             />
//           </div>
          
//           <button 
//             type="submit" 
//             disabled={loading}
//             className="w-full bg-amber-600 text-white p-3 rounded-xl font-black text-lg hover:bg-amber-500 transition shadow-lg active:scale-95 disabled:opacity-50"
//           >
//             {loading ? "Authenticating..." : "Login to Dashboard"}
//           </button>
//         </form>

//         <p className="text-center text-gray-500 text-xs mt-8">
//           Authorized personnel only. All access is logged.
//         </p>
//       </div>
//     </div>
//   );
// }
"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid Email or Password");
      setLoading(false);
    } else {
      router.push("/items");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-6">
      <div className="bg-gray-900 p-10 rounded-[40px] shadow-2xl w-full max-w-md border border-gray-800 relative overflow-hidden">
        
    
        <div className="text-center mb-10">
          <h2 className="text-sm font-black text-amber-500 uppercase tracking-[0.4em] mb-2">
            Welcome Back
          </h2>
          <h1 className="text-4xl font-black text-white tracking-tighter">
            Access <span className="text-amber-500 underline underline-offset-8 decoration-1">AURA</span>
          </h1>
          <p className="text-gray-500 text-sm mt-4 font-medium">
            Please login to manage your collections and artifacts.
          </p>
        </div>
        
        {error && (
          <p className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm p-3 rounded-xl text-center mb-6">
            {error}
          </p>
        )}
        
        {/* Google Login Button */}
        <button 
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/items" })}
          className="w-full bg-white text-gray-900 p-4 rounded-2xl shadow-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition-all font-black text-sm uppercase tracking-wider mb-6 active:scale-95"
        >
          <img src="https://i.ibb.co.com/bMNzwMrB/images.jpg" 
          className="w-5" alt="Google" />
          Continue with Google
        </button>

        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-800"></span></div>
          <div className="relative flex justify-center text-[10px] uppercase tracking-[0.2em] font-bold"><span className="bg-gray-900 px-4 text-gray-600">Manual Entry</span></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
            <input 
              name="email" 
              type="email" 
              required 
              className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white outline-none focus:border-amber-500 focus:bg-gray-800 transition shadow-inner" 
              placeholder="masa@aura.com" 
            />
          </div>
          <div>
            <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Password</label>
            <input 
              name="password" 
              type="password" 
              required 
              className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white outline-none focus:border-amber-500 focus:bg-gray-800 transition shadow-inner" 
              placeholder="••••••••" 
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-amber-600 text-white p-4 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-amber-500 transition-all shadow-xl shadow-amber-900/20 active:scale-95 disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Login to Dashboard"}
          </button>
        </form>

        
        {/* <div className="mt-8 pt-6 border-t border-gray-800/50 text-center">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            Demo Credentials
          </p>
          <p className="text-xs text-amber-500/70 mt-1 font-medium italic">
            User: masa@aura.com | Pass: aura2026
          </p>
        </div> */}
      </div>
    </div>
  );
}