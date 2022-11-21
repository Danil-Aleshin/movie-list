import LogoutBtn from '@/components/layout/Navigation/MenuContainer/auth/LogoutBtn'
import Menu from '@/components/layout/Navigation/MenuContainer/Menu'
import MenuItem from '@/components/layout/Navigation/MenuContainer/MenuItem'
import { FC } from 'react'
import Logo from '../../logo/Logo'
import { navList } from './navigation.data'

interface INavigation {}

const Navigation: FC<INavigation> = ({}) => {
	return (
		<aside>
			<Logo />
			<Menu options={navList} />
			<LogoutBtn />
		</aside>
	)
}

export default Navigation
