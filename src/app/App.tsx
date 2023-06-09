import { store } from './state/store'
import { Provider } from 'react-redux'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import SnakeGame from './modules/pages/SnakeGame'

// Theme for set the custom typography
const theme = createTheme({
    typography: {
        fontFamily: `'VT323', 'monospace'`,
        fontSize: 17
    }
})

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <SnakeGame />
            </ThemeProvider>
        </Provider>
    )
}

export default App
