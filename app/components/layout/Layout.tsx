import { FC } from 'react'
import Header from './Header/Header'
import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'


interface props {
	children: JSX.Element
}

const Layout: FC<props> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<Header />
			<main className={styles.main}>{children}</main>
		</div>
	)
}
export default Layout
