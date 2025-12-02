import { NavLink } from "react-router-dom";

export default function Donate() {
    return (
        <>
            {/* --- SECTION 1: HERO --- */}
            <div className="w-full min-h-[400px] bg-blue-950 relative flex items-center justify-center p-10">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
                
                <div className="text-center max-w-4xl relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        Fuel The Change
                    </h1>
                    <p className="text-gray-100 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
                        Your contribution directly supports climate adaptation, health promotion, and youth empowerment in Tanzania.
                    </p>
                </div>
            </div>

            {/* --- SECTION 2: INTRODUCTION --- */}
            <div className="w-full bg-white p-10 md:py-20">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-blue-950">Ways To Give</h2>
                    <div className="w-24 h-1 bg-green-500 mx-auto mt-4 mb-6 rounded-full"></div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        We accept donations via Mobile Money and Direct Bank Transfer. Every shilling goes towards our projects, and we are committed to full financial transparency.
                    </p>
                </div>
            </div>

            {/* --- SECTION 3: DONATION METHODS GRID --- */}
            <div className="w-full bg-gray-50 p-10 md:p-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    
                    {/* Method 1: Mobile Money */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 border-green-600">
                        <div className="p-8 md:p-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-600">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-blue-950">Mobile Money</h3>
                            </div>
                            
                            <p className="text-gray-600 mb-8">
                                You can send your donation directly to our official organization numbers via M-Pesa, Tigo Pesa, or Airtel Money.
                            </p>

                            <div className="space-y-6">
                                {/* Number 1 */}
                                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Number 1</p>
                                    <p className="text-2xl font-bold text-blue-950 font-mono mt-1">+255 713 617 751</p>
                                    <p className="text-sm text-green-600 mt-1">Name: THE SUN ORGANIZATION</p>
                                </div>

                                {/* Number 2 */}
                                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Number 2</p>
                                    <p className="text-2xl font-bold text-blue-950 font-mono mt-1">+255 718 928 182</p>
                                    <p className="text-sm text-green-600 mt-1">Name: THE SUN ORGANIZATION</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Method 2: Bank Transfer */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 border-blue-950">
                        <div className="p-8 md:p-12">
                             <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-950">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-blue-950">Bank Transfer</h3>
                            </div>

                            <p className="text-gray-600 mb-8">
                                For larger donations or corporate sponsorship, please use our direct bank transfer details below.
                            </p>

                            <div className="space-y-6">
                                {/* Account 1 */}
                                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-lg font-bold text-blue-950">CRDB Bank</p>
                                            <p className="text-sm text-gray-600">Account Name: THE SUN NGO</p>
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">TZS</span>
                                    </div>
                                    <div className="mt-3 pt-3 border-t border-gray-200">
                                        <p className="text-xs text-gray-500 uppercase">Account Number</p>
                                        <p className="text-2xl font-mono text-gray-800 tracking-wider">0150 XXXXX XXXX</p>
                                    </div>
                                </div>

                                {/* Account 2 */}
                                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-lg font-bold text-blue-950">NMB Bank</p>
                                            <p className="text-sm text-gray-600">Account Name: THE SUN NGO</p>
                                        </div>
                                        <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">USD</span>
                                    </div>
                                    <div className="mt-3 pt-3 border-t border-gray-200">
                                        <p className="text-xs text-gray-500 uppercase">Account Number</p>
                                        <p className="text-2xl font-mono text-gray-800 tracking-wider">2081 XXXXX XXXX</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* --- SECTION 4: CONTACT / CONFIRMATION --- */}
            <div className="w-full bg-blue-950 p-10 md:p-20 text-center">
                 <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Need assistance or want to confirm a donation?
                 </h2>
                 <p className="text-gray-300 max-w-2xl mx-auto mb-10">
                    We are happy to provide receipts for all donations. Please contact our finance team after making a transfer.
                 </p>
                 <NavLink 
                    to="/contact" 
                    className="bg-green-600 text-white h-12 px-10 rounded-full font-bold inline-flex items-center justify-center hover:bg-green-700 transition-colors shadow-lg"
                 >
                    Contact Finance Team
                </NavLink>
            </div>
        </>
    );
}