import type { FC, FormEvent } from "react";
import { useRef } from "react"

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

  return (
    <section className="space-y-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            ref={nameRef}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2
focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            ref={emailRef}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2
focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            ref={messageRef}
            required
            rows={4}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2
focus:ring-indigo-500"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};
