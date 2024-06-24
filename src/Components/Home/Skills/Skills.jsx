
const Skills = () => {
    return (
        <div id="skills" className="mb-20">
            <div className="text-center mb-10 lg:mb-10">
            <h1 className=" text-2xl md:text-5xl font-bold mb-3">My Skills</h1>
            <p className="md:text-xl"> Technologies I’ve been working with</p>
            </div>
            <div>
                <div className="text-center p-5 lg:p-0">
                    <p className="mb-10 text-xl font-bold underline">Expertise</p>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
                    <div data-aos="flip-left" data-aos-duration="2000" className="hover:border-[#0077B6] duration-500 hover:scale-105 hover:shadow-xl flex flex-col border justify-center items-center lg:h-[200px] rounded-lg p-4 lg:p-0">
                    <img className="h-20" src="/react.svg" alt="" />
                    <p className="mt-4">React</p>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className="hover:border-[#0077B6] duration-500 hover:scale-105 hover:shadow-xl flex flex-col justify-center items-center border lg:h-[200px] rounded-lg p-4 lg:p-0">
                    <img className="h-20 " src="/tailwind.png" alt="" />
                    <p className="mt-4">Tailwnd</p>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className="hover:border-[#0077B6] duration-500 hover:scale-105 hover:shadow-xl flex flex-col col-span-2 lg:col-span-1 justify-center items-center border lg:h-[200px] rounded-lg p-4 lg:p-0 mx-20 lg:mx-0">
                    <img className="h-20" src="/mongodb.svg" alt="" />
                    <p className="mt-4">MongoDB</p>
                    </div>
                    </div>
                </div>
                <div className="md:mt-10 text-center p-5 lg:p-0">
                    <p className="mb-10 text-xl font-bold underline">Comfortable</p>
                    <div className="grid grid-cols-2 justify-center items-center gap-10">
                    <div data-aos="flip-left" data-aos-duration="2000" className="hover:border-[#0077B6] duration-500 hover:scale-105 hover:shadow-xl flex flex-col border justify-center items-center lg:h-[200px] rounded-lg p-4 lg:p-0">
                    <img className="h-20" src="/js.png" alt="" />
                    <p className="mt-4">JavaScript</p>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className="hover:border-[#0077B6] duration-500 hover:scale-105 hover:shadow-xl flex flex-col border justify-center items-center lg:h-[200px] rounded-lg p-4 lg:p-0">
                    <img className="h-20 " src="/express.png" alt="" />
                    <p className="mt-4">Express</p>
                    </div>
                    </div>
                </div>
                <div className="md:mt-10 text-center p-5 lg:p-0">
                    <p className="mb-10 text-xl font-bold underline">Expertise</p>
                    <div className="grid grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10">
                    <div data-aos="flip-left" data-aos-duration="2000" className="hover:border-[#0077B6] duration-500 hover:scale-105 hover:shadow-xl flex flex-col border justify-center items-center lg:h-[200px] rounded-lg p-4 lg:p-0">
                    <img className="h-20" src="/node.svg" alt="" />
                    <p className="mt-4">Node.js</p>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className="hover:border-[#0077B6] duration-500 hover:scale-105 hover:shadow-xl flex flex-col border justify-center items-center lg:h-[200px] rounded-lg p-4 lg:p-0">
                    <img className="h-20 " src="/jwt.svg" alt="" />
                    <p className="mt-4">JWT</p>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className="hover:border-[#0077B6] duration-500 hover:scale-105 hover:shadow-xl flex flex-col col-span-2 lg:col-span-1 justify-center items-center border lg:h-[200px] rounded-lg p-4 lg:p-0 mx-20 lg:mx-0">
                    <img className="h-20" src="/firebase.svg" alt="" />
                    <p className="mt-4">Firebase</p>
                    </div>
                    </div>
                </div>
                <div className="md:mt-10 text-center p-5 lg:p-0">
                    <p className="mb-10 text-xl font-bold underline">Tools</p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-10">
                    <div data-aos="flip-left" data-aos-duration="2000" className="hover:border-[#0077B6] duration-500 hover:scale-105 hover:shadow-xl flex flex-col border justify-center items-center lg:h-[200px] rounded-lg p-4 lg:p-0">
                    <img className="h-20" src="/git.svg" alt="" />
                    <p className="mt-4">Git</p>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className="hover:border-[#0077B6] duration-500 hover:scale-105 hover:shadow-xl flex flex-col border justify-center items-center lg:h-[200px] rounded-lg p-4 lg:p-0">
                    <img className="h-20" src="/github-Logo.svg" alt="" />
                    <p className="mt-4">GitHub</p>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className="hover:border-[#0077B6] duration-500 hover:scale-105 hover:shadow-xl flex flex-col border justify-center items-center lg:h-[200px] rounded-lg p-4 lg:p-0">
                    <img className="h-20 py-7 md:py-4 md:px-5" src="/Vercel.png" alt="" />
                    <p className="mt-4">Vercel</p>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className="hover:border-[#0077B6] duration-500 hover:scale-105 hover:shadow-xl flex flex-col border justify-center items-center lg:h-[200px] rounded-lg p-4 lg:p-0">
                    <img className="h-20" src="/netlify.svg" alt="" />
                    <p className="mt-4">Netlify</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;