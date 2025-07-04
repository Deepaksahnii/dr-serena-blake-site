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

    // Handle form submission here (e.g. send data to API)
    alert("Form submitted successfully!");
  };

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Get in touch
        </h2>
        {/* Subheading */}
        <p className="text-gray-700 mb-8">
          Simply fill out this form and Dr. Serena will be in touch with you soon.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Preferred contact time */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Preferred contact time <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="preferredTime"
              required
              placeholder="e.g. Weekdays after 3pm"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-gray-500 text-sm mt-1">
              Let us know when you are typically available for a call or consultation.
            </p>
          </div>

          {/* Preferred contact method */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Preferred contact method <span className="text-red-500">*</span>
            </label>
            <select
              name="preferredMethod"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Select an option --</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
              <option value="text">Text Message</option>
              <option value="video">Video Call</option>
            </select>
          </div>

          {/* I'm not a robot */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="robotCheck"
              required
              checked={isRobot}
              onChange={(e) => setIsRobot(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="robotCheck" className="text-gray-700">
              I am not a robot <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>

          {/* Disclaimer */}
          <p className="text-gray-500 text-sm mt-2">
            By clicking submit you consent to receive text and emails from Dr. Serena Blake.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
