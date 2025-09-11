import type { FormEvent } from "react";
import { useState } from "react";

interface SubscribeResponse {
  message: string;
}

export const NewsletterSignup: React.FC = () => {
  // ---------- UI state ----------
  const [email, setEmail] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // ---------- helpers ----------
  const validateEmail = (value: string) => {
    // very small regex – feel free to replace it with something stricter
    return /^\S+@\S+\.\S+$/.test(value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    try {
      // --- 1️⃣ Replace this URL with your real endpoint -------------
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data: SubscribeResponse = await res.json();

      if (!res.ok) {
        // If the API returns a JSON error message we can show it
        throw new Error(data.message ?? "Something went wrong");
      }

      // 200‑OK – we’re done
      setSuccess(true);
      setEmail("");
    } catch (err: unknown) {
       if (err instanceof Error) {
        // 3a. If it’s a normal JS Error, use its message
        setError(err.message);
      } else {
        // 3b. Anything else – give a generic fallback
        setError("Something went wrong. Please try again later.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  // ---------- render ----------
  if (success) {
    return (
      <p className="text-sm text-green-200">
        Thank you for subscribing! 🎉
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        required
        className="flex-1 px-3 py-2 rounded-md bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none
focus:ring-2 focus:ring-yellow-300 transition-colors"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-4 py-2 rounded-md bg-yellow-300 text-gray-900 font-semibold hover:bg-yellow-400
transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting…" : "Subscribe"}
      </button>

      {error && (
        <p className="mt-2 text-sm text-red-200" role="alert">
          {error}
        </p>
      )}
    </form>
  );
};
