import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import RatingCard from '../rating-card/RatingCard'
import styles from './Gallery.module.scss'
import { IGalleryItem } from './gallery.type'

interface IGalleryItemProps {
	item: IGalleryItem
}

const GalleryItem: FC<IGalleryItemProps> = ({ item: { _id, poster, rating, url, title } }) => {
	const { push } = useRouter()

	return (
		<Link href={url}>
			<a className={styles.galleryItem}>
				<Image
					className={styles.image}
					src={poster}
					layout="fill"
					alt={title}
					draggable={false}
					priority
				/>
				{rating && (
					<div className={styles.intro}>
						<RatingCard rating={rating} className="absolute top-1.5 left-1.5" />
					</div>
				)}
			</a>
		</Link>
	)
}

export default GalleryItem
