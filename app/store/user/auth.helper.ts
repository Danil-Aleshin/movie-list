import { IAuthResponse, ITokens } from './user.types'
import Cookies from 'js-cookie'

export const saveTokensStorage = (data: ITokens) => {
	Cookies.set('accessToken', data.accessToken)
	Cookies.set('refreshToken', data.refreshToken)
}

export const removeTokensStorage = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
}

export const saveToStorage = (data: IAuthResponse) => {
	saveTokensStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}
