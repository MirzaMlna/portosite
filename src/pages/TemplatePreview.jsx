import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

import mahasiswaTemplate from "./templates/template1-mahasiswa.html?raw";
import designerTemplate from "./templates/template2-designer.html?raw";
import contentCreatorTemplate from "./templates/template3-contentcreator.html?raw";
import umkmTemplate from "./templates/template4-umkm.html?raw";

const templates = {
  mahasiswa: {
    title: "Portfolio Mahasiswa",
    html: mahasiswaTemplate,
  },
  designer: {
    title: "Designer Portfolio",
    html: designerTemplate,
  },
  "content-creator": {
    title: "Content Creator Portfolio",
    html: contentCreatorTemplate,
  },
  umkm: {
    title: "Landing Page UMKM",
    html: umkmTemplate,
  },
};

export default function TemplatePreview() {
  const { templateSlug } = useParams();
  const template = templates[templateSlug];
  const previewRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === previewRef.current);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    const previewElement = previewRef.current;

    if (!previewElement) {
      return;
    }

    if (isFullscreen && !document.fullscreenElement) {
      setIsFullscreen(false);
      return;
    }

    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    try {
      await previewElement.requestFullscreen();
    } catch {
      setIsFullscreen(true);
    }
  };

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
    <main className="bg-soft pt-24">
      <section className="px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-orange">
              Preview Template
            </p>
            <h1 className="mt-2 text-3xl font-black text-navy md:text-4xl">
              {template.title}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={toggleFullscreen}
              className="inline-flex items-center justify-center rounded-xl bg-orange px-5 py-3 font-black text-white shadow-soft transition hover:bg-navy"
            >
              {isFullscreen ? "Keluar Fullscreen" : "Fullscreen"}
            </button>

            <Link
              to="/contoh"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-black text-navy shadow-soft transition hover:bg-orange hover:text-white"
            >
              Kembali
            </Link>
          </div>
        </div>
      </section>

      <section className="px-3 pb-10 md:px-6 lg:px-10">
        <div
          ref={previewRef}
          className={`template-preview-frame mx-auto max-w-7xl overflow-hidden rounded-3xl bg-white shadow-soft ${
            isFullscreen ? "is-fullscreen" : ""
          }`}
        >
          {isFullscreen && (
            <button
              type="button"
              onClick={toggleFullscreen}
              className="template-preview-close inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 font-black text-navy shadow-soft transition hover:bg-orange hover:text-white"
            >
              Keluar
            </button>
          )}
          <iframe
            title={template.title}
            srcDoc={template.html}
            allowFullScreen
            className="h-[calc(100vh-180px)] min-h-[620px] w-full border-0"
          />
        </div>
      </section>
    </main>
  );
}
