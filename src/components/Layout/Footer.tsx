import type { FC } from "react";

const externalLink = (href: string) => ({
  href,
  target: "_blank",
  rel: "noopener noreferrer",
});

export const Footer: FC = () => {
  return (
    <footer className="bg-red-900 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="space-y-2">
            <h4 className="font-semibold text-yellow-300">Address</h4>
            <p className="text-sm">
              2778 N. Milwaukee Ave.<br />
              Chicago, IL 60645
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-yellow-300">Contact</h4>
            <p className="text-sm">
              <a
                href="mailto:contact@andremadizcgteam.com"
                className="hover:text-white transition-colors"
              >
                contact@andremadizcgteam.com
              </a>
            </p>
            <p className="text-sm">
              <a
                href="tel:7736277152"
                className="hover:text-white transition-colors"
              >
                773‑627‑7152
              </a>
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-yellow-300">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                {...externalLink("https://x.com/Andremadizteam")}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.609 1.794-1.574
2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.928 2.205-4.928 4.928 0
.386.044.762.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.424.724-.666 1.562-.666 2.475 0 1.708.87 3.213 2.188
4.096-.807-.026-1.566-.247-2.229-.616v.062c0 2.385 1.697 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.314
0-.622-.03-.924-.086.623 1.944 2.432 3.361 4.57 3.401-1.68 1.316-3.809 2.103-6.115 2.103-.397 0-.79-.023-1.175-.068 2.179
1.397 4.768 2.214 7.557 2.214 9.054 0 14-7.496 14-13.986 0-.21-.005-.423-.014-.634.962-.693 1.797-1.56 2.457-2.548z" />
                </svg>
              </a>
              <a
                {...externalLink("https://www.linkedin.com/in/andre-madiz-b50680b0/")}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239
5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75
1.75-.783 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.327-.026-3.037-1.847-3.037-1.847 0-2.127 1.445-2.127
2.937v5.6h-3v-10h2.881v1.367h.041c.401-.758 1.38-1.556 2.842-1.556 3.044 0 3.606 2.004 3.606 4.612v5.577z" />
                </svg>
              </a>
            </div>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms
              </a>
              
            </div>
            
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Andre Madiz CG Team. All rights reserved.
      </p>
    </footer>
  );
};
