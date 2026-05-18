import {
  FaChevronRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const usefulLinks = [
    "Notices",
    "Admissions",
    "Fee Structure",
    "TC",
    "Syllabus",
  ];

  const quickLinks = [
    "Virtual Tour",
    "Diamond Jubilee",
    "Magazine",
    "CBSE Circulars",
  ];

  const galleryImages = [
    { id: 1, src: "/assets/img/img9.jpeg", alt: "Gallery 1" },
    { id: 2, src: "/assets/img/img10.jpeg", alt: "Gallery 1" },
    { id: 3, src: "/assets/img/img11.jpeg", alt: "Gallery 1" },
    { id: 4, src: "/assets/img/img12.jpeg", alt: "Gallery 1" },
    { id: 5, src: "/assets/img/img8.jpeg", alt: "Gallery 1" },
    { id: 6, src: "/assets/img/img7.jpeg", alt: "Gallery 1" },
  ];

  const socialLinks = [
    { icon: FaFacebook, label: "Facebook" },
    { icon: FaTwitter, label: "Twitter" },
    { icon: FaInstagram, label: "Instagram" },
    { icon: FaLinkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Logo and Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Left Column - Logo and School Info */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src="/logo/logo.png"
              alt="DPS Logo"
              className="h-24 w-24 md:h-28 md:w-28 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            />
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-roman font-bold leading-tight">
                Dungarpur
                <br />
                Public School
              </h3>
              <p className="text-xs text-gray-300 mt-2 font-medium">
                In Pursuit of Excellence
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Dungarpur, Rajasthan
              </p>
            </div>
            {/* Social Links */}
            <div className="flex">
              {socialLinks.map((social, index) => {
                const IconComponent: React.FC<React.SVGProps<SVGSVGElement>> = social.icon;
                return (
                  <a
                    key={index}
                    href="#"
                    aria-label={social.label}
                    className="p-2 bg-opacity-20 rounded-full hover:bg-secondary hover:text-primary transition duration-300"
                  >
                    <IconComponent className="text-lg" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Useful Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="text-secondary mr-2">►</span>
              Useful Links
            </h3>
            <ul className="space-y-3">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center hover:text-secondary transition duration-300 text-gray-100"
                  >
                    <FaChevronRight className="mr-2 text-xs" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="text-secondary mr-2">►</span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center hover:text-secondary transition duration-300 text-gray-100"
                  >
                    <FaChevronRight className="mr-2 text-xs" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Photo Gallery Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="text-secondary mr-2">►</span>
              Photo Gallery
            </h3>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="w-full h-20 bg-gray-400 rounded overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                </div>
              ))}
            </div>
            <a
              href="/gallery"
              className="inline-flex items-center text-secondary hover:text-yellow-200 font-semibold"
            >
              View All
              <FaChevronRight className="ml-2 text-xs" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-20 my-8"></div>

        {/* Bottom Section - School Code and Copyright */}
        <div className="text-center flex flex-col gap-3">
          <div>
            <h1 className="font-roman text-sm md:text-base">
              Affiliated to CBSE, New Delhi
            </h1>
          </div>
          <div className="text-sm">
            <span className="font-semibold font-roman">School Code: </span>
            <span className="font-bold text-secondary font-roman tracking-wider">
              1730171
            </span>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed">
            © Copyright {new Date().getFullYear()} All rights reserved by
            Dungarpur Public School, Dungarpur, Rajasthan. Powered by{" "}
            <span className="font-medium font-roman text-secondary">
              Nebula Technologies Labs Pvt. Ltd.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
