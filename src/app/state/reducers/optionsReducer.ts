import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Reducer for Options component

interface OptionsReducer {
    level: number
    textButtonPlay: string
    startGame: boolean
    isPlaying: boolean
    reanude: boolean
}

const initialState: OptionsReducer = {
    level: 200,
    textButtonPlay: 'PLAY',
    startGame: false,
    isPlaying: false,
    reanude: false
}

const OptionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        setLevel: (
            state: OptionsReducer,
            { payload }: PayloadAction<number>
        ) => {
            state.level = payload
        },
        setTextButtonPlay: (
            state: OptionsReducer,
            { payload }: PayloadAction<string>
        ) => {
            state.textButtonPlay = payload
        },
        setStartGame: (
            state: OptionsReducer,
            { payload }: PayloadAction<boolean>
        ) => {
            state.startGame = payload
        },
        setIsPlaying: (
            state: OptionsReducer,
            { payload }: PayloadAction<boolean>
        ) => {
            state.isPlaying = payload
        },
        setReanude: (
            state: OptionsReducer,
            { payload }: PayloadAction<boolean>
        ) => {
            state.reanude = payload
        }
    }
})

export const {
    setLevel,
    setTextButtonPlay,
    setStartGame,
    setIsPlaying,
    setReanude
} = OptionsSlice.actions

export default OptionsSlice.reducer
