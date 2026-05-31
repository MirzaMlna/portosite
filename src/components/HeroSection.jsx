import { orderWhatsAppLink } from "../utils/whatsapp.js";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-36 pb-20 px-6 lg:px-10 overflow-hidden">
      <div className="absolute top-28 right-10 w-72 h-72 bg-orange/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="reveal">
          <span className="inline-block bg-orange/15 text-orange px-5 py-3 rounded-full font-black mb-6">
            Website Portofolio Profesional
          </span>

          <h1 className="text-5xl md:text-7xl font-black leading-[0.98] text-navy mb-7">
            Bikin Portofolio Online yang Kelihatan Profesional.
          </h1>

          <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl">
            PortoSite bantu mahasiswa, fresh graduate, freelancer, dan
            profesional punya website portofolio yang rapi, modern, responsif,
            dan siap dibagikan.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="#paket"
              className="bg-orange text-white px-8 py-4 rounded-full font-black shadow-lg shadow-orange/30 hover:-translate-y-1 transition"
            >
              Lihat Paket
            </a>
            <a
              href={orderWhatsAppLink}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-navy px-8 py-4 rounded-full font-black border border-navy/10 hover:-translate-y-1 transition"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>

        <div className="reveal">
          <div className="bg-white rounded-[2rem] p-7 shadow-soft border border-navy/5 animate-float max-w-md mx-auto">
            <div className="flex gap-2 mb-6">
              <span className="w-3 h-3 bg-orange rounded-full"></span>
              <span className="w-3 h-3 bg-navy rounded-full"></span>
              <span className="w-3 h-3 bg-slate-300 rounded-full"></span>
            </div>

            <div className="w-28 h-28 rounded-[1.8rem] bg-gradient-to-br from-navy to-blue-600 mb-6 overflow-hidden">
              <img
                src="/curlycrowned.jpg"
                alt="Contoh foto profil portofolio"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-3xl font-black text-navy">CURLY CROWNED</h3>
            <p className="text-slate-500 mt-2">Developer</p>

            <div className="space-y-4 mt-8">
              <div className="h-4 bg-soft rounded-full w-full"></div>
              <div className="h-4 bg-soft rounded-full w-3/4"></div>
              <div className="h-4 bg-soft rounded-full w-5/6"></div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-8">
              <div className="h-20 bg-orange/15 rounded-2xl"></div>
              <div className="h-20 bg-navy/10 rounded-2xl"></div>
              <div className="h-20 bg-blue-500/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
