import SectionHeader from "./SectionHeader.jsx";

const serviceItems = [
  {
    title: "Desain Modern",
    color: "bg-orange/15",
    iconColor: "text-orange",
    iconClass: "bi-stars",
    description:
      "Tampilan clean, profesional, dan cocok untuk CV online maupun personal branding.",
  },
  {
    title: "Responsive",
    color: "bg-navy/10",
    iconColor: "text-navy",
    iconClass: "bi-phone",
    description:
      "Website tetap rapi saat dibuka di HP, tablet, laptop, dan desktop.",
  },
  {
    title: "Siap Pakai",
    color: "bg-blue-500/10",
    iconColor: "text-blue-600",
    iconClass: "bi-check2-circle",
    description:
      "Tinggal kirim data, PortoSite bantu susun jadi website yang siap dipromosikan.",
  },
];

export default function ServicesSection() {
  return (
    <section id="layanan" className="py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Kenapa PortoSite?"
          description="Bukan cuma website, tapi alat buat ningkatin personal branding."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {serviceItems.map((item) => (
            <article
              key={item.title}
              className="reveal bg-white rounded-3xl p-8 shadow-soft hover:-translate-y-2 transition"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${item.color} ${item.iconColor} mb-6 flex items-center justify-center`}
              >
                <i className={`bi ${item.iconClass} text-3xl`} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-black text-navy mb-3">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
