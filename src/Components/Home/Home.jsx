import { useState } from "react";
import About from "./About Me/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  return (
    <div className="dark:bg-slate-800 dark:text-white transition-colors duration-500">
      <Banner />
    </div>
  );
};

export default Home;
