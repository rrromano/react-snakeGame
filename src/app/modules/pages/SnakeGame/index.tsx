import { FC } from 'react'
import Grid from '@mui/material/Grid'
import { useSelector } from 'react-redux'

import CustomSwitch from '../../components/CustomSwitch'
import Board from '../../components/Board'
import Score from '../../components/Score'
import Options from '../../components/Options'
import SnackBarInfo from '../../components/SnackBarInfo'
import GlobalStyle from '../../../../globalStyle'
import { RootState } from '../../../state/store'

const SnakeGame: FC = () => {
    // CustomSwitch props reducer
    const theme = useSelector((state: RootState) => state.customSwitch.theme)

    return (
        <>
            <GlobalStyle theme={theme} />
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={12}
                    style={{ paddingTop: '0px', textAlign: 'right' }}
                >
                    <CustomSwitch />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Options />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Board />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Score />
                </Grid>
            </Grid>
            <SnackBarInfo />
        </>
    )
}

export default SnakeGame
