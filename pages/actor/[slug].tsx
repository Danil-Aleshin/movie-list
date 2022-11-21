import Catalog from '@/components/ui/catalog/Catalog'
import { IGalleryItem } from '@/components/ui/gallery/gallery.type'
import { getMovieUrl } from '@/configs/url.config'
import { actorServices } from '@/services/actor/actor.services'
import { movieServices } from '@/services/movie/movie.services'
import { IActor } from '@/shared/types/movie.types'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Error404 from '../404'

interface IActorPage {
	actor: IActor
	movies: IGalleryItem[]
}

const ActorPage: NextPage<IActorPage> = ({ actor, movies }) => {
	return actor ? (
		<Catalog
			title={actor.name}
			description={`All movies with ${actor.name}`}
			gallery={movies || []}
		/>
	) : (
		<Error404 />
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: actors } = await actorServices.getAll()
		const paths = actors.map((g) => ({
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
		const { data: actor } = await actorServices.getBySlug(String(params?.slug))

		const { data: moviesData } = await movieServices.getByActor(actor._id)

		const movies = moviesData.map(
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
			props: { movies, actor },
			revalidate: 60,
		}
	} catch (e) {
		return {
			props: {
				movies: [],
			},
		}
	}
}

export default ActorPage
