import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import Statistics from '../statistics/Statistics'

const Admin: FC = ({}) => {
	return (
		<Meta title="Admin panel">
			<div className={'wrapper-admin'}>
				<AdminNavigation />
				<Heading title="Statistics" />
				<Statistics />
			</div>
		</Meta>
	)
}

export default Admin
