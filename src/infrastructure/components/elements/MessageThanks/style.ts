import styled from "styled-components";

export const TitlePrincipal = styled.p`
    font-size: 36px;
    color:${props =>props.theme.colors.primary};
    font-weight: 400;
    margin-bottom: 20px;
    width: 480px;
    @media (max-width: 960px) {
        width: 100%;
        font-size: 28px;
    }
`
export const TitleSecondary = styled.p`
    font-size: 36px;
    color:${props =>props.theme.colors.text.primary};
    font-weight: 400;
    margin-bottom: 20px;
    width: 480px;
    @media (max-width: 960px) {
        width: 100%;
        font-size: 28px;
    }
`
export const TitleDescription = styled.p`
    font-size: 16px;
    color:${props =>props.theme.colors.input};
    font-weight: 400;
    margin-bottom: 20px;
    width: 480px;
    line-height: 28px;
    @media (max-width: 960px) {
        width: 100%;
    }
`
export const TitleEmail= styled.p`
    font-size: 16px;
    color:${props =>props.theme.colors.text.primary};
    font-weight: 400;
    margin-bottom: 20px;
    width: 480px;
    line-height: 28px;
    @media (max-width: 960px) {
        width: 100%;
    }
`

export const ContainerMessage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;

`
export const ButtonForm = styled.button`
    background: ${props => props.theme.colors.primary};
    color: white;
    width: 255px;
    height: 56px;
    outline: none;
    margin-left: -220px;
    margin-top: 40px;
    margin-bottom: 30px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    letter-spacing: 0.8px;
    cursor: pointer;
    @media (max-width: 500px) {
        width: 296px;
        margin-left: 0px;
        margin-top: 20px;
        font-size: 14px;
    }
`
