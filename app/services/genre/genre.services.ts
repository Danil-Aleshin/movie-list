import { ICollection } from '@/components/screens/collections/collections.types'
import { IGenreEditInput } from '@/components/screens/dashboard/genres/genre/genre-edit.types'
import { getGenresUrl } from '@/configs/api.config'
import { IGenre } from '@/shared/types/movie.types'
import axiosAuth, { axiosDefault } from 'api/interceptors'

export const genreServices = {
	async getAll(searchTerm?: string) {
		return axiosDefault.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm
				? {
					searchTerm,
				  }
				: {},
		})
	},
	async getBySlug(slug: string) {
		return axiosDefault.get<IGenre>(getGenresUrl(`/by-slug/${slug}`))
	},
	async collections() {
		return axiosDefault.get<ICollection[]>(getGenresUrl('/collections'))
	},
	async getById(_id: string) {
		return axiosAuth.get<IGenreEditInput>(getGenresUrl(`/${_id}`))
	},
	async create() {
		return axiosAuth.post<string>(getGenresUrl('/'))
	},
	async update(_id: string, data: IGenreEditInput) {
		return axiosAuth.put<string>(getGenresUrl(`/${_id}`), data)
	},
	async delete(_id: string) {
		return axiosAuth.delete<string>(getGenresUrl(`/${_id}`))
	},
}
