import MaterialIcon from '@/components/ui/MaterialIcon'
import { useActions } from '@/hooks/useActions'

import { FC } from 'react'

const LogoutBtn: FC = ({}) => {

	const { logout } = useActions()

	return (
		<li onClick={() => logout()}>
			<a>
				<MaterialIcon name="MdLogout" />
				<span>Logout</span>
			</a>
		</li>
	)
}

export default LogoutBtn
