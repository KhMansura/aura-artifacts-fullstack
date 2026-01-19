"use client";
import { motion } from "framer-motion";

export default function AuthenticationSteps() {
  const steps = [
    {
      icon: "🔬",
      title: "Lab Testing",
      desc: "Carbon dating and high-precision material analysis.",
      delay: 0.2,
    },
    {
      icon: "📜",
      title: "Provenance Check",
      desc: "Complete verification of ownership and origin history.",
      delay: 0.4,
    },
    {
      icon: "⚖️",
      title: "Legal Clearance",
      desc: "Ensuring full compliance with global heritage laws.",
      delay: 0.6,
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Title Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">How We Verify</h2>
          <div className="h-1.5 w-24 bg-amber-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: step.delay }}
              whileHover={{ y: -10 }}
              className="group p-10 bg-slate-50 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 text-center"
            >
              {/* Icon Circle */}
              <div className="h-20 w-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-amber-500 transition-colors duration-300">
                <span className="text-5xl group-hover:scale-110 transition-transform">{step.icon}</span>
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-extrabold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 font-semibold leading-relaxed text-base">
                {step.desc}
              </p>
              
              {/* Decorative Number */}
              <div className="mt-6 text-slate-200 font-black text-4xl opacity-50 group-hover:text-amber-200 transition-colors">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}