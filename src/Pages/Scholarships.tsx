import {
  FaAward,
  FaCheckCircle,
  FaFileAlt,
  FaGraduationCap,
  FaBook,
} from "react-icons/fa";
import { useState } from "react";

const Scholarships = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const scholarshipTypes = [
    {
      id: 1,
      name: "Sibling Scholarship",
      icon: FaAward,
      benefit: "100% fee waiver",
      description:
        "If three siblings (from the same parents) are studying in the school, the youngest child will be granted a full fee waiver.",
      condition:
        "Applicable only when all three siblings are enrolled simultaneously. The scholarship will be revoked if any sibling leaves the school. Not combinable with other scholarships.",
    },
    {
      id: 2,
      name: "Hope Scholarship",
      icon: FaBook,
      benefit: "25% fee waiver",
      description:
        "Children of a widow parent facing financial hardship may be granted ",
      condition:
        "Eligibility will be assessed based on financial documents and family circumstances. The scholarship is renewable annually based on academic performance and conduct. Not combinable with other scholarships.",
    },
    {
      id: 3,
      name: "Beti Pragati Scholarship",
      icon: FaGraduationCap,
      benefit: "50% fee waiver",
      description:
        "For two girl children of the same parents belonging to the Below Poverty Line(BPL) category ",
      condition:
        "Applicable only when both children are enrolled simultaneously. The scholarship will be revoked if any child leaves the school. Not combinable with other scholarships.",
    },
    {
      id: 4,
      name: "Veer Shahid Scholarship",
      icon: FaAward,
      benefit: "25% fee waiver",
      description:
        "For children of martyrs who have sacrificed their lives in the line of duty for the nation.",
      condition:
        "Applicable only for students who have lost their father or guardian in the line of duty. The scholarship is renewable annually based on academic performance and conduct. Not combinable with other scholarships.",
    },
    {
      id: 5,
      name: "Guru Parivar Scholarship",
      icon: FaAward,
      benefit: "50% fee waiver",
      description:
        "For children of teachers and staff members of DPS Dungarpur who have served the school for a minimum of 5 years.",
      condition:
        "Applicable only for children of teachers and staff members who have served the school for a minimum of 5 years. The scholarship is renewable annually based on academic performance and conduct. Not combinable with other scholarships.",
    },
    {
      id: 6,
      name: "Excellence & Opportunity Scholarship",
      icon: FaAward,
      benefit: "25% fee waiver",
      description:
        "For students who have demonstrated exceptional academic performance, sports achievements, or co-curricular excellence in their previous school.",
      condition:
        "Eligibility will be assessed based on previous academic records, sports achievements, and co-curricular activities. The scholarship is renewable annually based on continued performance. Not combinable with other scholarships.",
    },
  ];

  const requiredDocuments = [
    { doc: "Birth Certificate", copies: 1 },
    { doc: "Previous School Report Cards (Last 3 years)", copies: 2 },
    { doc: "Transfer Certificate (TC)", copies: 1 },
    { doc: "Income Certificate (for need-based)", copies: 1 },
    { doc: "Sports/Achievement Certificates (if applicable)", copies: 1 },
    { doc: "Aadhar Card Copy", copies: 1 },
    { doc: "Parent/Guardian ID Proof", copies: 1 },
    { doc: "Passport Size Photographs", copies: 4 },
    { doc: "Medical Certificate", copies: 1 },
  ];

  const faqs = [
    {
      question: "Who is eligible to apply for scholarships?",
      answer:
        "Any student seeking admission to DPS Dungarpur in Classes I to XI can apply for scholarships based on their merit, financial need, or achievements in sports and other fields. Age and academic criteria apply as per class.",
    },
    {
      question: "Can I apply for multiple scholarship categories?",
      answer:
        "Yes, you can apply for multiple categories (Merit, Need-Based, Sports), but only one scholarship will be awarded. The highest applicable benefit will be provided.",
    },
    {
      question: "What is the selection criteria for merit-based scholarships?",
      answer:
        "Merit scholarships are awarded based on entrance test performance, previous academic records, and performance in interview. Top performers as per merit list are selected.",
    },
    {
      question: "How do I prove my financial need for need-based scholarship?",
      answer:
        "You need to submit an Income Certificate from the revenue department and bank statements. The school committee will assess your financial situation and eligibility.",
    },
    {
      question: "Can scholarship be withdrawn or cancelled?",
      answer:
        "Yes, scholarships can be withdrawn if the student fails to maintain minimum 70% marks annually, or violates school discipline code. Continuation depends on consistent performance.",
    },
    {
      question: "Is scholarship renewable every year?",
      answer:
        "Yes, scholarships are renewable annually based on academic performance, attendance, and conduct. Students must maintain minimum grades to retain the scholarship.",
    },
    {
      question:
        "What is the minimum marks required for scholarship consideration?",
      answer:
        "For Merit Scholarship: 85%, Need-Based: 75%, Sports Scholarship: 70%, Girl Child: 70%. However, these are baseline requirements and actual selection depends on merit list.",
    },
    {
      question: "When will I know about my scholarship status?",
      answer:
        "Merit list with scholarship results will be announced by May 20, 2025. Selected students will be notified via email and SMS with further admission instructions.",
    },
  ];

  const scholarshipTerms = [
    "Scholarship is valid for the entire academic year",
    "Students must maintain minimum 70% marks to retain scholarship",
    "Attendance should be 85% or above throughout the year",
    "Any serious disciplinary action may lead to scholarship cancellation",
    "Scholarship can be upgraded or downgraded based on yearly performance",
    "No refund of scholarship amount if student withdraws mid-session",
    "School reserves right to modify scholarship terms annually",
    "Scholarships are meant for school fees only, not other charges",
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section
        className="w-full py-12 px-4"
        style={{ backgroundColor: "#800000" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-2">
            <FaAward className="text-4xl text-yellow-400" />
            <h1 className="text-4xl md:text-5xl font-roman font-bold text-white">
              Scholarships
            </h1>
          </div>
          <p className="text-lg text-gray-200">
            Excellence in Education Made Accessible to All
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            DPS Dungarpur is committed to making quality education accessible to
            deserving students. We offer comprehensive scholarship programs to
            recognize and reward academic excellence, support financially
            disadvantaged students, and encourage talent in sports and
            co-curricular activities. Our scholarships empower students to
            pursue their dreams without financial constraints.
          </p>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">
            Scholarship Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scholarshipTypes.map((scholarship) => {
              const IconComponent = scholarship.icon;
              return (
                <div
                  key={scholarship.id}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-secondary"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="text-3xl text-secondary shrink-0" />
                    <h3 className="text-lg font-roman font-bold text-primary">
                      {scholarship.name}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-yellow-50 rounded text-center">
                      <p className="font-roman font-bold text-primary text-lg">
                        {scholarship.benefit}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600">
                      {scholarship.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">
            Why Choose Our Scholarships?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Significant fee waivers up to 75%",
              "Transparent and merit-based selection",
              "Annual renewal based on performance",
              "Support for academic excellence",
              "Recognition of sports achievements",
              "Special assistance for girl students",
              "Easy application process",
              "Regular financial aid reviews",
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <FaCheckCircle className="text-secondary text-xl mt-1 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">
            General Eligibility Criteria
          </h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <ul className="space-y-4">
              {[
                "Must be applying for admission or studying at DPS Dungarpur",
                "Minimum academic performance as per scholarship category",
                "Good conduct and discipline record from previous school",
                "Genuine commitment towards studies and school values",
                "Parents' income and financial need (for need-based scholarships)",
                "Sports/achievements certificates (for category-specific scholarships)",
                "Complete submission of required documents",
                "No eligibility barriers based on caste, creed, or religion",
              ].map((criteria, index) => (
                <li key={index} className="flex items-start gap-4">
                  <FaCheckCircle className="text-secondary text-lg mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{criteria}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">
            Required Documents
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {requiredDocuments.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md"
                >
                  <FaFileAlt className="text-secondary text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-roman font-bold text-primary">
                      {item.doc}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {item.copies} copy/copies required
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <p className="text-blue-800">
                <span className="font-roman font-bold">Note:</span> Please
                ensure all documents are attested by school principal or notary.
                Submit soft copies during online registration and original
                documents during document verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Terms & Conditions */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">
            Terms & Conditions
          </h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <ul className="space-y-4">
              {scholarshipTerms.map((term, index) => (
                <li key={index} className="flex items-start gap-4">
                  <FaCheckCircle className="text-secondary text-lg mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{term}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFAQ(expandedFAQ === index ? null : index)
                  }
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-100 transition-all duration-300 text-left"
                >
                  <h3 className="text-lg font-roman font-bold text-primary pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-secondary text-2xl flex-shrink-0">
                    {expandedFAQ === index ? "−" : "+"}
                  </span>
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6 pt-0 border-t border-gray-200 text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scholarships;
