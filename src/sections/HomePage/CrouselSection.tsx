import { useEffect, useState } from "react";

interface Slide {
  id: number;
  image: string;
}

  const slides: Slide[] = [
    {
      id: 1,
      image: "/assets/img/img1.jpeg",
    },
    {
      id: 2,
      image: "/assets/img/img2.jpeg",
    },
    {
      id: 3,
      image: "/assets/img/img3.jpeg",
    },
    {
      id: 4,
      image: "/assets/img/img4.jpeg",
    },
    {
      id: 5,
      image: "/assets/img/img5.jpeg",
    },
    {
      id: 6,
      image: "/assets/img/img6.jpeg",
    },
    {
      id: 7,
      image: "/assets/img/img7.jpeg",
    },
    {
      id: 8,
      image: "/assets/img/img8.jpeg",
    },
  ];

const CrouselSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative w-full h-96 sm:h-125 md:h-150 lg:h-175 overflow-hidden bg-gray-900">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrouselSection;
