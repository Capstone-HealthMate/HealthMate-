import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import icon from "./../../assets/images/icon.png";
import baseUrl from "../../utils/config";

export default function Navbar2() {
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
    <header className="relative py-2 md:py-4 bg-white shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={icon} alt="Logo" className="w-8 h-8" />
            <span className="text-lg font-semibold text-gray-900">
              HealthMate
            </span>
          </Link>

          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link
              to="/"
              className="text-base font-medium text-gray-900 hover:text-opacity-50"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-base font-medium text-gray-900 hover:text-opacity-50"
            >
              About
            </Link>
            <Link
              to="/article"
              className="text-base font-medium text-gray-900 hover:text-opacity-50"
            >
              Article
            </Link>
            <Link
              to="/discuss"
              className="text-base font-medium text-gray-900 hover:text-opacity-50"
            >
              Discuss
            </Link>
          </nav>

          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {user ? (
              <button
                onClick={handleLogout}
                className="px-5 py-2 text-base font-semibold text-white bg-red-500 rounded-xl hover:bg-red-600"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/register"
                  className="px-5 py-2 text-base font-semibold text-gray-900 border border-gray-900 rounded-xl hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="text-base font-medium text-gray-900 hover:text-opacity-50"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
