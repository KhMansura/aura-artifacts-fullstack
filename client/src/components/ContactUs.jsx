export default function ContactUs() {
  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Get in Touch</h2>
          <p className="text-slate-400 text-lg">Have a question about a specific artifact? Our experts are here to help.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="h-12 w-12 bg-amber-500 rounded-2xl flex items-center justify-center shrink-0">
                <span className="text-white text-xl">📍</span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Our Gallery</h4>
                <p className="text-slate-400 font-medium">123 Heritage Lane, Old Town, London</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="h-12 w-12 bg-amber-500 rounded-2xl flex items-center justify-center shrink-0">
                <span className="text-white text-xl">✉️</span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Email Us</h4>
                <p className="text-slate-400 font-medium">concierge@aura-artifacts.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4 bg-slate-900 p-8 rounded-3xl border border-slate-800">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full bg-slate-800 border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-amber-500 outline-none"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full bg-slate-800 border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-amber-500 outline-none"
            />
            <textarea 
              placeholder="Your Message" 
              rows="4"
              className="w-full bg-slate-800 border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-amber-500 outline-none"
            ></textarea>
            <button className="w-full bg-amber-600 hover:bg-amber-500 text-white font-black py-4 rounded-xl transition-all uppercase tracking-widest shadow-lg shadow-amber-600/20">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}