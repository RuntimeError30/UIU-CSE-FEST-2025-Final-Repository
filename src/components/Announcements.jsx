import { useState } from "react";

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
      title: "Registration Closed for IUPC, Blockchain,and  Project Show",
      date: "January 07, 2025",
      details: "Registration for IUPC, Blockchain,and  Project Show is now closed.",
      link: ""
    }
    
  ];

  const reorderedAnnouncements = [
    announcements.find((announcement) => announcement.id === 8),
    announcements.find((announcement) => announcement.id === 7),
    announcements.find((announcement) => announcement.id === 6),
    announcements.find((announcement) => announcement.id === 5),
    announcements.find((announcement) => announcement.id === 4),
    announcements.find((announcement) => announcement.id === 3),
    announcements.find((announcement) => announcement.id === 2),
    announcements.find((announcement) => announcement.id === 1),
  ];

  const toggleDropdown = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div
    id="announcements"
    className="w-full px-10 mt-40 min-h-screen font-robert-regular"
  >
    <div className="text-start">
      <h1 className="font-general text-xs mb-3">UIU CSE FEST 2025</h1>
      <h1 className="bento-title special-font text-4xl">Announcements</h1>
    </div>
  
    <div
      className="mt-10 space-y-6 h-[60vh] overflow-y-auto rounded-lg p-4 md:p-8 border bg-gray-50 custom-scrollbar"
    >
      {reorderedAnnouncements.map((announcement, index) => (
        <div
          key={announcement.id}
          className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-all border border-transparent hover:border-[#ff4701]"
        >
          <div
            className="md:flex items-center justify-between cursor-pointer"
            onClick={() => toggleDropdown(index)}
          >
            <h1 className="font-robert-medium uppercase text-sm">
              {announcement.title}
            </h1>
            <h1 className="text-xs text-gray-500">{announcement.date}</h1>
          </div>
  
          <div
            className={`transition-all overflow-hidden ${
              activeIndex === index ? 'max-h-screen p-3' : 'max-h-0 p-0'
            } bg-gray-50 border-l-4 border-[#ff4701] rounded mt-4`}
          >
            {activeIndex === index && (
              <>
                <p className="text-sm text-gray-700 whitespace-pre-line">
                  {announcement.details}
                </p>
                {announcement.id !== 3 &&
                  announcement.id !== 4 &&
                  announcement.id !== 5 &&
                  announcement.id !== 6 &&
                  announcement.id !== 7 &&
                  announcement.id !== 8 && (
                    <a
                      href={announcement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ff4701] hover:text-[#e64001] text-sm underline"
                    >
                      Learn More
                    </a>
                  )}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  
    <style >{`
      /* Targeting WebKit-based browsers */
      .custom-scrollbar::-webkit-scrollbar {
        width: 1px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
        background: #f0f0f0;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: #ff4701;
        border-radius: 10px;
      }
  
      /* For Firefox */
      .custom-scrollbar {
        scrollbar-width: thin;
        scrollbar-color: #ff4701 #f0f0f0;
      }
    `}</style>
  </div>
  
  
  );
};

export default Announcements;
