/* eslint-disable react/no-unescaped-entities */

import axios from "axios";
import toast from "react-hot-toast";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { MdEmail, MdOutlineMailOutline } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;
    const Contactinfo = {
      email,
      subject,
      message,
    };
    console.log("Contactinfo", Contactinfo);
    try {
      await axios
        .post("https://sharear-portfolio.vercel.app/contact", Contactinfo)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            console.log("-----------------------", res);
            toast.success("Email send Successfully!");
          }
        });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div
      id="contact"
      className="pt-24 md:mt-0 md:pt-28 mb-20 max-w-7xl mx-auto px-4"
    >
      {/* Header Section */}
      <div className="relative text-center mb-20" data-aos="fade-down">
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          <span className="bg-gradient-to-r from-[#0077B6] via-blue-600 to-cyan-600 dark:from-blue-400 dark:via-blue-300 dark:to-cyan-400 bg-clip-text text-transparent inline-block animate-gradient">
            Contact Me
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
          Any questions? Just email me!
        </p>

        {/* Decorative Line */}
        <div className="flex items-center justify-center mt-8 gap-4">
          <div className="h-1 w-16 bg-gradient-to-r from-transparent to-blue-500 rounded-full" />
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
          <div className="h-1 w-16 bg-gradient-to-l from-transparent to-blue-500 rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border rounded-lg bg-white dark:bg-slate-800">
        <div className="relative bg-[#0077B6] md:col-span-4 py-10 px-5 md:p-10 text-white rounded-lg">
          <p className="mt-4 text-[14px] md:text-xl sm:text-[16px] leading-7 font-regular uppercase">
            Contact Information
          </p>

          <div className="flex items-center mt-5">
            <svg
              className="h-6 mr-2 text-white"
              fill="currentColor"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 489.536 489.536"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              enableBackground="new 0 0 489.536 489.536"
            >
              <g>
                <g>
                  <path d="m488.554,476l-99-280.2c-1-4.2-5.2-7.3-9.4-7.3h-45.6c12.9-31.1 19.6-54.9 19.6-70.8 0-64.6-50-117.7-112.5-117.7-61.5,0-112.5,52.1-112.5,117.7 0,17.6 8.2,43.1 19.9,70.8h-39.7c-4.2,0-8.3,3.1-9.4,7.3l-99,280.2c-3.2,10.3 6.3,13.5 9.4,13.5h468.8c4.2,0.5 12.5-4.2 9.4-13.5zm-246.9-455.3c51,1.06581e-14 91.7,43.7 91.7,96.9 0,56.5-79.2,182.3-91.7,203.1-31.3-53.1-91.7-161.5-91.7-203.1 0-53.1 40.6-96.9 91.7-96.9zm-216.7,448l91.7-259.4h41.7c29.9,64.1 83.3,151 83.3,151s81.4-145.7 83.8-151h47.4l91.7,259.4h-439.6z" />
                  <rect width="136.5" x="177.054" y="379.1" height="20.8" />
                  <path d="m289.554,108.2c0-26-21.9-47.9-47.9-47.9s-47.9,21.9-47.9,47.9 20.8,47.9 47.9,47.9c27.1,0 47.9-21.8 47.9-47.9zm-75-1c0-14.6 11.5-27.1 27.1-27.1s27.1,12.5 27.1,27.1-11.5,27.1-27.1,27.1c-14.6,2.84217e-14-27.1-12.5-27.1-27.1z" />
                </g>
              </g>
            </svg>
            <span className="text-[12px] sm:text-sm">
              1701 BARI Rd., Gazipur, Dhaka
            </span>
          </div>
          <div className="flex items-center mt-5">
            <svg
              className="h-6 mr-2 text-white"
              fill="currentColor"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 60.002 60.002"
              style={{ enableBackground: "new 0 0 60.002 60.002" }}
              xmlSpace="preserve"
            >
              <g>
                <path d="M59.002,37.992c-3.69,0-6.693-3.003-6.693-6.693c0-0.553-0.447-1-1-1s-1,0.447-1,1c0,4.794,3.899,8.693,8.693,8.693 c0.553,0,1-0.447,1-1S59.554,37.992,59.002,37.992z" />
                <path d="M58.256,35.65c0.553,0,1-0.447,1-1s-0.447-1-1-1c-0.886,0-1.605-0.72-1.605-1.605c0-0.553-0.447-1-1-1s-1,0.447-1,1 C54.65,34.033,56.267,35.65,58.256,35.65z" />
                <path d="M20.002,2.992c3.691,0,6.693,3.003,6.693,6.693c0,0.553,0.448,1,1,1s1-0.447,1-1c0-4.794-3.9-8.693-8.693-8.693 c-0.552,0-1,0.447-1,1S19.449,2.992,20.002,2.992z" />
                <path d="M19.748,6.334c0,0.553,0.448,1,1,1c0.885,0,1.604,0.72,1.604,1.605c0,0.553,0.448,1,1,1s1-0.447,1-1 c0-1.988-1.617-3.605-3.604-3.605C20.196,5.334,19.748,5.781,19.748,6.334z" />
                <path d="M44.076,37.889c-1.276-0.728-2.597-0.958-3.721-0.646c-0.844,0.234-1.532,0.768-1.996,1.546 c-1.02,1.22-2.286,2.646-2.592,2.867c-2.367,1.604-4.25,1.415-6.294-0.629L17.987,29.542c-2.045-2.045-2.233-3.928-0.629-6.294 c0.221-0.306,1.647-1.572,2.867-2.592c0.778-0.465,1.312-1.152,1.546-1.996c0.313-1.125,0.082-2.446-0.646-3.721l-5.421-9.504 c-1.018-1.783-2.923-2.819-4.886-2.645L6.288,2.44c-1.129,0.105-2.153,0.631-2.878,1.462c-1.504,1.669-3.421,4.514-2.248,8.614 c1.883,6.82,6.693,13.394,14.515,21.215c7.822,7.822,14.396,12.633,21.215,14.515c4.101,1.135,6.946-0.744,8.614-2.248 c0.831-0.725,1.357-1.749,1.462-2.878l0.078-0.762c0.174-1.963-0.862-3.868-2.645-4.886L44.076,37.889z M46.469,49.998 c-0.042,0.414-0.252,0.982-0.764,1.474c-1.249,1.171-3.226,2.315-6.827,1.169c-6.658-1.842-12.935-6.484-20.426-13.975 c-7.492-7.492-12.134-13.769-13.975-20.426c-1.146-4.27,0.479-6.117,1.169-6.827c0.492-0.512,1.06-0.722,1.474-0.764l0.754-0.078 c1.197-0.125,2.372,0.646,2.926,1.618l5.421,9.504c0.451,0.792,0.585,1.648,0.385,2.409c-0.149,0.536-0.489,0.994-1.122,1.404 c-1.351,0.907-2.947,2.296-3.344,2.873c-2.517,3.486-1.993,6.99,1.646,10.628l11.045,11.045c2.91,2.91,5.626,4.381,8.083,4.381 c1.865,0,3.594-0.678,4.901-2.026c0.576-0.576,1.966-1.993,2.873-3.344c0.41-0.632,0.869-0.972,1.404-1.122 c0.761-0.2,1.617-0.065,2.409,0.385l9.504,5.421C46.071,47.626,46.194,48.801,46.469,49.998z" />
              </g>
            </svg>
            <span className="text-[12px] sm:text-sm">+880 1876523323</span>
          </div>
          <div className="flex items-center gap-4 mt-5">
            <p className="text-[18px] sm:text-xl">
              <MdOutlineMailOutline />
            </p>
            <span className="text-[12px] sm:text-sm">
              sharearahammed@gmail.com
            </span>
          </div>
          <div className="flex mt-[200px] text-[10px] sm:text-xl md:text-2xl lg:text-3xl">
            <motion.div
              className="rounded-full mr-3 md:mr-5"
              animate={{ y: [0, 3, 6, 3, 0, -3, -6, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <a
                href="https://www.facebook.com/Sharear.Ahammed.10"
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-md shadow-[#97a1db] hover:text-white transition rounded-full hover:cursor-pointer"
              >
                <p className="duration-500 hover:scale-105 border hover:shadow-lg hover:shadow-black rounded-full p-3">
                  <FaFacebook />
                </p>
              </a>
            </motion.div>

            <motion.div
              className="rounded-full mr-3 md:mr-5"
              animate={{ y: [0, 3, 6, 3, 0, -3, -6, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <a
                href="https://www.linkedin.com/in/sharear-ahammed-nihal-27899b354"
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-md shadow-[#97a1db] hover:text-white transition rounded-full hover:cursor-pointer"
              >
                <p className="duration-500 hover:scale-105 border hover:shadow-lg hover:shadow-black rounded-full p-3">
                  <GrLinkedin />
                </p>
              </a>
            </motion.div>

            <div>
              <img
                className="h-[170px] md:h-[120px] lg:h-[250px] absolute top-[325px] -right-3 md:top-[450px] md:-right-2 lg:top-[320px] lg:-right-0"
                src="/painting.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-8 px-5 pt-10 sm:pt-10 pb-5 sm:p-10">
          <form onSubmit={handleSubmit}>
            <div className="rounded-lg">
              <div className="flex justify-center items-center gap-3">
                <p className="text-xl">
                  <MdEmail />
                </p>
                <h1 className="text-[16px] md:text-xl font-bold">
                  Send an Email
                </h1>
              </div>
              <p className="mt-5">Email</p>
              <input
                className="w-full  p-3 bg-white border dark:text-black border-[#0077B6] rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <p className="mt-5">Subject</p>
              <input
                className="w-full p-3 bg-white border dark:text-black border-[#0077B6] rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
                type="text"
                name="subject"
                placeholder="Enter Subject"
                required
              />
              <p className="mt-5">Message</p>
              <textarea
                className="w-full p-3 bg-white border dark:text-black border-[#0077B6] rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
                rows="6"
                name="message"
                placeholder="Enter Message"
                required
              ></textarea>
              <div className="mt-5 sm:flex sm:justify-end">
                <button className="w-full sm:w-[25%] md:w-[150px] px-8 py-3 text-lg font-semibold bg-gradient-to-r from-[#0077B6] to-blue-500 hover:from-blue-950 hover:to-blue-800 text-white rounded-lg">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
