import React from "react";
import { motion } from "framer-motion";

const SHOP_LINK = "https://www.tiktok.com/@lycharms_?_t=ZS-90pwhSrKnYY&_r=1";
const EMAIL = "3fnql13@gmail.com";
const COLORS = {
  primary: "bg-gradient-to-r from-purple-400 via-pink-300 to-pink-200",
};

function Sparkles(){
  // decorative sparkles across site (CSS handled in file)
  return <div className="pointer-events-none fixed inset-0 -z-10 sparkles"></div>;
}

export default function LycharmsOnePage() {
  return (
    <div className="font-sans text-gray-900 antialiased relative">
      <Sparkles />
      {/* floating ribbons */}
      <div className="pointer-events-none ribbons -z-10" aria-hidden>
        <div className="ribbon top-left" />
        <div className="ribbon top-right" />
        <div className="ribbon bottom-left" />
        <div className="ribbon bottom-right" />
      </div>

      <header className={`min-h-screen flex items-center ${COLORS.primary}`}>
        <div className="container mx-auto px-6 py-24 text-center">
          <img src="/images/logo.png" alt="Lycharms logo" className="mx-auto w-36 h-36 object-contain rounded-full shadow-xl border-4 border-white/50" />
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg mt-6">
            Lycharms
          </motion.h1>
          <p className="mt-4 text-xl md:text-2xl text-white/90">Cute coquette keychains & anik-anik — handmade with love 🌸</p>

          <div className="mt-8 flex justify-center gap-4">
            <a href={SHOP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/90 text-purple-700 font-semibold shadow-lg hover:scale-105 transform transition">
              Shop Now
            </a>

            <a href="#products" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-white/80 text-white hover:bg-white/10 transition">
              Browse Products
            </a>
          </div>

          <div className="mt-10">
            <img src="/images/hero-sample.jpg" alt="Lycharms hero" className="mx-auto w-72 h-72 object-cover rounded-3xl shadow-2xl border-4 border-white/50" />
          </div>
        </div>
      </header>

      <main className="-mt-12">
        <section id="about" className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl p-8 shadow">
            <h2 className="text-3xl font-bold text-purple-600">About Lycharms</h2>
            <p className="mt-4 text-gray-700">
              Lycharms is a small home-based shop crafting kawaii keychains and anik-anik. Every piece is handmade — perfect as gifts, giveaways, or a little treat for yourself. We focus on adorable details, pastel palettes, and lots of sparkle.
            </p>
            <p className="mt-4 text-gray-600 italic">Tip: Replace this text with your origin story, materials used, or production time (e.g., "Made-to-order — ships within 3 days").</p>
          </div>
        </section>

        <section id="products" className="container mx-auto px-6 py-16">
          <h3 className="text-2xl font-semibold text-center text-purple-600">Our Bestsellers</h3>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition">
                <img src={`/images/product-${i + 1}.jpg`} alt={`Product ${i + 1}`} className="w-full h-48 object-cover rounded-lg" />
                <div className="mt-3">
                  <h4 className="font-bold text-lg">Sample Charm #{i + 1}</h4>
                  <p className="text-sm text-gray-600 mt-1">A little description goes here. Replace with materials, size, or price.</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-semibold text-purple-700">₱99</span>
                    <a href={SHOP_LINK} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 rounded-full border border-purple-200 hover:bg-purple-50">Buy</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-6 text-center text-gray-600">Image placeholders are in <code>/public/images/product-1.jpg</code> ... <code>product-6.jpg</code>. Replace them with your photos.</p>
        </section>

        <section id="gallery" className="container mx-auto px-6 py-16">
          <h3 className="text-2xl font-semibold text-center text-purple-600">Gallery</h3>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="rounded-xl overflow-hidden shadow bg-white">
                <img src={`/images/gallery-${i + 1}.jpg`} alt={`Gallery ${i + 1}`} className="w-full h-40 object-cover" />
              </motion.div>
            ))}
          </div>
          <p className="mt-4 text-center text-gray-600 italic">Tip: Use clean, well-lit photos on plain backgrounds for best results.</p>
        </section>

        <section id="contact" className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow">
            <h3 className="text-2xl font-semibold text-purple-600">Contact</h3>
            <p className="mt-2 text-gray-600">Have questions? Want custom orders? Reach out below or email us.</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold">Message us</h4>
                <form action={`mailto:${EMAIL}`} method="post" encType="text/plain" className="mt-3 space-y-3">
                  <input name="Name" placeholder="Your name" className="w-full rounded-lg border px-3 py-2" />
                  <input name="Email" placeholder="Your email" className="w-full rounded-lg border px-3 py-2" />
                  <textarea name="Message" placeholder="Your message" className="w-full rounded-lg border px-3 py-2 h-28" />
                  <div className="flex gap-3">
                    <button type="submit" className="px-4 py-2 rounded-full bg-purple-600 text-white">Send Email</button>
                    <a href={SHOP_LINK} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full border">Visit Shop</a>
                  </div>
                </form>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="font-semibold">Quick Info</p>
                  <p className="text-sm text-gray-600 mt-2">Processing time: 2–3 days • Shipping: LBC/J&T • Payments: GCash / Bank Transfer</p>
                </div>

                <div className="bg-pink-50 rounded-lg p-4">
                  <p className="font-semibold">Follow Us</p>
                  <p className="text-sm text-gray-600 mt-2">Instagram: <span className="font-medium">@lycharms_</span></p>
                </div>

                <div className="rounded-lg p-4 border">
                  <p className="font-semibold">Location</p>
                  <p className="text-sm text-gray-600 mt-2">Philippines • Ships nationwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-white/90 py-6">
          <div className="container mx-auto px-6 text-center text-gray-600">
            <p>© {new Date().getFullYear()} Lycharms • Handmade with ♥</p>
            <p className="mt-2 text-sm">Replace email/shop link and image files in <code>/public/images</code> to customize.</p>
          </div>
        </footer>
      </main>

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
}

function ScrollToTop(){
  const [visible, setVisible] = React.useState(false);
  React.useEffect(()=>{
    const onScroll = ()=>{
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return ()=> window.removeEventListener('scroll', onScroll);
  },[]);
  return (
    <button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="Scroll to top"
      className={`fixed right-6 bottom-6 z-50 p-3 rounded-full shadow-lg transform transition ${visible? 'scale-100' : 'scale-0'} bg-pink-300 text-white`}>
      ♥
    </button>
  );
}
