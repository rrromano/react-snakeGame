import { FC } from 'react'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button'
import { useSelector, useDispatch } from 'react-redux'

import { SNAKE_POSITION_START, SNAKE_DIRECTION_START } from '../../../helpers'
import {
    setStartGameCounter,
    setTextGame,
    setGameOver,
    setSnake,
    setSnakeDir
} from '../../../state/reducers/boardReducer'
import {
    setLevel,
    setTextButtonPlay,
    setStartGame,
    setIsPlaying,
    setReanude
} from '../../../state/reducers/optionsReducer'
import {
    setTime,
    setMessage,
    setIcon,
    setShowSnackBar
} from '../../../state/reducers/snackBarInfoReducer'
import { RootState } from '../../../state/store'

const Options: FC = () => {
    const dispatch = useDispatch()

    // CustomSwitch props reducer
    const theme = useSelector((state: RootState) => state.customSwitch.theme)

    // Options props reducer
    const textButtonPlay = useSelector(
        (state: RootState) => state.options.textButtonPlay
    )
    const startGame = useSelector((state: RootState) => state.options.startGame)
    const isPlaying = useSelector((state: RootState) => state.options.isPlaying)

    const handleChangeRadioLevel = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        dispatch(setLevel(+event.target.value))
    }

    // Set the initial values for start the game
    const playSnakeGame = () => {
        if (startGame) {
            dispatch(setStartGameCounter(3))
            dispatch(setTextGame('GOOD LUCK!'))
            dispatch(setSnake(SNAKE_POSITION_START))
            dispatch(setSnakeDir(SNAKE_DIRECTION_START))
            dispatch(setTime(3000))
            dispatch(setMessage('Use the arrow keys to move the snake'))
            dispatch(setIcon('info'))
        }
        dispatch(setStartGame(true))
        dispatch(setIsPlaying(true))
        dispatch(setGameOver(false))
        dispatch(setShowSnackBar(true))
    }

    // Restart the game
    const handleClickRestart = () => {
        playSnakeGame()
        dispatch(setTextButtonPlay('STOP'))
        dispatch(setReanude(true))
    }

    // Start the game
    const handleClickPlay = () => {
        if (textButtonPlay === 'PLAY' || textButtonPlay === 'REANUDE') {
            if (textButtonPlay === 'PLAY') {
                playSnakeGame()
            }
            dispatch(setTextButtonPlay('STOP'))
            dispatch(setReanude(true))
        } else {
            dispatch(setTextButtonPlay('REANUDE'))
            dispatch(setReanude(false))
        }
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <FormLabel
                    sx={{
                        color: theme === 'dark' ? 'lightgrey' : 'darkslategrey'
                    }}
                >
                    Choose Level:
                </FormLabel>
            </Grid>
            <Grid item xs={12} sm={6} lg={12}>
                <RadioGroup
                    row
                    defaultValue={200}
                    onChange={handleChangeRadioLevel}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <FormControlLabel
                                disabled={isPlaying}
                                value={200}
                                sx={{
                                    color:
                                        theme === 'dark'
                                            ? 'lightgrey'
                                            : 'darkslategrey',
                                    '& .MuiFormControlLabel-label.Mui-disabled':
                                        {
                                            color:
                                                theme === 'dark'
                                                    ? 'darkslategrey'
                                                    : 'lightgrey'
                                        }
                                }}
                                control={
                                    <Radio
                                        sx={{
                                            color:
                                                theme === 'dark'
                                                    ? 'lightgrey'
                                                    : 'darkslategrey',
                                            '&.Mui-checked': {
                                                color: 'green !important'
                                            },
                                            '&.Mui-disabled': {
                                                color:
                                                    theme === 'dark'
                                                        ? 'darkslategrey'
                                                        : 'lightgrey'
                                            }
                                        }}
                                    />
                                }
                                label='Easy'
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                disabled={isPlaying}
                                value={100}
                                sx={{
                                    color:
                                        theme === 'dark'
                                            ? 'lightgrey'
                                            : 'darkslategrey',
                                    '& .MuiFormControlLabel-label.Mui-disabled':
                                        {
                                            color:
                                                theme === 'dark'
                                                    ? 'darkslategrey'
                                                    : 'lightgrey'
                                        }
                                }}
                                control={
                                    <Radio
                                        sx={{
                                            color:
                                                theme === 'dark'
                                                    ? 'lightgrey'
                                                    : 'darkslategrey',
                                            '&.Mui-checked': {
                                                color: 'green !important'
                                            },
                                            '&.Mui-disabled': {
                                                color:
                                                    theme === 'dark'
                                                        ? 'darkslategrey'
                                                        : 'lightgrey'
                                            }
                                        }}
                                    />
                                }
                                label='Middle'
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                disabled={isPlaying}
                                value={65}
                                sx={{
                                    color:
                                        theme === 'dark'
                                            ? 'lightgrey'
                                            : 'darkslategrey',
                                    '& .MuiFormControlLabel-label.Mui-disabled':
                                        {
                                            color:
                                                theme === 'dark'
                                                    ? 'darkslategrey'
                                                    : 'lightgrey'
                                        }
                                }}
                                control={
                                    <Radio
                                        sx={{
                                            color:
                                                theme === 'dark'
                                                    ? 'lightgrey'
                                                    : 'darkslategrey',
                                            '&.Mui-checked': {
                                                color: 'green !important'
                                            },
                                            '&.Mui-disabled': {
                                                color:
                                                    theme === 'dark'
                                                        ? 'darkslategrey'
                                                        : 'lightgrey'
                                            }
                                        }}
                                    />
                                }
                                label='Hard'
                            />
                        </Grid>
                    </Grid>
                </RadioGroup>
            </Grid>
            <Grid item xs={6} sm={3} lg={6} textAlign='center'>
                <Button
                    sx={{
                        color: 'rgba(255, 0, 0)',
                        borderColor: 'rgba(255, 0, 0, 0.5)',
                        backgroundColor: theme === 'dark' ? 'black' : 'white',
                        '&:hover': {
                            backgroundColor:
                                theme === 'dark' ? 'black' : 'white',
                            border: '2px solid rgba(255, 0, 0)'
                        }
                    }}
                    variant='outlined'
                    onClick={handleClickRestart}
                >
                    Restart
                </Button>
            </Grid>
            <Grid item xs={6} sm={3} lg={6} textAlign='center'>
                <Button
                    sx={{
                        color: 'rgba(0, 128, 0)',
                        borderColor: 'rgba(0, 128, 0, 0.5)',
                        backgroundColor: theme === 'dark' ? 'black' : 'white',
                        '&:hover': {
                            backgroundColor:
                                theme === 'dark' ? 'black' : 'white',
                            border: '2px solid rgba(0, 128, 0)'
                        }
                    }}
                    variant='outlined'
                    onClick={handleClickPlay}
                >
                    {textButtonPlay}
                </Button>
            </Grid>
        </Grid>
    )
}

export default Options
