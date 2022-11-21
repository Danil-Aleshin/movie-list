import { userServices } from '@/services/users/user.services'
import { toastrError } from '@/utils/toastr-error'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { IProfileInput } from './profile.types'

const useProfile = (setValue: UseFormSetValue<IProfileInput>) => {
	const { isLoading } = useQuery('profile', () => userServices.getProfile(), {
		onSuccess({ data }) {
			setValue('email', data.email)
		},
		onError(error) {
			toastrError(error, 'Get profile')
		},
	})

	const { mutateAsync } = useMutation(
		'update profile',
		(data: IProfileInput) => userServices.upDateProfile(data),
		{
			onError(error) {
				toastrError(error, 'Update profile')
			},
			onSuccess() {
				toastr.success('Update profile', 'update was successful')
			},
		},
	)

	const onSubmit: SubmitHandler<IProfileInput> = async (data) => {
		await mutateAsync(data)
	}
	return { onSubmit, isLoading }
}
export default useProfile
