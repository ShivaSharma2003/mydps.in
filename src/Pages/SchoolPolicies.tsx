import { FaBook, FaShieldAlt, FaDollarSign, FaCalendar, FaCheckCircle, FaGavel, FaHeart, FaLightbulb, FaLeaf, FaCamera } from "react-icons/fa";
import { useState } from "react";

const SchoolPolicies = () => {
  const [expandedPolicy, setExpandedPolicy] = useState<number | null>(null);

  const policies = [
    {
      title: "Admission Policy",
      icon: FaBook,
      overview: "Guidelines for admission to all classes",
      details: [
        {
          heading: "Eligibility Criteria",
          content: "Admission is open to all students who meet the age criteria and pass the school's entrance examination if applicable. Preference is given to applications that demonstrate commitment to academics and co-curricular activities."
        },
        {
          heading: "Application Process",
          content: "Applications can be submitted online or offline during the designated admission period. Required documents include birth certificate, previous school records, health documents, and passport-size photographs."
        },
        {
          heading: "Selection Criteria",
          content: "Selection is based on merit, interview performance, and availability of seats. Priority is given to siblings of current students and children of school alumni."
        },
        {
          heading: "Fee Payment",
          content: "Admission is confirmed only after fee deposit is made. The deposit becomes non-refundable once the admission is finalized."
        },
      ],
    },
    {
      title: "Attendance Policy",
      icon: FaCalendar,
      overview: "Mandatory attendance and leave guidelines",
      details: [
        {
          heading: "Attendance Requirement",
          content: "Students are required to maintain 85% attendance to be eligible for board examinations. Parents must inform the school in case of absence through SMS or email."
        },
        {
          heading: "Authorized Leaves",
          content: "Leaves for medical emergencies, family events, and religious occasions are permitted with prior notification. Medical certificates are required for absences exceeding 5 days."
        },
        {
          heading: "Unauthorized Absence",
          content: "Repeated unauthorized absences will result in communication with parents and appropriate disciplinary action as per school rules."
        },
        {
          heading: "Late Arrival",
          content: "Students arriving after the scheduled assembly time will be marked late. Repeated lateness will trigger parent-teacher conferences."
        },
      ],
    },
    {
      title: "Academic Integrity Policy",
      icon: FaCheckCircle,
      overview: "Standards for honest academic work",
      details: [
        {
          heading: "Plagiarism Prevention",
          content: "All written assignments, projects, and research papers must be original work. Students must properly cite sources. Plagiarism will result in disciplinary action and academic consequences."
        },
        {
          heading: "Examination Conduct",
          content: "Students must maintain academic honesty during examinations. Cheating or attempting to cheat will result in paper cancellation and disciplinary proceedings."
        },
        {
          heading: "Assignment Guidelines",
          content: "Students are expected to complete assignments independently. Teachers encourage collaboration only when explicitly stated as group activities."
        },
        {
          heading: "Consequences",
          content: "Minor infractions result in redoing the assignment. Serious violations lead to zero marks and parent notification. Repeated violations may result in suspension."
        },
      ],
    },
    {
      title: "Code of Conduct",
      icon: FaShieldAlt,
      overview: "Expected behavior and discipline standards",
      details: [
        {
          heading: "Uniform & Appearance",
          content: "Students must wear the prescribed school uniform on all school days. Proper grooming and adherence to uniform guidelines is mandatory. Non-compliance results in written warning."
        },
        {
          heading: "Respectful Behavior",
          content: "Students must show respect to teachers, staff, and peers. Physical violence, abusive language, and bullying are strictly prohibited and result in disciplinary action."
        },
        {
          heading: "Campus Safety",
          content: "Students must follow all safety protocols. No weapons, drugs, or prohibited items are allowed on campus. Violation results in immediate suspension."
        },
        {
          heading: "Mobile Devices",
          content: "Personal electronic devices are not permitted during school hours. Violation results in confiscation and parent notification."
        },
      ],
    },
    {
      title: "Anti-Bullying & Harassment Policy",
      icon: FaHeart,
      overview: "Protection against bullying and harassment",
      details: [
        {
          heading: "Zero Tolerance",
          content: "DPS maintains zero tolerance for any form of bullying, harassment, or discrimination. All students have the right to a safe and respectful learning environment."
        },
        {
          heading: "Types of Prohibited Conduct",
          content: "Physical bullying, verbal harassment, cyberbullying, social exclusion, and spreading rumors are strictly prohibited. This applies both within school premises and online."
        },
        {
          heading: "Reporting Mechanism",
          content: "Students can report incidents to class teachers, counselors, or through the anonymous grievance portal. All reports are taken seriously and investigated promptly."
        },
        {
          heading: "Support & Resolution",
          content: "Victims receive counseling and support. Perpetrators undergo behavioral counseling. Serious cases result in suspension or expulsion."
        },
      ],
    },
    {
      title: "Fee Structure & Payment Policy",
      icon: FaDollarSign,
      overview: "Fee information and payment guidelines",
      details: [
        {
          heading: "Fee Components",
          content: "School fees include tuition, activity fee, sports fee, transport (if opted), and annual charges. Detailed fee breakup is provided at the time of admission."
        },
        {
          heading: "Payment Schedule",
          content: "Fees are due in June (first installment) and December (second installment). Late payment attracts 2% monthly interest. No student will be denied education due to fee issues - support is available."
        },
        {
          heading: "Fee Refund & Withdrawal",
          content: "Withdrawal before June 30 results in full refund minus registration fee. After June 30, first-term fees are non-refundable. Other policies apply as per RTE guidelines."
        },
        {
          heading: "Scholarships & Concessions",
          content: "Merit scholarships (up to 50%), sports scholarships, and need-based financial aid are available. Sibling discounts and early payment discounts apply."
        },
      ],
    },
    {
      title: "Sports & Co-curricular Policy",
      overview: "Participation in sports and activities",
      details: [
        {
          heading: "Mandatory Participation",
          content: "All students must participate in at least one co-curricular activity. This includes sports, cultural programs, clubs, or community service."
        },
        {
          heading: "Sports Eligibility",
          content: "To represent the school, students must maintain 75% attendance and good academic standing. Selection is based on performance and merit."
        },
        {
          heading: "Physical Fitness",
          content: "All students undergo fitness testing. Those with medical conditions must provide medical certificates. Modifications are made as per medical advice."
        },
        {
          heading: "Equipment & Safety",
          content: "School provides necessary equipment. Students must follow safety protocols. All injuries must be reported immediately to the sports department."
        },
      ],
    },
    {
      title: "Child Safety & Protection Policy",
      icon: FaShieldAlt,
      overview: "Comprehensive child protection measures",
      details: [
        {
          heading: "Background Verification",
          content: "All staff members undergo thorough background checks before employment. Verification is renewed periodically for compliance and safety."
        },
        {
          heading: "CCTV Surveillance",
          content: "Campus is equipped with CCTV cameras in common areas, corridors, and play areas. Footage is retained for security purposes."
        },
        {
          heading: "Safe Environment",
          content: "The school provides a secure and child-friendly environment. Age-appropriate facilities, separate washrooms for boys and girls, and trained counselors are available."
        },
        {
          heading: "Reporting Mechanism",
          content: "Any concerns regarding child safety can be reported to the Principal or through the dedicated child protection helpline. All reports are confidential."
        },
      ],
    },
    {
      title: "Environmental & Sustainability Policy",
      icon: FaLeaf,
      overview: "Green initiatives and environmental responsibility",
      details: [
        {
          heading: "Green Campus",
          content: "DPS is committed to environmental conservation. We promote waste segregation, water conservation, renewable energy use, and green landscaping."
        },
        {
          heading: "Eco-friendly Practices",
          content: "Single-use plastics are banned. Digital assignments reduce paper usage. Regular environmental awareness programs educate students about sustainability."
        },
        {
          heading: "Student Involvement",
          content: "Students actively participate in tree planting, garden maintenance, and environmental clubs. Eco-clubs organize awareness campaigns and community initiatives."
        },
        {
          heading: "Green Certification",
          content: "DPS holds Green School Certification. We regularly audit our environmental impact and implement improvements."
        },
      ],
    },
    {
      title: "Health & Hygiene Policy",
      icon: FaCheckCircle,
      overview: "Health, hygiene, and medical guidelines",
      details: [
        {
          heading: "Health Checkup",
          content: "Annual health checkups are conducted by school physicians. Immunization records must be up to date. Medical fitness certificates are required for participation in sports."
        },
        {
          heading: "Hygiene Standards",
          content: "School maintains high hygiene standards with regular sanitization. Separate washing facilities, clean drinking water, and hygienic food preparation are ensured."
        },
        {
          heading: "Medical Emergencies",
          content: "School clinic is staffed with a doctor and nurse. First aid facilities are available. Parents are contacted immediately in case of serious health issues."
        },
        {
          heading: "Communicable Diseases",
          content: "Students with communicable diseases must stay home until medically cleared. Proof of vaccination is required before return to school."
        },
      ],
    },
    {
      title: "Grievance Redressal Policy",
      icon: FaGavel,
      overview: "Fair process for addressing grievances",
      details: [
        {
          heading: "Informal Resolution",
          content: "Students or parents can approach teachers or counselors first. Most grievances are resolved at this level through discussion and mutual understanding."
        },
        {
          heading: "Formal Complaint",
          content: "For unresolved issues, formal complaints can be filed with the Administration. Written complaints must include specific details and evidence."
        },
        {
          heading: "Investigation Process",
          content: "The school conducts impartial investigations. All parties are given opportunity to present their views. Timeline for resolution is 2 weeks."
        },
        {
          heading: "Appeal & Follow-up",
          content: "If dissatisfied, appeals can be filed with the Principal. Decisions are documented. Follow-up ensures compliance and satisfaction."
        },
      ],
    },
    {
      title: "Technology & Digital Learning Policy",
      icon: FaLightbulb,
      overview: "Guidelines for technology use in education",
      details: [
        {
          heading: "Digital Learning",
          content: "DPS leverages technology for enhanced learning. Smart classrooms, online resources, and digital assignments are part of curriculum. Training is provided to ensure effective use."
        },
        {
          heading: "Cybersecurity",
          content: "School maintains robust cybersecurity measures. Student data is protected. Online safety is emphasized to prevent cyber threats and inappropriate content exposure."
        },
        {
          heading: "Responsible Use",
          content: "Students must use technology responsibly and ethically. Unauthorized access, hacking, or misuse of school IT resources is strictly prohibited."
        },
        {
          heading: "Digital Citizenship",
          content: "Students learn digital etiquette, online safety, and responsible social media use. Awareness programs address cyberbullying and online privacy."
        },
      ],
    },
    {
      title: "Photography & Media Policy",
      icon: FaCamera,
      overview: "Guidelines for photography and media use",
      details: [
        {
          heading: "Permission Required",
          content: "Prior written consent from parents is required before photographing or recording students. Consent forms are signed at the time of admission."
        },
        {
          heading: "Privacy Protection",
          content: "Student photos/videos are used only for school publications and official communications. They are never shared with third parties without explicit permission."
        },
        {
          heading: "Social Media",
          content: "Official school social media accounts follow privacy guidelines. Student identities are protected. Private information is never disclosed."
        },
        {
          heading: "Image Rights",
          content: "School retains rights to use photos for educational and promotional purposes. Students/parents retain personal use rights. Commercial use requires additional permission."
        },
      ],
    },
  ];

  const policyCategories = [
    { id: "all", name: "All Policies", count: policies.length },
    { id: "academic", name: "Academic Policies", count: 3 },
    { id: "conduct", name: "Conduct & Discipline", count: 3 },
    { id: "wellbeing", name: "Well-being & Safety", count: 3 },
    { id: "operations", name: "Operations", count: 3 },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="w-full py-12 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-roman font-bold text-white mb-2">School Policies</h1>
          <p className="text-lg text-gray-200">Fair, Transparent & Student-Centric Guidelines</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Dungarpur Public School, Dungarpur has established comprehensive policies to ensure a safe, secure, and conducive learning environment. Our policies are designed to protect student welfare, promote academic excellence, maintain discipline, and foster responsible citizenship. All policies comply with government regulations and educational standards.
          </p>
        </div>
      </section>

      {/* Quick Access */}
      <section className="w-full py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-roman font-bold text-primary text-center mb-8">Policy Categories</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {policyCategories.map((cat) => (
              <button
                key={cat.id}
                className="px-6 py-2 bg-white rounded-lg shadow-sm text-gray-700 font-semibold hover:shadow-md transition-all duration-300 text-sm"
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Policies List */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4">
            {policies.map((policy, index) => {
              return (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => setExpandedPolicy(expandedPolicy === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between hover:bg-gray-100 transition-all duration-300 text-left"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div>
                        <h3 className="text-lg font-roman font-bold text-primary">{policy.title}</h3>
                        <p className="text-sm text-gray-600">{policy.overview}</p>
                      </div>
                    </div>
                    <span className="text-secondary text-2xl flex-shrink-0">{expandedPolicy === index ? "−" : "+"}</span>
                  </button>
                  {expandedPolicy === index && (
                    <div className="px-6 pb-6 bg-white border-t space-y-6">
                      {policy.details.map((detail, idx) => (
                        <div key={idx} className="pb-6 border-b last:border-b-0">
                          <h4 className="text-base font-roman font-bold text-primary mb-2">{detail.heading}</h4>
                          <p className="text-gray-700 leading-relaxed">{detail.content}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Core Principles of Our Policies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Fairness", description: "All policies are applied equally and uniformly to all students" },
              { title: "Transparency", description: "Policies are clearly communicated to all stakeholders" },
              { title: "Child-centric", description: "Focus on protecting student welfare and development" },
              { title: "Compliance", description: "Aligned with government regulations and RTE guidelines" },
            ].map((principle, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-secondary">
                <h3 className="text-lg font-roman font-bold text-primary mb-2">{principle.title}</h3>
                <p className="text-sm text-gray-700">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Guidelines */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Important Guidelines for Students</h2>
          <div className="max-w-4xl mx-auto bg-blue-50 p-8 rounded-lg border-l-4 border-primary">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Arrive on time and maintain 85% attendance",
                "Wear complete school uniform every day",
                "Treat all members with respect and courtesy",
                "Complete assignments with academic honesty",
                "Follow all safety and security protocols",
                "Participate in co-curricular activities",
                "Use technology responsibly and ethically",
                "Report any grievances to appropriate authorities",
                "Keep school campus clean and green",
                "Follow classroom and playground rules",
              ].map((guideline, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{guideline}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Parent Responsibilities */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Parent Responsibilities</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Support Education",
                description: "Encourage your child to complete assignments and maintain good academic standards",
              },
              {
                title: "Ensure Attendance",
                description: "Send your child to school regularly and on time. Inform the school about any absences",
              },
              {
                title: "Monitor Behavior",
                description: "Ensure your child follows the code of conduct and treats others with respect",
              },
              {
                title: "Communicate",
                description: "Maintain regular communication with teachers and participate in parent-teacher meetings",
              },
              {
                title: "Fee Payment",
                description: "Pay school fees on time to ensure uninterrupted education",
              },
              {
                title: "Digital Safety",
                description: "Supervise your child's internet use and educate them about online safety",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-roman font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplinary Action Framework */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Disciplinary Action Framework</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { level: "Level 1: Warning", description: "Verbal warning or written caution for minor infractions", examples: "Late submission, incomplete uniform, minor misbehavior" },
              { level: "Level 2: Restriction", description: "Temporary restrictions on privileges or activities", examples: "Detention, exclusion from events, restriction on movement" },
              { level: "Level 3: Serious Action", description: "Suspension or other serious measures", examples: "Cheating, violence, bullying, substance abuse" },
              { level: "Level 4: Expulsion", description: "Dismissal from school for grave misconduct", examples: "Repeated serious violations, criminal activity, safety threats" },
            ].map((action, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h3 className="text-lg font-roman font-bold text-primary mb-2">{action.level}</h3>
                <p className="text-gray-700 mb-2">{action.description}</p>
                <p className="text-sm text-gray-600"><span className="font-semibold">Examples:</span> {action.examples}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center p-4 bg-blue-50 rounded border-l-4 border-primary">
            <p className="text-gray-700"><span className="font-semibold">Note:</span> All disciplinary actions are progressive and proportionate. The school believes in rehabilitation and character development.</p>
          </div>
        </div>
      </section>

      {/* Policy Review & Amendment */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md border-l-4 border-primary">
            <h2 className="text-2xl font-roman font-bold text-primary mb-4">Policy Review & Amendment</h2>
            <p className="text-gray-700 mb-4">
              These policies are reviewed annually and updated as needed to address changing circumstances and stakeholder feedback. All amendments are communicated to students, parents, and staff through official channels.
            </p>
            <p className="text-gray-700">
              Parents and students are encouraged to provide feedback and suggestions for policy improvements. The school values input from all stakeholders and continuously works to enhance its policies.
            </p>
          </div>
        </div>
      </section>

      {/* Contact for Policy Queries */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-roman font-bold text-primary mb-8">Need Clarification?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            If you have any questions or concerns regarding these policies, please contact the school administration or your child's class teacher.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { name: "Principal's Office", email: "principal@dpsdungarpur.edu.in" },
              { name: "Academic Head", email: "academics@dpsdungarpur.edu.in" },
              { name: "Administration", email: "admin@dpsdungarpur.edu.in" },
            ].map((contact, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md">
                <h3 className="font-roman font-bold text-primary mb-2">{contact.name}</h3>
                <p className="text-gray-700 text-sm">{contact.email}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolPolicies;