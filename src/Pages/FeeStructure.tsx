import { FaCalendar, FaGraduationCap, FaAward, FaCreditCard, FaInfoCircle, FaFileInvoiceDollar, FaPhone, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const FeeStructure = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedClass, setSelectedClass] = useState("nursery");

  const feeStructure = {
    nursery: {
      class: "Nursery",
      tuition: 45000,
      activity: 5000,
      sports: 3000,
      transport: 12000,
      annual: 2000,
      total: 67000,
    },
    kg: {
      class: "KG",
      tuition: 50000,
      activity: 5500,
      sports: 3500,
      transport: 12000,
      annual: 2000,
      total: 73000,
    },
    primary: {
      class: "Class I - V",
      tuition: 60000,
      activity: 6000,
      sports: 4000,
      transport: 12000,
      annual: 2500,
      total: 84500,
    },
    secondary: {
      class: "Class VI - VIII",
      tuition: 75000,
      activity: 7000,
      sports: 5000,
      transport: 12000,
      annual: 3000,
      total: 102000,
    },
    higher: {
      class: "Class IX - X",
      tuition: 90000,
      activity: 8000,
      sports: 6000,
      transport: 12000,
      annual: 3500,
      total: 119500,
    },
    senior: {
      class: "Class XI - XII",
      tuition: 110000,
      activity: 9000,
      sports: 7000,
      transport: 12000,
      annual: 4000,
      total: 142000,
    },
  };

  const classOptions = [
    { value: "nursery", label: "Nursery" },
    { value: "kg", label: "KG" },
    { value: "primary", label: "Class I - V" },
    { value: "secondary", label: "Class VI - VIII" },
    { value: "higher", label: "Class IX - X" },
    { value: "senior", label: "Class XI - XII" },
  ];

  const currentFee = feeStructure[selectedClass as keyof typeof feeStructure];

  const paymentModes = [
    { mode: "Annual Payment", discount: "5% Discount", details: "Pay full annual fee in July" },
    { mode: "Semi-Annual", discount: "2% Discount", details: "Pay in July & December" },
    { mode: "Quarterly", discount: "No Discount", details: "Pay in July, October, January, April" },
    { mode: "Monthly", discount: "No Discount", details: "Pay every month (June to April)" },
  ];

  const scholarshipTypes = [
    {
      name: "Merit Scholarship",
      criteria: "Based on academic performance",
      amount: "Up to 50% fee waiver",
      eligibility: "80% marks and above",
    },
    {
      name: "Sports Scholarship",
      criteria: "Outstanding sports performance",
      amount: "Up to 40% fee waiver",
      eligibility: "State/National level achievements",
    },
    {
      name: "Sibling Discount",
      criteria: "For families with multiple children",
      amount: "10-15% discount",
      eligibility: "2nd and subsequent siblings",
    },
    {
      name: "Need-Based Scholarship",
      criteria: "Financial need assessment",
      amount: "Up to 25% fee waiver",
      eligibility: "As per school assessment",
    },
  ];

  const feeTermsConditions = [
    "Fee is payable in advance before the start of the academic session",
    "Late payment charges of ₹500 per month will be applicable after due date",
    "Fee once paid is non-refundable except in case of withdrawal with 2 months notice",
    "Any change in fee structure will be communicated 30 days in advance",
    "Cheques should be drawn in favor of 'Dungarpur Public School, Dungarpur'",
    "Online payment can be made through bank transfer or school portal",
    "Admission will be cancelled if fee is not paid within 30 days of due date",
    "Additional charges for extra activities or coaching will be communicated separately",
  ];

  const faqs = [
    {
      question: "When is the fee due?",
      answer: "Fee is due in July before the academic session starts. For monthly payment, it is due on the 1st of every month. For other payment modes, specific dates will be communicated.",
    },
    {
      question: "Is there any concession available?",
      answer: "Yes, we offer merit-based scholarships (up to 50%), sports scholarships, sibling discounts (10-15%), and need-based scholarships. Students can apply during admission or on request.",
    },
    {
      question: "What is included in the fee?",
      answer: "The fee includes tuition, activity charges, sports facilities, annual charges, and transport (optional). It does not include uniform, books, stationery, or extra coaching.",
    },
    {
      question: "What are the payment modes available?",
      answer: "We offer annual (5% discount), semi-annual (2% discount), quarterly, and monthly payment options. Online and cheque payments are accepted.",
    },
    {
      question: "Is transport fee mandatory?",
      answer: "No, transport is optional. Students can opt for school transport at ₹12,000 per annum or arrange their own transport.",
    },
    {
      question: "What happens if I withdraw mid-session?",
      answer: "If withdrawal is done with 2 months notice, fees for the remaining period can be adjusted. Without notice, no refund will be provided.",
    },
    {
      question: "Are there any additional charges?",
      answer: "Yes, there may be charges for extra co-curricular activities, coaching classes, international trips, and special programs. These are communicated separately.",
    },
    {
      question: "How can I pay the fees online?",
      answer: "You can pay through bank transfer, online banking, or through our school payment portal. Details will be provided during admission.",
    },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="w-full py-12 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-roman font-bold text-white mb-2">Fee Structure</h1>
          <p className="text-lg text-gray-200">Transparent and Affordable Education for All</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Dungarpur Public School, Dungarpur is committed to providing quality education at reasonable fees. Our transparent fee structure is designed to be affordable for families while maintaining high educational standards. Various payment options and scholarships are available to ensure access to education for all deserving students.
          </p>
        </div>
      </section>

      {/* Fee Structure Interactive Selector */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Detailed Fee Breakdown</h2>

          {/* Class Selector */}
          <div className="max-w-2xl mx-auto mb-8">
            <label className="block text-center font-roman font-bold text-primary mb-4">Select Class:</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {classOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedClass(option.value)}
                  className={`p-3 rounded-lg font-roman font-semibold transition-all duration-300 ${
                    selectedClass === option.value
                      ? "bg-primary text-white"
                      : "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Fee Table for Selected Class */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-primary p-6 text-white">
              <h3 className="text-2xl font-roman font-bold">{currentFee.class}</h3>
              <p className="text-gray-200">Annual Fee Structure (in ₹)</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">Tuition Fee</span>
                <span className="font-bold text-primary">₹{currentFee.tuition.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">Activity Charges</span>
                <span className="font-bold text-primary">₹{currentFee.activity.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">Sports Charges</span>
                <span className="font-bold text-primary">₹{currentFee.sports.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">Transport (Optional)</span>
                <span className="font-bold text-primary">₹{currentFee.transport.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">Annual Charges</span>
                <span className="font-bold text-primary">₹{currentFee.annual.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pt-4 bg-secondary bg-opacity-10 p-4 rounded-lg">
                <span className="font-roman font-bold text-lg text-primary">Total (with transport)</span>
                <span className="font-roman font-bold text-2xl text-secondary">₹{currentFee.total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modes */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Payment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paymentModes.map((payment, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-secondary">
                <div className="flex items-center gap-3 mb-4">
                  <FaCreditCard className="text-3xl text-primary" />
                  <h3 className="text-lg font-roman font-bold text-primary">{payment.mode}</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-secondary bg-opacity-20 px-3 py-2 rounded text-primary font-bold text-sm">
                    {payment.discount}
                  </div>
                  <p className="text-gray-700">{payment.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Scholarship Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scholarshipTypes.map((scholarship, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <FaAward className="text-3xl text-secondary" />
                  <h3 className="text-xl font-roman font-bold text-primary">{scholarship.name}</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 font-semibold">CRITERIA</p>
                    <p className="text-gray-700">{scholarship.criteria}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold">BENEFIT AMOUNT</p>
                    <p className="text-lg font-bold text-secondary">{scholarship.amount}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold">ELIGIBILITY</p>
                    <p className="text-gray-700">{scholarship.eligibility}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">What's Included in Fee</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: FaGraduationCap, title: "Academic", items: ["Classroom instruction", "Lab facilities", "Library access", "Study materials"] },
              { icon: FaAward, title: "Extracurricular", items: ["Sports facilities", "Club activities", "Cultural programs", "Field trips"] },
              { icon: FaFileInvoiceDollar, title: "Admin Services", items: ["Student ID card", "Annual charges", "Sports equipment", "Certificates"] },
            ].map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md border-t-4 border-secondary">
                  <div className="flex items-center gap-2 mb-4">
                    <IconComponent className="text-3xl text-primary" />
                    <h3 className="text-lg font-roman font-bold text-primary">{section.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-secondary font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Fee Terms & Conditions</h2>
          <div className="max-w-4xl mx-auto bg-blue-50 p-8 rounded-lg border-l-4 border-primary">
            <ul className="space-y-3">
              {feeTermsConditions.map((condition, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaInfoCircle className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{condition}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-100 transition-all duration-300 text-left"
                >
                  <h3 className="text-lg font-roman font-bold text-primary pr-4">{faq.question}</h3>
                  <span className="text-secondary text-2xl flex-shrink-0">{expandedFAQ === index ? "−" : "+"}</span>
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6 pt-2 border-t bg-white text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Important Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
              <h3 className="text-lg font-roman font-bold text-primary mb-3 flex items-center gap-2">
                <FaCalendar className="text-secondary" />
                Fee Payment Deadlines
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Annual Payment: June 30th</li>
                <li>• Semi-Annual: June 30th & December 31st</li>
                <li>• Quarterly: June 30th, September 30th, December 31st, March 31st</li>
                <li>• Monthly: 1st of each month</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
              <h3 className="text-lg font-roman font-bold text-primary mb-3 flex items-center gap-2">
                Payment Methods
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Bank Cheque/Demand Draft</li>
                <li>• Online Bank Transfer</li>
                <li>• School Payment Portal</li>
                <li>• Cash (in school office)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-roman font-bold text-primary mb-6">For Fee Queries & Assistance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="p-6 bg-gray-50 rounded-lg">
              <FaPhone className="text-3xl text-secondary mx-auto mb-3" />
              <p className="font-roman font-bold text-primary mb-2">Finance Department</p>
              <p className="text-gray-700">+91-2964-224570</p>
              <p className="text-sm text-gray-600">Mon-Fri: 9:00 AM - 2:00 PM</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <FaEnvelope className="text-3xl text-secondary mx-auto mb-3" />
              <p className="font-roman font-bold text-primary mb-2">Email Us</p>
              <p className="text-gray-700">finance@dpsdungarpur.edu.in</p>
              <p className="text-sm text-gray-600">Response within 48 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-roman font-bold text-white mb-4">Invest in Your Child's Future</h2>
          <p className="text-lg text-gray-200">Quality education at reasonable fees - Making excellence accessible to all</p>
        </div>
      </section>
    </div>
  );
};

export default FeeStructure;