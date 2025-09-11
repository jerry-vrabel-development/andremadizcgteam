import React from "react";
import { Link } from "react-router-dom";

const TrainingIntro: React.FC = () => {
  return (
    <section className="bg-white rounded-xl shadow-md mt-4 py-2 md:py-2">
      <div className="max-w-3xl mx-auto px-6 pt-4 mb-8 text-center">
        <h2 className="text-4xl font-extrabold text-red-900 text-center mb-2">Come train with Pros</h2>

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
          className="px-8 py-3 bg-red-900 text-yellow-300 rounded-lg font-medium hover:bg-yellow-300 hover:text-red-900 transition-colors shadow-md hover:shadow-lg">
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default TrainingIntro;
