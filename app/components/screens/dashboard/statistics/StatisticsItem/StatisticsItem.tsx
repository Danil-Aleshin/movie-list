import AnimatedCounter from '@/components/ui/AnimatedCounter/AnimatedCounter'
import { AxiosResponse } from 'axios'
import Link from 'next/link'
import { FC, memo } from 'react'
import { useQuery } from 'react-query'
import styles from '../Statistics.module.scss'

interface IStatisticsItem {
	service: Promise<AxiosResponse<any, any>>
	title: string
	url: string
}

const StatisticsItem: FC<IStatisticsItem> = memo(({ url, service, title }) => {
	const { data } = useQuery(`get ${title}`, () => service)

	const statsValue = AnimatedCounter(data?.data || 0)

	return (
		<Link href={url}>
			<a className={styles.statisticsItem}>
				<h3>{title}</h3>
				<div className={styles.counter}>
					<p className={styles.value}>{statsValue}</p>
					<p className={styles.title}>count</p>
				</div>
			</a>
		</Link>
	)
})

export default StatisticsItem
