import axiosAuth, { axiosDefault } from '@/api/interceptors'
import { IActorEditInput } from '@/components/screens/admin/actor/actor-edit.types'
import { getActorsUrl } from '@/configs/api.config'
import { IActor } from '@/shared/types/movie.types'

export const actorServices = {
	async getAll(searchTerm?: string) {
		return axiosDefault.get<IActor[]>(getActorsUrl(''), {
			params: searchTerm
				? {
					searchTerm,
				  }
				: {},
		})
	},
	async getById(_id: string) {
		return axiosAuth.get<IActorEditInput>(getActorsUrl(`/${_id}`))
	},
	async getBySlug(slug: string) {
		return axiosDefault.get<IActor>(getActorsUrl(`/by-slug/${slug}`))
	},
	async create() {
		return axiosAuth.post<string>(getActorsUrl('/'))
	},
	async update(_id: string, data: IActorEditInput) {
		return axiosAuth.put<string>(getActorsUrl(`/${_id}`), data)
	},
	async delete(_id: string) {
		return axiosAuth.delete<string>(getActorsUrl(`/${_id}`))
	},
}
