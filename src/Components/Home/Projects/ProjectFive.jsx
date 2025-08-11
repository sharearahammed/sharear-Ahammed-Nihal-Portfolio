import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { MdLiveTv } from "react-icons/md";
import { LuFileCode } from "react-icons/lu";

const ProjectFive = () => {
  const technologies = [
    "ReactJS",
    "Typescript",
    "Tailwind CSS",
    "Tanstack Query",
  ];

  const buttons = [
    {
      href: "https://makemytrip-flight-search-box-clone.netlify.app/",
      label: "Live Site",
      Icon: MdLiveTv,
    },
    {
      href: "https://github.com/sharearahammed/Flight-Search-Box-UsingTS.git",
      label: "Client Site Code",
      Icon: LuFileCode,
    },
  ];

  return (
    <div id="projects" className="pt-24 md:mt-0 md:pt-28 mb-20 md:px-5 lg:px-5">
      {/* Professional Title & Intro */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-[#0077B6] dark:text-blue-400 mb-3">
          MakeMyTrip Flight Search Box Clone
        </h1>
        <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A responsive flight search box clone inspired by MakeMyTrip, built with React, TypeScript, Tailwind CSS, and Tanstack Query. Supports multi-city, round-trip, and one-way flight searches with an intuitive UI and real-time data management.
        </p>
      </div>

      {/* Swiper Image Gallery */}
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
          {["/Project4Collage2.jpg", "/Project4Collage2.jpg", "/Project4Collage3.png"].map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                className="h-full w-full md:w-[800px] md:h-[600px] lg:p-5"
                alt={`Flight Search Box Screenshot ${i + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Description and Tech */}
      <div className="px-4">
        <div className="mb-3">
          <h2 className="mt-6 mb-2 font-bold lg:text-2xl">Project Overview</h2>
          <p className="text-justify text-[12px] md:text-[18px] text-gray-700 dark:text-gray-300">
            This project is a clone of the MakeMyTrip flight search box, designed to replicate its core functionality and user interface. It enables users to search for flights across multiple cities, choose trip types such as round-trip or one-way, and select dates seamlessly. The app uses React and TypeScript for a robust frontend, Tailwind CSS for styling, and Tanstack Query for efficient state and data fetching management.
          </p>
        </div>

        <div className="relative pb-16 text-[11px] md:text-[17px]">
          <h2 className="font-bold mb-2">Key Features</h2>
          <ul className="list-disc text-gray-600 dark:text-gray-300 ml-5 space-y-1">
            <li>Multi-city, round-trip, and one-way flight search options</li>
            <li>Intuitive UI closely modeled on MakeMyTrip’s flight search box</li>
            <li>Efficient data fetching and caching with Tanstack Query</li>
            <li>Responsive design optimized for mobile and desktop using Tailwind CSS</li>
            <li>Built with React and TypeScript for maintainable, scalable code</li>
          </ul>

          <div className="mt-6">
            <h2 className="font-bold mb-2">Technologies Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 mt-3 gap-2 text-[#0077B6]">
              {technologies.map((tech) => (
                <p
                  key={tech}
                  data-aos="flip-down"
                  data-aos-duration="4000"
                  className="text-center border hover:cursor-pointer hover:bg-[#0077B6] hover:text-white rounded-lg border-[#0077B6] px-2 py-1"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col md:flex-row justify-start items-center gap-5">
            {buttons.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                <button className="flex justify-center items-center gap-3 bg-gradient-to-r from-[#0077B6] to-blue-500 hover:from-blue-950 hover:to-blue-800 text-white px-5 py-3 rounded-lg">
                  {label}
                  <Icon className="text-2xl" />
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFive;
