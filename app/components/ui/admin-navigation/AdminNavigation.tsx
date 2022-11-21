import { FC } from 'react'
import AdminNavItem from './AdminNavItem'
import { navList } from './navigation.data'
import styles from './AdminNav.module.scss'

interface IAdminNavigation {}

const AdminNavigation: FC<IAdminNavigation> = ({}) => {
	return (
		<nav className={styles.nav}>
			<ul>
				{navList.map((nav) => (
					<AdminNavItem key={nav.link} link={nav.link} title={nav.title} />
				))}
			</ul>
		</nav>
	)
}

export default AdminNavigation
