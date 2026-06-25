import { useEffect, useState } from "react";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";

const AdmissionPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      src: "/assets/img/admission.jpeg",
      alt: "Admission announcement",
      label: "Admission",
    },
    {
      src: "/assets/img/medical-checkup.jpeg",
      alt: "Medical checkup announcement",
      label: "Medical Checkup",
    },
  ];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [isOpen, slides.length]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-70 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close admission popup"
          className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-primary shadow-md transition-transform duration-300 hover:scale-110"
        >
          <FaTimes />
        </button>

        <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-primary p-6 text-white md:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Admissions Open</p>
            <h2 className="mb-4 text-3xl font-roman font-bold leading-tight md:text-4xl">
              Join DPS Dungarpur for the new admission cycle
            </h2>
            <p className="mb-6 text-sm leading-6 text-white/90 md:text-base">
              View the admission announcement and use the image below for quick reference. Close this popup anytime to continue browsing.
            </p>

            <a
              href="/admissions"
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-3 font-semibold text-primary transition-all duration-300 hover:opacity-90"
            >
              Go to Admissions
              <FaExternalLinkAlt className="text-sm" />
            </a>
          </div>

          <div className="bg-white p-4 md:p-5">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={slides[activeSlide].src}
                alt={slides[activeSlide].alt}
                className="h-full w-full object-cover transition-opacity duration-700"
              />
              <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold tracking-wide text-white">
                {slides[activeSlide].label}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              {slides.map((slide, index) => (
                <span
                  key={slide.label}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${index === activeSlide ? "bg-primary w-6" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPopup;