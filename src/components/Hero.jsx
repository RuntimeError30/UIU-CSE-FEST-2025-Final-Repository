import React, { useEffect, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ComputerCanvas from "./canvas/Computer";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Show pop-up and auto-hide after 3 seconds
  const handleButtonClick = () => {
    setIsPopupVisible(true);
    setTimeout(() => {
      setIsPopupVisible(false);
    }, 2000);
  };

  useEffect(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
      border: "black",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-x-hidden">
      <div
        className="relative z-10 h-full w-full overflow-hidden rounded-lg bg-white"
        id="video-frame"
      >
        <div className="size-full flex justify-center items-center">
          <img
            src="/img/festImg.png"
            className="absolute w-[80%] opacity-90 object-cover"
            alt=""
          />
          {/* <ComputerCanvas /> */}
          <img 
  src="img/retrpc.png" 
  className="absolute w-20 sm:w-20 md:w-48 lg:w-56 xl:w-72 animate-float" 
  alt="" 
/>
          {/* Button */}
          <div className="absolute bottom-20">
            <button
              onClick={handleButtonClick}
              className="bg-[#ff4701] text-white flex items-center justify-center gap-2 px-4 py-2 rounded-full shadow-md hover:bg-[#e04201]"
            >
              <TiLocationArrow />
              Watch Promo
            </button>
          </div>
        </div>
      </div>

      {/* Pop-up */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-xs font-bold font-general text-gray-800">PROMO WILL BE LAUNCH SOON</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
