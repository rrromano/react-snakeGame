import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getItem } from '../../helpers'

// Reducer for Score component

interface ScoreReducer {
    score: number
    highScore: number
    showSnackBar: boolean
}

const initialState: ScoreReducer = {
    score: 0,
    // HighScore value initialize with the value in local storage
    highScore:
        JSON.stringify(getItem('highScore')) === '{}'
            ? 0
            : getItem('highScore'),
    showSnackBar: false
}

const ScoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        setScore: (state: ScoreReducer, { payload }: PayloadAction<number>) => {
            state.score = payload
        },
        setHighScore: (
            state: ScoreReducer,
            { payload }: PayloadAction<number>
        ) => {
            state.highScore = payload
        },
        setShowSnackBar: (
            state: ScoreReducer,
            { payload }: PayloadAction<boolean>
        ) => {
            state.showSnackBar = payload
        }
    }
})

export const { setScore, setHighScore, setShowSnackBar } = ScoreSlice.actions

export default ScoreSlice.reducer
