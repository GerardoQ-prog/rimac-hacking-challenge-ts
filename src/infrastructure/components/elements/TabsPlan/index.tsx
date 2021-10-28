import React from "react";
import {
  ContainerHeader,
  ContainerName,
  ContainerOption,
  ContainerTabs,
  ImageArrow,
  MessageOption,
  Tab,
  TitleTabs,
} from "./style";
import iconTire from "../../../assets/images/icon_plan_tire.svg";
import iconDamage from "../../../assets/images/icon_plan_damage.svg";
import iconAccident from "../../../assets/images/icon_plan_accident.svg";
import iconArrow from "../../../assets/images/icon_arrow_down.svg";
import iconAdd from "../../../assets/images/icon_plan_add.svg";
import iconRemove from "../../../assets/images/icon_plan_remove.svg";
import { OptionsProps } from "../../../../domain/models/Plan";

interface TabsPlanProps {
  value: number;
  handleNewQuota: any;
  options: OptionsProps;
}

const TabsPlan = ({ value, handleNewQuota, options }: TabsPlanProps) => {
  const [tabSeleect, setTabSeleect] = React.useState<number>(0);
  const [optionSelect, setOptionSelect] = React.useState<number>(0);

  const handleTabSelect = (number: number) => setTabSeleect(number);
  const handleOptionSelect = (number: number) => setOptionSelect(number);

  return (
    <div>
      <TitleTabs>Agrega o quita coberturas</TitleTabs>
      <div style={{ maxWidth: "500px", margin: "40px 0px" }}>
        <ContainerTabs>
          <Tab
            idTab={0}
            selectTab={tabSeleect}
            onClick={() => handleTabSelect(0)}
          >
            <p>PROTEGE A TU AUTO</p>
          </Tab>
          <Tab
            idTab={1}
            selectTab={tabSeleect}
            onClick={() => handleTabSelect(1)}
          >
            <p>PROTEGE A LOS QUE TE RODEAN</p>
          </Tab>
          <Tab
            idTab={2}
            selectTab={tabSeleect}
            onClick={() => handleTabSelect(2)}
          >
            <p>MEJORA TU PLAN</p>
          </Tab>
        </ContainerTabs>
        {tabSeleect === 0 && (
          <>
            <ContainerOption>
              <ContainerHeader>
                <img src={iconTire} alt="iconTire" />
                <ContainerName style={{ flexGrow: 1 }}>
                  <p>Llanta robada</p>
                  <div onClick={() => handleNewQuota("tire")}>
                    <img
                      src={options.tire ? iconRemove : iconAdd}
                      alt="iconOption"
                    />
                    <p>{options.tire ? "QUITAR" : "AGREGAR"}</p>
                  </div>
                </ContainerName>
                <ImageArrow
                  src={iconArrow}
                  alt="iconArrow"
                  option={0}
                  optionSelect={optionSelect}
                  onClick={() => handleOptionSelect(0)}
                />
              </ContainerHeader>
              <MessageOption option={0} optionSelect={optionSelect}>
                He salido de casa a las cuatro menos cinco para ir a la academia
                de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi
                bici, na llego a la academia que está en el centro del pueblo en
                una plaza medio-grande y dejo donde siempre la bici atada con
                una pitón a un sitio de esos de poner las bicis y mucho más
              </MessageOption>
            </ContainerOption>
            {value <= 16000 && (
              <ContainerOption>
                <ContainerHeader>
                  <img src={iconDamage} alt="iconDamage" />
                  <ContainerName style={{ flexGrow: 1 }}>
                    <p>Choque y/o pasarte la luz roja </p>
                    <div onClick={() => handleNewQuota("damage")}>
                      <img
                        src={options.damage ? iconRemove : iconAdd}
                        alt="iconOption"
                      />
                      <p>{options.damage ? "QUITAR" : "AGREGAR"}</p>
                    </div>
                  </ContainerName>
                  <ImageArrow
                    src={iconArrow}
                    alt="iconArrow"
                    option={1}
                    optionSelect={optionSelect}
                    onClick={() => handleOptionSelect(1)}
                  />
                </ContainerHeader>
                <MessageOption option={1} optionSelect={optionSelect}>
                  He salido de casa a las cuatro menos cinco para ir a la
                  academia de ingles de mi pueblo (Sant Cugat, al lado de
                  Barcelona) con mi bici, na llego a la academia que está en el
                  centro del pueblo en una plaza medio-grande y dejo donde
                  siempre la bici atada con una pitón a un sitio de esos de
                  poner las bicis y mucho más
                </MessageOption>
              </ContainerOption>
            )}
            <ContainerOption>
              <ContainerHeader>
                <img src={iconAccident} alt="iconAccident" />
                <ContainerName style={{ flexGrow: 1 }}>
                  <p>Atropello en la vía Evitamiento </p>
                  <div onClick={() => handleNewQuota("accident")}>
                    <img
                      src={options.accident ? iconRemove : iconAdd}
                      alt="iconOption"
                    />
                    <p>{options.accident ? "QUITAR" : "AGREGAR"}</p>
                  </div>
                </ContainerName>
                <ImageArrow
                  src={iconArrow}
                  alt="iconArrow"
                  option={2}
                  optionSelect={optionSelect}
                  onClick={() => handleOptionSelect(2)}
                />
              </ContainerHeader>
              <MessageOption option={2} optionSelect={optionSelect}>
                He salido de casa a las cuatro menos cinco para ir a la academia
                de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi
                bici, na llego a la academia que está en el centro del pueblo en
                una plaza medio-grande y dejo donde siempre la bici atada con
                una pitón a un sitio de esos de poner las bicis y mucho más
              </MessageOption>
            </ContainerOption>
          </>
        )}
      </div>
    </div>
  );
};

export default TabsPlan;
