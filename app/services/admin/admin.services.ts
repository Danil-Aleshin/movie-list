import axiosAuth from '@/api/interceptors'
import { getUsersUrl } from '@/configs/api.config'

export const adminServices = {
	async getCountUsers() {
		return axiosAuth.get<number>(getUsersUrl('/count'))
	},
}
