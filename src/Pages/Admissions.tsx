import {FaFileAlt, FaCalendar, FaCheckCircle, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Admissions = () => {
  const navigate = useNavigate();
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const admissionClasses = [
    { class: "Nursery", age: "3+ years", batch: "July 2024" },
    { class: "KG", age: "3.5 - 4.5 years", batch: "July 2024" },
    { class: "Class I", age: "4.5 - 5.5 years", batch: "July 2024" },
    { class: "Class II - V", age: "As per DOB", batch: "July 2024" },
    { class: "Class VI - VIII", age: "As per DOB", batch: "July 2024" },
    { class: "Class IX", age: "14+ years", batch: "July 2024" },
    { class: "Class XI", age: "16+ years", batch: "July 2024" },
  ];

  const admissionProcess = [
    {
      step: 1,
      title: "Registration",
      desc: "Complete the online registration form on our portal",
    },
    {
      step: 2,
      title: "Submit Documents",
      desc: "Provide all required documents for verification",
    },
    {
      step: 3,
      title: "Entrance Test/Interview",
      desc: "Participate in assessment (as per class requirement)",
    },
    {
      step: 4,
      title: "Merit List",
      desc: "Selected students announced on merit basis",
    },
    {
      step: 5,
      title: "Admission Confirmation",
      desc: "Complete fee payment to confirm admission",
    },
    {
      step: 6,
      title: "Enrollment",
      desc: "Final enrollment and orientation program",
    },
  ];

  const requiredDocuments = [
    { doc: "Birth Certificate", copies: 3 },
    { doc: "Aadhar Card", copies: 2 },
    { doc: "Previous School Report Card", copies: 2 },
    { doc: "Transfer Certificate (TC)", copies: 2 },
    { doc: "Character Certificate", copies: 2 },
    { doc: "Medical Certificate", copies: 1 },
    { doc: "Vaccination Certificate", copies: 1 },
    { doc: "Passport Size Photographs", copies: 4 },
  ];

  const eligibilityCriteria = [
    "Must be Indian National or Foreign National with valid visa",
    "Age as per CBSE norms for respective class",
    "Good conduct and discipline record from previous school",
    "No serious health issues that may hinder learning",
    "Commitment to school's code of conduct",
    "Parents' consent and involvement in child's education",
  ];

  const importantDates = [
    { event: "Online Registration Opens", date: "1st March 2024" },
    { event: "Registration Closes", date: "30th April 2024" },
    { event: "Entrance Test/Interview", date: "15th - 20th May 2024" },
    { event: "Merit List Declaration", date: "3rd June 2024" },
    { event: "Admission Confirmation Deadline", date: "15th June 2024" },
    { event: "Orientation Program", date: "20th June 2024" },
    { event: "Classes Begin", date: "1st July 2024" },
  ];

  const faqs = [
    {
      question: "What is the admission age criteria?",
      answer: "Age is determined as per CBSE guidelines. For Nursery, students must be 2.5-3.5 years old, KG: 3.5-4.5 years, and Class I: 4.5-5.5 years. For higher classes, age is determined on DOB basis.",
    },
    {
      question: "Is there an entrance test for all classes?",
      answer: "Entrance tests are conducted for Classes II onwards. For Nursery and KG, the admission is based on interaction and overall development assessment.",
    },
    {
      question: "What is the fee structure?",
      answer: "Fee structure varies as per class. For detailed information regarding fees, please visit our Fee Structure page or contact the admissions office.",
    },
    {
      question: "Are scholarships available?",
      answer: "Yes, we offer merit-based and need-based scholarships. Eligible students can apply during the admission process.",
    },
    {
      question: "What documents are required for admission?",
      answer: "Essential documents include Birth Certificate, Aadhar Card, Previous Report Cards, Transfer Certificate, Character Certificate, Medical Certificate, and Vaccination Certificate.",
    },
    {
      question: "How can I apply for admission?",
      answer: "You can apply online through our admission portal during the registration period. Visit the registration link from this page to begin the process.",
    },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="w-full py-12 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-roman font-bold text-white mb-2">Admissions</h1>
          <p className="text-lg text-gray-200">Join DPS Dungarpur - Start Your Journey of Excellence</p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We welcome students of all abilities and backgrounds. Our comprehensive admission process ensures that we select students who share our values of excellence, integrity, and continuous learning. Join a community of passionate learners and dedicated educators.
          </p>
        </div>
      </section>

      {/* Classes Available */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Classes Available for Admission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {admissionClasses.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-secondary">
                <h3 className="text-xl font-roman font-bold text-primary mb-3">{item.class}</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Age Group:</span> {item.age}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Batch:</span> {item.batch}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Eligibility Criteria</h2>
          <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
            <ul className="space-y-4">
              {eligibilityCriteria.map((criteria, index) => (
                <li key={index} className="flex items-start gap-4">
                  <FaCheckCircle className="text-secondary text-lg mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{criteria}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {admissionProcess.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-roman font-bold text-white" style={{ backgroundColor: "#800000" }}>
                      {process.step}
                    </div>
                    <h3 className="text-lg font-roman font-bold text-primary">{process.title}</h3>
                  </div>
                  <p className="text-gray-600">{process.desc}</p>
                </div>
                {index < admissionProcess.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-1 bg-secondary"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Required Documents</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requiredDocuments.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <FaFileAlt className="text-secondary text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-roman font-bold text-primary">{item.doc}</h4>
                    <p className="text-sm text-gray-600">{item.copies} copies required</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Important Dates</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {importantDates.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <FaCalendar className="text-secondary text-xl flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-roman font-bold text-primary">{item.event}</h4>
                </div>
                <span className="font-semibold text-primary">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure Link */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Fee Structure</h2>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-50 to-white p-8 rounded-lg shadow-md border-l-4 border-secondary">
            <div className="flex items-center gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-roman font-bold text-primary">Detailed Fee Information</h3>
                <p className="text-gray-600">View complete fee structure for all classes</p>
              </div>
            </div>
            <button
              onClick={() => navigate("/fee-structure")}
              className="mt-4 px-8 py-3 bg-primary text-white font-roman font-bold rounded-lg hover:opacity-90 transition-all duration-300"
            >
              View Fee Structure
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-all duration-300 text-left"
                >
                  <h3 className="text-lg font-roman font-bold text-primary pr-4">{faq.question}</h3>
                  <span className="text-secondary text-2xl flex-shrink-0">{expandedFAQ === index ? "−" : "+"}</span>
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6 pt-0 border-t text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-roman font-bold text-white mb-4">Ready to Apply?</h2>
          <p className="text-lg text-gray-200 mb-8">Start your application process today and become part of our community</p>
          <button className="px-8 py-3 bg-secondary text-primary font-roman font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
            Start Online Registration
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Contact Admissions Office</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <FaPhone className="text-4xl text-secondary mx-auto mb-4" />
              <h3 className="font-roman font-bold text-primary text-lg mb-2">Phone</h3>
              <p className="text-gray-700">+91-XXXX-XXXXXX</p>
              <p className="text-gray-700">+91-XXXX-XXXXXX</p>
            </div>
            <div className="text-center p-6">
              <FaEnvelope className="text-4xl text-secondary mx-auto mb-4" />
              <h3 className="font-roman font-bold text-primary text-lg mb-2">Email</h3>
              <p className="text-gray-700">admissions@dpsungarpur.edu.in</p>
              <p className="text-gray-700">info@dpsdungarpur.edu.in</p>
            </div>
            <div className="text-center p-6">
              <FaMapMarkerAlt className="text-4xl text-secondary mx-auto mb-4" />
              <h3 className="font-roman font-bold text-primary text-lg mb-2">Location</h3>
              <p className="text-gray-700">Dungarpur</p>
              <p className="text-gray-700">Rajasthan, India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;