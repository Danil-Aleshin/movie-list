import Catalog from '@/components/ui/catalog/Catalog'
import { IGalleryItem } from '@/components/ui/gallery/gallery.type'
import { getMovieUrl } from '@/configs/url.config'
import { movieServices } from '@/services/movie/movie.services'
import { NextPageAuth } from '@/shared/types/auth.types'
import { GetStaticProps } from 'next'

interface ITrendingPage {
	movies: IGalleryItem[]
}

const TrendingPage: NextPageAuth<ITrendingPage> = ({ movies }) => {
	return (
		<Catalog
			description="This movies that have attracted the most interest"
			gallery={movies || []}
			title="Trending movies"
		/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: mostPopularMovies } = await movieServices.getMostPopular()

		const movies = mostPopularMovies.map(
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
			props: {
				movies,
			},
			revalidate: 60,
		}
	} catch (error) {
		return {
			props: {
				movie: [],
			},
		}
	}
}
export default TrendingPage
