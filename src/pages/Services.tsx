import type { FC } from "react";

const services = [
  {
    title: "Muay Thai Kickboxing",
    description: "Instruction at all levels. Andre holds a Khan 11 (red and white mongkol) belt in Muaythai under the Kru Muaythai Association.",
  },
  {
    title: "Brazilian Jiu Jitsu",
    description: "Experience training with the best. Born in Brazil, Andre holds a second degree Black Belt in Brazilian Jiu-Jitsu.",
  },
  {
    title: "Private Training",
    description: "Individual sessions to help you achieve. Focus on the areas which are most important to you!",
  },
];

export const Services: FC = () => (
  <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-extrabold text-indigo-700">Our Services</h1>
    </div>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <div
          key={service.title}
          className="p-6 bg-white rounded-lg shadow hover:shadow-md transition"
        >
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-700">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);
