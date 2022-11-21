import { errorCatch } from '@/api/api.helpers'
import { authServices } from '@/services/auth/auth.services'
import { toastrError } from '@/utils/toastr-error'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'
import { IAuthResponse, IEmailPassword } from './user.types'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await authServices.register(email, password)
			toastr.success('Registration', 'Completed successfuly')
			return response.data
		} catch (error) {
			toastrError(error)
			return thunkApi.rejectWithValue(error)
		}
	},
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await authServices.login(email, password)
			toastr.success('Login', 'Completed successfuly')
			return response.data
		} catch (error) {
			toastrError(error)
			return thunkApi.rejectWithValue(error)
		}
	},
)

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
	await authServices.logout()
})

export const checkAuth = createAsyncThunk<IAuthResponse>('auth/check-auth', async (_, thunkAPI) => {
	try {
		const response = await authServices.getNewTokens()
		return response.data
	} catch (error) {
		if (errorCatch(error) === 'jwt expired') {
			toastr.error('Logout', 'Your authorizaiton is finished, plz sign in again')
			thunkAPI.dispatch(logout())
		}
		return thunkAPI.rejectWithValue(error)
	}
})
