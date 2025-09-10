import React from "react";

export const Testimonial: React.FC = () => {
  return (
    <section className="bg-gray-50 rounded-xl shadow-md py-10 px-8 mx-auto max-w-3xl">
      {/* 1st quote */}
      <blockquote className="border-l-4 border-indigo-600 pl-6 italic text-gray-800 mb-6">
        <p className="mb-4">
          The national sport of Thailand, in which participants use punches, kicks,
          knees, and elbows to stop their opponents in the ring, has swept across
          the world and undergone a renaissance over the last few years in Chicago.
        </p>
      </blockquote>

      {/* 2nd quote */}
      <blockquote className="border-l-4 border-indigo-600 pl-6 italic text-gray-800 mb-6">
        <p className="mb-4">
          The new generation of Muay Thai students doesn't easily fall under a
          label, and its schools are no longer tucked away in musty garages or a
          small corner room of a gym. The education is top‑notch, pulling in
          students from as young as eight to adults well into their 50s and
          ranging from casual fitness enthusiasts to fighters with dreams of
          competing in Thailand.
        </p>
      </blockquote>

      {/* CTA */}
      <p className="text-center">
        <a
          href="https://www.chicagoreader.com/chicago/chicago-muay-thai/Content?oid=15839878"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-indigo-600 hover:underline transition-colors"
        >
          <svg
            className="w-4 h-4 mr-2 fill-current"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M6.86 2l1.54 9.61h3.71l1.53-9.61H6.86zm8.68 0l-1.54 9.61h3.71l1.53-9.61H15.54z" />
          </svg>
          Read <span className="font-semibold">“Chicago Muay Thai”</span> – an
          article by Geoff Stellfox for the Chicago Reader
        </a>
      </p>
    </section>
  );
};
