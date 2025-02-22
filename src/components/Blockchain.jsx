import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
// import { Link } from "react-router-dom";
// import RegistrationDeadline from "./Dates/RegistrationDeadline";

const Blockchain = () => {
  return (
    <div className="bg-white min-h-screen p-4 pt-20 font-robert-regular text-black">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-zentry md:text-4xl font-bold text-orange-600">
            Inter-University Blockchain Olympiad 2025
          </h1>
          <p className="text-lg text-gray-600 mt-2">University</p>
          <p className="text-lg font-semibold text-gray-700 mt-2">
            Registration Deadline: January 05, 2025
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-xl font-zentry font-semibold text-orange-600">About the Event</h2>
          <p className="text-gray-700 mt-4">
            The Department of Computer Science and Engineering (CSE) at United International University proudly presents the inaugural <strong>Inter-University Blockchain Olympiad 2025!</strong> This landmark event, scheduled for <strong>January 18, 2025</strong>, aims to bring together talented undergraduate students from across Bangladesh, providing a platform to showcase groundbreaking ideas in blockchain technology—a rapidly evolving and transformative field.

          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-zentry font-semibold text-orange-600">Event Highlights</h2>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li><strong>Date:</strong> January 18, 2025</li>
            <li><strong>Location:</strong> United International University, United City, Madani Ave, Dhaka 1212</li>
            <li><strong>Participants:</strong> 30 teams, each team with a maximum of 3-5 members.</li>
            <li><strong>Eligibility:</strong> University students or recent graduates (graduated within the past year, since January 2024).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-zentry font-semibold text-orange-600">Key Deadlines</h2>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li>White Paper Submission: January 05, 2025</li>
            <li>Finalist Announcement (Top 30 Teams): January 10, 2025</li>
            <li>Last Date for Registration Payment: January 12, 2025</li>
            <li>Final Submissions (Whitepaper, Pitch Deck, Presentation Video, Prototype): January 14, 2025</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-zentry font-semibold text-orange-600">Guidelines</h2>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li><strong>Individual Eligibility:</strong> Open to current university students or recent graduates (graduated within the past year).</li>
            <li><strong>Team Composition:</strong> Each team must consist of 3 - 5 eligible members. An individual may only participate in one team. Students from different institutions are allowed to form a team together.</li>
            <li><strong>Project Registration and Submission:</strong> One Team, One Project. Each team may submit only one project.</li>
            <li><strong>Primary Evaluation:</strong> Based on the submitted white paper.</li>
            <li><span className="text-orange-500 font-bold">Please submit a white paper detailing your project, adhering to the following guidelines:</span> <br />
              <span className="font-bold">Page Limit:</span> Maximum of 20 pages. <br />
              <span className="font-bold">Format:</span> Submit the document in PDF format only. <br />
              <spac className="font-bold">Content:</spac> The white paper should include comprehensive details of your project, including objectives, methodology, expected outcomes and potential impact. <br />
              This white paper will serve as the primary basis for the initial evaluation of your project. <br />
            </li>
            <li><strong>Final Evaluation:</strong> Finalists will submit a whitepaper, poster, pitch deck, presentation video, and prototype (optional).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-zentry font-semibold text-orange-600">Project Evaluation Criteria</h2>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li><strong>White Paper:</strong> 30% (20-page limit)</li>
            <li><strong>Pitch Deck + Poster:</strong> 30%</li>
            <li><strong>Pitch Presentation:</strong> 20% (10-minute max)</li>
            <li><strong>Q&A Session:</strong> 20%</li>
            <li><strong>Prototype (Optional):</strong> Required for those competing for the Best Prototype Award. The prototype will be evaluated based on proof of concept for backend and frontend functionalities.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-zentry font-semibold text-orange-600">Registration Fee</h2>
          <p className="text-xl font-bold text-orange-500 mt-2">1000 BDT</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-zentry font-semibold text-orange-600">Prizes</h2>
          <ul className="list-decimal pl-5 text-gray-700 mt-4">
            <li>Gold Award: 50,000 BDT</li>
            <li>Silver Award: 30,000 BDT</li>
            <li>Bronze Award: 20,000 BDT</li>
            <li>Best Prototype Award: 20,000 BDT</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-zentry font-semibold text-orange-600">Join Us in Making History!</h2>
          <p className="text-gray-700 mt-4">
            The Inter-University Blockchain Olympiad 2025 is more than a competition—it’s an opportunity to drive innovation and impact within the blockchain field. Register your team, innovate, and compete for prestige, recognition, and exciting cash prizes. Let’s shape the future of technology together!
          </p>
        </section>
        {/* <Link to="https://ecom2.uiu.ac.bd/csefest/signup/team/BCO" target="blank"> */}

        <section className="mb-8 relative">
          <h2 className="text-xl font-zentry font-semibold text-orange-600">
            Registration Link
          </h2>

          <div className="group relative inline-block">
            <Button
              title="Registration is now closed"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-orange-500 flex w-40 px-3 py-3 mt-3 rounded-full text-black text-xs md:text-xs items-center"
            />
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[-40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded-lg px-3 py-1">
              Registration is closed
            </div>
          </div>
        </section>




        <section className="bg-gray-100 p-6 rounded-xl shadow-inner mt-8">
          <h2 className="text-xl font-zentry font-semibold text-orange-600">For any queries</h2>
          <p className="text-gray-700 mt-4">
            <strong>Md. Fatin Shadab Turja</strong><br />
            Head, Programming Wing<br />
            UIU Computer Club
          </p>
          <p className="mt-2">
            <strong>Contact:</strong><br />
            +8801610101500<br />
            <a href="mailto:mturja222004@bscse.uiu.ac.bd" className="text-orange-500">mturja222004@bscse.uiu.ac.bd</a>
          </p>

          <p className="text-gray-700 mt-6">
            <strong>Naeem Abdullah Sadik</strong><br />
            Head, Development Wing<br />
            Programming Wing, UIU Computer Club
          </p>
          <p className="mt-2">
            <strong>Contact:</strong><br />
            +8801707403973<br />
            <a href="mailto:nsadik222115@bscse.uiu.ac.bd" className="text-orange-500">nsadik222115@bscse.uiu.ac.bd</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Blockchain