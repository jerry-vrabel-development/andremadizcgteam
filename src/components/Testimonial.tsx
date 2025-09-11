import React from "react";

export const Testimonial: React.FC = () => {
  return (
    <section className="bg-gray-50 rounded-xl shadow-md py-10 px-8 mx-auto max-w-3xl">
      {/* 1st quote */}
      <blockquote className="border-l-4 border-yellow-300 pl-6 italic text-gray-800 mb-6">
        <p className="mb-4 text-lg">
          The national sport of Thailand, in which participants use punches, kicks,
          knees, and elbows to stop their opponents in the ring, has swept across
          the world and undergone a renaissance over the last few years in Chicago.
        </p>
      </blockquote>

      {/* 2nd quote */}
      <blockquote className="border-l-4 border-yellow-300 pl-6 italic text-gray-800 mb-6">
        <p className="mb-4 text-lg">
          The new generation of Muay Thai students doesn't easily fall under a
          label, and its schools are no longer tucked away in musty garages or a
          small corner room of a gym. The education is top‑notch, pulling in
          students from as young as eight to adults well into their 50s and
          ranging from casual fitness enthusiasts to fighters with dreams of
          competing in Thailand.
        </p>
      </blockquote>

      {/* CTA */}
      <p className="text-center text-xl">
        <a
          href="https://www.chicagoreader.com/chicago/chicago-muay-thai/Content?oid=15839878"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-indigo-600 hover:underline transition-colors"
        >

          Read <span className="font-semibold">“Chicago Muay Thai”</span> an article by Geoff Stellfox for the Chicago Reader
        </a>
      </p>
    </section>
  );
};
