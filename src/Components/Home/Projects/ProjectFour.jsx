import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { MdLiveTv } from "react-icons/md";

const ProjectFour = () => {
  return (
    <div className="px-10 py-5 lg:py-0 rounded-lg overflow-hidden flex flex-col mb-5">
      <div className="lg:mt-16 md:mt-8 mt-0">
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
              className="h-full md:w-full md:w-[800px] md:h-[600px] lg:p-5"
              src="/FFIimgOne.png"
              alt="Fly Far International V1 Screenshot 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full md:w-full md:w-[800px] md:h-[600px] lg:p-5"
              src="/FFIimgTwo.png"
              alt="Fly Far International V1 Screenshot 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full md:w-full md:w-[800px] md:h-[600px] lg:p-5"
              src="/FFIimgThree.png"
              alt="Fly Far International V1 Screenshot 3"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div>
        <div className="mb-3">
          <h1
            data-aos="zoom-in-right"
            data-aos-duration="2000"
            className="mt-3 mb-2 lg:mb-5 font-bold lg:text-2xl inline-block transition duration-500 ease-in-out"
          >
            4) Fly Far International V1
          </h1>
          <p className="text-justify text-[12px] md:text-[18px]">
            A scalable and fully responsive flight booking web application designed for travel agencies and individual users. This platform includes advanced booking features like flight search, OTP verification, ZIP ticket download, and complete CRUD operations. Developed using React, Redux, and Material UI with a focus on performance, responsiveness, and maintainability.
          </p>
        </div>

        <div className="text-[11px] md:text-[17px]">
          <h2 className="font-bold mb-2">Features Highlights</h2>
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
              As the Front-End Developer, I led the UI development using React and Material UI, implemented Redux for state management, collaborated with backend developers to integrate APIs, and ensured full responsiveness across mobile, tablet, and desktop.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="font-bold">Technology Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-3 gap-2 text-[#0077B6]">
              {["React", "Redux", "Material UI", "JavaScript", "REST API", "Responsive Design"].map((tech, index) => (
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

          <div className="mt-10 flex justify-center">
            <a href="https://flyfarint.com" target="_blank" rel="noopener noreferrer">
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
