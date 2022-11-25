import { getAdminUrl } from '@/configs/url.config'
import { movieServices } from '@/services/movie/movie.services'
import { getKeys } from '@/utils/object/get-keys/getKeys'
import { toastrError } from '@/utils/toastr-error'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { IMovieEditInput } from './movie-edit.types'

const useMovieEdit = (setValue: UseFormSetValue<IMovieEditInput>) => {
	const { push, query } = useRouter()

	const movieId = String(query.id)

	const { isLoading, data: movie } = useQuery(
		['movie', movieId],
		() => movieServices.getById(movieId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).map((key) => {
					setValue(key, data[key])
				})
			},
			onError: (error) => {
				toastrError(error, 'Get movie')
			},
			enabled: !!query.id,
		},
	)

	const { mutateAsync } = useMutation(
		'update movie',
		(data: IMovieEditInput) => movieServices.update(movieId, data),
		{
			onSuccess: () => {
				toastr.success('Update movie', 'update was successful')
				push(getAdminUrl('movies'))
			},
			onError: (error) => {
				toastrError(error, 'Update movie')
			},
		},
	)

	const onSubmit: SubmitHandler<IMovieEditInput> = async (data) => {
		data.description = ''
		await mutateAsync(data)
	}
	return { onSubmit, isLoading, movie }
}
export default useMovieEdit
