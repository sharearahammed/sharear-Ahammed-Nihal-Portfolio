import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { MdLiveTv } from "react-icons/md";
import { LuFileCode } from "react-icons/lu";

const ProjectTwo = () => {
  const technologies = [
    "React JS",
    "MongoDB",
    "Firebase",
    "Tailwind CSS",
    "NodeJS",
  ];
  const buttons = [
    {
      href: "https://sunshinecity-hotelbooking.netlify.app",
      label: "Live Site",
      Icon: MdLiveTv,
    },
    {
      href: "https://github.com/sharearahammed/hotel-booking-client.git",
      label: "Client Site Code",
      Icon: LuFileCode,
    },
    {
      href: "https://github.com/sharearahammed/hotel-booking-server",
      label: "Server Site Code",
      Icon: LuFileCode,
    },
  ];

  const FirstIcon = buttons[0].Icon;

  return (
    <div className=" px-10 py-5 lg:py-0 rounded-lg overflow-hidden flex flex-col mb-5">
      <div className="lg:mt-16 md:mt-8 mt-0">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper max-w-3xl mx-auto flex items-center justify-center"
        >
          <SwiperSlide>
            <img
              className="h-full md:w-full md:w-[800px] md:h-[600px] lg:p-5"
              src="/Project2Collage1.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full md:w-full md:w-[800px] md:h-[600px] lg:p-5"
              src="/Project2Collage2.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full md:w-full md:w-[800px] md:h-[600px] lg:p-5"
              src="/Project2Collage3.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full md:w-full md:w-[800px] md:h-[600px] lg:p-5"
              src="/Project2Collage4.png"
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
            2) Hotel Room Booking
          </h1>
          <p className="text-justify text-[12px] md:text-[18px]">
            A responsive and user-friendly hotel booking platform. It features
            secure user authentication with JWT, seamless Stripe payment
            integration, and automated email notifications. Users can book,
            update, review, and cancel reservations with ease. Built with React
            JS, MongoDB, Firebase, Tailwind CSS, and NodeJS, it ensures a modern
            and efficient user experience.
          </p>
        </div>

        <div className="relative pb-16 text-[11px] md:text-[17px]">
          <ul className="text-gray-500 list-disc">
            <li>
              Proficient in secure user authentication, Multiple payment
              options, Automated Email Notifications
            </li>
            <li>
              Cutting-edge technology stack implementation for user-friendly web
              applications
            </li>
          </ul>

          <div className="mt-5">
            <h1 className="font-bold">Technology</h1>
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

          <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-5">
            <a href={buttons[0].href}>
              <button className="flex justify-center items-center gap-3 bg-gradient-to-r from-[#0077B6] to-blue-500 hover:from-blue-950 hover:to-blue-800 text-white px-5 py-3 rounded-lg">
                {buttons[0].label}
                <FirstIcon className="text-2xl" />
              </button>
            </a>

            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
              {buttons.slice(1).map(({ href, label, Icon }) => (
                <a key={label} href={href}>
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
    </div>
  );
};

export default ProjectTwo;
