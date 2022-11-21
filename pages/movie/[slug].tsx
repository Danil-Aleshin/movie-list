import Movie from '@/components/screens/movie/Movie'
import { IGalleryItem } from '@/components/ui/gallery/gallery.type'
import { getMovieUrl } from '@/configs/url.config'
import { movieServices } from '@/services/movie/movie.services'
import { IMovie } from '@/shared/types/movie.types'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Error404 from '../404'

export interface IMoviePage {
	similarMovies: IGalleryItem[]
	movie: IMovie | undefined
}

const MoviePage: NextPage<IMoviePage> = ({ similarMovies, movie }) => {
	return movie ? <Movie movie={movie} similarMovies={similarMovies} /> : <Error404 />
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: movies } = await movieServices.getAll()
		const paths = movies.map((g) => ({
			params: { slug: g.slug },
		}))

		return {
			paths,
			fallback: 'blocking',
		}
	} catch (e) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: movie } = await movieServices.getBySlug(String(params?.slug))

		const { data: similarMoviesData } = await movieServices.getByGenres(
			movie.genres.map((genre) => genre._id),
		)

		const similarMovies: IGalleryItem[] = similarMoviesData
			.filter((m) => m._id !== movie._id)
			.slice(0, 10)
			.map((m) => ({
				title: m.title,
				poster: m.poster,
				url: getMovieUrl(movie.slug),
				_id: m._id,
				rating: m.rating,
			}))

		return {
			props: { similarMovies, movie },
			revalidate: 60,
		}
	} catch (e) {
		return {
			notFound: true,
		}
	}
}
export default MoviePage
