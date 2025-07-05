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


    alert("Form submitted successfully!");
  };

  return (
    <section className="bg-white py-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
       
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#33607F] mb-4 text-center">
          Get in touch
        </h2>

      
        <p className="text-[#33607F] text-center mb-8 text-sm sm:text-base">
          Simply fill out this form and Dr. Serena will be in touch with you soon.
        </p>

      
        <form
          onSubmit={handleSubmit}
          className="border border-[#33607F] rounded-[10px] p-6 sm:p-8 space-y-6"
        >
        
          <div>
            <label className="block text-[#33607F] font-medium mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-[#33607F] text-[#33607F] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#33607F]"
            />
          </div>

          
          <div>
            <label className="block text-[#33607F] font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-[#33607F] text-[#33607F] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#33607F]"
            />
          </div>

         
          <div>
            <label className="block text-[#33607F] font-medium mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full border border-[#33607F] text-[#33607F] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#33607F]"
            />
          </div>

         
          <div>
            <label className="block text-[#33607F] font-medium mb-1">
              What brings you here? <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full border border-[#33607F] text-[#33607F] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#33607F]"
            ></textarea>
          </div>

          
          <div>
            <label className="block text-[#33607F] font-medium mb-1">
              Preferred contact time <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="preferredTime"
              required
              placeholder="e.g. Weekdays after 3pm"
              className="w-full border-[#33607F] text-[#33607F] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#33607F]"
            />
            <p className="text-[#33607F] text-xs mt-1">
              Let us know when you are typically available for a call or consultation.
            </p>
          </div>

          
          <div>
            <label className="block text-[#33607F] font-medium mb-1">
              Preferred contact method <span className="text-red-500">*</span>
            </label>
            <select
              name="preferredMethod"
              required
              className="w-full border btext-[#33607F] text-[#33607F] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#33607F]"
            >
              <option value="">-- Select an option --</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
              <option value="text">Text Message</option>
              <option value="video">Video Call</option>
            </select>
          </div>

          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="robotCheck"
              required
              checked={isRobot}
              onChange={(e) => setIsRobot(e.target.checked)}
              className="mr-2 accent-[#144232]"
            />
            <label htmlFor="robotCheck" className="text-[#33607F] text-sm sm:text-base">
              I am not a robot <span className="text-red-500">*</span>
            </label>
          </div>

  
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#0f321e] cursor-pointer text-white font-semibold px-8 py-3 rounded w-full sm:w-auto transition duration-300"
            >
              Submit
            </button>
          </div>

          
          <p className="text-[#33607F] text-xs mt-4 text-center">
            By clicking submit you consent to receive text and emails from Dr. Serena Blake.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
