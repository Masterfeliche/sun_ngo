import { NavLink } from "react-router-dom";

export default function Products() {
    return (
        <>
            {/* --- SECTION 1: HERO --- */}
            <div className="w-full min-h-[400px] bg-blue-950 md:bg-[url(/jakub-zerdzicki-kVuzH0KFs1w-unsplash.jpg)] bg-cover bg-center flex items-center justify-center p-10">
                <div className="text-center max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Our Products
                    </h1>
                    <p className="text-white text-lg md:text-xl mt-6">
                        Reliable hardware and custom branding solutions to equip your business for success.
                    </p>
                </div>
            </div>

            {/* --- SECTION 2: INTRODUCTION --- */}
            <div className="w-full bg-white p-10 md:py-20">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-blue-950">Quality You Can Trust</h2>
                    <p className="text-gray-700 text-lg mt-4">
                        At Eunica Technologies, we stock a wide range of reliable hardware from the world's leading manufacturers. We've selected the best products to ensure your business runs efficiently, securely, and professionally.
                    </p>
                </div>
            </div>

            {/* --- SECTION 3: PRODUCT CATEGORIES GRID --- */}
            <div className="w-full bg-gray-100 p-10 md:p-20">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-blue-950">Our Product Categories</h2>
                    <p className="text-gray-700 text-lg mt-4">
                        Everything your business needs, all in one place.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    
                    {/* Product Card 1: Computers & Laptops */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200">
                        <img src="https://placehold.co/600x400/00008B/FFFFFF?text=Computers" alt="Computers & Laptops" className="h-64 w-full object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-semibold text-blue-950">Computers & Laptops</h3>
                            <p className="text-gray-700 mt-4 flex-grow">
                                High-performance laptops and desktop computers for every business need, from top brands.
                            </p>
                            <NavLink to="/Contact" className="bg-yellow-400 text-blue-950 h-10 w-40 mt-8 rounded-full font-semibold flex items-center justify-center hover:bg-yellow-300">
                                Request a Quote
                            </NavLink>
                        </div>
                    </div>

                    {/* Product Card 2: Computer Accessories */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200">
                        <img src="https://placehold.co/600x400/00008B/FFFFFF?text=Accessories" alt="Computer Accessories" className="h-64 w-full object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-semibold text-blue-950">Computer Accessories</h3>
                            <p className="text-gray-700 mt-4 flex-grow">
                                Monitors, keyboards, mice, printers, routers, and all the accessories to complete your setup.
                            </p>
                            <NavLink to="/Contact" className="bg-yellow-400 text-blue-950 h-10 w-40 mt-8 rounded-full font-semibold flex items-center justify-center hover:bg-yellow-300">
                                Request a Quote
                            </NavLink>
                        </div>
                    </div>

                    {/* Product Card 3: EFD/VEFD Machines */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200">
                        <img src="https://placehold.co/600x400/00008B/FFFFFF?text=EFD+Machines" alt="EFD/VEFD Machines" className="h-64 w-full object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-semibold text-blue-950">EFD/VEFD Machines</h3>
                            <p className="text-gray-700 mt-4 flex-grow">
                                TRA-approved EFD and VEFD machines to keep your business compliant and your sales running smoothly.
                            </p>
                            <NavLink to="/Contact" className="bg-yellow-400 text-blue-950 h-10 w-40 mt-8 rounded-full font-semibold flex items-center justify-center hover:bg-yellow-300">
                                Request a Quote
                            </NavLink>
                        </div>
                    </div>

                    {/* Product Card 4: CCTV Systems */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200">
                        <img src="https://placehold.co/600x400/00008B/FFFFFF?text=CCTV" alt="CCTV Systems" className="h-64 w-full object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-semibold text-blue-950">CCTV & Surveillance</h3>
                            <p className="text-gray-700 mt-4 flex-grow">
                                High-definition camera kits, DVRs, and complete surveillance systems to protect your property.
                            </p>
                            <NavLink to="/Contact" className="bg-yellow-400 text-blue-950 h-10 w-40 mt-8 rounded-full font-semibold flex items-center justify-center hover:bg-yellow-300">
                                Request a Quote
                            </NavLink>
                        </div>
                    </div>

                    {/* Product Card 5: Graphics & Printing */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200">
                        <img src="https://placehold.co/600x400/00008B/FFFFFF?text=Printing" alt="Graphics & Printing" className="h-64 w-full object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-semibold text-blue-950">Graphics & Printing</h3>
                            <p className="text-gray-700 mt-4 flex-grow">
                                Custom business cards, banners (mabango), flyers (vipeperushi), invoice books, and receipt books.
                            </p>
                            <NavLink to="/Contact" className="bg-yellow-400 text-blue-950 h-10 w-40 mt-8 rounded-full font-semibold flex items-center justify-center hover:bg-yellow-300">
                                Request a Quote
                            </NavLink>
                        </div>
                    </div>

                    {/* Product Card 6: Branded Apparel */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200">
                        <img src="https://placehold.co/600x400/00008B/FFFFFF?text=Apparel" alt="Branded Apparel" className="h-64 w-full object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-semibold text-blue-950">Branded Apparel</h3>
                            <p className="text-gray-700 mt-4 flex-grow">
                                Professional logos and branding on hats, polo shirts, and other apparel for a unified team look.
                            </p>
                            <NavLink to="/Contact" className="bg-yellow-400 text-blue-950 h-10 w-40 mt-8 rounded-full font-semibold flex items-center justify-center hover:bg-yellow-300">
                                Request a Quote
                            </NavLink>
                        </div>
                    </div>

                </div>
            </div>

            {/* --- SECTION 4: CALL TO ACTION --- */}
            <div className="w-full bg-blue-950 p-20">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Don't See What You Need?
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl mt-6">
                        We have a wide network of suppliers. Contact us for special orders, bulk pricing, or any other hardware and printing needs.
                    </p>
                    <NavLink 
                        to="/Contact" 
                        className="bg-yellow-400 text-blue-950 h-12 px-8 rounded-full font-semibold flex items-center justify-center w-60 mx-auto mt-10 hover:bg-yellow-300"
                    >
                        Contact Sales
                    </NavLink>
                </div>
            </div>
        </>
    );
}