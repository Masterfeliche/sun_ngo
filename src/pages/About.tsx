import { NavLink } from "react-router-dom";

export default function About() {
    return (
        <>
            {/* --- SECTION 1: HERO --- */}
            <div className="w-full min-h-[500px] bg-blue-950 relative">
                 {/* Background Image with Overlay */}
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
                
                <div className="relative z-10 md:grid grid-cols-2 gap-10 p-10 py-20 md:items-center max-w-7xl mx-auto">
                    <div className="md:text-left">
                        <div className="inline-block px-3 py-1 bg-green-600 text-white text-sm font-bold rounded-full mb-4 tracking-wide">
                            ESTABLISHED 2024
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Bridging Development <br/> & A Healthier Planet.
                        </h1>
                        <p className="text-gray-200 mt-6 text-lg leading-relaxed">
                            Welcome to <strong>THE SUN</strong>. Headquartered in Dar es Salaam, we address the gap between human development and the environment. We believe efficient production and a cleaner environment are key to the psychological and physical well-being of all people.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 mt-10">
                            <NavLink to="/programs" className="bg-white text-blue-950 h-12 px-8 rounded-full font-semibold flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg">
                                Our Initiatives
                            </NavLink>
                            <NavLink to="/donate" className="bg-green-600 text-white h-12 px-8 rounded-full font-semibold flex items-center justify-center hover:bg-green-700 transition-colors shadow-lg">
                                Support Us
                            </NavLink>
                        </div>
                    </div>
                    
                    {/* Hero Image / Visual */}
                    <div className="hidden md:block relative">
                         <div className="absolute -inset-4 bg-green-600/20 rounded-2xl blur-lg"></div>
                        <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop" alt="Volunteers working" className="relative rounded-2xl shadow-2xl border-4 border-white/10" />
                    </div>
                </div>
            </div>

            {/* --- SECTION 2: CORE VALUES (Replaced 'Our Approach') --- */}
            <div className="grid md:grid-cols-2 gap-5 bg-white max-w-7xl mx-auto -mt-10 relative z-20 px-4 md:px-0">
                <div className="bg-blue-950 text-center rounded-xl p-12 shadow-xl text-white transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold">Equity & Advocacy</h2>
                    <p className="text-gray-300 mt-4 leading-relaxed">
                        We exemplify equity in rights and responsibilities. Advocacy is our core approach to enhancing sustainability and empowering communities.
                    </p>
                </div>
                <div className="bg-gray-100 text-center rounded-xl p-12 shadow-xl text-blue-950 transform hover:-translate-y-1 transition-transform duration-300 border border-gray-200">
                     <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-green-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold">Equality & Transparency</h2>
                    <p className="text-gray-600 mt-4 leading-relaxed">
                        Our operations are guided by inclusive consultation and Free Prior and Informed Consent (FPIC), ensuring transparency at every step.
                    </p>
                    <NavLink to="/transparency">
                        <button className="mt-6 text-green-600 font-bold hover:text-green-800 flex items-center justify-center mx-auto">
                            View Reports <span className="ml-1">→</span>
                        </button>
                    </NavLink>
                </div>
            </div>

            {/* --- SECTION 3: MISSION & VISION --- */}
            <div className="w-full bg-white p-12 md:py-24">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-left">
                        <h3 className="text-green-600 font-bold tracking-wider uppercase mb-2">Our Ideology</h3>
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Thriving Together</h2>
                        <div className="space-y-6">
                            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-950">
                                <h3 className="text-xl font-bold text-blue-950 mb-2">Our Mission</h3>
                                <p className="text-gray-700">
                                    To improve health and well-being by fostering a sustainable environment, integrating eco-friendly practices with innovative solutions for a healthier planet and people.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
                                <h3 className="text-xl font-bold text-blue-950 mb-2">Our Vision</h3>
                                <p className="text-gray-700">
                                    To create a world where health and biodiversity sustainability thrive together.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=600&auto=format&fit=crop" alt="Mission 1" className="rounded-lg shadow-lg w-full h-64 object-cover mt-8" />
                        <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop" alt="Mission 2" className="rounded-lg shadow-lg w-full h-64 object-cover" />
                    </div>
                </div>
            </div>

            {/* --- SECTION 4: GALLERY (Initiatives in Action) --- */}
            <div className="w-full bg-gray-50 p-12 md:py-20">
                <div className="text-center max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-blue-950">Our Key Initiatives</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        From climate adaptation to health promotion, see how we are building a resilient society.
                    </p>
                </div>
                
                {/* Image Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto">
                    {/* Item 1 */}
                    <div className="group relative overflow-hidden rounded-xl shadow-md">
                        <img className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=500&auto=format&fit=crop" alt="Climate Adaptation" />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent flex items-end p-4">
                            <p className="font-semibold text-white">Climate Adaptation</p>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="group relative overflow-hidden rounded-xl shadow-md">
                        <img className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1576091160550-2187d80a1a44?q=80&w=500&auto=format&fit=crop" alt="Green Skills" />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent flex items-end p-4">
                            <p className="font-semibold text-white">Green Skills for Youth</p>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="group relative overflow-hidden rounded-xl shadow-md">
                        <img className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=500&auto=format&fit=crop" alt="Health Promotion" />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent flex items-end p-4">
                            <p className="font-semibold text-white">Health Promotion</p>
                        </div>
                    </div>
                    {/* Item 4 */}
                    <div className="group relative overflow-hidden rounded-xl shadow-md">
                        <img className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=500&auto=format&fit=crop" alt="Climate Rights" />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent flex items-end p-4">
                            <p className="font-semibold text-white">Climate Advocacy</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- SECTION 5: OUR TEAM --- */}
            <div className="w-full bg-white p-12 md:py-24">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-blue-950 text-3xl font-bold">
                        Meet Our Leadership
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-center">
                        Our team combines local expertise with global best practices to ensure every project is efficient and culturally relevant.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
                        {/* Team Member 1 */}
                        <div className="flex flex-col items-center group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" alt="Director" className="relative rounded-full h-48 w-48 object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <h3 className="text-center text-blue-950 mt-6 text-xl font-bold">John Doe</h3>
                            <p className="text-green-600 font-medium text-sm">Executive Director</p>
                            <div className="flex justify-center gap-4 pt-3">
                                {/* Simple text links or icons for social */}
                                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-blue-950 hover:bg-green-600 hover:text-white transition-colors cursor-pointer">
                                     in
                                </span>
                                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-blue-950 hover:bg-green-600 hover:text-white transition-colors cursor-pointer">
                                     x
                                </span>
                            </div>
                        </div>
                        
                        {/* Team Member 2 */}
                        <div className="flex flex-col items-center group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" alt="Program Manager" className="relative rounded-full h-48 w-48 object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <h3 className="text-center text-blue-950 mt-6 text-xl font-bold">Sarah Smith</h3>
                            <p className="text-green-600 font-medium text-sm">Program Manager</p>
                             <div className="flex justify-center gap-4 pt-3">
                                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-blue-950 hover:bg-green-600 hover:text-white transition-colors cursor-pointer">
                                     in
                                </span>
                            </div>
                        </div>
                        
                        {/* Team Member 3 */}
                        <div className="flex flex-col items-center group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=crop" alt="Community Liaison" className="relative rounded-full h-48 w-48 object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <h3 className="text-center text-blue-950 mt-6 text-xl font-bold">Amina Juma</h3>
                            <p className="text-green-600 font-medium text-sm">Community Liaison</p>
                             <div className="flex justify-center gap-4 pt-3">
                                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-blue-950 hover:bg-green-600 hover:text-white transition-colors cursor-pointer">
                                     in
                                </span>
                            </div>
                        </div>
                        
                        {/* Team Member 4 */}
                        <div className="flex flex-col items-center group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop" alt="Finance Officer" className="relative rounded-full h-48 w-48 object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <h3 className="text-center text-blue-950 mt-6 text-xl font-bold">David Mushi</h3>
                            <p className="text-green-600 font-medium text-sm">Finance Officer</p>
                             <div className="flex justify-center gap-4 pt-3">
                                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-blue-950 hover:bg-green-600 hover:text-white transition-colors cursor-pointer">
                                     in
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}