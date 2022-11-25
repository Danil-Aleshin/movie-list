import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import Header from './Header/Header'
import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'

interface props {
	children: JSX.Element
	title: string
	description?: string
}

const Layout: FC<props> = ({ children, title, description }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<Header />
			<main className={styles.main}>
				<Meta title={title} description={description}>
					{children}
				</Meta>
			</main>
		</div>
	)
}
export default Layout
