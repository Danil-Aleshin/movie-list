import axiosAuth from 'api/interceptors'

import { getRatingUrl } from '@/configs/api.config'

export const ratingServices = {
	async set(movieId: string, value: number) {
		return axiosAuth.post<string>(getRatingUrl('/set-rating'), {
			movieId,
			value,
		})
	},

	async getByUser(movieId: string) {
		return axiosAuth.get<number>(getRatingUrl(`/${movieId}`))
	},
}
