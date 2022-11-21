import { FC } from 'react'
import MaterialIcon from '../MaterialIcon'
import styles from './RatingCard.module.scss'

interface IRatingCard {
	rating: number
	className: string
}

const RatingCard: FC<IRatingCard> = ({className,rating}) => {
	return (
		<div className={`${styles.rating} ${className}`}>
			<MaterialIcon name="MdStarRate" />
			<span>{rating.toFixed(1)}</span>
		</div>
	)
}

export default RatingCard
