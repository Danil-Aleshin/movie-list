import Header from './Header/Header'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import styles from './DashboardLayout.module.scss'
import Navigation from './Navigation/Navigation'

interface IDashboardLayout {
	children: JSX.Element
	title: string
}

const DashboardLayout: FC<IDashboardLayout> = ({ children, title }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<Header />
			<main className={styles.main}>
				<Meta title={title}>{children}</Meta>
			</main>
		</div>
	)
}

export default DashboardLayout
