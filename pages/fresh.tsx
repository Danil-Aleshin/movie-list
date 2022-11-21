import Catalog from '@/components/ui/catalog/Catalog'
import { IGalleryItem } from '@/components/ui/gallery/gallery.type'
import { getMovieUrl } from '@/configs/url.config'
import { movieServices } from '@/services/movie/movie.services'
import { GetStaticProps, NextPage } from 'next'

interface IFreshPage {
	movies?: IGalleryItem[]
}

const FreshPage: NextPage<IFreshPage> = ({ movies }) => {
	return (
		<Catalog
			description={'New movies in excellent quality'}
			gallery={movies || []}
			title={'Fresh movies'}
		/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movieData } = await movieServices.getAll()

		const movies = movieData
			.sort((a, b) => b.parameters.year - a.parameters.year)
			.map(
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
				movies: [],
			},
		}
	}
}

export default FreshPage
