export default function WebsiteExamplesBenefitsSection() {
  return (
    <section className="py-24 px-6 lg:px-10 bg-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-black text-navy tracking-tight mb-6">
            Mengapa Memilih PortoSite?
          </h2>
          <p className="text-slate-500 text-lg">
            Semua contoh di atas adalah karya nyata yang kami buat untuk klien.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="reveal bg-white rounded-2xl p-8 shadow-soft">
            <div className="w-12 h-12 rounded-lg bg-orange/15 mb-5"></div>
            <h3 className="text-xl font-black text-navy mb-3">Cepat Jadi</h3>
            <p className="text-slate-500 text-sm">
              Proses pengerjaan cepat, website bisa jadi dalam 1-2 minggu.
            </p>
          </div>

          <div className="reveal bg-white rounded-2xl p-8 shadow-soft">
            <div className="w-12 h-12 rounded-lg bg-blue-500/15 mb-5"></div>
            <h3 className="text-xl font-black text-navy mb-3">Terjangkau</h3>
            <p className="text-slate-500 text-sm">
              Harga bersaing tanpa mengorbankan kualitas dan desain.
            </p>
          </div>

          <div className="reveal bg-white rounded-2xl p-8 shadow-soft">
            <div className="w-12 h-12 rounded-lg bg-purple-500/15 mb-5"></div>
            <h3 className="text-xl font-black text-navy mb-3">Full Support</h3>
            <p className="text-slate-500 text-sm">
              Tim siap membantu dari konsultasi hingga website live.
            </p>
          </div>

          <div className="reveal bg-white rounded-2xl p-8 shadow-soft">
            <div className="w-12 h-12 rounded-lg bg-green-500/15 mb-5"></div>
            <h3 className="text-xl font-black text-navy mb-3">Maintenance</h3>
            <p className="text-slate-500 text-sm">
              Kami bantu maintenance dan update website kamu secara berkala.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
