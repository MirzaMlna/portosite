const WHATSAPP_NUMBER = "6285753850636";

export function createWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const orderWhatsAppLink = createWhatsAppLink(
  "Halo PortoSite, saya ingin memesan website portofolio. Bisa dibantu informasinya?"
);
