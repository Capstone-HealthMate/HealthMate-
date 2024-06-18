// eslint-disable-next-line no-unused-vars
import React from "react";
import icon from "./../../assets/images/icon.png";
import facebook from "./../../assets/images/facebook.png";
import twitter from "./../../assets/images/twitter.png";
import linkedin from "./../../assets/images/linkedin.png";
import instagram from "./../../assets/images/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 text-left">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <img src={icon} alt="Logo" className="w-8 h-8" />
            <span className="text-2xl font-bold">HealthMate</span>
          </div>
          <p className="max-w-xs">
            Solusi Lengkap untuk Kesehatan Anda. Pantau, Pelajari, dan
            Diskusikan Semua di Satu Tempat!
          </p>
          <div className="">
            <span className="font-semibold">SOCIAL MEDIA</span>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-gray-400">
                <img src={facebook} alt="Facebook" className="w-8 h-6" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <img src={twitter} alt="Twitter" className="w-8 h-6" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <img src={linkedin} alt="LinkedIn" className="w-8 h-6" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <img src={instagram} alt="Instagram" className="w-8 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4 ">
          <span className="font-semibold">PAGES</span>
          <a href="#" className="hover:text-gray-400">
            Home page
          </a>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Pricing
          </a>
          <a href="#" className="hover:text-gray-400">
            Features
          </a>
          <a href="#" className="hover:text-gray-400">
            Integration
          </a>
        </div>

        <div className="flex flex-col space-y-4 ">
          <span className="font-semibold">UTILITY PAGES</span>
          <a href="#" className="hover:text-gray-400">
            Style guide
          </a>
          <a href="#" className="hover:text-gray-400">
            Log in
          </a>
          <a href="#" className="hover:text-gray-400">
            Register
          </a>
          <a href="#" className="hover:text-gray-400">
            404 not found
          </a>
        </div>

        <div className="flex flex-col space-y-4">
          <span className="font-semibold">SUBSCRIBE TO OUR NEWSLETTER</span>
          <span>Only valuable resource</span>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="bg-gray-800 text-white px-4 py-2 rounded-l-full focus:outline-none"
            />
            <button className="bg-white text-gray-900 px-4 py-2 rounded-r-full hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 15.293a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <span>© All rights reserved by Blocks</span>
      </div>
    </footer>
  );
};

export default Footer;
