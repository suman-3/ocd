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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 2xl:max-w-screen-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-bebas tracking-wider uppercase">
            STILL THINKING ABOUT IT?{" "}
            <span className="text-custom-red">LET'S TALK.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 inter">
            Whether it's a swirl, a stain, a startup studio, or your Sunday
            superbike — we're ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative -ml-6 lg:-ml-12">
            <img
              src={carImage}
              alt="Car"
              className="w-[90%] h-auto object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold font-bebas tracking-wider uppercase mb-6 leading-snug">
              DROP YOUR DETAILS. WE'LL TAKE IT
              <br />
              FROM HERE.
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`bg-transparent inter border-b outline-none py-2 w-full ${
                      errors.name
                        ? "border-red-500"
                        : "border-gray-500 focus:border-white"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-red-400 text-sm mt-1 block">
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
                    className={`bg-transparent border-b inter outline-none py-2 w-full ${
                      errors.lastName
                        ? "border-red-500"
                        : "border-gray-500 focus:border-white"
                    }`}
                  />
                  {errors.lastName && (
                    <span className="text-red-400 text-sm mt-1 block">
                      {errors.lastName}
                    </span>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`bg-transparent border-b  inter selection:outline-none py-2 w-full ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-500 focus:border-white"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-red-400 text-sm mt-1 block">
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
                    className={`bg-transparent border-b inter outline-none py-2 w-full ${
                      errors.phone
                        ? "border-red-500"
                        : "border-gray-500 focus:border-white"
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-red-400 text-sm mt-1 block">
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="message"
                  placeholder="Message (Optional)"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`bg-transparent border-b inter outline-none py-2 w-full ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-500 focus:border-white"
                  }`}
                />
                {errors.message && (
                  <span className="text-red-400 text-sm mt-1 block inter">
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center inter gap-2 px-6 py-3 font-semibold transition ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed shadow-none text-gray-300"
                    : "bg-custom-red text-white shadow-[0_0_20px_rgba(255,0,0,0.6)] hover:shadow-[0_0_30px_rgba(255,0,0,0.8)]"
                }`}
              >
                <FaPaperPlane /> {isSubmitting ? "Sending..." : "Get In Touch"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickContactSection;
