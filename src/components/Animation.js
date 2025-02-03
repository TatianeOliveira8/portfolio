import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("fade-from-left")) {
              entry.target.classList.add("animate-fadeInLeft");
            } else if (entry.target.classList.contains("fade-from-right")) {
              entry.target.classList.add("animate-fadeInRight");
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".fade-from-left").forEach((element) => observer.observe(element));
    document.querySelectorAll(".fade-from-right").forEach((element) => observer.observe(element));

    return () => observer.disconnect(); // Limpa o observer quando o componente for desmontado
  }, []);
}
