// import { NavLink } from "react-router-dom";

export default function Volunteer() {
    return (
        <>
            {/* --- SECTION 1: HERO --- */}
            <div className="w-full min-h-[400px] bg-blue-950 relative flex items-center justify-center p-10">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
                
                <div className="text-center max-w-4xl relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        Join Our Team
                    </h1>
                    <p className="text-gray-100 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
                        Become a part of the change. Your skills and passion can help build a healthier, more sustainable future for Tanzania.
                    </p>
                </div>
            </div>

            {/* --- SECTION 2: WHY VOLUNTEER? --- */}
            <div className="w-full bg-white p-10 md:py-24">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-blue-950">Why Volunteer With Us?</h2>
                    <div className="w-24 h-1 bg-green-500 mx-auto mt-4 mb-6 rounded-full"></div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        At THE SUN, volunteers are the backbone of our community outreach. Whether you are interested in environmental conservation, health education, or youth empowerment, there is a place for you here.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Benefit 1 */}
                    <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow border border-gray-100">
                        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-blue-950">Community Impact</h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            Work directly with local communities to implement real, sustainable solutions.
                        </p>
                    </div>
                    {/* Benefit 2 */}
                    <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow border border-gray-100">
                        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-blue-950">Skill Development</h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            Gain hands-on experience in project management, advocacy, and environmental science.
                        </p>
                    </div>
                    {/* Benefit 3 */}
                    <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow border border-gray-100">
                        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.414-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-blue-950">Networking</h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            Connect with like-minded individuals and leaders in the non-profit sector.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- SECTION 3: EMAIL CTA --- */}
            <div className="w-full bg-blue-950 p-10 md:p-24 relative overflow-hidden text-center">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-green-600 rounded-full blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-600 rounded-full blur-3xl opacity-10"></div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Make a Difference?
                    </h2>
                    <p className="text-gray-300 text-lg mb-10">
                        We are always looking for passionate individuals. Simply send us an email with your details and areas of interest, and our team will get back to you.
                    </p>
                    
                    <a 
                        href="mailto:thesunorganisation24@gmail.com?subject=Volunteer Application - [Your Name]&body=Hello THE SUN Team,%0D%0A%0D%0AI am interested in volunteering with your organization. Here are my details:%0D%0A%0D%0AName: %0D%0APhone: %0D%0AArea of Interest (e.g., Climate, Health, Youth): %0D%0A%0D%0ALooking forward to hearing from you."
                        className="bg-green-600 text-white h-14 px-10 rounded-full font-bold text-lg inline-flex items-center justify-center hover:bg-green-700 transition-all shadow-lg hover:shadow-green-900/50 transform hover:-translate-y-1"
                    >
                        Email Us to Apply
                    </a>
                    
                    <p className="text-gray-400 text-sm mt-6">
                        Clicking the button will open your default email app. <br/>
                        Or email us manually at: <span className="text-white font-semibold">thesunorganisation24@gmail.com</span>
                    </p>
                </div>
            </div>
        </>
    );
}