// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import baseUrl from "../../utils/config";

const MainArticle = ({ title, content, image }) => {
  return (
    <div className="flex items-center justify-center bg-white-100 py-10">
      <div className="max-w-6xl mx-auto bg-white">
        <div className="flex flex-col md:flex-row text-left">
          <div className="md:w-1/2 p-4">
            <h1 className="text-black-600 text-4xl font-bold">
              Selamat datang di HealthMate!
            </h1>
          </div>
          <div className="md:w-1/2 p-4">
            <p className="text-gray-700 text-lg">
              Jelajahi berbagai resep sehat, kalkulator nutrisi, dan tips
              kesehatan untuk mendukung gaya hidup sehat Anda. Temukan inspirasi
              kuliner yang lezat dan menyehatkan di sini. <br /> Yuk,
              <Link to="/login" className="text-blue-500 underline">
                Login
              </Link>{" "}
              untuk bisa menambahkan artikel.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8">
            <img
              src={`${baseUrl}/uploads/${image}`}
              alt="Article Cover"
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 p-4 flex flex-col justify-center text-justify">
            <h2 className="text-3xl font-bold text-black-600 mb-4">{title}</h2>
            <p className="text-gray-700 text-lg">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainArticle;
