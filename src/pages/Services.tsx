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
  <section className="space-y-8">
    <h2 className="text-3xl font-semibold text-center mb-6">Our Services</h2>
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
