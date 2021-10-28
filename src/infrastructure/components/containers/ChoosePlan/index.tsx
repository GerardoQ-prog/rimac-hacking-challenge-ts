import React from "react";
import { OptionsProps } from "../../../../domain/models/Plan";
import InfoUserPlan from "../../elements/InfoUserPlan";
import TabsPlan from "../../elements/TabsPlan";
import TotalPlan from "../../elements/TotalPlan";
import { WrapperGeneral, WrapperGrid } from "../Wrappers";
import { Container } from "./style";

const ChoosePlan = () => {
  const [value, setValue] = React.useState<number>(12500);
  const [quota, setQuota] = React.useState<number>(20);
  const [options, setOptions] = React.useState<OptionsProps>({
    tire: null,
    damage: null,
    accident: null,
  });

  const handleAdd = () => {
    if (value < 16500) {
      setValue(value + 100);
    }
  };

  const handleRemove = () => {
    if (value > 12500) {
      setValue(value - 100);
    }
  };

  const handleNewQuota = (type: string) => {
    const { tire, damage, accident } = options;
    setOptions({
      ...options,
      [type]: true,
    });
    if (type === "tire") {
      if (tire) {
        setOptions({
          ...options,
          [type]: null,
        });
        setQuota(quota - 15);
      } else {
        setOptions({
          ...options,
          [type]: true,
        });
        setQuota(quota + 15);
      }
    }
    if (type === "damage") {
      if (damage) {
        setOptions({
          ...options,
          [type]: null,
        });
        setQuota(quota - 20);
      } else {
        setOptions({
          ...options,
          [type]: true,
        });
        setQuota(quota + 20);
      }
    }
    if (type === "accident") {
      if (accident) {
        setOptions({
          ...options,
          [type]: null,
        });
        setQuota(quota - 50);
      } else {
        setOptions({
          ...options,
          [type]: true,
        });
        setQuota(quota + 50);
      }
    }
  };

  return (
    <WrapperGeneral>
      <WrapperGrid percentage={40}>
        <Container>
          <InfoUserPlan
            handleAdd={handleAdd}
            handleRemove={handleRemove}
            value={value}
          />
          <TabsPlan
            value={value}
            handleNewQuota={handleNewQuota}
            options={options}
          />
        </Container>
        <Container>
          <TotalPlan quota={quota} value={value} />
        </Container>
      </WrapperGrid>
    </WrapperGeneral>
  );
};

export default ChoosePlan;
