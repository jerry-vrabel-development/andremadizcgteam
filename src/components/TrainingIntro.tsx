import React from "react";
import { Link } from "react-router-dom";

const TrainingIntro: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          Come Train With Pros
        </h2>

        {/* Body text */}
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          <strong>Madiz</strong>, as people call him, has been traveling to Thailand
          frequently and with that improving his knowledge more and more. At this
          moment he is the official representative of the World Muaythai Organization
          in the USA – one of the most respected & respected in the world.
          <br />
          <br />
          <strong>Andre</strong> holds a second‑degree Black Belt in Brazilian
          Jiu‑Jitsu and Khan 11 (red and white mongkol) in Muaythai under the
          Kru Muaythai Association.
        </p>

        {/* Call‑to‑action button */}
        <Link
          to="/contact"
          className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700
transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default TrainingIntro;
