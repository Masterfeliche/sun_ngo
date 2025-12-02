import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-gray-300 py-16 px-6 border-t-4 border-green-600">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Mission */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
               THE <span className="text-green-500">SUN</span>
            </h2>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Bridging the gap between human development and environmental sustainability. We empower communities to build a resilient, healthy future.
            </p>
            {/* Social Icons (SVG) */}
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                 {/* Facebook Icon */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                 {/* Instagram Icon */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                 {/* X / Twitter Icon */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><NavLink to="/" className="hover:text-green-400 hover:translate-x-1 transition-all inline-block">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-green-400 hover:translate-x-1 transition-all inline-block">About Us</NavLink></li>
              <li><NavLink to="/programs" className="hover:text-green-400 hover:translate-x-1 transition-all inline-block">Our Initiatives</NavLink></li>
              <li><NavLink to="/donate" className="hover:text-green-400 hover:translate-x-1 transition-all inline-block">Donate</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-green-400 hover:translate-x-1 transition-all inline-block">Contact</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Initiatives */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Initiatives</h3>
            <ul className="space-y-3 text-sm">
              <li><NavLink to="/programs" className="hover:text-green-400 hover:translate-x-1 transition-all inline-block">Climate Adaptation</NavLink></li>
              <li><NavLink to="/programs" className="hover:text-green-400 hover:translate-x-1 transition-all inline-block">Green Skills for Youth</NavLink></li>
              <li><NavLink to="/programs" className="hover:text-green-400 hover:translate-x-1 transition-all inline-block">Health Promotion</NavLink></li>
              <li><NavLink to="/programs" className="hover:text-green-400 hover:translate-x-1 transition-all inline-block">Rights Advocacy</NavLink></li>
              <li><NavLink to="/programs" className="hover:text-green-400 hover:translate-x-1 transition-all inline-block">Emergency Response</NavLink></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-green-500 mt-0.5 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <div className="flex flex-col">
                    <a href="tel:+255713617751" className="hover:text-green-400 transition-colors">+255 713 617 751</a>
                    <a href="tel:+255718928182" className="hover:text-green-400 transition-colors">+255 718 928 182</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-green-500 mt-0.5 shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                 </svg>
                <a href="mailto:thesunorganisation24@gmail.com" className="hover:text-green-400 transition-colors break-all">
                   thesunorganisation24@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-green-500 mt-0.5 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>P.O. Box 56789, Dar Es Salaam, Tanzania</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-blue-900" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} THE SUN Organization. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;