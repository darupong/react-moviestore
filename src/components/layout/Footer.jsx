import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white  shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col justify-center">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center">
            Copyright © 2023 - All right reserved by Darupong Chouypu
          </span>
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center">
            Powered by React and Deploy by Vercel
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
