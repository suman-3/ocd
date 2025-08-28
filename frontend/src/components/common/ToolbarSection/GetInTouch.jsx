// src/components/toolbar/rightPanels/RightPanelContact.jsx
import React, { useState } from "react";

const RightPanelContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.log("Form validation failed:", validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Console log the form values
    console.log("Form submitted with values:", {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      timestamp: new Date().toISOString()
    });

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form after successful submission
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      alert("Thank you for your message! We'll get back to you soon.");
    }, 1000);
  };

  return (
    <div className="bg-white inter w-full md:max-w-xs p-4 rounded-md shadow-md md:sticky md:top-32 mx-auto">
      {/* Contact Form */}
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-4 font-bebas tracking-wide">GET IN TOUCH</h3>
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          {/* Name Field */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border-b pb-2 focus:outline-none transition-colors ${
                errors.name 
                  ? 'border-red-500 focus:border-red-600' 
                  : 'border-gray-300 focus:border-blue-500'
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border-b pb-2 focus:outline-none transition-colors ${
                errors.email 
                  ? 'border-red-500 focus:border-red-600' 
                  : 'border-gray-300 focus:border-blue-500'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className={`w-full border-b pb-2 focus:outline-none resize-none transition-colors ${
                errors.message 
                  ? 'border-red-500 focus:border-red-600' 
                  : 'border-gray-300 focus:border-blue-500'
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`inter text-white px-5 py-3 flex items-center gap-2 transition-all duration-200 ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-red-600 hover:bg-red-700 active:bg-red-800'
            }`}
          >
            <svg
              className={`w-4 h-4 fill-current transition-transform ${
                isSubmitting ? 'animate-spin' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isSubmitting ? (
                <path d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8Z" />
              ) : (
                <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
              )}
            </svg>
            {isSubmitting ? 'Sending...' : 'Get In Touch'}
          </button>
        </form>
      </div>

      {/* Studio Locations */}
      <div className="mb-6">
        <h4 className="text-md font-bold mb-2">STUDIO LOCATIONS</h4>

        <div className="mb-4">
          <p className="font-semibold">Mumbai</p>
          <p className="text-sm text-gray-700">
            1121, Shramik Society, Adarsh Nagar,
            <br />
            Jogeshwari West, Mumbai, Maharashtra 400102
          </p>
        </div>

        <div className="mb-4">
          <p className="font-semibold inter">Gurgaon</p>
          <p className="text-sm text-gray-700 inter">
            Main CRPF Camp Road, Sector 61, Village Ulahavas,
            <br />
            Opp. IOC Petrol Pump, Gurgaon, Haryana
          </p>
        </div>

        <div className="mb-4">
          <p className="font-semibold inter">Thane</p>
          <p className="text-sm text-gray-700 inter">
            Kothari Compound, Neelkanth Grns Rd,
            <br />
            Opp. Baccha Party, Manpada, Thane West,
            <br />
            Maharashtra 400607
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="text-sm">
        <p
          onClick={() => {
            window.location.href = "mailto:hello@ocddetailstudio.com";
          }}
          className="text-gray-700 inter underline mb-1 cursor-pointer hover:text-blue-600 transition-colors"
        >
          hello@ocddetailstudio.com
        </p>
        <p
          onClick={() => {
            window.location.href = "tel:+919818122723";
          }}
          className="text-gray-800 inter font-medium cursor-pointer hover:text-blue-600 transition-colors"
        >
          +91-9818122723
        </p>
      </div>
    </div>
  );
};

export default RightPanelContact;
