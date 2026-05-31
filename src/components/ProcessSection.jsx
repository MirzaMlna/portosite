import SectionHeader from "./SectionHeader.jsx";

const processSteps = ["Konsultasi", "Kirim Data", "Pengerjaan", "Website Jadi"];

export default function ProcessSection() {
  return (
    <section id="proses" className="py-24 px-6 lg:px-10 bg-soft">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Cara Order" />

        <div className="grid md:grid-cols-4 gap-5 mt-14">
          {processSteps.map((item, index) => (
            <article key={item} className="reveal p-7 rounded-3xl bg-white">
              <span className="text-orange font-black text-3xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-black text-navy mt-4">{item}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
