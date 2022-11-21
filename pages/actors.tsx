import Catalog from '@/components/ui/catalog/Catalog'
import { IGalleryItem } from '@/components/ui/gallery/gallery.type'
import { getActorUrl } from '@/configs/url.config'
import { actorServices } from '@/services/actor/actor.services'
import { GetStaticProps, NextPage } from 'next'

interface IActors {
	actors: IGalleryItem[]
}

const ActorsPage: NextPage<IActors> = ({ actors }) => {
	return <Catalog description="Actor list" gallery={actors} title="Actors" />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: actorsData } = await actorServices.getAll()

		const actors = actorsData.map(
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
				actors,
			},
			revalidate: 60,
		}
	} catch (error: any) {

		return {
			props: {
				actors: [],
			},
		}
	}
}

export default ActorsPage
