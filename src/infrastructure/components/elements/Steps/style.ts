import styled, { DefaultTheme } from "styled-components";

interface StepProps {
    selected?: boolean,
    theme?: DefaultTheme
}

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 60px;
    @media (max-width:960px){
        height: 50px;
        z-index:999;
    }
`
export const ContainerSteps = styled.div`
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.background};
    display: flex;
    align-items: center;
    padding: 20px 30px;
    flex-direction: column;
    @media (max-width:960px){
        display: none;
    }
`
export const StepNumber = styled.div`
    display: flex;
    width: 225px;
    margin:30px 0px;
    align-items: center;
    cursor: pointer;
`

export const Number = styled.p`
    background: ${ (props : StepProps) => props.selected ? props.theme?.colors.secondary : 'transparent'};
    padding: 5px;
    border-radius: 50px;
    width: 30px;
    text-align: center;
    margin-right: 30px;
    color: ${ (props : StepProps) => props.selected ? props.theme?.colors.text.default : props.theme?.colors.input} ;
    border:${ (props : StepProps) => props.selected ? 'none' : `1px solid ${props.theme?.colors.input}`} ; ;
`
export const StepName = styled.p`
    font-size: 16px;
    color: ${ (props : StepProps) => props.selected ? props.theme?.colors.text.primary : props.theme?.colors.input};
    font-weight: normal;

`
export const ContainerStepsMobile = styled.div`
    display: none;
    @media (max-width:960px){
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
`
export const StepCurrent = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`
export const TextCurrent = styled.p`
    color: ${ (props ) => props.theme.colors.text.primary};
    font-weight: bold;
    letter-spacing: 0.8px;
    margin-left: 10px;
    font-size: 10px;
`
export const ProgressBar = styled.div`
    background:${ (props ) => props.theme.colors.secondary} ;
    width: 180px;
    height: 6px;
    margin:0px 20px;
    border-radius: 20px;
`