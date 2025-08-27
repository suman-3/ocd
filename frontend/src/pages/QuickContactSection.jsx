import { useState } from "react";
import carImage from "../assets/componets-bg/headlights.png";
import { FaPaperPlane } from "react-icons/fa";

const QuickContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ""));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "First name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "First name must be at least 2 characters";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (formData.message.trim() && formData.message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters";
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    setErrors({});

    console.log("Quick Contact Form submitted with data:", {
      name: formData.name.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
      submittedAt: new Date().toISOString(),
      formType: "Quick Contact",
    });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Thank you! We'll get back to you soon.");

      setFormData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
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
    <section className="relative bg-black text-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 lg:py-10 2xl:max-w-screen-2xl">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-bebas tracking-wider uppercase leading-tight">
            STILL THINKING ABOUT IT?{" "}
            <span className="text-custom-red">LET'S TALK.</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-gray-300 inter max-w-2xl mx-auto px-4 sm:px-0">
            Whether it's a swirl, a stain, a startup studio, or your Sunday
            superbike — we're ready to help.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Car Image Section */}
          <div className="relative order-2 lg:order-1 -mx-4 sm:-mx-6 lg:-ml-12 lg:mx-0">
            <div className="flex justify-center lg:justify-start">
              <img
                src={carImage}
                alt="Car headlights detail"
                className="w-full max-w-md sm:max-w-lg lg:max-w-none lg:w-[90%] h-auto object-cover"
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="order-1 lg:order-2 px-4 sm:px-0">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-bebas tracking-wider uppercase mb-6 sm:mb-8 leading-tight">
              DROP YOUR DETAILS. WE'LL TAKE IT
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              FROM HERE.
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
              {/* Name Fields Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`bg-transparent inter border-b outline-none py-2 sm:py-3 w-full text-sm sm:text-base placeholder-gray-400 transition-colors duration-200 ${
                      errors.name
                        ? "border-red-500"
                        : "border-gray-500 focus:border-white"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-red-400 text-xs sm:text-sm mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`bg-transparent border-b inter outline-none py-2 sm:py-3 w-full text-sm sm:text-base placeholder-gray-400 transition-colors duration-200 ${
                      errors.lastName
                        ? "border-red-500"
                        : "border-gray-500 focus:border-white"
                    }`}
                  />
                  {errors.lastName && (
                    <span className="text-red-400 text-xs sm:text-sm mt-1 block">
                      {errors.lastName}
                    </span>
                  )}
                </div>
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`bg-transparent border-b inter outline-none py-2 sm:py-3 w-full text-sm sm:text-base placeholder-gray-400 transition-colors duration-200 ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-500 focus:border-white"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-red-400 text-xs sm:text-sm mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`bg-transparent border-b inter outline-none py-2 sm:py-3 w-full text-sm sm:text-base placeholder-gray-400 transition-colors duration-200 ${
                      errors.phone
                        ? "border-red-500"
                        : "border-gray-500 focus:border-white"
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-red-400 text-xs sm:text-sm mt-1 block">
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <input
                  type="text"
                  name="message"
                  placeholder="Message (Optional)"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`bg-transparent border-b inter outline-none py-2 sm:py-3 w-full text-sm sm:text-base placeholder-gray-400 transition-colors duration-200 ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-500 focus:border-white"
                  }`}
                />
                {errors.message && (
                  <span className="text-red-400 text-xs sm:text-sm mt-1 block inter">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2 sm:pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center inter gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 font-semibold transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed shadow-none text-gray-300"
                      : "bg-custom-red text-white shadow-[0_0_20px_rgba(255,0,0,0.6)] hover:shadow-[0_0_30px_rgba(255,0,0,0.8)] hover:bg-red-600"
                  }`}
                >
                  <FaPaperPlane className="text-sm" /> 
                  {isSubmitting ? "Sending..." : "Get In Touch"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickContactSection;
