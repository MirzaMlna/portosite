import { Route, Routes, useLocation } from "react-router-dom";

import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import WebsiteExamples from "./pages/WebsiteExamples.jsx";
import Home from "./pages/Home.jsx";
import TemplatePage from "./pages/TemplatePage.jsx";

export default function App() {
  const location = useLocation();
  const isTemplatePage = location.pathname.startsWith("/contoh/template/");

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      <ScrollToTop />
      {!isTemplatePage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contoh" element={<WebsiteExamples />} />
        <Route path="/contoh/template/:templateSlug" element={<TemplatePage />} />
      </Routes>
      {!isTemplatePage && <Footer />}
    </div>
  );
}
