import styled from 'styled-components'

interface SpanStyledProps {
    theme: string
}

export const SpanStyled = styled.span<SpanStyledProps>`
    display: flex !important;
    alignitems: center !important;
    color: ${(props) =>
        props.theme === 'dark' ? 'black' : 'white'} !important;
`
