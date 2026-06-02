import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./Pages/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SocietySRSL from "./Pages/SocietySRSL";
import FireNOC from "./Pages/FireNOC";
import MandatoryDisclosure from "./Pages/MadatoryDisclosure";
import ContactUs from "./Pages/ContactUs";
import Magzines from "./Pages/Magzines";
import Gallery from "./Pages/Gallery";
import SportsAchievement from "./Pages/SportsAchievement";
import AcademicsAcheivement from "./Pages/AcademicsAcheivement";
import CultureEvents from "./Pages/CultureEvents";
import CodeOfConduct from "./Pages/CodeOfConduct";
import SchoolPolicies from "./Pages/SchoolPolicies";
import Governance from "./Pages/Governance";
import Admissions from "./Pages/Admissions";
import FeeStructure from "./Pages/FeeStructure";
import Scholarships from "./Pages/Scholarships";
import PrincipalMessage from "./Pages/PrincipalMessage";
import ChairmanMessage from "./Pages/ChairmanMessage";
import StaffMembers from "./Pages/StaffMembers";
import SchoolHistory from "./Pages/SchoolHistory";
import AcdemicCalender from "./Pages/AcdemicCalender";
import WhatsAppChat from "./components/WhatsAppChat";


const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/mandatory-disclosure" Component={MandatoryDisclosure} />
        <Route path="/fire-noc" Component={FireNOC} />
        <Route path="/society-srsl" Component={SocietySRSL} />
        <Route path="/contact-us" Component={ContactUs} />
        <Route path="/magazine" Component={Magzines} />
        <Route path="/gallery" Component={Gallery} />
        <Route path="/achievements/sports" Component={SportsAchievement} />
        <Route path="/achievements/academics" Component={AcademicsAcheivement} />
        <Route path="/achievements/cultural-events" Component={CultureEvents} />
        <Route path="/code-of-conduct" Component={CodeOfConduct} />
        <Route path="/governance" Component={Governance} />
        <Route path="/admissions" Component={Admissions} />
        <Route path="/fee-structure" Component={FeeStructure} />
        <Route path="/scholarships" Component={Scholarships} />
        <Route path="/chairman-message" Component={ChairmanMessage} />
        <Route path="/principal-message" Component={PrincipalMessage} />
        <Route path="/school-policies" Component={SchoolPolicies} />
        <Route path="/staff-members" Component={StaffMembers} />
        <Route path="/school-history" Component={SchoolHistory} />
        <Route path="/academic-calender" Component={AcdemicCalender} />
      </Routes>
      <Footer />
      <WhatsAppChat />
    </>
  );
};

export default App;
