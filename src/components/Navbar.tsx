import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* --- Main Navbar Container --- */}
            <nav className="fixed top-0 w-full z-50 h-20 bg-blue-950 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
                
                    {/* --- Logo --- */}
                    <NavLink to="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors">
                            {/* Sun Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>
                        </div>
                        <span className="text-white font-bold text-xl tracking-wider">THE SUN</span>
                    </NavLink>
                    
                    {/* --- Desktop Nav Links --- */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-green-400" : "text-gray-200 hover:text-white"}`}
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-green-400" : "text-gray-200 hover:text-white"}`}
                        >
                            About
                        </NavLink>
                        <NavLink 
                            to="/programs" 
                            className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-green-400" : "text-gray-200 hover:text-white"}`}
                        >
                            Initiatives
                        </NavLink>
                        <NavLink 
                            to="/contact" 
                            className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-green-400" : "text-gray-200 hover:text-white"}`}
                        >
                            Contact
                        </NavLink>
                        
                        {/* Donate Button */}
                        <NavLink 
                            to="/donate" 
                            className="bg-green-600 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-green-700 transition-all shadow-lg hover:shadow-green-900/20"
                        >
                            Donate Now
                        </NavLink>
                    </div>

                    {/* --- Mobile Toggle Button --- */}
                    <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* --- Mobile Menu Dropdown --- */}
                {isOpen && (
                    <div className="md:hidden bg-blue-950 border-t border-blue-900 absolute w-full left-0 top-20 shadow-xl">
                        <div className="flex flex-col p-4 space-y-2">
                            <NavLink 
                                to="/" 
                                onClick={toggleMenu} 
                                className={({ isActive }) => `p-3 rounded-lg font-medium ${isActive ? "bg-blue-900 text-green-400" : "text-gray-200 hover:bg-blue-900 hover:text-white"}`}
                            >
                                Home
                            </NavLink>
                            <NavLink 
                                to="/about" 
                                onClick={toggleMenu} 
                                className={({ isActive }) => `p-3 rounded-lg font-medium ${isActive ? "bg-blue-900 text-green-400" : "text-gray-200 hover:bg-blue-900 hover:text-white"}`}
                            >
                                About Us
                            </NavLink>
                            <NavLink 
                                to="/Programs" 
                                onClick={toggleMenu} 
                                className={({ isActive }) => `p-3 rounded-lg font-medium ${isActive ? "bg-blue-900 text-green-400" : "text-gray-200 hover:bg-blue-900 hover:text-white"}`}
                            >
                                Our Initiatives
                            </NavLink>
                            <NavLink 
                                to="/contact" 
                                onClick={toggleMenu} 
                                className={({ isActive }) => `p-3 rounded-lg font-medium ${isActive ? "bg-blue-900 text-green-400" : "text-gray-200 hover:bg-blue-900 hover:text-white"}`}
                            >
                                Contact
                            </NavLink>
                            <NavLink 
                                to="/Donate" 
                                onClick={toggleMenu} 
                                className="bg-green-600 text-white p-3 rounded-lg font-bold text-center hover:bg-green-700 mt-2"
                            >
                                Donate Now
                            </NavLink>
                        </div>
                    </div>
                )}
            </nav>
            
            {/* Spacer to prevent content from hiding behind fixed navbar */}
            <div className="h-20"></div>
        </>
    );
}

export default NavBar;