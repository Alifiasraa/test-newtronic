import { useState } from "react";

const Navbar = ({ logo }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="z-100 w-full bg-[#67568c] shadow-xl">
      <div className="mx-6 flex h-16 items-center justify-between">
        {/* logo */}
        <div>
          <img className="my-3 h-6" src={logo} alt="Logo Education Newtronic" />
        </div>

        {/* nav */}
        <nav className="hidden md:block">
          <ul className="grid grid-cols-5 divide-x text-center text-white ">
            <li className="px-3 text-center hover:cursor-pointer hover:text-[#ff6e6c]">
              Kelas
            </li>
            <li className="px-3 text-center hover:cursor-pointer hover:text-[#ff6e6c]">
              Langganan
            </li>
            <li className="px-3 text-center hover:cursor-pointer hover:text-[#ff6e6c]">
              Program
            </li>
            <li className="px-3 text-center hover:cursor-pointer hover:text-[#ff6e6c]">
              Event
            </li>
            <li className="px-3 text-center hover:cursor-pointer hover:text-[#ff6e6c]">
              Lainnya
            </li>
          </ul>
        </nav>

        {/* hamburger menu */}
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* button */}
        <button className="rounded-3xl border bg-white text-[#67568c] px-4 py-1 font-semibold hover:bg-[#ff6e6c] hover:text-white hidden md:block">
          Mulai Belajar
        </button>
      </div>

      {/* mobile menu */}
      {showMenu && (
        <div className="md:hidden bg-[#67568c] text-white py-4 px-6 ">
          <ul className="text-center divide-y">
            <li className="py-2">Kelas</li>
            <li className="py-2">Langganan</li>
            <li className="py-2">Program</li>
            <li className="py-2">Event</li>
            <li className="py-2">Lainnya</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
