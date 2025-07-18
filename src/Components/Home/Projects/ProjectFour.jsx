import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { MdLiveTv } from "react-icons/md";

const ProjectFour = () => {
  return (
    <div id="projects" className="pt-24 md:mt-0 md:pt-28 mb-20 md:px-5 lg:px-5">
      {/* Professional Title and Intro */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-[#0077B6] dark:text-blue-400 mb-3">
          Fly Far International – Flight Booking Web Application
        </h1>
        <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A modern and fully responsive flight booking platform tailored for
          travel agencies and users. Built using React, Redux, and Material UI,
          the application supports OTP-based authentication, ticket ZIP
          downloads, and comprehensive admin/user management features.
        </p>
      </div>

      {/* Swiper */}
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper max-w-3xl mx-auto flex items-center justify-center"
        >
          <SwiperSlide>
            <img
              className="h-full w-full md:w-[800px] md:h-[600px] lg:p-5"
              src="/FFIimgOne.png"
              alt="Fly Far International Screenshot 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full w-full md:w-[800px] md:h-[600px] lg:p-5"
              src="/FFIimgTwo.png"
              alt="Fly Far International Screenshot 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full w-full md:w-[800px] md:h-[600px] lg:p-5"
              src="/FFIimgThree.png"
              alt="Fly Far International Screenshot 3"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Description */}
      <div>
        <div className="mb-3 px-4">
          <h2 className="mt-6 mb-2 lg:mb-5 font-bold lg:text-2xl transition duration-500 ease-in-out">
            Project Overview
          </h2>
          <p className="text-justify text-[12px] md:text-[18px] text-gray-700 dark:text-gray-300">
            A scalable and fully responsive flight booking web application
            designed for travel agencies and individual users. This platform
            includes advanced booking features like flight search, OTP
            verification, ZIP ticket download, and complete CRUD operations.
            Developed using React, Redux, and Material UI with a focus on
            performance, responsiveness, and maintainability.
          </p>
        </div>

        <div className="text-[11px] md:text-[17px] px-4">
          <h2 className="font-bold mb-2">Key Features</h2>
          <ul className="list-disc text-gray-600 dark:text-gray-300 ml-5 space-y-1">
            <li>Responsive UI optimized for all devices</li>
            <li>Flight search, filtering, and booking management</li>
            <li>OTP-based authentication system</li>
            <li>ZIP download for ticket and invoice</li>
            <li>Full CRUD functionalities for admin and user</li>
            <li>REST API integration with Redux for state management</li>
          </ul>

          <div className="mt-6">
            <h2 className="font-bold">Role & Responsibility</h2>
            <p className="text-justify mt-1">
              As the Front-End Developer, I led the UI development using React
              and Material UI, implemented Redux for state management,
              collaborated with backend developers to integrate APIs, and
              ensured full responsiveness across mobile, tablet, and desktop.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="font-bold">Technologies Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-3 gap-2 text-[#0077B6]">
              {[
                "React",
                "Redux",
                "Material UI",
                "JavaScript",
                "REST API",
                "Responsive Design",
              ].map((tech, index) => (
                <p
                  key={index}
                  data-aos="flip-down"
                  data-aos-duration={1500 + index * 300}
                  className="text-center border hover:cursor-pointer hover:bg-[#0077B6] hover:text-white rounded-lg border-[#0077B6] px-2 py-1"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center md:justify-start">
            <a
              href="https://flyfarint.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex justify-center items-center gap-3 bg-gradient-to-r from-[#0077B6] to-blue-500 hover:from-blue-950 hover:to-blue-800 text-white px-5 py-3 rounded-lg">
                Live Site <MdLiveTv className="text-2xl" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFour;
