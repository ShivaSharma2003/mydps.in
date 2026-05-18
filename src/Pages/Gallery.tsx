import { FaCamera, FaCalendar, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: "all", name: "All", count: 32 },
    { id: "sports", name: "Sports", count: 8 },
    { id: "cultural", name: "Cultural Events", count: 8 },
    { id: "academic", name: "Academic", count: 8 },
    { id: "events", name: "School Events", count: 8 },
  ];

  const galleryImages = [
    // Sports
    { id: 1, category: "sports", title: "Inter-School Cricket Tournament", image: "/assets/img/img1.jpeg", date: "March 2024" },
    { id: 2, category: "sports", title: "Annual Sports Day", image: "/assets/img/img2.jpeg", date: "February 2024" },
    { id: 3, category: "sports", title: "Basketball Championship", image: "/assets/img/img3.jpeg", date: "January 2024" },
    { id: 4, category: "sports", title: "Swimming Gala", image: "/assets/img/img4.jpeg", date: "December 2023" },
    { id: 5, category: "sports", title: "Volleyball Tournament", image: "/assets/img/img5.jpeg", date: "November 2023" },
    { id: 6, category: "sports", title: "Badminton Championship", image: "/assets/img/img6.jpeg", date: "October 2023" },
    { id: 7, category: "sports", title: "Athletics Meet", image: "/assets/img/img7.jpeg", date: "September 2023" },
    { id: 8, category: "sports", title: "Sports Awards Ceremony", image: "/assets/img/img8.jpeg", date: "August 2023" },

    // Cultural Events
    { id: 9, category: "cultural", title: "Diwali Celebration", image: "/assets/img/img1.jpeg", date: "November 2024" },
    { id: 10, category: "cultural", title: "Holi Festival", image: "/assets/img/img2.jpeg", date: "March 2024" },
    { id: 11, category: "cultural", title: "Dance Performance", image: "/assets/img/img3.jpeg", date: "February 2024" },
    { id: 12, category: "cultural", title: "Drama Show", image: "/assets/img/img4.jpeg", date: "January 2024" },
    { id: 13, category: "cultural", title: "Music Concert", image: "/assets/img/img5.jpeg", date: "December 2023" },
    { id: 14, category: "cultural", title: "Fashion Show", image: "/assets/img/img6.jpeg", date: "November 2023" },
    { id: 15, category: "cultural", title: "Art Exhibition", image: "/assets/img/img7.jpeg", date: "October 2023" },
    { id: 16, category: "cultural", title: "Cultural Fest", image: "/assets/img/img8.jpeg", date: "September 2023" },

    // Academic
    { id: 17, category: "academic", title: "Science Fair", image: "/assets/img/img1.jpeg", date: "March 2024" },
    { id: 18, category: "academic", title: "Math Competition", image: "/assets/img/img2.jpeg", date: "February 2024" },
    { id: 19, category: "academic", title: "Model United Nations", image: "/assets/img/img3.jpeg", date: "January 2024" },
    { id: 20, category: "academic", title: "Debate Competition", image: "/assets/img/img4.jpeg", date: "December 2023" },
    { id: 21, category: "academic", title: "Quiz Championship", image: "/assets/img/img5.jpeg", date: "November 2023" },
    { id: 22, category: "academic", title: "Lab Work", image: "/assets/img/img6.jpeg", date: "October 2023" },
    { id: 23, category: "academic", title: "Library Activities", image: "/assets/img/img7.jpeg", date: "September 2023" },
    { id: 24, category: "academic", title: "Coding Workshop", image: "/assets/img/img8.jpeg", date: "August 2023" },

    // School Events
    { id: 25, category: "events", title: "Annual Day Celebration", image: "/assets/img/img1.jpeg", date: "December 2023" },
    { id: 26, category: "events", title: "Independence Day", image: "/assets/img/img2.jpeg", date: "August 2023" },
    { id: 27, category: "events", title: "Republic Day", image: "/assets/img/img3.jpeg", date: "January 2024" },
    { id: 28, category: "events", title: "Teachers Day Celebration", image: "/assets/img/img4.jpeg", date: "September 2023" },
    { id: 29, category: "events", title: "Parent-Teacher Meeting", image: "/assets/img/img5.jpeg", date: "July 2023" },
    { id: 30, category: "events", title: "Orientation Program", image: "/assets/img/img6.jpeg", date: "June 2023" },
    { id: 31, category: "events", title: "Class Outing", image: "/assets/img/img7.jpeg", date: "May 2023" },
    { id: 32, category: "events", title: "Farewell Ceremony", image: "/assets/img/img8.jpeg", date: "April 2023" },
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    setCurrentImageIndex(index);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="w-full py-12 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-roman font-bold text-white mb-2 flex items-center gap-3">
            <FaCamera />
            School Gallery
          </h1>
          <p className="text-lg text-gray-200">Memorable Moments from Our School Community</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Explore the vibrant moments from our school. From sporting achievements to cultural celebrations, academic excellence to special events, our gallery captures the essence of life at Dungarpur Public School, Dungarpur.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="w-full py-8 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSelectedImage(null);
                }}
                className={`px-6 py-2 rounded-full font-roman font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white"
                }`}
              >
                {category.name} <span className="ml-1 text-sm">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => handleImageClick(index)}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaCamera className="text-white text-4xl" />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <h3 className="font-roman font-bold text-primary text-sm mb-1 line-clamp-2">{image.title}</h3>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <FaCalendar className="text-secondary" />
                    {image.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <FaCamera className="text-6xl text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-500">No images found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-secondary transition-colors duration-300"
            >
              <FaTimes className="text-4xl" />
            </button>

            {/* Image Container */}
            <div className="flex items-center justify-center">
              {/* Previous Button */}
              <button
                onClick={handlePreviousImage}
                className="mr-4 p-3 rounded-full bg-secondary text-primary hover:bg-opacity-80 transition-all duration-300 transform hover:scale-110"
              >
                <FaChevronLeft className="text-2xl" />
              </button>

              {/* Image */}
              <div className="flex-1">
                <img
                  src={filteredImages[currentImageIndex].image}
                  alt={filteredImages[currentImageIndex].title}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <div className="text-white text-center mt-4">
                  <h3 className="font-roman font-bold text-2xl mb-2">{filteredImages[currentImageIndex].title}</h3>
                  <p className="text-gray-300 flex items-center justify-center gap-2">
                    <FaCalendar />
                    {filteredImages[currentImageIndex].date}
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    {currentImageIndex + 1} of {filteredImages.length}
                  </p>
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={handleNextImage}
                className="ml-4 p-3 rounded-full bg-secondary text-primary hover:bg-opacity-80 transition-all duration-300 transform hover:scale-110"
              >
                <FaChevronRight className="text-2xl" />
              </button>
            </div>

            {/* Keyboard Navigation Info */}
            <p className="text-gray-400 text-center mt-6 text-sm">Click arrows to navigate • Press ESC or click X to close</p>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "32+", label: "Photos" },
              { stat: "5", label: "Categories" },
              { stat: "12+", label: "Events" },
              { stat: "100+", label: "Moments Captured" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-3xl font-roman font-bold text-secondary mb-2">{item.stat}</h3>
                <p className="text-gray-700 font-roman">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Info */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-roman font-bold text-primary mb-6">Share Your Moments</h2>
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-primary">
            <p className="text-gray-700 mb-4">
              Have captured some amazing moments from school events? Share your photos with us!
            </p>
            <p className="text-sm text-gray-600 mb-6">
              Students and parents are encouraged to share their photographs from school events. Contact the school office to submit your gallery submissions.
            </p>
            <button className="px-8 py-3 bg-primary text-white font-roman font-bold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105">
              Submit Photos
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-roman font-bold text-white mb-4">Relive These Memories</h2>
          <p className="text-lg text-gray-200">Each photograph tells a story of excellence, achievement, and togetherness</p>
        </div>
      </section>
    </div>
  );
};

export default Gallery;