import { IOption } from '@/components/ui/form-elements/select/select.types'
import { actorServices } from '@/services/actor/actor.services'
import { toastrError } from '@/utils/toastr-error'
import { useQuery } from 'react-query'

const useAdminActors = () => {
	const queryData = useQuery('list of actor', () => actorServices.getAll(), {
		select: ({ data }) =>
			data.map(
				(actor) =>
					({
						label: actor.name,
						value: actor._id,
					} as IOption),
			),
		onError(error) {
			toastrError(error, 'Actor list')
		},
	})

	return queryData
}
export default useAdminActors
