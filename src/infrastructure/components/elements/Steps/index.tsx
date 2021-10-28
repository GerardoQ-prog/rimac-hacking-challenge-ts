import React from "react";
import {
  Container,
  ContainerSteps,
  StepNumber,
  Number,
  StepName,
  ContainerStepsMobile,
  StepCurrent,
  TextCurrent,
  ProgressBar,
} from "./style";
import arrow from "../../../assets/images/icon_arrow_disabled.svg";
import { useHistory } from "react-router";

const Steps = () => {
  const router = useHistory();

  return (
    <Container>
      <ContainerSteps>
        <StepNumber onClick={() => router.push("/")}>
          <Number>1</Number>
          <StepName>Datos</StepName>
        </StepNumber>
        <StepNumber>
          <Number selected={true}>2</Number>
          <StepName selected>Arma tu plan</StepName>
        </StepNumber>
      </ContainerSteps>
      <ContainerStepsMobile>
        <StepCurrent onClick={() => router.push("/")}>
          <img src={arrow} alt="arrow" />
          <TextCurrent>PASO 2 DE 2</TextCurrent>
        </StepCurrent>
        <ProgressBar></ProgressBar>
      </ContainerStepsMobile>
    </Container>
  );
};

export default Steps;
