import type { FC } from "react";

export const Footer: FC = () => (
  <footer className="bg-gray-800 text-white mt-8">
    <div className="container mx-auto py-4 flex flex-col sm:flex-row justify-between items-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Andre Madiz Team. All rights reserved.</p>
      <ul className="flex space-x-4 mt-2 sm:mt-0">
        <li>
          <a href="/privacy" className="hover:underline">
            Privacy
          </a>
        </li>
        <li>
          <a href="/terms" className="hover:underline">
            Terms
          </a>
        </li>
      </ul>
    </div>
  </footer>
);
