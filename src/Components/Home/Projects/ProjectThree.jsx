import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { MdLiveTv } from 'react-icons/md';
import { LuFileCode } from 'react-icons/lu';

const ProjectThree = () => {
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
          src="/Project3Collage1.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="lg:p-5 lg:h-[500px] lg:w-[700px]"
          src="/Project3Collage2.png"
        />
      </SwiperSlide>
      
    </Swiper>
      </div>
      <div className='mb-3'>
      <h1 data-aos="zoom-in-right" data-aos-duration="2000" className="mt-3 mb-2 lg:mb-5 font-bold lg:text-2xl inline-block transition duration-500 ease-in-out">
          3) Tourism Management 
        </h1>
        <p className='text-justify'>
        A responsive and user-friendly platform providing detailed information on tourist destinations across Southeast Asia, including Bangladesh, Thailand, Indonesia, Malaysia, and Vietnam. Features include emergency contact information, healthcare facilities, safety tips, and the ability to add and update tourist spots. Ensures a seamless user experience on all devices.
        </p>
      </div>
      <div className="relative lg:px-10 pb-16">
        <ul className="text-gray-500 text-sm list-disc">
          <li>
          Intuitive Interface & Responsive Design
          </li>
          <li>
          Comprehensive Destination Information & Emergency Assistance
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
                <a href="https://roamazing-tourism-management.netlify.app">
                <button className='flex justify-center items-center gap-3 bg-gradient-to-r from-[#0077B6] to-blue-500 hover:from-blue-950 hover:to-blue-800 text-white px-5 py-3 rounded-lg'>Live Site<MdLiveTv className='text-2xl' /></button>
                </a>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
            <a href="https://github.com/sharearahammed/tourism-management-client.git">
            <button className='flex justify-center items-center gap-3 bg-gradient-to-r from-[#0077B6] to-blue-500 hover:from-blue-950 hover:to-blue-800 text-white px-5 py-3 rounded-lg'>Client Site Code <LuFileCode className='text-2xl' /></button>
            </a>
            <a href="https://github.com/sharearahammed/tourism-management-server">
            <button className='flex justify-center items-center gap-3 bg-gradient-to-r from-[#0077B6] to-blue-500 hover:from-blue-950 hover:to-blue-800 text-white px-5 py-3 rounded-lg'>Server Site Code <LuFileCode className='text-2xl' /></button>
            </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectThree;
