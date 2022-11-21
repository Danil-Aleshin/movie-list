import axiosAuth from '@/api/interceptors'
import { IProfileInput } from '@/components/screens/profile/profile.types'
import { getUsersUrl } from '@/configs/api.config'
import { IMovie } from '@/shared/types/movie.types'
import { IUser } from '@/shared/types/user.types'

export const userServices = {
	async getAll(searchTerm?: string) {
		return axiosAuth.get<IUser[]>(getUsersUrl(''), {
			params: searchTerm
				? {
					searchTerm,
				  }
				: {},
		})
	},
	async getProfile() {
		return axiosAuth.get<IUser>(getUsersUrl('/profile'))
	},
	async delete(_id: string) {
		return axiosAuth.delete<string>(getUsersUrl(`/${_id}`))
	},
	async upDateProfile(data: IProfileInput) {
		return axiosAuth.put<string>(getUsersUrl('/profile'), data)
	},
	async getFavorites() {
		return axiosAuth.get<IMovie[]>(getUsersUrl('/profile/favorites'))
	},
	async toggleFavorite(movieId: string) {
		return axiosAuth.post(getUsersUrl('/profile/favorites'), {
			movieId,
		})
	},
}
