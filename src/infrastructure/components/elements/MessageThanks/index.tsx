import React from "react";
import {
  ButtonForm,
  ContainerMessage,
  TitleDescription,
  TitleEmail,
  TitlePrincipal,
  TitleSecondary,
} from "./style";

const MessageThanks = () => {
  const user = JSON.parse(sessionStorage.getItem("userRimac") || "{}");

  return (
    <ContainerMessage>
      <TitlePrincipal>¡Te damos la bienvenida! </TitlePrincipal>
      <TitleSecondary>
        Cuenta con nosotros para proteger tu vehículo{" "}
      </TitleSecondary>
      <TitleDescription>
        Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu
        correo:
      </TitleDescription>
      <TitleEmail>{user.email}</TitleEmail>
      <ButtonForm>CÓMO USAR MI SEGURO</ButtonForm>
    </ContainerMessage>
  );
};

export default MessageThanks;
