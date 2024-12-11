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

  ];

  const toggleDropdown = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div id="announcements" className="w-full px-10 mt-40 min-h-screen font-robert-regular">
      <div className="text-start">
      <h1 className='font-general text-xs mb-3'>uiu cse fest 2025</h1>
        <h1 className="bento-title special-font text-4xl">Announcements</h1>
      </div>

      <div className="mt-20 space-y-6">
        {announcements.map((announcement, index) => (
          <div
            key={announcement.id}
            className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-all border border-transparent hover:border-[#ff4701]"
          >
            <div
              className="md:flex  items-center justify-between cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <h1 className="font-robert-medium uppercase text-sm">
                {announcement.title}
              </h1>
              <h1 className="text-xs text-gray-500">{announcement.date}</h1>
            </div>

            <div
              className={`transition-all overflow-hidden ${activeIndex === index ? 'max-h-screen p-3' : 'max-h-0 p-0'
                } bg-gray-50 border-l-4 border-[#ff4701] rounded mt-4`}
            >
              {activeIndex === index && (
                <>
                  <p className="text-sm text-gray-700 whitespace-pre-line">{announcement.details}</p>
                  <a
                    href={announcement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff4701] hover:text-[#e64001] text-sm underline"
                  >
                    Learn More
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
