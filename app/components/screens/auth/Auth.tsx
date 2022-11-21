import { FC, useState } from 'react'
import { useAuthRedirect } from './useAuthRedirect'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthInput } from './auth.types'
import Meta from '@/utils/meta/Meta'
import styles from './Auth.module.scss'
import Heading from '@/components/ui/heading/Heading'
import Button from '@/components/ui/form-elements/Button'
import { useAuth } from '@/shared/useAuth'
import AuthFields from './AuthFields'
import { useActions } from '@/hooks/useActions'

const Auth: FC = ({}) => {
	const [type, setType] = useState<'login' | 'register'>('login')
	const { isLoading } = useAuth()
	useAuthRedirect()

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})

	const { login, register } = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)
		reset()
	}
	return (
		<Meta title="Auth">
			<section className={styles.wrapper}>
				<Heading className={styles.title} title="Authentication" />
				<form onSubmit={handleSubmit(onSubmit)}>
					<AuthFields formState={formState} register={registerInput} isPasswordRequired />
					<div className={styles.buttons}>
						<Button type="submit" onClick={() => setType('login')} disabled={isLoading}>
							Login
						</Button>
						<Button type="submit" onClick={() => setType('register')} disabled={isLoading}>
							Register
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth
