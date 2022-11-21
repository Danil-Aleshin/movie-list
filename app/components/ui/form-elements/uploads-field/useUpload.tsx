import { fileServices } from '@/services/file/file.services'
import { toastrError } from '@/utils/toastr-error'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useMutation } from 'react-query'

type TypeUpload = (
	onChange: (...e: any[]) => void,
	folder?: string,
) => {
	uploadFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
	isLoading: boolean
}

const useUpload: TypeUpload = (onChange, folder) => {
	const [isLoading, setIsLoading] = useState(false)

	const { mutateAsync } = useMutation(
		'upload file',
		(data: FormData) => fileServices.upload(data, folder),
		{
			onSuccess: ({ data }) => {
				onChange(data[0].url)
			},
			onError: (error) => {
				toastrError(error, 'Upload file')
			},
		},
	)

	const uploadFile = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			setIsLoading(true)

			const files = e.target.files
			if (!files?.length) return

			const formData = new FormData()

			formData.append('file', files[0])

			await mutateAsync(formData)

			setTimeout(() => {
				setIsLoading(false)
			}, 1000)
		},
		[mutateAsync],
	)

	return useMemo(
		() => ({
			isLoading,
			uploadFile,
		}),
		[uploadFile, isLoading],
	)
}
export default useUpload
