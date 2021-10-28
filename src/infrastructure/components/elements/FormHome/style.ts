import styled from "styled-components";

export const TitleForm = styled.p`
    font-size: 28px;
    color:${props =>props.theme.colors.text.primary};
    font-weight: 400;
    margin-left: -85px;
    margin-bottom: 20px;
`

export const ContainerForm = styled.div`
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
    width: 192px;
    height: 56px;
    outline: none;
    margin-left: -100px;
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
export const TextError = styled.p`
    font-size: 11px;
    color: ${props => props.theme.colors.primary};
    width: 288px;

`