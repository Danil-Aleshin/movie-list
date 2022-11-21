import dynamic from 'next/dynamic'
import { FC } from 'react'
import GenresMenu from './genres/GenresMenu'
import Menu from './Menu'
import { mainMenu } from './menu.data'
import styles from './Menu.module.scss'

const DynamicUserMenu = dynamic(() => import('./auth/UserMenu'), { ssr: false })

const MenuContainer: FC = () => {


	return (
		<div className={styles.container}>
			<Menu options={mainMenu} />
			<GenresMenu />
			<DynamicUserMenu />
		</div>
	)
}
export default MenuContainer
