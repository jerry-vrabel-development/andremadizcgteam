import type { FC } from "react";
import { useState } from "react"
import { Lightbox } from "../components/Lightbox";
import andreAward from "../assets/img/andre_awarding_belt_wmo.jpg";
import andreFight from "../assets/img/andre_fighting_mma.jpg";
import jiuJitsu from "../assets/img/jiu_jitsu_class_chicago.jpg";
import andreThailand from "../assets/img/andre_in_thailand.jpg";
import andreWmo from "../assets/img/andre_wmo.jpg";
import groupCeremony from "../assets/img/group_ceremony.jpg";

type Photo = { src: string; alt: string };

const photos: Photo[] = [
  { src: jiuJitsu, alt: "Students of Brazilian Jiu Jitsu" },
  { src: andreThailand, alt: "Andre Training in Thailand" },
  { src: andreWmo, alt: "Urban skyline at night" },
  { src: groupCeremony, alt: "Andre Teaching Muay Thai Ceremony" },
  { src: andreAward, alt: "Andre receiving the award belt at the World Muay Thai Championship" },
  { src: andreFight, alt: "Andre in a fighting stance during a mixed‑martial‑arts bout" },
];

export const Photos: FC = () => {
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => setIndex(i);
  const close = () => setIndex(null);

  return (
    <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 rounded">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-indigo-700">See How We Train</h1>
        <h2 className="text-lg text-center text-gray-600 mt-2">
          Please take a moment to view the photos below from various training sessions and events.
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p, i) => (
          <button
            key={i}
            onClick={() => open(i)}
            className="w-full h-48 overflow-hidden rounded-lg shadow transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
      {index !== null && (
        <Lightbox
          photos={photos}
          currentIndex={index}
          setCurrentIndex={setIndex}
          onClose={close}
        />
      )}
    </section>
  );
};
