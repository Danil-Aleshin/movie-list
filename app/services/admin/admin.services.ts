import axiosAuth from '@/api/interceptors'
import { getStatisticsUrl, getUsersUrl } from '@/configs/api.config'

export const adminServices = {
	async getCountUsers() {
		return axiosAuth.get<number>(getUsersUrl('/count'))
	},
	async getCountMovies() {
		return axiosAuth.get<number>(getStatisticsUrl('/movies-count'))
	},
}
