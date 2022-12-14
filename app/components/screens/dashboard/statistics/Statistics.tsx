import { getAdminUrl } from '@/configs/url.config'
import { adminServices } from '@/services/admin/admin.services'
import { useInView } from 'framer-motion'
import { FC, useRef } from 'react'
import DashboardLayout from '../../../ui/dasboard-layout/DashboardLayout'
import styles from './Statistics.module.scss'
import PopularMovie from './StatisticsItem/PopularMovie'
import StatisticsItem from './StatisticsItem/StatisticsItem'

interface IStatistics {}

const Statistics: FC<IStatistics> = ({}) => {
	
	const topStatsRef = useRef<HTMLDivElement | null>(null)
	const isInView = useInView(topStatsRef, { once: true })

	const animationTopStats = {
		transform: isInView ? 'none' : 'translateY(-150px)',
		opacity: isInView ? 1 : 0,
		transition: 'all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
	}

	return (
		<DashboardLayout title="statistics">
			<div className={`${styles.statistics}`}>
				<div ref={topStatsRef} style={animationTopStats} className={styles.topStats}>
					<StatisticsItem
						url={getAdminUrl('users')}
						service={adminServices.getCountUsers()}
						title={'Count Users'}
					/>
					<StatisticsItem
						url={getAdminUrl('movies')}
						service={adminServices.getCountMovies()}
						title={'Count Movies'}
					/>
					<StatisticsItem url={''} service={adminServices.getTotalViews()} title={'Total Views'} />
				</div>
				<div className="flex justify-center md:justify-start">
					<PopularMovie />
				</div>
			</div>
		</DashboardLayout>
	)
}

export default Statistics
