import type { FC } from "react";

const photos = [
  { id: 1, url: "/img/photo1.jpg", alt: "Photo 1" },
  { id: 2, url: "/img/photo2.jpg", alt: "Photo 2" },
  { id: 3, url: "/img/photo3.jpg", alt: "Photo 3" },
  { id: 4, url: "/img/photo4.jpg", alt: "Photo 4" },
  { id: 5, url: "/img/photo5.jpg", alt: "Photo 5" },
  { id: 6, url: "/img/photo6.jpg", alt: "Photo 6" },
];

export const Photos: FC = () => (
  <section className="space-y-8">
    <h2 className="text-3xl font-semibold text-center mb-6">Photo Gallery</h2>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((p) => (
        <img
          key={p.id}
          src={p.url}
          alt={p.alt}
          className="w-full h-48 object-cover rounded-lg shadow"
        />
      ))}
    </div>
  </section>
);
