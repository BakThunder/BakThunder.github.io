
export function HeaderNav() {
  return (
    <header className="fixed top-8 md:top-14 lg:top-16 right-8 md:right-14 lg:right-16 z-50">
      <nav className="flex flex-col items-end gap-2 text-[15px] md:text-[16px] tracking-[0.25em] uppercase font-bold text-gray-300">
        <a href="#about" className="hover:text-white transition-colors duration-200">
          ABOUT
        </a>
        <a href="#work" className="hover:text-white transition-colors duration-200">
          WORK
        </a>
        <a href="#contact" className="hover:text-white transition-colors duration-200">
          CONTACT
        </a>
      </nav>
    </header>
  );
}