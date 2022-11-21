import useDebounce from '@/hooks/useDebounce'
import { useMutation, useQuery } from 'react-query'
import { useState, ChangeEvent, useMemo } from 'react'
import { ITableItem } from '@/components/ui/admin-table/admin-table.types'
import { getAdminUrl } from '@/configs/url.config'
import { toastrError } from '@/utils/toastr-error'
import { toastr } from 'react-redux-toastr'
import { movieServices } from '@/services/movie/movie.services'
import { useRouter } from 'next/router'
import { generateListCommas } from '@/utils/generate-list/generateList'

const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm.trim())

	const { push } = useRouter()

	const queryData = useQuery(
		['get movie list', debouncedSearch],
		() => movieServices.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(movie): ITableItem => ({
						_id: movie._id,
						editUrl: getAdminUrl(`movie/edit/${movie._id}`),
						items: [movie.title, generateListCommas(movie.genres), movie.rating.toFixed()],
					}),
				),
			onError: (error) => {
				toastrError(error, 'Movie list')
			},
		},
	)
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: createAsync } = useMutation('create movie', () => movieServices.create(), {
		onError: (error) => {
			toastrError(error, 'Create movies')
		},
		onSuccess: ({ data: _id }) => {
			toastr.success('Create movies', 'create was successful')
			push(getAdminUrl(`/movie/edit/${_id}`))
		},
	})

	const { mutateAsync: deleteAsync } = useMutation(
		'delete movie',
		(movieId: string) => movieServices.delete(movieId),
		{
			onError: (error) => {
				toastrError(error, 'Delete movie')
			},
			onSuccess: () => {
				toastr.success('Delete movie', 'delete was successful')
				queryData.refetch()
			},
		},
	)
	return useMemo(
		() => ({ searchTerm, ...queryData, handleSearch, deleteAsync, createAsync }),
		[queryData, searchTerm, deleteAsync, createAsync],
	)
}
export default useMovies
