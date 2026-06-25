import { FaMusic, FaTheaterMasks, FaGift, FaUsers, FaStar } from "react-icons/fa";


const CultureEvents = () => {



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

    </div>
  );
};

export default CultureEvents;