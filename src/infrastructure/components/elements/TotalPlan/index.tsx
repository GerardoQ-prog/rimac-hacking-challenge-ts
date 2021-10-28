import React from "react";
import { useHistory } from "react-router";
import { createPlan } from "../../../../domain/services/Plan.service";
import iconCheck from "../../../assets/images/icon_check.svg";
import {
  ButtonTotal,
  ContainerCheck,
  ContainerTotal,
  ContainerTotalMobile,
  Line,
  TitlePrice,
  TitleValue,
  Value,
} from "./style";

interface TotalPlanProps {
  quota: number;
  value: number;
}

const TotalPlan = ({ quota, value }: TotalPlanProps) => {
  const router = useHistory();

  const handleSubmit = () => createPlan({ quota, value }, router);

  return (
    <>
      <ContainerTotal>
        <TitleValue>MONTO</TitleValue>
        <Value>${quota}.00</Value>
        <p>mensuales</p>
        <Line></Line>
        <TitlePrice>El precio incluye:</TitlePrice>
        <ContainerCheck>
          <img src={iconCheck} alt="check" />
          <p>Llanta de respuesto</p>
        </ContainerCheck>
        <ContainerCheck>
          <img src={iconCheck} alt="check" />
          <p>Analisis de motor</p>
        </ContainerCheck>
        <ContainerCheck>
          <img src={iconCheck} alt="check" />
          <p>Aros gratis</p>
        </ContainerCheck>
        <ButtonTotal onClick={handleSubmit}>LO QUIERO</ButtonTotal>
      </ContainerTotal>
      <ContainerTotalMobile>
        <div>
          <Value>${quota}.00</Value>
          <TitleValue>MENSUAL</TitleValue>
        </div>
        <ButtonTotal onClick={handleSubmit}>LO QUIERO</ButtonTotal>
      </ContainerTotalMobile>
    </>
  );
};

export default TotalPlan;
