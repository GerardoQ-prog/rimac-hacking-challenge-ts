import styled from "styled-components";

export const ContainerTotal = styled.div`
    padding: 150px 20px;
    @media (max-width:960px){
        display: none;
    }
`
export const ContainerTotalMobile = styled.div`
    display: none;
    @media (max-width:960px){
        display: flex;
        justify-content: space-between;
        align-items: ce;
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
`

export const TitleValue = styled.p`
    font-size: 12px;
    color:${props => props.theme.colors.text.primary};
    letter-spacing: 0.6px;
    font-weight: bold;
`
export const Value = styled.p`
    font-size: 28px;
    color:${props => props.theme.colors.text.primary};
    margin: 5px 0px;
    font-weight: 400;
`

export const Line = styled.div`
    background: ${props => props.theme.colors.background};
    height: 2px;
    width: 225px;
    margin: 20px 0px 30px 0px;
`
export const TitlePrice = styled.p`
    font-size: 16px;
    color:${props => props.theme.colors.text.primary};
    font-weight: 400;
`

export const ContainerCheck = styled.div`
    display: flex;
    margin: 15px 0px;
    p{
        margin-left:10px;
        color: ${props => props.theme.colors.text.secondary};
    }
`
export const ButtonTotal = styled.button`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text.default};
    width: 224px;
    height: 56px;
    outline: none;
    margin-top: 40px;
    margin-bottom: 20px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    letter-spacing: 0.8px;
    cursor: pointer;
    @media (max-width: 960px) {
        width: 170px;
        margin-left: 0px;
        margin-top: 20px;
        font-size: 14px;
    }
`