import { useNavigate } from "react-router-dom";
import { FaBook, FaTrophy, FaUsers, FaPhone, FaCalendar, FaGraduationCap } from "react-icons/fa";
import CrouselSection from "../sections/HomePage/CrouselSection";

const HomePage = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { icon: FaBook, label: "Academics", path: "/achievements/academics" },
    { icon: FaTrophy, label: "Sports", path: "/achievements/sports" },
    { icon: FaUsers, label: "Staff", path: "/staff-members" },
    { icon: FaCalendar, label: "Events", path: "/achievements/cultural-events" },
    { icon: FaPhone, label: "Contact", path: "/contact-us" },
    { icon: FaGraduationCap, label: "Admissions", path: "/admissions" },
  ];

  return (
    <div className="w-full">
      <CrouselSection />

      {/* Welcome Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-roman font-bold text-primary">Welcome to Dungarpur Public School</h2>
          <p className="text-lg font-roman text-gray-600 font-bold italic mb-4">In Pursuit of Excellence</p>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto italic">
            Dungarpur Public School, Dungarpur is committed to providing world-class education that fosters academic excellence, character development, and holistic growth. Our dedicated faculty and state-of-the-art facilities ensure every student reaches their full potential.
          </p>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="w-full py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-roman font-bold text-primary text-center mb-12">Quick Links</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => navigate(link.path)}
                className="p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center gap-3 text-primary cursor-pointer border-white border-2 hover:border-primary"
              >
                <link.icon className="text-4xl" />
                <span className="font-roman font-semibold text-lg">{link.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-roman font-bold text-primary text-center mb-12">Why Choose DPS?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Excellence", desc: "Consistent academic performance and achievements" },
              { title: "Holistic Growth", desc: "Sports, arts, and co-curricular activities" },
              { title: "Modern Facilities", desc: "Well-equipped labs and learning spaces" },
              { title: "Dedicated Staff", desc: "Experienced and caring faculty members" },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 border-l-4 border-primary">
                <h4 className="text-xl font-roman font-bold text-primary mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Grid Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-roman font-bold text-primary text-center mb-12">Important Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Principal's Message", path: "/principal-message" },
              { title: "Fee Structure", path: "/fee-structure" },
              { title: "Gallery", path: "/gallery" },
              { title: "Magazine", path: "/magazine" },
              { title: "School History", path: "/school-history" },
              { title: "Contact Us", path: "/contact-us" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:border-b-4 hover:border-primary transition-all duration-300 text-left cursor-pointer"
              >
                <h4 className="font-roman font-bold text-primary text-lg">{item.title}</h4>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;