import { useAuth } from '@/shared/useAuth'
import { FC } from 'react'
import MenuItem from '../MenuItem'
import styles from '../Menu.module.scss'
import LogoutBtn from './LogoutBtn'
import { getAdminHomeUrl } from '@/configs/url.config'

const UserMenu: FC = ({}) => {
	const { user } = useAuth()

	return (
		<ul className={styles.menu}>
			<h1>User Menu</h1>
			{user ? (
				<>
					<MenuItem
						item={{
							icon: 'MdPersonOutline',
							link: '/profile',
							title: 'Profile',
						}}
					/>
					<MenuItem
						item={{
							icon: 'MdOutlineFavoriteBorder',
							link: '/favorites',
							title: 'Favorites',
						}}
					/>
					{user.isAdmin && (
						<MenuItem
							item={{
								icon: 'MdOutlineAdminPanelSettings',
								link: getAdminHomeUrl(),
								title: 'Admin Panel',
							}}
						/>
					)}
					<LogoutBtn />
				</>
			) : (
				<>
					<MenuItem
						item={{
							icon: 'MdLogin',
							link: '/auth',
							title: 'Login',
						}}
					/>
				</>
			)}
		</ul>
	)
}

export default UserMenu
