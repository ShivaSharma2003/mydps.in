import { FaCalendar, FaBook, FaTrophy, FaCheckCircle, FaDownload, FaClock, FaMapMarkerAlt, FaBell, FaClipboardList, FaExclamationTriangle, FaStar, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const AcdemicCalender = () => {
  const [expandedMonth, setExpandedMonth] = useState<number | null>(0);

  const academicYearStats = [
    { stat: "180+", label: "Teaching Days" },
    { stat: "4", label: "Term Breaks" },
    { stat: "25+", label: "Major Events" },
    { stat: "June-May", label: "Academic Year" },
  ];

  const monthlyCalendar = [
    {
      month: "June",
      events: [
        { date: "1-15 June", event: "Term 1 Classes Begin", type: "academic", icon: FaBook },
        { date: "5 June", event: "School Foundation Day", type: "event", icon: FaStar },
        { date: "15 June", event: "Class Assembly - Junior Wing", type: "event", icon: FaBell },
      ],
    },
    {
      month: "July",
      events: [
        { date: "1-10 July", event: "Mid-Term Assessments (Classes VI-X)", type: "exam", icon: FaClipboardList },
        { date: "15 July", event: "Parent-Teacher Meet", type: "event", icon: FaBell },
        { date: "26 July", event: "Guru Purnima Celebration", type: "event", icon: FaStar },
      ],
    },
    {
      month: "August",
      events: [
        { date: "1-31 August", event: "Independence Day Preparation & Celebrations", type: "event", icon: FaStar },
        { date: "15 August", event: "Independence Day", type: "holiday" },
        { date: "20 August", event: "Sports Week - Preliminary Rounds", type: "event", icon: FaTrophy },
      ],
    },
    {
      month: "September",
      events: [
        { date: "8-10 September", event: "CBSE Board Exam Simulations (Class XII)", type: "exam", icon: FaClipboardList },
        { date: "15 September", event: "Annual Sports Day & Athletics Meet", type: "event", icon: FaTrophy },
        { date: "25 September", event: "Class Assembly - Senior Wing", type: "event", icon: FaBell },
      ],
    },
    {
      month: "October",
      events: [
        { date: "1-15 October", event: "Mid-Semester Break", type: "holiday" },
        { date: "20-25 October", event: "Diwali Celebration & Cultural Programs", type: "event", icon: FaStar },
        { date: "28 October", event: "Term 1 Final Examinations Begin", type: "exam", icon: FaClipboardList },
      ],
    },
    {
      month: "November",
      events: [
        { date: "1-10 November", event: "Term 1 Final Examinations", type: "exam", icon: FaClipboardList },
        { date: "12 November", event: "Children's Day Celebration", type: "event", icon: FaStar },
        { date: "20 November", event: "Result Declaration - Term 1", type: "academic", icon: FaCheckCircle },
      ],
    },
    {
      month: "December",
      events: [
        { date: "1-15 December", event: "Term 2 Classes Begin", type: "academic", icon: FaBook },
        { date: "10-25 December", event: "Annual Day Rehearsals & Preparations", type: "event", icon: FaBell },
        { date: "20-22 December", event: "Annual Cultural Program & Prize Distribution", type: "event", icon: FaStar },
      ],
    },
    {
      month: "January",
      events: [
        { date: "26 January", event: "Republic Day Celebration", type: "holiday" },
        { date: "1-31 January", event: "Online Classes (if required by authorities)", type: "academic", icon: FaBook },
        { date: "20-25 January", event: "Foundation Day Special Programs", type: "event", icon: FaStar },
      ],
    },
    {
      month: "February",
      events: [
        { date: "1-10 February", event: "Mid-Term Assessments (Classes VI-X)", type: "exam", icon: FaClipboardList },
        { date: "15 February", event: "Parent-Teacher Meet", type: "event", icon: FaBell },
        { date: "20-28 February", event: "Cultural Week", type: "event", icon: FaStar },
      ],
    },
    {
      month: "March",
      events: [
        { date: "1-20 March", event: "Term 2 Final Examinations", type: "exam", icon: FaClipboardList },
        { date: "25-31 March", event: "Holi Celebration & Spring Festival", type: "event", icon: FaStar },
        { date: "31 March", event: "Term 2 Ends", type: "academic", icon: FaCheckCircle },
      ],
    },
    {
      month: "April",
      events: [
        { date: "1-30 April", event: "Summer Vacation & Holidays", type: "holiday" },
        { date: "14 April", event: "Dr. Ambedkar Jayanti", type: "holiday" },
        { date: "21 April", event: "CBSE Board Result Declaration (Expected)", type: "academic" },
      ],
    },
    {
      month: "May",
      events: [
        { date: "1-31 May", event: "Summer Vacation Continues", type: "holiday" },
        { date: "15 May", event: "Result Declaration - Term 2", type: "academic" },
        { date: "31 May", event: "Academic Year Ends", type: "academic" },
      ],
    },
  ];

  const holidays = [
    { date: "15 August", event: "Independence Day", duration: "1 day" },
    { date: "1-15 October", event: "Mid-Semester Break", duration: "15 days" },
    { date: "20-22 December", event: "Annual Day Break", duration: "3 days" },
    { date: "23 Dec-1 January", event: "Winter Holiday", duration: "10 days" },
    { date: "26 January", event: "Republic Day", duration: "1 day" },
    { date: "25-31 March", event: "Summer Holiday Begins", duration: "7 days" },
    { date: "1-30 April", event: "Summer Vacation", duration: "30 days" },
    { date: "1-31 May", event: "Extended Summer Break", duration: "31 days" },
  ];

  // const examSchedule = [
  //   { term: "Term 1", period: "July 1-10", classes: "VI-X", type: "Mid-Term Assessment" },
  //   { term: "Term 1", period: "October 28 - November 10", classes: "VI-XII", type: "Final Examinations" },
  //   { term: "Term 2", period: "February 1-10", classes: "VI-X", type: "Mid-Term Assessment" },
  //   { term: "Term 2", period: "March 1-20", classes: "VI-XII", type: "Final Examinations" },
  //   { term: "CBSE", period: "February-March", classes: "X, XII", type: "Board Examinations" },
  //   { term: "CBSE", period: "September 8-10", classes: "XII", type: "Simulation Exams" },
  // ];

  const majorEvents = [
    {
      name: "Sports Day",
      date: "September 15",
      description: "Annual Athletics Meet & Sports Competition",
      location: "School Grounds",
      type: "sports",
    },
    {
      name: "Annual Cultural Program",
      date: "December 20-22",
      description: "Grand Celebration with Cultural Performances & Prize Distribution",
      location: "School Auditorium",
      type: "cultural",
    },
    {
      name: "Foundation Day",
      date: "June 5 & January 25",
      description: "School Foundation Celebration with Special Programs",
      location: "School Campus",
      type: "event",
    },
    {
      name: "Children's Day",
      date: "November 12",
      description: "Celebration for Child Development & Well-being",
      location: "School Campus",
      type: "celebration",
    },
  ];

  const typeColors = {
    academic: { bg: "bg-blue-100", border: "border-blue-300", text: "text-blue-700" },
    exam: { bg: "bg-orange-100", border: "border-orange-300", text: "text-orange-700" },
    event: { bg: "bg-secondary", border: "border-secondary", text: "text-gray-800" },
    holiday: { bg: "bg-green-100", border: "border-green-300", text: "text-green-700" },
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="w-full py-12 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-roman font-bold text-white mb-2">Academic Calendar</h1>
          <p className="text-lg text-gray-200">2026-27 Academic Year Schedule</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            The Academic Calendar provides a comprehensive overview of all important dates, examinations, holidays, and events for the 2026-27 academic year. This schedule helps students, parents, and teachers plan their activities effectively throughout the year.
          </p>
        </div>
      </section>

      {/* Quick Statistics */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {academicYearStats.map((item, index) => (
              <div key={index}>
                <h3 className="text-4xl font-roman font-bold text-secondary mb-2">{item.stat}</h3>
                <p className="text-gray-200">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="w-full py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-roman font-bold text-primary text-center mb-8">Event Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {Object.entries(typeColors).map(([type, colors]) => (
              <div key={type} className={`${colors.bg} ${colors.border} border-2 p-4 rounded-lg text-center`}>
                <p className={`${colors.text} font-semibold capitalize`}>{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Calendar */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Monthly Calendar</h2>
          <div className="space-y-4">
            {monthlyCalendar.map((month, index) => {
              return (
                <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => setExpandedMonth(expandedMonth === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between hover:bg-gray-100 transition-all duration-300 text-left bg-white"
                  >
                    <div className="flex items-center gap-4">
                      <FaCalendar className="text-3xl text-secondary shrink-0" />
                      <div>
                        <h3 className="text-xl font-roman font-bold text-primary">{month.month}</h3>
                        <p className="text-sm text-gray-600">{month.events.length} events scheduled</p>
                      </div>
                    </div>
                    <span className="text-secondary text-2xl shrink-0">
                      {expandedMonth === index ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </button>
                  {expandedMonth === index && (
                    <div className="px-6 pb-6 bg-gray-50 space-y-4">
                      {month.events.map((evt, idx) => {
                        const evt_typeColor = typeColors[evt.type as keyof typeof typeColors] || typeColors.academic;
                        return (
                          <div key={idx} className={`${evt_typeColor.bg} ${evt_typeColor.border} border-l-4 p-4 rounded-lg`}>
                            <div className="flex items-start gap-4">
                              <div className="flex-1">
                                <p className={`${evt_typeColor.text} font-semibold text-sm mb-1`}>{evt.date}</p>
                                <h4 className="font-roman font-bold text-primary">{evt.event}</h4>
                              </div>
                              <span className={`${evt_typeColor.bg} ${evt_typeColor.text} px-3 py-1 rounded-full text-xs font-semibold capitalize shrink-0`}>
                                {evt.type}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Holidays Schedule */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Holiday Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {holidays.map((holiday, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-roman font-bold text-primary mb-2">{holiday.event}</h3>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-700"><span className="font-semibold">Date:</span> {holiday.date}</p>
                      <p className="text-gray-700"><span className="font-semibold">Duration:</span> {holiday.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examination Schedule */}
      {/* <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Examination Schedule</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#800000" }} className="text-white">
                  <th className="px-6 py-4 font-roman font-bold border">Examination</th>
                  <th className="px-6 py-4 font-roman font-bold border">Period</th>
                  <th className="px-6 py-4 font-roman font-bold border">Classes</th>
                  <th className="px-6 py-4 font-roman font-bold border">Type</th>
                </tr>
              </thead>
              <tbody>
                {examSchedule.map((exam, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 border text-gray-700 font-semibold">{exam.term}</td>
                    <td className="px-6 py-4 border text-gray-700">{exam.period}</td>
                    <td className="px-6 py-4 border text-gray-700">{exam.classes}</td>
                    <td className="px-6 py-4 border">
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {exam.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section> */}

      {/* Major Events */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Major Events & Celebrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {majorEvents.map((event, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-secondary">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-roman font-bold text-primary flex-1">{event.name}</h3>
                  <span className="bg-secondary text-gray-800 px-3 py-1 rounded-full text-xs font-semibold ml-2 shrink-0">
                    {event.type}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-secondary shrink-0" />
                    <span className="text-gray-700"><span className="font-semibold">Date:</span> {event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-secondary shrink-0" />
                    <span className="text-gray-700"><span className="font-semibold">Venue:</span> {event.location}</span>
                  </div>
                </div>
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
            {[
              {
                title: "Class Timings",
                icon: FaClock,
                details: [
                  "Summer: 8:00 AM - 1:50 PM",
                  "Winter: 9:00 AM - 2:50 PM",
                ],
              },
              {
                title: "Result Declaration",
                icon: FaCheckCircle,
                details: [
                  "Half Yearly: October 10, 2026",
                  "Annual Examination: March 27, 2027",
                ],
              },
              {
                title: "School Functions",
                icon: FaBell,
                details: [
                  "Parent-Teacher Meetings: Quarterly",
                  "Assembly: Every Monday",
                  "Sports Day: September, 2026",
                ],
              },
              {
                title: "Important Deadlines",
                icon: FaExclamationTriangle,
                details: [
                  "Admission Form Submission: April 2026",
                  "Fee Payment: Before 10th of each month",
                  "Leave Application: 3 days in advance",
                ],
              },
            ].map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="bg-linear-to-br from-gray-50 to-white p-8 rounded-lg shadow-md border-l-4 border-secondary">
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="text-3xl text-secondary shrink-0" />
                    <h3 className="text-lg font-roman font-bold text-primary">{info.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                        <span className="text-secondary mt-1 shrink-0">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-roman font-bold text-primary mb-4">Download Calendar</h2>
          <p className="text-gray-700 mb-8">Download the full academic calendar for easy reference</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/docs/calender.pdf"
              download
              className="flex items-center justify-center gap-2 px-8 py-4 cursor-pointer bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
            >
              <FaDownload />
              Download PDF
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcdemicCalender