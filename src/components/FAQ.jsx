import { useState } from "react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Will every participant get the e-certificate?",
            answer: "e-Certificates will be provided to all registered participants.",
        },
        {
            question: "How can I register for the event?",
            answer: "You can register for the event through our official website by filling out the registration form.",
        },
        
        {
            question: "Where will the event take place?",
            answer: "The event will take place at the United International University campus in Dhaka.",
        },
    ];

    return (
        <div className="py-20 px-5 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl md:text-5xl text-white font-zentry font-bold">
                        Frequently Asked Questions <span className="text-[#ff4701]">(FAQ)</span>
                    </h1>
                    <p className="my-4 font-robert-regular leading-loose text-slate-400">
                        Find answers to the most common questions about UIU CSE Fest, including event details, participation, and more.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="mt-8 space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 shadow-lg rounded-lg p-4"
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h2 className=" text-sm md:text-xl  font-medium text-white">{faq.question}</h2>
                                <span
                                    className={`transition-transform ${
                                        openIndex === index ? "rotate-180" : "rotate-0"
                                    } text-white`}
                                >
                                    ▼
                                </span>
                            </div>
                            {openIndex === index && (
                                <div className="text-sm mt-2 font-robert-regular text-slate-400">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
