import { adminServices } from '@/services/admin/admin.services'
import { FC, useEffect } from 'react'
import { useQuery } from 'react-query'
import DashboardLayout from '../../../ui/dasboard-layout/DashboardLayout'
import styles from './Statistics.module.scss'
import useStatistics from './useStatistics'

interface IStatistics {}

const Statistics: FC<IStatistics> = ({}) => {

	const {countMovies,countMoviesLoading,countUsers,countUsersLoading} = useStatistics()

	return (
		<DashboardLayout title="statistics">
			<div className={`${styles.statistics}`}></div>
		</DashboardLayout>
	)
}

export default Statistics
