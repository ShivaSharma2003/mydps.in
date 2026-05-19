import { FaFire, FaCheckCircle, FaExclamationTriangle, FaShieldAlt, FaUsers, FaPhone, FaFileAlt, FaMapMarkerAlt, FaDownload, FaFilePdf } from "react-icons/fa";

const FireNOC = () => {
  const safetyFeatures = [
    {
      icon: FaFire,
      title: "Fire Detection Systems",
      description: "Modern smoke detectors and fire alarm systems installed throughout the building",
      details: ["Automatic smoke detection", "24/7 monitoring", "Alert systems on all floors"],
    },
    {
      icon: FaShieldAlt,
      title: "Fire Suppression",
      description: "Comprehensive fire extinguishing systems and water supply for emergencies",
      details: ["Fire extinguishers on every floor", "Sprinkler system", "Fire hydrants"],
    },
    {
      icon: FaUsers,
      title: "Emergency Exits",
      description: "Multiple emergency exits and evacuation routes with clear signage",
      details: ["Wide emergency staircases", "Emergency routes marked", "Exit signage illuminated"],
    },
    {
      icon: FaCheckCircle,
      title: "Staff Training",
      description: "Regular fire safety training for all staff members",
      details: ["Monthly drills", "Fire marshal training", "First aid certification"],
    },
  ];

  const evacuationProcedure = [
    {
      step: 1,
      title: "Alert",
      description: "When fire alarm sounds, immediately alert all personnel in your area",
    },
    {
      step: 2,
      title: "Evacuate",
      description: "Proceed to nearest exit in an orderly manner. Do not use elevators",
    },
    {
      step: 3,
      title: "Assemble",
      description: "Assemble at designated assembly point in the school ground",
    },
    {
      step: 4,
      title: "Account",
      description: "Class teachers account for all students and report to coordinator",
    },
    {
      step: 5,
      title: "Wait",
      description: "Remain at assembly point until all clear signal is given",
    },
  ];

  const fireEquipment = [
    { name: "Fire Extinguishers", location: "All floors - hallways", quantity: "25+", maintenance: "Monthly" },
    { name: "Fire Hydrants", location: "Strategic locations", quantity: "6", maintenance: "Quarterly" },
    { name: "Fire Alarms", location: "All blocks", quantity: "40+", maintenance: "Monthly" },
    { name: "Emergency Lights", location: "Exit routes", quantity: "35+", maintenance: "Monthly" },
    { name: "Emergency Staircase", location: "Multiple locations", quantity: "4", maintenance: "Quarterly" },
    { name: "First Aid Kits", location: "All floors", quantity: "20+", maintenance: "Monthly" },
  ];

  const safetyGuidelines = [
    "Never block emergency exits or fire safety equipment",
    "Keep emergency routes and staircase free from obstruction",
    "Report any damaged or missing fire safety equipment immediately",
    "Do not tamper with fire alarms or extinguishers",
    "Keep electrical appliances away from combustible materials",
    "Do not smoke inside the school premises",
    "Know the location of nearest emergency exit",
    "Participate actively in fire safety drills",
    "Report any fire hazards to the administration",
    "Keep fire service contact numbers readily available",
  ];

  const regularDrills = [
    { month: "June", type: "Regular Fire Drill", details: "All students participate" },
    { month: "September", type: "Emergency Evacuation", details: "Full campus evacuation" },
    { month: "December", type: "First Aid & CPR", details: "Staff training session" },
    { month: "March", type: "Mock Rescue Operation", details: "Fire brigade participation" },
  ];

  const nocDetails = [
    {
      certificate: "Fire NOC",
      issuedBy: "Fire Department, Dungarpur",
      validUpto: "15th March 2026",
      certNumber: "FD/DG/2024/001",
      status: "Active",
    },
    {
      certificate: "Building Compliance Certificate",
      issuedBy: "Municipal Corporation",
      validUpto: "30th June 2026",
      certNumber: "MC/DG/2024/045",
      status: "Active",
    },
    {
      certificate: "Safety Inspection Report",
      issuedBy: "Fire Department",
      validUpto: "15th September 2025",
      certNumber: "FD/DG/INS/2024/012",
      status: "Active",
    },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="w-full py-12 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-roman font-bold text-white mb-2">Fire NOC & Safety Compliance</h1>
          <p className="text-lg text-gray-200">Ensuring a Safe Campus for Our Students & Staff</p>
        </div>
      </section>

      {/* Fire NOC Overview */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-roman font-bold text-primary mb-6">About Fire NOC</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dungarpur Public School, Dungarpur has received Fire No Objection Certificate (Fire NOC) from the Fire Department of Dungarpur, confirming full compliance with all fire safety regulations and standards set by the government authorities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our school is equipped with modern fire safety equipment, trained staff, and comprehensive emergency procedures to ensure the safety and well-being of all students and personnel on campus.
            </p>
          </div>

          {/* NOC Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nocDetails.map((doc, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-secondary">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-roman font-bold text-primary">{doc.certificate}</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">{doc.status}</span>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">
                    <span className="font-semibold">Issued By:</span> {doc.issuedBy}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Certificate No:</span> {doc.certNumber}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Valid Upto:</span> {doc.validUpto}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fire Safety Features */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Fire Safety Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safetyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 rounded-lg" style={{ backgroundColor: "#800000" }}>
                      <IconComponent className="text-2xl text-secondary" />
                    </div>
                    <h3 className="text-lg font-roman font-bold text-primary">{feature.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <FaCheckCircle className="text-secondary flex-shrink-0" />
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fire Equipment */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Fire Safety Equipment</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
              <thead style={{ backgroundColor: "#800000" }}>
                <tr className="text-white font-roman font-bold">
                  <th className="p-4 text-left">Equipment</th>
                  <th className="p-4 text-left">Location</th>
                  <th className="p-4 text-center">Quantity</th>
                  <th className="p-4 text-center">Maintenance</th>
                </tr>
              </thead>
              <tbody>
                {fireEquipment.map((item, index) => (
                  <tr key={index} className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                    <td className="p-4 font-semibold text-gray-700">{item.name}</td>
                    <td className="p-4 text-gray-700">{item.location}</td>
                    <td className="p-4 text-center text-gray-700">{item.quantity}</td>
                    <td className="p-4 text-center text-gray-700">{item.maintenance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Evacuation Procedure */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Emergency Evacuation Procedure</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {evacuationProcedure.map((proc, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-roman font-bold text-white text-lg" style={{ backgroundColor: "#800000" }}>
                    {proc.step}
                  </div>
                  <h3 className="text-lg font-roman font-bold text-primary mb-2">{proc.title}</h3>
                  <p className="text-sm text-gray-600">{proc.description}</p>
                </div>
                {index < evacuationProcedure.length - 1 && (
                  <div className="hidden md:block absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-1 bg-secondary"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Fire Safety Guidelines</h2>
          <div className="max-w-4xl mx-auto bg-blue-50 p-8 rounded-lg border-l-4 border-primary">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {safetyGuidelines.map((guideline, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{guideline}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Regular Fire Drills */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Regular Fire Safety Drills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regularDrills.map((drill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center border-t-4 border-secondary">
                <div className="text-3xl font-roman font-bold text-secondary mb-3">{drill.month}</div>
                <h3 className="text-lg font-roman font-bold text-primary mb-2">{drill.type}</h3>
                <p className="text-sm text-gray-600">{drill.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Important Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
              <h3 className="text-lg font-roman font-bold text-primary mb-4 flex items-center gap-2">
                <FaPhone className="text-secondary" />
                Emergency Contact
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold">Fire Brigade:</span>
                  <p>101 (Toll Free)</p>
                </li>
                <li>
                  <span className="font-semibold">School Emergency:</span>
                  <p>+91-2964-224567</p>
                </li>
                <li>
                  <span className="font-semibold">Fire Officer:</span>
                  <p>+91-2964-220121</p>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
              <h3 className="text-lg font-roman font-bold text-primary mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-secondary" />
                Assembly Points
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold">Primary Assembly:</span>
                  <p>School Ground (Main)</p>
                </li>
                <li>
                  <span className="font-semibold">Secondary Assembly:</span>
                  <p>Sports Field</p>
                </li>
                <li>
                  <span className="font-semibold">Meeting Point:</span>
                  <p>School Gate Area</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="w-full py-16 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg border-l-4 border-red-500 shadow-md">
            <div className="flex items-start gap-4">
              <FaExclamationTriangle className="text-red-500 text-3xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-roman font-bold text-primary mb-4">In Case of Fire Emergency</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Activate the fire alarm immediately</li>
                  <li>• Call emergency services (Fire Brigade - 101)</li>
                  <li>• Evacuate the premises using designated exits</li>
                  <li>• Proceed to the assembly point</li>
                  <li>• Never attempt to fight large fires - prioritize life safety</li>
                  <li>• Wait for official instructions before re-entering the building</li>
                  <li>• Report any injuries or trapped persons to authorities immediately</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md border-2 border-secondary">
            <FaFileAlt className="text-5xl text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-roman font-bold text-primary mb-2">Fire NOC Certification</h3>
            <p className="text-gray-700 mb-4">
              Dungarpur Public School, Dungarpur is fully certified and compliant with all fire safety regulations and standards as per the National Building Code (NBC) and Fire Safety Act.
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Last Inspection:</span> March 2024 | <span className="font-semibold">Next Due:</span> March 2025
            </p>
          </div>
        </div>
      </section>

      {/* Download PDF Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Download Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {[
              {
                title: "Fire NOC Certificate",
                description: "Official Fire No Objection Certificate from Fire Department",
                fileType: "PDF",
                size: "2.5 MB",
                href: "/files/FIRE NOC DPS 2026.pdf",
              }
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
                <a href={doc.href} download className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300">
                  <FaDownload className="text-sm" />
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FireNOC;