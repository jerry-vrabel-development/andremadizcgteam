import type { FC } from "react";
import { ProfileCard } from "../components/ProfileCard";
import andrePhoto from "../assets/img/AndreMadiz.jpg";
import arthurPhoto from "../assets/img/ArthurPike.png";

const aboutData = {
  andre: {
    name: "Andre Pimenta",
    role: "Head Instructor – Carlson Gracie Headquarters",
    bio: `Born in Niteroi, Rio de Janeiro, Brazil, Andre Pimenta began martial arts at an early age. At 14, Andre was attending daily Muay Thai classes under Master Juba, who taught him basic technique and facilitated Andre's first competition. Andre took first place at the Rio de Janeiro Open State Muay Thai Tournament. Shortly after this early success, Andre's friend, Mongoo, invited him to try Jiu Jitsu with the East Association of Brazilian Jiu-Jitsu. Andre quickly fell in love with the sport. After a year of intense training, including under Master Amelio Arruda, Andre was crowned blue-band champion of the Alloy Niteroiense Jiu Jitsu. Inspired by the Jiu Jitsu X Luta Livre in Rio de Janeiro in the early 1990s, Andre also became interested in MMA, where the Carlson Gracie Team, led by Grand Master Carlson Gracie Sr., became his main reference. Andre trained at the Carlson Gracie Academy in Copacabana, Rio de Janeiro, under Professor Ari Galo, and thereafter at the World Fight Center (WFC) in Niteroi. At WFC, Andre worked under Masters Tuniko Jr. (Muaythai), Brazilian Muaythai team coach, Ricardo Arona (Jiu Jitsu), Pride and ADCC Champion, and Master Alexandre Pequeno (Luta Livre), King of Shotoo. Andre considers this period as the most important of his career because of the high quality of training / teachers and friendships with fellow fighters. During this time, Andre won titles at the Brazilian Grappling Championships as well as a KO at the first Challenge Contact Muaythai Competition. In 2006, Andre moved to the US, and shortly thereafter was invited to join Master Carlson Gracie Jr. In 2008, Andre was invited by Miguel Angel Torres (WEC Champion) to teach Jiu Jitsu, kickboxing, and MMA at Torres' academy in Indiana. Andre considers this a key time in his career as a teacher and fighter. Nowadays Andre is the head instructor of Carlson Gracie Headquarters in Chicago, IL beside Master Carlson Gracie Jr. At Master Carlson's Gracie Jr. Academy, he teaches BJJ and also is responsible for the Muay Thai program.`,
    img: andrePhoto,
    alt: "Andre Pimenta teaching a Muay Thai class",
  },

  arthur: {
    name: "Arthur Madiz",
    role: "Senior Instructor – Carlson Gracie Headquarters",
    bio: `Athur is a local martial artist, born and raised in Chicago, with 9 years experience across multiple martial arts. Experience competing in Muay-Thai, MMA, Kick Boxing, Brazilian Jiu-Jitsu and Boxing on both local and national level. Trained under Andre Madiz for 9 years in Muay-Thai and BJJ. He started training after he had been kicked out of school and dropped out of college. Training in Muay-Thai and martial arts helped him understand the value of hard work, discipline and perseverance. Arthur's advice to anybody new to Muay-Thai is to be patient, practice and persist.`,
    img: arthurPhoto,
    alt: "Arthur Madiz at a Muay Thai gym",
  },
};

export const About: FC = () => (
  <main className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-extrabold text-indigo-700">Meet The Team</h1>
      <h3 className="text-lg text-gray-600 mt-2">You won’t find a group of athletes who work harder!</h3>
    </div>

    {/* Profiles */}
    <div className="grid gap-8 sm:grid-cols-2">
      <ProfileCard profile={aboutData.andre} />
      <ProfileCard profile={aboutData.arthur} />
    </div>
  </main>
);
