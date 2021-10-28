import React from "react";
import bannerThanks from "../../../assets/images/background_thanks.svg";
import bannerThanksMobile from "../../../assets/images/background_thanks_mobile.svg";
import peopleThanks from "../../../assets/images/people_thanks.svg";
import peopleThanksMobile from "../../../assets/images/people_thanks_mobile.svg";
import {
  ContainerBanner,
  ImageBackground,
  ImageBackgroundMobile,
  ImagePeople,
  ImagePeopleMobile,
} from "./style";

const BannerThanks: React.FC = () => {
  return (
    <>
      <ContainerBanner>
        <ImageBackground src={bannerThanks} alt="bannerThanks" />
        <ImagePeople src={peopleThanks} alt="peopleThanks" />
        <ImageBackgroundMobile
          src={bannerThanksMobile}
          alt="bannerThanksMobile"
          width="100%"
          height="280px"
        />
        <ImagePeopleMobile src={peopleThanksMobile} alt="peopleThanksMobile" />
      </ContainerBanner>
    </>
  );
};

export default BannerThanks;
