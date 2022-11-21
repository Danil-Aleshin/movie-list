import { FC } from 'react'
import styles from '../Admin.module.scss'
import CountUsers from './CountUsers'
import PopularMovie from './PopularMovie'
interface IStatistics {}
const Statistics: FC<IStatistics> = ({}) => {

	return (
		<div className={`${styles.statistics}`}>
			<CountUsers />
			<PopularMovie />
		</div>
	)
}

export default Statistics
