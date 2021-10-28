import React from "react";
import peoplePlan from "../../../assets/images/people_plan.svg";
import arrowBack from "../../../assets/images/icon_arrow_back.svg";
import {
  ButtonValue,
  Card,
  ContainerBack,
  ContainerValue,
  ImagePeople,
  License,
  LicenseTrademark,
  Line,
  Text,
  TextBack,
  TextName,
  TextRange,
  TextValue,
  TextWelcome,
  TextWelcomeMobile,
  Value,
} from "./style";
import { useHistory } from "react-router";

interface InfoUserPlanProps {
  value: number;
  handleAdd: any;
  handleRemove: any;
}

const InfoUserPlan = ({
  value,
  handleAdd,
  handleRemove,
}: InfoUserPlanProps) => {
  const router = useHistory();
  const user = JSON.parse(sessionStorage.getItem("userRimac") || "{}");

  return (
    <div>
      <ContainerBack onClick={() => router.push("/")}>
        <img src={arrowBack} alt="arrow_back" />
        <TextBack>VOLVER</TextBack>
      </ContainerBack>
      <TextWelcome>
        ¡Hola, <TextName>{user.name}!</TextName>
      </TextWelcome>
      <TextWelcomeMobile>Mira las coberturas</TextWelcomeMobile>
      <Text>Conoce las coberturas para tu plan</Text>
      <Card>
        <License>Placa: {user.license}</License>
        <LicenseTrademark>Wolkswagen 2019 Golf</LicenseTrademark>
        <ImagePeople src={peoplePlan} />
      </Card>
      <ContainerValue>
        <div>
          <Text style={{ fontSize: "16px" }}>Indica la suma asegurada</Text>
          <TextRange>MIN $12,500 | MAX $16,500</TextRange>
        </div>
        <Value>
          <ButtonValue onClick={handleRemove}>-</ButtonValue>
          <TextValue>$ {value}</TextValue>
          <ButtonValue onClick={handleAdd}>+</ButtonValue>
        </Value>
      </ContainerValue>
      <Line />
    </div>
  );
};

export default InfoUserPlan;
