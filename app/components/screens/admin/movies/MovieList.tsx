import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/Table/AdminTable'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'

import useMovies from './useMovies'


interface IMovieList {}
const MovieList: FC<IMovieList> = ({}) => {
	
	const { data, isLoading, searchTerm, handleSearch, deleteAsync,createAsync } = useMovies()

	return (
		<Meta title="Movies">
			<div className={'wrapper-admin'}>
				<AdminNavigation />
				<Heading title="Movie List" />
				<AdminHeader
					onClick={createAsync}
					handleSearch={handleSearch}
					searchTherm={searchTerm}
				/>
				<AdminTable
					tableItems={data || []}
					isLoading={isLoading}
					headerItems={['Title', 'Genre', 'Rating']}
					removeHandler={deleteAsync}
				/>
			</div>
		</Meta>
	)
}

export default MovieList
