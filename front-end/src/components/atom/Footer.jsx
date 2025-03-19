// eslint-disable-next-line no-unused-vars
import React from "react";
import icon from "./../../assets/images/icon.png";
import facebook from "./../../assets/images/facebook.png";
import twitter from "./../../assets/images/twitter.png";
import linkedin from "./../../assets/images/linkedin.png";
import instagram from "./../../assets/images/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 text-left mt-auto w-full">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand and Social Media */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img src={icon} alt="Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold">HealthMate</span>
          </div>
          <p className="text-gray-400 text-sm">
            Solusi Lengkap untuk Kesehatan Anda. Pantau, Pelajari, dan
            Diskusikan Semua di Satu Tempat!
          </p>
          <div>
            <span className="font-semibold">Follow Us</span>
            <div className="flex space-x-3 mt-2">
              {[facebook, twitter, linkedin, instagram].map((icon, index) => (
                <a key={index} href="#" className="hover:opacity-75">
                  <img src={icon} alt="Social Media" className="w-10" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="space-y-3">
          <span className="font-semibold">Pages</span>
          {["Home Page", "About", "Pricing", "Features", "Integration"].map(
            (page, index) => (
              <a
                key={index}
                href="#"
                className="block text-gray-400 hover:text-white text-sm"
              >
                {page}
              </a>
            )
          )}
        </div>

        <div className="space-y-3">
          <span className="font-semibold">Utility Pages</span>
          {["Style Guide", "Log in", "Register", "404 Not Found"].map(
            (page, index) => (
              <a
                key={index}
                href="#"
                className="block text-gray-400 hover:text-white text-sm"
              >
                {page}
              </a>
            )
          )}
        </div>

        {/* Newsletter Subscription */}
        <div className="space-y-3">
          <span className="font-semibold">Subscribe to Our Newsletter</span>
          <p className="text-gray-400 text-sm">
            Stay updated with our latest news
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="bg-gray-800 text-white px-4 py-2 rounded-l-full focus:outline-none w-full"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-full hover:bg-blue-500">
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
      <div className="text-center mt-12 text-gray-500 text-sm">
        <span>© {new Date().getFullYear()} All rights reserved by Blocks</span>
      </div>
    </footer>
  );
};

export default Footer;
