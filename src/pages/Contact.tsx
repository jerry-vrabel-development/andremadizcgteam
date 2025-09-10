import type { FC, FormEvent } from "react";
import { useRef } from "react";

export const Contact: FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;

    console.log({ name, email, message });

    // TODO: Integrate with email service (SendGrid, EmailJS, etc.)
    alert("Thanks for reaching out! We'll get back to you soon.");
    e.currentTarget.reset();
  };

  const address = "2778 N. Milwaukee Ave.\nChicago, IL 60645";
  const phone = "+1 773‑627‑7152";
  const email = "contact@andremadizcgteam.com";

  const mapSrc ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.1978808241784!2d-87.71204569999999!3d41.9315991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcd715358b9ef%3A0x6a469f5ec49920b2!2s2778%20N%20Milwaukee%20Ave%2C%20Chicago%2C%20IL%2060647!5e0!3m2!1sen!2sus!4v1757461760723!5m2!1sen!2sus";

  return (
    <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 rounded">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-indigo-700">Contact Us</h1>
        <h3 className="text-lg text-gray-600 mt-2">Conveniently located in Chicago's Logan Square neighborhood - just off the Blue Line Logan Square stop.</h3>
    </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold text-indigo-700 mb-6">
            Send us a message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                ref={nameRef}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                ref={emailRef}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                ref={messageRef}
                required
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* ---------- 2️⃣ Map & Info card ----------------------------- */}
        <div className="space-y-8">
          {/* Google Map – 100% width of the column */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={mapSrc}
              width="100%"
              height="350"
              className="border-0"
              allowFullScreen={false}
              loading="lazy"
              title="Company location"
            />
          </div>

          {/* Contact info card */}
          <div className="p-6 rounded-lg bg-white shadow-md">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">
              Get in touch
            </h3>

            <div className="space-y-3">
              {/* Phone */}
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-indigo-600 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.5a2 2 0 011.414.586l2 2A2 2 0 0014.5 7H18a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" />
                </svg>
                <span>{phone}</span>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-indigo-600 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12l-4-4-4 4m0 0l4 4 4-4M12 16V4" />
                </svg>
                <span>{email}</span>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-indigo-600 mr-2 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
                <pre className="whitespace-pre-line text-sm">{address}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
