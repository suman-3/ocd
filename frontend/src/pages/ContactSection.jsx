import React, { useState } from "react";
import {
  FaUserAlt,
  FaEnvelope,
  FaPencilAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export default function ContactSection() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    privacyAgreed: false,
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    // Privacy agreement validation
    if (!formData.privacyAgreed) {
      newErrors.privacyAgreed = "You must agree to the privacy policy";
    }

    return newErrors;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    // Clear any existing errors
    setErrors({});

    // Log form data to console
    console.log("Form submitted successfully with data:", {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      privacyAgreed: formData.privacyAgreed,
      submittedAt: new Date().toISOString(),
    });

    // Simulate form submission (replace with actual API call)
    try {
      // Here you would typically make an API call to submit the form
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay

      alert("Thank you! Your message has been sent successfully.");

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
        privacyAgreed: false,
      });
    } catch (error) {
      console.error("Form submission error:", error);
      alert(
        "Sorry, there was an error sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-100 py-8 sm:py-10 lg:py-16">
      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* LEFT: white card form */}
          <div className="bg-white p-6 sm:p-8 lg:p-10 shadow-sm w-full max-w-[760px] mx-auto lg:mx-0">
            {/* CONTACT FORM heading */}
            <h3 className="font-bebas text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider mb-6 sm:mb-8 lg:mb-10">
              CONTACT FORM
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
              {/* Name */}
              <div className="relative">
                <FaUserAlt className="absolute left-0 top-3 text-gray-400 text-sm" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`pl-6 sm:pl-8 w-full border-b inter py-3 placeholder-gray-400 focus:outline-none text-sm sm:text-base ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs sm:text-sm mt-1 block">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute left-0 top-3 text-gray-400 text-sm" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`pl-6 sm:pl-8 w-full border-b inter py-3 placeholder-gray-400 focus:outline-none text-sm sm:text-base ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs sm:text-sm mt-1 block">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="relative">
                <FaPencilAlt className="absolute left-0 top-4 text-gray-400 text-sm" />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`pl-6 sm:pl-8 w-full border-b inter py-3 placeholder-gray-400 focus:outline-none resize-none text-sm sm:text-base ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.message && (
                  <span className="text-red-500 text-xs sm:text-sm mt-1 block">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-2 sm:gap-3">
                <input
                  id="privacy"
                  type="checkbox"
                  name="privacyAgreed"
                  checked={formData.privacyAgreed}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 sm:w-5 sm:h-5"
                />
                <div className="flex flex-col">
                  <label htmlFor="privacy" className="text-xs sm:text-sm text-gray-600 inter leading-relaxed">
                    I agree that my data is collected and stored as per the
                    privacy policy.
                  </label>
                  {errors.privacyAgreed && (
                    <span className="text-red-500 text-xs sm:text-sm mt-1">
                      {errors.privacyAgreed}
                    </span>
                  )}
                </div>
              </div>

              {/* Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`mt-4 py-3 inter px-6 sm:px-8 font-bold w-full sm:w-48 flex items-center justify-center gap-2 sm:gap-3 text-white text-sm sm:text-base ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-custom-red hover:bg-red-700"
                  } transition-colors duration-200`}
                >
                  <FaPaperPlane className="text-sm" />
                  {isSubmitting ? "Sending..." : "Get In Touch"}
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: contact info */}
          <div className="flex flex-col justify-center px-1 sm:px-0">
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: "1.1",
                letterSpacing: "-0.58px",
                verticalAlign: "middle",
                textTransform: "uppercase",
              }}
              className="text-3xl md:text-4xl lg:text-5xl leading-tight"
            >
              HAVE QUESTIONS? GOT A MACHINE
              <br />
              <span className="text-custom-red">THAT DESERVES BETTER?</span>
            </h2>

            <p className="mt-4 sm:mt-5 text-gray-700 text-sm sm:text-base leading-relaxed max-w-[540px] inter">
              Whether it's about paint correction, PPF, ceramic coating, or just
              getting started — drop us a message and we'll guide you with
              clarity, not fluff.
            </p>

            {/* Studio Locations label */}
            <div className="mt-6">
              <p className="font-bebas uppercase text-lg sm:text-xl mb-3">
                Studio Locations
              </p>

              <div className="space-y-4 sm:space-y-5 text-gray-700">
                {/* Mumbai */}
                <div>
                  <p className="flex text-sm sm:text-base 2xl:text-lg items-center gap-2 font-semibold text-gray-900 inter">
                    📌 Mumbai
                  </p>
                  <p className="text-xs sm:text-sm 2xl:text-[17px] text-gray-600 inter leading-relaxed">
                    1121, Shramik Society, Adarsh Nagar, Jogeshwari West,
                    Mumbai, Maharashtra 400102
                  </p>
                </div>

                {/* Gurgaon */}
                <div>
                  <p className="flex text-sm sm:text-base 2xl:text-lg items-center gap-2 font-semibold text-gray-900 inter">
                    📌 Gurgaon
                  </p>
                  <p className="text-xs sm:text-sm 2xl:text-[17px] text-gray-600 inter leading-relaxed">
                    Main CRPF Camp Road, Sector 61, Village Ullahavas, Opp. IOC
                    Petrol Pump, Gurgaon, Haryana
                  </p>
                </div>

                {/* Thane */}
                <div>
                  <p className="flex text-sm sm:text-base 2xl:text-lg items-center gap-2 font-semibold text-gray-900 inter">
                    📌 Thane
                  </p>
                  <p className="text-xs sm:text-sm 2xl:text-[17px] text-gray-600 inter leading-relaxed">
                    Kothari Compound, Neelkanth Grns Rd, Opp. Baccha Party,
                    Manpada, Thane West, Maharashtra 400607
                  </p>
                </div>
              </div>
            </div>

            {/* Email & Phone */}
            <div className="mt-6 text-gray-800">
              <p
                onClick={() =>
                  (window.location.href = "mailto:hello@ocddetailstudio.com")
                }
                className="underline inter decoration-gray-300 decoration-2 mb-2 inline-block cursor-pointer text-sm sm:text-base break-all sm:break-normal hover:text-custom-red transition-colors"
              >
                hello@ocddetailstudio.com
              </p>
              <p
                onClick={() => (window.location.href = "tel:+919818122723")}
                className="mb-3 cursor-pointer inter text-sm sm:text-base hover:text-custom-red transition-colors"
              >
                +91-9818122723
              </p>
            </div>

            {/* Social Icons (outlined squares) */}
            <div className="flex gap-3 mt-3">
              <a
                href="https://youtube.com/@ocddetailstudiogurgaon?si=Hm-ktnUTAi_wpR5C"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 p-2 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-200 hover:border-custom-red transition-colors duration-200"
                aria-label="YouTube"
              >
                <FaYoutube className="text-gray-800 text-sm sm:text-base" />
              </a>
              <a
                href="https://www.instagram.com/ocddetailstudiogurgaon?igsh=MW5uaWJ3NGpxdmR4Mw=="
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 p-2 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-200 hover:border-custom-red transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="text-gray-800 text-sm sm:text-base" />
              </a>
              <a
                href="https://www.facebook.com/share/1G6D4LXA4C/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 p-2 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-200 hover:border-custom-red transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-gray-800 text-sm sm:text-base" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
