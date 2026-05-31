import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
      reveals.forEach((item) => {
        const windowHeight = window.innerHeight;
        const elementTop = item.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
          item.classList.add("opacity-100", "translate-y-0");
          item.classList.remove("opacity-0", "translate-y-10");
        }
      });
    }

    reveals.forEach((item) => {
      item.classList.add(
        "opacity-0",
        "translate-y-10",
        "transition-all",
        "duration-700",
        "ease-out",
      );
    });

    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);
}
