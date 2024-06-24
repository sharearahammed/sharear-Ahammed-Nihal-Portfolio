import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shreared/Navbar/Navbar";
import Footer from "../Components/Shreared/Footer/Footer";

const Main = () => {
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