import { NavLink } from "react-router-dom";
// Removed: react-icons import to prevent errors

const FooterBar = () => {
  return (
    // 1. Main footer: Changed to bg-blue-950
    <footer className="bg-blue-950 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* 2. Responsive grid for link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Menu (Corrected Links) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><NavLink to="/" className="hover:text-yellow-400 hover:underline">Home</NavLink></li>
              <li><NavLink to="/About" className="hover:text-yellow-400 hover:underline">About Us</NavLink></li>
              <li><NavLink to="/Services" className="hover:text-yellow-400 hover:underline">Services</NavLink></li>
              <li><NavLink to="/Products" className="hover:text-yellow-400 hover:underline">Products</NavLink></li>
              <li><NavLink to="/Contact" className="hover:text-yellow-400 hover:underline">Contact</NavLink></li>
            </ul>
          </div>

          {/* Column 2: Services (Expanded List) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li><NavLink to="/Services" className="hover:text-yellow-400 hover:underline">Computer & Accessories Sales</NavLink></li>
              <li><NavLink to="/Services" className="hover:text-yellow-400 hover:underline">EFD/VEFD Machines</NavLink></li>
              <li><NavLink to="/Services" className="hover:text-yellow-400 hover:underline">Website & Software</NavLink></li>
              <li><NavLink to="/Services" className="hover:text-yellow-400 hover:underline">CCTV Installation</NavLink></li>
              <li><NavLink to="/Services" className="hover:text-yellow-400 hover:underline">ICT Support</NavLink></li>
              <li><NavLink to="/Services" className="hover:text-yellow-400 hover:underline">Graphics & Printing</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Contact Us (Corrected Info) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:0714880379" className="hover:text-yellow-400 hover:underline flex items-center space-x-2">
                  {/* Phone SVG Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>0714880379</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@eunicatech.co.tz" className="hover:text-yellow-400 hover:underline break-all flex items-center space-x-2">
                  {/* Email SVG Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>info@eunicatech.co.tz</span>
                </a>
              </li>
              <li className="flex items-start space-x-2 pt-2">
                {/* Location SVG Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Kariakoo, Mwananyamala, Komakoma</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us (Corrected Info & SVGs) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-5">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="hover:text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" aria-label="Tiktok" className="hover:text-yellow-400">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 7.4c-0.1-0.1-0.2-0.2-0.4-0.3l-1.9-0.9c-0.2-0.1-0.4-0.1-0.5 0.1s-0.2 0.4-0.1 0.5l1.9 0.9c0.1 0 0.1 0.1 0.1 0.2v4.3c0 0.1-0.1 0.2-0.2 0.2h-3.3c-0.1 0-0.2-0.1-0.2-0.2V7.7c0-1.8-1.5-3.3-3.3-3.3S10 5.9 10 7.7v8.5c0 1.9-1.3 3.5-3.1 3.8c-1.8 0.3-3.4-1.1-3.8-2.9C2.8 15.3 4 13.5 5.7 13c0.1 0 0.2-0.1 0.2-0.2V8.9c0-0.1-0.1-0.2-0.2-0.2c-0.3 0-0.6 0-0.8 0.1C2 9.2 0.2 11.5 0 14.2C-0.3 17.4 2.2 20 5.4 20c3.1 0 5.7-2.5 5.7-5.7V9.7c0-0.7 0.6-1.3 1.3-1.3s1.3 0.6 1.3 1.3v6.5c0 0.1-0.1 0.2-0.2 0.2h-3.3c-0.1 0-0.2-0.1-0.2-0.2V12c0-1.8-1.5-3.3-3.3-3.3s-3.3 1.5-3.3 3.3v0.6c0 0.1-0.1 0.2-0.2 0.2H3.7c-0.1 0-0.2-0.1-0.2-0.2v-1c0-0.7 0.6-1.3 1.3-1.3s1.3 0.6 1.3 1.3v1c0 0.1-0.1 0.2-0.2 0.2H3.7c-0.1 0-0.2-0.1-0.2-0.2v-1c0-0.7 0.6-1.3 1.3-1.3s1.3 0.6 1.3 1.3v1c0 0.1-0.1 0.2-0.2 0.2H3.7c-0.1 0-0.2-0.1-0.2-0.2v-1c0-1.8 1.5-3.3 3.3-3.3s3.3 1.5 3.3 3.3v6.5c0 0.1-0.1 0.2-0.2 0.2h-3.3c-0.1 0-0.2-0.1-0.2-0.2V9.7c0-0.7 0.6-1.3 1.3-1.3s1.3 0.6 1.3 1.3v8.6c0 1.9 1.3 3.5 3.1 3.8c1.8 0.3 3.4-1.1 3.8-2.9c0.3-1.8-1-3.6-2.8-3.9c-0.1 0-0.2-0.1-0.2-0.2V7.7c0-0.7 0.6-1.3 1.3-1.3s1.3 0.6 1.3 1.3v4.3c0 0.1-0.1 0.2-0.2 0.2h-3.3c-0.1 0-0.2-0.1-0.2-0.2V7.7c0-0.7 0.6-1.3 1.3-1.3s1.3 0.6 1.3 1.3v4.3c0 0.1-0.1 0.2-0.2 0.2h-3.3c-0.1 0-0.2-0.1-0.2-0.2V7.7c0-1.8 1.5-3.3 3.3-3.3s3.3 1.5 3.3 3.3V12c0 0.1-0.1 0.2-0.2 0.2h-3.3c-0.1 0-0.2-0.1-0.2-0.2v-4.3c0-0.1 0.1-0.2 0.2-0.2l1.9-0.9c0.2-0.1 0.4-0.1 0.5 0.1C21.2 7.2 21.2 7.3 21 7.4z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="hover:text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* 3. Divider line */}
        <hr className="my-10 border-gray-700" />

        {/* 4. Bottom bar with Logo and Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          {/* Logo - matched accent to yellow-400 */}
          <h2 className="text-xl font-bold text-white mb-4 sm:mb-0">
            <span className="text-yellow-400">EUNICA</span> TECHNOLOGIES
          </h2>
          <p>&copy; {new Date().getFullYear()} Eunica Technologies. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default FooterBar;