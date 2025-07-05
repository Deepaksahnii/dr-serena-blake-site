"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

const Hero = () => {
  return (
    <section className="bg-[#F3F0E8] px-8 sm:px-12 md:px-16 pb-8 sm:pb-12 md:pb-16">
    
      <div className="flex justify-start">
        <Image
          src={logo}
          alt="Logo"
          width={112}
          height={40}
          className="h-auto w-[7rem] sm:w-[8rem] md:w-[10rem]"
        />
      </div>

    
      <div className="relative overflow-hidden mt-4 sm:mt-6">
     
        <video
          src="/video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black opacity-40"></div>

      
        <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[30rem] md:min-h-[35rem] px-4 sm:px-6 md:px-8 py-6 sm:py-10">
          <h1 className="text-white text-2xl sm:text-4xl md:text-4xl lg:text-7xl font-light leading-snug max-w-2xl">
            Psychological Care for <br /> Change, Insight, and Well-Being
          </h1>

          <p className="text-white text-xl sm:text-base md:text-lg font-light mt-4 sm:mt-6 max-w-xl leading-relaxed">
            Offering individual psychotherapy for adults via telehealth in
            Michigan and{" "}
            <Link
              href="https://psypact.org/mpage/psypactmap"
              target="_blank"
              className="underline font-medium"
            >
              most U.S. states
            </Link>{" "}
            through PSYPACT participation.
          </p>

          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSeVPdE8FDjGrnmAJ8kAXzXUTrOz780udwG6noNWHbShZuuIgw/viewform?usp=sf_link"
            target="_blank"
            className="
              mt-6 sm:mt-8
              inline-block
              bg-[#A3C1AD]
              hover:bg-[#91B39B]
              text-white
              uppercase
              tracking-wider
              text-xs sm:text-sm md:text-base
              font-medium
              px-8 sm:px-12 md:px-16
              py-3 sm:py-4
              rounded-full
              transition-colors
              duration-300
              w-auto
            "
            style={{
              clipPath: "ellipse(50% 50% at 50% 50%)",
            }}
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
