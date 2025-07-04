"use client";

const Faq = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          FAQs
        </h2>

        <div className="space-y-6">
          {/* FAQ 1 */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">
              Do you accept insurance?
            </h3>
            <p className="text-gray-700 mt-2">
              No, but a superbill is provided for self-submission.
            </p>
          </div>

          {/* FAQ 2 */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">
              Are online sessions available?
            </h3>
            <p className="text-gray-700 mt-2">
              Yes—all virtual sessions via Zoom.
            </p>
          </div>

          {/* FAQ 3 */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">
              What is your cancellation policy?
            </h3>
            <p className="text-gray-700 mt-2">
              24-hour notice required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
