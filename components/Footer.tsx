const Footer = () => {
  return (
    <footer className="bg-[#F3F0E8] text-center text-[#41413F] py-8 px-4 border-t border-[#7E7E6B]">
      <div className="max-w-3xl mx-auto flex flex-col items-center space-y-4">

        {/* Name + Email */}
        <div className="space-y-1">
          <p className="text-base sm:text-lg">
            Dr.Serena Blake, PsyD (Clinical Psychologist)
          </p>
          <p className="text-sm sm:text-base">
            serena@blakepsychology.com
          </p>
        </div>

        {/* Phone + Fax */}
        <div className="text-sm sm:text-base">
          <p>Phone: (323) 555-0192</p>
        </div>

        {/* Address */}
        <div className="text-sm sm:text-base">
          <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>
        </div>

        {/* Links (except Client Portal) */}
        <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base pt-2">
          <a href="/" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Good Faith Estimate</a>
        </div>

        {/* Client Portal link */}
        <div className="pt-4">
          <a
            href="#"
            className="text-base sm:text-lg font-medium hover:underline"
          >
            Client Portal
          </a>
        </div>

        {/* Divider */}
        <hr className="w-full border-t border-[#7E7E6B] mt-6" />

        {/* Copyright */}
        <div className="text-xs sm:text-sm text-[#7E7E6B] pt-4">
          © 2025 Dr.Serena Blake, PsyD (Clinical Psychologist) Psychological Services, PLLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
