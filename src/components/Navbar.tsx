import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const menuItems = [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      href: "#",
      submenu: [
        { label: "Chairman Message", href: "/chairman-message" },
        { label: "Principal Message", href: "/principal-message" },
        { label: "School History", href: "/school-history" },
        { label: "Staff Members", href: "/staff-members" },
        { label: "Academic Calendar", href: "/academic-calender" },
      ],
    },
    {
      label: "Administration",
      href: "#",
      submenu: [
        { label: "Governance", href: "/governance" },
        { label: "Admissions", href: "/admissions" },
        { label: "Fee Structure", href: "/fee-structure" },
        { label: "Scholarships", href: "/scholarships" },
      ],
    },
    {
      label: "Rules",
      href: "#",
      submenu: [
        { label: "Code of Conduct", href: "/code-of-conduct" },
        { label: "School Policies", href: "/school-policies" },
      ],
    },
    {
      label: "Achievements",
      href: "#",
      submenu: [
        { label: "Sports", href: "/achievements/sports" },
        { label: "Academics", href: "/achievements/academics" },
        { label: "Cultural Events", href: "/achievements/cultural-events" },
      ],
    },
    { label: "Magazine", href: "/magazine" },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Contact Us",
      href: "/contact-us",
    },
    {
      label: "Disclosures",
      href: "#",
      submenu: [
        { label: "Mandatory Public Disclosure", href: "/mandatory-disclosure" },
        { label: "Fire NOC", href: "/fire-noc" },
      ],
    },
  ];

  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 shadow-lg" style={{ backgroundColor: "#800000" }}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center lg:justify-center h-16 md:h-20">
          {/* Desktop Menu - Center */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  className="text-sm font-medium text-white hover:bg-secondary hover:text-primary transition duration-300 px-3 py-2 rounded"
                  onClick={() => {
                    if (!item.submenu) {
                      navigate(item.href);
                    }
                  }}
                >
                  {item.label}
                </button>

                {/* Desktop Dropdown */}
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-56 bg-white text-primary shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-20">
                    {item.submenu.map((subitem, subindex) => (
                      <button
                        key={subindex}
                        onClick={() => navigate(subitem.href)}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-secondary hover:text-primary first:rounded-t-md last:rounded-b-md transition duration-200"
                      >
                        {subitem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Menu Button - Right Side */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white text-2xl hover:text-secondary transition duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-red-800 shadow-lg max-h-screen overflow-y-auto pb-4">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-red-700 last:border-b-0">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (!item.submenu) {
                        navigate(item.href);
                        setIsOpen(false);
                      }
                    }}
                    className="block px-4 py-3 text-base font-medium text-white hover:bg-red-700 transition duration-200 grow text-left"
                  >
                    {item.label}
                  </button>
                  {item.submenu && (
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="px-4 py-3 text-white hover:bg-red-700 transition duration-200"
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <FaChevronDown
                        className={`text-xs transition-transform duration-300 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {item.submenu && openDropdown === item.label && (
                  <div className="bg-red-700">
                    {item.submenu.map((subitem, subindex) => (
                      <button
                        key={subindex}
                        onClick={() => {
                          navigate(subitem.href);
                          setIsOpen(false);
                          setOpenDropdown(null);
                        }}
                        className="block w-full text-left px-8 py-2 text-sm text-white hover:bg-red-600 transition duration-200"
                      >
                        {subitem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
