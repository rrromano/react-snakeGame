import styled from 'styled-components'

interface CellContainterProps {
    cell: number
    color: string
    border: string
}

export const CellContainer = styled.div<CellContainterProps>`
    grid-area: ${(props) => `Cell${props.cell}`};
    aspect-ratio: 1;
    background-color: ${(props) => props.color};
    border: ${(props) => props.border};
`
