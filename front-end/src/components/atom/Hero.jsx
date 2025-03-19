import React from "react";

const Hero = () => {
  return (
    <div className="overflow-x-hidden">
      <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <p className="inline-flex px-4 py-2 text-base text-gray-900 border border-gray-200 rounded-full">
              Comprehensive Health Solutions at Your Fingertips
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[50] text-gray-900 sm:text-5xl lg:text-6xl">
              Get To Know Your Health
           
            </h1>
            <h1 className="mt-5 text-4xl font-bold leading-[50] text-gray-900 sm:text-5xl lg:text-6xl">
              Journey with{" "}
              <span className="bg-gradient-to-r from-blue-500 via-blue-500 to-blue-400 text-transparent bg-clip-text ">Healthmate</span>
            </h1>
            <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600">
              Solusi Lengkap untuk Kesehatan Anda. Pantau, Pelajari, dan
              Diskusikan Semua di Satu Tempat!
            </p>
            <div className="relative inline-flex mt-10 group">
              <div className="absolute transition-all duration-1000 opacity-30 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#4454ff] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-50 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <a
                href="/about"
                className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-gray-900 rounded-xl hover:bg-opacity-90"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-12">
          <img
            className="object-cover object-top w-full h-auto mx-auto scale-150 2xl:max-w-screen-2xl xl:scale-100"
            src="./Hero.svg"
            alt="Healthmate Illustration"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
