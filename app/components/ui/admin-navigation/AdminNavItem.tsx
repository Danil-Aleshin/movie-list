import Link from 'next/link'
import { FC } from 'react'
import { INavItem } from './navigation.types'
import styles from './AdminNav.module.scss'
import { useRouter } from 'next/router'
const AdminNavItem: FC<INavItem> = ({ link, title }) => {
	const { asPath } = useRouter()
	return (
		<li>
			<Link href={link}>
				<a className={asPath === link ? styles.active : ''}>{title}</a>
			</Link>
		</li>
	)
}

export default AdminNavItem
