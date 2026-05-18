import { FaMusic, FaTheaterMasks, FaGift, FaCalendar, FaTrophy, FaUsers, FaStar } from "react-icons/fa";
import { useState } from "react";

const CultureEvents = () => {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

  const upcomingEvents = [
    {
      id: 1,
      name: "Annual Day Celebration",
      date: "15th December 2024",
      time: "5:00 PM - 8:00 PM",
      location: "School Auditorium",
      description: "Spectacular showcase of student talent including dance, music, drama, and cultural performances. Parents are invited to celebrate the achievements of our students.",
      highlights: ["Cultural Performances", "Drama Sketches", "Musical Presentations", "Award Ceremony"],
    },
    {
      id: 2,
      name: "Independence Day Celebration",
      date: "15th August 2024",
      time: "9:00 AM - 10:30 AM",
      location: "School Ground",
      description: "Patriotic celebration featuring flag hoisting, national anthem, patriotic songs, and speeches celebrating India's independence and diversity.",
      highlights: ["Flag Hoisting", "Patriotic Songs", "March Past", "National Anthem"],
    },
    {
      id: 3,
      name: "Republic Day Celebration",
      date: "26th January 2025",
      time: "9:00 AM - 10:30 AM",
      location: "School Ground",
      description: "Celebration of India's Constitution with cultural programs, patriotic performances, and commemorating the significance of Republic Day.",
      highlights: ["Flag Hoisting", "Constitution Reading", "Cultural Performances", "Community Participation"],
    },
    {
      id: 4,
      name: "Diwali Celebration",
      date: "1st November 2024",
      time: "2:00 PM - 4:00 PM",
      location: "School Campus",
      description: "Festival of lights celebration featuring Rangoli competition, Diya decoration, cultural performances, and festive decorations.",
      highlights: ["Rangoli Competition", "Diya Decoration", "Folk Dances", "Sweet Distribution"],
    },
    {
      id: 5,
      name: "Holi Celebration",
      date: "25th March 2025",
      time: "2:00 PM - 4:00 PM",
      location: "School Campus",
      description: "Festival of colors celebration with water play, colored powder, cultural programs, and traditional delicacies.",
      highlights: ["Color Fest", "Traditional Games", "Folk Songs", "Festive Treats"],
    },
    {
      id: 6,
      name: "Inter-School Cultural Competition",
      date: "10th February 2025",
      time: "10:00 AM - 5:00 PM",
      location: "School Auditorium",
      description: "Students participate in various cultural competitions with schools across the region. Categories include dance, music, drama, and fine arts.",
      highlights: ["Dance Competition", "Music Fest", "Drama Performance", "Art Exhibition"],
    },
  ];

  const culturalPrograms = [
    {
      icon: FaMusic,
      title: "Music Programs",
      description: "Classical and contemporary music performances including instrumental recitals, vocal performances, and orchestral concerts.",
      activities: ["Classical Music", "Vocal Performances", "Band Programs", "Music Concerts"],
    },
    {
      icon: FaMusic,
      title: "Dance Performances",
      description: "Traditional and modern dance forms including Kathak, folk dances, contemporary dance, and fusion performances.",
      activities: ["Kathak Dance", "Folk Dances", "Contemporary Dance", "Hip Hop"],
    },
    {
      icon: FaTheaterMasks,
      title: "Drama & Theater",
      description: "Stage performances including plays, skits, monologues, and theatrical productions with meaningful messages.",
      activities: ["One-Act Plays", "Comedy Skits", "Monologues", "Full Dramas"],
    },
    {
      icon: FaGift,
      title: "Art & Craft",
      description: "Creative expression through painting, sculpture, digital art, and various traditional craft forms.",
      activities: ["Painting", "Sculpture", "Digital Art", "Traditional Crafts"],
    },
    {
      icon: FaUsers,
      title: "Fashion Shows",
      description: "Showcasing traditional and modern fashion designs created and modeled by students.",
      activities: ["Traditional Attire", "Modern Fashion", "Designer Collections", "Eco-Fashion"],
    },
    {
      icon: FaStar,
      title: "Talent Hunt",
      description: "Platform for students to showcase unique talents and hidden skills in various categories.",
      activities: ["Solo Performance", "Group Performance", "Special Talent", "Innovation"],
    },
  ];

  const festivalCelebrations = [
    {
      festival: "Diwali",
      date: "November",
      significance: "Festival of Lights - Victory of light over darkness",
      activities: ["Rangoli", "Diya Decoration", "Folk Dances", "Festive Treats"],
    },
    {
      festival: "Holi",
      date: "March",
      significance: "Festival of Colors - Celebration of spring and joy",
      activities: ["Color Play", "Traditional Games", "Folk Songs", "Sweets"],
    },
    {
      festival: "Christmas",
      date: "December",
      significance: "Celebration of birth of Jesus Christ",
      activities: ["Carol Singing", "Decoration", "Cultural Program", "Community Meal"],
    },
    {
      festival: "Independence Day",
      date: "August",
      significance: "Independence of India from British rule",
      activities: ["Flag Hoisting", "March Past", "Patriotic Songs", "Speeches"],
    },
    {
      festival: "Republic Day",
      date: "January",
      significance: "Adoption of Indian Constitution",
      activities: ["Flag Hoisting", "Constitution Day", "Cultural Program", "Oath Taking"],
    },
    {
      festival: "Teacher's Day",
      date: "September",
      significance: "Honoring Teachers and their contributions",
      activities: ["Skit Performances", "Award Ceremony", "Student Programs", "Felicitation"],
    },
  ];

  const pastHighlights = [
    { year: 2023, event: "Annual Day", highlight: "300+ student performers, 2000+ audience", achievement: "Outstanding" },
    { year: 2023, event: "Diwali Fest", highlight: "50 Rangoli entries, vibrant celebrations", achievement: "Colorful" },
    { year: 2024, event: "Inter-School Fest", highlight: "8 schools participated, 15 events", achievement: "Successful" },
    { year: 2024, event: "Republic Day", highlight: "Grand celebration, 500+ students", achievement: "Patriotic" },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="w-full py-12 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-roman font-bold text-white mb-2">Cultural Events & Celebrations</h1>
          <p className="text-lg text-gray-200">Celebrating Talent, Diversity, and Excellence</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-roman font-bold text-primary mb-6">Fostering Cultural Excellence</h2>
            <p className="text-gray-700 leading-relaxed">
              At Dungarpur Public School, Dungarpur, we believe in nurturing the cultural talents and creative expressions of our students. Our comprehensive cultural program provides a platform for students to showcase their abilities, celebrate diversity, and develop confidence through various performances and events throughout the year.
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Programs */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Our Cultural Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturalPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: "#800000" }}>
                      <IconComponent className="text-2xl text-secondary" />
                    </div>
                    <h3 className="text-xl font-roman font-bold text-primary">{program.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="space-y-2">
                    {program.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <span className="text-sm text-gray-700">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Upcoming Events</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-100 transition-all duration-300 text-left"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg" style={{ backgroundColor: "#800000" }}>
                        <FaCalendar className="text-xl text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-roman font-bold text-primary">{event.name}</h3>
                        <p className="text-sm text-gray-600">{event.date}</p>
                      </div>
                    </div>
                  </div>
                  <span className="text-secondary text-2xl flex-shrink-0">{expandedEvent === event.id ? "−" : "+"}</span>
                </button>
                {expandedEvent === event.id && (
                  <div className="px-6 pb-6 border-t bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500 font-semibold">TIME</p>
                        <p className="text-gray-700 font-semibold">{event.time}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-semibold">LOCATION</p>
                        <p className="text-gray-700 font-semibold">{event.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-semibold">DATE</p>
                        <p className="text-gray-700 font-semibold">{event.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm font-semibold text-primary mb-2">Highlights:</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {event.highlights.map((highlight, idx) => (
                          <div key={idx} className="text-sm text-gray-700">
                            <span className="text-secondary">✓</span> {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Celebrations */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Festival Celebrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {festivalCelebrations.map((fest, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-secondary">
                <h3 className="text-2xl font-roman font-bold text-primary mb-2">{fest.festival}</h3>
                <p className="text-sm text-gray-500 font-semibold mb-3">Celebrated in: {fest.date}</p>
                <p className="text-gray-700 mb-4 italic">{fest.significance}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-primary">Activities:</p>
                  {fest.activities.map((activity, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <span className="text-secondary">•</span>
                      <span className="text-gray-700">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Highlights */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Past Highlights</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {pastHighlights.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-2xl font-roman font-bold text-primary">{item.year}</span>
                    <h4 className="text-xl font-roman font-bold text-primary">{item.event}</h4>
                  </div>
                  <p className="text-gray-700">{item.highlight}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <FaTrophy className="text-secondary text-2xl" />
                    <span className="font-roman font-bold text-primary text-lg">{item.achievement}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Why Cultural Events Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Building Confidence", desc: "Performing on stage and showcasing talents builds self-esteem and public speaking skills." },
              { title: "Team Building", desc: "Group performances foster teamwork, cooperation, and collective achievement." },
              { title: "Celebrating Diversity", desc: "Events celebrate various cultures and traditions, promoting inclusivity and respect." },
              { title: "Creative Expression", desc: "Provides outlets for creative ideas and artistic expressions in a safe environment." },
              { title: "Cultural Awareness", desc: "Students learn about and appreciate different cultures and traditions." },
              { title: "Life Skills", desc: "Develops discipline, time management, and responsibility through participation." },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h3 className="text-lg font-roman font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-roman font-bold text-white mb-4">Join Our Cultural Journey!</h2>
          <p className="text-lg text-gray-200 mb-6">Every student has a unique talent waiting to be discovered and celebrated.</p>
          <button className="px-8 py-3 bg-secondary text-primary font-roman font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
            Learn More About Enrollment
          </button>
        </div>
      </section>
    </div>
  );
};

export default CultureEvents;