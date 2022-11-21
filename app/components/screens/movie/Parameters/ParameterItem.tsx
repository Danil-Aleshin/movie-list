import { FC, memo } from 'react'
import styles from '../Movie.module.scss'

interface IParameterItem {
	title: string
	text: string | number
}

const ParameterItem: FC<IParameterItem> = memo(({ text, title }) => {
	return (
		<div className={styles.parameter}>
			<span className={styles.title}>{title}</span>
			<span className={styles.text}>{text}</span>
		</div>
	)
})

export default ParameterItem
