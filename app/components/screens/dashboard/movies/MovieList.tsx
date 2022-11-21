import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/Table/AdminTable'
import DashboardLayout from '@/components/ui/dasboard-layout/DashboardLayout'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'

import useMovies from './useMovies'

interface IMovieList {}
const MovieList: FC<IMovieList> = ({}) => {
	const { data, isLoading, searchTerm, handleSearch, deleteAsync, createAsync } = useMovies()

	return (
		<DashboardLayout title="Movie list">
			<div className={'wrapper-admin'}>
				<AdminHeader onClick={createAsync} handleSearch={handleSearch} searchTherm={searchTerm} />
				<AdminTable
					tableItems={data || []}
					isLoading={isLoading}
					headerItems={['Title', 'Genre', 'Rating']}
					removeHandler={deleteAsync}
				/>
			</div>
		</DashboardLayout>
	)
}

export default MovieList
