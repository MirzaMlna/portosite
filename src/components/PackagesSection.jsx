import { Link } from "react-router-dom";

import SectionHeader from "./SectionHeader.jsx";
import { createWhatsAppLink } from "../utils/whatsapp.js";

const packageItems = [
  {
    name: "Starter",
    price: "Rp99K",
    description: "Portfolio sederhana dengan section Hero, About, Skill, dan Resume.",
    features: ["Hero", "About", "Skill", "Resume"],
    templatePath: "/contoh/template/paket-starter",
    featured: false,
  },
  {
    name: "Profesional",
    price: "Rp199K",
    description: "Portfolio lengkap dengan Project dan Kontak tambahan.",
    features: ["Hero", "About", "Skill", "Resume", "Project", "Kontak"],
    templatePath: "/contoh/template/paket-professional",
    featured: true,
  },
  {
    name: "Custom",
    price: "Rp349K+",
    description: "Website custom eksklusif dengan 10 section.",
    features: ["10 Section", "Copywriting basic", "Konsultasi konsep"],
    templatePath: "/contoh/template/paket-custom",
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
                  <li key={feature} className="flex items-center gap-2">
                    <i className="bi bi-check-circle-fill text-orange" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3">
                <Link
                  to={websitePackage.templatePath}
                  className="inline-flex items-center justify-center rounded-full border-2 border-orange px-6 py-3 text-center font-black text-orange transition hover:bg-orange hover:text-white"
                >
                  Contoh Website Paket Ini
                </Link>

                <a
                  href={createWhatsAppLink(
                    `Halo PortoSite, saya ingin memesan paket ${websitePackage.name} untuk website portofolio. Bisa dibantu informasinya?`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-center font-black text-white ${
                    websitePackage.featured ? "bg-orange" : "bg-navy"
                  }`}
                >
                  Pilih Paket
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
