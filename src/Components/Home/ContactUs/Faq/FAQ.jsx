import React, { useState } from 'react';

const FAQ = ({ successMessage }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const faqItems = [
        {
            question: "What is Export?",
            answer: "Export refers to the selling of goods and services produced in one country to other countries."
        },
        {
            question: "What are the benefits of export and import?",
            answer: "Key benefits include lower prices, improved quality, access to new technologies, and improved economies of scale."
        },
        {
            question: "What is the procedure we follow?",
            answer: "(Step-1) INQUIRY -- (Step-2) QUOTATION <br /> (Step-3) SAMPLE APPROVAL -- (Step-4) ORDER PROCESSING <br /> (Step-5) PRODUCTION -- (Step-6) DISPATCH <br /> (Step-7) RECEIPT OF SHIPMENT -- (Step-8) FEEDBACK."
        },
        {
            question: "Do you offer digital marketing services or website development?",
            answer: (
                <>
                    Yes, we highly recommend our partner, <a href="https://nexakreactive.com/" target="_blank" rel="noopener noreferrer">nexakreactive</a>, for all your digital marketing and website development needs. They provide comprehensive services tailored to your business requirements.
                </>
            )
        }
    ];

    const toggleFAQ = index => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="p-4 h-full bg-gray-100 rounded-md">
            {successMessage && <div className="text-green-600">{successMessage}</div>}
            <div className="faq-container space-y-4">
                {faqItems.map((item, index) => (
                    <div key={index} className="border-b last:border-b-0">
                        <div className="faq-item flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
                            <div className="faq-question">{item.question}</div>
                            <div className="icon-container">
                                <i className={`fas fa-chevron-${expandedIndex === index ? 'down' : 'right'}`}></i>
                            </div>
                        </div>
                        <div className={`faq-answer overflow-hidden transition-max-height duration-300 ${expandedIndex === index ? 'max-h-40' : 'max-h-0'}`}>
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
