import { FaBook, FaCalendar, FaUser, FaDownload, FaStar, FaNewspaper, FaMedal, FaCamera, FaPencilAlt, FaHeart } from "react-icons/fa";
import { useState } from "react";

const Magzines = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  const magazines = [
    {
      id: 1,
      title: "DPS Chronicle 2024-25",
      edition: "Annual Edition",
      month: "December 2024",
      cover: "/assets/img/magazine1.jpg",
      category: "annual",
      highlights: ["School Annual Report", "Academic Excellence", "Sports Achievements", "Cultural Extravaganza"],
      pages: 64,
      downloads: 1250,
    },
    {
      id: 2,
      title: "DPS Voice",
      edition: "Quarterly - Issue 3",
      month: "September 2024",
      cover: "/assets/img/magazine2.jpg",
      category: "quarterly",
      highlights: ["Student Articles", "Staff Reflections", "Photo Stories", "Events Coverage"],
      pages: 48,
      downloads: 890,
    },
    {
      id: 3,
      title: "Innovations & Ideas",
      edition: "Special Edition",
      month: "August 2024",
      cover: "/assets/img/magazine3.jpg",
      category: "special",
      highlights: ["Innovation Projects", "STEM Initiatives", "Research Papers", "Student Inventions"],
      pages: 56,
      downloads: 720,
    },
    {
      id: 4,
      title: "DPS Voice",
      edition: "Quarterly - Issue 2",
      month: "June 2024",
      cover: "/assets/img/magazine4.jpg",
      category: "quarterly",
      highlights: ["Summer Activities", "Alumni Interviews", "Science Fair", "Cultural Events"],
      pages: 44,
      downloads: 650,
    },
  ];

  const categories = [
    { id: "all", name: "All Publications", count: 12 },
    { id: "annual", name: "Annual Edition", count: 3 },
    { id: "quarterly", name: "Quarterly Issues", count: 6 },
    { id: "special", name: "Special Editions", count: 3 },
  ];

  const featuredArticles = [
    {
      title: "Excellence in Science: Student Research Projects",
      author: "Dr. Suresh Verma",
      date: "March 15, 2024",
      category: "Academic",
      excerpt: "Discover how our students are pushing the boundaries of scientific research with innovative projects and groundbreaking discoveries.",
      icon: FaBook,
    },
    {
      title: "Beyond Boundaries: Our Sports Champions",
      author: "Mrs. Anjali Singh",
      date: "March 10, 2024",
      category: "Sports",
      excerpt: "Celebrating our athletes' remarkable achievements in state and national level competitions throughout the academic year.",
      icon: FaMedal,
    },
    {
      title: "Voices of Change: Student Leadership Initiative",
      author: "Ms. Sneha Patel",
      date: "March 5, 2024",
      category: "Culture",
      excerpt: "How our student leaders are making a positive impact on school life and inspiring their peers towards excellence.",
      icon: FaUser,
    },
    {
      title: "Digital Revolution in Education",
      author: "Mr. Rajesh Kumar",
      date: "February 28, 2024",
      category: "Technology",
      excerpt: "Exploring how technology is transforming the way we teach and learn at DPS Dungarpur.",
      icon: FaNewspaper,
    },
    {
      title: "Canvas of Culture: Our Art Exhibition",
      author: "Art Department",
      date: "February 20, 2024",
      category: "Arts",
      excerpt: "A visual journey through our students' artistic expressions showcased in the annual art exhibition.",
      icon: FaCamera,
    },
    {
      title: "Sustainability at School: Green Initiatives",
      author: "Environmental Club",
      date: "February 15, 2024",
      category: "Environment",
      excerpt: "Our commitment to environmental conservation and sustainable practices within the school campus.",
      icon: FaHeart,
    },
  ];

  const archive = [
    { year: 2023, editions: 8, status: "Complete Archive" },
    { year: 2022, editions: 7, status: "Partial Archive" },
    { year: 2021, editions: 6, status: "Partial Archive" },
    { year: 2020, editions: 5, status: "Limited Access" },
  ];

  const sections = [
    { title: "Academic Excellence", description: "Stories of achievement, scholarship, and learning excellence" },
    { title: "Sports & Fitness", description: "Coverage of sports events, athlete profiles, and fitness initiatives" },
    { title: "Cultural Events", description: "Highlights from cultural programs, performances, and celebrations" },
    { title: "Student Voice", description: "Stories written by and about our students' experiences" },
    { title: "Staff Spotlight", description: "Interviews and profiles of our dedicated faculty members" },
    { title: "Alumni Connect", description: "Updates from our alumni and their success stories" },
  ];

  const filteredMagazines = selectedCategory === "all" 
    ? magazines 
    : magazines.filter(mag => mag.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="w-full py-12 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-roman font-bold text-white mb-2">School Magazines</h1>
          <p className="text-lg text-gray-200">Celebrating Stories, Achievements & Moments</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            DPS Dungarpur publishes a diverse range of magazines and newsletters that showcase the achievements, talents, and stories of our school community. From our annual chronicle to special edition publications, each magazine captures the spirit and essence of our institution.
          </p>
        </div>
      </section>

      {/* Magazine Sections Overview */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Magazine Sections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-secondary">
                <h3 className="text-lg font-roman font-bold text-primary mb-2">{section.title}</h3>
                <p className="text-gray-700 text-sm">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-roman font-bold text-primary text-center mb-8">Browse Publications</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.name} <span className="text-sm">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Magazines */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Latest Publications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMagazines.map((mag) => (
              <div key={mag.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-56 bg-gray-200 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
                    <FaBook className="text-8xl text-white opacity-30" />
                  </div>
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <button className="bg-secondary text-primary px-4 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2">
                      <FaDownload /> Download
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-roman font-bold text-primary mb-1">{mag.title}</h3>
                  <p className="text-sm text-secondary font-semibold mb-3">{mag.edition}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-600 mb-3">
                    <FaCalendar /> {mag.month}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {mag.highlights.slice(0, 2).map((highlight, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="border-t pt-3 flex justify-between text-xs text-gray-600">
                    <span>{mag.pages} pages</span>
                    <span>{mag.downloads} downloads</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Featured Articles</h2>
          <div className="space-y-4">
            {featuredArticles.map((article, index) => {
              const IconComponent = article.icon;
              return (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-secondary">
                  <div className="flex items-start gap-4">
                    <IconComponent className="text-3xl text-secondary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-roman font-bold text-primary">{article.title}</h3>
                        <button
                          onClick={() => setExpandedArticle(expandedArticle === index ? null : index)}
                          className="text-secondary text-2xl flex-shrink-0"
                        >
                          {expandedArticle === index ? "−" : "+"}
                        </button>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2 flex-wrap">
                        <span className="font-semibold">{article.author}</span>
                        <span>{article.date}</span>
                        <span className="px-2 py-1 bg-primary text-white rounded text-xs">{article.category}</span>
                      </div>
                      <p className="text-gray-700">{article.excerpt}</p>
                      {expandedArticle === index && (
                        <div className="mt-4 pt-4 border-t">
                          <p className="text-gray-700 mb-3">This comprehensive article explores the innovations and achievements that define our academic community.</p>
                          <button className="text-secondary font-semibold hover:opacity-80 transition-all">Read Full Article →</button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Magazine Archive */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Archive</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {archive.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-roman font-bold text-primary">{item.year}</h3>
                  <FaCalendar className="text-3xl text-secondary" />
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700"><span className="font-semibold">Editions Available:</span> {item.editions}</p>
                  <p className="text-sm">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full font-semibold">
                      {item.status}
                    </span>
                  </p>
                </div>
                <button className="mt-4 w-full px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300">
                  View Archives
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Publication Guidelines */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Contribute to Our Magazine</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Student Articles",
                description: "Share your stories, poems, artwork, or research papers",
                icon: FaPencilAlt,
              },
              {
                title: "Photo Submissions",
                description: "Submit photos from school events and activities",
                icon: FaCamera,
              },
              {
                title: "Achievement Highlights",
                description: "Tell us about your academic or personal achievements",
                icon: FaStar,
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <IconComponent className="text-4xl text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-roman font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm mb-4">{item.description}</p>
                  <button className="px-4 py-2 bg-secondary text-primary rounded-lg font-semibold hover:opacity-90 transition-all duration-300">
                    Submit
                  </button>
                </div>
              );
            })}
          </div>
          <div className="mt-8 text-center p-6 bg-blue-50 rounded-lg border-l-4 border-primary">
            <p className="text-gray-700"><span className="font-semibold">Submission Deadline:</span> 15th of each month | <span className="font-semibold">Contact:</span> magazine@dpsdungarpur.edu.in</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { stat: "12+", label: "Publications Yearly" },
              { stat: "50k+", label: "Total Downloads" },
              { stat: "15+", label: "Years of Archives" },
              { stat: "100+", label: "Contributing Authors" },
            ].map((item, index) => (
              <div key={index}>
                <h3 className="text-4xl font-roman font-bold text-secondary mb-2">{item.stat}</h3>
                <p className="text-gray-200">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-roman font-bold text-primary mb-8">Contact the Magazine Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="font-roman font-bold text-primary mb-2">For Submissions</h3>
              <p className="text-gray-700 mb-1">magazine@dpsdungarpur.edu.in</p>
              <p className="text-sm text-gray-600">Submission Coordinator</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="font-roman font-bold text-primary mb-2">General Inquiries</h3>
              <p className="text-gray-700 mb-1">+91-2964-XXXXXX</p>
              <p className="text-sm text-gray-600">Publications Office</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-roman font-bold text-white mb-4">Share Your Story</h2>
          <p className="text-lg text-gray-200">Be part of DPS Dungarpur's thriving publication community</p>
        </div>
      </section>
    </div>
  );
};

export default Magzines;