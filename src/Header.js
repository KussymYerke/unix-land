import * as React from 'react';

function HamburgerMenu({ toggleMenu }) {
  return (
    <button className="md:hidden" onClick={toggleMenu}>
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  );
}

function ImageSection() {
  return (
    <figure className="shrink-0 aspect-[3.85] w-[249px] max-[600px]:w-[150px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f87c332b36c17d7a55d477b6739721438edf484a46b8ff87f3a6bab84a39ea5c?apiKey=f0565c05649044c09c5a9cc7ba5651cb&"
        alt="Example image from b.io"
        className="max-w-full"
      />
    </figure>
  );
}

function NavMenu({ isOpen, toggleMenu }) {
  return (
    <div className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
      <button onClick={toggleMenu} className="absolute top-5 right-5">
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="flex flex-col items-start justify-between h-full p-5">
        <header>Контакты</header>
        <header>Форма для обратной связи</header>
      </div>
    </div>
  );
}

function DesktopNav() {
  return (
    <div className="hidden md:flex flex-col md:flex-row justify-end gap-10 items-center w-full">
      <header>Контакты</header>
      <header>Форма для обратной связи</header>
    </div>
  );
}

function Header() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <div className="flex justify-center max-w-full mx-auto items-center px-16 py-6 text-2xl text-center text-black backdrop-blur-[5px] bg-white bg-opacity-90 md:px-5 overflow-x-hidden max-[600px]:px-8">
      <div className="flex gap-5 justify-between w-full">
        <ImageSection />
        <HamburgerMenu toggleMenu={toggleMenu} />
        <DesktopNav />
        <NavMenu className="absolute z-50" isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
}

export default Header;
