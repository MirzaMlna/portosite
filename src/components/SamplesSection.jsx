import { Link } from "react-router-dom";

import SectionHeader from "./SectionHeader.jsx";

const sampleItems = [
  {
    name: "Portofolio Mahasiswa",
    role: "Mahasiswa",
    gradient: "from-navy to-blue-600",
    description:
      "Landing page personal dengan profil, skill, project highlight, dan kontak.",
  },
  {
    name: "Portofolio Designer",
    role: "UI/UX Designer",
    gradient: "from-orange to-rose-500",
    description:
      "Showcase visual untuk case study, process design, dan galeri karya.",
  },
  {
    name: "Portofolio Content Creator",
    role: "Content Creator & Influencer",
    gradient: "from-cyan-500 to-emerald-500",
    description:
      "Menampilkan personal branding, statistik media sosial, portofolio konten, serta kolaborasi brand secara profesional.",
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

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {sampleItems.map((item) => (
            <article
              key={item.name}
              className="reveal bg-white rounded-3xl shadow-soft overflow-hidden hover:-translate-y-2 transition"
            >
              <div
                className={`h-44 bg-gradient-to-br ${item.gradient} p-6 text-white flex flex-col justify-end`}
              >
                <p className="text-sm font-bold text-white/75">{item.role}</p>
                <h3 className="text-2xl font-black mt-1">{item.name}</h3>
              </div>
              <div className="p-8">
                <p className="text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <Link
            to="/contoh"
            className="inline-block bg-navy text-white px-8 py-4 rounded-full font-black hover:-translate-y-1 transition"
          >
            Lihat Semua Contoh
          </Link>
        </div>
      </div>
    </section>
  );
}
