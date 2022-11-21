import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Field from '@/components/ui/form-elements/Field'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import SlugField from '@/components/ui/form-elements/slug-field/SlugField'
import { generateSlug } from '@/utils/generate-slug.ts/generateSlug'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import formStyles from '@/components/ui/form-elements/admin-form.module.scss'
import Button from '@/components/ui/form-elements/Button'
import { IActorEditInput } from './actor-edit.types'
import useActorEdit from './useActorEdit'
import UploadField from '@/components/ui/form-elements/uploads-field/UploadField'

const ActorEdit: FC = ({}) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IActorEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit, actor } = useActorEdit(setValue)

	return (
		<Meta title="Edit actor">
			<div className={'wrapper-admin'}>
				<AdminNavigation />
				<Heading title={`Edit actor ${actor?.data.name}`} />
				<form className={formStyles.form} onSubmit={handleSubmit(onSubmit)}>
					{isLoading ? (
						<SkeletonLoader />
					) : (
						<>
							<div className={formStyles.fields}>
								<div className={formStyles.field}>
									<Field
										{...register('name', {
											required: 'Name is required',
										})}
										placeholder="Name"
										error={errors.name}
									/>
								</div>
								<div className={formStyles.field}>
									<SlugField
										register={register}
										error={errors.slug}
										generate={() => setValue('slug', generateSlug(getValues('name')))}
									/>
								</div>
							</div>
							<div className={formStyles.files}>
								<Controller
									control={control}
									name="photo"
									defaultValue=""
									render={({ field: { value, onChange }, fieldState: { error } }) => (
										<UploadField
											onChange={onChange}
											value={value}
											placeholder="Photo"
											error={error}
											folder="actors"
										/>
									)}
									rules={{
										required: 'Photo is required',
									}}
								/>
							</div>
							<Button type="submit">Update</Button>
						</>
					)}
				</form>
			</div>
		</Meta>
	)
}

export default ActorEdit
