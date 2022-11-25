import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/heading/Heading'
import { FC } from 'react'
import { IGenresPage } from '../../../../pages/genres'
import CollectionItem from './CollectionItem'
import styles from './Collections.module.scss'

const Collections: FC<IGenresPage> = ({ collections }) => {
	return (
		<Layout title="Discovery" description="In this section you will find all genres on our site">
			<div className="">
				<div className={styles.header}>
					<Heading title="Discovery" />
					<div className="text-gray-500 text-lg">
						In this section you will find all genres on our site
					</div>
				</div>
				<div className={styles.collections}>
					{collections?.map(
						(collection) =>
							collection.image && <CollectionItem key={collection._id} collection={collection} />,
					)}
				</div>
			</div>
		</Layout>
	)
}

export default Collections
