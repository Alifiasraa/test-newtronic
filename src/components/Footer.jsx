import Contact from "./Contact";
import Location from "./Location";
import Socials from "./Socials";

const Footer = ({ logo }) => {
  return (
    <div className="bg-[#67568c] text-white p-6">
      <div className=" xl:grid grid-cols-2">
        <Location />
        <div className="flex gap-x-16">
          <div>
            <h4 className="font-bold text-xl mt-5 xl:mt-0">Ikuti Kami</h4>
            <Socials />
          </div>
          <div>
            <h4 className="font-bold text-xl mt-5 xl:mt-0">Kontak</h4>
            <Contact />
          </div>
        </div>
      </div>
      <hr className="mt-5" />
      {/* copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-center pt-2">
          <img
            className="my-3 h-10"
            src={logo}
            alt="Logo Education Newtronic"
          />
        </div>
        <p className="text-center text-sm md:w-1/2 md:text-right">
          Hak Cipta © 2024 CV Newtronic Solution. Semua hak cipta dilindungi
          oleh undang-undang.
        </p>
      </div>
    </div>
  );
};

export default Footer;
