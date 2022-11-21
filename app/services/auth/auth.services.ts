import { getContentType } from '@/api/api.helpers'
import { axiosDefault } from '@/api/interceptors'
import { getAuthUrl } from '@/configs/api.config'
import { removeTokensStorage, saveToStorage } from '@/store/user/auth.helper'
import { IAuthResponse } from '@/store/user/user.types'
import Cookies from 'js-cookie'
export const authServices = {
	async register(email: string, password: string) {
		const response = await axiosDefault.post<IAuthResponse>(getAuthUrl('/register'), {
			email,
			password,
		})
		if (response.data.accessToken) {
			saveToStorage(response.data)
		}
		return response
	},

	async login(email: string, password: string) {
		const response = await axiosDefault.post<IAuthResponse>(getAuthUrl('/login'), {
			email,
			password,
		})
		if (response.data.accessToken) saveToStorage(response.data)

		return response
	},

	logout() {
		removeTokensStorage(), localStorage.removeItem('user')
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const response = await axiosDefault.post<IAuthResponse>(
			getAuthUrl('/login/access-token'),
			{
				refreshToken,
			},
			{
				headers: getContentType(),
			},
		)
		if (response.data.accessToken) saveToStorage(response.data)

		return response
	},
}
