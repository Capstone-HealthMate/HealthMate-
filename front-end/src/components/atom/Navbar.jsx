import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import icon from "./../../assets/images/icon.png";
import baseUrl from "../../utils/config";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const auth = async () => {
    try {
      const response = await fetch(`${baseUrl}/auth`, {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const parsed = await response.json();
        if (parsed && parsed.user) {
          setUser(parsed.user);
        } else {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Failed to authenticate:", error);
      setUser(null);
    }
  };

  useEffect(() => {
    auth();
  }, []);

  const handleLogout = async () => {
    Cookies.remove("token");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="py-8">
      <nav className="bg-gray-900 shadow-md py-2 rounded-full max-w-screen-lg mx-auto">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={icon} alt="Logo" className="w-8 h-8" />
            <span className="text-2xl font-bold text-white">HealthMate</span>
          </div>
          <div className="hidden md:flex space-x-6 text-white">
            <Link to="/calculator" className="hover:text-gray-300">
              Calculator
            </Link>
            <Link to="/" className="hover:text-gray-300">
              About
            </Link>
            <Link to="/article" className="hover:text-gray-300">
              Article
            </Link>
            <Link to="/discuss" className="hover:text-gray-300">
              Discuss
            </Link>
            <Link to="#" className="hover:text-gray-300">
              Contact
            </Link>
          </div>
          <div className="flex space-x-4">
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/register"
                  className="bg-blue-300 text-gray-900 px-4 py-2 rounded-full hover:bg-blue-400"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-200"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
