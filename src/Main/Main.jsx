import { Outlet } from "react-router-dom"; // ✅ Import this
import Navbar from "../Components/Shreared/Navbar/Navbar";
import Footer from "../Components/Shreared/Footer/Footer";
import { useEffect, useState } from "react";
import { ImSpinner10 } from "react-icons/im";
import ScrollToTop from "../Components/ScrollTop";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white dark:bg-slate-800 transition-colors duration-500">
        <ImSpinner10 className="animate-spin text-[100px] md:text-[200px] text-[#0077B6]" />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-800 dark:text-white min-h-[60vh] transition-colors duration-500">
       <ScrollToTop />
      <div className="max-w-7xl mx-auto px-4">
        <Navbar />
      </div>
      <main>
        <Outlet />
        {/* ⬆️ This will render Home or ProjectDetails based on route */}
      </main>
      <Footer />
    </div>
  );
};

export default Main;
