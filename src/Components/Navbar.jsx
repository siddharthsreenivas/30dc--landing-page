import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="flex justify-between px-2 md:px-4 lg:px-8 py-2 lg:py-4 items-center sticky top-0 bg-white z-50 inset-x-0 bg-white/60 backdrop-blur-lg">
      <Link to="#" smooth>
        <div>
          <img src="/images/logo.svg" alt="" />
        </div>
      </Link>

      <div className="hidden md:flex bg-gray-100 px-1 py-1 rounded-3xl text-gray-500 font-semibold text-sm">
        <Link to="#" smooth>
          <div className="px-3 hover:bg-white hover:cursor-pointer rounded-3xl py-2 transition-all duration-200">
            Home
          </div>
        </Link>

        <Link to="#pricing" smooth>
          <div className="px-3 hover:bg-white hover:cursor-pointer rounded-3xl py-2 transition-all duration-200">
            <Link to="#pricing" smooth>
              Pricing
            </Link>
          </div>
        </Link>

        <Link to="#features" smooth>
          <div className="px-3 hover:bg-white hover:cursor-pointer rounded-3xl py-2 transition-all duration-200">
            <Link to="#features" smooth>
              Features
            </Link>
          </div>
        </Link>

        <Link to="#testimonials" smooth>
          <div className="px-3 hover:bg-white hover:cursor-pointer rounded-3xl py-2 transition-all duration-200">
            <Link to="#testimonials" smooth>
              Testimonials
            </Link>
          </div>
        </Link>
      </div>

      <div>
        <button className="bg-primary-900 text-white px-3 md:px-5 rounded-full font-semibold py-3 hover:bg-primary-600 transition-all duration-200">
          Join Community
        </button>
      </div>
    </div>
  );
};

export default Navbar;
