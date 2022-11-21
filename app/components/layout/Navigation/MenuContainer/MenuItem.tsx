import { FC } from 'react'
import { IMenuItem } from './menu.types'
import styles from './Menu.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'
import MaterialIcon from '@/components/ui/MaterialIcon'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	return (
		<li
			className={
				asPath === item.link ? `${styles.menuItem} ${styles.active}` : `${styles.menuItem}`
			}>
			<Link href={item.link}>
				<a>
					<MaterialIcon name={item.icon} />
					<span>{item.title}</span>
				</a>
			</Link>
		</li>
	)
}
export default MenuItem
