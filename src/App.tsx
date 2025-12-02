import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

import Contact from "./pages/Contact";
import FooterBar from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Programs from "./pages/Programs";
import Donate from "./pages/Donate";
import Volunteer from "./pages/Volunteer";

function App() {
  return (
    // 1. THIS IS THE PARENT WRAPPER
    // It MUST have all three of these classes:
    <div className="flex flex-col min-h-screen">

      <NavBar />

      
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Programs" element={<Programs />} />
              <Route path="/Donate" element={<Donate />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Volunteer" element={<Volunteer />} />
          </Routes>
   

      <FooterBar />
      
    </div>
  )
}

export default App;