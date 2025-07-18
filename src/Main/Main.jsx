import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shreared/Navbar/Navbar";
import Footer from "../Components/Shreared/Footer/Footer";
import { useEffect, useState } from "react";
import { ImSpinner10 } from "react-icons/im";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white dark:bg-slate-800 transition-colors duration-500">
        <ImSpinner10 className="animate-spin text-[100px] md:text-[200px] text-[#0077B6]" />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-800 dark:text-white min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
