import { FC } from 'react'
import { ICollection } from './collections.types'
import styles from './Collections.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { getGenreUrl } from '@/configs/url.config'

interface ICollectionItem {
	collection: ICollection
}
const CollectionItem: FC<ICollectionItem> = ({ collection: { image, slug, title } }) => {
	return (
		<Link href={getGenreUrl(slug)}>
			<a className={styles.collection}>
				<Image src={image} layout="fill" draggable={false} alt={title} />
				<div className={styles.title}>{title}</div>
			</a>
		</Link>
	)
}

export default CollectionItem
