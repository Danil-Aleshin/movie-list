import Field from '@/components/ui/form-elements/Field'
import { validEmail } from '@/shared/regexp'
import { FC } from 'react'
import { UseFormRegister, FormState } from 'react-hook-form'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address',
					},
				})}
				placeholder="Email"
				error={errors.email}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Min password length should more 6 symbols!',
							},
						  }
						: {},
				)}
				type={'password'}
				placeholder="Password"
				error={errors.password}
			/>
		</>
	)
}

export default AuthFields
