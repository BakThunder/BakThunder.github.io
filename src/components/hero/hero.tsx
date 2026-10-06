import Image from "@/components/ui/image";

export function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#0e0e10] text-[#e3ded7] overflow-hidden flex flex-col justify-between p-8 md:p-14 lg:p-16 font-sans select-none">
      
      {/* 1. Верхний бар с логотипом */}
      <header className="relative z-20 flex justify-between items-start w-full">
        <div className="text-white hover:opacity-80 transition-opacity cursor-pointer">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.83.62-3.52 1.67-4.87l11.2 11.2C15.52 19.38 13.83 20 12 20zm6.33-3.13L7.13 5.67C8.48 4.62 10.17 4 12 4c4.41 0 8 3.59 8 8 0 1.83-.62 3.52-1.67 4.87z"/>
          </svg>
        </div>
      </header>

      {/* 2. Центральный заголовок */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto">
        <span className="text-[12px] md:text-[14px] tracking-[0.5em] uppercase text-gray-400 mb-6 font-semibold">
          BAKDAULET
        </span>

        <div className="relative">
          <span className="absolute -left-6 md:-left-10 top-2 md:top-4 w-3 h-3 md:w-4 md:h-4 bg-[#ff4d27] rounded-full hidden sm:block" />

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] font-black leading-[0.88] tracking-tighter uppercase font-serif text-white">
            BUILDING <br />
            <span className="text-[#ff4d27]">GREAT</span> <br />
            THINGS <br />
            SINCE <br />
            2022
          </h1>
        </div>
      </div>

      {/* 3. Портрет на заднем плане */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <Image
          src="/images/bg-portrait.png"
          alt="Portrait"
          fill
          priority
          className="object-cover object-center filter grayscale contrast-125 brightness-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-transparent to-[#0e0e10]/60 opacity-80" />
      </div>

      {/* 4. Нижняя панель */}
      <footer className="relative z-20 flex justify-end items-end w-full">
        <div className="text-[11px] tracking-[0.2em] uppercase font-bold text-gray-400 -rotate-90 origin-bottom-right translate-x-2">
          SOUND ON
        </div>
      </footer>

    </section>
  );
}