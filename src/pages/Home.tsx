import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <>
            {/* --- SECTION 1: HERO --- */}
            <div className="w-full bg-blue-950 relative">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
                
                <div className="relative z-10 grid md:grid-cols-2 gap-10 p-10 py-32 md:min-h-[650px] md:items-center max-w-7xl mx-auto">
                    <div className="text-center md:text-left">
                        <div className="inline-block px-3 py-1 bg-green-600 text-white text-xs md:text-sm font-bold rounded-full mb-4 tracking-wide uppercase">
                            Healthier Planet • Healthier People
                        </div>
                        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
                            Where Health & <br/> Biodiversity Thrive Together.
                        </h1>
                        <p className="text-gray-100 text-lg md:text-xl mt-6 max-w-xl leading-relaxed">
                            Our mission is to improve well-being by fostering a sustainable environment, integrating eco-friendly practices with innovative solutions for a healthier planet and people.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">
                            <NavLink 
                                to="/programs" 
                                className="bg-green-600 text-white h-12 px-8 rounded-full font-semibold flex items-center justify-center hover:bg-green-700 transition-colors shadow-lg"
                            >
                                Our Initiatives
                            </NavLink>
                            <NavLink 
                                to="/donate" 
                                className="bg-white text-blue-950 h-12 px-8 rounded-full font-semibold flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
                            >
                                Support The Mission
                            </NavLink>
                        </div>
                    </div>
                    {/* Empty div for spacing on desktop */}
                    <div className="hidden md:block"></div>
                </div>
            </div>

            {/* --- SECTION 2: IDEOLOGY --- */}
            <div className="text-center p-10 md:p-24 bg-white">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-950 uppercase tracking-wide">
                    Our Ideology
                </h2>
                <div className="w-24 h-1 bg-green-500 mx-auto mt-4 mb-6 rounded-full"></div>
                
                <p className="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed">
                    Founded in 2024 and headquartered in <strong>Dar es Salaam</strong>, THE SUN addresses the gap between human interaction and the environment.
                    <br/><br/>
                    We believe that <strong>efficiency in production</strong> is the key to a healthier interaction. Humans provide labor, while the environment offers clean resources like <strong>water, land, and trees</strong>. This balance has direct control over the psychological and physical well-being of the people involved.
                </p>
            </div>

            {/* --- SECTION 3: CORE VALUES --- */}
            <div className="p-10 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
                        Guided By Our Values
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        While <strong>Empowering the Community</strong> is at our heart, these core principles drive every decision we make.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {/* Value 1 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-xl transition-shadow border-t-4 border-green-500">
                         <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-950 font-bold text-xl">1</div>
                        <h3 className="text-xl font-bold text-blue-950">Equity</h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            Exemplifying equity on all shared rights and responsibilities related to enhancing sustainability.
                        </p>
                    </div>
                    {/* Value 2 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-xl transition-shadow border-t-4 border-green-500">
                         <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-950 font-bold text-xl">2</div>
                        <h3 className="text-xl font-bold text-blue-950">Advocacy</h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            A core approach to achieving our expectation of a healthier planet and climate justice.
                        </p>
                    </div>
                    {/* Value 3 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-xl transition-shadow border-t-4 border-green-500">
                         <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-950 font-bold text-xl">3</div>
                        <h3 className="text-xl font-bold text-blue-950">Sustainability</h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            Integrating eco-friendly practices with innovative solutions for long-term resilience.
                        </p>
                    </div>
                    {/* Value 4 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-xl transition-shadow border-t-4 border-green-500">
                         <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-950 font-bold text-xl">4</div>
                        <h3 className="text-xl font-bold text-blue-950">Transparency</h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            Guided by inclusive consultation and Free Prior and Informed Consent (FPIC).
                        </p>
                    </div>
                </div>
            </div>
            
            {/* --- SECTION 4: PROGRAMS OVERVIEW --- */}
             <div className="w-full bg-white p-10 md:p-20">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center">
                    Our Impact Areas
                </h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
                    {/* Program Card 1 */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col overflow-hidden group">
                        <div className="h-56 overflow-hidden relative">
                             <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition-colors"></div>
                             <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop" alt="Climate Adaptation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-blue-950 text-xl font-bold">Climate Adaptation</h3>
                            <p className="text-gray-600 mt-3 flex-grow text-sm">
                                Implementing crop diversification, rainwater harvesting, energy efficiency, and discouraging horizontal agriculture expansion.
                            </p>
                            <NavLink to="/programs" className="text-green-600 font-bold mt-6 hover:text-green-700 flex items-center uppercase text-sm tracking-wide">
                                Learn More <span className="ml-2">→</span>
                            </NavLink>
                        </div>
                    </div>
                    {/* Program Card 2 */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col overflow-hidden group">
                        <div className="h-56 overflow-hidden relative">
                             <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition-colors"></div>
                             <img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop" alt="Green Skills" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-blue-950 text-xl font-bold">Green Skills & Livelihood</h3>
                            <p className="text-gray-600 mt-3 flex-grow text-sm">
                                Training women and youth in sustainable agriculture, eco-tourism, and waste management for economic resilience.
                            </p>
                            <NavLink to="/programs" className="text-green-600 font-bold mt-6 hover:text-green-700 flex items-center uppercase text-sm tracking-wide">
                                Learn More <span className="ml-2">→</span>
                            </NavLink>
                        </div>
                    </div>
                    {/* Program Card 3 */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col overflow-hidden group">
                        <div className="h-56 overflow-hidden relative">
                             <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition-colors"></div>
                             <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" alt="Health Promotion" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-blue-950 text-xl font-bold">Health Promotion</h3>
                            <p className="text-gray-600 mt-3 flex-grow text-sm">
                                Mitigating climate impacts by improving access to reproductive healthcare and raising awareness on population vs. environment.
                            </p>
                            <NavLink to="/programs" className="text-green-600 font-bold mt-6 hover:text-green-700 flex items-center uppercase text-sm tracking-wide">
                                Learn More <span className="ml-2">→</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- SECTION 5: ADVOCACY & PARTNERSHIPS --- */}
            <div className="bg-blue-950 text-center p-10 md:p-24 relative overflow-hidden">
                {/* Decorative background circle */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-green-600 rounded-full blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white relative z-10">
                    Advocating for Climate Rights
                </h2>
                <p className="text-gray-300 max-w-3xl mx-auto mt-6 text-lg relative z-10">
                    We campaign for policies that protect land and resource rights for indigenous populations, promoting climate justice in national and international dialogues.
                </p>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16 relative z-10">
                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/10 text-left">
                        <h3 className="text-green-400 font-bold text-xl mb-2">Partners & Collaboration</h3>
                        <p className="text-gray-200 text-sm leading-relaxed">
                            We collaborate with Local Government, Parliament, Youth & Women's groups, Investors, and other NGOs to amplify our impact.
                        </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/10 text-left">
                        <h3 className="text-green-400 font-bold text-xl mb-2">Emergency Response</h3>
                        <p className="text-gray-200 text-sm leading-relaxed">
                            Providing relief and rebuilding support for communities threatened by floods, hurricanes, heatwaves, and tropical disease outbreaks.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-16 relative z-10">
                    <NavLink to="/contact" className="bg-white text-blue-950 h-12 px-10 rounded-full font-semibold inline-flex items-center justify-center hover:bg-green-600 hover:text-white transition-all shadow-lg">
                        Partner With Us
                    </NavLink>
                </div>
            </div>
            
            {/* --- SECTION 6: CALL TO ACTION / QUOTE --- */}
            <div className="bg-gray-100 p-10 md:p-24">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 md:p-16 flex flex-col items-center text-center relative border border-gray-100">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-6">
                        "The efficiency of production is the factor of a healthier interaction between human and environment."
                    </h2>
                    <p className="text-gray-600 italic">
                        — THE SUN Ideology
                    </p>
                    <div className="mt-10">
                        <NavLink to="/volunteer" className="text-green-600 font-bold text-lg hover:underline underline-offset-4">
                            Join our team as a volunteer →
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}