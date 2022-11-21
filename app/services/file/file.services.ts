import axiosAuth from '@/api/interceptors'

export const fileServices = {
	async upload(file: FormData, folder?: string) {
		return axiosAuth.post<{ url: string; name: string }[]>('/files', file, {
			params: {
				folder,
			},
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	},
}
