import { IOption } from '@/components/ui/form-elements/select/select.types'
import { genreServices } from '@/services/genre/genre.services'
import { toastrError } from '@/utils/toastr-error'
import { useQuery } from 'react-query'

const useAdminGenres = () => {
	const queryData = useQuery('list of genre', () => genreServices.getAll(), {
		select: ({ data }) =>
			data.map(
				(genre) =>
					({
						label: genre.name,
						value: genre._id,
					} as IOption),
			),
		onError(error) {
			toastrError(error, 'Genre list')
		},
	})

	return queryData
}
export default useAdminGenres
