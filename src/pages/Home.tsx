import type { FC } from "react";
import bgVideo from "../assets/bgVideo.mp4";
import Logo from "../assets/img/Logo.png";

export const Home: FC = () => (
  <div className="relative min-h-screen overflow-hidden">
    {/* 1️⃣ Video – absolutely positioned behind everything */}
    <video
      src={bgVideo}
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    />
    {/* Blur overlay (transparent black + blur on the video behind) */}
    <div className="absolute inset-0 bg-black/40 backdrop-blur-lg" />
    {/* 2️⃣ The actual page content – positioned **over** the video */}
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <img
        src={Logo}
        alt="Andre Madiz CG Team"
        className="max-w-[90vw] max-h-[90vh] object-contain"
      />
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 text-white drop-shadow-lg">
        Come Train With The Best.
      </h2>
      <p className="text-lg text-white drop-shadow-md max-w-2xl text-center">
        You want to learn from world‑class champions and improve your mind, body and spirit. We can help.
      </p>
    </div>
  </div>
);
