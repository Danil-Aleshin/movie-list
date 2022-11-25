import MaterialIcon from '@/components/ui/MaterialIcon'
import { useActions } from '@/hooks/useActions'
import styles from '../Menu.module.scss'
import { FC } from 'react'

const LogoutBtn: FC = ({}) => {
	const { logout } = useActions()

	return (
		<li className={styles.menuItem} onClick={() => logout()}>
			<a>
				<MaterialIcon name="MdLogout" />
				<span>Logout</span>
			</a>
		</li>
	)
}

export default LogoutBtn
