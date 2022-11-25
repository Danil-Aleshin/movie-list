import Field from '@/components/ui/form-elements/Field'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import SlugField from '@/components/ui/form-elements/slug-field/SlugField'
import { generateSlug } from '@/utils/generate-slug.ts/generateSlug'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { IGenreEditInput } from './genre-edit.types'
import useGenreEdit from './useGenreEdit'
import formStyles from '@/components/ui/form-elements/admin-form.module.scss'
import Button from '@/components/ui/form-elements/Button'
import { stripHtml } from 'string-strip-html'
import dynamic from 'next/dynamic'
import DashboardLayout from '@/components/ui/dasboard-layout/DashboardLayout'

const DynamicTextEditor = dynamic(
	() => import('@/components/ui/form-elements/text-editor/TextEditor'),
	{
		ssr: false,
	},
)

const GenreEdit: FC = ({}) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IGenreEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit, genre } = useGenreEdit(setValue)

	return (
		<DashboardLayout title="Edit genre">
			<div className={'wrapper-admin'}>
				<Heading title={`Edit genre ${genre?.data.name}`} />
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
								<div className={formStyles.field}>
									<Field
										{...register('icon', {
											required: 'Icon is required',
										})}
										placeholder="Icon"
										error={errors.icon}
									/>
								</div>
							</div>
							<Controller
								control={control}
								name="description"
								defaultValue=""
								render={({ field: { value, onChange }, fieldState: { error } }) => (
									<DynamicTextEditor
										onChange={onChange}
										placeholder="Description"
										value={value}
										error={error}
									/>
								)}
								rules={{
									validate: {
										required: (v) =>
											(v && stripHtml(v).result.length > 0) || 'Description is required!',
									},
								}}
							/>
							<Button type="submit">Update</Button>
						</>
					)}
				</form>
			</div>
		</DashboardLayout>
	)
}

export default GenreEdit
