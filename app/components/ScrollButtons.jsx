"use client";

import { useCallback, useState, useEffect } from "react";
import NavLink from "./NavLink";

export default function ScrollButtons() {
  const [activeSection, setActiveSection] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  // Funkce na scrollování do sekce s plynulým efektem
  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // Změna hash v URL
      window.history.pushState(null, "", `#${id}`);
    }
  }, []);

  // Použití IntersectionObserver k detekci, která sekce je v zorném poli
  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Seznam všech sekcí

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Pokud je sekce viditelná z více než 60 %, nastavíme ji jako aktivní
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Threshold určuje, kdy je sekce považována za viditelnou
    );

    sections.forEach((section) => {
      observer.observe(section); // Sledujeme každou sekci
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section); // Zrušíme sledování sekcí při odpojení komponenty
      });
    };
  }, []);

  return (
    <section className="hidden lg:flex lg:flex-col lg:gap-2 items-start mt-12 lg:mt-24">
      <NavLink
        href="#aboutme"
        onClick={() => scrollToSection("aboutme")}
        onMouseEnter={() => setHoveredButton("aboutme")}
        onMouseLeave={() => setHoveredButton(null)}
        className={`transition-all ease-in-out duration-100 md:hover:font-bold active:text-slate-100 ${
          activeSection === "aboutme" ? "font-bold text-slate-200" : ""
        }`}
        name={hoveredButton === "aboutme" ? "———— O mně" : "—— O mně"}
      />

      <NavLink
        href="#experience"
        onClick={() => scrollToSection("experience")}
        onMouseEnter={() => setHoveredButton("experience")}
        onMouseLeave={() => setHoveredButton(null)}
        className={`transition-all ease-in-out duration-100 md:hover:font-bold active:text-slate-100 ${
          activeSection === "experience" ? "font-bold text-slate-200" : ""
        }`}
        name={
          hoveredButton === "experience" ? "———— Zkušenosti" : "—— Zkušenosti"
        }
      />

      <NavLink
        href="#projects"
        onClick={() => scrollToSection("projects")}
        onMouseEnter={() => setHoveredButton("projects")}
        onMouseLeave={() => setHoveredButton(null)}
        className={`transition-all ease-in-out duration-100 md:hover:font-bold active:text-slate-100 ${
          activeSection === "projects" ? "font-bold text-slate-200" : ""
        }`}
        name={hoveredButton === "projects" ? "———— Projekty" : "—— Projekty"}
      />
    </section>
  );
}
