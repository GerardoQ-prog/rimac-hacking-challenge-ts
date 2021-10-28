import styled from "styled-components";


export const ContainerBanner = styled.div`
    position: relative;
    max-height: 100vh;
    height: 100vh;
    z-index: -1;
    background: ${props=>props.theme.colors.background};
    @media (max-width: 960px) {
        height: 280px;
        margin-top: 60px;
    }
`
export const ImageBackground = styled.img`
    position: absolute;
    top: 25%;
    left: 20%;
    @media (max-width: 960px) {
        display: none;
    }
`
export const ImageBackgroundMobile = styled.img`
    display: none;
    @media (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
    }
`

export const ImagePeople = styled.img`
    position: absolute;
    top: 25%;
    left: 60%;
    @media (max-width: 1400px) {
        top: 15%;
        left: 65%;
    }
    @media (max-width: 960px) {
        display: none;
    }
`
export const ImagePeopleMobile = styled.img`
    display: none;
    @media (max-width: 960px) {
        display: block;
        position: absolute;
        bottom: 0;
        right: 20%;
    }
`