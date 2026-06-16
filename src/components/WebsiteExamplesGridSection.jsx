import { Link } from "react-router-dom";

const portfolioSamples = [
  {
    id: 1,
    name: "Portfolio Mahasiswa",
    role: "Template personal akademik",
    description:
      "Portfolio rapi untuk profil mahasiswa, pengalaman, skill, dan kontak.",
    gradient: "from-blue-500 to-cyan-500",
    features: ["Profil singkat", "Pengalaman", "Skill", "Responsive"],
    templatePath: "https://mirzamlna.github.io/portfolio/",
  },
  {
    id: 2,
    name: "Designer Portfolio",
    role: "Template kreatif visual",
    description:
      "Portfolio designer dengan gaya bold, showcase karya, dan detail layanan.",
    gradient: "from-purple-500 to-pink-500",
    features: ["Showcase karya", "Case study", "Layanan", "Kontak"],
    templatePath: "/contoh/template/designer",
  },
  {
    id: 3,
    name: "Landing Page UMKM",
    role: "Template bisnis lokal",
    description:
      "Landing page UMKM minimalis untuk produk, benefit, testimoni, dan pemesanan.",
    gradient: "from-green-500 to-emerald-500",
    features: ["Produk", "Benefit", "Testimoni", "WhatsApp CTA"],
    templatePath: "/contoh/template/umkm",
  },
];

export default function WebsiteExamplesGridSection() {
  return (
    <section className="py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioSamples.map((portfolio) => (
            <Link
              key={portfolio.id}
              to={portfolio.templatePath}
              className="reveal bg-white rounded-3xl shadow-soft overflow-hidden hover:shadow-xl transition group cursor-pointer block focus:outline-none focus-visible:ring-4 focus-visible:ring-orange/30"
            >
              <div
                className={`h-40 bg-gradient-to-br ${portfolio.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-50 group-hover:opacity-75 transition">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-white text-5xl font-black opacity-50">
                      {portfolio.id}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-black text-navy mb-2">
                  {portfolio.name}
                </h3>
                <p className="text-orange font-bold mb-4">{portfolio.role}</p>
                <p className="text-slate-500 leading-relaxed mb-6">
                  {portfolio.description}
                </p>

                <div className="space-y-2 mb-6">
                  <p className="text-sm font-black text-navy">
                    Fitur di portfolio ini:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {portfolio.features.map((feature, index) => (
                      <span
                        key={index}
                        className="inline-block bg-orange/15 text-orange text-xs font-bold px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="block w-full bg-orange/10 text-orange text-center font-black py-3 rounded-xl group-hover:bg-orange group-hover:text-white transition">
                  Lihat Template
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
