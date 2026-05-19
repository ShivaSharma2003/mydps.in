import { FaBuilding, FaBook, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope, FaDownload, FaFilePdf } from "react-icons/fa";
import { useState } from "react";

const MandatoryDisclosure = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const institutionalInfo = [
    { label: "School Name", value: "Dungarpur Public School, Dungarpur" },
    { label: "Affiliation Number", value: "1730171" },
    { label: "Board", value: "Central Board of Secondary Education (CBSE)" },
    { label: "School Category", value: "Co-educational" },
    { label: "Principal's Name", value: "Mr. Shelesh Kumar" },
    { label: "Address", value: "Bicchiwara Road, Dungarpur, Rajasthan, 314001" },
  ];

  const staffInfo = [
    { position: "Teaching Staff (PRT)", count: 12, qualification: "B.A/B.Sc + B.Ed" },
    { position: "Teaching Staff (TGT)", count: 18, qualification: "B.A/B.Sc/B.Com + B.Ed" },
    { position: "Teaching Staff (PGT)", count: 8, qualification: "M.A/M.Sc + B.Ed" },
    { position: "Administrative Staff", count: 6, qualification: "B.Com/B.A + Relevant Diploma" },
    { position: "Support Staff", count: 15, qualification: "Varies" },
  ];

  const affiliation = [
    { type: "Board Affiliation", detail: "CBSE - Central Board of Secondary Education", year: "2010" },
    { type: "Recognition Status", detail: "Recognized by Government of Rajasthan", year: "Ongoing" },
    { type: "Sports Affiliation", detail: "Inter-School Sports Association (ISSA)", year: "2012" },
    { type: "International Partnership", detail: "Cambridge English Examination Centre", year: "2015" },
    { type: "Quality Accreditation", detail: "ISO 9001:2015 Certified", year: "2018" },
    { type: "Environmental Initiative", detail: "Green School Certification", year: "2019" },
  ];

  const infrastructure = [
    { facility: "Classrooms", details: "40+ well-equipped with smart boards", status: "Excellent" },
    { facility: "Science Laboratories", details: "Physics, Chemistry, Biology Labs with modern equipment", status: "Excellent" },
    { facility: "Computer Labs", details: "2 labs with 60+ computers, high-speed internet", status: "Excellent" },
    { facility: "Library", details: "10,000+ books, digital library with e-resources", status: "Very Good" },
    { facility: "Sports Complex", details: "Basketball court, volleyball court, badminton court, running track", status: "Very Good" },
    { facility: "Auditorium", details: "500-seat capacity with modern audio-visual systems", status: "Excellent" },
    { facility: "Cafeteria", details: "Hygienic food preparation with menu certification", status: "Excellent" },
    { facility: "Medical Facilities", details: "School clinic with qualified doctor and nurse", status: "Very Good" },
    { facility: "Play Area", details: "Safe play area with modern equipment for primary section", status: "Excellent" },
    { facility: "Transportation", details: "32 buses covering entire city", status: "Excellent" },
  ];

  const curriculum = [
    { class: "Classes I-V (Primary)", subjects: "English, Hindi, Mathematics, Science, Social Studies, Art, Physical Education, Computer Literacy" },
    { class: "Classes VI-VIII (Middle)", subjects: "English, Hindi/Sanskrit, Mathematics, Science, Social Studies, Art, Physical Education, ICT, Career Guidance" },
    { class: "Classes IX-X (Secondary)", subjects: "Mathematics, Science (Physics, Chemistry, Biology), Social Studies, English, Hindi, Optional third language" },
    { class: "Classes XI-XII (Senior)", subjects: "Science Stream: Physics, Chemistry, Biology, Mathematics, English, Computer Science, PE, etc." },
    { class: "Classes XI-XII (Senior)", subjects: "Commerce Stream: Accounts, Economics, Business Studies, Mathematics, English, Computer Science, PE, etc." },
  ];

  const academicPerformance = [
    { year: "2022-23", classX: "92.3%", classXII: "88.7%", topScorer: "495/500" },
    { year: "2023-24", classX: "93.8%", classXII: "90.2%", topScorer: "498/500" },
    { year: "2024-25", classX: "94.5%", classXII: "91.6%", topScorer: "499/500" },
  ];

  const safetyMeasures = [
    "24/7 CCTV surveillance in all areas",
    "Trained security personnel at all entry/exit points",
    "Regular fire safety drills and evacuation procedures",
    "First aid and emergency medical facilities",
    "Cybersecurity and online safety measures",
    "Anti-bullying and grievance redressal policy",
    "Separate facilities and supervision for girls students",
    "Traffic management and safe transportation",
    "Background verification of all staff members",
    "Digital Safety and Child Protection Policy",
  ];

  const feeInfo = [
    { category: "Tuition Fee", amount: "₹15,000 - ₹25,000", period: "Per Annum" },
    { category: "Activity Fee", amount: "₹5,000 - ₹8,000", period: "Per Annum" },
    { category: "Sports Fee", amount: "₹3,000 - ₹5,000", period: "Per Annum" },
    { category: "Transport Fee", amount: "₹8,000 - ₹12,000", period: "Per Annum" },
    { category: "One-time Registration", amount: "₹10,000", period: "At Admission" },
  ];

  const disclosureDocuments = [
    { title: "School Registration Certificate", available: true },
    { title: "NOC and Fire Safety Certificate", available: true },
    { title: "Affiliation Certificate - CBSE", available: true },
    { title: "Recognition Certificate", available: true },
    { title: "Audited Financial Statement", available: true },
    { title: "Approved Syllabus", available: true },
    { title: "Safety and Security Policy", available: true },
    { title: "Student Handbook", available: true },
    { title: "Anti-Bullying Policy", available: true },
    { title: "Grievance Redressal Mechanism", available: true },
  ];

  const expandableDisclosures = [
    {
      title: "Staff Qualifications & Experience",
      content: [
        "All teaching staff hold Bachelor's degree with B.Ed qualification",
        "PGT staff possess relevant Master's degrees",
        "Staff receives regular professional development training",
        "Subject matter experts for specialized subjects",
        "Average teaching experience: 8+ years",
      ],
    },
    {
      title: "Student Performance & Achievements",
      content: [
        "Consistent pass percentage above 90% in board exams",
        "50+ students qualify for national competitive exams annually",
        "State-level sports achievements in cricket, badminton, athletics",
        "National Science Talent Search Examination (NTSE) qualifiers",
        "Regional and national level academic competitions",
      ],
    },
    {
      title: "Fee Concessions & Scholarships",
      content: [
        "Merit-based scholarships up to 50% tuition fee",
        "Sports scholarships for talented athletes",
        "Need-based financial aid programs",
        "Sibling fee discount: 10% for second child, 15% for third child",
        "Early bird discount: 5% for annual fee payment by May 31",
      ],
    },
    {
      title: "Teacher-Student Ratio",
      content: [
        "Primary Section (Classes I-III): 1:25 ratio",
        "Middle Section (Classes IV-VIII): 1:30 ratio",
        "Secondary Section (Classes IX-XII): 1:35 ratio",
        "Special provision for special needs students",
        "Additional support through remedial classes",
      ],
    },
    {
      title: "Parent Grievance & Redressal",
      content: [
        "Dedicated grievance portal on school website",
        "Anonymous complaint mechanism available",
        "Monthly parent-teacher meetings",
        "Quarterly feedback collection from parents",
        "Response time: 7 days for formal grievances",
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="w-full py-12 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-roman font-bold text-white mb-2">Mandatory Disclosure</h1>
          <p className="text-lg text-gray-200">Transparency & Compliance Information</p>
        </div>
      </section>



      {/* Institutional Information */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Institutional Information</h2>
          <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {institutionalInfo.map((item, index) => (
                <div key={index} className="border-b-2 border-secondary pb-4">
                  <p className="text-sm font-semibold text-gray-600 mb-1">{item.label}</p>
                  <p className="text-lg font-roman font-bold text-primary">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Affiliation & Recognition */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Affiliation & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {affiliation.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-secondary">
                <h3 className="text-lg font-roman font-bold text-primary mb-2">{item.type}</h3>
                <p className="text-gray-700 text-sm mb-2">{item.detail}</p>
                <p className="text-xs font-semibold text-secondary">Year: {item.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Information */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Staff Information</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {staffInfo.map((staff, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg shadow-md flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-roman font-bold text-primary mb-1">{staff.position}</h3>
                    <p className="text-sm text-gray-600">Qualification: {staff.qualification}</p>
                  </div>
                  <div className="text-3xl font-roman font-bold text-secondary">{staff.count}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-primary">
              <p className="text-gray-700"><span className="font-semibold">Note:</span> Total Staff Members: {staffInfo.reduce((sum, s) => sum + s.count, 0)} | All staff undergo regular background verification and maintain current certifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Facilities */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Infrastructure & Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructure.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3 mb-3">
                  <FaBuilding className="text-2xl text-secondary flex-shrink-0" />
                  <h3 className="text-lg font-roman font-bold text-primary">{item.facility}</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">{item.details}</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Details */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Curriculum & Subjects</h2>
          <div className="max-w-5xl mx-auto space-y-4">
            {curriculum.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-roman font-bold text-primary mb-3 flex items-center gap-2">
                  <FaBook className="text-secondary" />
                  {item.class}
                </h3>
                <p className="text-gray-700">{item.subjects}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Performance */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Academic Performance</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left">Academic Year</th>
                  <th className="p-4 text-center">Class X Pass %</th>
                  <th className="p-4 text-center">Class XII Pass %</th>
                  <th className="p-4 text-center">Top Score</th>
                </tr>
              </thead>
              <tbody>
                {academicPerformance.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 font-semibold text-primary">{row.year}</td>
                    <td className="p-4 text-center text-gray-700">{row.classX}</td>
                    <td className="p-4 text-center text-gray-700">{row.classXII}</td>
                    <td className="p-4 text-center font-semibold text-secondary">{row.topScorer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fee Information */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Fee Information</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {feeInfo.map((fee, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md border-t-4 border-secondary">
                  <h3 className="text-lg font-roman font-bold text-primary mb-2">{fee.category}</h3>
                  <p className="text-2xl font-bold text-secondary mb-1">{fee.amount}</p>
                  <p className="text-sm text-gray-600">{fee.period}</p>
                </div>
              ))}
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-secondary">
              <p className="text-gray-700"><span className="font-semibold">Note:</span> Fees are reviewed annually. Scholarships and fee concessions are available for deserving students. Please contact the Admission Office for detailed information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Measures */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Safety & Security Measures</h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md border-l-4 border-primary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {safetyMeasures.map((measure, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{measure}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expandable Disclosures */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Additional Disclosures</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {expandableDisclosures.map((disclosure, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-100 transition-all duration-300 text-left"
                >
                  <h3 className="text-lg font-roman font-bold text-primary">{disclosure.title}</h3>
                  <span className="text-secondary text-2xl flex-shrink-0">{expandedSection === index ? "−" : "+"}</span>
                </button>
                {expandedSection === index && (
                  <div className="px-6 pb-6 bg-white border-t">
                    <ul className="space-y-3">
                      {disclosure.content.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclosure Documents */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Available Disclosure Documents</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {disclosureDocuments.map((doc, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
                <FaCheckCircle className="text-green-600 flex-shrink-0 text-xl" />
                <span className="text-gray-700 font-semibold">{doc.title}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">All documents are available at the school office or can be requested online</p>
            <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300">
              Request Documents
            </button>
          </div>
        </div>
      </section>

      {/* Contact for Queries */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-roman font-bold text-primary mb-12">For More Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md">
              <FaPhone className="text-3xl text-secondary mx-auto mb-3" />
              <h3 className="font-roman font-bold text-primary mb-2">Phone</h3>
              <p className="text-gray-700">+91-95210-19058</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md">
              <FaEnvelope className="text-3xl text-secondary mx-auto mb-3" />
              <h3 className="font-roman font-bold text-primary mb-2">Email</h3>
              <p className="text-gray-700">principal@srsl.in</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md">
              <FaMapMarkerAlt className="text-3xl text-secondary mx-auto mb-3" />
              <h3 className="font-roman font-bold text-primary mb-2">Visit Us</h3>
              <p className="text-gray-700">Bichhiwara Road, Dungarpur, Rajasthan, 314001</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download PDF Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Download Mandatory Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "School Registration & Recognition",
                description: "Official registration certificate and government recognition documents",
                fileType: "PDF",
                size: "2.8 MB",
              },
              {
                title: "CBSE Affiliation Certificate",
                description: "Official CBSE board affiliation and recognition certificate",
                fileType: "PDF",
                size: "1.9 MB",
              },
              {
                title: "Fire Safety & NOC Certificate",
                description: "Fire Department NOC and safety compliance certificate",
                fileType: "PDF",
                size: "2.2 MB",
              },
              {
                title: "Fee Structure & Financial Policy",
                description: "Complete fee structure and financial transparency details",
                fileType: "PDF",
                size: "3.1 MB",
              },
              {
                title: "Staff Qualifications & Details",
                description: "Detailed information on staff qualifications and experience",
                fileType: "PDF",
                size: "2.5 MB",
              },
              {
                title: "Disclosure & Inspection Report",
                description: "Annual disclosure and inspection report as per RTE Act",
                fileType: "PDF",
                size: "4.2 MB",
              },
            ].map((doc, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-secondary">
                <div className="flex items-center gap-3 mb-4">
                  <FaFilePdf className="text-3xl text-red-600 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg font-roman font-bold text-primary">{doc.title}</h3>
                    <p className="text-xs text-gray-500">{doc.fileType} • {doc.size}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">{doc.description}</p>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300">
                  <FaDownload className="text-sm" />
                  Download PDF
                </button>
              </div>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="mt-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-roman font-bold text-primary text-center mb-8">Additional Mandatory Disclosures</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Anti-Bullying & Safety Policy",
                  description: "Comprehensive anti-bullying policy and child protection guidelines",
                },
                {
                  title: "Grievance Redressal Policy",
                  description: "Mechanism for student and parent grievance resolution",
                },
                {
                  title: "Admission Policy",
                  description: "Admission criteria and procedure as per RTE Act 2009",
                },
                {
                  title: "Curriculum & Syllabus",
                  description: "Approved syllabus for all classes as per CBSE guidelines",
                },
                {
                  title: "Infrastructure & Facilities",
                  description: "Detailed list of all infrastructure and facilities available",
                },
                {
                  title: "Audited Financial Statement",
                  description: "Annual audited financial statement and utilization report",
                },
              ].map((resource, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-secondary hover:shadow-lg transition-all duration-300">
                  <h4 className="font-roman font-bold text-primary mb-2">{resource.title}</h4>
                  <p className="text-sm text-gray-700 mb-3">{resource.description}</p>
                  <button className="flex items-center gap-2 px-4 py-2 text-primary hover:text-secondary font-semibold transition-colors duration-300">
                    <FaDownload className="text-sm" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-roman font-bold text-white mb-4">Committed to Transparency & Excellence</h2>
          <p className="text-lg text-gray-200">All mandatory disclosures are maintained in accordance with RTE Act 2009 and CBSE guidelines</p>
        </div>
      </section>
    </div>
  );
};

export default MandatoryDisclosure;