
const Skills = () => {
    return (
        <div id="skills" className="mb-20">
            <div className="text-center mb-10 lg:mb-10">
            <h1 className="  text-2xl font-bold">My Skills</h1>
            <p className=""> Technologies I’ve been working with</p>
            </div>
            <div>
                <div className="text-center ">
                    <p className="mb-5 text-xl">Expertise</p>
                    <div className="grid grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10">
                    <div className="flex flex-col border justify-center items-center lg:h-[200px] rounded-lg">
                    <img className="h-20" src="/react.svg" alt="" />
                    <p className="mt-4">React</p>
                    </div>
                    <div className="flex flex-col justify-center items-center border lg:h-[200px] rounded-lg">
                    <img className="h-20 " src="/tailwind.png" alt="" />
                    <p className="mt-4">Tailwnd</p>
                    </div>
                    <div className="flex flex-col justify-center items-center border lg:h-[200px] rounded-lg">
                    <img className="h-20" src="/mongodb.svg" alt="" />
                    <p className="mt-4">MongoDB</p>
                    </div>
                    </div>
                </div>
                <div className="mt-10 text-center ">
                    <p className="mb-5 text-xl">Comfortable</p>
                    <div className="grid grid-cols-2 justify-center items-center gap-10">
                    <div className="flex flex-col border justify-center items-center lg:h-[200px] rounded-lg">
                    <img className="h-20" src="/js.png" alt="" />
                    <p className="mt-4">JavaScript</p>
                    </div>
                    <div className="flex flex-col justify-center items-center border lg:h-[200px] rounded-lg">
                    <img className="h-20 " src="/express.png" alt="" />
                    <p className="mt-4">Express</p>
                    </div>
                    </div>
                </div>
                <div className="text-center mt-10 ">
                    <p className="mb-5 text-xl">Expertise</p>
                    <div className="grid grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10">
                    <div className="flex flex-col border justify-center items-center lg:h-[200px] rounded-lg">
                    <img className="h-20" src="/node.svg" alt="" />
                    <p className="mt-4">Node.js</p>
                    </div>
                    <div className="flex flex-col justify-center items-center border lg:h-[200px] rounded-lg">
                    <img className="h-20 " src="/jwt.svg" alt="" />
                    <p className="mt-4">JWT</p>
                    </div>
                    <div className="flex flex-col justify-center items-center border lg:h-[200px] rounded-lg">
                    <img className="h-20" src="/firebase.svg" alt="" />
                    <p className="mt-4">Firebase</p>
                    </div>
                    </div>
                </div>
                <div className="text-center mt-10 ">
                    <p className="mb-5 text-xl">Tools</p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-10">
                    <div className="flex flex-col border justify-center items-center lg:h-[200px] rounded-lg">
                    <img className="h-20" src="/git.svg" alt="" />
                    <p className="mt-4">Git</p>
                    </div>
                    <div className="flex flex-col border justify-center items-center lg:h-[200px] rounded-lg">
                    <img className="h-20" src="/github-Logo.svg" alt="" />
                    <p className="mt-4">GitHub</p>
                    </div>
                    <div className="flex flex-col justify-center items-center border lg:h-[200px] rounded-lg">
                    <img className="h-20 " src="/Vercel.png" alt="" />
                    <p className="mt-4">Vercel</p>
                    </div>
                    <div className="flex flex-col justify-center items-center border lg:h-[200px] rounded-lg">
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