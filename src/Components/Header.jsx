import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

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
    <section className="sticky top-0 z-50 ">
      <div>
        <nav className="border-b-2 border-gray-300 shadow-lg bg-white">
          <div className="max-w-full py-4 sm:py-4 lg:py-5 font-light text-gray-700 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between lg:justify-center lg:gap-4 xl:gap-12 relative">
              <div className="flex-shrink-0">
                <img
                  className="w-55 sm:w-40 md:w-48 lg:w-52 xl:w-64 h-auto object-contain"
                  src="./Images/i7-Logo.png"
                  alt="Logo"
                />
              </div>

              <div className="hidden lg:flex flex-wrap justify-center items-center text-left gap-4 xl:gap-8 leading-0.5 max-w-full">
                <div className="flex py-2 md:py-2 lg:py-3 gap-1.5 md:gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    className="text-main flex-shrink-0 md:w-5 md:h-5 lg:w-6 lg:h-6"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19.5 22a1.5 1.5 0 0 0 1.5-1.5V17a1.5 1.5 0 0 0-1.5-1.5c-1.17 0-2.32-.18-3.42-.55a1.51 1.51 0 0 0-1.52.37l-1.44 1.44a14.77 14.77 0 0 1-5.89-5.89l1.43-1.43c.41-.39.56-.97.38-1.53c-.36-1.09-.54-2.24-.54-3.41A1.5 1.5 0 0 0 7 3H3.5A1.5 1.5 0 0 0 2 4.5C2 14.15 9.85 22 19.5 22M3.5 4H7a.5.5 0 0 1 .5.5c0 1.28.2 2.53.59 3.72c.05.14.04.34-.12.5L6 10.68c1.65 3.23 4.07 5.65 7.31 7.32l1.95-1.97c.14-.14.33-.18.51-.13c1.2.4 2.45.6 3.73.6a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5C10.4 21 3 13.6 3 4.5a.5.5 0 0 1 .5-.5"
                    />
                  </svg>
                  <div>
                    <h2 className="font-bold text-[9px] md:text-[10px] lg:text-xs leading-tight">
                      Call us for more Inquiries
                    </h2>
                    <span className="text-[9px] md:text-[10px] lg:text-xs">
                      +63918-909-0331
                    </span>
                  </div>
                </div>
                <div className="flex py-1 md:py-2 lg:py-3 gap-1.5 md:gap-2 leading-0.5 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    className="text-main flex-shrink-0 md:w-5 md:h-5 lg:w-6 lg:h-6"
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
                    <h2 className="font-bold text-[9px] md:text-[10px] lg:text-xs leading-tight">
                      Location
                    </h2>
                    <span className="text-[9px] md:text-[10px] lg:text-xs">
                      IBM Plaza Eastwood, Quezon City
                    </span>
                  </div>
                </div>
                <div className="flex py-1 md:py-2 lg:py-3 gap-1.5 md:gap-2 leading-0.5 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    className="text-main flex-shrink-0 md:w-5 md:h-5 lg:w-6 lg:h-6"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z"
                    />
                  </svg>
                  <div>
                    <h2 className="font-bold text-[9px] md:text-[10px] lg:text-xs leading-tight">
                      Email Us
                    </h2>
                    <span className="text-[9px] md:text-[10px] lg:text-xs">
                      hello@intelliseven.com.ph
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  className="lg:hidden text-main focus:outline-none flex-shrink-0"
                  onClick={() => setDetailsOpen(!detailsOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className={`transition-transform duration-300 ${
                      detailsOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      fill="currentColor"
                      d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"
                    />
                  </svg>
                </button>

                <button
                  className="md:hidden text-main focus:outline-none flex-shrink-0"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M4.5 17.27q-.213 0-.356-.145T4 16.768t.144-.356t.356-.143h15q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.143Q4 7.443 4 7.23t.144-.356t.356-.143h15q.213 0 .356.144T20 7.23t-.144.356t-.356.144z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Details Dropdown */}
        <AnimatePresence>
          {detailsOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-b-2 border-gray-300 shadow-lg"
            >
              <div className="px-4 sm:px-6 py-4 space-y-4">
                <div className="flex gap-3 items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    className="text-main flex-shrink-0 mt-1"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19.5 22a1.5 1.5 0 0 0 1.5-1.5V17a1.5 1.5 0 0 0-1.5-1.5c-1.17 0-2.32-.18-3.42-.55a1.51 1.51 0 0 0-1.52.37l-1.44 1.44a14.77 14.77 0 0 1-5.89-5.89l1.43-1.43c.41-.39.56-.97.38-1.53c-.36-1.09-.54-2.24-.54-3.41A1.5 1.5 0 0 0 7 3H3.5A1.5 1.5 0 0 0 2 4.5C2 14.15 9.85 22 19.5 22M3.5 4H7a.5.5 0 0 1 .5.5c0 1.28.2 2.53.59 3.72c.05.14.04.34-.12.5L6 10.68c1.65 3.23 4.07 5.65 7.31 7.32l1.95-1.97c.14-.14.33-.18.51-.13c1.2.4 2.45.6 3.73.6a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5C10.4 21 3 13.6 3 4.5a.5.5 0 0 1 .5-.5"
                    />
                  </svg>
                  <div>
                    <h2 className="font-bold text-sm text-gray-700">
                      Call us for more Inquiries
                    </h2>
                    <a
                      href="tel:+639189090331"
                      className="text-sm text-gray-600 hover:text-main"
                    >
                      +63918-909-0331
                    </a>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    className="text-main flex-shrink-0 mt-1"
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
                    <h2 className="font-bold text-sm text-gray-700">
                      Location
                    </h2>
                    <span className="text-sm text-gray-600">
                      IBM Plaza Eastwood, Quezon City
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    className="text-main flex-shrink-0 mt-1"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z"
                    />
                  </svg>
                  <div>
                    <h2 className="font-bold text-sm text-gray-700">
                      Email Us
                    </h2>
                    <a
                      href="mailto:hello@intelliseven.com.ph"
                      className="text-sm text-gray-600 hover:text-main"
                    >
                      hello@intelliseven.com.ph
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <nav>
          <div className="absolute top-16 sm:top-[70px] md:top-20 lg:top-[88px] xl:top-[96px] right-0 z-40">
            <div className="hidden md:flex px-12 md:px-16 lg:px-20 xl:px-28 py-4 md:py-5 lg:py-6 bg-main text-[10px] md:text-xs lg:text-sm gap-8 md:gap-12 lg:gap-16 xl:gap-20 text-white font-regular clip-left-slant">
              <a
                href="#"
                className="hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                Services
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                About Us
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                Meet Our Team
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                Documentation
              </a>
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-main text-white flex flex-col justify-center gap-8 z-50 w-screen h-screen overflow-hidden"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 text-white focus:outline-none"
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
                    href="#"
                    onClick={() => setIsOpen(false)}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.15 }}
                    className="relative group font-rajdhani text-2xl tracking-[0.2em] text-gray-100 transition-all duration-500 hover:text-white"
                  >
                    <span className="relative z-10 px-4">{item}</span>
                    <div className="border-1 border-gray-300/10 mt-4"></div>
                    <span className="absolute left-0 top-0 w-full h-full text-gray-400 opacity-0 group-hover:opacity-100 blur-sm transition duration-500">
                      {item}
                    </span>
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
