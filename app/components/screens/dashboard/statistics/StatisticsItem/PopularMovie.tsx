import AnimatedCounter from '@/components/ui/AnimatedCounter/AnimatedCounter'
import { getMovieUrl } from '@/configs/url.config'
import { adminServices } from '@/services/admin/admin.services'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useQuery } from 'react-query'
import styles from '../Statistics.module.scss'

interface IPopularMovie {}

const PopularMovie: FC<IPopularMovie> = ({}) => {
	const { data: movie, isLoading } = useQuery(
		'most popular movie',
		() => adminServices.getMostPopularMovie(),
		{
			select({ data }) {
				return data[0]
			},
		},
	)

	const viewsValue = AnimatedCounter(movie?.countOpened || 0)

	return isLoading ? null : movie ? (
		<Link href={getMovieUrl(movie.slug)}>
			<a className={`${styles.statisticsItem} ${styles.popularMovie}`}>
				<div className={styles.heading}>
					<h3>Most Popular Movie</h3>
					<span>{movie.title}</span>
				</div>
				<Image
					src={movie.bigPoster}
					alt={movie.title}
					width={500}
					height={200}
					draggable={false}
					className="image-bg rounded-lg"
					priority
				/>
				<div className={styles.counter}>
					<p className={styles.value}>{viewsValue}</p>
					<p className={styles.title}>views</p>
				</div>
			</a>
		</Link>
	) : (
		<div className="">Most popular movie error</div>
	)
}

export default PopularMovie
