import { NavLink } from "react-router-dom";
// I've removed the heroicons import that was causing errors.

export default function Home() {
    return (
        <>
            {/* --- SECTION 1: HERO --- */}
            <div className="w-full bg-blue-950 md:bg-[url(/mohammad-rahmani-LrxSl4ZxoRs-unsplash.jpg)] bg-cover bg-center md:items-center">
                <div className="grid md:grid-cols-2 gap-10 p-10 py-32 md:min-h-[600px] md:items-center max-w-7xl mx-auto">
                    <div className="text-center md:text-left">
                        <h1 className="text-white text-4xl md:text-6xl font-bold">
                            Your All-in-One ICT Partner in Tanzania
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl mt-6">
                            From EFD machines and computer sales to custom website design and CCTV installation, Eunica Technologies (T) LTD provides the expert solutions your business needs to succeed.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">
                            <NavLink 
                                to="/Services" 
                                className="bg-yellow-400 text-blue-950 h-12 px-8 rounded-full font-semibold flex items-center justify-center hover:bg-yellow-300"
                            >
                                View Our Services
                            </NavLink>
                            <NavLink 
                                to="/Contact" 
                                className="bg-white text-blue-950 h-12 px-8 rounded-full font-semibold flex items-center justify-center hover:bg-gray-200"
                            >
                                Get a Free Quote
                            </NavLink>
                        </div>
                    </div>
                    {/* The right column is empty on desktop, which is fine for the bg-image */}
                    <div className="hidden md:block"></div>
                </div>
            </div>

            {/* --- SECTION 2: WHO ARE WE --- */}
            <div className="text-center p-10 md:p-20 bg-white">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
                    WHO ARE WE
                </h2>
                <p className="text-gray-700 max-w-3xl mx-auto mt-6 text-lg">
                    We are Eunica Technologies (T) LTD, a premier ICT solutions and consultancy company based in Tanzania. At our core, we are a dedicated team of technical experts, creative designers, and problem-solvers passionate about helping businesses succeed... We are your all-in-one partner for sales, installation, and ongoing support.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
                    <img src="/christopher-gower-m_HRfLhgABo-unsplash.jpg" alt="Office meeting" className="rounded-lg shadow-xl w-full h-full object-cover" />
                    <img src="/joshua-reddekopp-SyYmXSDnJ54-unsplash.jpg" alt="Man working on laptop" className="rounded-lg shadow-xl w-full h-full object-cover" />
                </div>
            </div>

            {/* --- SECTION 3: ADVANTAGES ---
              - Replaced Heroicons with inline SVGs to fix rendering errors.
            */}
            <div className="p-10 md:py-20 bg-blue-950">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                    The Eunica Technologies Advantage
                </h2>
                <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto mt-16">
                    {/* Advantage 1: Replaced Icon */}
                    <div className="text-center md:text-left">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 text-yellow-400 mx-auto md:mx-0">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.83-5.83M11.42 15.17l.02.02M11.42 15.17 6.83 21m0-11.17a4.5 4.5 0 0 1 .09-1.92l-2.06-2.06a.825.825 0 0 0-1.166 0l-1.83 1.83a.825.825 0 0 0 0 1.166l2.06 2.06A4.5 4.5 0 0 1 6.83 9.83m0 0-.02-.02m0 0c-.83 0-1.64-.17-2.38-.49l-2.06 2.06a.825.825 0 0 0 0 1.166l1.83 1.83a.825.825 0 0 0 1.166 0l2.06-2.06A4.5 4.5 0 0 1 6.83 9.83Z" />
                        </svg>
                        <h3 className="text-2xl font-semibold text-white mt-4">All-in-One ICT Solutions</h3>
                        <p className="text-gray-300 mt-2">
                            We are your single partner for every technology need, from purchasing computers and EFD machines to designing your website and installing CCTV.
                        </p>
                    </div>
                    {/* Advantage 2: Replaced Icon */}
                    <div className="text-center md:text-left">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 text-yellow-400 mx-auto md:mx-0">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.631-.22-3.203-.632-4.7L12 2.714Z" />
                        </svg>
                        <h3 className="text-2xl font-semibold text-white mt-4">Expert Installation & Support</h3>
                        <p className="text-gray-300 mt-2">
                            Our certified technicians provide professional installation and reliable ongoing maintenance to keep your business running with minimal downtime.
                        </p>
                    </div>
                    {/* Advantage 3: Replaced Icon */}
                    <div className="text-center md:text-left">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 text-yellow-400 mx-auto md:mx-0">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.75M9 12h6.75M9 17.25h6.75M12 21v-3.75" />
                        </svg>
                        <h3 className="text-2xl font-semibold text-white mt-4">Local & Accessible Service</h3>
                        <p className="text-gray-300 mt-2">
                            With offices in Kariakoo, Mwananyamala, and Komakoma, we are part of your community and always nearby when you need hands-on support.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* --- SECTION 4: SERVICES OVERVIEW --- */}
             <div className="w-full bg-gray-100 p-10 md:p-20">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center">
                    Our Core Services
                </h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
                    {/* Service Card 1 */}
                    <div className="text-center bg-white p-8 rounded-lg shadow-xl flex flex-col">
                        <img src="/pakata-goh-Ovb-MejXjOg-unsplash.jpg" alt="Computers" className="rounded-md h-48 w-full object-cover" />
                        <h3 className="text-blue-950 text-2xl font-semibold mt-6">Computer & Accessories Sales</h3>
                        <p className="text-gray-700 mt-4 flex-grow">
                            We supply top-quality laptops, desktops, printers, and all essential ICT accessories from trusted brands.
                        </p>
                        <NavLink to="/Services" className="bg-blue-950 text-white h-10 w-40 mt-8 rounded-full font-semibold self-center flex items-center justify-center hover:bg-blue-800">
                            READ MORE
                        </NavLink>
                    </div>
                    {/* Service Card 2 */}
                    <div className="text-center bg-white p-8 rounded-lg shadow-xl flex flex-col">
                        <img src="/intrapixel-7XaBaKwrV1E-unsplash.jpg" alt="EFD Machine" className="rounded-md h-48 w-full object-cover" />
                        <h3 className="text-blue-950 text-2xl font-semibold mt-6">EFD/VEFD Machines</h3>
                        <p className="text-gray-700 mt-4 flex-grow">
                            Stay TRA compliant with our authorized EFD/VEFD machines. We provide complete sales, installation, and support.
                        </p>
                        <NavLink to="/Services" className="bg-blue-950 text-white h-10 w-40 mt-8 rounded-full font-semibold self-center flex items-center justify-center hover:bg-blue-800">
                            READ MORE
                        </NavLink>
                    </div>
                    {/* Service Card 3 */}
                    <div className="text-center bg-white p-8 rounded-lg shadow-xl flex flex-col">
                        <img src="/team-nocoloco-Yt9wUh3ZB3Q-unsplash.jpg" alt="Website Design" className="rounded-md h-48 w-full object-cover" />
                        <h3 className="text-blue-950 text-2xl font-semibold mt-6">Website Design & Development</h3>
                        <p className="text-gray-700 mt-4 flex-grow">
                            Our team builds modern, responsive websites and custom software applications to automate your operations.
                        </p>
                        <NavLink to="/Services" className="bg-blue-950 text-white h-10 w-40 mt-8 rounded-full font-semibold self-center flex items-center justify-center hover:bg-blue-800">
                            READ MORE
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* --- SECTION 5: PRODUCTS OVERVIEW --- */}
            <div className="bg-white text-center p-10 md:p-20">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
                    Featured Products
                </h2>
                <p className="text-gray-700 max-w-3xl mx-auto mt-6 text-lg">
                    We've selected the best products to ensure your business runs efficiently, securely, and professionally.
                </p>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
                    {/* Product Card 1 */}
                    <div className="text-center bg-blue-950 p-8 rounded-lg shadow-xl flex flex-col">
                        <img src="/kitai-mMQHPNQwIDo-unsplash.jpg" alt="Laptops" className="rounded-md h-48 w-full object-cover" />
                        <h3 className="text-white text-2xl font-semibold mt-6">Computers & Laptops</h3>
                        <p className="text-gray-300 mt-4 flex-grow">
                            Brand-new laptops and desktops perfect for any business, from high-performance machines to reliable daily PCs.
                        </p>
                        <NavLink to="/Products" className="bg-yellow-400 text-blue-950 h-10 w-40 mt-8 rounded-full font-semibold self-center flex items-center justify-center hover:bg-yellow-300">
                            View More
                        </NavLink>
                    </div>
                    {/* Product Card 2 */}
                    <div className="text-center bg-blue-950 p-8 rounded-lg shadow-xl flex flex-col">
                        <img src="/homemade-media-6l5z2EPrnFc-unsplash.jpg" alt="Accessories" className="rounded-md h-48 w-full object-cover" />
                        <h3 className="text-white text-2xl font-semibold mt-6">Computer Accessories</h3>
                        <p className="text-gray-300 mt-4 flex-grow">
                            Monitors, keyboards, mice, printers, external hard drives, networking cables, routers, and more.
                        </p>
                        <NavLink to="/Products" className="bg-yellow-400 text-blue-950 h-10 w-40 mt-8 rounded-full font-semibold self-center flex items-center justify-center hover:bg-yellow-300">
                            View More
                        </NavLink>
                    </div>
                    {/* Product Card 3 */}
                    <div className="text-center bg-blue-950 p-8 rounded-lg shadow-xl flex flex-col">
                        <img src="/matthias-heil-znkIL3MQnvY-unsplash.jpg" alt="CCTV" className="rounded-md h-48 w-full object-cover" />
                        <h3 className="text-white text-2xl font-semibold mt-6">CCTV & Surveillance</h3>
                        <p className="text-gray-300 mt-4 flex-grow">
                            High-definition CCTV camera kits, including dome and bullet cameras, DVRs, and all necessary cabling.
                        </p>
                        <NavLink to="/Products" className="bg-yellow-400 text-blue-950 h-10 w-40 mt-8 rounded-full font-semibold self-center flex items-center justify-center hover:bg-yellow-300">
                            View More
                        </NavLink>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <NavLink to="/Products" className="bg-blue-950 text-white h-12 px-8 rounded-full font-semibold flex items-center justify-center w-60 mx-auto hover:bg-blue-800">
                        VIEW ALL PRODUCTS
                    </NavLink>
                </div>
            </div>
            
            {/* --- SECTION 6: TESTIMONIAL --- */}
            <div className="bg-gray-100 p-10 md:p-20">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center">
                    What Our Clients Say
                </h2>
                <div className="mt-16 max-w-3xl mx-auto bg-blue-950 rounded-lg shadow-xl p-10 flex flex-col items-center">
                    <p className="text-white text-xl md:text-2xl italic text-center">
                        "Personally, I have enjoyed all the services this company provides. All the gadgets we buy here are at affordable prices, and they have got the best services ever."
                    </p>
                    <img src="/ardy-arjun-FApOxeT2NEQ-unsplash.jpg" alt="Neema J Kituga" className="h-20 w-20 rounded-full mt-8 object-cover border-4 border-yellow-400"/>
                    <h3 className="text-xl font-semibold text-yellow-400 mt-4">
                        Neema J Kituga
                    </h3>
                    <p className="text-gray-300">Student</p>
                </div>
            </div>
        </>
    );
}


// import { NavLink } from "react-router-dom";

// export default function Home() {
//     return(
//         <>


            
//             <div className="w-full md:h-[1000px] bg-orange-600 md:bg-[url(/mohammad-rahmani-LrxSl4ZxoRs-unsplash.jpg)] bg-cover grid md:grid-cols-2 gap-5 p-10 md:items-center">

//             {/* This inner div now just holds your content. 
//                 'text-center' centers the h1 and p.
//             */}
//                 <div className="text-center mt-10">
//                     <h1 className="text-blue-600 text-[40px]">Your All-in-One ICT Partner in Tanzania</h1>
//                     <p className="text-white text-[20px] max-w-2xl"> {/* Added max-w-2xl so the paragraph doesn't get too wide on big screens */}
//                     From EFD machines and computer sales to custom website design and CCTV installation, Eunica Technologies (T) LTD provides the expert solutions your business needs to succeed..
//                     </p>
//                     <div className="md:grid grid-cols-2 gap-3">
//                         <button className="bg-white text-blue-700 h-10 w-40 mt-10 mx-2 rounded-full"><NavLink to="/Services" className="hover:text-950 hover:underline">View Our Services</NavLink></button>
//                         <button className="bg-white text-blue-700 h-10 w-40 mt-10 mx-2 rounded-full"><NavLink to="/Contact" className="hover:text-950 hover:underline">Get a Free Quote</NavLink></button>
//                     </div>
//                 </div>
                
  
//             </div>
//                 {/* A DIV FOR A SIMPLE ABOUT US */}
//             <div className="text-center p-8">
//                 <h1>
//                     WHO ARE WE
//                 </h1>
//                 <p>
//                     We are Eunica Technologies (T) LTD, a premier ICT solutions and consultancy company based in Tanzania. At our core, we are a dedicated team of technical experts, creative designers, and problem-solvers passionate about helping businesses succeed. We bridge the gap between your business goals and the technology required to achieve them. Whether you need reliable computer hardware, TRA-compliant EFD/VEFD machines, a professional new website, or robust CCTV security, we are your all-in-one partner for sales, installation, and ongoing support.
//                 </p>

//                 <div className="grid grid-cols-1 gap-4 md:grid grid-cols-2 gap-4 p-10">
//                     <img src="/christopher-gower-m_HRfLhgABo-unsplash.jpg" alt="image1" className="" />
//                     <img src="/joshua-reddekopp-SyYmXSDnJ54-unsplash.jpg" alt="image2" className="" />
//                 </div>
//             </div>

//             {/* A DIV FOR THE THE VALUES */}
//             <div className="grid-grid-cols-1 md:flex justify-around items-center p-8 w-full  h-[400px] bg-[url(/kevin-ku-w7ZyuGYNpRQ-unsplash.jpg)] ">
                

//                 <div className="items-center text-white">
//                     <div className="flex justify-center items-center text-white">

//                     <h1>The Eunica Technologies Advantage</h1>

//                 </div> 
                
//                 <h2 className="text-orange-500">1.All-in-One ICT Solutions Explanation</h2>
//                 <p className="text-white">We are your single partner for every technology need. From purchasing your computers and EFD machines to designing your website, installing your CCTV, and even printing your business cards, we handle it all. This saves you time and ensures all your systems work perfectly together.</p>
//                 <h2 className="text-orange-500">2.Expert Installation & Reliable Support Explanation</h2>
//                 <p className="text-white">We don't just sell products; we build solutions. Our certified technicians provide professional installation and ongoing maintenance. When you have a problem, our local ICT support team is ready to get you back online, minimizing downtime and keeping your business running</p>
//                 <h2 className="text-orange-500">3.Local & Accessible Service Explanation</h2>
//                 <p className="text-white">With offices in Kariakoo, Mwananyamala, and Komakoma, we are part of your community. We understand the local business environment and are always nearby when you need hands-on support. We are not a faceless company; we are your local technology partner.</p>
                
//                 </div>



//             </div>
//             <div className=" flex justify-around items-center p-8 w-full  h-[400px] bg-green-500 ">
                

//                 <div className="items-center text-white">
                
//                 <h2 className="text-white text-center">OUR SERVEICES</h2>
//                 <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptate. Reiciendis iure expedita beatae vitae vel quod repudiandae eaque nam, quisquam impedit a eum laudantium eligendi recusandae unde minima cum non libero quasi? Totam beatae magnam saepe porro, dolor deserunt.</p>
                
//                 </div>



//             </div>
                
//                 <div className="w-full bg-[url(/pakata-goh-Ovb-MejXjOg-unsplash.jpg)] bg-covers md:grid grid-cols-3 gap-10 p-5">

                
//                     <div className="text-center  bg-blue-500 p-5 rounded-md mt-5">
//                         <img src="/pakata-goh-Ovb-MejXjOg-unsplash.jpg" alt="" className="rounded-md" />
//                         <h2 className="text-white text-[30px]">Computer & Accessories Sales</h2>
//                         <p className="text-white">We supply top-quality laptops, desktop computers, printers, monitors, and all essential ICT accessories from trusted brands, ensuring you get the best hardware for your needs.</p>
//                         <NavLink to="/Services"><button className="bg-white text-blue-700 h-10 w-40 mt-10 rounded-full">READ MORE</button></NavLink>
//                     </div>
//                     <div className="text-center  bg-blue-500 p-5 rounded-md mt-5">
//                         <img src="/intrapixel-7XaBaKwrV1E-unsplash.jpg" alt="" className="rounded-md h-[300px]" />
//                         <h2 className="text-white text-[30px]">EFD/VEFD Machines (Sales, Installation)</h2>
//                         <p className="text-white">Stay TRA compliant with our authorized EFD/VEFD machines. We provide complete sales, expert installation, configuration, and reliable ongoing support to keep your business running smoothly.</p>
//                         <NavLink to="/Services"><button className="bg-white text-blue-700 h-10 w-40 mt-10 rounded-full">READ MORE</button></NavLink>
//                     </div>
//                     <div className="text-center  bg-blue-500 p-5 rounded-md mt-5">
//                         <img src="/team-nocoloco-Yt9wUh3ZB3Q-unsplash.jpg" alt="" className="rounded-md h-[300px]" />
//                         <h2 className="text-white text-[30px]">Website Design & Software Development</h2>
//                         <p className="text-white">ake your business online. Our team builds modern, responsive websites and develops custom software applications tailored to automate your operations and help you grow.</p>
//                         <button className="bg-white text-blue-700 h-10 w-40 mt-10 rounded-full"><NavLink to="/Services" className="hover:text-white hover:underline">Read More</NavLink></button>
                        
//                     </div>
                    
//                 </div>

//                 <div className="bg-slate-500 text-center p-7 w-full h-50">
//                     <h1 className="">OUR PRODUCTS</h1>
//                     <p className="mb-7"> At Eunica Technologies, we stock a wide range of reliable hardware from the world's leading manufacturers and provide high-quality custom printing. We've selected the best products to ensure your business runs efficiently, securely, and professionally.</p>

//                     <div className="w-full bg-[url(/joshua-reddekopp-SyYmXSDnJ54-unsplash.jpg)] bg-covers md:grid grid-cols-3 gap-10 p-10">

                
//                         <div className="text-center  bg-blue-500 p-5 rounded-md mt-5">
//                             <img src="/kitai-mMQHPNQwIDo-unsplash.jpg" alt="" className="rounded-md h-[200px] w-full" />
//                             <h2 className="text-white text-[30px]">Computers & Laptops</h2>
//                             <p className="text-white">We offer a selection of brand-new laptops and desktop computers perfect for any business or home office. From high-performance machines for development to reliable PCs for daily tasks, we'll help you find the right fit.</p>
//                             <button className="bg-white text-blue-700 h-10 w-40 mt-10 rounded-full"><NavLink to="/services/service-1" className="hover:text-green hover:underline">View More</NavLink></button>
//                         </div>
//                         <div className="text-center  bg-blue-500 p-5 rounded-md mt-5">
//                             <img src="/homemade-media-6l5z2EPrnFc-unsplash.jpg" alt="" className="rounded-md" />
//                             <h2 className="text-white text-[30px]">Computer Accessories</h2>
//                             <p className="text-white">Get everything you need in one place, including monitors, keyboards, mice, printers, external hard drives, networking cables, routers, and more.</p>
//                             <button className="bg-white text-blue-700 h-10 w-40 mt-10 rounded-full"><NavLink to="/services/service-1" className="hover:text-green hover:underline">View More</NavLink></button>
//                         </div>
//                         <div className="text-center  bg-blue-500 p-5 rounded-md mt-5">
//                             <img src="/matthias-heil-znkIL3MQnvY-unsplash.jpg" alt="" className="rounded-md h-[200px]" />
//                             <h2 className="text-white text-[30px]">CCTV & Surveillance Systems</h2>
//                             <p className="text-white">Secure your property with our high-definition CCTV camera kits. We provide dome, bullet, and turret cameras, as well as Digital Video Recorders (DVRs) and all necessary cabling for a complete installation.</p>
//                             <button className="bg-white text-blue-700 h-10 w-40 mt-10 rounded-full"><NavLink to="/services/service-1" className="hover:text-green hover:underline">View More</NavLink></button>
                            
//                         </div>
                        
                        
                        

                        
                    
//                     </div>

//                     <div className="text-center">
//                         <button className="bg-white text-blue-700 h-10 w-40 mt-10 rounded-full"><NavLink to="/pRODUCTS" className="hover:text-blue hover:underline">VIEW ALL</NavLink></button>


//                     </div>

//                     <div className="mt-10"> 
//                         <h1 className="">
//                             WHAT OUR CLIENTS SAY
//                         </h1>
                        
//                         <div className="sm:grid grid-cols-1 bg-blue-500 rounded-b-full p-10">
                            
//                             <p className="text-white">
//                                 "PERSONALLY AS A STUDENT I HAVE ENJOYED ALL THE SERVICES THAT THIS COMPANY PROVIDES FOR ME AND MY SURROUNDING ALL THE GADGETS WE BUY THEM HERE AT AFFORDABLE PRICES AND THEY HAVE GOT THE BEST SERVICES EVER"
//                             </p>
//                             <img src="/ardy-arjun-FApOxeT2NEQ-unsplash.jpg" alt="" className="h-[50px] w-[50px] rounded-[100px] mt-5 place-self-center "/>
//                             <h2>Neema J Kituga</h2>
//                         </div>
//                     </div>


//                 </div>
            
            
//         </>
//     );
// }