
  import  { useState } from "react";

  const Announcements = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const announcements = [
      {
        id: 1,
        title: 'UIU CSE FEST 2025 Launched!',
        date: 'November 25, 2024',
        details: 'UIU CSE FEST 2025 is here!',
        link: 'https://csefest.uiu.ac.bd/',
      },
      {
        id: 2,
        title: 'Call for Campus Ambassadors!',
        date: 'December 11, 2024',
        details: `Be the face of one of the most exciting tech fests of the year! As a Campus Ambassador, you’ll represent UIU CSE FEST 2025, promote the event on your campus, and help recruit participants, teams, and volunteers.
  
        Who Can Apply?
        1. Students with strong communication and networking skills.
        2. Passionate about technology and event promotion.
        3. Dedicated and proactive individuals.
  
        **Apply Now**: Deadline: December 16, 2024.`,
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSfMzuLq-qpOv_pUSlrqTpVbXPIyKAnIHgxN0-oheUMFUq8-bA/viewform?fbclid=IwY2xjawHGqSlleHRuA2FlbQIxMAABHVmdd01B2lgbVxwaCz2eKuxeGjHxdzYJVOfqiBHqWw3b3Fr4B8GZZNxxug_aem_HmB5gyWTgWc-pWpmGizjfw',
      },
      {
        id: 3,
        title: 'UIU CSE Fest 2025: Registration Portal Now Open! ',
        date: 'December 13, 2024',
        details: `We are thrilled to announce that the registration portal is officially live!
        Get ready to dive into a world of innovation, technology, and competition as we bring you six exhilarating events, designed to challenge and inspire students from colleges and universities across the nation. Go to the events section to Register.`,
        link: ' ',
      },
      {
        id: 4,
        title: 'Complete Your Team Details Anytime with Saved Drafts! ',
        date: 'December 13, 2024',
        details: `After signing up for the team, you will receive an email with a link. You can use this link to fill out the rest of the information. You can either complete it immediately or return later to finish the form. Any information you enter will be saved as a draft on the page, so you can easily come back and edit or submit it later.`,
        link: ' ',
      },
      {
        id: 5,
        title: 'The registration deadline has been extended.',
        date: 'December 17, 2024',
        details: `We are pleased to announce the updated dates for the upcoming events:
  
        Project Showcase, IUPC, Blockchain Olympiad:
        Saturday, 28 December 2024
  
        ICT Olympiad, Line Follower Robot (LFR), Robo Soccer:
        Sunday, 5 January 2025
  
        Thank you for your continued enthusiasm and participation. We look forward to seeing you at the events!`,
        link: ' ',
      },
      {
        id: 6,
        title: 'Extended Registration Deadline for All Segments!',
        date: 'December 28, 2024',
        details: `The registration deadline for all segments has been extended to January 05, 2025. Don't miss this opportunity to participate. Register now and ensure your spot!`,
        link: ' ',
      },
      {
        id: 7,
        title: 'ICT Olympiad Deadline Extended!',
        date: 'January 02, 2025',
        details: 'The ICT Olympiad registration deadline is now January 10, 2025. Register now and ensure your spot!',
        link: ' ',
      },
      {
        id: 8,
        title: 'LFR (Line Following Robot), and Soccer Bot Registration Deadline Extended!',
        date: 'January 05, 2025',
        details: 'LFR (Line Following Robot), and Soccer Bot registration deadline is now January 10, 2025. Register now and ensure your spot!',
        link: ' ',
      },
      {
        id: 9,
        title: "Registration Closed for IUPC, Blockchain,and  Project Show",
        date: "January 07, 2025",
        details: "Registration for IUPC, Blockchain,and  Project Show is now closed.",
        link: ""
      }
      ,
      {
        id: 10,
        title: "Slot Distribution for UIU IUPC 2025",
        date: "January 10, 2025",
        details: "UIU CSE FEST 2025 proudly presents the slot distribution for UIU IUPC 2025, a premier programming event celebrating excellence and competition among universities nationwide. Distribution Details: The slot distribution is determined based on the performance of universities in national programming contests in Bangladesh during 2024 and 2025.\n\n🔹 Weightage:\nICPC performance: 1/3\nPerformance in the last six IUPCs: 2/3\n\n🔹 Point Calculation: Follows the methodology outlined in this repository: [Link: https://github.com/ir-rafio/IUPC-CGPA]\n\n🔹 Rating Function: Designed by MD Irfanur Rahman Rafio, Lecturer, CSE, UIU, and his collaborator Abdullah Abrar [Codeforces: https://codeforces.com/profile/lelbaba].\n\n🔹 Slot Allocation: The allocation ensures no negative correlation between the number of slots and the CGPA of any two universities unless a university registers fewer teams than its entitlement.\n\nLink - https://drive.google.com/file/d/1c_SNt1H1YkurzcUUDyPF9IyMhFVTbKTq/view?fbclid=IwZXh0bgNhZW0CMTAAAR2Hy84BEMFndOE8Y4e6BpzQU_E24drSPuZIUxjgXbcc6Q27V3aLqfPrj6s_aem_SVKKKaLC0ar2Qz9krrqNjg\n\nPlease refer to the attached document for a comprehensive breakdown of slot allocations for your university.",
        link: ""
      }
      
    ];
  
   
 
  const sortedAnnouncements = announcements.sort((a, b) => new Date(b.date) - new Date(a.date));

  const toggleDropdown = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const formatTextWithLinks = (text) => {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    return text.split(urlPattern).map((part, index) =>
      urlPattern.test(part) ? (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ff4701] hover:text-[#e64001] underline"
        >
          {part}
        </a>
      ) : (
        part
      )
    );
  };

  return (
    <div className="w-full px-4 md:px-10 mt-20 min-h-screen font-robert-regular" id="announcements">
      <div className="text-start">
        <h1 className="font-general text-xs mb-3">UIU CSE FEST 2025</h1>
        <h1 className="bento-title special-font text-3xl md:text-4xl">Announcements</h1>
      </div>
  
      <div className="mt-6 space-y-4 h-[60vh] md:h-[70vh] overflow-y-auto rounded-lg p-4 bg-gray-50 border custom-scrollbar">
        {sortedAnnouncements.map((announcement, index) => (
          <div
            key={announcement.id}
            className="p-3 bg-white rounded-lg shadow hover:shadow-lg transition-all border border-transparent hover:border-[#ff4701]"
          >
            <div className="flex flex-col md:flex-row space-y-2 justify-between items-center cursor-pointer" onClick={() => toggleDropdown(index)}>
              <h1 className="font-robert-medium uppercase text-sm text-black">{announcement.title}</h1>
              <h1 className="text-xs text-gray-500">{announcement.date}</h1>
            </div>
  
            <div
              className={`transition-all overflow-hidden ${activeIndex === index ? 'mt-3' : 'max-h-0'} bg-gray-100 border-l-4 border-[#ff4701] rounded`}
            >
              {activeIndex === index && (
                <div className="p-3">
                  <p className="text-sm text-gray-600 whitespace-pre-wrap break-words">
                    {formatTextWithLinks(announcement.details)}
                  </p>
                  {announcement.link && (
                    <a
                      href={announcement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ff4701] hover:text-[#e64001] text-sm underline mt-2 block"
                    >
                      Learn More
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  
  
  
};


export default Announcements;