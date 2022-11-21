import { getStoreLocal } from '@/utils/local-storage'
import { createSlice } from '@reduxjs/toolkit'
import { register, login, checkAuth, logout } from './user.actions'
import { IInitionalState } from './user.types'

const initialState: IInitionalState = {
	user: getStoreLocal('user'),
	isLoading: false,
}
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			//register
			.addCase(register.pending, (state) => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(register.rejected, (state, { payload }) => {
				state.isLoading = false
				state.user = null
			})
			//login
			.addCase(login.pending, (state) => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(login.rejected, (state, { payload }) => {
				state.isLoading = false
				state.user = null
			})
			//logout
			.addCase(logout.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = null
			})
			//checkAuth
			.addCase(checkAuth.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
	},
})

export const { reducer } = userSlice
