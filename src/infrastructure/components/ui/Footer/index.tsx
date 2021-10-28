import React from "react";
import { ContainerFooter } from "./style";

const Footer: React.FC = () => {
  return (
    <>
      <ContainerFooter>
        <p>© {new Date().getFullYear()} RIMAC Seguros y Reaseguros.</p>
      </ContainerFooter>
    </>
  );
};

export default Footer;
