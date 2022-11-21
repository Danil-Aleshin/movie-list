import { configureStore } from '@reduxjs/toolkit'
import { reducers } from './rootReducer'
export const sotre = configureStore({
	reducer: reducers,
	devTools: true,
})

export type TypeRootState = ReturnType<typeof sotre.getState>
