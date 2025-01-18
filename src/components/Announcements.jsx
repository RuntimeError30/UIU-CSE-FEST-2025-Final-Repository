
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
    },
    {
      id: 11,
      title: "UIU IUPC 2025 - Shortlisted Teams Announcement",
      date: "January 11, 2025",
      details: "We are excited to announce the shortlisted teams for the UIU IUPC 2025! 🎉\n\n🔗 Check out the list here: [Link](https://drive.google.com/file/d/1ekQ2meYAOVtXaVQIqKo-al_8Cjpi65uZ/view?fbclid=IwZXh0bgNhZW0CMTAAAR2NQ1FlojbS43GlKgujQTGyvndSz9SotAADBhipfeZti6hAFUnxAfxWsL0_aem_PjiZeSLMCPuljle9EsDEtA)\n\n📄 Payment process details will be shared soon, so stay tuned for further updates.\n\nThe journey to excellence continues – best of luck to everyone as you prepare for the challenge ahead! 💪",
      link: ""
    },
    {
      id: 12,
      title: "UIU CSE Fest 2025 - Scavenger Hunt Announcement 🕵️‍♂️✨💡",
      date: "January 10, 2025",
      details: "𝗨𝗜𝗨 𝗖𝗦𝗘 𝗙𝗲𝘀𝘁 𝟮𝟬𝟮𝟱 presents the most thrilling event of the year: 𝗦𝗖𝗔𝗩𝗘𝗡𝗚𝗘𝗥 𝗛𝗨𝗡𝗧 for CSE dept's students & CSE Alumni! 🕵️‍♂️✨💡\n\nThink fast. Solve riddles. Conquer challenges. This isn’t just a game; it’s an adrenaline-pumping journey that will test your creativity, teamwork, and problem-solving skills!\n\n𝗘𝘃𝗲𝗻𝘁 𝗛𝗶𝗴𝗵𝗹𝗶𝗴𝗵𝘁𝘀:\n📅 Date: 17th January (Friday)\n📍 Venue: UIU Permanent Campus\n⏰ Time Limit: 2 hours\n🎟️ Fee: 𝗙𝗥𝗘𝗘 for all!\n👥 Team Size: 3-4 members\n🔗 Register Now: [Link]( https://docs.google.com/forms/d/e/1FAIpQLSc3n5_bRTnQOkMbK_ljeM2Kz_UUK83XAfMFBYMEOrJrldCUVg/viewform ) [use university mail]\n📌 𝗥𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝘁𝗶𝗼𝗻 𝗗𝗲𝗮𝗱𝗹𝗶𝗻𝗲: 13th January\n\nPro Tip: Strategy matters! Bring together a mix of techies, puzzle-solvers, coders, and creative minds to tackle every twist and turn.\n\nPrizes and glory await the fastest and smartest team. Are you ready to take on the ultimate challenge? Tag your squad and let the hunt begin!",
      link: ""
    },
    {
      id: 13,
      title: "Announcing the Top 30 Teams for the Inter-University Blockchain Olympiad 2025!",
      date: "January 10, 2025",
      details: "𝗔𝗻𝗻𝗼𝘂𝗻𝗰𝗶𝗻𝗴 𝘁𝗵𝗲 𝗧𝗼𝗽 𝟯𝟬 𝗧𝗲𝗮𝗺𝘀 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗜𝗻𝘁𝗲𝗿-𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆 𝗕𝗹𝗼𝗰𝗸𝗰𝗵𝗮𝗶𝗻 𝗢𝗹𝘆𝗺𝗽𝗶𝗮𝗱 𝟮𝟬𝟮𝟱!!\n\nAs part of the prestigious 𝗨𝗜𝗨 𝗖𝗦𝗘 𝗙𝗘𝗦𝗧 𝟮𝟬𝟮𝟱, the 𝗜𝗻𝘁𝗲𝗿-𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆 𝗕𝗹𝗼𝗰𝗸𝗰𝗵𝗮𝗶𝗻 𝗢𝗹𝘆𝗺𝗽𝗶𝗮𝗱 𝟮𝟬𝟮𝟱 is proud to unveil the 𝗧𝗼𝗽 𝟯𝟬 𝗧𝗲𝗮𝗺𝘀 selected to advance to the next phase of this landmark competition.\n\nAfter an extensive review of a large number of exceptional whitepaper submissions, these 30 teams have stood out for their innovative ideas and technical excellence. Congratulations to all the selected teams—you’ve earned your spot in this competitive segment of UIU CSE FEST 2025!\n\nTo those who were not selected, we deeply appreciate your participation and encourage you to continue pushing boundaries. There will always be more opportunities to showcase your talents—better luck next time!\n\n𝗜𝗺𝗽𝗼𝗿𝘁𝗮𝗻𝘁 𝗡𝗼𝘁𝗶𝗰𝗲 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗧𝗼𝗽 𝟯𝟬 𝗧𝗲𝗮𝗺𝘀:\n◾ Please check your email inbox regularly, as detailed instructions and the next steps will be provided shortly.\n◾ Registration for the next phase will be open soon. Ensure you complete the process before the deadline.\n\nThe journey toward 𝗝𝗮𝗻𝘂𝗮𝗿𝘆 𝟭𝟴, 𝟮𝟬𝟮𝟱, is heating up, and we can’t wait to see the creativity and innovation these teams will bring to the stage. Stay tuned for more updates as UIU CSE FEST 2025 unfolds!",
      link: "https://www.facebook.com/share/p/1HSxPYY3Cu/"
    },
    {
      id: 14,
      title: "Announcing the Top 41 Teams for the Inter-University Project Show 2025!",
      date: "January 12, 2025",
      details: "🎉 𝗔𝗻𝗻𝗼𝘂𝗻𝗰𝗶𝗻𝗴 𝘁𝗵𝗲 𝗧𝗼𝗽 𝟰𝟭 𝗧𝗲𝗮𝗺𝘀 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗜𝗻𝘁𝗲𝗿-𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆 𝗣𝗿𝗼𝗷𝗲𝗰𝘁 𝗦𝗵𝗼𝘄 𝟮𝟬𝟮𝟱 🎉\n\nAs part of the highly anticipated UIU CSE FEST 2025, we are thrilled to unveil the Top 41 Teams advancing to the next phase of the Inter-University Project Show 2025!\n\nAfter a meticulous review of numerous outstanding submissions, these 41 teams have risen to the top, demonstrating exceptional innovation and technical prowess. Congratulations to the selected teams—your hard work and creativity have earned you a well-deserved place in this prestigious competition!\n\nTo those who were not selected, we sincerely appreciate your efforts and encourage you to keep striving for excellence. Every step forward is a step closer to success, and more opportunities await to showcase your talents. Keep pushing the boundaries of innovation!\n\n𝗜𝗺𝗽𝗼𝗿𝘁𝗮𝗻𝘁 𝗡𝗼𝘁𝗶𝗰𝗲 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗧𝗼𝗽 𝟰𝟭 𝗧𝗲𝗮𝗺𝘀:\n📩 Please monitor your email inbox for detailed instructions and next steps.\n📝 Registration for the next phase is now open—don’t miss out!\n\nThe countdown to January 18, 2025, is on! We’re excited to see the groundbreaking ideas and projects these teams will bring to the spotlight. Stay tuned for more updates as UIU CSE FEST 2025 continues to unfold.",
      link: "https://www.facebook.com/share/p/15TU2S1VL7/"
    },
    {
      id: 15,
      title: "🏓 UIU CSE FEST 2025: Intra Table Tennis Tournament for CSE Dept Students & Alumni",
      date: "January 12, 2025",
      details: "Are you ready to serve, smash, and spin your way to victory? Team up and join us for an electrifying doubles tournament!\n\n📅 Date: 18th January 2025\n📍 Venue: UIU Permanent Campus\n🗓 Registration Deadline: 15th January 2025\n🏓 Register now: [Link to Registration Form]( https://docs.google.com/forms/d/e/1FAIpQLSf0n08x6PrANayO2jgFv15RayzPwWwGDlUJ-44_MaD0GpjoEA/viewform?fbclid=IwZXh0bgNhZW0CMTAAAR1XBX1BTJFpV-8CrezRLfl4T4QIGvA5I-Ta01YLEqqgddU-Bs53OuGvwQk_aem_TdCTHZbZ2rLOAI0h5bEjUg )\n💸 Registration Fee: FREE!\n\n⚡ Tournament Highlights:\n◾ Doubles Format: Partner up and show your synergy on the table.\n◾ Inclusive Games: Open for both boys’ and girls’ teams.\n◾ Match Progression: Single-game format until the semi-finals, followed by an epic Best of 3 finale.\n◾ Scoring System: 11-point games with a 2-point lead to win—stay sharp and focused!\n\n🎯 What You Need to Know:\n✔ Equipment provided: Table tennis balls and bats (bring your own if you prefer).\n✔ Wear proper sports attire and bring your A-game!\n⏰ Matches start on time—don’t be late!\n\n🏆 Ready to Make Your Mark?\nDon’t miss this opportunity to showcase your skills, claim glory, and join the champion’s hall!",
      link: ""
    },

    {
      id: 16,
      title: "🏸 UIU CSE FEST 2025: Intra Badminton Tournament for CSE Dept Students & Alumni",
      date: "January 12, 2025",
      details: "Are you ready to smash your way to victory? Team up, grab your racquets, and join us for an action-packed doubles tournament!\n\n📅 Date: 18th January 2025\n📍 Venue: UIU Permanent Campus\n🗓 Registration Deadline: 15th January 2025\n🏸 Register your team now: [Link to Registration Form]( https://docs.google.com/forms/d/e/1FAIpQLScdWbORaaGmWHqxzn1w2axZB92DPtJ2JjZRSxr2uR_6me9rYw/viewform?fbclid=IwZXh0bgNhZW0CMTAAAR2NQ1FlojbS43GlKgujQTGyvndSz9SotAADBhipfeZti6hAFUnxAfxWsL0_aem_PjiZeSLMCPuljle9EsDEtA )\n💸 Registration Fee: FREE!\n\n⚡ Tournament Details:\n◾ Doubles Format: Partner up and dominate the court.\n◾ Matches tailored for boys’ and girls’ teams.\n◾ Best of 1 matches up to the semi-finals, with an epic Best of 3 finale.\n◾ Scoring is capped at 30 points—stay sharp and strategic!\n\n🎯 What You Need to Know:\n✔ Bring your racquets; we’ll provide the shuttlecocks.\n✔ Wear appropriate sports attire and bring your A-game.\n⏰ Matches start on time—don’t be late!\n\n🏆 Ready to Make Your Mark?\nDon’t miss the chance to claim glory and etch your name in the champion’s hall!",
      link: ""
    },
    {
      id: 17,
      title: "🎮 UIU CSE FEST 2025 Presents: UIU EAFC & eFootball Mobile Showdown",
      date: "January 09, 2025",
      details: "UIU gamers, are you ready to take your skills to the next level? Join UIU CSE FEST 2025 and prove who’s the best! Whether you're a fan of PC gaming or love mobile games, we've got something for everyone.\n\n📢 **UIU CSE FEST 2025 Presents EAFC SHOWDOWN:**\n- 🎮 Game: EAFC 24/25\n- 🖥️ Platform: PC\n- 💥 Format: 1v1, Single Elimination\n- 👤 Participation: Solo\n- 🔗 Register for EAFC Showdown: [Link to Registration Form]( https://docs.google.com/forms/d/e/1FAIpQLSc5gydaj0H2qUaLfBRl6FTjY3A9TCCklckR8YPPib620pwJPA/closedform?pli=1 )\n\n📢 **UIU CSE FEST 2025 Presents eFootball Mobile SHOWDOWN:**\n- 📱 Game: eFootball Mobile\n- 🎮 Format: 1v1\n- 👤 Participation: Solo\n- 🔗 Register for eFootball Mobile Showdown: [Link to Registration Form]( https://docs.google.com/forms/d/e/1FAIpQLSe3nDe9vSJH8NyITTefLud5i4XiXw_oPLWKgQXvPy2ZGE2_Xw/closedform )\n\n**Eligibility:** All UIU students (Undergraduate, Postgraduate, or Certification Program) are welcome to join!\n\n🗓️ **Registration Dates:**\n- **Start:** 9th January 2025\n- **End:** 12th January 2025\n\nShow off your gaming skills and compete for the title of UIU’s best gamer in both EAFC and eFootball Mobile. It’s time to make your mark!\n\nSee you at UIU CSE FEST 2025!",
      link: ""
    },

    {
      id: 18,
      title: "✨ Attention Entrepreneurs!!! UIU CSE Fest 2025 – Business Stall Opportunity",
      date: "January 06, 2025",
      details: "UIU CSE Fest 2025 offers an exciting opportunity for students to showcase their businesses! If you’re an aspiring entrepreneur, this is your chance to promote your venture, connect with a diverse audience, and gain valuable exposure.\n\nThe top selected businesses will be invited to set up stalls at the event, providing a platform to network and grow.\n\n🔗 **Here is the registration link:**\n[Business Stall Registration]( https://docs.google.com/forms/d/e/1FAIpQLSfom7ub8cQXGFYcCN3xJ-pa_kQ99ezaL0aDgbxp-7_YB2AIRg/viewform?usp=header&fbclid=IwZXh0bgNhZW0CMTAAAR1dJivMfHkFpiyaSGqYdIDOkhhn1UkJuY5YmWx1mHroq5v4l9XALr_ImLQ_aem_RK4VLXv2ZU9N45XEhjP9ww )\n\n📅 **Registration Deadline:** 8th January 2025\n\n💸 **Registration Fee:** 1500 BDT (Only after final selection)\n\nDon’t miss this incredible opportunity to take your business to new heights. Register today and make your mark at UIU CSE Fest 2025!"
    },

    {
      id: 19,
      title: "Ready, Set, Go! Line Follower Robot Challenge",
      date: "January 06,2025",
      details: "Precision and speed collide in the Line Follower Robot challenge! Can your bot navigate the track and beat the clock? Test your engineering and programming skills in this fast-paced, exciting event! 🛠\n\n👉 **Register here:** [Line Follower Robot Registration]( https://ecom2.uiu.ac.bd/csefest/ )\n\n📄 **Rulebook:** [View Rulebook]( https://drive.google.com/file/d/1D5w2dNIEqajjtulirjNNQfPPQaCARp8s/view?fbclid=IwZXh0bgNhZW0CMTAAAR34pOx9to2RAwP8s3NrdrfYEz1jlGSlnlHP8CxssqLT2yL0hKqdg-LJJgE_aem_gipFp3WCeTRJ-VZE1ft6uQ )\n\n🌐 **Event Link:** [UIU CSE Fest 2025 - Line Follower Robot]( https://www.facebook.com/events/1718740695336417/ )\n\n📱 **Facebook Page:** [UIU CSE Fest 2025]( https://www.facebook.com/events/1718740695336417/ )",
      link:''
    },
    {
      id: 20,
      title: "💡 Unlock the Details! Project Showcase at UIU CSE Fest 2025",
      date: "January 05, 2025",
      details: "Got an innovative idea or a project that could shape the future? The Project Showcase at UIU CSE Fest 2025 is your platform to shine. Show your creativity and inspire the tech community with your groundbreaking work. 🌟\n\n👉 **Register here:** [Project Showcase Registration]( https://ecom2.uiu.ac.bd/csefest/ )\n\n📄 **Rulebook:** [View Rulebook]( https://drive.google.com/file/d/1xsEo0d0aLkJbMoNvAN1CisNJeknTrgAK/view?fbclid=IwZXh0bgNhZW0CMTAAAR2cRBWZTMR2EiehRvz6p6UFzoO4Fv-qBpeObzyuUdJ5QOB0MfdRy5axL3g_aem_Y8bngl_USQVB0FM-XDrDGw )\n\n🌐 **Event Link:** [UIU CSE Fest 2025 - Project Showcase]( https://facebook.com/events/s/uiu-cse-fest-2025/1718740695336417/ )\n\n📱 **Facebook Page:** [UIU CSE Fest 2025]( https://www.facebook.com/profile.php?id=61569420809397 )",
      link:''
    },
    {
      id: 21,
      title: "⚽ RULES ARE LIVE! Robotic Football Challenge",
      date: "January 03, 2025",
      details: "Get ready for the most thrilling robotic football match of the year! Build and program your robots to play soccer like pros. It's time to combine technology, strategy, and sportsmanship for an electrifying experience! 🤖\n\n👉 **Register here:** [Robotic Football Registration]( https://ecom2.uiu.ac.bd/csefest/ )\n\n📄 **Rulebook:** [View Rulebook]( https://drive.google.com/file/d/1bnCRIp17gDW2JrHVidOg8lDqI8yrreoV/view?fbclid=IwZXh0bgNhZW0CMTAAAR2NQ1FlojbS43GlKgujQTGyvndSz9SotAADBhipfeZti6hAFUnxAfxWsL0_aem_PjiZeSLMCPuljle9EsDEtA )\n\n🌐 **Event Link:** [UIU CSE Fest 2025 - Robotic Football]( https://www.facebook.com/events/1718740695336417/ )\n\n📱 **Facebook Page:** [UIU CSE Fest 2025]( https://www.facebook.com/profile.php?id=61569420809397 )",
      link:''
    },
    {
      id: 22,
      title: "🧠 Know the Rules for the ICT Olympiad!",
      date: "January 03, 2025",
      details: "Ready to test your tech expertise? The ICT Olympiad is your battlefield of knowledge, strategy, and quick thinking. Compete against tech wizards and see if you have what it takes to claim victory! 📚\n\n👉 **Register here:** [ICT Olympiad Registration]( https://ecom2.uiu.ac.bd/csefest/signup/team/ICTO )\n\n📄 **Rulebook:** [View Rulebook]( https://drive.google.com/file/d/1RzoSxh4-hOz98dpfhELwvnMUeWBcglOv/view?fbclid=IwZXh0bgNhZW0CMTAAAR2NQ1FlojbS43GlKgujQTGyvndSz9SotAADBhipfeZti6hAFUnxAfxWsL0_aem_PjiZeSLMCPuljle9EsDEtA )\n\n🌐 **Event Link:** [UIU CSE Fest 2025 - ICT Olympiad]( https://facebook.com/events/s/uiu-cse-fest-2025/1718740695336417/ )\n\n📱 **Facebook Page:** [UIU CSE Fest 2025]( https://www.facebook.com/profile.php?id=61569420809397 )"
    },
    {
      id: 23,
      title: "🔗 Guidelines Released for Blockchain Competition!",
      date: "December 31, 2024",
      details: "Blockchain enthusiasts, it's time to gear up! This competition is your chance to prove your skills and knowledge in one of the most revolutionary technologies of our time. Decode challenges, build solutions, and shape the future of blockchain! 💻\n\n👉 **Register here:** [Blockchain Competition Registration]( https://ecom2.uiu.ac.bd/csefest/ )\n\n📄 **Rulebook:** [View Rulebook]( https://drive.google.com/file/d/1eD5i2hD6JvcJkYXBltruuaMuLJDpVdNW/view?fbclid=IwZXh0bgNhZW0CMTAAAR3wknZXuHnaTb89B0Fz_dI17EMOgEy7NXoPnvMvn25PA8NSI-JsiMKpmbk_aem_l8FEIRWy98LjM6e5JNzmGg )\n\n🌐 **Event Link:** [UIU CSE Fest 2025 - Blockchain Competition](https://facebook.com/events/s/uiu-cse-fest-2025/1718740695336417/ )\n\n📱 **Facebook Page:** [UIU CSE Fest 2025]( https://www.facebook.com/profile.php?id=61569420809397 )"
    },
    {
      id: 24,
      title: "📘 Rulebook for UIU Inter-University Programming Contest is Live!",
      date: "December 30, 2024",
      details: "Calling all coding enthusiasts! The ultimate programming challenge awaits you. Compete with the brightest minds from across the nation and put your problem-solving skills to the test. Don't miss this chance to showcase your coding mastery! 🚀\n\n👉 **Register here:** [Programming Contest Registration]( https://ecom2.uiu.ac.bd/csefest/ )\n\n📄 **Rulebook:** [View Rulebook]( https://drive.google.com/file/d/1VxSXiM6aWXS5fvj50ycQ1ylOcMJ01WW6/view?fbclid=IwZXh0bgNhZW0CMTAAAR1dJivMfHkFpiyaSGqYdIDOkhhn1UkJuY5YmWx1mHroq5v4l9XALr_ImLQ_aem_RK4VLXv2ZU9N45XEhjP9ww )\n\n🌐 **Event Link:** [UIU CSE Fest 2025 - Programming Contest]( https://facebook.com/events/s/uiu-cse-fest-2025/1718740695336417/ )\n\n📱 **Facebook Page:** [UIU CSE Fest 2025]( https://www.facebook.com/profile.php?id=61569420809397)"
    },
    {
      id: 25,
      title: "🎉 Payment Procedure and Deadline for UIU IUPC 2025 Shortlisted Teams 🎉",
      date: "January 12,  2025",
      details: "Hello Participants! We are thrilled to have you on board for the upcoming UIU IUPC 2025! 🎊\n\n👉 **Payment Deadline:** January 14, 2025, 10:00 PM\n👉 **Payment Portal:** [UIU CSE Fest Payment Portal]( https://ecom2.uiu.ac.bd/csefest/ )\n\n📌 **Steps for Payment:** [View Instructions]( https://drive.google.com/file/d/1RbrynIvSRkRAvXQszxXciRqVO9vZC5_E/view?fbclid=IwZXh0bgNhZW0CMTAAAR1TXbur2NFiebIeYEZyx9D9BccmH7GiWY1We3Ms4dGKsH4K9rTM3x_s8fE_aem_eyEfNlSNdQFwXSOwEUjk-A )\n📌 **Final Shortlisted Teams:** [Find Your Team Reference Code]( https://drive.google.com/file/d/17CmuppBJ3X-dYzZtDsVhTIJ7Wxr8xaJj/view?fbclid=IwZXh0bgNhZW0CMTAAAR2856xSE-kM86tQQ31NkC1OC4wTuxu9qNuRG0NLIgDqKjuAgINsisA95so_aem_mMkczsuo27MFqx1rI62qgQ )\n\n📄 **What’s Included in the Document:**\n- University Name\n- Team Name\n- Updated Team Reference Code\n\n🔑 **Important:** Use the provided Team Reference Code while making your payment to avoid any errors.\n\nFor any queries or assistance, feel free to reach out to us.\n\nLet’s gear up for an exciting competition ahead! 🚀",
      link:''
    },


    {
      id: 26,
      title: "𝐂𝐡𝐞𝐜𝐤 𝐭𝐡𝐞 𝐃𝐞𝐦𝐨 𝐭𝐫𝐚𝐜𝐤 & 𝐆𝐞𝐚𝐫 𝐔𝐩 𝐟𝐨𝐫 𝐭𝐡𝐞 𝐔𝐥𝐭𝐢𝐦𝐚𝐭𝐞 𝐋𝐅𝐑 𝐒𝐡𝐨𝐰𝐝𝐨𝐰𝐧!",
      date: "January 12, 2025",
      "details": "Speed, precision, and innovation take center stage in the **Line Follower Robot (LFR) Competition! 🏎️**\n\nDoes your bot have what it takes to conquer the track and race against time? Show off your engineering brilliance in this electrifying challenge!\n\n🎯 **Event Date:** 17th January 2025\n📍 **Venue:** UIU Campus\n✅ **Latest Rulebook:** [View Here]( https://drive.google.com/file/d/1D5w2dNIEqajjtulirjNNQfPPQaCARp8s/view?fbclid=IwZXh0bgNhZW0CMTAAAR27_TFrKA3NMcdm0hhsWZfrWttvfg6yXOP8hcsXE8vU9p2xUAbypO8XXZg_aem_shaXJu2djH0I6E5WbHIYSg )\n\n💬 Stay tuned for updates!\n\n𝐄𝐯𝐞𝐧𝐭 𝐋𝐢𝐧𝐤: [UIU CSE Fest 2025 Event]( https://www.facebook.com/events/1718740695336417/ )\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐏𝐚𝐠𝐞: **UIU CSE FEST 2025**",
      link:''
    },
    {
      id: 27,
      title: 'Event Schedule for UIU CSE Fest 2025 has been published!',
      date: "January 17, 2025",
      details: 'Click on Learn More to see the detailed schedule of all the events, competitions, and activities happening at UIU CSE Fest 2025!',
      link: './documents/schedule.pdf',
    },
    {
      id: 28,
      title: "Congratulations to the Winners of the ICT Olympiad at UIU CSE Fest 2025!",
      date: "January 17, 2025",
      details: "In honor of the grand celebrations at UIU CSE Fest 2025, the gifts of such amazing talents have demonstrated their brilliance and earned this superlative achievement. Your dedication and hard work will make it even more memorable, and we are excited to see how you continue to shine and achieve greatness in the future! Every one of you is an achiever because all have crossed the difficult 50% passing mark of the total score—a feat to be truly proud of and worth celebrating! 🏆🎉 Your hard work and brilliance made this event memorable. 👏 Thank you for being an essential part of UIU CSE Fest 2025, and here is to your continued success!",
      link: "./documents/Winner-List-ICT.png"
    },
    // {
    //   id: 29,
    //   title: "Congratulations to the Winners of UIUIUPC at UIU CSE Fest 2025!",
    //   date: "January 18, 2025",
    //   details: "The UIU Inter-University Programming Contest (UIUIUPC) has showcased the brilliance and problem-solving skills of talented individuals across the nation. Your outstanding performance and logical thinking have set a benchmark for excellence. Achieving the difficult challenge of solving problems under intense pressure is commendable. Thank you for being a vital part of UIUIUPC 2025 and making it extraordinary!",
    //   link: "./documents/uiuiupc-winners.pdf"
    // },
    // {
    //   id: 30,
    //   title: "Congratulations to the Winners of the Inter-University Blockchain Olympiad 2025!",
    //   date: "January 18, 2025",
    //   details: "The Inter-University Blockchain Olympiad 2025 has highlighted groundbreaking ideas and exceptional talent in blockchain technology. Your innovative solutions and hard work have truly made a difference. Crossing the challenging threshold of understanding and applying blockchain concepts is an achievement in itself. Thank you for contributing to the success of Blockchain Olympiad 2025 and shaping the future of technology!",
    //   link: "./documents/blockchain-winners.pdf"
    // },
    // {
    //   id: 31,
    //   title: "Congratulations to the Winners of the Project Show at UIU CSE Fest 2025!",
    //   date: "January 18, 2025",
    //   details: "The Project Show at UIU CSE Fest 2025 showcased incredible creativity, engineering, and innovation. Your projects stood out for their brilliance, impact, and ingenuity. Your dedication and creativity in presenting unique projects have been truly inspiring. Thank you for being a part of this incredible showcase and for making it so impactful!",
    //   link: "./documents/project-show-winners.pdf"
    // },
    // {
    //   id: 32,
    //   title: "Congratulations to the Winners of LFR-TrackBots at UIU CSE Fest 2025!",
    //   date: "January 18, 2025",
    //   details: "The Line Following Robot (LFR) TrackBots Competition pushed the boundaries of robotics and innovation. Your precision, creativity, and engineering skills amazed everyone. Designing, building, and programming robots to excel on challenging tracks is no small feat. Thank you for making LFR-TrackBots 2025 a grand success!",
    //   link: "./documents/lfr-trackbots-winners.pdf"
    // },
    // {
    //   id: 33,
    //   title: "Congratulations to the Winners of ROBO SOCCER-Whistle Mania at UIU CSE Fest 2025!",
    //   date: "January 18, 2025",
    //   details: "The ROBO SOCCER-Whistle Mania Competition showcased unparalleled innovation and teamwork in robotics. Your robots' strategy, agility, and performance in the field were awe-inspiring. Developing robots to play soccer with finesse and precision is an extraordinary accomplishment. Thank you for being an essential part of ROBO SOCCER 2025 and for showcasing the future of robotics in action!",
    //   link: "./documents/robo-soccer-winners.pdf"
    // }
    
    
    
    
    
    
    
    
    
    
    
    
    



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
                      target="blank"
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