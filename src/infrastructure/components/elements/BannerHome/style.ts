import styled from "styled-components";


export const ContainerBanner = styled.div`
    position: relative;
    max-height: 100vh;
    height: 100%;
    z-index: -1;
    @media (max-width: 960px) {
        height: 310px;
        background: ${props => props.theme.colors.background};
    }
`
export const ImageBackground = styled.img`
    object-fit: cover;
    @media (max-width: 960px) {
        display: none;
    }
`
export const ImagePeople = styled.img`
    position: absolute;
    top: 20%;
    left: 30%;
    @media (max-width: 1400px) {
        top: 10%;
    }
    @media (max-width: 1100px) {
        top: 15%;
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
        right: 0;
    }
`

export const ContainerMessage = styled.div`
    position: absolute;
    top: 50%;
    left: 30%;
    width: 288px;
    @media (max-width: 960px) {
        top: 30%;
        left: 5%;
        width: 188px;
    }
`

export const MessageInitial = styled.p`
    font-size: 14px;
    color: ${props => props.theme.colors.text.primary};
    font-weight: bold;
    margin-bottom: 5px;
    letter-spacing: 0.8px;
`

export const MessagePrincipal = styled.div`
    font-size: 36px;
    color: ${props => props.theme.colors.primary};
    font-weight: 400;
    display: flex;
    @media (max-width: 960px) {
        font-size: 28px;

    }
`
export const PrincipalInitial = styled.p`
    color: ${props => props.theme.colors.text.primary};
    margin-right: 8px;
`
export const MessageDescription = styled.p`
    color: ${props => props.theme.colors.text.secondary};
    font-size: 14px;
    margin:10px 0px;
    font-weight: normal;
    line-height: 24px;

`