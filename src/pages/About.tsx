import type { FC } from "react";
import { ProfileCard } from "../components/ProfileCard";
import andrePhoto from "../assets/img/AndreMadiz.jpg";
import arthurPhoto from "../assets/img/ArthurPike.png";

const aboutData = {
  andre: {
    name: "Andre Pimenta",
    role: "Head Instructor – Carlson Gracie Headquarters",
    bio: `Born in Niterói, Rio de Janeiro, Brazil, Andre began martial arts at a very young age…`,
    img: andrePhoto,
    alt: "Andre Pimenta teaching a Muay Thai class",
  },

  arthur: {
    name: "Arthur Madiz",
    role: "Senior Instructor – Carlson Gracie Headquarters",
    bio: `Arthur is a local martial artist born and raised in Chicago, with 9 years of experience across multiple martial arts…`,
    img: arthurPhoto,
    alt: "Arthur Madiz at a Muay Thai gym",
  },
};

export const About: FC = () => (
  <main className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-extrabold text-indigo-700">Meet The Team</h1>
      <p className="text-lg text-gray-600 mt-2">You won’t find a group of athletes who work harder!</p>
    </div>

    {/* Profiles */}
    <div className="grid gap-8 sm:grid-cols-2">
      <ProfileCard profile={aboutData.andre} />
      <ProfileCard profile={aboutData.arthur} />
    </div>
  </main>
);
