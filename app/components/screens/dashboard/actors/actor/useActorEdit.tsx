import { getAdminUrl } from '@/configs/url.config'
import { actorServices } from '@/services/actor/actor.services'
import { getKeys } from '@/utils/object/get-keys/getKeys'
import { toastrError } from '@/utils/toastr-error'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { IActorEditInput } from './actor-edit.types'

const useActorEdit = (setValue: UseFormSetValue<IActorEditInput>) => {
	const { push, query } = useRouter()

	const actorId = String(query.id)

	const { isLoading, data: actor } = useQuery(
		['actor', actorId],
		() => actorServices.getById(actorId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).map((key) => {
					setValue(key, data[key])
				})
			},
			onError: (error) => {
				toastrError(error, 'Get actor')
			},
			enabled: !!query.id,
		},
	)

	const { mutateAsync } = useMutation(
		'update actor',
		(data: IActorEditInput) => actorServices.update(actorId, data),
		{
			onSuccess: () => {
				toastr.success('Update actor', 'update was successful')
				push(getAdminUrl('actors'))
			},
			onError: (error) => {
				toastrError(error, 'Update actor')
			},
		},
	)

	const onSubmit: SubmitHandler<IActorEditInput> = async (data) => {
		await mutateAsync(data)
	}
	return { onSubmit, isLoading, actor }
}
export default useActorEdit
