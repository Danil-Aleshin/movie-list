import Field from '@/components/ui/form-elements/Field'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import SlugField from '@/components/ui/form-elements/slug-field/SlugField'
import { generateSlug } from '@/utils/generate-slug.ts/generateSlug'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import formStyles from '@/components/ui/form-elements/admin-form.module.scss'
import Button from '@/components/ui/form-elements/Button'
import useMovieEdit from './useMovieEdit'
import { IMovieEditInput } from './movie-edit.types'
import UploadField from '@/components/ui/form-elements/uploads-field/UploadField'
import useAdminActors from './useAdminActors'
import useAdminGenres from './useAdminGenres'
import dynamic from 'next/dynamic'
import DashboardLayout from '@/components/ui/dasboard-layout/DashboardLayout'

const DynamicSelect = dynamic(() => import('@/components/ui/form-elements/select/Select'), {
	ssr: false,
})

const MovieEdit: FC = ({}) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IMovieEditInput>({
		mode: 'onSubmit',
	})

	const { isLoading, onSubmit, movie } = useMovieEdit(setValue)

	const { isLoading: isActosLoading, data: actors } = useAdminActors()
	const { isLoading: isGenresLoading, data: genres } = useAdminGenres()

	return (
		<DashboardLayout title="Edit movie">
			<div className={'wrapper-admin'}>
				<Heading title={`Edit movie ${movie?.data.title}`} />
				<form className={formStyles.form} onSubmit={handleSubmit(onSubmit)}>
					{isLoading ? (
						<SkeletonLoader />
					) : (
						<>
							<div className={formStyles.fields}>
								<div className={formStyles.field}>
									<Field
										{...register('title', {
											required: 'Title is required',
										})}
										placeholder="Title"
										error={errors.title}
									/>
								</div>
								<div className={formStyles.field}>
									<SlugField
										register={register}
										error={errors.slug}
										generate={() => setValue('slug', generateSlug(getValues('title')))}
									/>
								</div>
								<div className={formStyles.field}>
									<Field
										{...register('parameters.country', {
											required: 'Country is required',
										})}
										placeholder="Country"
										error={errors.parameters?.country}
									/>
								</div>
								<div className={formStyles.field}>
									<Field
										{...register('parameters.duration', {
											required: 'Duration is required',
										})}
										placeholder="Duration(MIN.)"
										error={errors.parameters?.duration}
									/>
								</div>
								<div className={formStyles.field}>
									<Field
										{...register('parameters.year', {
											required: 'Year is required',
										})}
										placeholder="Year"
										error={errors.parameters?.year}
									/>
								</div>
							</div>
							{/*  */}

							{/* selects */}
							<div className={formStyles.selects}>
								<Controller
									control={control}
									name="genres"
									render={({ field, fieldState: { error } }) => (
										<DynamicSelect
											field={field}
											isLoading={isGenresLoading}
											options={genres || []}
											isMulti
											placeholder="Genres"
											error={error}
										/>
									)}
									rules={{
										required: 'Please select at least one genre!',
									}}
								/>
								<Controller
									control={control}
									name="actors"
									render={({ field, fieldState: { error } }) => (
										<DynamicSelect
											field={field}
											isLoading={isActosLoading}
											options={actors || []}
											isMulti
											placeholder="Actors"
											error={error}
										/>
									)}
									rules={{
										required: 'Please select at least one actor!',
									}}
								/>
							</div>
							{/*  */}

							{/* Files */}
							<div className={formStyles.files}>
								<Controller
									control={control}
									name="poster"
									defaultValue=""
									render={({ field: { value, onChange }, fieldState: { error } }) => (
										<UploadField
											onChange={onChange}
											value={value}
											placeholder="Poster"
											error={error}
											folder="movies"
										/>
									)}
									rules={{
										required: 'Poster is required',
									}}
								/>
								<Controller
									control={control}
									name="bigPoster"
									defaultValue=""
									render={({ field: { value, onChange }, fieldState: { error } }) => (
										<UploadField
											onChange={onChange}
											value={value}
											placeholder="Big poster"
											error={error}
											folder="movies"
										/>
									)}
									rules={{
										required: 'Big poster is required',
									}}
								/>
								<Controller
									control={control}
									name="videoUrl"
									defaultValue=""
									render={({ field: { value, onChange }, fieldState: { error } }) => (
										<UploadField
											onChange={onChange}
											value={value}
											placeholder="Video"
											error={error}
											folder="movies"
											isNoImage
										/>
									)}
									rules={{
										required: 'Video is required',
									}}
								/>
							</div>

							<Button type="submit">Update</Button>
						</>
					)}
				</form>
			</div>
		</DashboardLayout>
	)
}

export default MovieEdit
