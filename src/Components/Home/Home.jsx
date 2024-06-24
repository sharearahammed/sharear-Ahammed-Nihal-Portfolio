import About from "./About Me/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

const Home = () => {
    return (
        <div className="dark:bg-slate-800 dark:text-white">
            <Banner />
            <div className="max-w-7xl mx-auto">
                <About />
                <Skills />
                <Projects />
            </div>
            <Contact />
        </div>
    );
};

export default Home;