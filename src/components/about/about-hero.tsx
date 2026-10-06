
export function AboutHero() {
  return (
    <section className="relative w-full h-screen bg-[#0e0e10] text-[#e3ded7] overflow-hidden flex flex-col justify-between p-8 font-sans">
      
      {/* 1. Верхняя навигация */}
      <header className="relative z-20 flex justify-between items-start w-full">
        {/* Оранжевый логотип */}
        <div className="text-[#ff4d27]">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.83.62-3.52 1.67-4.87l11.2 11.2C15.52 19.38 13.83 20 12 20zm6.33-3.13L7.13 5.67C8.48 4.62 10.17 4 12 4c4.41 0 8 3.59 8 8 0 1.83-.62 3.52-1.67 4.87z"/>
          </svg>
        </div>

        {/* Меню */}
        <nav className="flex flex-col items-end gap-1 text-xs tracking-widest uppercase font-semibold text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
          <a href="#work" className="hover:text-white transition-colors">WORK</a>
          <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
        </nav>
      </header>

      {/* 2. Текстовый блок по центру */}
      <div className="relative z-10 max-w-5xl mx-auto my-auto text-left">
        {/* Подзаголовок */}
        <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-semibold block mb-6">
          ABOUT ME
        </span>

        {/* Основной текст с оранжевым акцентом */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold leading-[1.05] tracking-tight">
          I’m a <span className="text-[#ff4d27]">selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.
        </h1>
      </div>

      {/* 3. Нижняя панель */}
      <footer className="relative z-20 flex justify-between items-end w-full">
        {/* Иконки соцсетей слева */}
        <div className="flex flex-col gap-5 text-gray-400">
          <a href="#" className="hover:text-white transition-colors">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>

        {/* Переключатель звука справа */}
        <div className="text-[10px] tracking-widest uppercase font-semibold text-gray-400 -rotate-90 origin-bottom-right mb-4 select-none">
          SOUND ON
        </div>
      </footer>

    </section>
  );
}