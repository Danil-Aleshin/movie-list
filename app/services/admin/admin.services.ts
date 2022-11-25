import axiosAuth from '@/api/interceptors'
import { getStatisticsUrl, getUsersUrl } from '@/configs/api.config'
import { IMovie } from '@/shared/types/movie.types'

export const adminServices = {
	async getCountUsers() {
		return axiosAuth.get<number>(getUsersUrl('/count'))
	},
	async getCountMovies() {
		return axiosAuth.get<number>(getStatisticsUrl('/movies-count'))
	},
	async getMostPopularMovie() {
		return axiosAuth.get<IMovie[]>(getStatisticsUrl('/most-popular-movie'))
	},
	async getTotalViews() {
		return axiosAuth.get<number>(getStatisticsUrl('/views'))
	},
}
