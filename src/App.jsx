import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import WebsiteExamples from "./pages/WebsiteExamples.jsx";
import Home from "./pages/Home.jsx";
import TemplatePreview from "./pages/TemplatePreview.jsx";

export default function App() {
  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contoh" element={<WebsiteExamples />} />
        <Route path="/contoh/template/:templateSlug" element={<TemplatePreview />} />
      </Routes>
      <Footer />
    </div>
  );
}
