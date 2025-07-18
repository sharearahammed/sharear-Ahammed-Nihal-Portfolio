import { useEffect, useState } from "react";
import DarkMode from "../../DarkMode/DarkMode";
import { IoMdDownload } from "react-icons/io";
import "./Navbar.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome =
    location.pathname === "/" &&
    (location.hash === "" || location.hash === "#home");

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const targetSection = document.getElementById("about");
    if (targetSection) {
      const sectionTop = targetSection.offsetTop;
      if (scrollTop > sectionTop) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = (
    <>
      <li className="font-bold text-[16px] cursor-pointer">
        <a href="/">Home</a>
      </li>
      <li className="font-bold text-[16px] cursor-pointer">
        <a href="/about">About</a>
      </li>
      <li className="font-bold text-[16px] cursor-pointer">
        <a href="/skills">Skills</a>
      </li>
      <li className="font-bold text-[16px] cursor-pointer">
        <a href="/projects">Projects</a>
      </li>
      <li className="font-bold text-[16px] cursor-pointer">
        <a href="/contact">Contact</a>
      </li>
    </>
  );

  return (
    <nav
      className={`gruppo fixed flex-no-wrap md:px-16 top-0 right-0 left-0 z-10 flex navbar text-white justify-between items-center ${
        isHome ? "bg-[#0077B6] bg-opacity-80" : "bg-[#0077B6] bg-opacity-80"
      }`}
    >
      <div className="navbar-start">
        <a className="btn btn-ghost" href="/">
          <img className="h-5 md:h-9 md:w-14" src="/sa-logo.png" alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{links}</ul>
      </div>
      <div className="navbar-end flex items-center space-x-2">
        <div>
          <a
            // href="/Resume of Sharear Ahammed Nihal.pdf"
            href="/CV of Sharear Ahammed Nihal.pdf.pdf"
            download="Resume of Sharear Ahammed Nihal.pdf"
          >
            <p className="flex justify-center items-center gap-2 hover:from-blue-950 hover:to-blue-800 border-2 md:border-white border-[#0077B6] px-4 py-1 rounded-lg font-bold text-[10px] md:text-xl  hover:bg-[#0077B6] hover:cursor-pointer hover:text-white hover:border-[#0077B6]">
              Resume <IoMdDownload className="lg:text-[20px]" />
            </p>
          </a>
        </div>
        <div>
          <DarkMode></DarkMode>
        </div>
        <div className="lg:hidden">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#0077B6]"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
