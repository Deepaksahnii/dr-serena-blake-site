"use client";
import Header from "@/components/Header";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#F3F0E8] overflow-hidden py-6 px-4">
      {/* Background Video */}
      <video
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-95"
      />
      <div className="relative z-10">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              <p>Psychological Care for</p> Change, Insight, and Well-Being
            </h1>

            <p className="mt-4 text-lg text-gray-700">
              Offering individual psychotherapy for adults via telehealth in Michigan and{" "}
              <Link
                href="https://psypact.org/mpage/psypactmap"
                target="_blank"
                className="underline text-gray-800 font-medium"
              >
                most U.S. states
              </Link>{" "}
              through PSYPACT participation
            </p>

            {/* Call to Action Button */}
            <div className="mt-8">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSeVPdE8FDjGrnmAJ8kAXzXUTrOz780udwG6noNWHbShZuuIgw/viewform?usp=sf_link"
                target="_blank"
                className="bg-[#A3C1AD] hover:bg-[#91B39B] transition-colors duration-300 text-white px-6 py-3 rounded-full uppercase text-sm font-normal tracking-wide"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
