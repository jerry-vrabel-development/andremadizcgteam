import type { FC } from "react";
import LogoImg from "../../assets/img/Logo.png";

export const Logo: FC = () => (
  <img
    src={LogoImg}
    alt="Andre Madiz Team Logo"
    className="h-8 w-auto"
  />
);
