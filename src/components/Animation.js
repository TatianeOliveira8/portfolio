import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;

            if (target.classList.contains("fade-from-left")) {
              target.classList.add("animate-fadeInLeft");
            } else if (target.classList.contains("fade-from-right")) {
              target.classList.add("animate-fadeInRight");
            }

            observer.unobserve(target); // anima uma vez só
          }
        });
      },
      { threshold: 0.2 }
    );

    const elementos = document.querySelectorAll(".fade-from-left, .fade-from-right");
    elementos.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
