import {
  FaHeart,
  FaLightbulb,
  FaUsers,
  FaCheckCircle,
  FaEnvelope,
} from "react-icons/fa";
import { useState } from "react";

const ChairmanMessage = () => {
  const [expandedVision, setExpandedVision] = useState<number | null>(null);

  const coreValues = [
    {
      title: "Educational Excellence",
      description:
        "Maintaining highest standards in academic and co-curricular activities",
      icon: FaCheckCircle,
    },
    {
      title: "Holistic Growth",
      description:
        "Developing well-rounded individuals with strong values and character",
      icon: FaHeart,
    },
    {
      title: "Innovation & Progress",
      description: "Embracing modern methodologies and technology in education",
      icon: FaLightbulb,
    },
    {
      title: "Community Commitment",
      description: "Building a supportive community for every stakeholder",
      icon: FaUsers,
    },
  ];

  const visionPoints = [
    {
      title: "Academic Leadership",
      content:
        "Positioning DPS as a premier institution delivering world-class education that prepares students for global opportunities and competitive excellence.",
    },
    {
      title: "Character Development",
      content:
        "Instilling values of integrity, discipline, and social responsibility in every student to create responsible citizens of tomorrow.",
    },
    {
      title: "Sustainable Growth",
      content:
        "Building a financially sustainable and environmentally conscious institution that serves the community with distinction.",
    },
    {
      title: "Inclusive Excellence",
      content:
        "Creating an inclusive environment where diversity is celebrated and every student has equal opportunities to excel and grow.",
    },
    {
      title: "Stakeholder Partnership",
      content:
        "Fostering strong relationships with parents, staff, and community to create a unified support system for student success.",
    },
  ];

  const achievements = [
    { stat: "25+", label: "Years of Excellence" },
    { stat: "500+", label: "Students Enrolled" },
    { stat: "95%", label: "Academic Success" },
    { stat: "50+", label: "Award Winners" },
  ];

  const chairmanProfile = {
    name: "Mr. Vikas Ladia",
    designation: "Chairman",
    qualification: "",
    experience: "30+ years in Education & Administration",
    email: "vikas@srsl.in",
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="w-full py-12 px-4"
        style={{ backgroundColor: "#800000" }}
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-roman font-bold text-white mb-2">
            Chairman's Message
          </h1>
          <p className="text-lg text-gray-200">
            Leadership Vision for Educational Excellence
          </p>
        </div>
      </section>

      {/* Chairman Profile & Welcome */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Profile Card */}
            <div
              className="bg-linear-to-br from-gray-50 to-white p-8 rounded-lg shadow-lg text-center border-t-4"
              style={{ borderTopColor: "#FFDF20" }}
            >
              <div
                className="w-32 h-32 mx-auto mb-6 rounded-full p-1"
                style={{ backgroundColor: "#800000" }}
              >
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                  <img src="/assets/users/vikasLadia.jpeg" alt="Vikas Ladia Photo" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>
              <h2
                className="text-2xl font-roman font-bold mb-1"
                style={{ color: "#800000" }}
              >
                {chairmanProfile.name}
              </h2>
              <p className="font-semibold mb-4" style={{ color: "#FFDF20" }}>
                {chairmanProfile.designation}
              </p>
              <div className="space-y-2 text-sm text-gray-700 mb-6">
                <p>
                  <span className="font-semibold">Qualification:</span>{" "}
                  {chairmanProfile.qualification}
                </p>
                <p>
                  <span className="font-semibold">Experience:</span>{" "}
                  {chairmanProfile.experience}
                </p>
              </div>
              <div className="border-t pt-4 space-y-2 flex flex-col items-center text-sm">
                <p className="flex items-center gap-2 text-gray-600">
                  <FaEnvelope
                    className="text-sm"
                    style={{ color: "#800000" }}
                  />
                  {chairmanProfile.email}
                </p>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="md:col-span-2">
              <h3
                className="text-3xl font-roman font-bold mb-6"
                style={{ color: "#800000" }}
              >
                A Message of Vision
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed text-justify italic">
                <p>Dear Fellow Citizens of Dungarpur,</p>
                <p>
                  I was deputed to Dungarpur by my family on 1st July 1995 and
                  have since been associated with the people of Dungarpur .
                  During my journey here , I found genuine humanity in the
                  people and made many good friends . A reasonable dialogue and
                  the friendly nature of the natives of Dungarpur is rare to be
                  found elsewhere.
                </p>
                <p>
                  Dungarpur Public School ( DPS ) as the name suggests was
                  incorporated for betterment of society and remains to be a no
                  profit social impact project . The school is operated by a
                  professional team of educators and has the support of an
                  eminent and highly qualified Management Committee . We aim at
                  DPS to give highest freedom of educational practices to the
                  Principal and at the same time be a guiding force. As the
                  School is completes 31 academic years , Infrastructure
                  re-development and facility augmentation will be our focus in
                  the coming years .
                </p>
                <p>
                  As we continue to evolve, we are committed to integrating
                  modern pedagogies with time-tested values. Our focus remains
                  on ensuring that every child receives quality education,
                  personalized attention, and opportunities to discover their
                  unique talents.
                </p>
                <p>
                  On behalf of the entire management team of the school , I
                  assure you of our best efforts and hard work to retain the
                  high quality of education , good personality development and
                  opportunities for good living for all our students for which
                  we have been looked upon and appreciated in the past.
                </p>
                <p
                  className="font-roman font-semibold"
                  style={{ color: "#800000" }}
                >
                  With warm wishes and optimistic vision,
                  <br />
                  Vikas Ladia
                  <br />
                  Chairman, DPS Dungarpur
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-roman font-bold text-center mb-12"
            style={{ color: "#800000" }}
          >
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center border-t-4"
                  style={{ borderTopColor: "#FFDF20" }}
                >
                  <IconComponent
                    className="text-4xl mx-auto mb-4"
                    style={{ color: "#FFDF20" }}
                  />
                  <h3
                    className="text-lg font-roman font-bold mb-2"
                    style={{ color: "#800000" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-700">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Vision */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-roman font-bold text-center mb-12"
            style={{ color: "#800000" }}
          >
            Strategic Vision
          </h2>
          <div className="space-y-4">
            {visionPoints.map((point, index) => (
              <div
                key={index}
                className="border-l-4 border-secondary pl-6 py-4 bg-gray-50 rounded cursor-pointer transition-all"
                onClick={() =>
                  setExpandedVision(expandedVision === index ? null : index)
                }
              >
                <h3
                  className="text-lg font-roman font-bold mb-2"
                  style={{ color: "#800000" }}
                >
                  {point.title}
                </h3>
                {expandedVision === index && (
                  <p className="text-gray-700 leading-relaxed">
                    {point.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Stats */}
      <section
        className="w-full py-16 px-4"
        style={{ backgroundColor: "#800000" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-center text-white mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl md:text-5xl font-roman font-bold mb-2">
                  {achievement.stat}
                </div>
                <p className="text-lg">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl font-roman font-bold mb-6"
            style={{ color: "#800000" }}
          >
            Join Our Community
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            We invite you to be part of the DPS family. Whether you're a
            prospective student, parent, or educator, we welcome you to
            experience the transformative power of quality education combined
            with strong values.
          </p>
          <button
            onClick={() => (window.location.href = "/contact-us")}
            className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: "#800000" }}
          >
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default ChairmanMessage;
