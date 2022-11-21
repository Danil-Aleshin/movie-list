import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/Table/AdminTable'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import useGenres from './useGenres'

interface IGenreList {}

const GenreList: FC<IGenreList> = ({}) => {
	const { data, isLoading, searchTerm, handleSearch, deleteAsync, createAsync } = useGenres()

	return (
		<Meta title="Genres">
			<div className={'wrapper-admin'}>
				<AdminNavigation />
				<Heading title="Genre list" />
				<AdminHeader
					onClick={createAsync}
					handleSearch={handleSearch}
					searchTherm={searchTerm}
				/>
				<AdminTable
					tableItems={data || []}
					isLoading={isLoading}
					headerItems={['Name', 'Slug']}
					removeHandler={deleteAsync}
				/>
			</div>
		</Meta>
	)
}

export default GenreList
