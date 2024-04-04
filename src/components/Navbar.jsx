const Navbar = ({ logo }) => {
  return (
    <div className="z-100 w-full bg-[#67568c] shadow-xl ">
      <div className="mx-6 flex h-16 items-center justify-between">
        {/* logo */}
        <div className="">
          <img className="my-3 h-6" src={logo} alt="Logo Education Newtronic" />
        </div>

        {/* nav */}
        <nav>
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

        {/* button */}
        <button className="rounded-3xl border bg-white px-4 py-1 font-semibold hover:bg-[#ff6e6c] hover:text-white">
          Mulai Belajar
        </button>
      </div>
    </div>
  );
};

export default Navbar;
