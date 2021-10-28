import React from "react";
import ChoosePlan from "../components/containers/ChoosePlan";
import { WrapperGeneral, WrapperGrid } from "../components/containers/Wrappers";
import Steps from "../components/elements/Steps";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";

const PlanView: React.FC = () => {
  return (
    <WrapperGeneral>
      <Header boxShadow />
      <WrapperGrid percentage={75}>
        <Steps />
        <ChoosePlan />
      </WrapperGrid>
      <Footer />
    </WrapperGeneral>
  );
};

export default PlanView;
