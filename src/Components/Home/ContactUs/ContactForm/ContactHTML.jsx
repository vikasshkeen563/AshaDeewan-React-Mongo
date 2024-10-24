import React from 'react'
import ContactForm from './ContactForm'

function ContactHTML() {
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
                <input 
                    className="form-input input border rounded p-2 w-full" 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    className="form-input input border rounded p-2 w-full" 
                    type="tel" 
                    name="contact" 
                    placeholder="Contact no." 
                    value={formData.contact} 
                    onChange={handleChange} 
                    required 
                />
                <textarea 
                    className="form-input form-input-txt-area border rounded p-2 w-full" 
                    name="message" 
                    placeholder="Message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                ></textarea>
                <input 
                    type="submit" 
                    className="submit-btn bg-blue-500 text-white rounded p-2 w-full hover:bg-blue-600" 
                    value={isSubmitting ? 'Submitting...' : 'Send message'} 
                    disabled={isSubmitting} 
                />
            </form>
            {errors.length > 0 && (
                <div id="errorMessages" className="mt-4 text-red-600">
                    {errors.map((error, index) => (
                        <div key={index}>{error}</div>
                    ))}
                </div>
            )}
            {successMessage && <div className="mt-4 text-green-600">{successMessage}</div>}
        </section>
    </div>
  )
}

export default ContactHTML
