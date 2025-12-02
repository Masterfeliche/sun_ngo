import { NavLink } from "react-router-dom";

export default function Partnership() {
    return (
        <>
            {/* --- SECTION 1: HERO --- */}
            <div className="w-full min-h-[450px] bg-blue-950 relative flex items-center justify-center p-10">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
                
                <div className="text-center max-w-4xl relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        Our Partners
                    </h1>
                    <p className="text-gray-100 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
                        Collaboration is at the heart of our impact. We work with government bodies, private sectors, and other NGOs to amplify our reach.
                    </p>
                </div>
            </div>

            {/* --- SECTION 2: ACTIVE PARTNER (Highlight) --- */}
            <div className="w-full bg-white p-10 md:p-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-blue-950">Active Collaboration</h2>
                        <div className="w-24 h-1 bg-green-500 mx-auto mt-4 mb-6 rounded-full"></div>
                        <p className="text-gray-700 text-lg">
                            We are proud to be working side-by-side with key stakeholders to bring sustainable development to Dar es Salaam.
                        </p>
                    </div>

                    {/* Active Partner Card */}
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-xl border-l-8 border-green-600 flex flex-col md:flex-row items-center gap-10 transform hover:scale-[1.01] transition-transform duration-300">
                        {/* Logo Area */}
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-md p-6">
                                {/* Placeholder for Ubungo Municipal Logo - Using a Government Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-24 h-24 text-blue-950">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                                </svg>
                            </div>
                        </div>
                        
                        {/* Content Area */}
                        <div className="w-full md:w-2/3 text-center md:text-left">
                            <div className="inline-block px-4 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                                Active Partner
                            </div>
                            <h3 className="text-3xl font-bold text-blue-950 mb-4">Municipal of Ubungo</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                A strategic partnership focused on enhancing community infrastructure and environmental sustainability within the Ubungo district. Together, we are addressing local challenges through joint resource mobilization and policy advocacy.
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-md">Local Government</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-md">Policy</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-md">Community Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- SECTION 3: UPCOMING PARTNERSHIPS (Pending) --- */}
            <div className="w-full bg-gray-50 p-10 md:p-24 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-10 text-center">
                        In The Pipeline
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        {/* Pending Partner 1 */}
                        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden group">
                            <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">
                                Pending
                            </div>
                            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-400 group-hover:text-blue-950">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Parliamentary Committee</h3>
                            <p className="text-gray-500 text-sm mb-4">
                                Strategic dialogue for policy influence on marginalized community interests.
                            </p>
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Coming Soon</span>
                        </div>

                        {/* Pending Partner 2 */}
                        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden group">
                            <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">
                                Discussion
                            </div>
                            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-400 group-hover:text-blue-950">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Global Green Fund</h3>
                            <p className="text-gray-500 text-sm mb-4">
                                Collaboration on large-scale renewable energy projects for rural areas.
                            </p>
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">In Progress</span>
                        </div>

                        {/* Pending Partner 3 */}
                        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden group">
                            <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">
                                Pending
                            </div>
                            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-400 group-hover:text-blue-950">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-1.086-1.527V8.976c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Sustainable Investors Network</h3>
                            <p className="text-gray-500 text-sm mb-4">
                                Partnering with private investors committed to returning profit benefits to local communities.
                            </p>
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Coming Soon</span>
                        </div>

                    </div>
                </div>
            </div>

            {/* --- SECTION 4: CTA --- */}
            <div className="w-full bg-blue-950 p-10 md:p-20 text-center">
                 <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Interested in Partnering With Us?
                 </h2>
                 <p className="text-gray-300 max-w-2xl mx-auto mb-10">
                    We are always looking for organizations that share our vision for a healthier planet and empowered communities.
                 </p>
                 <NavLink 
                    to="/contact" 
                    className="bg-green-600 text-white h-12 px-10 rounded-full font-bold inline-flex items-center justify-center hover:bg-green-700 transition-colors shadow-lg"
                 >
                    Become a Partner
                </NavLink>
            </div>
        </>
    );
}