"use client";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-8">
        
        {/* LEFT: Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>
        </div>

        {/* RIGHT: Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/therapist.jpg"
            alt="Dr. Serena Blake"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default About;
