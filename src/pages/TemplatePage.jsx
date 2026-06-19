import { Link, useParams } from "react-router-dom";

import mahasiswaTemplate from "./templates/template1-mahasiswa.html?raw";
import designerTemplate from "./templates/template2-designer.html?raw";
import umkmTemplate from "./templates/template4-umkm.html?raw";
import paketStarterTemplate from "./templates/paket-starter.html?raw";
import paketProfessionalTemplate from "./templates/paket-professional.html?raw";
import paketCustomTemplate from "./templates/paket-custom.html?raw";
import clientStarterTemplate from "./portofolio/client1/index.html?raw";
import clientProfessionalTemplate from "./portofolio/client2/index.html?raw";

const templates = {
  mahasiswa: {
    title: "Portfolio Mahasiswa",
    html: mahasiswaTemplate,
  },
  designer: {
    title: "Designer Portfolio",
    html: designerTemplate,
  },
  umkm: {
    title: "Landing Page UMKM",
    html: umkmTemplate,
  },
  "paket-starter": {
    title: "Contoh Paket Starter",
    html: paketStarterTemplate,
  },
  "paket-professional": {
    title: "Contoh Paket Professional",
    html: paketProfessionalTemplate,
  },
  "paket-custom": {
    title: "Contoh Paket Custom",
    html: paketCustomTemplate,
  },
  "client1-starter": {
    title: "Client 1 - Paket Starter",
    html: clientStarterTemplate,
  },
  "client2-professional": {
    title: "Client 2 - Paket Professional",
    html: clientProfessionalTemplate,
  },
  client1: {
    title: "Client 1 - Paket Starter",
    html: clientStarterTemplate,
  },
  client2: {
    title: "Client 2 - Paket Professional",
    html: clientProfessionalTemplate,
  },
};

export default function TemplatePage() {
  const { templateSlug } = useParams();
  const template = templates[templateSlug];

  if (!template) {
    return (
      <main className="min-h-screen bg-soft px-6 pt-32 pb-16 text-center">
        <h1 className="text-4xl font-black text-navy mb-4">
          Template tidak ditemukan
        </h1>
        <Link
          to="/contoh"
          className="inline-flex items-center justify-center rounded-xl bg-orange px-6 py-3 font-black text-white transition hover:bg-navy"
        >
          Kembali ke contoh desain
        </Link>
      </main>
    );
  }

  return (
    <main className="relative h-screen overflow-hidden bg-white">
      <Link
        to="/#contoh"
        className="fixed left-4 top-4 z-[9999] inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-black text-navy shadow-soft transition hover:-translate-y-0.5 hover:bg-orange hover:text-white"
      >
        <i className="bi bi-arrow-left mr-2" aria-hidden="true" />
        Kembali
      </Link>
      <iframe
        title={template.title}
        srcDoc={template.html}
        className="h-screen w-full border-0"
      />
    </main>
  );
}
