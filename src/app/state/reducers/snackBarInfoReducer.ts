import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Reducer for SnackBarInfo component

interface SnackBarInfoReducer {
    time: number
    message: string
    icon: string
    showSnackBar: boolean
}

const initialState: SnackBarInfoReducer = {
    time: 3000,
    message: 'Use the arrow keys to move the snake',
    icon: 'info',
    showSnackBar: false
}

const SnackBarInfoSlice = createSlice({
    name: 'snackBarInfo',
    initialState,
    reducers: {
        setTime: (
            state: SnackBarInfoReducer,
            { payload }: PayloadAction<number>
        ) => {
            state.time = payload
        },
        setMessage: (
            state: SnackBarInfoReducer,
            { payload }: PayloadAction<string>
        ) => {
            state.message = payload
        },
        setIcon: (
            state: SnackBarInfoReducer,
            { payload }: PayloadAction<string>
        ) => {
            state.icon = payload
        },
        setShowSnackBar: (
            state: SnackBarInfoReducer,
            { payload }: PayloadAction<boolean>
        ) => {
            state.showSnackBar = payload
        }
    }
})

export const { setTime, setMessage, setIcon, setShowSnackBar } =
    SnackBarInfoSlice.actions

export default SnackBarInfoSlice.reducer
