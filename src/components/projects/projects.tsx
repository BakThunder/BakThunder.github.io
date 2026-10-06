
import React, { useState, useEffect } from "react";
import Image from "@/components/ui/image";
import { portfolioData, type ProjectItem } from "@/data/portfolio-data";

interface ProjectsProps {
  lang?: "ru";
}

export function Projects({ lang = "ru" }: ProjectsProps) {
  const data = portfolioData[lang].projects;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState<ProjectItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-[#0e0e10] text-[#e3ded7] overflow-hidden flex flex-col justify-between p-8 md:p-14 lg:p-16 font-sans select-none border-t border-white/10 scroll-mt-0"
    >
      <div className="relative z-10 pt-4 mb-8">
        <span className="text-[11px] md:text-[12px] tracking-[0.45em] uppercase text-gray-400 font-semibold block mb-2">
          {data.subtitle}
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight font-serif text-white">
          {data.titleMain} <span className="text-[#ff4d27]">{data.titleAccent}</span>
        </h2>
      </div>

      <div className="relative z-10 my-auto flex flex-col w-full max-w-6xl mx-auto py-4">
        {data.items.map((proj: ProjectItem) => (
          <div
            key={proj.id}
            onMouseEnter={() => setHoveredProject(proj)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => setSelectedProject(proj)}
            className="group border-b border-white/10 py-6 md:py-8 flex flex-col md:flex-row md:items-center justify-between cursor-pointer transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <h3 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight font-serif text-[#e3ded7] group-hover:text-[#ff4d27] transition-colors duration-300">
                {proj.title}
              </h3>
              <span className="text-[#ff4d27] text-2xl opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline">
                ↗
              </span>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-6 mt-3 md:mt-0">
              <span className="px-3 py-1 text-xs uppercase font-mono tracking-wider border border-white/20 text-gray-300 rounded-full">
                {proj.tag}
              </span>
              <span className="text-xs md:text-sm tracking-widest text-gray-500 font-mono">
                {proj.number} / {proj.year}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Превью при наведении */}
      {hoveredProject && (
        <div
          className="pointer-events-none fixed z-40 hidden md:flex flex-col items-center justify-center w-64 h-40 bg-[#18181c] border border-[#ff4d27]/40 rounded-xl shadow-2xl overflow-hidden transition-transform duration-75 ease-out"
          style={{
            left: `${mousePos.x + 20}px`,
            top: `${mousePos.y - 80}px`,
          }}
        >
          {hoveredProject.images && hoveredProject.images.length > 0 ? (
            <Image
              src={hoveredProject.images[0]}
              alt={hoveredProject.title}
              fill
              className="object-cover"
            />
          ) : (
            <span className="text-xs font-mono text-[#ff4d27]">
              {hoveredProject.previewPlaceholder}
            </span>
          )}
        </div>
      )}

      {/* Модальное окно */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          <div className="relative w-full max-w-3xl bg-[#141417] border border-white/20 rounded-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-white text-2xl hover:text-[#ff4d27] transition-colors"
            >
              ✕
            </button>

            <span className="text-xs font-mono text-[#ff4d27] tracking-widest uppercase block mb-2">
              {selectedProject.tag} — {selectedProject.year}
            </span>

            <h2 className="text-3xl sm:text-5xl font-black uppercase font-serif text-white mb-4">
              {selectedProject.title}
            </h2>

            <p className="text-gray-300 text-sm sm:text-base font-light mb-6">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 text-xs uppercase font-mono bg-white/5 border border-white/10 text-gray-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Вывод картинок вместо IMAGE PLACEHOLDER */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {selectedProject.images.map((imgUrl, iIdx) => (
                  <div
                    key={iIdx}
                    className="relative w-full h-48 bg-[#1e1e24] border border-white/10 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={imgUrl}
                      alt={`${selectedProject.title} screenshot ${iIdx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              <a
                href={selectedProject.liveUrl || "#"}
                onClick={(e) => !selectedProject.liveUrl && e.preventDefault()}
                className="px-6 py-3 bg-[#ff4d27] hover:bg-[#e03e1a] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-colors"
              >
                VIEW LIVE
              </a>
              <a
                href={selectedProject.githubUrl || "#"}
                onClick={(e) => !selectedProject.githubUrl && e.preventDefault()}
                className="px-6 py-3 border border-white/20 hover:border-white text-white text-xs font-bold uppercase tracking-widest rounded-full transition-colors"
              >
                GITHUB
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}