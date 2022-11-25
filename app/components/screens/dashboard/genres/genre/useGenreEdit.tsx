import { getAdminUrl } from '@/configs/url.config'
import { genreServices } from '@/services/genre/genre.services'
import { getKeys } from '@/utils/object/get-keys/getKeys'
import { toastrError } from '@/utils/toastr-error'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { IGenreEditInput } from './genre-edit.types'

const useGenreEdit = (setValue: UseFormSetValue<IGenreEditInput>) => {
	const { push, query } = useRouter()

	const genreId = String(query.id)

	const { isLoading, data: genre } = useQuery(
		['genre', genreId],
		() => genreServices.getById(genreId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).map((key:any) => {
					setValue(key, data[key])
				})
			},
			onError: (error) => {
				toastrError(error, 'Get genre')
			},
			enabled: !!query.id,
		},
	)

	const { mutateAsync } = useMutation(
		'update genre',
		(data: IGenreEditInput) => genreServices.update(genreId, data),
		{
			onSuccess: () => {
				toastr.success('Update Genre', 'update was successful')
				push(getAdminUrl('genres'))
			},
			onError: (error) => {
				toastrError(error, 'Update genre')
			},
		},
	)

	const onSubmit: SubmitHandler<IGenreEditInput> = async (data) => {
		await mutateAsync(data)
	}
	return { onSubmit, isLoading, genre }
}
export default useGenreEdit
