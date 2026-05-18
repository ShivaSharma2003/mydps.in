import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaUser, FaComments } from "react-icons/fa";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We will contact you soon!");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Phone",
      details: ["+91-2964-224567", "+91-9876-543210"],
      label: "Call us for immediate assistance",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      details: ["info@dpsdungarpur.edu.in", "admissions@dpsdungarpur.edu.in"],
      label: "Send us your queries anytime",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      details: ["Dungarpur", "Rajasthan 314001, India"],
      label: "Visit our campus",
    },
    {
      icon: FaClock,
      title: "Office Hours",
      details: ["Mon - Sat: 8:00 AM - 4:00 PM", "Sunday: Closed"],
      label: "We are here to help",
    },
  ];

  const departments = [
    {
      dept: "Principal's Office",
      phone: "+91-2964-224567",
      email: "principal@dpsdungarpur.edu.in",
      timings: "8:00 AM - 3:30 PM",
    },
    {
      dept: "Admissions",
      phone: "+91-2964-224568",
      email: "admissions@dpsdungarpur.edu.in",
      timings: "8:00 AM - 4:00 PM",
    },
    {
      dept: "Academic Department",
      phone: "+91-2964-224569",
      email: "academics@dpsdungarpur.edu.in",
      timings: "8:00 AM - 3:30 PM",
    },
    {
      dept: "Finance & Fee",
      phone: "+91-2964-224570",
      email: "finance@dpsdungarpur.edu.in",
      timings: "9:00 AM - 2:00 PM",
    },
    {
      dept: "Sports Department",
      phone: "+91-2964-224571",
      email: "sports@dpsdungarpur.edu.in",
      timings: "3:30 PM - 6:00 PM",
    },
    {
      dept: "Counseling Services",
      phone: "+91-2964-224572",
      email: "counseling@dpsdungarpur.edu.in",
      timings: "8:00 AM - 4:00 PM",
    },
  ];

  const socialLinks = [
    { icon: FaFacebook, url: "#", label: "Facebook" },
    { icon: FaTwitter, url: "#", label: "Twitter" },
    { icon: FaInstagram, url: "#", label: "Instagram" },
    { icon: FaLinkedin, url: "#", label: "LinkedIn" },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="w-full py-12 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-roman font-bold text-white mb-2">Contact Us</h1>
          <p className="text-lg text-gray-200">We're Here to Help - Reach Out to Us Anytime</p>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center border-t-4 border-secondary"
                >
                  <IconComponent className="text-4xl text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-roman font-bold text-primary mb-2">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 font-semibold">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 italic">{info.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-roman font-bold text-primary mb-6 flex items-center gap-3">
                <FaComments className="text-secondary" />
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-roman font-bold text-primary mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-roman font-bold text-primary mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-roman font-bold text-primary mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-all duration-300"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-roman font-bold text-primary mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-all duration-300 bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="admission">Admission Enquiry</option>
                    <option value="academic">Academic Concern</option>
                    <option value="fee">Fee Related</option>
                    <option value="facilities">Facilities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-roman font-bold text-primary mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-all duration-300 resize-none"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white font-roman font-bold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Location & Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
                <h3 className="text-2xl font-roman font-bold text-primary mb-4">Our Location</h3>
                <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen={true}
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.123456789!2d73.33!3d24.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDungarpur!5e0!3m2!1sen!2sin!4v1234567890"
                  ></iframe>
                </div>
              </div>

              {/* Quick Info Box */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h3 className="text-xl font-roman font-bold text-primary mb-4 flex items-center gap-2">
                  <FaUser className="text-secondary" />
                  Quick Information
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <span className="font-bold">School Code:</span> 1001234
                  </p>
                  <p>
                    <span className="font-bold">UDISE Code:</span> 08050100103
                  </p>
                  <p>
                    <span className="font-bold">Affiliation:</span> CBSE (Central Board of Secondary Education)
                  </p>
                  <p>
                    <span className="font-bold">Website:</span> www.dpsdungarpur.edu.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Department Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-b-4 border-secondary">
                <h3 className="text-lg font-roman font-bold text-primary mb-4">{dept.dept}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <FaPhone className="text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 font-semibold">PHONE</p>
                      <p className="text-gray-700 font-semibold">{dept.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaEnvelope className="text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 font-semibold">EMAIL</p>
                      <p className="text-gray-700 text-sm break-all">{dept.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaClock className="text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 font-semibold">HOURS</p>
                      <p className="text-gray-700 text-sm">{dept.timings}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-roman font-bold text-primary mb-8">Follow Us On Social Media</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Stay connected with us on social media for the latest updates, news, and announcements about school activities and achievements.
          </p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: "#800000" }}
                  title={link.label}
                >
                  <IconComponent className="text-2xl" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-roman font-bold text-primary text-center mb-12">Before You Contact Us</h2>
          <div className="max-w-4xl mx-auto bg-blue-50 p-8 rounded-lg border-l-4 border-primary">
            <ul className="space-y-4">
              {[
                "For admission enquiries, please visit our Admissions page or call +91-2964-224568",
                "For fee-related queries, contact the Finance Department during office hours",
                "For academic concerns, schedule an appointment with the Academic Head",
                "For general inquiries, please fill out the contact form or call our main office",
                "For urgent matters, you can visit our campus during school hours",
                "All official communications should be sent via email for record purposes",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#800000" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-roman font-bold text-white mb-4">We Look Forward to Hearing from You!</h2>
          <p className="text-lg text-gray-200">Your questions and feedback are important to us. Contact us today!</p>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;