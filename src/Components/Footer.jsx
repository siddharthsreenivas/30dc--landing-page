import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  return (
    <div className="flex flex-col items-center gap-8 px-4 md:px-10 lg:px-11 xl:px-14 py-8 mb-4 md:flex-row justify-between">
      <Link to='#' smooth>
        <div>
          <img src="/images/logo.svg" alt="" />
        </div>
      </Link>

      <div className="flex gap-5 md:order-1">
        <img
          src="images/icon-twitter.svg"
          className="grayscale hover:grayscale-0 hover:cursor-pointer ring-1 ring-inset ring-transparent hover:ring-primary-200 rounded-full p-2 hover:bg-primary-50 transition-all duration-150"
          alt=""
        />
        <img
          src="images/icon-youtube.svg"
          className="grayscale hover:grayscale-0 hover:cursor-pointer ring-1 ring-inset ring-transparent hover:ring-primary-200 rounded-full p-2 hover:bg-primary-50 transition-all duration-150"
          alt=""
        />
        <img
          src="images/icon-linkedin.svg"
          className="grayscale hover:grayscale-0 hover:cursor-pointer ring-1 ring-inset ring-transparent hover:ring-primary-200 rounded-full px-2 hover:bg-primary-50 transition-all duration-150"
          alt=""
        />
        <img
          src="images/icon-instagram.svg"
          className="grayscale hover:grayscale-0 hover:cursor-pointer ring-1 ring-inset ring-transparent hover:ring-primary-200 rounded-full p-2 hover:bg-primary-50 transition-all duration-150"
          alt=""
        />
      </div>

      <div>
        <p className="text-gray-600 text-base">2023 © DSA revision</p>
      </div>
    </div>
  );
}

export default Footer;
