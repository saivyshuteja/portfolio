import { useState, useEffect } from "react";

import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScrolled(true);
      }

      else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  const navLinks = [
    "Home",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (

    <header
      className={`fixed top-0 left-0 w-full z-50 transition duration-500 ${
        scrolled
          ? "bg-[#050816]/70 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex items-center justify-between py-5">

          {/* ================= LOGO ================= */}

          <a
            href="#home"
            className="relative text-2xl md:text-3xl font-black tracking-wide"
          >

            <span className="text-white">
              Sai
            </span>

            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
              Teja
            </span>

            {/* Glow */}
            <div className="absolute -inset-2 bg-cyan-500/20 blur-2xl rounded-full"></div>

          </a>

          {/* ================= DESKTOP MENU ================= */}

          <nav className="hidden md:flex items-center gap-10">

            {navLinks.map((link, index) => (

              <a
                key={index}
                href={`#${link.toLowerCase()}`}
                className="relative text-gray-300 hover:text-white transition duration-300 group text-lg"
              >

                {link}

                {/* Hover Underline */}
                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-linear-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>

              </a>
            ))}

            {/* CTA Button */}

            <a
              href="#contact"
              className="px-6 py-3 rounded-2xl bg-linear-to-r from-cyan-400 to-purple-500 text-black font-bold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20"
            >

              Hire Me

            </a>
          </nav>

          {/* ================= MOBILE BUTTON ================= */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-white"
          >

            {menuOpen ? <FaTimes /> : <FaBars />}

          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen
            ? "max-h-[400px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="mx-6 mb-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 flex flex-col gap-8">

          {navLinks.map((link, index) => (

            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-xl text-gray-300 hover:text-cyan-400 transition"
            >

              {link}

            </a>
          ))}

          {/* Mobile CTA */}

          <a
            href="#contact"
            className="text-center py-4 rounded-2xl bg-linear-to-r from-cyan-400 to-purple-500 text-black font-bold"
          >

            Hire Me

          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;