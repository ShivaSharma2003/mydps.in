import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChat = () => {
  const phoneNumber = "+919521019058";
  const message = "Hello! I would like to inquire about DPS Dungarpur.";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={handleWhatsAppClick}
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        style={{ backgroundColor: "#25D366" }}
        title="Chat with us on WhatsApp"
      >
        {/* Pulsing background effect */}
        <span
          className="absolute inset-0 rounded-full opacity-75 animate-ping"
          style={{ backgroundColor: "#25D366" }}
        ></span>

        {/* WhatsApp Icon */}
        <FaWhatsapp className="text-white text-2xl md:text-3xl relative z-10" />

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-sm font-medium">
          Chat with us
        </div>
      </button>
    </div>
  );
};

export default WhatsAppChat;
