import React from "react";
import { Link } from "react-router-dom";

/**
 * Price plans section – simply showcases Andre’s philosophy
 * and invites the user to reach out for a custom‑fit program.
 */
export const PricePlans: React.FC = () => {
  return (
    <section className="bg-white rounded-xl shadow-md py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-xl text-gray-700 mb-4">Andre's biggest goal is to propagate the traditional Muay Thai and the original Carlson Gracie Jiu‑Jitsu style.</p>
        <p className="text-2xl text-gray-600 mb-6">Your health is your most valuable asset. We'll find a plan that fits you.</p>
        <Link
          to="/contact"
          className="px-8 py-3 bg-red-900 text-yellow-300 rounded-lg font-medium hover:bg-yellow-300 hover:text-red-900 transition-colors shadow-md hover:shadow-lg">
          Contact Us
        </Link>
      </div>
    </section>
  );
};
