import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ServiceReq from "./components/ServiceReq";
import Navbar from "./components/Navbar";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

function MainContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/service-request" && <Home id="home" />}
      {location.pathname !== "/service-request" && <AboutUs id="about-us" />}
      {location.pathname !== "/service-request" && <Feedback id="feedback" />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/service-request" element={<ServiceReq />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
