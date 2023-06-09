import { FC } from 'react'
import Snackbar from '@mui/material/Snackbar'
import ThumbUp from '@mui/icons-material/ThumbUp'
import Info from '@mui/icons-material/Info'
import { useSelector, useDispatch } from 'react-redux'

import { setShowSnackBar } from '../../../state/reducers/snackBarInfoReducer'
import { RootState } from '../../../state/store'
import { SpanStyled } from './style'

const SnackBarInfo: FC = () => {
    const dispatch = useDispatch()

    // CustomSwitch props reducer
    const theme = useSelector((state: RootState) => state.customSwitch.theme)

    // SnackBarInfo props reducer
    const time = useSelector((state: RootState) => state.snackBarInfo.time)
    const message = useSelector(
        (state: RootState) => state.snackBarInfo.message
    )
    const icon = useSelector((state: RootState) => state.snackBarInfo.icon)
    const showSnackBar = useSelector(
        (state: RootState) => state.snackBarInfo.showSnackBar
    )

    // Function for close the snackBar
    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return
        }
        dispatch(setShowSnackBar(false))
    }

    return (
        <Snackbar
            ContentProps={{
                sx: {
                    background: theme === 'dark' ? 'lightgrey' : 'darkslategrey'
                }
            }}
            open={showSnackBar}
            autoHideDuration={time}
            onClose={handleClose}
            message={
                <SpanStyled theme={theme}>
                    {icon.toLowerCase() === 'info' ? (
                        <Info fontSize='small' sx={{ marginRight: '8px' }} />
                    ) : (
                        <ThumbUp fontSize='small' sx={{ marginRight: '8px' }} />
                    )}
                    {message}
                </SpanStyled>
            }
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        ></Snackbar>
    )
}

export default SnackBarInfo
