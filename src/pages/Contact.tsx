

export default function Contact() {
  return (
    <>
      {/* --- SECTION 1: HERO ---
        - Added a consistent hero section matching other pages.
      */}
      <div className="w-full min-h-[400px] bg-blue-950 md:bg-[url(/pakata-goh-Ovb-MejXjOg-unsplash.jpg)] bg-cover bg-center flex items-center justify-center p-10">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Get In <span className="text-yellow-400">Touch</span>
          </h1>
          <p className="text-white text-lg md:text-xl mt-6">
            We are here to help. Reach out with any questions, quote requests, or support needs.
          </p>
        </div>
      </div>

      {/* --- SECTION 2: CONTACT GRID ---
        - Changed background to white for the main content area.
        - Created a 2-col grid for info and form.
      */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 p-10 md:p-20">

          {/* Column 1: Contact Information
            - Updated with *actual* info from the poster.
            - Added inline SVG icons.
          */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-blue-950">Contact Information</h2>
            <p className="text-gray-700 text-lg">
              Fill out the form, or contact us directly. We are always happy to help.
            </p>
            
            {/* Phone */}
            <div className="flex items-start space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-yellow-500 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-blue-950">Phone</h3>
                <a href="tel:0714880379" className="text-gray-700 hover:text-blue-950 transition-colors">
                  0714880379
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-yellow-500 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-blue-950">Email</h3>
                <a href="mailto:info@eunicatech.co.tz" className="text-gray-700 hover:text-blue-950 transition-colors break-all">
                  info@eunicatech.co.tz
                </a>
              </div>
            </div>

            {/* Locations */}
            <div className="flex items-start space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-yellow-500 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-blue-950">Our Locations</h3>
                <p className="text-gray-700">
                  Kariakoo, Mwananyamala, Komakoma
                </p>
              </div>
            </div>
            
            {/* Socials */}
            <div className="flex items-start space-x-4">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-yellow-500 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 5.314l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-blue-950">Follow Us</h3>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-gray-700 hover:text-blue-950 transition-colors">Instagram: @eunica_graphics</a>
                  <a href="#" className="text-gray-700 hover:text-blue-950 transition-colors">TikTok: @eunicatech</a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Form
            - Restyled form for a light background.
            - Matched button to the yellow accent color.
          */}
          <form className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-blue-950 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 text-blue-950 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-950 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 text-blue-950 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="you@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-blue-950 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 text-blue-950 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="e.g., Quote for CCTV"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-blue-950 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                // rows="5"
                className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 text-blue-950 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Your message..."
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-blue-950 font-bold py-3 px-6 rounded-full transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>

        </div>
      </div>

      {/* --- SECTION 3: MAP ---
        - Added a simple placeholder for a map.
      */}
      {/* <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500 font-semibold">[Map Placeholder: e.g., Kariakoo Location]</p>
      </div> */}
    </>
  );
}