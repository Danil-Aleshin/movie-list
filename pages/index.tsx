import Home from '@/components/screens/home/Home'
import { IHome } from '@/components/screens/home/home.types'
import { IGalleryItem } from '@/components/ui/gallery/gallery.type'
import { ISlide } from '@/components/ui/sliders/home-slider/silder.types'
import { getActorUrl, getMovieUrl } from '@/configs/url.config'
import { actorServices } from '@/services/actor/actor.services'
import { movieServices } from '@/services/movie/movie.services'
import type { GetStaticProps, NextPage } from 'next'

const HomePage: NextPage<IHome> = ({ slides, mostPopularMovies, actors }) => {
	return <Home actors={actors} slides={slides} mostPopularMovies={mostPopularMovies} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		
		const { data: mostPopularMoviesData } = await movieServices.getMostPopular()
		const { data: actorsData } = await actorServices.getAll()

		const slides: ISlide[] = mostPopularMoviesData.slice(0, 4).map((movie) => ({
			_id: movie._id,
			bigPoster: movie.bigPoster,
			poster: movie.poster,
			link: getMovieUrl(movie.slug),
			genres: movie.genres.slice(0, 3),
			title: movie.title,
			parameters: movie.parameters,
		}))

		const mostPopularMovies = mostPopularMoviesData.slice(0, 10).map(
			(movie) =>
				({
					_id: movie._id,
					poster: movie.poster,
					rating: movie.rating,
					url: getMovieUrl(movie.slug),
					title: movie.title,
				} as IGalleryItem),
		)

		const actors = actorsData.slice(0, 10).map(
			(actor) =>
				({
					_id: actor._id,
					poster: actor.photo,
					url: getActorUrl(actor.slug),
					title: actor.name,
				} as IGalleryItem),
		)

		return {
			props: {
				slides,
				mostPopularMovies,
				actors,
			},
			revalidate: 60,
		}
	} catch (error) {
		return {
			props: {
				slides: [],
				mostPopularMovies: [],
				actors: [],
			},
		}
	}
}

export default HomePage
