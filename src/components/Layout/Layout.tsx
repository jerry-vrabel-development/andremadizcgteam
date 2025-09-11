import type { FC, ReactNode } from "react";
import { Header } from "../Header/Header";
import { Footer } from "./Footer";

export interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({children}) => (
  <div className="flex flex-col min-h-screen">
    <Header /><main className="flex-1">{ children }</main>
    <Footer />
  </div>
);
