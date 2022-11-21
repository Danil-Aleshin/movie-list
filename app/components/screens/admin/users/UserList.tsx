import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/Table/AdminTable'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import useUsers from './useUsers'

interface IUserList {}
const UserList: FC<IUserList> = ({}) => {
	const { data, isLoading, searchTerm, handleSearch, deleteAsync } = useUsers()

	return (
		<Meta title="Users">
			<div className={'wrapper-admin'}>
				<AdminNavigation />
				<Heading title="Users" />
				<AdminHeader handleSearch={handleSearch} searchTherm={searchTerm} />
				<AdminTable
					tableItems={data || []}
					isLoading={isLoading}
					headerItems={['Email', 'Date register']}
					removeHandler={deleteAsync}
				/>
			</div>
		</Meta>
	)
}

export default UserList
