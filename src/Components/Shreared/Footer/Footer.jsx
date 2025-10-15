import { useEffect } from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: FaTwitter,
      label: "Twitter",
      url: "https://x.com/NihalSharear",
      color: "hover:text-blue-400",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      url: "https://www.instagram.com/bitter_melon__10",
      color: "hover:text-pink-500",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/sharear-ahammed-nihal-27899b354",
      color: "hover:text-cyan-400",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      url: "https://github.com/sharearahammed",
      color: "hover:text-gray-300",
    },
  ];

  const footerLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-900 text-gray-800 dark:text-gray-300 overflow-hidden transition-colors duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-200/20 dark:bg-blue-900/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-cyan-200/20 dark:bg-cyan-900/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-blue-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Section */}
            <div className="space-y-4" data-aos="fade-up">
              <div className="group">
                <img
                  className="h-12 md:h-16 w-auto transition-transform duration-300 group-hover:scale-110"
                  src="/sa-logo.png"
                  alt="Sharear Ahammed Nihal Logo"
                />
              </div>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Full-stack developer crafting beautiful, responsive web experiences with modern technologies.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 font-semibold">
                © {new Date().getFullYear()} Sharear Ahammed Nihal
              </p>
            </div>

            {/* Quick Links */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full"></span>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-blue-600 dark:bg-blue-400 group-hover:w-2 transition-all duration-300"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-cyan-600 to-teal-600 rounded-full"></span>
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "MongoDB", "Tailwind", "TypeScript"].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-200 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-600/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 border border-gray-300 dark:border-gray-700 dark:hover:border-blue-600 cursor-default"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Connect Section */}
            <div data-aos="fade-up" data-aos-delay="300">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></span>
                Connect
              </h4>
              <div className="space-y-3">
                <p className="text-sm text-gray-600 dark:text-gray-400">Follow me on social media or get in touch directly.</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className={`w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-800/50 flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 border border-gray-300 dark:border-gray-700 ${social.color}`}
                      >
                        <Icon className="text-lg" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-12"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left text-sm text-gray-600 dark:text-gray-500">
              <p>
                Designed & built with <span className="text-red-500">❤️</span> by Sharear Ahammed Nihal
              </p>
              <p className="mt-2">
                Powered by <span className="text-blue-600 dark:text-blue-400 font-semibold">React</span> & <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Tailwind CSS</span>
              </p>
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110"
              aria-label="Scroll to top"
            >
              <FaArrowUp className="text-white text-lg group-hover:translate-y-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-lg -z-10"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(100px); opacity: 0; }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </footer>
  );
};

export default Footer;