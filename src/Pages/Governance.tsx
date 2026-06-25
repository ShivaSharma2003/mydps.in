import {
  FaUserTie,
  FaClipboardList,
  FaGavel,
  FaUsers,
  FaCheckCircle,
  FaLightbulb,
  FaLeaf,
  FaBook,
  FaHandshake,
  FaEnvelope,
} from "react-icons/fa";

const Governance = () => {
  const governingBody = [
    {
      role: "Chairman",
      name: "Mr. Vikas Ladia",
      experience: "25+ years in Education & Business",
      qualification: "MSC.",
      contact: "vikas@srsl.in",
    },
    {
      role: "Principal",
      name: "Mr. Shelesh Kumar",
      qualification: "MSC.",
      experience: "18+ years in School Management",
      contact: "principaldps@srsl.in",
    },
    {
      role: "Member",
      name: "Mr. Suresh Chandra Joshi",
      qualification: "M.A. (Economics)",
      experience: "40 Years of HR Management",
    },
    {
      role: "Treasurer",
      name: "Mr. Harish Ajmera",
      qualification: "M.Com",
      experience: "",
    },
  ];

  // const committees = [
  //   {
  //     name: "Academic Committee",
  //     chair: "Dr. Shelesh Kumar (Principal)",
  //     members: 8,
  //     responsibilities: [
  //       "Curriculum development and review",
  //       "Teaching methodology improvement",
  //       "Student assessment and evaluation",
  //       "Academic standards maintenance",
  //     ],
  //   },
  //   {
  //     name: "Finance Committee",
  //     chair: "Mr. Ashok Mehta (Secretary)",
  //     members: 5,
  //     responsibilities: [
  //       "Budget planning and allocation",
  //       "Financial transparency and audits",
  //       "Fee structure review",
  //       "Infrastructure investments",
  //     ],
  //   },
  //   {
  //     name: "Discipline Committee",
  //     chair: "Mr. Suresh Verma (Academic Head)",
  //     members: 6,
  //     responsibilities: [
  //       "Student discipline matters",
  //       "Code of conduct enforcement",
  //       "Grievance redressal",
  //       "Counseling services",
  //     ],
  //   },
  //   {
  //     name: "Sports & Recreation Committee",
  //     chair: "Mrs. Anjali Singh (Sports Director)",
  //     members: 6,
  //     responsibilities: [
  //       "Sports program development",
  //       "Inter-school competitions",
  //       "Talent identification",
  //       "Sports infrastructure management",
  //     ],
  //   },
  //   {
  //     name: "Parent-Teacher Association",
  //     chair: "Rotating Parent Member",
  //     members: 12,
  //     responsibilities: [
  //       "Parent engagement programs",
  //       "Community building activities",
  //       "Fund raising for school projects",
  //       "Bridge between parents and school",
  //     ],
  //   },
  //   {
  //     name: "Safety & Security Committee",
  //     chair: "Principal & Security Head",
  //     members: 7,
  //     responsibilities: [
  //       "Campus safety protocols",
  //       "Emergency preparedness",
  //       "Fire safety compliance",
  //       "Cybersecurity measures",
  //     ],
  //   },
  // ];

  const policies = [
    {
      title: "Admission Policy",
      icon: FaBook,
      description:
        "Fair and transparent admission procedures based on merit and interviews",
    },
    {
      title: "Fee Refund Policy",
      icon: FaClipboardList,
      description: "Clear guidelines for fee refunds in case of withdrawal",
    },
    {
      title: "Anti-Bullying Policy",
      icon: FaGavel,
      description: "Zero tolerance for bullying and harassment",
    },
    {
      title: "Code of Conduct",
      icon: FaCheckCircle,
      description:
        "Expected behavior standards for students, staff, and parents",
    },
    {
      title: "Child Safety Policy",
      icon: FaLightbulb,
      description:
        "Comprehensive measures to ensure child safety and protection",
    },
    {
      title: "Grievance Redressal",
      icon: FaHandshake,
      description: "Fair process for addressing concerns and complaints",
    },
    {
      title: "Sustainability Policy",
      icon: FaLeaf,
      description: "Environmental conservation and sustainable practices",
    },
    {
      title: "Academic Integrity",
      icon: FaUsers,
      description: "Guidelines against plagiarism and academic dishonesty",
    },
  ];

  const coreValues = [
    {
      value: "Excellence",
      description:
        "Pursuit of academic and personal excellence in all endeavors",
    },
    {
      value: "Integrity",
      description: "Honesty, ethics, and moral principles in all actions",
    },
    {
      value: "Inclusivity",
      description: "Creating an inclusive environment for all students",
    },
    {
      value: "Innovation",
      description: "Encouraging creative thinking and new approaches",
    },
    {
      value: "Compassion",
      description: "Empathy and care for the well-being of others",
    },
    {
      value: "Responsibility",
      description: "Accountability for personal and social responsibilities",
    },
  ];

  const transparency = [
    {
      title: "Annual Reports",
      description:
        "Comprehensive annual reports on academic and administrative performance",
    },
    {
      title: "Financial Statements",
      description: "Audited financial statements available for public scrutiny",
    },
    {
      title: "Audit Reports",
      description:
        "Regular internal and external audits for financial compliance",
    },
    {
      title: "Policy Documents",
      description: "All major policies available on school website",
    },
    {
      title: "Grievance Mechanism",
      description: "Open channel for reporting grievances and concerns",
    },
    {
      title: "Parent Feedback",
      description: "Regular feedback collection from parents and stakeholders",
    },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section
        className="w-full py-12 px-4"
        style={{ backgroundColor: "#800000" }}
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-roman font-bold text-white mb-2">
            Governance
          </h1>
          <p className="text-lg text-gray-200">
            Transparent Leadership & Accountability
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Dungarpur Public School, Dungarpur operates under transparent
            governance principles. Our governing body and management structure
            are dedicated to maintaining the highest standards of educational
            excellence, financial integrity, and accountability to all
            stakeholders.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-secondary"
              >
                <h3 className="text-xl font-roman font-bold text-primary mb-2">
                  {item.value}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-md border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-roman font-bold text-primary">
                  Vision
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be a leading educational institution that develops students
                into responsible, ethical, and accomplished individuals equipped
                with knowledge, skills, and values to contribute positively to
                society and the world.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-md border-l-4 border-secondary">
              <div className="flex items-center gap-3 mb-4">
                <FaLightbulb className="text-3xl text-secondary" />
                <h3 className="text-2xl font-roman font-bold text-primary">
                  Mission
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide quality education that fosters intellectual growth,
                character development, and overall personality development
                through innovative teaching methods, modern facilities, and a
                supportive learning environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governing Body */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">
            Governing Body
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {governingBody.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: "#800000" }}
                  >
                    <FaUserTie className="text-3xl text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-roman font-bold text-primary">
                      {member.role}
                    </h3>
                    <p className="text-primary font-semibold mb-2">
                      {member.name}
                    </p>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>
                        <span className="font-semibold">Qualification:</span>{" "}
                        {member.qualification}
                      </p>
                      <p>
                        <span className="font-semibold">Experience:</span>{" "}
                        {member.experience}
                      </p>
                      <p className="text-primary font-semibold flex gap-2 items-center">
                        <FaEnvelope />
                        {member.contact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committees */}
      {/* <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">
            School Committees
          </h2>
          <div className="space-y-4">
            {committees.map((committee, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedRole(expandedRole === index ? null : index)
                  }
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-all duration-300 text-left"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-roman font-bold text-primary">
                      {committee.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Chair: {committee.chair}
                    </p>
                  </div>
                  <span className="text-secondary text-2xl flex-shrink-0">
                    {expandedRole === index ? "−" : "+"}
                  </span>
                </button>
                {expandedRole === index && (
                  <div className="px-6 pb-6 border-t bg-gray-50">
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 font-semibold">
                        Members:{" "}
                        <span className="text-primary">
                          {committee.members}
                        </span>
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-primary mb-3">
                      Responsibilities:
                    </p>
                    <ul className="space-y-2">
                      {committee.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Policies */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">
            School Policies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {policies.map((policy, index) => {
              const IconComponent = policy.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
                >
                  <IconComponent className="text-4xl text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-roman font-bold text-primary mb-2">
                    {policy.title}
                  </h3>
                  <p className="text-sm text-gray-600">{policy.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transparency & Accountability */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">
            Transparency & Accountability
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transparency.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-secondary"
              >
                <h3 className="text-lg font-roman font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accountability Measures */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">
            Accountability Measures
          </h2>
          <div className="max-w-4xl mx-auto bg-blue-50 p-8 rounded-lg border-l-4 border-primary">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Regular internal and external audits",
                "Annual performance reviews",
                "Parent feedback and suggestions",
                "Student grievance redressal",
                "Financial transparency and disclosure",
                "Compliance with government regulations",
                "Staff performance evaluations",
                "Quality assurance mechanisms",
              ].map((measure, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{measure}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Governance;
