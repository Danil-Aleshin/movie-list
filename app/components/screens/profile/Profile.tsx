import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { IProfileInput } from './profile.types'
import useProfile from './useProfile'
import styles from './Profile.module.scss'
import AuthFields from '../auth/AuthFields'
import Button from '@/components/ui/form-elements/Button'

interface IProfile {}

const Profile: FC<IProfile> = ({}) => {
	const { handleSubmit, register, formState, setValue } = useForm<IProfileInput>({
		mode: 'onChange',
	})

	const { onSubmit } = useProfile(setValue)

	return (
		<Meta title="Profile">
			<div className="">
				<div className="mb-10">
					<Heading title="Profile" />
				</div>
				<div className="">
					<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
						<AuthFields formState={formState} register={register} isPasswordRequired />
						<Button type="submit">Update</Button>
					</form>
				</div>
			</div>
		</Meta>
	)
}

export default Profile
