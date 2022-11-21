import { FC } from 'react'
import { IGalleryItem } from './gallery.type'
import GalleryItem from './GalleryItem'
import styles from './Gallery.module.scss'

interface IGallery {
	gallery: IGalleryItem[]
}
const Gallery: FC<IGallery> = ({ gallery }) => {
	return (
		<div className={styles.gallery}>
			{gallery.map((galletItem) => (
				<GalleryItem key={galletItem._id} item={galletItem} />
			))}
		</div>
	)
}

export default Gallery
