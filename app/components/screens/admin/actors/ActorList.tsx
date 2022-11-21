import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/Table/AdminTable'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import useActors from './useActors'

interface IActorList {}

const ActorList: FC<IActorList> = ({}) => {
	const { data, isLoading, searchTerm, handleSearch, deleteAsync, createAsync } = useActors()

	return (
		<Meta title="Actors">
			<div className={'wrapper-admin'}>
				<AdminNavigation />
				<Heading title="Actor list" />
				<AdminHeader onClick={createAsync} handleSearch={handleSearch} searchTherm={searchTerm} />
				<AdminTable
					tableItems={data || []}
					isLoading={isLoading}
					headerItems={['Name', 'Number of movies']}
					removeHandler={deleteAsync}
				/>
			</div>
		</Meta>
	)
}

export default ActorList
