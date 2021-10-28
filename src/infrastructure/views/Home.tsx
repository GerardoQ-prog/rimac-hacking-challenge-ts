import React from "react";
import { WrapperGeneral, WrapperGrid } from "../components/containers/Wrappers";
import BannerHome from "../components/elements/BannerHome";
import FormHome from "../components/elements/FormHome";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";

const HomeView: React.FC = () => {
  return (
    <WrapperGeneral>
      <Header />
      <WrapperGrid percentage={60}>
        <BannerHome />
        <FormHome />
      </WrapperGrid>
      <Footer />
    </WrapperGeneral>
  );
};

export default HomeView;
