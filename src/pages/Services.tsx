import { NavLink } from "react-router-dom";

export default function Services() {
    return (
        <>
            {/* --- SECTION 1: HERO ---
              - Replaced fixed height with min-height and padding.
              - Used your main dark blue (bg-blue-950) as a fallback.
              - Replaced "Lorem ipsum" with a real intro.
            */}
            <div className="w-full min-h-[400px] bg-blue-950 md:bg-[url(/joshua-reddekopp-SyYmXSDnJ54-unsplash.jpg)] bg-cover bg-center flex items-center justify-center p-10">
                <div className="text-center max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Our Professional ICT Services
                    </h1>
                    <p className="text-white text-lg md:text-xl mt-6">
                        End-to-end technology solutions to power your business. From hardware sales and installation to custom software and 24/7 support, we are your all-in-one ICT partner.
                    </p>
                </div>
            </div>

            {/* --- SECTION 2: SERVICES GRID ---
              - Changed to a white background for better contrast.
              - Created cards for all 6 of your services.
              - Used your dark blue, green, and yellow colors.
              - Made cards responsive (1 col, then 2, then 3).
            */}
            <div className="w-full bg-white p-10 md:p-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    
                    {/* Service Card 1: Computer Sales */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200">
                        <img src="https://placehold.co/600x400/00008B/FFFFFF?text=Computers" alt="Computers & Accessories" className="h-48 w-full object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-blue-950 text-2xl font-semibold">Computer & Accessories Sales</h2>
                            <p className="text-gray-700 mt-4 flex-grow">
                                We supply top-quality laptops, desktops, printers, monitors, and all essential ICT accessories from trusted brands.
                            </p>
                            <NavLink to="/Products" className="bg-yellow-400 text-blue-950 h-10 w-40 mt-8 rounded-full font-semibold self-start flex items-center justify-center hover:bg-yellow-300">
                                View Products
                            </NavLink>
                        </div>
                    </div>

                    {/* Service Card 2: EFD/VEFD Machines */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200">
                        <img src="https://placehold.co/600x400/00008B/FFFFFF?text=EFD+Machines" alt="EFD/VEFD Machines" className="h-48 w-full object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-blue-950 text-2xl font-semibold">EFD/VEFD Machines</h2>
                            <p className="text-gray-700 mt-4 flex-grow">
                                Stay TRA compliant with our authorized EFD/VEFD machines. We provide complete sales, expert installation, and reliable support.
                            </p>
                            <NavLink to="/Contact" className="bg-yellow-400 text-blue-950 h-10 w-40 mt-8 rounded-full font-semibold self-start flex items-center justify-center hover:bg-yellow-300">
                                Get a Quote
                            </NavLink>
                        </div>
                    </div>

                    {/* Service Card 3: Website & Software */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200">
                        <img src="https://placehold.co/600x400/00008B/FFFFFF?text=Web+Design" alt="Website Design" className="h-48 w-full object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-blue-950 text-2xl font-semibold">Website & Software Dev</h2>
                            <p className="text-gray-700 mt-4 flex-grow">
                                Our team builds modern, responsive websites and custom software applications tailored to automate your operations.
                            </p>
                            <NavLink to="/Contact" className="bg-yellow-400 text-blue-950 h-10 w-40 mt-8 rounded-full font-semibold self-start flex items-center justify-center hover:bg-yellow-300">
                                Get a Quote
                            </NavLink>
                        </div>
                    </div>

                    {/* Service Card 4: CCTV Installation */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200">
                        <img src="https://placehold.co/600x400/00008B/FFFFFF?text=CCTV" alt="CCTV Installation" className="h-48 w-full object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-blue-950 text-2xl font-semibold">CCTV Camera Installation</h2>
                            <p className="text-gray-700 mt-4 flex-grow">
                                Protect your property 24/7. We design and install professional, high-definition surveillance systems for businesses and homes.
                            </p>
                            <NavLink to="/Contact" className="bg-yellow-400 text-blue-950 h-10 w-40 mt-8 rounded-full font-semibold self-start flex items-center justify-center hover:bg-yellow-300">
                                Get a Quote
                            </NavLink>
                        </div>
                    </div>

                    {/* Service Card 5: Maintenance & Support */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200">
                        <img src="https://placehold.co/600x400/00008B/FFFFFF?text=ICT+Support" alt="ICT Support" className="h-48 w-full object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-blue-950 text-2xl font-semibold">Maintenance & ICT Support</h2>
                            <p className="text-gray-700 mt-4 flex-grow">
                                Minimize downtime with our expert support. We offer fast troubleshooting, computer repair, and network maintenance.
                            </p>
                            <NavLink to="/Contact" className="bg-yellow-400 text-blue-950 h-10 w-40 mt-8 rounded-full font-semibold self-start flex items-center justify-center hover:bg-yellow-300">
                                Request Support
                            </NavLink>
                        </div>
                    </div>

                    {/* Service Card 6: Graphics & Printing */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200">
                        <img src="https://placehold.co/600x400/00008B/FFFFFF?text=Printing" alt="Graphics & Printing" className="h-48 w-full object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-blue-950 text-2xl font-semibold">Graphics & Printing</h2>
                            <p className="text-gray-700 mt-4 flex-grow">
                                Build a strong brand with custom logos, business cards, banners (mabango), flyers (vipeperushi), and invoice books.
                            </p>
                            <NavLink to="/Contact" className="bg-yellow-400 text-blue-950 h-10 w-40 mt-8 rounded-full font-semibold self-start flex items-center justify-center hover:bg-yellow-300">
                                Get a Quote
                            </NavLink>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* --- SECTION 3: CALL TO ACTION ---
              - Added a new CTA section to guide users to the contact page.
            */}
            <div className="w-full bg-blue-950 p-20">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Have a Project in Mind?
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl mt-6">
                        Let's discuss your ICT needs. Contact our team today for a free consultation and a no-obligation quote.
                    </p>
                    <NavLink 
                        to="/Contact" 
                        className="bg-yellow-400 text-blue-950 h-12 px-8 rounded-full font-semibold flex items-center justify-center w-60 mx-auto mt-10 hover:bg-yellow-300"
                    >
                        Get Your Free Quote
                    </NavLink>
                </div>
            </div>
        </>
    );
}