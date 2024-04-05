import { IoCallSharp } from "react-icons/io5";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <div className="flex items-center gap-2 pt-2">
        <IoCallSharp size={20} /> +62 22 7234 248
      </div>
      <div className="flex items-center gap-2 pt-2">
        <FaFax size={20} />
        +62 22 7273 865
      </div>
      <div className="flex items-center gap-2 pt-2">
        <MdEmail size={20} /> info@newtronic-solution.com
      </div>
    </div>
  );
};

export default Contact;
