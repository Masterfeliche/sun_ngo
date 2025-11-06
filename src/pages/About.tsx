import { NavLink } from "react-router-dom";
// Removed: import { BsInstagram, BsFacebook } from "react-icons/bs";

export default function About() {
    return (
        <>
            {/* --- SECTION 1: HERO --- */}
            <div className="w-full min-h-[600px] bg-blue-950 md:bg-[url(/pakata-goh-Ovb-MejXjOg-unsplash.jpg)] bg-cover md:grid grid-cols-2 gap-10 p-10 md:items-center">
                <div className="md:text-center">
                    <h1 className="text-4xl font-bold text-white">
                        ABOUT US
                    </h1>
                    <p className="text-white mt-4 text-lg">
                        Welcome to Eunica Technologies, Tanzania's trusted leader in Information and Communication Technology. Since our beginning, we have been on a mission to empower businesses by providing reliable, efficient, and affordable technology solutions.
                        <br /><br />
                        We are more than just an ICT company; we are your strategic partner. Our team is composed of dedicated professionals who are passionate about technology and committed to customer success.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 md:flex md:justify-center md:gap-5 mt-10">
                        <NavLink to="/Services" className="bg-white text-blue-700 h-12 w-full flex items-center justify-center rounded-full font-semibold hover:bg-gray-200">
                            View Our Services
                        </NavLink>
                        <NavLink to="/Contact" className="bg-orange-400 text-white h-12 w-full flex items-center justify-center rounded-full font-semibold hover:bg-orange-500">
                            Get a Free Quote
                        </NavLink>
                    </div>
                </div>
                
                <div className="md:hidden">
                    <img src="/michal-jakubowski-oQD9uq4Rd4I-unsplash.jpg" alt="About us visual" className="rounded-md mt-10" />
                </div>
            </div>

            {/* --- SECTION 2: SERVICES & PRODUCTS --- */}
            <div className="grid md:grid-cols-2 gap-5 bg-blue-950 p-5">
                <div className="bg-[url(/cytonn-photography-n95VMLxqM2I-unsplash.jpg)] bg-no-repeat bg-cover text-center rounded-lg p-12">
                    <h1 className="text-3xl font-bold text-white">OUR SERVICES</h1>
                    <p className="text-green-400 mt-4">
                        From EFD machine setup and CCTV installation to custom website design and on-call ICT support, we provide the expert solutions your business needs.
                    </p>
                    <NavLink to="/Services">
                        <button className="mt-6 rounded-full bg-orange-400 p-3 px-6 hover:bg-orange-500 text-white font-semibold">
                            See All Services
                        </button>
                    </NavLink>
                </div>
                <div className="bg-[url(/jakub-zerdzicki-kVuzH0KFs1w-unsplash.jpg)] bg-cover text-center rounded-lg p-12">
                    <h1 className="text-3xl font-bold text-white">OUR PRODUCTS</h1>
                    <p className="text-green-400 mt-4">
                        We stock quality hardware, including laptops, computers, accessories, and TRA-approved EFD machines, plus custom printing for all your branding.
                    </p>
                    <NavLink to="/Products">
                        <button className="mt-6 rounded-full bg-orange-400 p-3 px-6 hover:bg-orange-500 text-white font-semibold">
                            View All Products
                        </button>
                    </NavLink>
                </div>
            </div>

            {/* --- SECTION 3: MISSION & VISION --- */}
            <div className="w-full bg-white md:grid grid-cols-2 gap-10 p-12 md:items-center">
                <div className="text-blue-950 text-center">
                    <h1 className="text-3xl font-bold">Our Mission</h1>
                    <p className="mt-4">
                        To provide seamless, end-to-end ICT services and support that allow our clients to focus on what they do best: running their business.
                    </p>
                </div>
                <div className="text-blue-950 text-center pt-10 md:pt-0">
                    <h1 className="text-3xl font-bold">Our Vision</h1>
                    <p className="mt-4">
                        To be the most reliable and innovative ICT solutions provider, powering the growth of businesses across Tanzania.
                    </p>
                </div>
            </div>

            {/* --- NEW SECTION: GALLERY --- */}
            <div className="w-full bg-white p-12">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-blue-950">Our Solutions in Action</h1>
                    <p className="text-gray-700 max-w-2xl mx-auto mt-4">
                        We provide tangible results. Here’s a glimpse of the products we supply and the services we offer.
                    </p>
                </div>
                
                {/* Image Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-7xl mx-auto">
                    {/* Image 1: Computers */}
                    <div className="space-y-4">
                        <img className="h-auto max-w-full rounded-lg shadow-md object-cover" src="https://placehold.co/400x400/00008B/FFFFFF?text=Computers" alt="Laptops and Desktops" />
                        <p className="text-center font-semibold text-blue-950">Computer Sales</p>
                    </div>
                    {/* Image 2: EFD Machines */}
                    <div className="space-y-4">
                        <img className="h-auto max-w-full rounded-lg shadow-md object-cover" src="https://placehold.co/400x400/00008B/FFFFFF?text=EFD+Machine" alt="EFD Machine" />
                        <p className="text-center font-semibold text-blue-950">EFD/VEFD Machines</p>
                    </div>
                    {/* Image 3: CCTV */}
                    <div className="space-y-4">
                        <img className="h-auto max-w-full rounded-lg shadow-md object-cover" src="https://placehold.co/400x400/00008B/FFFFFF?text=CCTV+Cameras" alt="CCTV Cameras" />
                        <p className="text-center font-semibold text-blue-950">CCTV Installation</p>
                    </div>
                    {/* Image 4: Website Design */}
                    <div className="space-y-4">
                        <img className="h-auto max-w-full rounded-lg shadow-md object-cover" src="https://placehold.co/400x400/00008B/FFFFFF?text=Website+Design" alt="Website Design" />
                        <p className="text-center font-semibold text-blue-950">Website Design</p>
                    </div>
                </div>
            </div>
            {/* --- END OF NEW SECTION --- */}


            {/* --- SECTION 4: OUR TEAM --- */}
            <div className="w-full bg-blue-950 p-12 md:items-center">
                <h1 className="text-center text-white text-3xl font-bold">
                    OUR TEAM
                </h1>
                <p className="text-white p-6 max-w-3xl mx-auto text-center">
                    Meet the dedicated professionals who make Eunica Technologies a leader in ICT. Our team of experts is passionate about technology and committed to your success.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-6">
                    
                    {/* Team Member 1 */}
                    <div className="flex flex-col items-center">
                        <img src="/ardy-arjun-FApOxeT2NEQ-unsplash.jpg" alt="Neema Jackson" className="rounded-full h-48 w-48 object-cover border-4 border-orange-400" />
                        <h1 className="text-center text-white mt-4 text-xl font-semibold">Neema Jackson</h1>
                        <div className="flex justify-center gap-4 pt-2">
                            {/* Replaced BsInstagram with inline SVG */}
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400 hover:text-orange-300">
                                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            {/* Replaced BsFacebook with inline SVG */}
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="text-orange-400 hover:text-orange-300">
                                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    {/* Team Member 2 */}
                    <div className="flex flex-col items-center">
                        <img src="/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg" alt="Jackson Juma" className="rounded-full h-48 w-48 object-cover border-4 border-orange-400" />
                        <h1 className="text-center text-white mt-4 text-xl font-semibold">Jackson Juma</h1>
                        <div className="flex justify-center gap-4 pt-2">
                            {/* Replaced BsInstagram with inline SVG */}
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400 hover:text-orange-300">
                                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            {/* Replaced BsFacebook with inline SVG */}
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="text-orange-400 hover:text-orange-300">
                                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    {/* Team Member 3 */}
                    <div className="flex flex-col items-center">
                        <img src="/adetola-afolabi-x0A7wgQmmdk-unsplash.jpg" alt="Mwajuma Ally" className="rounded-full h-48 w-48 object-cover border-4 border-orange-400" />
                        <h1 className="text-center text-white mt-4 text-xl font-semibold">Mwajuma Ally</h1>
                        <div className="flex justify-center gap-4 pt-2">
                            {/* Replaced BsInstagram with inline SVG */}
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400 hover:text-orange-300">
                                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            {/* Replaced BsFacebook with inline SVG */}
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="text-orange-400 hover:text-orange-300">
                                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    {/* Team Member 4 */}
                    <div className="flex flex-col items-center">
                        <img src="/zahir-namane-hwc7eIQiTCE-unsplash.jpg" alt="Said Said" className="rounded-full h-48 w-48 object-cover border-4 border-orange-400" />
                        <h1 className="text-center text-white mt-4 text-xl font-semibold">Said Said</h1>
                        <div className="flex justify-center gap-4 pt-2">
                            {/* Replaced BsInstagram with inline SVG */}
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400 hover:text-orange-300">
                                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
VScodeError: Error: 
                                </svg>
                            </a>
                            {/* Replaced BsFacebook with inline SVG */}
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="text-orange-400 hover:text-orange-300">
                                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

// import { NavLink } from "react-router-dom";
// import { BsInstagram, BsFacebook } from "react-icons/bs";

// export default function About() {
//     return (
//         <>
//             {/*
//               --- SECTION 1: HERO ---
//               - Changed md:h-[1000px] to min-h-[600px] to be responsive.
//               - Changed mobile bg-blue-600 to bg-blue-950 to match your main color.
//               - Made buttons visible on all screen sizes.
//             */}
//             <div className="w-full min-h-[600px] bg-blue-950 md:bg-[url(/pakata-goh-Ovb-MejXjOg-unsplash.jpg)] bg-cover md:grid grid-cols-2 gap-10 p-10 md:items-center">
//                 <div className="md:text-center">
//                     <h1 className="text-4xl font-bold text-white">
//                         ABOUT US
//                     </h1>
//                     <p className="text-white mt-4 text-lg">
//                         Welcome to Eunica Technologies, Tanzania's trusted leader in Information and Communication Technology. Since our beginning, we have been on a mission to empower businesses by providing reliable, efficient, and affordable technology solutions.
//                         <br /><br />
//                         We are more than just an ICT company; we are your strategic partner. Our team is composed of dedicated professionals who are passionate about technology and committed to customer success.
//                     </p>
                    
//                     {/* Buttons: Now visible on desktop (md) as well */}
//                     <div className="grid grid-cols-2 gap-3 md:flex md:justify-center md:gap-5 mt-10">
//                         <NavLink to="/Services" className="bg-white text-blue-700 h-12 w-full flex items-center justify-center rounded-full font-semibold hover:bg-gray-200">
//                             View Our Services
//                         </NavLink>
//                         <NavLink to="/Contact" className="bg-orange-400 text-white h-12 w-full flex items-center justify-center rounded-full font-semibold hover:bg-orange-500">
//                             Get a Free Quote
//                         </NavLink>
//                     </div>
//                 </div>
                
//                 {/* This image is hidden on desktop, which is fine since desktop has a BG image */}
//                 <div className="md:hidden">
//                     <img src="/michal-jakubowski-oQD9uq4Rd4I-unsplash.jpg" alt="About us visual" className="rounded-md mt-10" />
//                 </div>
//             </div>

//             {/*
//               --- SECTION 2: SERVICES & PRODUCTS ---
//               - Replaced "Lorem ipsum" with real content.
//               - Removed fixed h-[200px] and used padding (p-12) for responsiveness.
//               - Made the "READ MORE" buttons into NavLinks.
//             */}
//             <div className="grid md:grid-cols-2 gap-5 bg-blue-950 p-5">
//                 <div className="bg-[url(/cytonn-photography-n95VMLxqM2I-unsplash.jpg)] bg-no-repeat bg-cover text-center rounded-lg p-12">
//                     <h1 className="text-3xl font-bold text-white">OUR SERVICES</h1>
//                     <p className="text-green-400 mt-4">
//                         From EFD machine setup and CCTV installation to custom website design and on-call ICT support, we provide the expert solutions your business needs.
//                     </p>
//                     <NavLink to="/Services">
//                         <button className="mt-6 rounded-full bg-orange-400 p-3 px-6 hover:bg-orange-500 text-white font-semibold">
//                             See All Services
//                         </button>
//                     </NavLink>
//                 </div>
//                 <div className="bg-[url(/jakub-zerdzicki-kVuzH0KFs1w-unsplash.jpg)] bg-cover text-center rounded-lg p-12">
//                     <h1 className="text-3xl font-bold text-white">OUR PRODUCTS</h1>
//                     <p className="text-green-400 mt-4">
//                         We stock quality hardware, including laptops, computers, accessories, and TRA-approved EFD machines, plus custom printing for all your branding.
//                     </p>
//                     <NavLink to="/Products">
//                         <button className="mt-6 rounded-full bg-orange-400 p-3 px-6 hover:bg-orange-500 text-white font-semibold">
//                             View All Products
//                         </button>
//                     </NavLink>
//                 </div>
//             </div>

//             {/*
//               --- SECTION 3: MISSION & VISION ---
//               - Replaced "Lorem ipsum" with real content.
//               - Changed bg-blue-950 to bg-white for contrast.
//               - Changed text-white to text-blue-950.
//               - Removed fixed h-[300px] and used padding.
//             */}
//             <div className="w-full bg-white md:grid grid-cols-2 gap-10 p-12 md:items-center">
//                 <div className="text-blue-950 text-center">
//                     <h1 className="text-3xl font-bold">Our Mission</h1>
//                     <p className="mt-4">
//                         To provide seamless, end-to-end ICT services and support that allow our clients to focus on what they do best: running their business.
//                     </p>
//                 </div>
//                 <div className="text-blue-950 text-center pt-10 md:pt-0">
//                     <h1 className="text-3xl font-bold">Our Vision</h1>
//                     <p className="mt-4">
//                         To be the most reliable and innovative ICT solutions provider, powering the growth of businesses across Tanzania.
//                     </p>
//                 </div>
//             </div>

//             {/*
//               --- SECTION 4: OUR TEAM ---
//               - Replaced "Lorem ipsum" with real content.
//               - Removed fixed h-[700px] and used padding (p-12).
//               - Improved grid for responsiveness (1 col, then 2, then 4).
//               - Fixed image sizing: h-48 w-48 and rounded-full for perfect circles.
//               - Centered team member content.
//             */}
//             <div className="w-full bg-blue-950 p-12 md:items-center">
//                 <h1 className="text-center text-white text-3xl font-bold">
//                     OUR TEAM
//                 </h1>
//                 <p className="text-white p-6 max-w-3xl mx-auto text-center">
//                     Meet the dedicated professionals who make Eunica Technologies a leader in ICT. Our team of experts is passionate about technology and committed to your success.
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-6">
                    
//                     {/* Team Member 1 */}
//                     <div className="flex flex-col items-center">
//                         <img src="/ardy-arjun-FApOxeT2NEQ-unsplash.jpg" alt="Neema Jackson" className="rounded-full h-48 w-48 object-cover border-4 border-orange-400" />
//                         <h1 className="text-center text-white mt-4 text-xl font-semibold">Neema Jackson</h1>
//                         <div className="flex justify-center gap-4 pt-2">
//                             <a href="#"><BsInstagram size={30} className="text-orange-400 hover:text-orange-300" /></a>
//                             <a href="#"><BsFacebook size={30} className="text-orange-400 hover:text-orange-300" /></a>
//                         </div>
//                     </div>
                    
//                     {/* Team Member 2 */}
//                     <div className="flex flex-col items-center">
//                         <img src="/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg" alt="Jackson Juma" className="rounded-full h-48 w-48 object-cover border-4 border-orange-400" />
//                         <h1 className="text-center text-white mt-4 text-xl font-semibold">Jackson Juma</h1>
//                         <div className="flex justify-center gap-4 pt-2">
//                             <a href="#"><BsInstagram size={30} className="text-orange-400 hover:text-orange-300" /></a>
//                             <a href="#"><BsFacebook size={30} className="text-orange-400 hover:text-orange-300" /></a>
//                         </div>
//                     </div>
                    
//                     {/* Team Member 3 */}
//                     <div className="flex flex-col items-center">
//                         <img src="/adetola-afolabi-x0A7wgQmmdk-unsplash.jpg" alt="Mwajuma Ally" className="rounded-full h-48 w-48 object-cover border-4 border-orange-400" />
//                         <h1 className="text-center text-white mt-4 text-xl font-semibold">Mwajuma Ally</h1>
//                         <div className="flex justify-center gap-4 pt-2">
//                             <a href="#"><BsInstagram size={30} className="text-orange-400 hover:text-orange-300" /></a>
//                             <a href="#"><BsFacebook size={30} className="text-orange-400 hover:text-orange-300" /></a>
//                         </div>
//                     </div>
                    
//                     {/* Team Member 4 */}
//                     <div className="flex flex-col items-center">
//                         <img src="/zahir-namane-hwc7eIQiTCE-unsplash.jpg" alt="Said Said" className="rounded-full h-48 w-48 object-cover border-4 border-orange-400" />
//                         <h1 className="text-center text-white mt-4 text-xl font-semibold">Said Said</h1>
//                         <div className="flex justify-center gap-4 pt-2">
//                             <a href="#"><BsInstagram size={30} className="text-orange-400 hover:text-orange-300" /></a>
//                             <a href="#"><BsFacebook size={30} className="text-orange-400 hover:text-orange-300" /></a>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     );
// }




// // import { NavLink } from "react-router-dom";
// // import { BsInstagram } from "react-icons/bs";
// // import { BsFacebook } from "react-icons/bs";

// // export default function About() {
// //     return (
// //         <>
// //             <div className="w-full md:h-[1000px] bg-blue-600 md:bg-[url(/pakata-goh-Ovb-MejXjOg-unsplash.jpg)] bg-cover md:grid grid-cols-2 gap-5 p-10 md:items-center">               
// //                 <div className="md:text-center md:mt-[2px]">
// //                     <h1 className="text-white">
// //                         ABOUT US
// //                     </h1>
// //                     <p className="text-white">
// //                         Welcome to Eunica Technologies, Tanzania's trusted leader in Information and Communication Technology. Since our beginning, we have been on a mission to empower businesses by providing reliable, efficient, and affordable technology solutions.

// //                         We are more than just an ICT company; we are your strategic partner. Our team is composed of dedicated professionals who are passionate about technology and committed to customer success. We understand the unique challenges faced by businesses today, and we leverage our expertise to deliver tailored solutions that drive growth.

// //                         From our hubs in Kariakoo, Mwananyamala, and Komakoma, we serve a diverse clientele, offering everything from essential computer hardware and TRA-compliant EFD machines to sophisticated website development and robust CCTV security systems.
// //                     </p>
// //                     <div className="flex grid grid-cols-2 gap-3 md:hidden">
// //                         <button className="bg-white text-blue-700 h-10 w-40 mt-10 mx-2 rounded-full"><NavLink to="/Services" className="hover:text-950 hover:underline">View Our Services</NavLink></button>
// //                         <button className="bg-white text-blue-700 h-10 w-40 mt-10 mx-2 rounded-full"><NavLink to="/Contact" className="hover:text-950 hover:underline">Get a Free Quote</NavLink></button>
// //                     </div>
// //                 </div>
// //                 <div className="md:hidden">
// //                     <img src="/michal-jakubowski-oQD9uq4Rd4I-unsplash.jpg" alt="" className=" rounded-md mt-5" />
// //                 </div>  
// //             </div>

// //             <div className="grid md:grid-cols-2 gap-5 bg-blue-950">
// //                 <div className="bg-[url(/cytonn-photography-n95VMLxqM2I-unsplash.jpg)] h-[200px] bg-no-repeat bg-cover text-center">
// //                     <h1 className="text-white">OUR SERVICES</h1>
// //                     <p className="text-green-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit blanditiis ducimus distinctio eos cupiditate ab quam eligendi consequuntur, rem pariatur at quas, non, minima illum dolorum nisi temporibus officiis perferendis.</p>
// //                     <button className="mt-4 rounded-full bg-orange-400 p-3 hover:bg-blue-700 text-white">READ MORE</button>
                    
// //                 </div>
// //                 <div className="bg-[url(/jakub-zerdzicki-kVuzH0KFs1w-unsplash.jpg)] h-[200px] bg-cover text-center ">
// //                     <h1 className="text-white">OUR PRODUCTS</h1>
// //                     <p className="text-green-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel labore impedit vero voluptates deserunt quod! Quaerat quod necessitatibus, cum adipisci atione suscipit repellendus facilis alias tempore ducimus, pariatur exercitationem ullam.</p>
// //                     <button className="mt-2 rounded-full bg-orange-400 p-3 hover:bg-blue-700 text-white">READ MORE</button>
// //                 </div>
                
// //             </div>

// //             <div className="w-full md:h-[300px] bg-blue-950  bg-cover md:grid grid-cols-2 gap-5 p-10 md:items-center">
// //                 <div className="text-white text-center">
// //                     <h1>Our Mission</h1>
// //                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit provident vero ratione assumenda quaerat laborum impedit necessitatibus quo dolor voluptatibus.</p>
// //                 </div>

// //                 <div className="text-white text-center pt-5">
// //                     <h1>Our Vision</h1>
// //                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit provident vero ratione assumenda quaerat laborum impedit necessitatibus quo dolor voluptatibus.</p>
// //                 </div>
// //             </div>



// //             <div className="w-full md:h-[700px] bg-blue-950  p-3 md:items-center">
// //                 <h1 className="text-center text-white">
// //                     OUR TEAM
// //                 </h1>
// //                 <p className="text-white p-6">
// //                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatum facilis architecto voluptate, eos eaque neque, aliquid fuga blanditiis reprehenderit soluta accusantium exercitationem voluptatibus. Dolore ducimus rem minus alias aliquid deleniti libero delectus ipsum placeat ipsam eos, explicabo dolorem earum quaerat cupiditate illo temporibus quasi asperiores vero ratione rerum quis?
// //                     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
// //                 </p>
// //                 <div className="md:grid grid-cols-4 gap-3 p-6">
// //                     <div>
                        
// //                         <img src="/ardy-arjun-FApOxeT2NEQ-unsplash.jpg" alt="image1" className="rounded-[100%] h-[300px] w-[320px] p-10" />
// //                         <h1 className="text-center text-white">Neema Jackson</h1>
// //                         <div className="flex justify-center gap-3 pt-2">
// //                             <a href="#"><BsInstagram size={30} className="text-orange-500" /></a>
// //                             <a href="#"><BsFacebook size={30} className="text-orange-500" /></a>
// //                         </div>
// //                     </div>
// //                     <div>
                       
// //                         <img src="/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg" alt="image1" className="rounded-[100%] h-[300px] w-[320px] p-10" />
// //                         <h1 className="text-center text-white">Jackson Juma</h1>
// //                         <div className="flex justify-center gap-3 pt-2">
// //                             <a href="#"><BsInstagram size={30} className="text-orange-500" /></a>
// //                             <a href="#"><BsFacebook size={30} className="text-orange-500" /></a>
// //                         </div>
// //                     </div>
// //                     <div>
                       
// //                         <img src="/adetola-afolabi-x0A7wgQmmdk-unsplash.jpg" alt="image1" className="rounded-[100%] h-[300px] w-[320px] p-10" />
// //                         <h1 className="text-center text-white">Mwajuma Ally</h1>
// //                         <div className="flex justify-center gap-3 pt-2">
// //                             <a href="#"><BsInstagram size={30} className="text-orange-500" /></a>
// //                             <a href="#"><BsFacebook size={30} className="text-orange-500" /></a>
// //                         </div>
// //                     </div>
// //                     <div>
                        
// //                         <img src="/zahir-namane-hwc7eIQiTCE-unsplash.jpg" alt="image1" className="rounded-[100%] h-[300px] w-[320px] p-10" />
// //                         <h1 className="text-center text-white">Said Said</h1>
// //                         <div className="flex justify-center gap-3 pt-2">
// //                             <a href="#"><BsInstagram size={30} className="text-orange-500" /></a>
// //                             <a href="#"><BsFacebook size={30} className="text-orange-500" /></a>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>




            
// //         </>
// //     );
// // }