import { getMovieUrl } from '@/configs/url.config'
import { IMovie } from '@/shared/types/movie.types'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './SearchList.module.scss'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<ul className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<li key={movie._id}>
						<Link href={getMovieUrl(movie.slug)}>
							<a>
								<Image
									src={movie.poster}
									width={50}
									height={50}
									alt={movie.title}
									objectFit="cover"
									objectPosition={'top'}
									draggable={false}
								/>
								<span>{movie.title}</span>
							</a>
						</Link>
					</li>
				))
			) : (
				<li className="text-white text-center my-5 px-6">Movies not found! </li>
			)}
		</ul>
	)
}
export default SearchList
