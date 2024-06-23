const Navbar = () => {
    const links = (
      <>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </>
    );
  
    return (
      <nav className="navbar bg-base-100 flex justify-between items-center">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl" href="#home">Portfolio</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {links}
          </ul>
        </div>
        <div className="navbar-end flex items-center space-x-2">
          <div>
          <button className="btn btn-outline text-[#0077B6] hover:bg-[#0077B6] hover:border-[#0077B6]">Resume</button>
          </div>
          <div className="lg:hidden">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
  