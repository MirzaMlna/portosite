import { Link, useLocation } from "react-router-dom";
import { orderWhatsAppLink } from "../utils/whatsapp.js";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-[0_10px_35px_rgba(22,39,90,0.08)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="PortoSite Logo"
            className="w-11 h-11 object-contain"
          />
          <span className="text-2xl font-black text-navy">
            Porto<span className="text-orange">Site</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-bold text-navy">
          <Link
            to="/"
            className={`hover:text-orange transition ${
              isActive("/") ? "text-orange" : ""
            }`}
          >
            Beranda
          </Link>
          <a href="/#layanan" className="hover:text-orange transition">
            Layanan
          </a>
          <a href="/#contoh" className="hover:text-orange transition">
            Contoh
          </a>
          <a href="/#paket" className="hover:text-orange transition">
            Paket
          </a>
          <a href="/#proses" className="hover:text-orange transition">
            Proses
          </a>
          <a
            href={orderWhatsAppLink}
            target="_blank"
            rel="noreferrer"
            className="bg-orange text-white px-6 py-3 rounded-full hover:-translate-y-1 transition shadow-lg shadow-orange/30"
          >
            Order
          </a>
        </nav>
      </div>
    </header>
  );
}
