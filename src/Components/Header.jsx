const Header = () => {
  return (
    <section className="sticky top-0 z-50"> {/* sticky wrapper */}
      <div>
        {/* Top Contact Info */}
        <nav className="border-b-2 border-gray-300 shadow-lg bg-white">
          <div className="max-w-full flex justify-center items-center py-2 font-light text-gray-700">
            <div className="flex gap-10 px-10 lg:gap-15 pr-10 pr:56">
              <div>
                <img 
                  className="h-18"
                  src="./Images/i7-Logo.png" 
                  alt="Logo" 
                />
              </div>

              {/* Contact Info */}
              <div className="flex text-left gap-10 leading-0.5">
                {/* Phone */}
                <div className="flex py-4 gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    className="text-main h-8 w-8" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19.5 22a1.5..."/>
                  </svg>
                  <div>
                    <h2 className="font-bold text-xs mt-0">Call us for more Inquiries</h2>
                    <span className="text-xs mt-0">+63918-909-0331</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex py-4 gap-2 leading-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                    width="35" height="35" className="text-main" viewBox="0 0 24 24">
                    <path d="M12.56 20.82a..."/>
                  </svg>
                  <div>
                    <h2 className="font-bold text-xs">Location</h2>
                    <span className="text-xs">IBM Plaza Eastwood, Quezon City</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex py-4 gap-2 leading-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" className="text-main" viewBox="0 0 32 32">
                    <path fill="currentColor" d="M28 6H4a2..."/>
                  </svg>
                  <div>
                    <h2 className="font-bold text-xs">Email Us</h2>
                    <span className="text-xs">hello@intelliseven.com.ph</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Nav */}
        <nav>
          <div className="absolute top-18 right-1">
            <div className="flex px-56 py-6 bg-main text-xs gap-20 text-white font-regular w-6xl clip-left-slant">
              <a href="">Home</a>
              <a href="">Services</a>
              <a href="">About Us</a>
              <a href="">Meet Our Team</a>
              <a href="">Documentation</a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Header
