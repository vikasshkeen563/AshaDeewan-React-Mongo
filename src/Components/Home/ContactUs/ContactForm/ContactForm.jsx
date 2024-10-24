import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhoneNumber = (phone) => /^\+?[0-9]{7,15}$/.test(phone);
    const isDisposableEmail = (email) => {
        const disposableDomains = [
            'mailinator.com', 'guerrillamail.com', '10minutemail.com', 
            'temp-mail.org', 'yopmail.com'
        ];
        const domain = email.split('@')[1];
        return disposableDomains.includes(domain);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, contact, message } = formData;
        let errors = {};

        if (!name) errors.name = "Name is required.";
        if (!email) {
            errors.email = "Email is required.";
        } else if (!validateEmail(email)) {
            errors.email = "Please enter a valid email address.";
        } else if (isDisposableEmail(email)) {
            errors.email = "Temporary email addresses are not allowed.";
        }
        if (!contact) {
            errors.contact = "Contact number is required.";
        } else if (!validatePhoneNumber(contact)) {
            errors.contact = "Please enter a valid contact number.";
        }
        if (!message) errors.message = "Message is required.";

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            setSuccessMessage('');
            return;
        }

        setErrors({});
        setIsSubmitting(true);
        
        const formElement = event.target;
        const formDataToSend = new FormData(formElement);
        let submissionSuccess = false;

        try {
            const responses = await Promise.all([
                fetch(scriptURL1, { method: 'POST', body: formDataToSend }),
                fetch(scriptURL2, { method: 'POST', body: formDataToSend })
            ]);
            submissionSuccess = responses.some(response => response.ok);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
            if (submissionSuccess) {
                setSuccessMessage('Form submitted successfully!');
                setFormData({ name: '', email: '', contact: '', message: '' });
            } else {
                alert('Error submitting form. Please try again.');
            }
        }
    };

    return (
        <div>
            <section className="p-4 h-full bg-gray-100 rounded-md">
                <form className="space-y-4" id="contact-form" onSubmit={handleSubmit}>
                    <input 
                        className="form-input input border rounded p-2 w-full" 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                    {errors.name && <div className="text-red-600">{errors.name}</div>}
                    <input 
                        className="form-input input border rounded p-2 w-full" 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                    {errors.email && <div className="text-red-600">{errors.email}</div>}
                    <input 
                        className="form-input input border rounded p-2 w-full" 
                        type="tel" 
                        name="contact" 
                        placeholder="Contact no." 
                        value={formData.contact} 
                        onChange={handleChange} 
                        required 
                    />
                    {errors.contact && <div className="text-red-600">{errors.contact}</div>}
                    <textarea 
                        className="form-input form-input-txt-area border rounded p-2 w-full" 
                        name="message" 
                        placeholder="Message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                    ></textarea>
                    {errors.message && <div className="text-red-600">{errors.message}</div>}
                    <input 
                        type="submit" 
                        className="submit-btn bg-blue-500 text-white rounded p-2 w-full hover:bg-blue-600" 
                        value={isSubmitting ? 'Submitting...' : 'Send message'} 
                        disabled={isSubmitting} 
                    />
                </form>
                {successMessage && <div className="mt-4 text-green-600">{successMessage}</div>}
            </section>
        </div>
    );
};

export default ContactForm;
