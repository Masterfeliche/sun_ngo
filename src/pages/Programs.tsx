import { NavLink } from "react-router-dom";

export default function Programs() {
    return (
        <>
            {/* --- SECTION 1: HERO --- */}
            <div className="w-full min-h-[450px] bg-blue-950 relative flex items-center justify-center p-10">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
                
                <div className="text-center max-w-4xl relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        Our Initiatives
                    </h1>
                    <p className="text-gray-100 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
                        We don't just advocate; we act. From climate adaptation to emergency response, our programs are designed to build a resilient, healthy, and sustainable future for Tanzania.
                    </p>
                </div>
            </div>

            {/* --- SECTION 2: INTRODUCTION --- */}
            <div className="w-full bg-white p-10 md:py-24">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-blue-950">A Holistic Approach</h2>
                    <div className="w-24 h-1 bg-green-500 mx-auto mt-4 mb-6 rounded-full"></div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Our ideology is rooted in the belief that <strong>efficient production</strong> and a <strong>healthy environment</strong> are inseparable. We have structured our interventions to address the root causes of vulnerability, ensuring that when we protect the planet, we are also uplifting the people who depend on it.
                    </p>
                </div>
            </div>

            {/* --- SECTION 3: PROGRAMS GRID --- */}
            <div className="w-full bg-gray-50 p-10 md:p-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    
                    {/* Program 1: Climate Adaptation */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
                        <div className="h-64 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=800&auto=format&fit=crop" alt="Climate Adaptation" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold text-blue-950">Climate Adaptation</h3>
                            <p className="text-gray-600 mt-4 flex-grow text-sm leading-relaxed">
                                We work with indigenous communities to implement <strong>crop diversification</strong>, rainwater harvesting, and energy efficiency technologies. We actively discourage horizontal agriculture expansion to preserve natural land.
                            </p>
                            <NavLink to="/contact" className="mt-8 text-green-600 font-bold uppercase text-sm tracking-wide hover:text-green-800 flex items-center">
                                Partner on this <span className="ml-2">→</span>
                            </NavLink>
                        </div>
                    </div>

                    {/* Program 2: Green Skills */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
                        <div className="h-64 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1595838788863-70d3c4f31835?q=80&w=800&auto=format&fit=crop" alt="Green Skills" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold text-blue-950">Green Skills for Youth</h3>
                            <p className="text-gray-600 mt-4 flex-grow text-sm leading-relaxed">
                                Livelihood for a Resilient Society. We provide training programs that enable women and youth to earn through <strong>sustainable agriculture, eco-tourism</strong>, and waste management.
                            </p>
                            <NavLink to="/contact" className="mt-8 text-green-600 font-bold uppercase text-sm tracking-wide hover:text-green-800 flex items-center">
                                Partner on this <span className="ml-2">→</span>
                            </NavLink>
                        </div>
                    </div>

                    {/* Program 3: Health Promotion */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
                        <div className="h-64 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop" alt="Health Promotion" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold text-blue-950">Health Promotion</h3>
                            <p className="text-gray-600 mt-4 flex-grow text-sm leading-relaxed">
                                Mitigating climate impacts on health by improving access to <strong>reproductive healthcare</strong> and raising awareness about the link between population growth and environmental resilience.
                            </p>
                            <NavLink to="/contact" className="mt-8 text-green-600 font-bold uppercase text-sm tracking-wide hover:text-green-800 flex items-center">
                                Partner on this <span className="ml-2">→</span>
                            </NavLink>
                        </div>
                    </div>

                    {/* Program 4: Climate Rights Advocacy */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
                        <div className="h-64 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=800&auto=format&fit=crop" alt="Advocacy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold text-blue-950">Rights Advocacy</h3>
                            <p className="text-gray-600 mt-4 flex-grow text-sm leading-relaxed">
                                Campaigning for policies to protect land and resource rights for indigenous populations. We promote <strong>climate justice</strong> in national and international dialogues.
                            </p>
                            <NavLink to="/contact" className="mt-8 text-green-600 font-bold uppercase text-sm tracking-wide hover:text-green-800 flex items-center">
                                Partner on this <span className="ml-2">→</span>
                            </NavLink>
                        </div>
                    </div>

                    {/* Program 5: Emergency Response */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
                        <div className="h-64 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?q=80&w=800&auto=format&fit=crop" alt="Emergency Response" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold text-blue-950">Emergency Response</h3>
                            <p className="text-gray-600 mt-4 flex-grow text-sm leading-relaxed">
                                Providing relief and rebuilding support for communities threatened by climate disasters such as <strong>floods, hurricanes, heatwaves</strong>, and seasonal disease outbreaks.
                            </p>
                            <NavLink to="/contact" className="mt-8 text-green-600 font-bold uppercase text-sm tracking-wide hover:text-green-800 flex items-center">
                                Partner on this <span className="ml-2">→</span>
                            </NavLink>
                        </div>
                    </div>

                    {/* Program 6: Research & Education */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
                        <div className="h-64 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop" alt="Education" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold text-blue-950">Education & Research</h3>
                            <p className="text-gray-600 mt-4 flex-grow text-sm leading-relaxed">
                                Conducting research on human-environment interaction and educating communities on the benefits of <strong>biodiversity sustainability</strong> for psychological well-being.
                            </p>
                            <NavLink to="/contact" className="mt-8 text-green-600 font-bold uppercase text-sm tracking-wide hover:text-green-800 flex items-center">
                                Partner on this <span className="ml-2">→</span>
                            </NavLink>
                        </div>
                    </div>

                </div>
            </div>

            {/* --- SECTION 4: CALL TO ACTION --- */}
            <div className="w-full bg-blue-950 p-20 relative overflow-hidden">
                 {/* Decorative Circle */}
                 <div className="absolute top-0 right-0 w-96 h-96 bg-green-600 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>

                <div className="text-center max-w-3xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        Support Our Mission
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl mt-6">
                        Whether through funding, volunteering, or partnership, your contribution directly impacts the health of our planet and its people.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
                         <NavLink 
                            to="/donate" 
                            className="bg-green-600 text-white h-14 px-10 rounded-full font-bold text-lg flex items-center justify-center hover:bg-green-700 shadow-lg transition-transform hover:scale-105"
                        >
                            Donate Now
                        </NavLink>
                        <NavLink 
                            to="/volunteer" 
                            className="bg-white text-blue-950 h-14 px-10 rounded-full font-bold text-lg flex items-center justify-center hover:bg-gray-100 shadow-lg transition-transform hover:scale-105"
                        >
                            Join as Volunteer
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}
