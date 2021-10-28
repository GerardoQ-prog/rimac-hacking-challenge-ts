import styled from "styled-components";

interface GridProps {
    percentage: number
}

export const General = styled.div`
    min-height: 100vh !important;
    position: relative;
`

export const Grid = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: auto ${(props: GridProps) => props.percentage + '%'};
    @media (max-width: 960px) {
        grid-template-columns: 100%; 
    }

`