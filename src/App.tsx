import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import FooterBar from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    // 1. THIS IS THE PARENT WRAPPER
    // It MUST have all three of these classes:
    <div className="flex flex-col min-h-screen">

      <NavBar />

      
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Contact" element={<Contact />} />
          </Routes>
   

      <FooterBar />
      
    </div>
  )
}

export default App;