const Navigation = () => {
  const navListTitle = [
    "Anasayfa",
    "Kargom Nerede",
    "Ücret Hesapla",
    "Hakkımızda",
    " İletişim",
  ];
  return (
    <>
      {navListTitle.map((title, index) => (
        <li className='group' key={index}>
          <a className='group-hover:opacity-80' href=''>
            {title}
          </a>
          <div className='group-hover:w-full w-0 bg-red'></div>
        </li>
      ))}
    </>
  );
};

export default Navigation;
