
export default function Contact() {
  return (
    <>
      {/* --- SECTION 1: HERO --- */}
      <div className="w-full min-h-[400px] bg-blue-950 relative flex items-center justify-center p-10">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        
        <div className="text-center max-w-3xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Get In <span className="text-green-400">Touch</span>
          </h1>
          <p className="text-gray-100 text-lg md:text-xl mt-6">
            Have a question about our programs, or want to partner with us? We are here to listen.
          </p>
        </div>
      </div>

      {/* --- SECTION 2: CONTACT GRID --- */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 p-10 md:p-24">

          {/* Column 1: Contact Information */}
          <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold text-blue-950">Contact Information</h2>
                <div className="w-16 h-1 bg-green-500 mt-2 mb-4 rounded-full"></div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Reach out to us directly via email or phone. Our team in Dar es Salaam is ready to connect with you.
            </p>
            
            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-950">Phone</h3>
                <div className="flex flex-col mt-1">
                    <a href="tel:+255713617751" className="text-gray-600 hover:text-green-600 transition-colors">
                    +255 713 617 751
                    </a>
                    <a href="tel:+255718928182" className="text-gray-600 hover:text-green-600 transition-colors">
                    +255 718 928 182
                    </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
               <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-950">Email</h3>
                <a href="mailto:thesunorganisation24@gmail.com" className="text-gray-600 hover:text-green-600 transition-colors break-all block mt-1">
                    thesunorganisation24@gmail.com
                </a>
              </div>
            </div>

            {/* Locations */}
            <div className="flex items-start space-x-4">
               <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-950">Mailing Address</h3>
                <p className="text-gray-600 mt-1">
                  P.O. Box 56789,<br/>
                  Dar Es Salaam, Tanzania
                </p>
              </div>
            </div>
            
            {/* Socials */}
            <div className="pt-6 border-t border-gray-100">
                <h3 className="text-lg font-bold text-blue-950 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-950 hover:bg-green-600 hover:text-white transition-all">
                        <span className="font-bold text-sm">fb</span>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-950 hover:bg-green-600 hover:text-white transition-all">
                        <span className="font-bold text-sm">ig</span>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-950 hover:bg-green-600 hover:text-white transition-all">
                        <span className="font-bold text-sm">x</span>
                    </a>
                </div>
            </div>
          </div>

          {/* Column 2: Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-bl-full -z-10 opacity-50"></div>
            
            <h3 className="text-2xl font-bold text-blue-950 mb-6">Send a Message</h3>
            
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  placeholder="you@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
                <select
                    id="subject"
                    name="subject"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                >
                    <option>General Inquiry</option>
                    <option>Partnership Proposal</option>
                    <option>Volunteering</option>
                    <option>Donation Support</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  // rows="4"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white font-bold py-3.5 px-6 rounded-lg transition-colors duration-300 hover:bg-green-700 shadow-lg mt-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}