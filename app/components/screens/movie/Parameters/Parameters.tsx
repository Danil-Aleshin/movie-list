import RatingCard from '@/components/ui/rating-card/RatingCard'
import { getActorUrl, getGenreUrl } from '@/configs/url.config'
import { IMovie } from '@/shared/types/movie.types'
import { generateList } from '@/utils/generate-list/generateList'
import Link from 'next/link'
import { FC } from 'react'
import styles from '../Movie.module.scss'
import ParameterItem from './ParameterItem'

interface IParameters {
	movie: IMovie
}

const Parameters: FC<IParameters> = ({ movie: { rating, parameters, genres, actors } }) => {
	return (
		<div className={styles.parameters}>
			<RatingCard className="!bg-gray-700" rating={rating} />
			<ParameterItem text={parameters.country} title="Country" />
			<ParameterItem text={parameters.year} title="Release Date" />
			<ParameterItem text={`${parameters.duration} min`} title="Duration" />
			<div className={styles.parameter}>
				<span className={styles.title}>Genres</span>
				<div className={styles.genre}>
					{genres.map((genre, index) => (
						<Link key={genre._id} href={getGenreUrl(genre.slug)}>
							<a className={`${styles.text} ${styles.link}`}>
								{generateList(index, genres.length, genre.name)}
							</a>
						</Link>
					))}
				</div>
			</div>
			<div className={styles.parameter}>
				<span className={styles.title}>Actors</span>
				<div className={styles.genre}>
					{actors.map((actor, index) => (
						<Link key={actor._id} href={getActorUrl(actor.slug)}>
							<a className={`${styles.text} ${styles.link}`}>
								{generateList(index, genres.length, actor.name)}
							</a>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default Parameters
