"use client";
import { motion } from "framer-motion";

export default function Statistics() {
  const stats = [
    { label: "Items Sold", value: "12k+" },
    { label: "Authenticity", value: "98%" },
    { label: "Global Experts", value: "50+" },
    { label: "Premium Support", value: "24/7" },
  ];

  return (
    <section className="py-24 bg-gray-950 border-y relative overflow-hidden">
     
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-200/20 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-[40px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-white hover:border-amber-200 hover:shadow-xl transition-all duration-500 text-center"
            >
              
              <h4 className="text-5xl md:text-6xl font-black text-amber-600 mb-2 tracking-tighter group-hover:text-amber-700 transition-colors">
                {stat.value}
              </h4>
              
              
              <p className="text-slate-800 font-extrabold uppercase tracking-[0.2em] text-[10px] md:text-xs">
                {stat.label}
              </p>
              
              {/* Progress Line */}
              <div className="mt-4 w-12 h-1.5 bg-gray-200 mx-auto rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="h-full bg-amber-500"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}