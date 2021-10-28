import React from "react";
import bannerHome from "../../../assets/images/background_home.svg";
import peopleHome from "../../../assets/images/people_home.svg";
import peopleHomeMobile from "../../../assets/images/people_home_mobile.svg";
import {
  ContainerBanner,
  ContainerMessage,
  ImageBackground,
  ImagePeople,
  ImagePeopleMobile,
  MessageDescription,
  MessageInitial,
  MessagePrincipal,
  PrincipalInitial,
} from "./style";

const BannerHome: React.FC = () => {
  return (
    <>
      <ContainerBanner>
        <ImageBackground
          src={bannerHome}
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
          alt="banner_home"
        />
        <ImagePeople src={peopleHome} alt="people_home" />
        <ImagePeopleMobile src={peopleHomeMobile} />
        <ContainerMessage>
          <MessageInitial>¡NUEVO!</MessageInitial>
          <MessagePrincipal>
            <PrincipalInitial>Seguro</PrincipalInitial>
            <p>Vehicular</p>
          </MessagePrincipal>
          <MessagePrincipal>
            <p> Tracking</p>
          </MessagePrincipal>
          <MessageDescription>
            Cuentanos donde le haras seguimiento a tu seguro
          </MessageDescription>
        </ContainerMessage>
      </ContainerBanner>
    </>
  );
};

export default BannerHome;
