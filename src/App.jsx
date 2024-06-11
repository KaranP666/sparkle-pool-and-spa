import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ServiceReq from "./components/ServiceReq";
import Navbar from "./components/Navbar";
import Feedback from "./components/Feedback";

function App() {

  return (
    <>
    <Navbar />
    <BrowserRouter>
    <Home/>
    <AboutUs/>
    {/* <ServiceReq /> */}
    <Feedback/>
    <Routes>
      <Route path="#service-request" />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
