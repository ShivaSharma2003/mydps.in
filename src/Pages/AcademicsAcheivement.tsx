import { FaMedal, FaChartLine, FaCertificate, FaTrophy, FaBook } from "react-icons/fa";

const AcademicsAcheivement = () => {
  const boardResults = [
    { exam: "Class X CBSE", passPercentage: 98.5, avgPercentage: 82.3, toppers: 12 },
    { exam: "Class XII CBSE", passPercentage: 99.2, avgPercentage: 84.1, toppers: 15 },
  ];

  const achievements = [
    {
      icon: FaMedal,
      title: "Board Excellence",
      details: [
        "98.5% Pass Rate in Class X",
        "99.2% Pass Rate in Class XII",
        "Average Score: 84.1%",
        "27 Students with 90%+ Marks",
      ],
    },
    {
      icon: FaTrophy,
      title: "National Competitions",
      details: [
        "National Mathematics Olympiad - 3 selections",
        "National Science Olympiad - 5 selections",
        "All India Spelling Bee - 2nd Prize",
        "National Debate Championship - Semi-finals",
      ],
    },
    {
      icon: FaChartLine,
      title: "Subject Performance",
      details: [
        "Mathematics: Average 88.5%",
        "Science: Average 86.2%",
        "English: Average 85.7%",
        "Social Studies: Average 87.3%",
      ],
    },
    {
      icon: FaCertificate,
      title: "Certifications",
      details: [
        "100+ Students - Cambridge English",
        "50+ Students - NPTEL Courses",
        "Advanced Coding Certifications - 35 students",
        "Digital Literacy Programs - 200+ students",
      ],
    },
  ];

  const programsOffered = [
    { name: "Science Stream", classes: "Classes XI-XII", subjects: "Physics, Chemistry, Biology, Mathematics" },
    { name: "Commerce Stream", classes: "Classes XI-XII", subjects: "Accounts, Economics, Business Studies" },
    { name: "Humanities Stream", classes: "Classes XI-XII", subjects: "History, Geography, Political Science" },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="w-full py-12 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-roman font-bold text-white mb-2">Academic Achievements</h1>
          <p className="text-lg text-gray-200">Excellence in Education & Scholarship</p>
        </div>
      </section>

      {/* Board Results Overview */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Board Examination Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {boardResults.map((result, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-secondary">
                <h3 className="text-2xl font-roman font-bold text-primary mb-6">{result.exam}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Pass Rate:</span>
                    <span className="text-2xl font-bold text-primary">{result.passPercentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-secondary h-2 rounded-full"
                      style={{ width: `${result.passPercentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-gray-700 font-semibold">Average Percentage:</span>
                    <span className="text-2xl font-bold text-primary">{result.avgPercentage}%</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-gray-700 font-semibold">90%+ Toppers:</span>
                    <span className="text-2xl font-bold text-secondary">{result.toppers}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Highlights */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Major Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 rounded-lg" style={{ backgroundColor: "#800000" }}>
                      <IconComponent className="text-3xl text-secondary" />
                    </div>
                    <h3 className="text-2xl font-roman font-bold text-primary">{achievement.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {achievement.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-secondary font-bold mt-1">•</span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Class Toppers */}
      {/* <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Class Toppers</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {classToppersData.map((classData, classIdx) => (
              <div key={classIdx} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6" style={{ backgroundColor: "#800000" }}>
                  <h3 className="text-2xl font-roman font-bold text-white">{classData.class}</h3>
                </div>
                <div className="p-6 space-y-4">
                  {classData.toppers.map((topper, topperIdx) => (
                    <div key={topperIdx} className="border-l-4 border-secondary pl-4 py-2">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-lg font-roman font-bold text-primary">{topper.name}</h4>
                        <span className="text-xl font-bold text-secondary">{topper.percentage}%</span>
                      </div>
                      <p className="text-sm text-gray-600">{topper.subjects}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Programs Offered */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Academic Streams</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programsOffered.map((program, index) => (
              <div key={index} className="bg-linear-to-br from-gray-50 to-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-secondary">
                <div className="flex items-center gap-3 mb-4">
                  <FaBook className="text-2xl text-primary" />
                  <h3 className="text-xl font-roman font-bold text-primary">{program.name}</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-700">Classes:</span> {program.classes}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-700">Subjects:</span> {program.subjects}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "98.5%", label: "Class X Pass Rate" },
              { stat: "99.2%", label: "Class XII Pass Rate" },
              { stat: "84.1%", label: "Average Score" },
              { stat: "150+", label: "Merit Students" },
            ].map((item, index) => (
              <div key={index} className="text-white">
                <h3 className="text-4xl font-roman font-bold text-secondary mb-2">{item.stat}</h3>
                <p className="text-gray-200">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicsAcheivement;