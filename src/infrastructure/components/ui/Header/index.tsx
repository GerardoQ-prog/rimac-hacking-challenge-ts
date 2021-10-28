import React from "react";
import {
  ContainerContact,
  ContainerHeader,
  MessageContact,
  NumberDesktop,
  NumberMobile,
  PhoneNumber,
} from "./style";
import logo from "../../../assets/images/Logo_RIMAC.png";
import icon_phone from "../../../assets/images/icon_phone.svg";

interface HeaderProps {
  boxShadow?: boolean;
}

const Header = ({ boxShadow = false }: HeaderProps) => {
  return (
    <ContainerHeader boxShadow={boxShadow}>
      <img src={logo} alt="RIMAC" />
      <ContainerContact>
        <MessageContact>¿Tienes alguna duda?</MessageContact>
        <PhoneNumber href="tel:+51014116001">
          <img src={icon_phone} alt="icon_phone" />
          <NumberDesktop>(01) 411 6001</NumberDesktop>
          <NumberMobile>Llámanos</NumberMobile>
        </PhoneNumber>
      </ContainerContact>
    </ContainerHeader>
  );
};

export default Header;
