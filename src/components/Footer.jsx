import React from 'react';

export const Footer = () => {
  return (
    <div className="bg-[#ff4701] flex flex-col items-center justify-center text-white py-10">
      {/* Footer Top Section */}
      <img
        src="/img/f1.png"
        alt="Footer Decoration"
        className="w-40 sm:w-48 md:w-60 lg:w-72 mb-6"
      />

      {/* Logo and Address Section */}
      <div className="w-full text-center px-6 sm:px-12 md:px-24">
        <img
          src="img/Logo-02.png"
          alt="UIU Logo"
          className="w-40 sm:w-48 md:w-56 mx-auto mb-4"
        />
        <div className="text-sm sm:text-base md:text-lg leading-6">
          <p>
            United City, Madani Avenue, <br />
            Badda, Dhaka - 1212, Bangladesh. <br />
            Tel: +88 09604 UIU UIU (848 848) <br />
            Web:{" "}
            <a
              href="https://www.uiu.ac.bd"
              className="underline hover:text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.uiu.ac.bd
            </a>
            , Email:{" "}
            <a
              href="mailto:info@uiu.ac.bd"
              className="underline hover:text-black"
            >
              info@uiu.ac.bd
            </a>
          </p>
        </div>
      </div>

      {/* Social Media Links Section */}
      <div className="flex space-x-4 mt-8">
        <a
          href="https://www.facebook.com/profile.php?id=61569420809397"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform"
        >
          <img
            src="/img/fb.png"
            alt="Facebook"
            className="w-8 h-8"
          />
        </a>
 
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-6 text-sm sm:text-base">
        <p>&copy; 2025 UIU CSE FEST. All Rights Reserved.</p>
      </div>
    </div>
  );
};
