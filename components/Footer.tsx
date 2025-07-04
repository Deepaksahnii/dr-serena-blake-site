const Footer = () => {
  return (
    <footer className="bg-white text-center text-gray-700 py-10 px-4 border-t border-gray-200">
      <div className="max-w-2xl mx-auto space-y-4">

        {/* Name + Email */}
        <div>
          <p className="font-semibold">Jennifer Hahm, Ph.D., Licensed Psychologist</p>
          <p className="text-sm">jennifer@drjenniferhahm.com</p>
        </div>

        {/* Phone + Fax */}
        <div className="text-sm">
          <p>Phone: (248) 939-8150 | Fax: (248) 939-8190</p>
        </div>

        {/* Address */}
        <div className="text-sm">
          <p>28175 Haggerty Rd, Novi, MI 48377</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm pt-2">
          <a href="/" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Good Faith Estimate</a>
          <a href="#" className="hover:underline">Client Portal</a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 pt-4">
          © 2025 Jennifer Hahm Ph.D. Psychological Services, PLLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
