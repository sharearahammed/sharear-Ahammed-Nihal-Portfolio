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
        }, 3000); // 3000 ms = 3 seconds delay
    
        return () => clearTimeout(timer);
      }, []);
      
      if (isLoading) {
        return <div className="flex justify-center items-center min-h-screen "><ImSpinner10 loading={isLoading} className="animate-spin text-[100px] md:text-[200px] text-[#0077B6]" /></div>;
      }
    return (
        <div className="dark:bg-slate-800 dark:text-white">
            <div className="max-w-7xl mx-auto">
            <Navbar />
            </div>
            <div>
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;