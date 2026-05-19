import { FaUser, FaBook, FaTools, FaShieldAlt, FaAward, FaCalendar, FaPhone, FaEnvelope, FaCheckCircle, FaStar, FaFilePdf, FaDownload } from "react-icons/fa";
import { useState } from "react";

const StaffMembers = () => {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);
  const administrativeStaff = [
    {
      name: "Shelesh Kumar",
      role: "Principal",
      qualification: "MSC.",
      email: "principal@srsl.in",
      phone: "+91-86969-23797",
      specialization: "School Leadership & Management",
      about: "Leading the institution with vision and dedication towards excellence in education",
    },
  ];

  const teachingStaff = [
    {
      name: "Kalpana Pandya",
      role: "Primary Teacher (PRT)",
      subject: "Primary Section",
      qualification: "BA + B.Ed",
      experience: "-",
      specialization: "Primary Education",
      awards: "",
    },
    {
      name: "Kirti Sharma",
      role: "Trained Graduate Teacher (TGT)",
      subject: "Secondary Section",
      qualification: "MA + B.Ed",
      experience: "-",
      specialization: "Teaching Excellence",
      awards: "",
    },
    {
      name: "Savita Kumari",
      role: "Trained Graduate Teacher (TGT)",
      subject: "Secondary Section",
      qualification: "BSC + B.Ed",
      experience: "-",
      specialization: "Science Education",
      awards: "",
    },
    {
      name: "Preeti Shrimal",
      role: "Post-Graduate Teacher (PGT)",
      subject: "Senior Secondary",
      qualification: "MSC + B.Ed",
      experience: "-",
      specialization: "Advanced Subject Teaching",
      awards: "",
    },
    {
      name: "Sangeeta Panchal",
      role: "Primary Teacher (PRT)",
      subject: "Primary Section",
      qualification: "MA + D.El.Ed",
      experience: "-",
      specialization: "Elementary Education",
      awards: "",
    },
    {
      name: "Lal Singh Solanki",
      role: "Physical Education Teacher",
      subject: "Physical Education",
      qualification: "M.P.Ed",
      experience: "-",
      specialization: "Sports & Fitness",
      awards: "",
    },
    {
      name: "Rajendra Patidar",
      role: "Post-Graduate Teacher (PGT)",
      subject: "Senior Secondary",
      qualification: "B.Tech",
      experience: "-",
      specialization: "Technical Education",
      awards: "",
    },
    {
      name: "Nayan Sharma",
      role: "Trained Graduate Teacher (TGT)",
      subject: "Secondary Section",
      qualification: "MA + B.Ed",
      experience: "-",
      specialization: "Language & Literature",
      awards: "",
    },
    {
      name: "Vikram Singh Sisodiya",
      role: "Primary Teacher (PRT)",
      subject: "Primary Section",
      qualification: "MA + B.Ed",
      experience: "-",
      specialization: "Primary Education",
      awards: "",
    },
    {
      name: "Hardik Suthar",
      role: "Post-Graduate Teacher (PGT)",
      subject: "Senior Secondary",
      qualification: "MCA",
      experience: "-",
      specialization: "Computer Science",
      awards: "",
    },
    {
      name: "Vishal Jain",
      role: "Primary Teacher (PRT)",
      subject: "Primary Section",
      qualification: "B.Com",
      experience: "-",
      specialization: "Primary Education",
      awards: "",
    },
    {
      name: "Sonal Varma",
      role: "Nursery Teacher (NTT)",
      subject: "Pre-Primary Section",
      qualification: "BA",
      experience: "-",
      specialization: "Early Childhood Education",
      awards: "",
    },
    {
      name: "Kashish Jain",
      role: "Nursery Teacher (NTT)",
      subject: "Pre-Primary Section",
      qualification: "BA",
      experience: "-",
      specialization: "Early Childhood Education",
      awards: "",
    },
    {
      name: "Shiva Sharma",
      role: "Trained Graduate Teacher (TGT)",
      subject: "Secondary Section",
      qualification: "BCA",
      experience: "-",
      specialization: "Information Technology",
      awards: "",
    },
    {
      name: "Hemang Sharma",
      role: "Primary Teacher (PRT)",
      subject: "Primary Section",
      qualification: "BSC + D.El.Ed",
      experience: "-",
      specialization: "Primary Education",
      awards: "",
    },
    {
      name: "Khushbu Soni",
      role: "Nursery Teacher (NTT)",
      subject: "Pre-Primary Section",
      qualification: "BA + NTT",
      experience: "-",
      specialization: "Early Childhood Education",
      awards: "",
    },
    {
      name: "Sonia Sharma",
      role: "Trained Graduate Teacher (TGT)",
      subject: "Secondary Section",
      qualification: "BSC + B.Ed",
      experience: "-",
      specialization: "Science Education",
      awards: "",
    },
    {
      name: "Sandeep Kumar",
      role: "Trained Graduate Teacher (TGT)",
      subject: "Secondary Section",
      qualification: "BSC + B.Ed",
      experience: "-",
      specialization: "Science Education",
      awards: "",
    },
    {
      name: "Shivani Jain",
      role: "Primary Teacher (PRT)",
      subject: "Primary Section",
      qualification: "MA + B.Ed",
      experience: "-",
      specialization: "Primary Education",
      awards: "",
    },
    {
      name: "Hiral Bhatt",
      role: "Primary Teacher (PRT)",
      subject: "Primary Section",
      qualification: "MA + D.El.Ed",
      experience: "-",
      specialization: "Elementary Education",
      awards: "",
    },
    {
      name: "Munni Suthar",
      role: "Primary Teacher (PRT)",
      subject: "Primary Section",
      qualification: "BA",
      experience: "-",
      specialization: "Primary Education",
      awards: "",
    },
    {
      name: "Priyanka Mehta",
      role: "Primary Teacher (PRT)",
      subject: "Primary Section",
      qualification: "MA",
      experience: "-",
      specialization: "Primary Education",
      awards: "",
    },
    {
      name: "Komal Shrimal",
      role: "Primary Teacher (PRT)",
      subject: "Primary Section",
      qualification: "MA + D.El.Ed",
      experience: "-",
      specialization: "Elementary Education",
      awards: "",
    },
    {
      name: "Nisha Dixit",
      role: "Post-Graduate Teacher (PGT)",
      subject: "Senior Secondary",
      qualification: "MA + B.Ed",
      experience: "-",
      specialization: "Social Studies & Languages",
      awards: "",
    },
  ];

  const staffStatistics = [
    { stat: "26", label: "Total Staff Members" },
    { stat: "20+", label: "Teaching Staff" },
    { stat: "6+", label: "Various Qualifications" },
    { stat: "100%", label: "Qualified Teachers" },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="w-full py-12 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-roman font-bold text-white mb-2">Staff Members</h1>
          <p className="text-lg text-gray-200">Dedicated & Qualified Educators</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Dungarpur Public School, Dungarpur is proud of its team of dedicated professionals. Our staff comprises 26 qualified educators and support personnel who work together to create an environment conducive to learning and holistic development. Each team member is committed to excellence and student welfare.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {staffStatistics.map((item, index) => (
              <div key={index}>
                <h3 className="text-4xl font-roman font-bold text-secondary mb-2">{item.stat}</h3>
                <p className="text-gray-200">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Administrative Staff */}
      {/* <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Administrative Leadership</h2>
          <div className="space-y-4">
            {administrativeStaff.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedMember(expandedMember === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-all duration-300 text-left"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <FaUser className="text-3xl text-secondary flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-roman font-bold text-primary">{member.name}</h3>
                      <p className="text-sm text-secondary font-semibold">{member.role}</p>
                    </div>
                  </div>
                  <span className="text-secondary text-2xl flex-shrink-0">{expandedMember === index ? "−" : "+"}</span>
                </button>
                {expandedMember === index && (
                  <div className="px-6 pb-6 bg-gray-50 border-t space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-1">Qualification</p>
                        <p className="text-gray-700">{member.qualification}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-1">Experience</p>
                        <p className="text-gray-700">{member.experience}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-1">Specialization</p>
                        <p className="text-gray-700">{member.specialization}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-1">Email</p>
                        <p className="text-secondary text-sm">{member.email}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm border-t pt-4">{member.about}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Teaching Staff Highlight */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">All Teaching Staff</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachingStaff.map((teacher, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-secondary">
                <div className="flex items-start gap-3 mb-4">
                  <FaUser className="text-2xl text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-roman font-bold text-primary">{teacher.name}</h3>
                    <p className="text-xs text-secondary font-semibold mb-2">{teacher.role}</p>
                    <p className="text-xs text-gray-600">{teacher.subject}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm border-t pt-4">
                  <p className="text-gray-700"><span className="font-semibold">Qual:</span> {teacher.qualification}</p>
                  <p className="text-gray-700"><span className="font-semibold">Spec:</span> {teacher.specialization}</p>
                  {teacher.awards && (
                    <div className="flex items-start gap-1 pt-2">
                      <FaStar className="text-yellow-500 text-xs mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-gray-700">{teacher.awards}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Administrative Staff Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Administrative Leadership</h2>
          <div className="max-w-2xl mx-auto">
            {administrativeStaff.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-secondary">
                <button
                  onClick={() => setExpandedMember(expandedMember === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-all duration-300 text-left"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <FaUser className="text-4xl text-secondary flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-roman font-bold text-primary">{member.name}</h3>
                      <p className="text-sm text-secondary font-semibold">{member.role}</p>
                    </div>
                  </div>
                  <span className="text-secondary text-2xl flex-shrink-0">{expandedMember === index ? "−" : "+"}</span>
                </button>
                {expandedMember === index && (
                  <div className="px-6 pb-6 bg-gray-50 border-t space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-1">Qualification</p>
                        <p className="text-gray-700">{member.qualification}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-1">Email</p>
                        <p className="text-secondary text-sm">{member.email}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-1">Specialization</p>
                        <p className="text-gray-700">{member.specialization}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-1">Phone</p>
                        <p className="text-gray-700">{member.phone}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm border-t pt-4">{member.about}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Support & Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Library Services",
                icon: FaBook,
                staff: "2 librarians",
                services: [
                  "Digital library management",
                  "Reference services",
                  "Book recommendations",
                ],
              },
              {
                title: "Medical Services",
                staff: "1 nurse, 1 doctor (part-time)",
                services: [
                  "Regular health checkups",
                  "First aid facilities",
                  "Health awareness programs",
                ],
              },
              {
                title: "Maintenance & Facilities",
                icon: FaTools,
                staff: "8 technicians",
                services: [
                  "Campus maintenance",
                  "Equipment management",
                  "Infrastructure upkeep",
                ],
              },
              {
                title: "Security Services",
                icon: FaShieldAlt,
                staff: "12 security personnel",
                services: [
                  "24/7 security",
                  "CCTV monitoring",
                  "Emergency response",
                ],
              },
            ].map((service, index) => {
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md border-t-4 border-secondary">
                  <div className="flex items-center gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-roman font-bold text-primary">{service.title}</h3>
                      <p className="text-sm text-gray-600">{service.staff}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {service.services.map((svc, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{svc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Staff Development & Training</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Regular Training Programs",
                description: "Monthly professional development workshops on latest teaching methodologies and technology",
              },
              {
                title: "Certification Courses",
                description: "Support for staff pursuing higher qualifications and specialized certifications",
              },
              {
                title: "International Exposure",
                description: "Participation in international educational conferences and exchange programs",
              },
              {
                title: "Mentorship Program",
                description: "Senior staff mentoring junior teachers for continuous improvement",
              },
              {
                title: "Performance Recognition",
                description: "Annual awards for excellence in teaching and contributions to school community",
              },
              {
                title: "Well-being Initiatives",
                description: "Health programs, counseling services, and team building activities for staff",
              },
            ].map((program, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h3 className="text-lg font-roman font-bold text-primary mb-2">{program.title}</h3>
                <p className="text-gray-700 text-sm">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Values */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Our Staff Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "Integrity", description: "Honest and ethical conduct in all endeavors" },
              { value: "Excellence", description: "Commitment to highest standards of quality" },
              { value: "Compassion", description: "Empathy and care for student well-being" },
              { value: "Innovation", description: "Continuous improvement and creative approaches" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-secondary">
                <FaAward className="text-4xl text-secondary mx-auto mb-3" />
                <h3 className="text-lg font-roman font-bold text-primary mb-2">{item.value}</h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Staff */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-roman font-bold text-primary mb-8">Connect with Our Team</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Our staff members are always available to support students and parents. Feel free to reach out with any questions or concerns.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md">
              <FaPhone className="text-3xl text-secondary mx-auto mb-3" />
              <h3 className="font-roman font-bold text-primary mb-2">Main Office</h3>
              <p className="text-gray-700">+91-2964-XXXXXX</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md">
              <FaEnvelope className="text-3xl text-secondary mx-auto mb-3" />
              <h3 className="font-roman font-bold text-primary mb-2">Email</h3>
              <p className="text-gray-700">info@dpsdungarpur.edu.in</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md">
              <FaCalendar className="text-3xl text-secondary mx-auto mb-3" />
              <h3 className="font-roman font-bold text-primary mb-2">Office Hours</h3>
              <p className="text-gray-700">Mon-Fri, 8:30 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Staff List */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Download Staff Directory</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-secondary text-center">
              <FaFilePdf className="text-5xl text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-roman font-bold text-primary mb-2">Staff List 2026-27</h3>
              <p className="text-gray-700 mb-2">Complete list of all teaching and non-teaching staff</p>
              <p className="text-sm text-gray-600 mb-6">Excel Format • 26 Staff Members</p>
              <a
                href="/files/STAFF LIST 26-27.xlsx"
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
              >
                <FaDownload className="text-sm" />
                Download Staff List (Excel)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-roman font-bold text-white mb-4">Dedicated to Student Success</h2>
          <p className="text-lg text-gray-200">Our staff is committed to creating an environment where every student can thrive</p>
        </div>
      </section>
    </div>
  );
};

export default StaffMembers;