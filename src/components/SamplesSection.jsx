import { Link } from "react-router-dom";

import SectionHeader from "./SectionHeader.jsx";

const sampleItems = [
  {
    id: 1,
    name: "Portofolio Mahasiswa",
    role: "Template personal akademik",
    gradient: "from-blue-500 to-cyan-500",
    description:
      "Portfolio rapi untuk profil mahasiswa, pengalaman, skill, dan kontak.",
    features: ["Profil singkat", "Pengalaman", "Skill", "Responsive"],
    templatePath: "https://mirzamlna.github.io/portfolio/",
  },
  {
    id: 2,
    name: "Portofolio Designer",
    role: "Template kreatif visual",
    gradient: "from-purple-500 to-pink-500",
    description:
      "Portfolio designer dengan gaya bold, showcase karya, dan detail layanan.",
    features: ["Showcase karya", "Case study", "Layanan", "Kontak"],
    templatePath: "/contoh/template/designer",
  },
  {
    id: 3,
    name: "Landing Page UMKM",
    role: "Template bisnis lokal",
    gradient: "from-green-500 to-emerald-500",
    description:
      "Landing page UMKM minimalis untuk produk, benefit, testimoni, dan pemesanan.",
    features: ["Produk", "Benefit", "Testimoni", "WhatsApp CTA"],
    templatePath: "/contoh/template/umkm",
  },
];

export default function SamplesSection() {
  return (
    <section id="contoh" className="py-24 px-6 lg:px-10 bg-soft">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Contoh Website"
          description="Beberapa arah tampilan yang bisa dipakai sebagai inspirasi portofolio kamu."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {sampleItems.map((item) => (
            <Link
              key={item.id}
              to={item.templatePath}
              className="reveal bg-white rounded-3xl shadow-soft overflow-hidden hover:shadow-xl transition group cursor-pointer block focus:outline-none focus-visible:ring-4 focus-visible:ring-orange/30"
            >
              <div
                className={`h-40 bg-gradient-to-br ${item.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-50 group-hover:opacity-75 transition">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-white text-5xl font-black opacity-50">
                      {item.id}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-black text-navy mb-2">
                  {item.name}
                </h3>
                <p className="text-orange font-bold mb-4">{item.role}</p>
                <p className="text-slate-500 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2 mb-6">
                  <p className="text-sm font-black text-navy">
                    Fitur di portfolio ini:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature) => (
                      <span
                        key={feature}
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
