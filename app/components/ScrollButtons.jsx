'use client'; // Klientská komponenta

import { useCallback, useState } from "react";

export default function ScrollButtons() {
  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <section className="flex flex-col gap-2 items-start">
      <button
        onClick={() => scrollToSection("aboutme")}
        onMouseEnter={() => setHoveredButton("aboutme")}
        onMouseLeave={() => setHoveredButton(null)}
        className="transition-all ease-in-out duration-200 md:hover:font-bold active:text-slate-100"
      >
        {hoveredButton === "aboutme" ? "———— O mně" : "—— O mně"}
      </button>

      <button
        onClick={() => scrollToSection("experience")}
        onMouseEnter={() => setHoveredButton("experience")}
        onMouseLeave={() => setHoveredButton(null)}
        className="transition-all ease-in-out duration-200 md:hover:font-bold active:text-slate-100"
      >
        {hoveredButton === "experience" ? "———— Zkušenosti" : "—— Zkušenosti"}
      </button>

      <button
        onClick={() => scrollToSection("projects")}
        onMouseEnter={() => setHoveredButton("projects")}
        onMouseLeave={() => setHoveredButton(null)}
        className="transition-all ease-in-out duration-200 md:hover:font-bold active:text-slate-100"
      >
        {hoveredButton === "projects" ? "———— Projekty" : "—— Projekty"}
      </button>
    </section>
  );
}
