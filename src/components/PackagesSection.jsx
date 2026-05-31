import SectionHeader from "./SectionHeader.jsx";
import { createWhatsAppLink } from "../utils/whatsapp.js";

const packageItems = [
  {
    name: "Starter",
    price: "Rp99K",
    description: "Landing page portofolio sederhana.",
    features: ["1 halaman", "Responsive design", "Link sosial media"],
    featured: false,
  },
  {
    name: "Professional",
    price: "Rp199K",
    description: "Website portofolio lengkap dan premium.",
    features: ["3-5 section", "Animasi modern", "Project showcase"],
    featured: true,
  },
  {
    name: "Custom",
    price: "Rp349K+",
    description: "Untuk kebutuhan khusus dan tampilan eksklusif.",
    features: ["Desain custom", "Copywriting basic", "Konsultasi konsep"],
    featured: false,
  },
];

export default function PackagesSection() {
  return (
    <section id="paket" className="py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Paket Website"
          description="Mulai dari yang simpel sampai custom."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {packageItems.map((websitePackage) => (
            <article
              key={websitePackage.name}
              className={`reveal relative bg-white rounded-3xl p-8 shadow-soft ${
                websitePackage.featured
                  ? "border-4 border-orange md:-translate-y-5"
                  : ""
              }`}
            >
              {websitePackage.featured && (
                <span className="absolute -top-5 right-8 bg-orange text-white px-5 py-2 rounded-full text-sm font-black">
                  Best Seller
                </span>
              )}

              <h3 className="text-2xl font-black text-navy">
                {websitePackage.name}
              </h3>
              <p className="text-4xl font-black text-orange mt-4">
                {websitePackage.price}
              </p>
              <p className="text-slate-500 mt-4">
                {websitePackage.description}
              </p>
              <ul className="space-y-3 text-slate-500 mt-8">
                {websitePackage.features.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">&#10003;</span> {feature}
                  </li>
                ))}
              </ul>
              <a
                href={createWhatsAppLink(
                  `Halo PortoSite, saya ingin memesan paket ${websitePackage.name} untuk website portofolio. Bisa dibantu informasinya?`
                )}
                target="_blank"
                rel="noreferrer"
                className={`inline-block mt-8 text-white px-6 py-3 rounded-full font-black ${
                  websitePackage.featured ? "bg-orange" : "bg-navy"
                }`}
              >
                Pilih Paket
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
