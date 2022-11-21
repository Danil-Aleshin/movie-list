import { FC } from 'react'
import { IGalleryItem } from '../../gallery/gallery.type'
import styles from './GallerySlider.module.scss'
import GalleryItem from '../../gallery/GalleryItem'

interface IGallerySlider {
	galleryItems: IGalleryItem[]
}

const GallerySlider: FC<IGallerySlider> = ({ galleryItems }) => {
	return (
		<div className={styles.gallerySlider}>
			{galleryItems.map((galleryItem) => (
				<GalleryItem key={galleryItem._id} item={galleryItem} />
			))}
		</div>
	)
}

export default GallerySlider
