
import React, { useState, useEffect } from "react";
import Image from "@/components/ui/image";
import { portfolioData, type ExperienceItem } from "@/data/portfolio-data";

interface ExperienceProps {
  lang?: "ru" | "en" | "kk";
}

export function Experience({ lang = "ru" }: ExperienceProps) {
  const data = portfolioData[lang].experience;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [modalImageIndex, setModalImageIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const galleryItems = data.items[2]?.gallery || [];

  const handlePrevImage = () => {
    if (modalImageIndex === null) return;
    setModalImageIndex((prev) => (prev === 0 ? galleryItems.length - 1 : (prev as number) - 1));
  };

  const handleNextImage = () => {
    if (modalImageIndex === null) return;
    setModalImageIndex((prev) => (prev === galleryItems.length - 1 ? 0 : (prev as number) + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalImageIndex === null) return;
      if (e.key === "Escape") setModalImageIndex(null);
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalImageIndex]);

  return (
    <section
      id="experience"
      className="relative w-full min-h-screen bg-[#0e0e10] text-[#e3ded7] overflow-hidden flex flex-col justify-between p-8 md:p-14 lg:p-16 font-sans select-none border-t border-white/10 scroll-mt-0"
    >
      {/* Шапка секции */}
      <div className="relative z-10 pt-4 mb-8">
        <span className="text-[11px] md:text-[12px] tracking-[0.45em] uppercase text-gray-400 font-semibold block mb-2">
          {data.subtitle}
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight font-serif text-white">
          {data.titleMain} <span className="text-[#ff4d27]">{data.titleAccent}</span>
        </h2>
      </div>

      {/* Список Experience (Аккордеон) */}
      <div className="relative z-10 my-auto flex flex-col w-full max-w-6xl mx-auto py-4">
        {data.items.map((item: ExperienceItem, index: number) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.id}
              className="border-b border-white/10 transition-colors duration-300"
            >
              {/* Кликабельный заголовок */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-6 md:py-8 flex items-center justify-between text-left group cursor-pointer focus:outline-none"
              >
                <div className="flex items-center gap-4 md:gap-8 transition-transform duration-300 group-hover:translate-x-3">
                  <h3
                    className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight transition-colors duration-300 font-serif ${
                      isOpen
                        ? "text-[#ff4d27]"
                        : "text-[#e3ded7]/80 group-hover:text-[#ff4d27]"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4 text-right">
                  <span className="text-xs md:text-sm tracking-widest text-gray-400 font-mono hidden sm:inline">
                    {item.period}
                  </span>
                  <span className="text-xs md:text-sm tracking-widest text-gray-500 font-mono">
                    {item.number}
                  </span>
                </div>
              </button>

              {/* Раскрывающееся содержимое */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-[1000px] opacity-100 pb-8" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-300 text-sm md:text-base max-w-3xl mb-6 font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Теги */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 text-xs tracking-wider uppercase bg-white/5 border border-white/10 text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Главное изображение (для 01 и 02) */}
                {item.mainImage && (
                  <div className="relative w-full max-w-md h-64 border border-white/10 rounded-lg overflow-hidden mb-6">
                    <Image
                      src={item.mainImage}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Галерея карточек (для строки 03) */}
                {item.gallery && item.gallery.length > 0 && (
                  <div className="mt-6">
                    <span className="text-xs tracking-widest uppercase text-gray-400 block mb-3 font-mono">
                      GALLERY ({item.gallery.length} PHOTOS)
                    </span>
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/20">
                      {item.gallery.map((photo, pIdx) => (
                        <div
                          key={photo.id}
                          onClick={() => setModalImageIndex(pIdx)}
                          className="relative flex-none w-36 h-48 sm:w-44 sm:h-56 bg-[#18181c] border border-white/10 rounded-lg overflow-hidden cursor-pointer group/card transition-all duration-300 hover:scale-105 hover:border-[#ff4d27]"
                        >
                          <Image
                            src={photo.path}
                            alt={photo.title}
                            fill
                            className="object-cover grayscale group-hover/card:grayscale-0 transition-all duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Полноэкранная галерея (Lightbox) */}
      {modalImageIndex !== null && galleryItems.length > 0 && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          {/* Кнопка закрытия */}
          <button
            onClick={() => setModalImageIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl hover:text-[#ff4d27] transition-colors z-50 p-2"
          >
            ✕
          </button>

          {/* Стрелка влево */}
          <button
            onClick={handlePrevImage}
            className="absolute left-4 text-white text-4xl hover:text-[#ff4d27] transition-colors z-50 p-2"
          >
            ‹
          </button>

          {/* Картинка */}
          <div className="relative w-full max-w-4xl h-[75vh] border border-white/20 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={galleryItems[modalImageIndex].path}
              alt={galleryItems[modalImageIndex].title}
              fill
              className="object-contain"
            />
          </div>

          {/* Стрелка вправо */}
          <button
            onClick={handleNextImage}
            className="absolute right-4 text-white text-4xl hover:text-[#ff4d27] transition-colors z-50 p-2"
          >
            ›
          </button>
        </div>
      )}

      {/* Переключатель звука справа внизу */}
      <div className="relative z-10 flex justify-end items-end w-full pt-4">
        <div className="text-[11px] tracking-[0.2em] uppercase font-bold text-gray-400 -rotate-90 origin-bottom-right translate-x-2">
          SOUND ON
        </div>
      </div>
    </section>
  );
}