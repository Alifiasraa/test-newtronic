// import logo from "../images/logo.png";

const Navbar = ({ logo }) => {
  return (
    <header className="flex justify-between items-center h-16 w-full bg-[#67568c] z-100">
      <div className="">
        <img className="h-6 my-3" src={logo} alt="Logo Education Newtronic" />
      </div>

      <div>
        <ul className="flex flex-row gap-x-5 text-white ">
          <li>Beranda</li>
          <li>Tentang Kami</li>
          <li>Produk</li>
          <li>Layanan</li>
          <li>Blog</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
