import { configureStore } from '@reduxjs/toolkit'
import boardReducer from './reducers/boardReducer'
import customSwitchReducer from './reducers/customSwitchReducer'
import optionsReducer from './reducers/optionsReducer'
import scoreReducer from './reducers/scoreReducer'
import snackBarInfoReducer from './reducers/snackBarInfoReducer'

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
    reducer: {
        board: boardReducer,
        customSwitch: customSwitchReducer,
        options: optionsReducer,
        score: scoreReducer,
        snackBarInfo: snackBarInfoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
