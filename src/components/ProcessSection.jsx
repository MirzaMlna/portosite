import SectionHeader from "./SectionHeader.jsx";

const processSteps = [
  {
    title: "Konsultasi",
    description:
      "Ceritakan kebutuhan dan konsep website yang kamu inginkan kepada kami.",
  },
  {
    title: "Kirim Data",
    description:
      "Kirim foto, biodata, portofolio, dan informasi lain yang ingin ditampilkan.",
  },
  {
    title: "Pengerjaan",
    description:
      "Kami mulai menyusun desain dan mengembangkan website sesuai kebutuhanmu.",
  },
  {
    title: "Website Jadi",
    description:
      "Website siap direview, diselesaikan, dan langsung digunakan untuk promosi.",
  },
];

export default function ProcessSection() {
  return (
    <section id="proses" className="py-24 px-6 lg:px-10 bg-soft">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Cara Order" />

        <div className="grid md:grid-cols-4 gap-5 mt-14">
          {processSteps.map((item, index) => (
            <article
              key={item.title}
              className="reveal p-7 rounded-3xl bg-white"
            >
              <span className="text-orange font-black text-3xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-black text-navy mt-4">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mt-3">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
