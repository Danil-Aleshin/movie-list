import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/Table/AdminTable'
import DashboardLayout from '@/components/ui/dasboard-layout/DashboardLayout'
import Heading from '@/components/ui/heading/Heading'
import { FC } from 'react'
import useUsers from './useUsers'

interface IUserList {}
const UserList: FC<IUserList> = ({}) => {
	const { data, isLoading, searchTerm, handleSearch, deleteAsync } = useUsers()

	return (
		<DashboardLayout title="User list">
			<div className={'wrapper-admin'}>
				<Heading title="Users" />
				<AdminHeader handleSearch={handleSearch} searchTherm={searchTerm} />
				<AdminTable
					tableItems={data || []}
					isLoading={isLoading}
					headerItems={['Email', 'Date register']}
					removeHandler={deleteAsync}
				/>
			</div>
		</DashboardLayout>
	)
}

export default UserList
