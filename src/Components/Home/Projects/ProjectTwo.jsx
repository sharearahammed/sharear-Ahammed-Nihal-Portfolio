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

  return (
    <div id="projects" className="pt-24 md:mt-0 md:pt-28 mb-20 md:px-5 lg:px-5">
      {/* Title & Description */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-[#0077B6] dark:text-blue-400 mb-3">
          Hotel Room Booking – Reservation & Payment Platform
        </h1>
        <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A full-featured hotel room reservation system offering seamless
          booking, secure payments, and role-based access for users and admins.
          The platform includes real-time email notifications, JWT-based
          authentication, Stripe integration, and responsive UI powered by React
          and Tailwind CSS.
        </p>
      </div>

      {/* Swiper Gallery */}
      <div className="lg:mt-16 md:mt-8 mt-0 px-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper max-w-3xl mx-auto flex items-center justify-center"
        >
          {[
            "/Project2Collage1.png",
            "/Project2Collage2.png",
            "/Project2Collage3.png",
            "/Project2Collage4.png",
          ].map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                className="h-full w-full md:w-[800px] md:h-[600px] lg:p-5"
                alt={`Hotel Booking Screenshot ${i + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Project Details */}
      <div className="px-4">
        <div className="mb-3 mt-6">
          <h2 className="font-bold lg:text-2xl mb-2">Project Overview</h2>
          <p className="text-justify text-[12px] md:text-[18px] text-gray-700 dark:text-gray-300">
            This responsive hotel booking platform allows users to browse
            available rooms, make reservations, leave reviews, and handle
            payments securely. Admins can manage listings, users, and
            transactions. The app uses JSON Web Tokens (JWT) for secure
            authentication, integrates Stripe for payments, and supports
            automated emails for confirmations and notifications.
          </p>
        </div>

        <div className="relative pb-16 text-[11px] md:text-[17px]">
          <h2 className="font-bold mb-2">Key Features</h2>
          <ul className="list-disc text-gray-600 dark:text-gray-300 ml-5 space-y-1">
            <li>JWT-based secure login system for users and admins</li>
            <li>Stripe integration for seamless room payments</li>
            <li>Email notifications for bookings and updates</li>
            <li>Dynamic room listing with full CRUD functionality</li>
            <li>Mobile-responsive design using Tailwind CSS</li>
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
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
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

export default ProjectTwo;
