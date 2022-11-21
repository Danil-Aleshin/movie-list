import Collections from '@/components/screens/collections/Collections'
import { ICollection } from '@/components/screens/collections/collections.types'
import { genreServices } from '@/services/genre/genre.services'
import { GetStaticProps, NextPage } from 'next'

export interface IGenresPage {
	collections: ICollection[]
}

const GenresPage: NextPage<IGenresPage> = ({ collections }) => {
	return <Collections collections={collections} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: collections } = await genreServices.collections()

		return {
			props: {
				collections,
			},
			revalidate: 60,
		}
	} catch (error: any) {

		return {
			props: {
				collections: [],
			},
		}
	}
}
export default GenresPage
