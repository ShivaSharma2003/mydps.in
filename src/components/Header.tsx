import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white w-full shadow-md">
      <div className="max-w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-6 py-4 md:py-6 lg:py-8">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="shrink-0 hover:opacity-80 transition duration-300"
            aria-label="Go to home"
          >
            <img
              src="/logo/logo.png"
              alt="DPS LOGO"
              className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 object-cover rounded-lg"
            />
          </button>

          {/* Header Content */}
          <div className="flex flex-col items-center justify-center md:items-start flex-1 text-center md:text-left">
            <div>
              <p className="w-full lg:text-right lg:text-sm sm:text-xl md:text-2xl font-roman text-primary italic">
                In Persuit of Excellence
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-roman font-bold text-primary leading-tight">
                DUNGARPUR PUBLIC SCHOOL
              </h1>
              <div className="flex items-center justify-center">
                <p className="w-full lg:text-center font-roman text-primary font-medium sm:text-md lg:-mt-3 italic">
                  A Senior Secondary Co-Educational English Medium School
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
