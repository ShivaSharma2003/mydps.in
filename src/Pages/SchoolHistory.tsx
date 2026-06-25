import { FaTrophy, FaUsers, FaBook, FaStar, FaCheckCircle, FaAward, FaMedal, FaGraduationCap } from "react-icons/fa";
import { useState } from "react";

const SchoolHistory = () => {
  const [expandedDecade, setExpandedDecade] = useState<number | null>(null);

  const timeline = [
    {
      decade: "1995-2005",
      title: "Era of Excellence",
      icon: FaStar,
      highlights: [
        "CBSE Board affiliation achieved in 1998",
        "Consistent 90%+ pass rate in board examinations",
        "Introduction of computer labs and IT education",
        "Recognition as 'Best School in the Region'",
      ],
      milestone: "Established academic credentials",
    },
    {
      decade: "2005-2015",
      title: "Modernization Phase",
      icon: FaBook,
      highlights: [
        "Complete campus renovation and infrastructure upgrade",
        "Introduction of smart classrooms and digital learning",
        "Launched sports excellence program with state medals",
        "Cultural programs earned national recognition",
      ],
      milestone: "Integration of modern education",
    },
    {
      decade: "2015-2026",
      title: "Contemporary Excellence",
      icon: FaGraduationCap,
      highlights: [
        "ISO 9001:2015 certification for quality management",
        "Achieved Green School certification",
        "Extended campus with new facilities",
        "94.5%+ pass rate and 50+ national/state awards",
      ],
      milestone: "Current era of holistic excellence",
    },
  ];

  const founders = [
    {
      name: "Mr. Vikas Ladia",
      role: "Founder & Chairman",
      contribution: "Visionary who established the school with a mission to provide quality education",
      year: "1995",
    },
  ];

  const achievements = [
    {
      period: "1995-2000",
      title: "Foundation Period",
      description: "Successfully established a school with strong academic foundation and community support",
      stats: ["120 initial students", "First batch of 32 pass-outs", "15 founding staff"],
    },
    {
      period: "2000-2005",
      title: "Growth Period",
      description: "Expanded to full secondary school with consistent quality and growing reputation",
      stats: ["800+ students", "90%+ pass rate", "State-level recognition"],
    },
    {
      period: "2005-2015",
      title: "Excellence Period",
      description: "Achieved CBSE recognition and modernized infrastructure with technology integration",
      stats: ["1,500+ students", "92%+ pass rate", "National awards"],
    },
    {
      period: "2015-Present",
      title: "Contemporary Period",
      description: "Focus on holistic development with green initiatives and international standards",
      stats: ["2,500+ students", "94%+ pass rate", "ISO certified"],
    },
  ];

  const traditions = [
    {
      title: "Annual Day Celebration",
      description: "Grand cultural program showcasing student talents and school achievements since 1995",
      frequency: "Every December",
    },
    {
      title: "Founder's Day",
      description: "Celebrated to honor the visionary founders and reflect on school's journey",
      frequency: "February 15",
    },
    {
      title: "Sports Day",
      description: "Showcasing athletic talents and promoting healthy competition among students",
      frequency: "February/March",
    },
    {
      title: "Graduation Ceremony",
      description: "Marking the completion of senior secondary journey with pride and celebration",
      frequency: "May/June",
    },
  ];

  const facilities = [
    {
      year: 1995,
      facility: "Basic Infrastructure",
      details: "2 school buildings, 12 classrooms, 1 library, open playground",
    },
    {
      year: 1998,
      facility: "Science Blocks",
      details: "Physics, Chemistry, Biology laboratories with modern equipment",
    },
    {
      year: 2000,
      facility: "Computer Labs",
      details: "2 state-of-the-art computer labs with 50+ computers",
    },
    {
      year: 2010,
      facility: "Smart Classrooms",
      details: "Digital boards, projectors, and interactive learning systems",
    },
    {
      year: 2015,
      facility: "Auditorium & Cafeteria",
      details: "500-seat auditorium and modern cafeteria with hygienic food prep",
    },
    {
      year: 2020,
      facility: "Sports Complex",
      details: "Basketball court, badminton court, volleyball court, athletics track",
    },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="w-full py-12 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-roman font-bold text-white mb-2">School History</h1>
          <p className="text-lg text-gray-200">A Journey of 30 Years Excellence & Growth</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Dungarpur Public School, Dungarpur has been a beacon of educational excellence for over three decades. Since its establishment in 1995, the school has remained committed to nurturing minds, building character, and fostering a love for learning in thousands of students. Our rich legacy is built on the foundation of vision, dedication, and an unwavering commitment to quality education.
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center border-t-4 border-secondary">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                  <FaUsers className="text-4xl text-secondary" />
                </div>
                <h3 className="text-xl font-roman font-bold text-primary mb-1">{founder.name}</h3>
                <p className="text-secondary font-semibold mb-2">{founder.role}</p>
                <p className="text-sm text-gray-700 mb-3">{founder.contribution}</p>
                <p className="text-xs font-semibold text-gray-600">Founded in {founder.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decade-wise History */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Our Journey Through Decades</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {timeline.map((era, index) => {
              const IconComponent = era.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => setExpandedDecade(expandedDecade === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-all duration-300 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <IconComponent className="text-3xl text-secondary flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-roman font-bold text-primary">{era.decade}</h3>
                        <p className="text-sm text-gray-600">{era.title}</p>
                      </div>
                    </div>
                    <span className="text-secondary text-2xl flex-shrink-0">{expandedDecade === index ? "−" : "+"}</span>
                  </button>
                  {expandedDecade === index && (
                    <div className="px-6 pb-6 bg-gray-50 border-t">
                      <div className="mb-4">
                        <p className="font-semibold text-primary mb-3">Key Highlights:</p>
                        <ul className="space-y-2">
                          {era.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                              <span className="text-gray-700">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-4 rounded border-l-4 border-secondary">
                        <p className="text-sm text-gray-700"><span className="font-semibold">Milestone:</span> {era.milestone}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Era-wise Achievements */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Growth & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-md border-l-4 border-secondary">
                <p className="text-sm font-semibold text-secondary mb-1">{achievement.period}</p>
                <h3 className="text-lg font-roman font-bold text-primary mb-2">{achievement.title}</h3>
                <p className="text-gray-700 mb-4">{achievement.description}</p>
                <div className="space-y-2">
                  {achievement.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <FaCheckCircle className="text-secondary flex-shrink-0" />
                      <span className="text-sm text-gray-700">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Evolution */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Infrastructure Evolution</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
                <div className="flex-shrink-0">
                  <p className="text-2xl font-roman font-bold text-secondary">{facility.year}</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-roman font-bold text-primary mb-1">{facility.facility}</h3>
                  <p className="text-gray-700">{facility.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Traditions */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Cherished Traditions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {traditions.map((tradition, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md border-t-4 border-secondary">
                <h3 className="text-lg font-roman font-bold text-primary mb-2">{tradition.title}</h3>
                <p className="text-gray-700 mb-3">{tradition.description}</p>
                <p className="text-sm font-semibold text-secondary">Frequency: {tradition.frequency}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Alumni */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Distinguished Alumni</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            Our alumni have gone on to excel in various fields including medicine, engineering, civil services, business, and the arts. They continue to be ambassadors of DPS values and contribute to society in meaningful ways.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Medical Professionals", count: "180+", icon: FaMedal },
              { name: "Engineers", count: "220+", icon: FaAward },
              { name: "Civil Servants", count: "45+", icon: FaTrophy },
              { name: "Business Leaders", count: "120+", icon: FaBook },
            ].map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md text-center">
                  <IconComponent className="text-4xl text-secondary mx-auto mb-3" />
                  <p className="font-roman font-bold text-primary mb-1">{category.count}</p>
                  <p className="text-sm text-gray-700">{category.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { stat: "30+", label: "Years of Excellence" },
              { stat: "2,500+", label: "Current Students" },
              { stat: "15,000+", label: "Alumni Network" },
              { stat: "200+", label: "Dedicated Staff" },
            ].map((item, index) => (
              <div key={index}>
                <h3 className="text-4xl font-roman font-bold text-secondary mb-2">{item.stat}</h3>
                <p className="text-gray-200">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Message */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-50 to-white p-8 rounded-lg shadow-md border-l-4 border-primary">
            <h2 className="text-2xl font-roman font-bold text-primary mb-4">Our Legacy & Future</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Over the past five decades, DPS Dungarpur has built a legacy rooted in academic excellence, character development, and holistic growth. Our journey is a testament to the hard work of our founders, the dedication of our teachers, the support of parents, and the brilliance of our students.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As we look to the future, we remain committed to evolving and adapting to the changing needs of education while staying true to our core values. We continue to inspire generations of students to reach their full potential and become responsible global citizens.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SchoolHistory;