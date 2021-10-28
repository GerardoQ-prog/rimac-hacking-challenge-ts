import styled from "styled-components";


export const ContainerFooter = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 30px 100px;
    color: ${props => props.theme.colors.input};
    @media (max-width:960px){
    padding: 10px 20px;
    }
`