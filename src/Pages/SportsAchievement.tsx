import { FaTrophy, FaMedal, FaAward, FaFire, FaCalendar, FaStar, FaCheckCircle, FaChartLine, FaUser, FaHeart } from "react-icons/fa";
import { useState } from "react";

const SportsAchievement = () => {
  const [selectedSport, setSelectedSport] = useState("all");
  const [expandedTeam, setExpandedTeam] = useState<number | null>(null);

  const sports = [
    { id: "all", name: "All Sports", count: 8 },
    { id: "cricket", name: "Cricket", count: 12 },
    { id: "badminton", name: "Badminton", count: 18 },
    { id: "athletics", name: "Athletics", count: 25 },
    { id: "volleyball", name: "Volleyball", count: 8 },
    { id: "basketball", name: "Basketball", count: 14 },
    { id: "tennis", name: "Tennis", count: 6 },
    { id: "other", name: "Other Sports", count: 10 },
  ];

  const achievements = [
    {
      sport: "cricket",
      title: "State Level Cricket Champions",
      year: 2024,
      category: "U-19 Boys",
      medal: "Gold",
      details: "Won the Inter-School State Cricket Championship with outstanding batting and bowling performance",
      highlight: true,
    },
    {
      sport: "badminton",
      title: "National Badminton Tournament",
      year: 2024,
      category: "U-17 Girls Singles",
      medal: "Silver",
      details: "Runner-up in National Inter-School Badminton Championship",
      highlight: true,
    },
    {
      sport: "athletics",
      title: "State Athletics Meet",
      year: 2024,
      category: "100m Dash (Girls)",
      medal: "Gold",
      details: "Set new school record with 12.5 seconds timing",
      highlight: true,
    },
    {
      sport: "athletics",
      title: "District 4x400m Relay",
      year: 2024,
      category: "Boys",
      medal: "Gold",
      details: "Won district-level relay with outstanding coordination",
      highlight: false,
    },
    {
      sport: "basketball",
      title: "City Basketball Tournament",
      year: 2024,
      category: "Boys",
      medal: "Bronze",
      details: "Finished 3rd in city-level inter-school basketball championship",
      highlight: false,
    },
    {
      sport: "volleyball",
      title: "Regional Volleyball Championship",
      year: 2024,
      category: "Girls",
      medal: "Gold",
      details: "Won regional championship with perfect strategic gameplay",
      highlight: false,
    },
    {
      sport: "badminton",
      title: "Mixed Doubles Championship",
      year: 2023,
      category: "U-19",
      medal: "Gold",
      details: "Champions of state-level mixed doubles badminton tournament",
      highlight: false,
    },
    {
      sport: "cricket",
      title: "T-20 Cricket League",
      year: 2023,
      category: "Boys",
      medal: "Gold",
      details: "Winners of inter-school T-20 cricket league",
      highlight: false,
    },
    {
      sport: "athletics",
      title: "Long Jump District Meet",
      year: 2023,
      category: "Boys",
      medal: "Gold",
      details: "District champion in long jump with 7.2m jump",
      highlight: false,
    },
    {
      sport: "tennis",
      title: "State Tennis Tournament",
      year: 2023,
      category: "U-16 Singles",
      medal: "Silver",
      details: "Runner-up in state-level tennis championship",
      highlight: false,
    },
  ];

  const teams = [
    {
      name: "Boys Cricket Team",
      sport: "Cricket",
      coach: "Mr. Rajesh Singh",
      members: 15,
      achievements: ["State Champions 2024", "District Finals 3 times", "School Record: 287 runs"],
      recent: "Won State Championship 2024",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Girls Badminton Team",
      sport: "Badminton",
      coach: "Ms. Priya Verma",
      members: 12,
      achievements: ["National Tournament Runners-up 2024", "State Champions 2023", "50+ medals in 3 years"],
      recent: "Silver in National Tournament 2024",
      color: "from-pink-500 to-pink-600",
    },
    {
      name: "Boys Athletics Team",
      sport: "Athletics",
      coach: "Mr. Arjun Kumar",
      members: 24,
      achievements: ["100+ medals in 3 years", "State Meet Champions 2023", "5 School Records"],
      recent: "Won 25+ medals in District Meet 2024",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      name: "Girls Volleyball Team",
      sport: "Volleyball",
      coach: "Mrs. Anjali Singh",
      members: 14,
      achievements: ["Regional Champions 2024", "State Finalists 2023", "Consistent performers"],
      recent: "Champions of Regional Championship 2024",
      color: "from-red-500 to-red-600",
    },
    {
      name: "Boys Basketball Team",
      sport: "Basketball",
      coach: "Mr. Vikram Patel",
      members: 12,
      achievements: ["City Tournament Bronze 2024", "District Runners-up 2023", "20+ medals"],
      recent: "Bronze in City Tournament 2024",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Mixed Tennis Team",
      sport: "Tennis",
      coach: "Dr. Suresh Desai",
      members: 8,
      achievements: ["State Tournament Runners-up 2023", "District Champions 2024", "10+ medals"],
      recent: "Runners-up in State Tournament 2023",
      color: "from-green-500 to-green-600",
    },
  ];

  const statistics = [
    { stat: "250+", label: "Total Medals (3 years)" },
    { stat: "8", label: "Sports Disciplines" },
    { stat: "120+", label: "Active Players" },
    { stat: "15", label: "Dedicated Coaches" },
  ];

  const sportCategories = [
    {
      name: "Cricket",
      description: "Competitive cricket program with focus on technique and strategy",
      facilities: "Cricket ground, nets, indoor practice area",
      medals: "12 medals in 2024",
    },
    {
      name: "Badminton",
      description: "High-performance badminton training with national standard coaching",
      facilities: "4 badminton courts, practice hall",
      medals: "18 medals including national tournament silver",
    },
    {
      name: "Athletics",
      description: "Comprehensive track and field program with specialized coaching",
      facilities: "400m running track, long jump, shot put, high jump area",
      medals: "25 medals in 2024",
    },
    {
      name: "Volleyball",
      description: "Team sports program emphasizing coordination and strategy",
      facilities: "2 volleyball courts, practice hall",
      medals: "8 medals including regional championship",
    },
    {
      name: "Basketball",
      description: "Dynamic basketball program for boys and girls",
      facilities: "Basketball court, practice areas",
      medals: "14 medals including city tournament bronze",
    },
    {
      name: "Tennis",
      description: "Racquet sports training with professional coaching",
      facilities: "2 tennis courts, practice walls",
      medals: "6 medals in 2024",
    },
    {
      name: "Swimming",
      description: "Aquatic programs for fitness and competitive swimming",
      facilities: "Olympic standard swimming pool",
      medals: "8 medals in swimming events",
    },
    {
      name: "Martial Arts",
      description: "Discipline-based training in martial arts disciplines",
      facilities: "Martial arts training hall",
      medals: "10 medals in various martial arts competitions",
    },
  ];

  const champions = [
    {
      name: "Aarav Singh",
      sport: "Cricket",
      achievement: "State U-19 Cricket Champion 2024",
      role: "Captain & All-rounder",
      medals: 5,
    },
    {
      name: "Priya Sharma",
      sport: "Badminton",
      achievement: "National U-17 Badminton Runner-up 2024",
      role: "Singles Player",
      medals: 8,
    },
    {
      name: "Rajesh Kumar",
      sport: "Athletics",
      achievement: "State 100m Champion & Record Holder",
      role: "Sprinter",
      medals: 12,
    },
    {
      name: "Ananya Patel",
      sport: "Volleyball",
      achievement: "Regional Volleyball Champion 2024",
      role: "Team Captain",
      medals: 6,
    },
    {
      name: "Arjun Desai",
      sport: "Basketball",
      achievement: "City Basketball Tournament Bronze 2024",
      role: "Point Guard",
      medals: 4,
    },
    {
      name: "Sneha Verma",
      sport: "Tennis",
      achievement: "State U-16 Tennis Runner-up 2023",
      role: "Singles & Doubles",
      medals: 5,
    },
  ];

  const filteredAchievements = selectedSport === "all" 
    ? achievements 
    : achievements.filter(ach => ach.sport === selectedSport);

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="w-full py-12 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-roman font-bold text-white mb-2">Sports Achievement</h1>
          <p className="text-lg text-gray-200">Excellence, Passion & Champion Spirit</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Dungarpur Public School, Dungarpur takes immense pride in its sports excellence. With over 250 medals in the last three years, our athletes have demonstrated exceptional talent, dedication, and sportsmanship. We believe in developing not just champions, but disciplined and responsible individuals through sports.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {statistics.map((item, index) => (
              <div key={index}>
                <h3 className="text-4xl font-roman font-bold text-secondary mb-2">{item.stat}</h3>
                <p className="text-gray-200">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sport Categories Filter */}
      <section className="w-full py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-roman font-bold text-primary text-center mb-8">Browse by Sport</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {sports.map((sport) => (
              <button
                key={sport.id}
                onClick={() => setSelectedSport(sport.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedSport === sport.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {sport.name} <span className="text-sm">({sport.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Showcase */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Recent Achievements</h2>
          <div className="space-y-4">
            {filteredAchievements.map((achievement, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                  achievement.highlight ? "border-l-4 border-secondary bg-blue-50" : "bg-white"
                }`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="text-lg font-roman font-bold text-primary">{achievement.title}</h3>
                        <span className="px-3 py-1 bg-secondary text-primary text-xs font-bold rounded-full">
                          {achievement.medal}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <FaCalendar className="text-secondary" /> {achievement.year}
                        </span>
                        <span>{achievement.category}</span>
                      </div>
                      <p className="text-gray-700">{achievement.details}</p>
                    </div>
                    {achievement.highlight && (
                      <FaStar className="text-4xl text-secondary flex-shrink-0 mt-2" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sport Categories Overview */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Our Sports Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sportCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-secondary">
                <h3 className="text-lg font-roman font-bold text-primary mb-2">{category.name}</h3>
                <p className="text-gray-700 text-sm mb-3">{category.description}</p>
                <div className="space-y-2 text-sm mb-3">
                  <p className="text-gray-600"><span className="font-semibold">Facilities:</span> {category.facilities}</p>
                  <p className="text-secondary font-semibold">{category.medals}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teams Showcase */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Our Teams</h2>
          <div className="space-y-4">
            {teams.map((team, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedTeam(expandedTeam === index ? null : index)}
                  className={`w-full p-6 flex items-center justify-between hover:bg-gray-100 transition-all duration-300 text-left bg-gradient-to-r ${team.color}`}
                >
                  <div className="text-white">
                    <h3 className="text-lg font-roman font-bold">{team.name}</h3>
                    <p className="text-sm opacity-90">{team.recent}</p>
                  </div>
                  <span className="text-white text-2xl flex-shrink-0">{expandedTeam === index ? "−" : "+"}</span>
                </button>
                {expandedTeam === index && (
                  <div className="px-6 pb-6 bg-white border-t space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                      <div>
                        <p className="text-xs text-gray-600 font-semibold">Coach</p>
                        <p className="text-gray-700">{team.coach}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 font-semibold">Members</p>
                        <p className="text-gray-700">{team.members} Players</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 font-semibold">Sport</p>
                        <p className="text-gray-700">{team.sport}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 font-semibold">Status</p>
                        <p className="text-secondary font-semibold">Active</p>
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-sm font-semibold text-primary mb-3">Key Achievements:</p>
                      <ul className="space-y-2">
                        {team.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Champion Spotlight */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Champion Spotlight</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {champions.map((champion, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <FaUser className="text-2xl text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-roman font-bold text-primary">{champion.name}</h3>
                    <p className="text-sm text-gray-600">{champion.sport}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-3">{champion.achievement}</p>
                <div className="flex justify-between items-center pt-3 border-t">
                  <p className="text-xs text-gray-600">{champion.role}</p>
                  <p className="flex items-center gap-1 text-secondary font-semibold">
                    <FaMedal /> {champion.medals} Medals
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Facilities */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">World-Class Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "400m Running Track", description: "International standard athletics track with synthetic surface", icon: FaChartLine },
              { name: "Cricket Ground", description: "Full-sized cricket field with practice nets and coaching area", icon: FaTrophy },
              { name: "Badminton Courts", description: "4 professional badminton courts with wooden flooring", },
              { name: "Basketball Court", description: "Standard basketball court with proper lighting", icon: FaStar },
              { name: "Volleyball Courts", description: "2 professional volleyball courts", icon: FaCheckCircle },
              { name: "Tennis Courts", description: "2 professional tennis courts with practice walls", icon: FaAward },
              { name: "Swimming Pool", description: "Olympic standard 50m swimming pool", icon: FaHeart },
              { name: "Fitness Center", description: "State-of-the-art gym and fitness facilities", icon: FaFire },
            ].map((facility, index) => {
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md flex items-start gap-4 border-l-4 border-secondary">
                  <div>
                    <h3 className="text-lg font-roman font-bold text-primary mb-1">{facility.name}</h3>
                    <p className="text-sm text-gray-700">{facility.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coaching Staff */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Expert Coaching Staff</h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
            <p className="text-lg text-gray-700 mb-6">
              Our sports programs are led by experienced coaches with national and international experience. They focus on developing both athletic excellence and character in our students.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { stat: "15+", label: "Certified Coaches" },
                { stat: "50+", label: "Years Combined Experience" },
                { stat: "8", label: "Sports Disciplines" },
                { stat: "100%", label: "Commitment to Excellence" },
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="text-3xl font-roman font-bold text-secondary mb-2">{item.stat}</h3>
                  <p className="text-sm text-gray-700">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-roman font-bold text-white mb-4">Join Our Winning Team</h2>
          <p className="text-lg text-gray-200">Become a champion with DPS Dungarpur sports programs</p>
        </div>
      </section>
    </div>
  );
};

export default SportsAchievement;