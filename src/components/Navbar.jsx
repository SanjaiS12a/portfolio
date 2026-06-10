import { useState } from "react";
import { Link } from "react-scroll";
import { FaDownload } from "react-icons/fa";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", to: "home" },
    { name: "ABOUT", to: "about" },
    { name: "PROJECTS", to: "projects" },
    { name: "SKILLS", to: "skills" },
    { name: "ACHIEVEMENTS", to: "achievements" },
    { name: "CONTACT", to: "contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-cyber-border/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="home" smooth={true} duration={500} className="flex items-center gap-3 cursor-pointer group">
          <div className="w-8 h-8 rounded-lg bg-cyber-red/10 border border-cyber-red flex items-center justify-center shadow-[0_0_15px_rgba(255,0,60,0.3)] transition-transform duration-300 group-hover:scale-105">
            <span className="text-cyber-red text-lg font-bold text-glow-red">S</span>
          </div>
          <span className="text-white text-lg font-bold tracking-[0.2em] group-hover:text-cyber-red transition-colors duration-300">
            SANJAI S
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex items-center gap-8 text-gray-400 font-mono text-xs tracking-widest">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                activeClass="text-cyber-red font-bold after:scale-x-100"
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer hover:text-white transition-all duration-300 relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-cyber-red after:scale-x-0 after:origin-left after:transition-transform after:duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* DOWNLOAD RESUME */}
        <div className="hidden sm:flex items-center">
          <a
            href="/resume.pdf"
            download
            className="relative overflow-hidden group bg-cyber-red text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-semibold text-xs tracking-widest transition-all duration-300 hover:bg-cyber-red-hover hover:shadow-[0_0_20px_rgba(255,0,60,0.5)] border border-cyber-red"
          >
            DOWNLOAD RESUME
            <FaDownload className="text-[10px] group-hover:translate-y-[1px] transition-transform duration-300" />
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-gray-400 hover:text-cyber-red transition-colors p-1"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE NAV DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 border-b border-cyber-border/50 px-6 py-6 transition-all duration-300">
          <ul className="flex flex-col gap-5 text-gray-400 font-mono text-xs tracking-widest mb-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  activeClass="text-cyber-red font-bold"
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                  className="cursor-pointer hover:text-white block py-1"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="/resume.pdf"
            download
            onClick={() => setMobileMenuOpen(false)}
            className="w-full justify-center bg-cyber-red text-white px-5 py-3 rounded-lg flex items-center gap-2 font-semibold text-xs tracking-widest hover:bg-cyber-red-hover shadow-glow-red"
          >
            DOWNLOAD RESUME
            <FaDownload className="text-[10px]" />
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;