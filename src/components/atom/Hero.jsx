// eslint-disable-next-line no-unused-vars
import React from "react";
import TextHeader from "./TextHeader";

const Hero = () => {
  return (
    <div className="py-2 lg:px-16 px-3">
      <div className="bg-gradient-to-b from-white to-blue-100 rounded-3xl text-center lg:py-12 py-4 px-4">
        <div className="container mx-auto  flex flex-col justify-center items-center leading-relaxed lg:max-w-3xl">
          <div className="bg-white text-sm text-gray-700 lg:py-2 px-4 rounded-full inline-block lg:mb-4 ">
            Comprehensive Health Solutions at Your Fingertips
          </div>
          <TextHeader>
            Get To Know Your Health Journey with Healthmate
          </TextHeader>
          <div className="w-full lg:max-w-xl">
            <p className="lg:text-lg md:text-xl text-sm text-gray-700 lg:mb-8 mb-6">
              Solusi Lengkap untuk Kesehatan Anda. Pantau, Pelajari, dan
              Diskusikan Semua di Satu Tempat!
            </p>
          </div>
          <button type="submit" className="btn btn-secondary  font-medium">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
