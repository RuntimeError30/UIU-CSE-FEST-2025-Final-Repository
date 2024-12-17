import { useEffect, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [showPromo, setShowPromo] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

 
  const handleButtonClick = () => {
    setIsPopupVisible(true);
    setTimeout(() => {
      setIsPopupVisible(false);
    }, 2000);

    // Button Click Animation
    gsap.to("#promo-button", {
      scale: 1.2, 
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        gsap.to("#promo-button", {
          scale: 1, 
          duration: 0.3,
          ease: "power2.out",
        });

       
        setIsTransitioning(true);

       
        setTimeout(() => {
          setShowPromo(true);
        }, 500);
      },
    });
  };

  const handleVideoEnd = () => {
   
    gsap.to("#promo-video", {
      opacity: 0,
      scale: 1.1,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        setShowPromo(false); 
        setIsTransitioning(false); 
      },
    });
  };

  const handleClosePromo = () => {
    setShowPromo(false);
    setIsTransitioning(false);
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

  useEffect(() => {
    if (showPromo) {
      
      gsap.to("#promo-video", {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, [showPromo]);

  return (
    <div className="relative h-screen w-screen overflow-x-hidden">
      {/* Hero Section */}
      <div
        className={`relative z-10 h-full w-full overflow-hidden rounded-lg bg-white transition-all duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
        id="video-frame"
      >
        <div className="size-full flex justify-center items-center">
          <img
            src="/img/festImg.png"
            className="absolute w-[80%] opacity-90 object-cover"
            alt="Hero Image"
          />
          {/* Placeholder image (e.g., logo or animated component) */}
          {/* <img
            src="img/retrpc.png"
            className="absolute w-20 sm:w-20 md:w-48 lg:w-56 xl:w-72 animate-float"
            alt="Logo"
          /> */}
          {/* Button */}
          <div className="absolute bottom-20 w-full flex justify-center">
            <button
              id="promo-button"
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
          {/* <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-xs font-bold font-general text-gray-800">PROMO WILL BE LAUNCH SOON</h2>
          </div> */}
        </div>
      )}

    
    
{/* Promo Video */}
{showPromo && (
  <div
    id="promo-video"
    className="absolute inset-0 flex justify-center items-center bg-black z-40"
  >
    {/* Aspect Ratio Wrapper for Small Screens */}
    <div
      className="relative w-full max-w-[100%] h-0 pt-[56.25%] md:w-full md:h-full lg:h-screen"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        onEnded={handleVideoEnd}
      >
        <source src="/videos/promo.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    {/* Close Button */}
    <button
      onClick={handleClosePromo}
      className="absolute top-20 right-8 text-white text-2xl font-bold bg-black bg-opacity-60 rounded-full px-3 py-1 hover:bg-opacity-80"
    >
      X
    </button>
  </div>
)}


    </div>
  );
};

export default Hero;
