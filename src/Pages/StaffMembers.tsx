import { FaUser, FaBook, FaTools, FaShieldAlt, FaAward, FaCalendar, FaPhone, FaEnvelope, FaCheckCircle, FaStar } from "react-icons/fa";
import { useState } from "react";

const StaffMembers = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedMember, setExpandedMember] = useState<number | null>(null);

  const staffCategories = [
    { id: "all", name: "All Staff", count: 200 },
    { id: "administration", name: "Administration", count: 6 },
    { id: "teaching", name: "Teaching Staff", count: 120 },
    { id: "support", name: "Support Staff", count: 40 },
    { id: "specialized", name: "Specialized Services", count: 34 },
  ];

  const administrativeStaff = [
    {
      name: "Dr. Vikram Patel",
      role: "Principal",
      qualification: "Ph.D in Education, M.A",
      experience: "18+ years",
      email: "principal@dpsdungarpur.edu.in",
      phone: "+91-2964-XXXXXX",
      specialization: "School Management & Leadership",
      about: "Visionary leader with extensive experience in school administration and curriculum development",
    },
    {
      name: "Mr. Suresh Verma",
      role: "Academic Head",
      qualification: "M.Sc, B.Ed",
      experience: "15+ years",
      email: "academics@dpsdungarpur.edu.in",
      phone: "+91-2964-XXXXXX",
      specialization: "Curriculum Design & Academic Excellence",
      about: "Expert in curriculum development and academic planning",
    },
    {
      name: "Mrs. Anjali Singh",
      role: "Sports Director",
      qualification: "B.P.Ed, M.A",
      experience: "12+ years",
      email: "sports@dpsdungarpur.edu.in",
      phone: "+91-2964-XXXXXX",
      specialization: "Sports Management & Athlete Development",
      about: "Dedicated to promoting sports excellence and student fitness",
    },
    {
      name: "Ms. Sneha Patel",
      role: "Cultural Coordinator",
      qualification: "M.A in Arts, B.Ed",
      experience: "10+ years",
      email: "culture@dpsdungarpur.edu.in",
      phone: "+91-2964-XXXXXX",
      specialization: "Cultural Programs & Events Management",
      about: "Passionate about fostering cultural awareness and artistic expression",
    },
    {
      name: "Mr. Ashok Mehta",
      role: "Finance Officer",
      qualification: "B.Com, CA",
      experience: "14+ years",
      email: "finance@dpsdungarpur.edu.in",
      phone: "+91-2964-XXXXXX",
      specialization: "Financial Management & Auditing",
      about: "Ensures financial transparency and proper resource management",
    },
    {
      name: "Mrs. Kavya Nair",
      role: "Admission Officer",
      qualification: "B.A, Diploma in Counselling",
      experience: "8+ years",
      email: "admissions@dpsdungarpur.edu.in",
      phone: "+91-2964-XXXXXX",
      specialization: "Admissions & Student Counseling",
      about: "Guides students and parents through admission process",
    },
  ];

  const teachingStaff = [
    {
      name: "Mr. Rajesh Kumar Singh",
      role: "Senior Mathematics Teacher",
      subject: "Mathematics (Classes IX-XII)",
      qualification: "M.Sc, B.Ed",
      experience: "16 years",
      specialization: "Advanced Calculus & Problem Solving",
      awards: "Best Teacher Award 2023",
    },
    {
      name: "Dr. Meena Sharma",
      role: "Senior Science Teacher",
      subject: "Physics (Classes XI-XII)",
      qualification: "Ph.D, B.Ed",
      experience: "14 years",
      specialization: "Physics & Experimental Learning",
      awards: "National Science Excellence Award",
    },
    {
      name: "Mrs. Priya Verma",
      role: "English Language Teacher",
      subject: "English (Classes VI-XII)",
      qualification: "M.A English, B.Ed",
      experience: "12 years",
      specialization: "Literature & Communication Skills",
      awards: "Best Mentor Award 2024",
    },
    {
      name: "Mr. Arjun Desai",
      role: "History & Social Studies Teacher",
      subject: "Social Studies (Classes VI-X)",
      qualification: "M.A History, B.Ed",
      experience: "11 years",
      specialization: "Historical Analysis & Civic Engagement",
      awards: "Innovative Teaching Award",
    },
    {
      name: "Ms. Neha Singh",
      role: "Computer Science Teacher",
      subject: "Computer Science (Classes IX-XII)",
      qualification: "B.Tech, B.Ed",
      experience: "9 years",
      specialization: "Coding & Digital Literacy",
      awards: "Technology Innovation Award",
    },
    {
      name: "Mr. Suresh Kumar",
      role: "Physical Education Teacher",
      subject: "Physical Education (All Classes)",
      qualification: "B.P.Ed, M.A",
      experience: "13 years",
      specialization: "Sports Training & Fitness",
      awards: "Sports Excellence Coach",
    },
    {
      name: "Mrs. Anjali Patel",
      role: "Primary Teacher",
      subject: "Classes I-III",
      qualification: "B.A, B.Ed",
      experience: "10 years",
      specialization: "Early Childhood Education",
      awards: "Best Primary Teacher 2023",
    },
    {
      name: "Mr. Vikram Nair",
      role: "Art Teacher",
      subject: "Art & Craft (All Classes)",
      qualification: "M.F.A, B.Ed",
      experience: "12 years",
      specialization: "Visual Arts & Creative Expression",
      awards: "Art Excellence Award",
    },
  ];

  const staffStatistics = [
    { stat: "200+", label: "Total Staff Members" },
    { stat: "120+", label: "Teaching Staff" },
    { stat: "50+", label: "Average Experience (years)" },
    { stat: "95%", label: "With Advanced Qualifications" },
  ];

  const departments = [
    {
      name: "Academic Department",
      head: "Mr. Suresh Verma",
      staff: "60+ teachers",
      description: "Responsible for curriculum design, teaching quality, and academic excellence",
      focus: ["Curriculum Development", "Teacher Training", "Assessment & Evaluation"],
    },
    {
      name: "Sports Department",
      head: "Mrs. Anjali Singh",
      staff: "15+ coaches",
      description: "Manages sports programs, training, and competitive events",
      focus: ["Athlete Development", "Tournament Organization", "Fitness Programs"],
    },
    {
      name: "Cultural Department",
      head: "Ms. Sneha Patel",
      staff: "10+ coordinators",
      description: "Organizes cultural programs, events, and activities",
      focus: ["Cultural Programs", "Talent Development", "Event Management"],
    },
    {
      name: "Administrative Department",
      head: "Dr. Vikram Patel",
      staff: "20+ staff",
      description: "Manages overall school operations and governance",
      focus: ["School Management", "Policy Implementation", "Stakeholder Relations"],
    },
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
            Dungarpur Public School, Dungarpur is proud of its team of over 200 dedicated professionals. Our staff comprises qualified educators, experienced administrators, and skilled support personnel who work together to create an environment conducive to learning and holistic development. Each team member is committed to excellence and student welfare.
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

      {/* Category Filter */}
      <section className="w-full py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-roman font-bold text-primary text-center mb-8">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {staffCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat.name} <span className="text-sm">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">School Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-secondary">
                <h3 className="text-lg font-roman font-bold text-primary mb-2">{dept.name}</h3>
                <div className="space-y-2 text-sm mb-4">
                  <p className="text-gray-700"><span className="font-semibold">Head:</span> {dept.head}</p>
                  <p className="text-gray-700"><span className="font-semibold">Staff:</span> {dept.staff}</p>
                </div>
                <p className="text-gray-700 mb-4">{dept.description}</p>
                <div className="space-y-2">
                  {dept.focus.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className="text-secondary flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Administrative Staff */}
      <section className="w-full py-16 px-4 bg-gray-50">
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
      </section>

      {/* Teaching Staff Highlight */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Teaching Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachingStaff.slice(0, 8).map((teacher, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="min-w-0">
                    <h3 className="text-sm font-roman font-bold text-primary truncate">{teacher.name}</h3>
                    <p className="text-xs text-gray-600 truncate">{teacher.subject}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700"><span className="font-semibold">Exp:</span> {teacher.experience}</p>
                  <p className="text-gray-700"><span className="font-semibold">Spec:</span> {teacher.specialization}</p>
                  {teacher.awards && (
                    <div className="flex items-start gap-1 pt-2 border-t">
                      <FaStar className="text-secondary text-xs mt-1 flex-shrink-0" />
                      <p className="text-xs text-gray-700">{teacher.awards}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300">
              View All Teachers
            </button>
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