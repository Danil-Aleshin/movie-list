import useDebounce from '@/hooks/useDebounce'
import { userServices } from '@/services/users/user.services'
import { useMutation, useQuery } from 'react-query'
import { useState, ChangeEvent, useMemo } from 'react'
import { ITableItem } from '@/components/ui/admin-table/admin-table.types'
import { convertMongoDate } from '@/utils/date/convertDate'
import { toastrError } from '@/utils/toastr-error'
import { toastr } from 'react-redux-toastr'

const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm.trim())
	
	const queryData = useQuery(
		['get user list', debouncedSearch],
		() => userServices.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(user): ITableItem => ({
						_id: user._id,
						items: [user.email, convertMongoDate(user.createdAt)],
					}),
				),
			onError: (error) => {
				toastrError(error, 'User list')
			},
		},
	)
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		'delete user',
		(userId: string) => userServices.delete(userId),
		{
			onError: (error) => {
				toastrError(error, 'Delete user')
			},
			onSuccess: () => {
				toastr.success('Delete user', 'delete was successful')
				queryData.refetch()
			},
		},
	)
	return useMemo(
		() => ({ searchTerm, ...queryData, handleSearch, deleteAsync }),
		[queryData, searchTerm, deleteAsync],
	)
}
export default useUsers
