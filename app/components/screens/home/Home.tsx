import Layout from '@/components/layout/Layout'
import GallerySlider from '@/components/ui/sliders/gallery-slider/GallerySlider'
import Slider from '@/components/ui/sliders/home-slider/Slider'
import Link from 'next/link'
import { FC } from 'react'
import styles from './Home.module.scss'
import { IHome } from './home.types'

const Home: FC<IHome> = ({ slides, mostPopularMovies, actors }) => {

	return (
		<Layout
			title="Watch movies"
			description="watch films, watch movies, films online, movies online, watch TV, TV online, TV programmes online, watch TV programmes stream movies, stream films, stream TV, instant streaming, watch online, films, movies, watch films Netherlands, watch TV online, no download, fullfull-length movies, TV programmes">
			<div className={styles.wrapper}>
				{slides.length && <Slider slides={slides} />}
				<div className="w-full flex flex-col gap-4 items-start">
					<Link href={'/trending'}>
						<a className="text-xl text-white">Trending Movies</a>
					</Link>
					<GallerySlider galleryItems={mostPopularMovies} />
				</div>
				<div className="w-full flex flex-col gap-4 items-start">
					<Link href={'/actors'}>
						<a className="text-xl text-white">Actors</a>
					</Link>
					<GallerySlider galleryItems={actors} />
				</div>
			</div>
		</Layout>
	)
}

export default Home
