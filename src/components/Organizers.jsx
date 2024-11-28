import React from 'react';

const Organizers = () => {
  return (
    <div className="w-full pt-20 grid justify-center items-center bg-black text-blue-50 p-6 pb-40">
      {/* Title Section */}
      <h1 className="font-general text-xs sm:text-sm md:text-xs lg:text-xs text-center">
        UIU CSE FEST
      </h1>
      <h1 className="bento-title special-font text-4xl sm:text-2xl md:text-3xl lg:text-4xl text-center mt-2">
        <b>E</b>vent <b>O</b>rganizers
      </h1>

      {/* Organized By Section */}
      <div className="mt-12 text-center">
        <h1 className="text-xs sm:text-sm md:text-smn lg:text-xs">
          Organized By
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-5 mt-4">
          <img src="img/Logo-02.png" className="w-20 sm:w-32 md:w-40 lg:w-48" alt="Logo 1" />
          <img src="img/Logo-04.png" className="w-20 sm:w-32 md:w-40 lg:w-48" alt="Logo 2" />
        </div>
      </div>

      {/* Powered By Section */}
      <div className="mt-10 text-center">
        <h1 className="text-xs sm:text-sm md:text-smn lg:text-xs">
          Powered By
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
          <img src="img/1.png" className="w-12 sm:w-16 md:w-20 lg:w-24" alt="Power Logo 1" />
          <img src="img/2.png" className="w-12 sm:w-16 md:w-20 lg:w-24" alt="Power Logo 2" />
          <img src="img/3.png" className="w-12 sm:w-16 md:w-20 lg:w-24" alt="Power Logo 3" />
        </div>
      </div>
    </div>
  );
};

export default Organizers;
