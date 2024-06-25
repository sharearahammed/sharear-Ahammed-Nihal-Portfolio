import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { MdLiveTv } from 'react-icons/md';
import { LuFileCode } from 'react-icons/lu';

const ProjectTwo = () => {
  return (
    <div className="border-2 px-10 py-5 lg:py-0 rounded-lg overflow-hidden flex flex-col mb-5">
      <div className=''>
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
          className="lg:p-5 lg:h-[500px] lg:w-[700px]"
          src="/Project2Collage1.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="lg:p-5 lg:h-[500px] lg:w-[700px]"
          src="/Project2Collage2.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="lg:p-5 lg:h-[500px] lg:w-[700px]"
          src="/Project2Collage3.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="lg:p-5 lg:h-[500px] lg:w-[700px]"
          src="/Project2Collage4.png"
        />
      </SwiperSlide>
    </Swiper>
      </div>
      <div className='lg:max-w-3xl lg:mx-auto'>
      <div className='mb-3'>
      <h1 data-aos="zoom-in-right" data-aos-duration="2000" className="mt-3 mb-2 lg:mb-5 font-bold lg:text-2xl inline-block transition duration-500 ease-in-out">
          2) Hotel Room Booking 
        </h1>
        <p className='text-justify text-[18px]'>
        A responsive and user-friendly hotel booking platform. It features secure user authentication with JWT, seamless Stripe payment integration, and automated email notifications. Users can book, update, review, and cancel reservations with ease. Built with React JS, MongoDB, Firebase, Tailwind CSS, and NodeJS, it ensures a modern and efficient user experience.
        </p>
      </div>
      <div className="relative pb-16 text-[17px]">
        <ul className="text-gray-500 list-disc">
          <li>
            Proficient in secure user authentication, Multiple payment options,
            Automated Email Notifications
          </li>
          <li>
          Cutting-edge technology stack implementation for user-friendly web applications
          </li>
        </ul>

        <div className="mt-5">
          <h1 className='font-bold'>Technology</h1>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 mt-3 gap-2 text-[#0077B6]">
            <p data-aos="flip-down" data-aos-duration="4000" className="text-center border hover:cursor-pointer hover:bg-[#0077B6] hover:text-white rounded-lg border-[#0077B6] px-2 py-1 ">
              React JS
            </p>
            <p data-aos="flip-down" data-aos-duration="4000" className="text-center border hover:cursor-pointer hover:bg-[#0077B6] hover:text-white rounded-lg border-[#0077B6] px-2 py-1 ">
              MongoDB
            </p>
            <p data-aos="flip-down" data-aos-duration="4000" className="text-center border hover:cursor-pointer hover:bg-[#0077B6] hover:text-white rounded-lg border-[#0077B6] px-2 py-1 ">
              Firebase
            </p>
            <p data-aos="flip-down" data-aos-duration="4000" className="text-center border hover:cursor-pointer hover:bg-[#0077B6] hover:text-white rounded-lg border-[#0077B6] px-2 py-1 ">
              {" "}
              Tailwind CSS
            </p>
            <p data-aos="flip-down" data-aos-duration="4000" className="text-center border hover:cursor-pointer hover:bg-[#0077B6] hover:text-white rounded-lg border-[#0077B6] px-2 py-1 ">
              NodeJS
            </p>
          </div>
        </div>
        <div className='mt-10 flex flex-col md:flex-row justify-between items-center gap-5'>
            <div>
                <a href="https://sunshinecity-hotelbooking.netlify.app">
                <button className='flex justify-center items-center gap-3 bg-gradient-to-r from-[#0077B6] to-blue-500 hover:from-blue-950 hover:to-blue-800 text-white px-5 py-3 rounded-lg'>Live Site<MdLiveTv className='text-2xl' /></button>
                </a>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
            <a href="https://github.com/sharearahammed/hotel-booking-client.git">
            <button className='flex justify-center items-center gap-3 bg-gradient-to-r from-[#0077B6] to-blue-500 hover:from-blue-950 hover:to-blue-800 text-white px-5 py-3 rounded-lg'>Client Site Code <LuFileCode className='text-2xl' /></button>
            </a>
            <a href="https://github.com/sharearahammed/hotel-booking-server">
            <button className='flex justify-center items-center gap-3 bg-gradient-to-r from-[#0077B6] to-blue-500 hover:from-blue-950 hover:to-blue-800 text-white px-5 py-3 rounded-lg'>Server Site Code <LuFileCode className='text-2xl' /></button>
            </a>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProjectTwo;
