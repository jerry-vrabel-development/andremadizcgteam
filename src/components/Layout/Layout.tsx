import type { FC, PropsWithChildren } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow container mx-auto py-6">{children}</main>
    <Footer />
  </div>
);
