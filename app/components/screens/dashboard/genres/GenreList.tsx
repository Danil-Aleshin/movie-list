import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/Table/AdminTable'
import DashboardLayout from '@/components/ui/dasboard-layout/DashboardLayout'
import Heading from '@/components/ui/heading/Heading'
import { FC } from 'react'
import useGenres from './useGenres'

interface IGenreList {}

const GenreList: FC<IGenreList> = ({}) => {
	const { data, isLoading, searchTerm, handleSearch, deleteAsync, createAsync } = useGenres()

	return (
		<DashboardLayout title="Genre list">
			<div className={'wrapper-admin'}>
				<Heading title="Genre list" />
				<AdminHeader onClick={createAsync} handleSearch={handleSearch} searchTherm={searchTerm} />
				<AdminTable
					tableItems={data || []}
					isLoading={isLoading}
					headerItems={['Name', 'Slug']}
					removeHandler={deleteAsync}
				/>
			</div>
		</DashboardLayout>
	)
}

export default GenreList
