import styled from 'styled-components'

interface BoardContainterProps {
    theme: string
}

export const BoardContainer = styled.div<BoardContainterProps>`
    outline: ${(props) =>
        props.theme === 'dark'
            ? '2px solid lightgrey'
            : '2px solid darkslategrey'};

    @media (max-width: 1199px) {
        width: 60%;
        margin: auto;
    }
`
