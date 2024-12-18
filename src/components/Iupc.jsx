import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { Link } from "react-router-dom";

const Iupc = () => {
  return (
    <div className="bg-white min-h-screen p-4 pt-14 font-robert-regular text-black">
      <div className="max-w-7xl mx-auto  bg-white p-6 rounded-xl shadow-md">
        <header className="text-center mb-8 ">
          <h1 className="text-3xl font-zentry  md:text-4xl font-bold text-orange-600">
            UIUIUPC - UIU <br className="md:hidden"/> Inter-University Programming Contest 2025
          </h1>
          <p className="text-lg font-robert-medium text-gray-600 mt-2">University</p>
          <p className="text-lg font-semibold text-gray-700 mt-2">
            Last Registration: December 28, 2024
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-xl font-zentry font-semibold text-orange-600">About the Event</h2>
          <p className="text-gray-700 mt-4">
            The Department of Computer Science and Engineering (CSE) at United International University (UIU) is thrilled to host the 1st UIU Inter-University Programming Contest 2025, set to take place on <span className="font-bold">January 17-18, 2025!</span>  This exciting event will unite talented programmers from universities across Bangladesh, offering a challenging platform to demonstrate their programming and problem-solving prowess.
            <br />
            <br />

            By hosting this prestigious event, UIU aims to foster a strong culture of competitive programming nationwide, inspiring students to excel in this dynamic and impactful field.

          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-zentry font-semibold text-orange-600">Event Details</h2>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li><strong>Eligibility:</strong>  Open to university students and IOI (International Olympiad in Informatics) students. 
            </li>
            <li><strong>Teams:</strong>  150 teams will compete, with each team comprising 3 students + 1 coach.</li>

            <li><strong>Problem Setters:</strong> The problem set will be designed by the Bangladesh Association of Problem Setters (BAPS), ensuring a fair and intellectually stimulating competition.</li>

            
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-zentry font-semibold text-orange-600">Registration Fee</h2>
          <p className="text-xl font-bold text-orange-500 mt-2">5000 BDT</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-zentry font-semibold text-orange-600">Event Timeline</h2>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li>Registration Closes: December 28, 2024</li>
            <li>Shortlisted Teams Announcement: December 30, 2024</li>
            <li>Last Date for Registration Payment: January 05, 2024</li>
            <li>Mock Contest: Friday, January 17, 2025</li>
            <li>Final Contest: Saturday, January 18, 2025</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-zentry font-semibold text-orange-600">Prizes</h2>
          <ul className="list-decimal pl-5 text-gray-700 mt-4">
            <li>First Prize: 150,000 BDT</li>
            <li>Second Prize: 100,000 BDT</li>
            <li>Third Prize: 50,000 BDT</li>
            <li>4th - 10th Prizes: 10,000 BDT each (7 prizes)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-zentry font-semibold text-orange-600">Registration Link</h2>

            <Link to="https://ecom2.uiu.ac.bd/csefest/signup/team/IUPC" target="blank">
              <Button
                title="Register Now"
                leftIcon={<TiLocationArrow />}
                containerClass="bg-orange-500 flex w-40 px-3 py-3 mt-3 rounded-full text-black text-xs md:text-xs items-center"
              />
            </Link>
        </section>

        <section className="bg-gray-100 p-6 rounded-xl shadow-inner mt-8">
          <h2 className="text-xl font-zentry font-semibold text-orange-600">For any queries</h2>
          <p className="text-gray-700 mt-4">
            <strong>Md. Mostafizur Rahman</strong><br />
            Head, Competitive Programming Wing<br />
            Programming Wing, UIU Computer Club
          </p>
          <p className="mt-2">
            <strong>Contact:</strong><br />
            +8801521773834<br />
            <a href="mailto:mrahman221014@bscse.uiu.ac.bd" className="text-orange-500">mrahman221014@bscse.uiu.ac.bd</a>
          </p>

          <p className="text-gray-700 mt-6">
            <strong>Md. Tashin Parvez</strong><br />
            Associate, Competitive Programming Wing<br />
            Programming Wing, UIU Computer Club
          </p>
          <p className="mt-2">
            <strong>Contact:</strong><br />
            +8801954449226<br />
            <a href="mailto:mparvez221437@bscse.uiu.ac.bd" className="text-orange-500">mparvez221437@bscse.uiu.ac.bd</a>
          </p>
        </section>
      </div>
    </div>
  );
};
export default Iupc