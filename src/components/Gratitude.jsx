// import './gratitute.css';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TeamMember from '../components/TeamMember';
import { useEffect, useRef } from 'react';
// import Scrollbar from "smooth-scrollbar";
gsap.registerPlugin(ScrollTrigger);
const Gratitude = () => {
  const sections = useRef([]);
  //const smoothScrollContainer = useRef(null);

  // useEffect(() => {
    
  //   const scrollbar = Scrollbar.init(smoothScrollContainer.current, {
  //     damping: 0.08, 
  //     thumbMinSize: 20, 
  //     renderByPixels: true, 
  //     alwaysShowTracks: false,
  //   });

    
  //   ScrollTrigger.scrollerProxy(smoothScrollContainer.current, {
  //     scrollTop(value) {
  //       return arguments.length ? (scrollbar.scrollTop = value) : scrollbar.scrollTop;
  //     },
  //     getBoundingClientRect() {
  //       return {
  //         top: 0,
  //         left: 0,
  //         width: window.innerWidth,
  //         height: window.innerHeight,
  //       };
  //     },
  //     pinType: smoothScrollContainer.current.style.transform ? "transform" : "fixed",
  //   });

    
  //   ScrollTrigger.batch(sections.current, {
  //     scroller: smoothScrollContainer.current,
  //     start: "top 85%",
  //     onEnter: (batch) => {
  //       gsap.fromTo(
  //         batch,
  //         { opacity: 0, y: 10 }, 
  //         {
  //           opacity: 1,
  //           y: 0,
  //           duration: 1.5, 
  //           ease: "power2.out",
  //           stagger: 0.3,
  //         }
  //       );
  //     },
  //   });

    
  //   ScrollTrigger.addEventListener("refresh", () => scrollbar.update());
  //   ScrollTrigger.refresh();

   
  //   return () => {
  //     ScrollTrigger.removeEventListener("refresh", () => scrollbar.update());
  //     scrollbar.destroy();
  //   };
  // }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    ScrollTrigger.batch(sections.current, {
      onEnter: (batch) => {
        gsap.fromTo(
          batch,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power1.out",
            stagger: 0.2,
          }
        );
      },
      start: "top 85%",
    });
  }, []);
  
  return (
    //ref={smoothScrollContainer} style={{ height: "100vh", overflow: "hidden" }} 
    <div className="min-h-screen  bg-black text-white font-sans">
       
      <main className="container mx-auto px-4 py-12">
      
        <h1 className="font-zentry text-4xl md:text-5xl mt-10 font-bold text-center mb-4 text-orange-500">
          Meet Our Amazing Team
        </h1>
        <p className="font-robert-regular text-xl text-center mb-12 text-gray-300">
          The talented individuals behind UIU CSE FEST 2025&apos;s success
        </p>

        <section className="mb-16">
          <h2 className="font-zentry text-3xl font-bold text-center mb-8 text-orange-500">Organizing Committee</h2>

          <div className="mb-12">
            <h3 className="font-zentry text-3xl font-bold mb-6 text-center">Chief Patron</h3>
            <div ref={(el) => (sections.current[0] = el)} className="max-w-md mx-auto">
              <TeamMember
                name="Dr. Md. Abul Kashem Mia"
                link={`https://cse.uiu.ac.bd/faculty/abul-kashem/`}
                role="Vice Chancellor, United International University"
                imageSrc="/img/vc_sir.jpg"
              />
            </div>
          </div>

          <div className="mb-12">
            <h3 className="font-zentry text-3xl font-bold mb-6 text-center">Organizing Chairs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div ref={(el) => (sections.current[1] = el)}>
                <TeamMember
                  name="Dr. Mohammad Nurul Huda"
                  link={`https://cse.uiu.ac.bd/faculty/mnh/`}
                  role="Professor and Head, Dept of CSE, United International University"
                  imageSrc="/img/huda_sir.jpg"
                />
              </div>

              <div ref={(el) => (sections.current[2] = el)}>
                <TeamMember
                  name="Dr. Suman Ahmmed"
                  link={`https://cse.uiu.ac.bd/faculty/suman/`}
                  role="Associate Professor, Dept. of CSE & Director, CDIP, United International University"
                  imageSrc="/img/suman_sir.jpg"
                />
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="font-zentry text-3xl font-bold mb-6 text-center">Organizing Secretaries</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div ref={(el) => (sections.current[3] = el)}>
                <TeamMember
                  name="Mr. Md. Tarek Hasan"
                  link={`https://cse.uiu.ac.bd/faculty/tarek/`}
                  role="Lecturer, Dept of CSE, United International University"
                  imageSrc="/img/tarek_sir.jpg"
                />
              </div>
              <div ref={(el) => (sections.current[4] = el)}>
                <TeamMember
                  name="Mr. Raiyan Rahman"
                  link={`https://cse.uiu.ac.bd/faculty/rahman-raiyan/`}
                  role="Lecturer, Dept of CSE, United International University"
                  imageSrc="/img/raiyan_sir.jpeg"
                />
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="font-zentry text-3xl font-bold mb-6 text-center">Coordinators</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div ref={(el) => (sections.current[5] = el)}>
                <TeamMember
                  name="Shoib Ahmed Shourav"
                  link={`https://cse.uiu.ac.bd/faculty/shoib/`}
                  role="Lecturer, Dept of CSE, United International University"
                  subRole="Coordinator of ICT Olympiad and Project Showcasing"
                  imageSrc="/img/shoib_sir.jpg"
                />
              </div>
              <div ref={(el) => (sections.current[6] = el)}>
                <TeamMember
                  name="Fahim Hafiz"
                  link={`https://cse.uiu.ac.bd/faculty/hafiz-fahim/`}
                  role="Lecturer, Dept of CSE, United International University"
                  subRole="Coordinator of LFR & Robo Soccer, Treasurer, UIU CSE Fest 2025"
                  imageSrc="/img/fahim_sir.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className=" font-zentry text-3xl font-bold text-center mb-8 text-orange-500">Web Developers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div ref={(el) => (sections.current[7] = el)}>
              <TeamMember
                name="Mohammad Darain Khan"
                link={`https://github.com/RuntimeError30`}
                role="Technical Lead & Fullstack Developer"
                subRole="Vice President, UIU App Forum"
                imageSrc="/img/darain.jpg"
              />
            </div>
            <div ref={(el) => (sections.current[8] = el)}>
              <TeamMember
                name="Muddasir Faiyaj"
                link={`https://muddasir-faiyaj.web.app/`}
                role="Fullstack Developer"
                subRole="Associate-Software & Innovation, UIU App Forum"
                imageSrc="/img/faiyaj.jpg"
              />
            </div>
            <div ref={(el) => (sections.current[9] = el)}>
              <TeamMember
                name="Fatin Shadab"
                link={`https://github.com/FatinShadab`}
                role="Fullstack Developer"
                subRole="Head of Programming Wing, UIU Computer Club"
                imageSrc="/img/fatin.jpeg"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-zentry text-3xl font-bold text-center mb-8 text-orange-500">Graphics Designer</h2>
          <div ref={(el) => (sections.current[10] = el)} className="max-w-md mx-auto">
            <TeamMember
              name="A M Zayed Abdullah"
              link={`https://www.facebook.com/amzayed.abdullah`}
              role="Graphics Designer"
              subRole="Head of Graphics, UIU App Forum"
              imageSrc="/img/zayed.jpg"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-zentry text-3xl font-bold text-center mb-8 text-orange-500">Media and Communication Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div ref={(el) => (sections.current[11] = el)}>
              <TeamMember
                name="Abdullah Al Masud Bhuiyan"
                link={`https://www.facebook.com/staywithabdullah`}
                role="Media & Communication Lead"
                subRole="President, UIU App Forum"
                imageSrc="/img/masud.jpg"
              />
            </div>
            <div ref={(el) => (sections.current[12] = el)}>
              <TeamMember
                name="S.M. NAYEMUR RAHMAN"
                link={`https://www.facebook.com/TheAhaaGuy`}
                role="Media & Communication Member"
                subRole="Co-Head of PR, UIU App Forum"
                imageSrc="/img/nayeem.jpg"
              />
            </div>
            <div ref={(el) => (sections.current[13] = el)}>
              <TeamMember
                name="Samia Sayeed"
                link={`https://www.facebook.com/sayeedsamia00`}
                role="Media & Communication Member"
                subRole="Head of Media and Communication Department, UIU App Forum"
                imageSrc="/img/samia.jpg"
              />
            </div>

            <div ref={(el) => (sections.current[14] = el)}>
              <TeamMember
                name="Shudipto Das"
                link={`https://www.facebook.com/shudipto.das.98`}
                role="Media & Communication Member"
                subRole="General Secretary,UIU Computer Club"
                imageSrc="/img/shudipto.jpg"
              />
            </div>
            {/* <div ref={(el) => (sections.current[15] = el)}>
              <TeamMember
                name="S. M. Saraban Tohura"
                link={`www.linkedin.com/in/saraban-tohura`}
                role="Media & Communication Member"
                subRole="Secretary of PR, UIU Robotics Club"
                imageSrc="/img/sraban.jpg"
              />
            </div> */}
            
            {/* <div ref={(el) => (sections.current[17] = el)}>
              <TeamMember
                name="Faria Rakib Borsha"
                link={`https://www.facebook.com/faria.rakib.borsha`}
                role="Media & Communication Member"
                subRole="General Secretary, UIU Robotics Club"
                imageSrc="/img/borsha.jpg"
              />
            </div> */}

          </div>
        </section>
        <section className="mb-16">
          <h2 className="font-zentry text-3xl font-bold text-center mb-8 text-orange-500">Outreach and Engagement Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div ref={(el) => (sections.current[15] = el)}>
              <TeamMember
                name="Samiul Haque Rudra"
                link={`https://www.facebook.com/rudra.96824`}
                role="Outreach and Engagement Lead"
                subRole="President,UIU Computer Club"
                imageSrc="/img/samiul.jpg"
              />
            </div>
            <div ref={(el) => (sections.current[16] = el)}>
              <TeamMember
                name="Akash Kumar Podder"
                link={`https://www.facebook.com/akash.podder.9256`}
                role="Outreach and Engagement Member"
                subRole="Co-Head of Media & Communication, UIU App Forum"
                imageSrc="/img/akash.jpg"
              />
            </div>
            <div ref={(el) => (sections.current[17] = el)} >
              <TeamMember
                name="Md. Rashique Hamjah Chowdhury "
                link={`https://www.facebook.com/Meehal.BD`}
                role="Outreach and Engagement Member"
                subRole="Treasurer, UIU Robotics Club"
                imageSrc="/img/rashique.jpg"
              />
            </div>
            <div ref={(el) => (sections.current[18] = el)}>
              <TeamMember
                name="Md.Naimur Rahman"
                link={`https://www.facebook.com/mdnaimurrahman.navil?mibextid=ZbWKwL`}
                role="Outreach and Engagement Member"
                subRole="Head of R & D, Programing wing,UIU Computer Club"
                imageSrc="/img/naimur3.jpg"
              />
            </div>

           
            <div ref={(el) => (sections.current[19] = el)}>
              <TeamMember
                name="Ahmed Junaed"
                link={`https://www.facebook.com/ahamed.junaed.5?mibextid=ZbWKwL`}
                role="Outreach and Engagement Member"
                subRole="President, UIU Robotics Club"
                imageSrc="/img/junaed.jpg"
              />
            </div>
            <div ref={(el) => (sections.current[20] = el)}>
              <TeamMember
                name="Md. Tanvir Ahmed"
                link={`https://www.facebook.com/tanvirumanuiu`}
                role="Outreach and Engagement Member"
                subRole="Executive, UIU Robotics Club"
                imageSrc="/img/tanvir.jpg"
              />
            </div>

            <div ref={(el) => (sections.current[21] = el)}>
              <TeamMember
                name="Fahad Rahman"
                link={`https://www.facebook.com/fahad.ovi.64/`}
                role="Outreach and Engagement Member"
                subRole="Asst. General Secretary, UIU Robotics Club"
                imageSrc="/img/fahad.jpg"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gratitude;

