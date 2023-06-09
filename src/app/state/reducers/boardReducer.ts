import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { SNAKE_POSITION_START, SNAKE_DIRECTION_START } from '../../helpers'

// Reducer for board component

interface BoardReducer {
    startGameCounter: number
    textGame: string
    gameOver: boolean
    snake: Array<Array<number>>
    snakeDir: Array<number>
}

const initialState: BoardReducer = {
    startGameCounter: 3,
    textGame: 'GOOD LUCK!',
    gameOver: false,
    snake: SNAKE_POSITION_START,
    snakeDir: SNAKE_DIRECTION_START
}

const BoardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        setStartGameCounter: (
            state: BoardReducer,
            { payload }: PayloadAction<number>
        ) => {
            state.startGameCounter = payload
        },
        setTextGame: (
            state: BoardReducer,
            { payload }: PayloadAction<string>
        ) => {
            state.textGame = payload
        },
        setGameOver: (
            state: BoardReducer,
            { payload }: PayloadAction<boolean>
        ) => {
            state.gameOver = payload
        },
        setSnake: (
            state: BoardReducer,
            { payload }: PayloadAction<Array<Array<number>>>
        ) => {
            state.snake = payload
        },
        setSnakeDir: (
            state: BoardReducer,
            { payload }: PayloadAction<Array<number>>
        ) => {
            state.snakeDir = payload
        }
    }
})

export const {
    setStartGameCounter,
    setTextGame,
    setGameOver,
    setSnake,
    setSnakeDir
} = BoardSlice.actions

export default BoardSlice.reducer
