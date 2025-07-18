import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gradient-to-r dark:from-gray-900 dark:via-black dark:to-gray-900 text-gray-700 dark:text-gray-300 p-10 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
        {/* Logo & Copyright */}
        <aside className="flex flex-col items-center md:items-start space-y-4">
          <img
            className="h-14 w-auto"
            src="/sa-logo.png"
            alt="Sharear Ahammed Nihal Logo"
          />
          <p className="text-sm md:text-base max-w-xs text-center md:text-left leading-relaxed">
            &copy; {new Date().getFullYear()} Sharear Ahammed Nihal <br />
            All rights reserved.
          </p>
        </aside>

        {/* Divider (only on desktop) */}
        <div className="hidden md:block border-l border-gray-300 dark:border-gray-700 h-20"></div>

        {/* Social Links */}
        <nav className="flex flex-col items-center md:items-end space-y-4">
          <h6 className="text-sm md:text-base text-[#0077B6] dark:text-[#00A3FF] font-semibold tracking-widest uppercase">
            Connect with me
          </h6>
          <div className="flex space-x-6">
            <a
              href="https://x.com/NihalSharear"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="text-gray-600 dark:text-gray-400 hover:text-[#1DA1F2] dark:hover:text-[#1DA1F2] transition duration-300 transform hover:-translate-y-1 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/bitter_melon_010"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-600 dark:text-gray-400 hover:text-[#E1306C] dark:hover:text-[#E1306C] transition duration-300 transform hover:-translate-y-1 hover:scale-110 text-2xl"
            >
              <GrInstagram />
            </a>
          </div>
        </nav>
      </div>
      <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-xs text-gray-500 dark:text-gray-400">
        Designed & built by Sharear Ahammed Nihal — Powered by React & Tailwind CSS
      </div>
    </footer>
  );
};

export default Footer;
