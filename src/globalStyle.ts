import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 2rem;
    background-color: ${(props) =>
        props.theme === 'dark' ? 'black' : 'white'} ;
  }
`

export default GlobalStyle
