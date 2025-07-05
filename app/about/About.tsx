"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const About = () => {
  return (
    <section className="bg-white px-8 md:px-10 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 py-8 md:py-16 px-4 md:px-16">
        
        <div className="md:w-1/2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#7E7E6B] mb-6 leading-tight font-light">
            About
          </h2>
          <p
            className={`${inter.className} text-[#7E7E6B] text-sm sm:text-base md:text-lg font-light leading-relaxed`}
          >
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/Dr.serena.jpg"
            alt="Dr. Serena Blake"
            width={400}
            height={500}
            className="w-full max-w-[400px] h-auto rounded-lg object-cover"
          />
        </div>
      </div>

   
      <hr className="border-t border-[#7E7E6B] mt-8 md:mt-12" />
    </section>
  );
};

export default About;
