import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/Table/AdminTable'
import DashboardLayout from '@/components/ui/dasboard-layout/DashboardLayout'
import Heading from '@/components/ui/heading/Heading'
import { FC } from 'react'
import useActors from './useActors'

interface IActorList {}

const ActorList: FC<IActorList> = ({}) => {
	const { data, isLoading, searchTerm, handleSearch, deleteAsync, createAsync } = useActors()

	return (
		<DashboardLayout title='Actor list'>
			<div className={'wrapper-admin'}>
				<Heading title="Actor list" />
				<AdminHeader onClick={createAsync} handleSearch={handleSearch} searchTherm={searchTerm} />
				<AdminTable
					tableItems={data || []}
					isLoading={isLoading}
					headerItems={['Name', 'Number of movies']}
					removeHandler={deleteAsync}
				/>
			</div>
		</DashboardLayout>
	)
}

export default ActorList
