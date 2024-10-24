import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import FAQ from './Faq/FAQ';

const ContactUs = ({ successMessage }) => {
    return (
        <div className="flex flex-wrap justify-between items-stretch gap-4 bg-gray-100 p-4 max-w-[1200px] mx-auto">
            <div className="flex-1 min-w-[300px] max-w-[500px]">
                <ContactForm />
            </div>
            <div className="flex-1 min-w-[300px] max-w-[500px]">
                <FAQ successMessage={successMessage} />
            </div>
        </div>
    );
};

export default ContactUs;
