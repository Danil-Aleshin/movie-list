import useDebounce from '@/hooks/useDebounce'
import { useMutation, useQuery } from 'react-query'
import { useState, ChangeEvent, useMemo } from 'react'
import { ITableItem } from '@/components/ui/admin-table/admin-table.types'
import { getAdminUrl } from '@/configs/url.config'
import { toastrError } from '@/utils/toastr-error'
import { toastr } from 'react-redux-toastr'
import { actorServices } from '@/services/actor/actor.services'
import { useRouter } from 'next/router'

const useActors = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm.trim())

	const { push } = useRouter()

	const queryData = useQuery(
		['get actor list', debouncedSearch],
		() => actorServices.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(actor): ITableItem => ({
						_id: actor._id,
						editUrl: getAdminUrl(`actor/edit/${actor._id}`),
						items: [actor.name, String(actor.countMovies)],
					}),
				),
			onError: (error) => {
				toastrError(error, 'actor list')
			},
		},
	)
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: createAsync } = useMutation('create actor', () => actorServices.create(), {
		onError: (error) => {
			toastrError(error, 'Create actors')
		},
		onSuccess: ({ data: _id }) => {
			toastr.success('Create actors', 'create was successful')
			push(getAdminUrl(`/actor/edit/${_id}`))
		},
	})

	const { mutateAsync: deleteAsync } = useMutation(
		'delete actor',
		(actorId: string) => actorServices.delete(actorId),
		{
			onError: (error) => {
				toastrError(error, 'Delete actor')
			},
			onSuccess: () => {
				toastr.success('Delete actor', 'delete was successful')
				queryData.refetch()
			},
		},
	)
	return useMemo(
		() => ({ searchTerm, ...queryData, handleSearch, deleteAsync, createAsync }),
		[queryData, searchTerm, deleteAsync, createAsync],
	)
}
export default useActors
