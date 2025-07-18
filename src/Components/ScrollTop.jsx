import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Wait for DOM to update before smooth scroll
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // slight delay ensures smoother transition
  }, [pathname]);

  return null;
};

export default ScrollToTop;
