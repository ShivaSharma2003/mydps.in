import { FaShieldAlt, FaBook, FaUsers, FaCheckCircle, FaExclamationTriangle, FaHeart } from "react-icons/fa";
import { useState } from "react";

const CodeOfConduct = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const conductSections = [
    {
      id: 1,
      title: "Attendance & Punctuality",
      icon: FaCheckCircle,
      points: [
        "Students must attend school regularly and on time",
        "Attendance is mandatory for all classes and school activities",
        "Medical leave requires a valid doctor's certificate",
        "Absenteeism without valid reason may result in suspension",
        "Students should maintain at least 85% attendance",
        "Tardiness to school requires an explanation and may be noted",
      ],
    },
    {
      id: 2,
      title: "Academic Integrity",
      icon: FaBook,
      points: [
        "Plagiarism and copying are strictly prohibited",
        "Students must complete their own assignments and projects",
        "Cheating in exams will result in disciplinary action",
        "Submission of assignments on time is mandatory",
        "Any form of academic dishonesty will be reported to parents",
        "Students should seek help from teachers if struggling with coursework",
      ],
    },
    {
      id: 3,
      title: "Dress Code",
      icon: FaShieldAlt,
      points: [
        "Complete school uniform must be worn as prescribed",
        "Uniform should be neat, clean, and properly worn",
        "Shoes must be polished and socks should be of proper length",
        "No jewelry (except simple pendant) or accessories allowed",
        "Hair should be neat and properly maintained",
        "Students in PT uniform during scheduled classes must wear complete PE kit",
      ],
    },
    {
      id: 4,
      title: "Behavior & Conduct",
      icon: FaUsers,
      points: [
        "Students must respect teachers, staff, and fellow students",
        "Use of abusive language or gestures is strictly prohibited",
        "Violence, bullying, or harassment of any kind is not tolerated",
        "Students should maintain discipline in classrooms and corridors",
        "Queue should be formed while entering or leaving the premises",
        "Mobile phones are not permitted inside the school premises",
      ],
    },
    {
      id: 5,
      title: "Classroom Discipline",
      icon: FaBook,
      points: [
        "Students must arrive on time for all classes",
        "Complete attention should be given during lectures",
        "Homework must be completed and submitted on time",
        "Students should raise their hand before speaking",
        "No food or drink is allowed in classrooms",
        "Students must not use headphones or engage with gadgets during class",
      ],
    },
    {
      id: 6,
      title: "Safety & Security",
      icon: FaShieldAlt,
      points: [
        "Students must follow all safety rules and regulations",
        "No weapons or dangerous items are allowed on campus",
        "Emergency procedures must be followed during drills",
        "Students should not tamper with fire safety equipment",
        "Running, pushing, or other risky behavior is prohibited",
        "Report any suspicious activity to school authorities immediately",
      ],
    },
  ];

  const responsibilities = [
    {
      title: "Student Responsibilities",
      icon: FaUsers,
      items: [
        "Maintain academic excellence and participate actively",
        "Respect all members of the school community",
        "Follow all school rules and regulations",
        "Keep the campus clean and environment-friendly",
        "Attend all classes regularly and complete assignments",
        "Participate in co-curricular and extra-curricular activities",
        "Report any misconduct or violations to authorities",
        "Maintain personal hygiene and grooming standards",
      ],
    },
    {
      title: "Parent/Guardian Responsibilities",
      icon: FaHeart,
      items: [
        "Ensure regular attendance and timely arrival of child",
        "Provide necessary academic support at home",
        "Encourage participation in school activities",
        "Communicate with school regarding child's progress",
        "Ensure child follows dress code and maintains discipline",
        "Monitor children's use of digital devices and social media",
        "Cooperate with school in implementing policies",
        "Attend parent-teacher meetings and school functions",
      ],
    },
    {
      title: "Faculty & Staff Responsibilities",
      icon: FaBook,
      items: [
        "Teach with dedication and ensure quality education",
        "Treat all students fairly and with respect",
        "Maintain professional behavior at all times",
        "Provide constructive feedback and guidance",
        "Report misconduct through proper channels",
        "Create a safe and inclusive learning environment",
        "Update parents about student progress regularly",
        "Follow all school policies and regulations",
      ],
    },
  ];

  const disciplinaryActions = [
    { offense: "Minor Misconduct", action: "Verbal warning or written caution" },
    { offense: "Repeated Minor Violations", action: "Parent-teacher meeting and counseling" },
    { offense: "Major Violations", action: "Suspension for 3-7 days" },
    { offense: "Serious Offenses", action: "Suspension for 1-4 weeks" },
    { offense: "Very Serious Violations", action: "Termination of admission" },
    { offense: "Violence or Abuse", action: "Immediate suspension and investigation" },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="w-full py-12 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-roman font-bold text-white mb-2">Code of Conduct</h1>
          <p className="text-lg text-gray-200">Maintaining Excellence and Discipline</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-roman font-bold text-primary mb-6">Purpose & Principles</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Dungarpur Public School, Dungarpur is committed to fostering a disciplined, safe, and inclusive learning environment. The Code of Conduct outlines the expectations for all members of our school community—students, parents, teachers, and staff. Adherence to this code ensures that our school remains a place where academic excellence and character development thrive.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our code is based on the principles of respect, responsibility, integrity, and compassion. Every member of the school community is expected to uphold these values and contribute to a positive school culture.
            </p>
          </div>
        </div>
      </section>

      {/* Main Conduct Sections */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Student Code of Conduct</h2>
          <div className="space-y-4">
            {conductSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <div key={section.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-all duration-300 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg" style={{ backgroundColor: "#800000" }}>
                        <IconComponent className="text-2xl text-secondary" />
                      </div>
                      <h3 className="text-xl font-roman font-bold text-primary">{section.title}</h3>
                    </div>
                    <span className="text-secondary text-2xl shrink-0">{expandedSection === section.id ? "−" : "+"}</span>
                  </button>
                  {expandedSection === section.id && (
                    <div className="px-6 pb-6 border-t bg-gray-50">
                      <ul className="space-y-3">
                        {section.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <FaCheckCircle className="text-secondary mt-1 shrink-0" />
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Roles & Responsibilities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {responsibilities.map((resp, index) => {
              const IconComponent = resp.icon;
              return (
                <div key={index} className="bg-linear-to-br from-gray-50 to-white p-8 rounded-lg shadow-md border-l-4 border-secondary">
                  <div className="flex items-center gap-3 mb-6">
                    <IconComponent className="text-3xl text-primary" />
                    <h3 className="text-xl font-roman font-bold text-primary">{resp.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {resp.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-secondary font-bold mt-1">•</span>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Uniform & Dress Code</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-roman font-bold text-primary mb-6 pb-4 border-b-4 border-secondary">Regular Uniform</h3>
              <ul className="space-y-3">
                {[
                  "School blazer with emblem",
                  "White shirt/blouse",
                  "School tie (boys)",
                  "Maroon/grey trousers (boys)",
                  "Maroon skirt/trousers (girls)",
                  "Black polished shoes",
                  "Socks (as per color prescribed)",
                  "School badge and ID card",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-roman font-bold text-primary mb-6 pb-4 border-b-4 border-secondary">Physical Education Uniform</h3>
              <ul className="space-y-3">
                {[
                  "School PE shirt",
                  "PE shorts",
                  "White socks",
                  "Sports shoes",
                  "School PE bag",
                  "Hair tie (girls, if applicable)",
                  "Sports water bottle",
                  "Proper footwear with socks",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplinary Actions */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Disciplinary Actions</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-50 border-l-4 border-secondary p-6 rounded-r-lg mb-8">
              <div className="flex gap-3">
                <FaExclamationTriangle className="text-secondary text-xl flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  The school maintains the right to take appropriate disciplinary action based on the severity of the violation. Disciplinary measures are designed to educate and reform, not merely to punish.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {disciplinaryActions.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-300">
                  <div className="flex-1">
                    <h4 className="font-roman font-bold text-primary text-lg">{item.offense}</h4>
                  </div>
                  <div className="flex-1 text-right">
                    <p className="text-gray-700">{item.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Appeal Process */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Appeal & Grievance Redressal</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: 1, title: "Submit Appeal", desc: "Submit written appeal within 3 days of disciplinary action" },
                { step: 2, title: "Review", desc: "Administration reviews the appeal and gathers evidence" },
                { step: 3, title: "Decision", desc: "Final decision communicated to student and parents" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-roman font-bold text-white text-lg" style={{ backgroundColor: "#800000" }}>
                    {item.step}
                  </div>
                  <h4 className="text-lg font-roman font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Important Notes</h2>
          <div className="max-w-4xl mx-auto bg-blue-50 p-8 rounded-lg border-l-4 border-primary">
            <ul className="space-y-4">
              {[
                "The Code of Conduct applies to all students during school hours and at school-sponsored events",
                "Parents/guardians are responsible for ensuring their child adheres to the Code of Conduct",
                "Violation of any code may result in appropriate disciplinary action as per school policy",
                "The school reserves the right to modify the Code of Conduct as per need",
                "Students should seek clarification from teachers or administration regarding any rules",
                "Cooperation between school and home is essential for effective implementation",
              ].map((note, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-roman font-bold text-white mb-4">Commitment to Excellence</h2>
          <p className="text-lg text-gray-200 mb-6">By adhering to this Code of Conduct, we create a school environment where every student can thrive academically and personally.</p>
          <p className="text-gray-300">For any questions or concerns regarding the Code of Conduct, please contact the Principal's Office.</p>
        </div>
      </section>
    </div>
  );
};

export default CodeOfConduct;