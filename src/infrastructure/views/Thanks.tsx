import React from "react";
import { WrapperGeneral, WrapperGrid } from "../components/containers/Wrappers";
import BannerThanks from "../components/elements/BannerThanks";
import MessageThanks from "../components/elements/MessageThanks";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";

const ThanksView: React.FC = () => {
  return (
    <WrapperGeneral>
      <Header boxShadow />
      <WrapperGrid percentage={70}>
        <BannerThanks />
        <MessageThanks />
      </WrapperGrid>
      <Footer />
    </WrapperGeneral>
  );
};

export default ThanksView;
