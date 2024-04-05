import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";

const Socials = () => {
  return (
    <div>
      <div className="flex items-center gap-2 pt-2">
        <FaFacebookF size={20} /> Facebook
      </div>
      <div className="flex items-center gap-2 pt-2">
        <FaInstagram size={20} /> Instagram
      </div>
      <div className="flex items-center gap-2 pt-2">
        <FaXTwitter size={20} /> Twitter
      </div>
      <div className="flex items-center gap-2 pt-2">
        <TfiYoutube size={20} /> Youtube
      </div>
    </div>
  );
};

export default Socials;
