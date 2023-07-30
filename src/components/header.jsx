import { useState } from "react";
import HamburgerIcon from "./icons/HamburgerIcon";
import SiteLogo from "./icons/SiteLogo";
import HamburgerMenu from "./hamburger-menu";
import Close from "./icons/Close";
import Navigation from "./navigation";

const Header = () => {
  const [openHamburgerMenu, setOPenHambugerMenu] = useState(false);
  console.log(openHamburgerMenu);

  const showHamburgerMenu = () => setOPenHambugerMenu(!openHamburgerMenu); //

  return (
    <>
      <header className='bg-black opacity-75 h-16 px-2 md:px-8 overflow-hidden items-center flex justify-between '>
        <SiteLogo />

        <nav className="hidden md:block">
          <ul className="flex text-gray-300 gap-6">
            <Navigation />
          </ul>
        </nav>

        <button
          className='hover:opacity-80 z-50 md:hidden '
          onClick={showHamburgerMenu}
        >
          {openHamburgerMenu ? (
            <Close hamburgerColor='#FF914D' />
          ) : (
            <HamburgerIcon hamburgerColor='#FF914D' />
          )}
        </button>
        {openHamburgerMenu && <HamburgerMenu />}
      </header>
    </>
  );
};

export default Header;
