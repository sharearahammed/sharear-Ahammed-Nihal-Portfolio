import About from "./About Me/About";
import Banner from "./Banner/Banner";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="max-w-7xl mx-auto">
                <About />
                <Skills />
                <Projects />
            </div>
        </div>
    );
};

export default Home;