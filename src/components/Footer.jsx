import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
  // get date
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <div className="bg-[#06060a] h-[100px] flex gap-3 md:gap-20 justify-center overflow-x-auto items-center px-10 py-2 md:px-[100px]">
      <div className="flex items-center gap-3">
        <h1>ZEROPREPS</h1>
        <h1>&copy; </h1>
        <h1>{year}</h1>
      </div>

      <div className="flex gap-2">

      <a href="https://t.me/zeropreps" target="_blank">
        <button className="bg-blue-500 flex items-center hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          <FaTelegramPlane className="inline-block mr-2" />
          <p className="hidden md:flex">
            Chat on Telegram
          </p>
        </button>
      </a>
      <a target="_blank" href="https://wa.me/+1 (304) 996-3137">
        <button className="bg-green-500 flex items-center hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          <FaWhatsapp className="flex mr-2" />
          <p className=" hidden md:flex">
            Chat on WhatsApp
          </p>
        </button>
      </a>
      </div>
    </div>
  );
}

export default Footer;
