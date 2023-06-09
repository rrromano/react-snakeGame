import { FC, useEffect, useState, useMemo, useCallback } from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'

import {
    BOARD_SIZE,
    DIRECTIONS,
    createBoard,
    randomIntFromRange,
    setItem
} from '../../../helpers'
import { useInterval } from '../../../customHooks'
import Row from '../Row'
import { BoardContainer } from './style'
import {
    setStartGameCounter,
    setTextGame,
    setGameOver,
    setSnake,
    setSnakeDir
} from '../../../state/reducers/boardReducer'
import {
    setTextButtonPlay,
    setIsPlaying,
    setReanude
} from '../../../state/reducers/optionsReducer'
import { setScore, setHighScore } from '../../../state/reducers/scoreReducer'
import {
    setTime,
    setMessage,
    setIcon,
    setShowSnackBar
} from '../../../state/reducers/snackBarInfoReducer'
import { RootState } from '../../../state/store'

const Board: FC = () => {
    // I check if the new snake head is present in snake body or if the new apple is present in the new snake body
    const checkCollision = (
        piece: Array<number>,
        snake: Array<Array<number>>
    ): Boolean => {
        for (let i = 0; i < snake.length; i++) {
            if (snake[i][0] === piece[0] && snake[i][1] === piece[1])
                return true
        }
        return false
    }

    // Create the new apple and verify that it is not in the snake
    const createNewApple = useCallback(
        (snake: Array<Array<number>>): Array<number> => {
            let newApple = [
                randomIntFromRange(1, BOARD_SIZE),
                randomIntFromRange(1, BOARD_SIZE)
            ]
            // I Check if the new apple is not in the snake
            while (checkCollision(newApple, snake)) {
                newApple = [
                    randomIntFromRange(1, BOARD_SIZE),
                    randomIntFromRange(1, BOARD_SIZE)
                ]
            }
            return newApple
        },
        []
    )

    const dispatch = useDispatch()

    // Board props reducer
    const startGameCounter = useSelector(
        (state: RootState) => state.board.startGameCounter
    )
    const textGame = useSelector((state: RootState) => state.board.textGame)
    const gameOver = useSelector((state: RootState) => state.board.gameOver)
    const snake = useSelector((state: RootState) => state.board.snake)
    const snakeDir = useSelector((state: RootState) => state.board.snakeDir)

    // CustomSwitch props reducer
    const theme = useSelector((state: RootState) => state.customSwitch.theme)

    // Options props reducer
    const level = useSelector((state: RootState) => state.options.level)
    const startGame = useSelector((state: RootState) => state.options.startGame)
    const reanude = useSelector((state: RootState) => state.options.reanude)

    // Score props reducer
    const highScore = useSelector((state: RootState) => state.score.highScore)

    // UseState for the apple
    const firstApple = useMemo(
        () => createNewApple(snake),
        [createNewApple, snake]
    )
    const [apple, setApple] = useState<Array<number>>(firstApple)

    // Board for the snake game
    const board = useMemo(() => createBoard(), [])

    // UseEffect for set the new dir for the snake, when it change his value
    useEffect(() => {
        // Set the new dir for the snake based on keydown
        const moveSnake = (e: KeyboardEvent) => {
            if (
                e.key === 'ArrowUp' ||
                e.key === 'ArrowDown' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight'
            ) {
                e.preventDefault()
                const newDir = DIRECTIONS[e.key as keyof typeof DIRECTIONS]
                // I check if the new movement is in the opposite direction and in this case I do not establish the same
                if (
                    newDir[0] + snakeDir[0] !== 0 &&
                    newDir[1] + snakeDir[1] !== 0
                )
                    dispatch(setSnakeDir(newDir))
            }
        }

        window.addEventListener('keydown', moveSnake)
        return () => {
            window.removeEventListener('keydown', moveSnake)
        }
    }, [snake, dispatch]) // eslint-disable-line react-hooks/exhaustive-deps

    // Interval for start game counter. It decreases by one per second.
    useInterval(
        () => changeStartGame(),
        reanude && startGameCounter !== 0 ? 1000 : null
    )

    // Interval for display Game Over text when you lost
    useInterval(() => changeTextGame(), gameOver ? 500 : null)

    // Interval for the game loop.
    useInterval(
        () => gameLoop(),
        // If gameOver is false, reanude is true and finished the counter, start de snake game
        !gameOver && reanude && startGameCounter === 0 ? level : null
    )

    // Discount one from the counter
    const changeStartGame = () => {
        dispatch(setStartGameCounter(startGameCounter - 1))
    }

    // Change game text to game over and empty string alternately for each time period
    const changeTextGame = () => {
        if (textGame.length > 0) {
            dispatch(setTextGame(''))
        } else {
            dispatch(setTextGame('GAME OVER!'))
        }
    }

    // I Check if the new snake head collision with some border
    const checkBorderCollision = (snakeHead: Array<number>): boolean => {
        // Border left: snakeHead[0] < 1
        // Border rigth: snakeHead[0] > BOARD_SIZE
        // Border top: snakeHead[1] < 1
        // Border bottom: snakeHead[1] > BOARD_SIZE
        return (
            snakeHead[0] < 1 ||
            snakeHead[0] > BOARD_SIZE ||
            snakeHead[1] < 1 ||
            snakeHead[1] > BOARD_SIZE
        )
    }

    // I check if the new snake head collision with the apple
    const checkAppleCollision = (snakeHead: Array<number>): Boolean => {
        return snakeHead[0] === apple[0] && snakeHead[1] === apple[1]
    }

    // Set score info
    const setScoreInfo = () => {
        const newScore = snake.length - 1
        // Set de new score
        dispatch(setScore(newScore))
        // If the new score is better than the last highScore, set the new highScore, save in local storage the value, and show the snackBar
        if (newScore > highScore) {
            dispatch(setHighScore(newScore))
            setItem('highScore', newScore)
            dispatch(setTime(6000))
            dispatch(setMessage('CONGRATS!! New high score established'))
            dispatch(setIcon('thumbUp'))
            dispatch(setShowSnackBar(true))
        }
    }

    // Finish the game
    const endGame = (): void => {
        dispatch(setTextButtonPlay('PLAY'))
        dispatch(setTextGame('GAME OVER!'))
        dispatch(setIsPlaying(false))
        dispatch(setReanude(false))
        dispatch(setGameOver(true))
        setScoreInfo()
    }

    // Main loop for snake game
    const gameLoop = (): void => {
        const snakeCopy = [...snake]
        // Set the new snake head and I add it at firts
        const newSnakeHead = [
            snakeCopy[0][0] + snakeDir[0],
            snakeCopy[0][1] + snakeDir[1]
        ]
        snakeCopy.unshift(newSnakeHead)

        // If the new snake head collision with some border or with the snake body, I finish the game
        if (
            checkBorderCollision(newSnakeHead) ||
            checkCollision(newSnakeHead, snake)
        ) {
            endGame()
            return
        }

        // If the new snake head collision with the apple, I don't remove the last item for the snake, and stablish the new apple position
        if (checkAppleCollision(newSnakeHead)) {
            let newApple = createNewApple(snakeCopy)
            setApple(newApple)
        } else {
            snakeCopy.pop()
        }
        // Set the new snake
        dispatch(setSnake(snakeCopy))
    }

    // Function for define the color of the title Board
    const defineTitleBoardColor = () => {
        if (gameOver) {
            return theme === 'dark' ? 'darkviolet' : 'indianred'
        } else {
            return theme === 'dark' ? 'lightgrey' : 'darkslategrey'
        }
    }

    return (
        <>
            <Grid container spacing={2} textAlign='center'>
                <Grid item xs={12}>
                    <Typography
                        variant='h3'
                        sx={{
                            color: defineTitleBoardColor()
                        }}
                        style={{ height: '50px' }}
                    >
                        {!startGame
                            ? ''
                            : startGameCounter !== 0
                            ? startGameCounter.toString()
                            : textGame}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <BoardContainer theme={theme}>
                        {board.map((row: Array<number>, indexRow: number) => {
                            return (
                                <Row
                                    key={indexRow}
                                    row={row}
                                    indexRow={indexRow + 1}
                                    snake={snake}
                                    apple={apple}
                                />
                            )
                        })}
                    </BoardContainer>
                </Grid>
            </Grid>
        </>
    )
}

export default Board
