import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const navItems = [
    "Home",
    "Services",
    "About Us",
    "Meet Our Team",
    "Documentation",
  ];

  return (
    <section className="sticky top-0 z-50">
      <div>
        <nav className="border-b-2 border-gray-300 shadow-lg bg-white">
          <div className="max-w-full flex justify-between items-center px-4 md:px-6 lg:justify-center py-5 font-light text-gray-700">
            <div className="flex-shrink-0">
              <img
                className="w-52 sm:w-50 md:w-62 lg:w-64 xl:w-80 h-auto object-contain"
                src="./Images/i7-Logo.png"
                alt="Logo"
              />
            </div>

            <div className="hidden lg:flex text-left gap-6 xl:gap-10 ml-8 xl:ml-24">
              <div className="flex py-4 gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  className="text-main flex-shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.5 22a1.5 1.5 0 0 0 1.5-1.5V17a1.5 1.5 0 0 0-1.5-1.5c-1.17 0-2.32-.18-3.42-.55a1.51 1.51 0 0 0-1.52.37l-1.44 1.44a14.77 14.77 0 0 1-5.89-5.89l1.43-1.43c.41-.39.56-.97.38-1.53c-.36-1.09-.54-2.24-.54-3.41A1.5 1.5 0 0 0 7 3H3.5A1.5 1.5 0 0 0 2 4.5C2 14.15 9.85 22 19.5 22M3.5 4H7a.5.5 0 0 1 .5.5c0 1.28.2 2.53.59 3.72c.05.14.04.34-.12.5L6 10.68c1.65 3.23 4.07 5.65 7.31 7.32l1.95-1.97c.14-.14.33-.18.51-.13c1.2.4 2.45.6 3.73.6a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5C10.4 21 3 13.6 3 4.5a.5.5 0 0 1 .5-.5"
                  />
                </svg>
                <div>
                  <h2 className="font-bold text-xs mt-0">
                    Call us for more Inquiries
                  </h2>
                  <span className="text-xs mt-0">+63918-909-0331</span>
                </div>
              </div>
              <div className="flex py-4 gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  className="text-main flex-shrink-0"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  >
                    <path d="M12.56 20.82a.96.96 0 0 1-1.12 0C6.611 17.378 1.486 10.298 6.667 5.182A7.6 7.6 0 0 1 12 3c2 0 3.919.785 5.333 2.181c5.181 5.116.056 12.196-4.773 15.64" />
                    <path d="M12 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4" />
                  </g>
                </svg>
                <div>
                  <h2 className="font-bold text-xs">Location</h2>
                  <span className="text-xs">
                    IBM Plaza Eastwood, Quezon City
                  </span>
                </div>
              </div>
              <div className="flex py-4 gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  className="text-main flex-shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z"
                  />
                </svg>
                <div>
                  <h2 className="font-bold text-xs">Email Us</h2>
                  <span className="text-xs">hello@intelliseven.com.ph</span>
                </div>
              </div>
            </div>

            <button
              className="lg:hidden text-main focus:outline-none flex-shrink-0"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        <nav>
          <div className="absolute top-20 xl:top-25 right-0 lg:right-1 z-40">
            
            <div className="hidden lg:flex px-35 xl:px-40 py-6 font-semibold bg-main text-xs gap-15 xl:gap-20 text-white font-regular clip-left-slant">
              <a href="#home" className="hover:opacity-80 transition-opacity">Home</a>
              <a href="#services" className="hover:opacity-80 transition-opacity">Services</a>
              <a href="#about" className="hover:opacity-80 transition-opacity">About Us</a>
              <a href="#team" className="hover:opacity-80 transition-opacity">Meet Our Team</a>
              <a href="#docs" className="hover:opacity-80 transition-opacity">Documentation</a>

            </div>
            
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-0 bg-main to-20% z-40 flex flex-col items-center justify-center space-y-6"
              >
              
          <img
                  src="./Images/logo2.png"
                  alt="Logo 2"
                  className="absolute top-6 left-6 w-[180px] h-auto object-contain"
                />

                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 text-white focus:outline-none"
                  aria-label="Close menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 6l12 12M6 18L18 6"
                    />
                  </svg>
                </button>
              
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    className="text-white text-xl  font-poppins  hover:"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.div>

            )}
          </AnimatePresence>
        </nav>
      </div>
    </section>
  );
};

export default Header;