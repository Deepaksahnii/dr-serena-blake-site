"use client";

import { useState } from "react";

const Contact = () => {
  const [isRobot, setIsRobot] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isRobot) {
      alert("Please confirm you are not a robot.");
      return;
    }

    // Handle form submission here
    alert("Form submitted successfully!");
  };

  return (
    <section className="bg-white py-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#144232] mb-4 text-center">
          Get in touch
        </h2>

        {/* Subheading */}
        <p className="text-[#144232] text-center mb-8 text-sm sm:text-base">
          Simply fill out this form and Dr. Serena will be in touch with you soon, usually within one business day. This form is safe, private and completely free.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="border-2 border-[#144232] rounded-[10px] p-6 sm:p-8 space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-[#144232] font-medium mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border-2 border-[#144232] text-[#144232] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#144232]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#144232] font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border-2 border-[#144232] text-[#144232] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#144232]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-[#144232] font-medium mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full border-2 border-[#144232] text-[#144232] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#144232]"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="notRobot"
              checked={isRobot}
              onChange={() => setIsRobot(!isRobot)}
              className="border-2 border-[#144232] w-5 h-5 rounded"
            />
            <label
              htmlFor="notRobot"
              className="text-[#144232] text-sm sm:text-base"
            >
              I am not a robot
            </label>
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="
                border-2 border-[#144232]
                bg-[#144232] 
                hover:bg-[#0F3525] 
                text-white 
                font-medium 
                px-8 sm:px-12 
                py-3 sm:py-4 
                rounded 
                w-full sm:w-auto
                transition-colors duration-300
              "
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
