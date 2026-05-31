export default function WebsiteExamplesHeroSection() {
  return (
    <section className="relative min-h-[60vh] pt-20 pb-20 px-6 lg:px-10 overflow-hidden">
      <div className="absolute top-28 right-10 w-72 h-72 bg-orange/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center reveal">
          <span className="inline-block bg-orange/15 text-orange px-5 py-3 rounded-full font-black mb-6">
            Inspirasi dari Portfolio Nyata
          </span>

          <h1 className="text-5xl md:text-6xl font-black leading-[0.98] tracking-[-0.05em] text-navy mb-7">
            Lihat Contoh Website Portofolio.
          </h1>

          <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto">
            Ingin tahu seperti apa hasil akhir website portofolio kami? Berikut
            contoh-contoh portofolio dari klien kami yang sudah jadi dan terlihat
            profesional.
          </p>
        </div>
      </div>
    </section>
  );
}
