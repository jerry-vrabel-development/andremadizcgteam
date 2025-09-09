import type { FC } from "react";
import andreAward from "../assets/img/andre_awarding_belt_wmo.jpg";
import andreFight from "../assets/img/andre_fighting_mma.jpg";
import jiuJitsu from "../assets/img/jiu_jitsu_class_chicago.jpg";
import andreThailand from "../assets/img/andre_in_thailand.jpg";
import andreWmo from "../assets/img/andre_wmo.jpg";
import groupCeremony from "../assets/img/group_ceremony.jpg"

type Photo = {
  id: number;
  src: string;
  alt: string;
};

const photos: Photo[] = [

  /*  Imported images ----------------------------------------------- */
  { id: 1, src: jiuJitsu , alt: "Students of Brazilian Jiu Jitsu" },
  { id: 2, src: andreThailand, alt: "Andre Training in Thailand" },
  { id: 3, src: andreWmo, alt: "Urban skyline at night" },
  { id: 4, src: groupCeremony, alt: "Andre Teaching Muay Thai Ceremony" },
  { id: 5, src: andreAward,  alt: "Andre receiving the award belt at the World Muay Thai Championship" },
  { id: 6, src: andreFight,  alt: "Andre in a fighting stance during a mixed‑martial‑arts bout" },
];

export const Photos: FC = () => (
  <section className="space-y-8">
    <h2 className="text-3xl font-semibold text-center mb-6">See How We Train</h2>
    <h3>Please take a moment to view the photos below from various training sessions and events.</h3>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((p) => (
        <img
          key={p.id}
          src={p.src}
          alt={p.alt}
          loading="lazy"
          decoding="async"
          className="w-full h-48 object-cover rounded-lg shadow transition-transform duration-200 hover:scale-105"
        />
      ))}
    </div>
  </section>
);
