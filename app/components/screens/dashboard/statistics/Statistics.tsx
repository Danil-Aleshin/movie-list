import { FC } from 'react'
import DashboardLayout from '../../../ui/dasboard-layout/DashboardLayout'
import styles from './Statistics.module.scss'

interface IStatistics {}

const Statistics: FC<IStatistics> = ({}) => {
	return (
		<DashboardLayout title="statistics">
			<div className={`${styles.statistics}`}>
				
			</div>
		</DashboardLayout>
	)
}

export default Statistics
