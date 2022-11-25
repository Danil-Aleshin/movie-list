import useDebounce from '@/hooks/useDebounce'
import { useMutation, useQuery } from 'react-query'
import { useState, ChangeEvent, useMemo } from 'react'
import { ITableItem } from '@/components/ui/admin-table/admin-table.types'
import { getAdminUrl } from '@/configs/url.config'
import { toastrError } from '@/utils/toastr-error'
import { toastr } from 'react-redux-toastr'
import { genreServices } from '@/services/genre/genre.services'
import { useRouter } from 'next/router'

const useGenres = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm.trim())

	const { push } = useRouter()

	const queryData = useQuery(
		['get genre list', debouncedSearch],
		() => genreServices.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(genre): ITableItem => ({
						_id: genre._id,
						editUrl: getAdminUrl(`genre/edit/${genre._id}`),
						items: [genre.name, genre.slug],
					}),
				),
			onError: (error) => {
				toastrError(error, 'genre list')
			},
		},
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: createAsync } = useMutation('create genre', () => genreServices.create(), {
		onError: (error) => {
			toastrError(error, 'Create genre')
		},
		onSuccess: ({ data: _id }) => {
			toastr.success('Create genre', 'create was successful')
			push(getAdminUrl(`/genre/edit/${_id}`))
		},
	})

	const { mutateAsync: deleteAsync } = useMutation(
		'delete genre',
		(genreId: string) => genreServices.delete(genreId),
		{
			onError: (error) => {
				toastrError(error, 'Delete genre')
			},
			onSuccess: () => {
				toastr.success('Delete genre', 'delete was successful')
				queryData.refetch()
			},
		},
	)
	return useMemo(
		() => ({ searchTerm, ...queryData, handleSearch, deleteAsync, createAsync }),
		[queryData, searchTerm, deleteAsync, createAsync],
	)
}
export default useGenres
