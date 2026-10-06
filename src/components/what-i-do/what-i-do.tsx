import React from "react";

const SKILLS = [
  "MATH",
  "MODELING",
  "MACHINE LEARNING",
  "ANALYSIS",
  "PYTHON",
];

export function WhatIDo() {
  return (
    <section 
      id="work" 
      className="relative w-full min-h-screen bg-[#0e0e10] text-[#e3ded7] overflow-hidden flex flex-col justify-between p-8 md:p-14 lg:p-16 font-sans select-none border-t border-white/10 scroll-mt-0"
    >
      {/* Метка секции слева вверху */}
      <div className="relative z-10 pt-4">
        <span className="text-[11px] md:text-[12px] tracking-[0.45em] uppercase text-gray-400 font-semibold">
          WHAT I DO
        </span>
      </div>

      {/* Список слов */}
      <div className="relative z-10 my-auto flex flex-col w-full max-w-6xl mx-auto py-8">
        {SKILLS.map((skill, index) => (
          <div
            key={skill}
            className="group relative border-b border-white/10 py-3 md:py-5 flex items-center justify-between cursor-pointer transition-colors duration-300 hover:border-white/30"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#e3ded7]/80 group-hover:text-white transition-colors duration-300 font-serif">
              {skill}
            </h2>

            <span className="text-xs md:text-sm tracking-widest text-gray-500 font-mono">
              0{index + 1}
            </span>
          </div>
        ))}
      </div>

      {/* Переключатель звука справа внизу */}
      <div className="relative z-10 flex justify-end items-end w-full">
        <div className="text-[11px] tracking-[0.2em] uppercase font-bold text-gray-400 -rotate-90 origin-bottom-right translate-x-2">
          SOUND ON
        </div>
      </div>
    </section>
  );
}