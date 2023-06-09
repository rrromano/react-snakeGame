import { FC } from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'

import { RootState } from '../../../state/store'

const Score: FC = () => {
    //CustomSwitch props reducer
    const theme = useSelector((state: RootState) => state.customSwitch.theme)

    // Score props reducer
    const score = useSelector((state: RootState) => state.score.score)
    const highScore = useSelector((state: RootState) => state.score.highScore)

    return (
        <Grid container spacing={2} textAlign='center'>
            <Grid item xs={12} md={6} lg={12}>
                <Typography
                    variant='h4'
                    sx={{
                        color: theme === 'dark' ? 'lightgrey' : 'darkslategrey'
                    }}
                >
                    {`Score: ${score}`}
                </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={12}>
                <Typography
                    variant='h4'
                    sx={{
                        color: theme === 'dark' ? 'lightgrey' : 'darkslategrey'
                    }}
                >
                    {`High Score: ${highScore}`}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Score
