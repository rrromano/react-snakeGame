import styled from 'styled-components'

interface RowContainerProps {
    cellsLength: number
}

export const RowContainer = styled.div<RowContainerProps>`
    display: grid;
    grid-template-columns: ${(props) => `repeat(${props.cellsLength}, 1fr)`};
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: '${(props) => {
        let value = ''
        for (let i = 1; i <= props.cellsLength; i++) {
            value += `Cell${i} `
        }
        return value.trim()
    }}';
`
