
import React, { useState } from "react";
import { portfolioData, type SkillCategory } from "@/data/portfolio-data";

interface SkillsetProps {
  lang?: "ru" | "en" | "kk";
}

export function Skillset({ lang = "ru" }: SkillsetProps) {
  const data = portfolioData[lang].skillset;
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    "sk-1": true // первая категория открыта по умолчанию
  });

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="skillset"
      className="relative w-full min-h-screen bg-[#0e0e10] text-[#e3ded7] overflow-hidden flex flex-col justify-between p-8 md:p-14 lg:p-16 font-sans select-none border-t border-white/10 scroll-mt-0"
    >
      {/* Шапка секции */}
      <div className="relative z-10 pt-4 mb-6">
        <span className="text-[11px] md:text-[12px] tracking-[0.45em] uppercase text-gray-400 font-semibold block mb-2">
          {data.subtitle}
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight font-serif text-white">
          {data.titleMain} <span className="text-[#ff4d27]">{data.titleAccent}</span>
        </h2>
      </div>

      {/* Бегущая строка (Marquee) */}
      <div className="my-6 relative w-full overflow-hidden border-y border-white/10 py-4 group">
        {/* Полоса 1 - Движение влево */}
        <div className="flex whitespace-nowrap gap-6 animate-marquee group-hover:[animation-play-state:paused]">
          {[...data.marquee, ...data.marquee].map((word, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <span className="text-xl md:text-3xl font-black tracking-widest text-[#e3ded7]/90 font-serif uppercase">
                {word}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#ff4d27]" />
            </div>
          ))}
        </div>
      </div>

      {/* Категории навыков */}
      <div className="relative z-10 my-auto flex flex-col w-full max-w-6xl mx-auto py-4">
        {data.categories.map((cat: SkillCategory) => {
          const isOpen = !!openCategories[cat.id];

          return (
            <div key={cat.id} className="border-b border-white/10">
              <button
                onClick={() => toggleCategory(cat.id)}
                className="w-full py-5 md:py-6 flex items-center justify-between text-left cursor-pointer focus:outline-none group"
              >
                <div className="flex items-center gap-4">
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight font-serif text-white group-hover:text-[#ff4d27] transition-colors">
                    {cat.title}
                  </h3>
                </div>
                <span className="text-xs md:text-sm tracking-widest text-gray-500 font-mono">
                  {cat.number}
                </span>
              </button>

              {/* Раскрывающийся блок с таблетками */}
              <div
                className={`overflow-hidden transition-all duration-400 ${
                  isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group/pill relative px-4 py-2 border border-white/20 rounded-full text-xs md:text-sm font-medium tracking-wide text-gray-200 hover:bg-[#ff4d27] hover:border-[#ff4d27] hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
                    >
                      <span>{skill.name}</span>
                      {skill.isLearning && (
                        <span className="px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase bg-[#ff4d27] text-white rounded-full group-hover/pill:bg-white group-hover/pill:text-[#ff4d27] transition-colors">
                          LEARNING
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Личные качества */}
      <div className="w-full max-w-6xl mx-auto mt-8 border-t border-white/10 pt-6">
        {data.qualities.map((q, idx) => (
          <div
            key={idx}
            className="py-3 border-b border-white/10 text-2xl sm:text-3xl md:text-4xl font-black font-serif tracking-tight text-white/80 hover:text-[#ff4d27] transition-colors uppercase"
          >
            {q}
          </div>
        ))}
      </div>

      {/* Переключатель звука */}
      <div className="relative z-10 flex justify-end items-end w-full pt-4">
        <div className="text-[11px] tracking-[0.2em] uppercase font-bold text-gray-400 -rotate-90 origin-bottom-right translate-x-2">
          SOUND ON
        </div>
      </div>
    </section>
  );
}