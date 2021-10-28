import styled from "styled-components";

export const ContainerBack = styled.div`
    display: flex;
    align-items: center;
    margin: 30px 0px;
    cursor: pointer;
    @media (max-width:960px){
        display: none;
    }
`
export const TextBack = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: ${props => props.theme.colors.input};
    letter-spacing: 0.6px;
    margin-left: 10px;
`
export const TextWelcome = styled.div`
    color: ${props => props.theme.colors.text.primary};
    display: flex;
    font-size: 40px;
    @media (max-width:960px){
        display: none;
    }
`
export const TextWelcomeMobile = styled.p`
    display: none;
    @media (max-width:960px){
        display: flex;
        font-size:28px ;
        color: ${props => props.theme.colors.text.primary};
        margin-top: 50px;
    }
`
export const TextName = styled.p`
    color: ${props => props.theme.colors.primary};
    font-size: 40px;
    margin-left: 5px;
`
export const Text = styled.p`
    color: ${props => props.theme.colors.text.secondary};
    font-size: 16px;
    margin: 10px 0px;
    font-weight: 400;
`

export const Card = styled.div`
    position: relative;
    margin: 30px 0px;
    width: 100%;
    border: 3px solid #F0F2FA;
    border-radius: 12px;
    height: 170px;
    padding: 40px;
`
export const ImagePeople = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
`
export const License = styled.p`
    font-size: 14px;
    color: ${props => props.theme.colors.input};
    margin: 5px 0px;
`
export const LicenseTrademark = styled.p`
    font-size: 20px;
    color: ${props => props.theme.colors.text.primary};
    margin: 5px 0px;
    width: 192px;
`
export const ContainerValue = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
export const TextRange = styled.p`
    font-size: 12px;
    color: ${props => props.theme.colors.input};
    letter-spacing: 0.6px;
`
export const Value = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${props => props.theme.colors.input};
    border-radius: 8px;
    @media (max-width:960px){
        width: 100%;
        margin: 20px 0px;
        justify-content: space-between;
        height: 56px;
    }
`
export const TextValue = styled.p`
    font-size: 16px;
    color: ${props => props.theme.colors.text.primary};
`
export const ButtonValue = styled.button`
    border: none;
    outline: none;
    color: ${props => props.theme.colors.secondary};
    background: transparent;
    padding: 0px 20px;
    font-size: 20px;
    cursor: pointer;
`
export const Line = styled.div`
    width: 100%;
    height: 2px;
    background: ${props => props.theme.colors.background};
    margin: 40px 0px;
    @media (max-width:960px){
        display: none;
    }
`