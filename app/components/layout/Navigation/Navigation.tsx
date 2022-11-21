import Logo from '@/components/ui/logo/Logo'
import { FC } from 'react'
import MenuContainer from './MenuContainer/MenuContainer'


const Navigation: FC = () => {
	return (
		<aside className="">
			<Logo />
			<MenuContainer />
		</aside>
	)
}
export default Navigation
