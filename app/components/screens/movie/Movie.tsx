import Banner from '@/components/ui/banner/Banner'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Image from 'next/image'
import { FC } from 'react'
import { IMoviePage } from '../../../../pages/movie/[slug]'
import styles from './Movie.module.scss'
import dynamic from 'next/dynamic'
import GallerySlider from '@/components/ui/sliders/gallery-slider/GallerySlider'
import SubHeading from '@/components/ui/heading/SubHeading'
import useUpdateCountOpened from './useUpdateCountOpened'
import FavoriteButton from '@/components/ui/favorite-button/FavoriteButton'
import Parameters from './Parameters/Parameters'
import Layout from '@/components/layout/Layout'

const DynamicVideoPlayer = dynamic(() => import('@/components/ui/video-player/VideoPlayer'), {
	ssr: false,
})
const DynamicRateMovie = dynamic(() => import('@/components/ui/rate-movie/RateMovie'), {
	ssr: false,
})

const Movie: FC<IMoviePage> = ({ similarMovies, movie }) => {
	useUpdateCountOpened(movie?.slug ? movie.slug : '')

	return (
		<Layout title={`${movie?.title}`} description={`Watch ${movie?.title}`}>
			<div className="flex flex-col gap-16">
				{movie ? (
					<>
						<Banner image={movie.bigPoster} />
						<div className={styles.movieInfo}>
							<Image
								alt={movie.title}
								src={movie.poster}
								width={384}
								height={480}
								className="image-bg rounded-3xl"
							/>
							{/*  */}
							<div className={styles.parameters}>
								<Heading title={movie.title} />
								<FavoriteButton movieId={movie._id} />
								<Parameters movie={movie} />
							</div>
							{/*  */}
						</div>
						<DynamicVideoPlayer slug={movie.slug} videoUrl={`${movie.videoUrl}#t=8`} />
						<DynamicRateMovie id={movie._id} slug={movie.slug} defaultRating={movie.rating} />
						<div className="flex flex-col items-start gap-4">
							<SubHeading title="Similar films" /> <GallerySlider galleryItems={similarMovies} />
						</div>
					</>
				) : (
					<SkeletonLoader />
				)}
			</div>
		</Layout>
	)
}

export default Movie
