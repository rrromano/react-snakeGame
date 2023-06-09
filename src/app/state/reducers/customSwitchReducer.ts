import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Reducer for CustomSwitch component

interface CustomSwitchReducer {
    theme: string
}

const initialState: CustomSwitchReducer = {
    theme: 'dark'
}

const CustomSwitchSlice = createSlice({
    name: 'customSwitch',
    initialState,
    reducers: {
        setTheme: (
            state: CustomSwitchReducer,
            { payload }: PayloadAction<string>
        ) => {
            state.theme = payload
        }
    }
})

export const { setTheme } = CustomSwitchSlice.actions

export default CustomSwitchSlice.reducer
