

const Organizers = () => {
  return (
    <div className="w-full pt-20 grid justify-center items-center bg-black text-blue-50 p-6 pb-40">
      {/* Title Section */}
      <h1 className="font-general text-xs sm:text-sm md:text-xs lg:text-xs text-center">
        UIU CSE FEST 2025
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


      {/* Sponsors */}
      <div className='mt-32'>
        <div>
          <h1 className="font-general text-xs sm:text-sm md:text-xs lg:text-xs text-center">
            UIU CSE FEST 2025
          </h1>
          <h1 className="bento-title special-font text-4xl sm:text-2xl md:text-3xl lg:text-4xl text-center mt-2">
            <b>E</b>vent <b>S</b>ponsors
          </h1>
        </div>
      {/* Organized By Section */}
      <div className="mt-12 text-center">
        <h1 className="text-xs sm:text-sm md:text-smn lg:text-xs">
          Silver Sponsor
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-5 mt-4">
          <img src="img/southeastbank.png" className="w-16 sm:w-28 md:w-32 lg:w-32 opacity-90" alt="Southeast Bank" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5 mt-8 ">
          <img src="img/therap.png" className="w-16 sm:w-28 md:w-32 lg:w-32 opacity-90" alt="Therap BD Ltd" />
        </div>
       
      </div>

      </div>
      {/* media partner section */}
      <div className='mt-32'>
        <div>
          <h1 className="font-general text-xs sm:text-sm md:text-xs lg:text-xs text-center">
            UIU CSE FEST 2025
          </h1>
          <h1 className="bento-title special-font text-4xl sm:text-2xl md:text-3xl lg:text-4xl text-center mt-2">
            <b>E</b>vent <b>M</b>edia Partner
          </h1>
        </div>
      {/* Organized By Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
          <img src="img/jamuna.png" className=" w-28 lg:w-36" alt="Jamuna " />
          <img src="img/dailyCampus.png" className=" w-28 lg:w-36" alt="daily Campus" />
          <img src="img/bonikBarta.png" className="  w-28 lg:w-36" alt="bonik Barta " />
        </div>

      </div>
      {/* photography and promotion partner section */}
      <div className='mt-32'>
        <div>
          <h1 className="font-general text-xs sm:text-sm md:text-xs lg:text-xs text-center">
            UIU CSE FEST 2025
          </h1>
          <h1 className="bento-title special-font  text-xl md:text-3xl lg:text-4xl text-center mt-2">
            <b>E</b>vent <b>P</b>hotography and Promotion Partner
          </h1>
        </div>
      {/* Organized By Section */}
      <div className="flex flex-wrap justify-center items-center gap-5 mt-4">
          <img src="img/uiuPC.png" className="w-16  md:w-28 opacity-90" alt="UIU Photography club" />
        </div>

      </div>
    </div>



    
    
    
  );
};

export default Organizers;
