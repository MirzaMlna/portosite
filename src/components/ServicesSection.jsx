import SectionHeader from "./SectionHeader.jsx";

const serviceItems = [
  {
    title: "Desain Modern",
    color: "bg-orange/15",
    iconColor: "text-orange",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="w-7 h-7"
      >
        <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z" />
        <path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14z" />
        <path d="M5 14l.9 2.1L8 17l-2.1.9L5 20l-.9-2.1L2 17l2.1-.9L5 14z" />
      </svg>
    ),
    description:
      "Tampilan clean, profesional, dan cocok untuk CV online maupun personal branding.",
  },
  {
    title: "Responsive",
    color: "bg-navy/10",
    iconColor: "text-navy",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="w-7 h-7"
      >
        <rect x="3" y="4" width="14" height="12" rx="2" />
        <rect x="17" y="10" width="4" height="8" rx="1" />
        <path d="M8 20h6" />
        <path d="M11 16v4" />
      </svg>
    ),
    description:
      "Website tetap rapi saat dibuka di HP, tablet, laptop, dan desktop.",
  },
  {
    title: "Siap Pakai",
    color: "bg-blue-500/10",
    iconColor: "text-blue-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="w-7 h-7"
      >
        <path d="M5 12l4 4L19 6" />
        <path d="M21 12a9 9 0 1 1-5.3-8.2" />
      </svg>
    ),
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
                {item.icon}
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
