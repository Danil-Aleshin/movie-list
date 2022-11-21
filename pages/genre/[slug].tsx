import Catalog from '@/components/ui/catalog/Catalog'
import { IGalleryItem } from '@/components/ui/gallery/gallery.type'
import { getMovieUrl } from '@/configs/url.config'
import { genreServices } from '@/services/genre/genre.services'
import { movieServices } from '@/services/movie/movie.services'
import { IGenre } from '@/shared/types/movie.types'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Error404 from '../404'

interface IGenrePage {
	movieByGenre: IGalleryItem[]
	genre: IGenre | undefined
}

const GenrePage: NextPage<IGenrePage> = ({ movieByGenre, genre }) => {
	return genre ? (
		<Catalog
			description={genre.description}
			gallery={movieByGenre}
			title={`${genre?.name} genre`}
		/>
	) : (
		<Error404 />
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: genres } = await genreServices.getAll()
		const paths = genres.map((g) => ({
			params: { slug: g.slug },
		}))

		return {
			paths,
			fallback: 'blocking',
		}
	} catch (e) {
		// console.log(errorCatch(e))

		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: genre } = await genreServices.getBySlug(String(params?.slug))

		const { data: movieByGenres } = await movieServices.getByGenres([genre._id])

		const movieByGenre = movieByGenres.map(
			(movie) =>
				({
					_id: movie._id,
					poster: movie.poster,
					rating: movie.rating,
					url: getMovieUrl(movie.slug),
					title: movie.title,
				} as IGalleryItem),
		)

		return {
			props: { movieByGenre, genre },
			revalidate: 60,
		}
	} catch (e) {
		return {
			notFound: true,
		}
	}
}
export default GenrePage
