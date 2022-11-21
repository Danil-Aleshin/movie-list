import { FC } from 'react'
import Gallery from '../gallery/Gallery'
import { IGalleryItem } from '../gallery/gallery.type'
import Heading from '../heading/Heading'
import styles from './Catalog.module.scss'
import parse from 'html-react-parser'
import Layout from '@/components/layout/Layout'

interface ICatalog {
	title: string
	description: string
	gallery: IGalleryItem[]
}

const Catalog: FC<ICatalog> = ({ description, title, gallery }) => {
	return (
		<Layout title={title} description={description}>
			<div className={styles.catalog}>
				<div className={styles.header}>
					<Heading title={title} className="" />
					<div className="text-gray-500 text-lg">{parse(description)}</div>
				</div>
				{gallery.length ? (
					<Gallery gallery={gallery} />
				) : (
					<div className={styles.notFound}>Nothing found</div>
				)}
			</div>
		</Layout>
	)
}

export default Catalog
