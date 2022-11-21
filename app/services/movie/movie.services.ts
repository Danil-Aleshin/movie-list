import { IMovieEditInput } from '@/components/screens/admin/movie/movie-edit.types'
import { getMoviesUrl } from '@/configs/api.config'
import { IMovie } from '@/shared/types/movie.types'
import axiosAuth, { axiosDefault } from 'api/interceptors'

export const movieServices = {
	async getAll(searchTerm?: string) {
		return axiosDefault.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerm
				? {
					searchTerm,
				  }
				: {},
		})
	},
	async getBySlug(slug: string) {
		return axiosDefault.get<IMovie>(getMoviesUrl(`/by-slug/${slug}`))
	},
	async getById(_id: string) {
		return axiosAuth.get<IMovieEditInput>(getMoviesUrl(`/${_id}`))
	},
	async getByActor(actorId: string) {
		return axiosDefault.get<IMovie[]>(getMoviesUrl(`/by-actor/${actorId}`))
	},
	async getByGenres(genreIds: string[]) {
		return axiosDefault.post<IMovie[]>(getMoviesUrl('/by-genres'), {
			genreIds,
		})
	},
	async create() {
		return axiosAuth.post<string>(getMoviesUrl('/'))
	},
	async update(_id: string, data: IMovieEditInput) {
		return axiosAuth.put<string>(getMoviesUrl(`/${_id}`), data)
	},
	async getMostPopular() {
		return axiosDefault.get<IMovie[]>(getMoviesUrl('/most-popular'))
	},
	async delete(_id: string) {
		return axiosAuth.delete<string>(getMoviesUrl(`/${_id}`))
	},
	async updateCountOpened(slug: string) {
		return axiosAuth.post<string>(getMoviesUrl('/update-count-opened'),{
			slug
		})
	},
}
