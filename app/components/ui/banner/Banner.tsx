import Image from 'next/image'
import { FC } from 'react'
import styles from './Banner.module.scss'

interface IBanner {
	image: string
}

const Banner: FC<IBanner> = ({ image }) => {
	return (
		<div className={styles.banner}>
			<Image src={image} draggable={false} unoptimized priority alt="" layout="fill" />
		</div>
	)
}

export default Banner
