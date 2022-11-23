import { FC, memo } from 'react'
import styles from './Menu.module.scss'
import { IMenu } from './menu.types'
import MenuItem from './MenuItem'

const Menu: FC<{ options: IMenu }> = memo(({ options: { title, items } }) => {
	return (
		<ul className={styles.menu}>
			{title && <h1>{title}</h1>}
			{items.map((item) => (
				<MenuItem item={item} key={item.link} />
			))}
		</ul>
	)
})
export default Menu
