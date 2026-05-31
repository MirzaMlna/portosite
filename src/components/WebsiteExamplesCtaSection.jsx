import { Link } from "react-router-dom";
import { orderWhatsAppLink } from "../utils/whatsapp.js";

export default function WebsiteExamplesCtaSection() {
  return (
    <section className="px-6 lg:px-10 py-24">
      <div className="reveal max-w-6xl mx-auto text-center rounded-[2.5rem] bg-gradient-to-br from-navy to-blue-700 px-8 py-20 shadow-soft">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
          Tertarik untuk Punya Portfolio Seperti Ini?
        </h2>
        <p className="text-white/75 text-lg mb-9">
          Hubungi kami sekarang dan konsultasi gratis untuk project kamu.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={orderWhatsAppLink}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-orange text-white px-8 py-4 rounded-full font-black shadow-lg shadow-orange/30 hover:-translate-y-1 transition"
          >
            Konsultasi via WhatsApp
          </a>
          <Link
            to="/"
            className="inline-block bg-white/20 text-white px-8 py-4 rounded-full font-black border border-white/30 hover:-translate-y-1 transition"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </section>
  );
}
