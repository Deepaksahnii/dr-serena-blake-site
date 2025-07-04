"use client";

import Image from "next/image";

const services = [
  {
    title: "Anxiety & Stress Management",
    image: "/images/anxiety.jpg",
  },
  {
    title: "Relationship Counseling",
    image: "/images/relationship.jpg",
  },
  {
    title: "Trauma Recovery",
    image: "/images/trauma.jpg",
  },
];

const Services = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Circular Image */}
              <div className="w-40 h-40 md:w-48 md:h-48 relative mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="rounded-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
