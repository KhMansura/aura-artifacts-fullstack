// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import toast, { Toaster } from "react-hot-toast";

// export default function AddItemPage() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData(e.target);
//     const itemData = {
//       name: formData.get("name"),
//       description: formData.get("description"),
//       price: formData.get("price"),
//       image: formData.get("image"),
//     };

//     try {
//       const res = await fetch("http://localhost:5000/api/items", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(itemData),
//       });

//       if (res.ok) {
//         toast.success("Artifact successfully added to gallery!");
//         e.target.reset(); // ফর্ম ক্লিয়ার করবে
//         setTimeout(() => router.push("/items"), 2000); // ২ সেকেন্ড পর রিডাইরেক্ট
//       } else {
//         toast.error("Failed to add item.");
//       }
//     } catch (error) {
//       toast.error("Server connection failed!");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="max-w-xl mx-auto py-20 px-6">
//       <Toaster /> {/* টোস্ট নোটিফিকেশন দেখানোর জন্য */}
//       <h1 className="text-3xl font-bold mb-8 text-center">Add New Artifact</h1>
      
//       <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 rounded-2xl shadow-lg border">
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Item Name</label>
//           <input name="name" required className="w-full p-3 border rounded-lg focus:ring-2 ring-amber-500 outline-none" />
//         </div>

//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Description</label>
//           <textarea name="description" required className="w-full p-3 border rounded-lg h-32 focus:ring-2 ring-amber-500 outline-none" />
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-1 font-medium text-gray-700">Price ($)</label>
//             <input name="price" type="number" required className="w-full p-3 border rounded-lg focus:ring-2 ring-amber-500 outline-none" />
//           </div>
//           <div>
//             <label className="block mb-1 font-medium text-gray-700">Image URL</label>
//             <input name="image" required className="w-full p-3 border rounded-lg focus:ring-2 ring-amber-500 outline-none" placeholder="Unsplash URL" />
//           </div>
//         </div>
        
//         <button 
//           type="submit" 
//           disabled={loading}
//           className="w-full bg-black text-white p-4 rounded-lg font-bold hover:bg-gray-800 transition disabled:bg-gray-400"
//         >
//           {loading ? "Adding..." : "List to Gallery"}
//         </button>
//       </form>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function AddItemPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const itemData = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: Number(formData.get("price")),
      image: formData.get("image"),
    };

    try {
      const res = await fetch("http://localhost:5000/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itemData),
      });

      if (res.ok) {
        toast.success("Artifact Added Successfully!");
        e.target.reset(); // ফর্ম ক্লিয়ার করা
        setTimeout(() => router.push("/items"), 2000); // ২ সেকেন্ড পর গ্যালারিতে পাঠানো
      } else {
        toast.error("Failed to add artifact.");
      }
    } catch (err) {
      toast.error("Server connection failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <Toaster />
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg border border-gray-100">
        <h1 className="text-3xl font-black mb-6 text-gray-900 text-center uppercase tracking-tight">List New Artifact</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Artifact Name</label>
            <input name="name" required className="w-full p-3 border border-gray-200 rounded-xl outline-amber-500 text-gray-900" placeholder="e.g. Ancient Greek Shield" />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Price ($)</label>
            <input name="price" type="number" required className="w-full p-3 border border-gray-200 rounded-xl outline-amber-500 text-gray-900" placeholder="5000" />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Image URL</label>
            <input name="image" required className="w-full p-3 border border-gray-200 rounded-xl outline-amber-500 text-gray-900" placeholder="Unsplash Link" />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Description</label>
            <textarea name="description" required rows="4" className="w-full p-3 border border-gray-200 rounded-xl outline-amber-500 text-gray-900" placeholder="Tell the history of this piece..."></textarea>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-amber-600 text-white font-black rounded-xl hover:bg-amber-700 transition-all shadow-lg active:scale-95 disabled:bg-gray-400"
          >
            {loading ? "AUTHENTICATING..." : "ADD TO COLLECTION"}
          </button>
        </form>
      </div>
    </div>
  );
}