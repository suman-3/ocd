import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingContactButtons = () => {
  return (
    <div className="fixed top-40 left-0 z-50 flex flex-col gap-1.5">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/9198XXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#ff0000] p-3 shadow-lg hover:scale-105 transition"
      >
        <FaWhatsapp size={28} color="#ffffff" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+9198XXXXXXX"
        className="bg-[#ffffff] p-3 shadow-lg hover:scale-105 transition"
      >
        <FaPhoneAlt size={26} color="#ff0000" />
      </a>
    </div>
  );
};

export default FloatingContactButtons;
