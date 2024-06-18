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
    <div>
      <div className="navbar lg:px-8 px-4 bg-slate-950 text-white ">
        <div className="navbar-start">
      
          <div className="flex items-center space-x-2">
            <img src={icon} alt="Logo" className="w-7" />
            <span className="text-xl font-medium text-white">HealthMate</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              {" "}
              <Link to="#" className="hover:text-gray-300">
                Calculator
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/article" className="hover:text-gray-300">
                Article
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/disscus" className="hover:text-gray-300">
                Disscus
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="dropdown relative">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-44 absolute right-0 text-black">
              <li>
                {" "}
                <Link to="#" className="hover:text-gray-300">
                  Calculator
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/about" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/article" className="hover:text-gray-300">
                  Article
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/disscus" className="hover:text-gray-300">
                  Disscus
                </Link>
              </li>
              <li className="space-y-2">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="btn bg-red-500 text-white rounded-full hover:bg-red-600">
                    Logout
                  </button>
                ) : (
                  <>
                  
                    <Link
                      to="/register"
                      className="btn bg-blue-300 text-gray-900 hover:bg-blue-400">
                      Sign Up
                    </Link>
                    <Link
                      to="/login"
                      className="btn bg-white text-gray-900  hover:bg-gray-200">
                      Login
                    </Link>


                  </>
                )}
              </li>
            </ul>
          </div>

          <div className="space-x-4 hidden lg:flex">
            {user ? (
              <button
                onClick={handleLogout}
                className="btn bg-red-500 text-white rounded-full hover:bg-red-600">
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/register"
                  className="btn bg-blue-300 text-gray-900 hover:bg-blue-400">
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="btn bg-white text-gray-900  hover:bg-gray-200">
                  Login
                </Link>

                
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
