"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const services = [
  {
    title: "Anxiety & Stress Management",
    subtitle: `Feeling overwhelmed by anxiety or stress? 
      As a therapist, I guide you toward calm and emotional balance. 
      Together, we’ll build healthier coping strategies.`,
    image: "/service1.jpg",
  },
  {
    title: "Relationship Counseling",
    subtitle: `Struggling with relationship issues? 
      I help couples and individuals improve communication, resolve conflicts, and strengthen connections.`,
    image: "/service2.jpg",
  },
  {
    title: "Trauma Recovery",
    subtitle: `Have you experienced trauma that’s affecting your daily life? 
      I provide compassionate support to help you heal and reclaim your life.`,
    image: "/service3.jpg",
  },
];

const Services = () => {
  return (
    <>
      {/* SERVICES SECTION with background */}
      <section className="bg-[#F3F0E8] px-6 sm:px-8 md:px-10 py-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#41413F] leading-tight font-light">
            Therapy can be a space where you invest in yourself
            <br />
            <span>—one of the highest forms of self-care.</span>
          </h2>

          {/* Paragraph */}
          <p
            className={`${inter.className} text-[#41413F] text-sm sm:text-base md:text-lg font-light leading-relaxed`}
          >
            You may be led to therapy by anxiety, depression, relationship
            stress, past or recent trauma, grief and loss, self-esteem issues,
            or challenges with family, parenting, or parental relationships.
            Whatever the source of your stress, you don't have to face it
            alone. Therapy offers you the time and space to work toward
            wellness and peace.
          </p>

          <hr className="border-t border-[#7E7E6B] mt-8 md:mt-12" />
        </div>

        <div className="max-w-7xl mx-auto mt-10">
          {/* Areas of Focus Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#41413F] text-center mb-8 sm:mb-12 font-light">
            Areas of Focus
          </h2>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                {/* Circle Image */}
                <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl text-[#41413F] font-light">
                  {service.title}
                </h3>

                {/* Subtitle */}
                <p
                  className={`${inter.className} text-[#41413F] text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xs`}
                >
                  {service.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RATES AND INSURANCE SECTION */}
      <section className="bg-[#94B0B0] w-full py-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-4 px-4 sm:px-6 md:px-8">
          {/* Heading */}
          <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-light leading-tight">
            Rates and Insurance
          </h2>

          {/* Fees */}
          <p
            className={`${inter.className} text-black text-sm sm:text-base md:text-lg font-light`}
          >
            Session fee: $200(individual session)/$240(couples session)
          </p>
          <p
            className={`${inter.className} text-black text-sm sm:text-base md:text-lg font-light`}
          >
            Psychological Evaluation: $225
          </p>

          {/* Insurance info */}
          <p
            className={`${inter.className} text-black text-sm sm:text-base md:text-lg font-light pt-4`}
          >
            Experience: 8 years of practice, 500+ sessions
          </p>

          <hr className="w-full border-t border-[#7E7E6B] mt-6" />

          {/* Reimbursement info */}
          <p
            className={`${inter.className} text-black text-xs sm:text-sm md:text-base font-light pt-4`}
          >
            For out-of-network plans, I’ve partnered with Mentaya using this
            tool to help you check your eligibility for reimbursement for my
            services.
          </p>
        </div>
      </section>
    </>
  );
};

export default Services;
