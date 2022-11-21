import SubHeading from '@/components/ui/heading/SubHeading'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import { getMovieUrl } from '@/configs/url.config'
import { movieServices } from '@/services/movie/movie.services'
import { IMovie } from '@/shared/types/movie.types'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useQuery } from 'react-query'
import styles from '../Admin.module.scss'
interface IPopularMovie {}
const PopularMovie: FC<IPopularMovie> = ({}) => {
	const { isLoading, data: movie } = useQuery(
		'Get most popular movie admin',
		() => movieServices.getMostPopular(),
		{
			select: ({ data }): IMovie => data[0],
		},
	)
	return (
		<div className={`${styles.mostPopularMovie} ${styles.container}`}>
			<SubHeading title="The most popular movie" />
			{isLoading ? (
				<SkeletonLoader className="h-48 w-72" />
			) : (
				movie && (
					<>
						<h3>Opened {movie.countOpened} times</h3>
						<Link href={getMovieUrl(movie.slug)}>
							<a>
								<Image
									className={styles.image}
									width={285}
									height={176}
									alt={movie.title}
									src={movie.bigPoster}
									unoptimized
								/>
							</a>
						</Link>
					</>
				)
			)}
		</div>
	)
}

export default PopularMovie
