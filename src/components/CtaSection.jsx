import { orderWhatsAppLink } from "../utils/whatsapp.js";

export default function CtaSection() {
  return (
    <section id="kontak" className="px-6 lg:px-10 py-24">
      <div className="reveal max-w-6xl mx-auto text-center rounded-[2.5rem] bg-gradient-to-br from-navy to-blue-700 px-8 py-20 shadow-soft">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
          Siap Punya Website Portofolio?
        </h2>
        <p className="text-white/75 text-lg mt-5 mb-9">
          Bikin personal branding kamu terlihat lebih niat, rapi, dan
          profesional.
        </p>
        <a
          href={orderWhatsAppLink}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-orange text-white px-8 py-4 rounded-full font-black shadow-lg shadow-orange/30 hover:-translate-y-1 transition"
        >
          Konsultasi via WhatsApp
        </a>
      </div>
    </section>
  );
}
