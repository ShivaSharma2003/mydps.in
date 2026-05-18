import { FaUser, FaHeart, FaLightbulb, FaGraduationCap, FaUsers, FaBook, FaTrophy, FaChartLine, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

const PrincipalMessage = () => {
  const [expandedVision, setExpandedVision] = useState<number | null>(null);

  const corePhilosophies = [
    { title: "Excellence", description: "Pursuing the highest standards in academics and character development", icon: FaTrophy },
    { title: "Integrity", description: "Building strong moral and ethical foundations in every student", icon: FaHeart },
    { title: "Innovation", description: "Embracing modern teaching methods and technological advancements", icon: FaLightbulb },
    { title: "Inclusivity", description: "Creating a welcoming environment for every student to thrive", icon: FaUsers },
  ];

  const focusAreas = [
    {
      title: "Academic Excellence",
      description: "We focus on delivering quality education that develops critical thinking and problem-solving skills.",
      achievements: ["95%+ Pass Rate", "CBSE Board Recognition", "Advanced Curriculum"],
    },
    {
      title: "Holistic Development",
      description: "Beyond academics, we nurture character, leadership, and creative talents in every student.",
      achievements: ["Sports Achievements", "Cultural Programs", "Leadership Training"],
    },
    {
      title: "Technology Integration",
      description: "Leveraging modern technology to enhance learning experiences and prepare students for the future.",
      achievements: ["Digital Classrooms", "Online Learning Platform", "ICT Labs"],
    },
    {
      title: "Social Responsibility",
      description: "Fostering values of compassion and community service among our students.",
      achievements: ["Community Service", "Eco-Initiatives", "Social Projects"],
    },
  ];

  const achievements = [
    { stat: "500+", label: "Happy Students" },
    { stat: "25+", label: "Dedicated Staff" },
    { stat: "5+", label: "Years of Excellence" },
    { stat: "80%+", label: "Pass Rate" },
  ];

  const visionPoints = [
    {
      title: "Academic Excellence",
      content: "Continue to maintain our position as a leading educational institution by adopting innovative teaching-learning processes and maintaining the highest academic standards.",
    },
    {
      title: "Character Formation",
      content: "Develop responsible, ethical, and compassionate citizens who contribute meaningfully to society and uphold the values of integrity and excellence.",
    },
    {
      title: "Skill Development",
      content: "Equip our students with essential 21st-century skills including critical thinking, communication, collaboration, and creativity.",
    },
    {
      title: "Digital Readiness",
      content: "Prepare students to thrive in an increasingly digital world while maintaining the human touch in education.",
    },
    {
      title: "Inclusive Growth",
      content: "Ensure every student, regardless of background, has access to quality education and opportunities to reach their full potential.",
    },
  ];


  const principalProfile = {
    name: "Shelesh Kumar",
    designation: "Principal",
    qualification: "MCs, B.Ed, M.Ed",
    experience: "18+ years in School Management",
    email: "principal@mydps.in",
    phone: "+91 87399 25438",
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="w-full py-12 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-roman font-bold text-white mb-2">Principal's Message</h1>
          <p className="text-lg text-gray-200">A Vision for Excellence & Growth</p>
        </div>
      </section>

      {/* Principal Profile & Welcome */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Profile Card */}
            <div className="bg-linear-to-br from-gray-50 to-white p-8 rounded-lg shadow-lg text-center border-t-4 border-secondary">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary p-1">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                  <FaUser className="text-6xl text-gray-400" />
                </div>
              </div>
              <h2 className="text-2xl font-roman font-bold text-primary mb-1">{principalProfile.name}</h2>
              <p className="text-secondary font-semibold mb-4">{principalProfile.designation}</p>
              <div className="space-y-2 text-sm text-gray-700 mb-6">
                <p><span className="font-semibold">Qualification:</span> {principalProfile.qualification}</p>
                <p><span className="font-semibold">Experience:</span> {principalProfile.experience}</p>
              </div>
              <div className="border-t pt-4 space-y-1 text-sm">
                <p className="text-gray-600">{principalProfile.email}</p>
                <p className="text-gray-600">{principalProfile.phone}</p>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-roman font-bold text-primary mb-6">A Warm Welcome</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Dear Parents, Students, and Members of the DPS Community,
                </p>
                <p>
                  It is with immense pride and gratitude that I welcome you to Dungarpur Public School, Dungarpur. Over the past 50 years, our institution has been dedicated to the holistic development of our students, preparing them not just for examinations but for life itself.
                </p>
                <p>
                  At DPS, we believe that education extends far beyond the confines of the classroom. We strive to nurture critical thinkers, compassionate leaders, and responsible global citizens who will make meaningful contributions to society. Our commitment is to provide an environment where every child can discover their unique potential and develop the confidence to chase their dreams.
                </p>
                <p>
                  I am committed to ensuring that our school continues to be a place of excellence, innovation, and inclusivity. Together, we will build a brighter future for our students.
                </p>
                <p className="font-roman font-semibold text-primary">
                  Warm regards,<br />
                  Shelesh Kumar<br />
                  Principal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophies */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Core Philosophies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePhilosophies.map((philosophy, index) => {
              const IconComponent = philosophy.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center border-t-4 border-secondary">
                  <IconComponent className="text-4xl text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-roman font-bold text-primary mb-2">{philosophy.title}</h3>
                  <p className="text-sm text-gray-700">{philosophy.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Our Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-secondary">
                <h3 className="text-xl font-roman font-bold text-primary mb-3">{area.title}</h3>
                <p className="text-gray-700 mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <FaCheckCircle className="text-secondary flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {achievements.map((item, index) => (
              <div key={index}>
                <h3 className="text-4xl font-roman font-bold text-secondary mb-2">{item.stat}</h3>
                <p className="text-gray-200">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision for Future */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Vision for the Future</h2>
          <div className="space-y-4">
            {visionPoints.map((point, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedVision(expandedVision === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-100 transition-all duration-300 text-left"
                >
                  <h3 className="text-lg font-roman font-bold text-primary">{point.title}</h3>
                  <span className="text-secondary text-2xl flex-shrink-0">{expandedVision === index ? "−" : "+"}</span>
                </button>
                {expandedVision === index && (
                  <div className="px-6 pb-6 bg-white border-t text-gray-700">
                    {point.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Key Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FaBook,
                title: "Digital Learning Platform",
                description: "Implementing AI-powered adaptive learning systems to personalize education for each student",
              },
              {
                icon: FaGraduationCap,
                title: "Global Exchange Programs",
                description: "Facilitating international partnerships for cultural exchange and global perspective",
              },
              {
                icon: FaLightbulb,
                title: "Innovation Lab",
                description: "Dedicated spaces for students to experiment, create, and bring their ideas to life",
              },
              {
                icon: FaUsers,
                title: "Mentorship Program",
                description: "Connecting students with industry experts and successful alumni for guidance",
              },
              {
                icon: FaHeart,
                title: "Well-being Program",
                description: "Comprehensive mental health and physical wellness initiatives for all",
              },
              {
                icon: FaChartLine,
                title: "Career Guidance",
                description: "Expert counseling to help students make informed choices about their future",
              },
            ].map((initiative, index) => {
              const IconComponent = initiative.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <IconComponent className="text-4xl text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-roman font-bold text-primary mb-2">{initiative.title}</h3>
                  <p className="text-sm text-gray-700">{initiative.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Message from Team */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md border-l-4 border-primary">
            <h3 className="text-2xl font-roman font-bold text-primary mb-4">A Final Word</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              As we move forward, I am confident that with the unwavering support of parents, the dedication of our staff, and the enthusiasm of our students, DPS Dungarpur will continue to scale new heights. Our doors are always open, and I invite you to be part of this incredible journey.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Together, let's build a community where every child discovers their potential, develops strong values, and becomes a force for positive change in the world.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-roman font-bold text-white mb-4">Excellence Through Education</h2>
          <p className="text-lg text-gray-200">Building leaders, innovators, and responsible citizens of tomorrow</p>
        </div>
      </section>
    </div>
  );
};

export default PrincipalMessage;