import Navigation from "./navigation";

const HamburgerMenu = () => {
  return (
    <div className='fixed md:hidden bg-black text-white opacity-80 top-0 bottom-0 right-0 left-0'>
      <ul className='flex flex-col items-center gap-4 py-32 text-xl '>
        <Navigation />
      </ul>
    </div>
  );
};

export default HamburgerMenu;
