import useFavorites from '@/components/screens/favorites/useFavorites'
import { FC, useEffect, useState } from 'react'
import MaterialIcon from '../MaterialIcon'
import styles from './FavoriteButton.module.scss'
interface IFavoriteButton {
	movieId: string
}
const FavoriteButton: FC<IFavoriteButton> = ({ movieId }) => {
	const [isFavorite, setisFavorite] = useState(false)
	const { favoriteMovies, toggleFavorites } = useFavorites()

	useEffect(() => {
		const isHaveMovie = favoriteMovies ? favoriteMovies.some((f) => f._id === movieId) : false
		setisFavorite(isHaveMovie)
	}, [favoriteMovies, movieId])

	return (
		<button
			onClick={() => toggleFavorites(movieId)}
			className={`${styles.favoriteButton} ${isFavorite && styles.isFavorite}`}>
			<MaterialIcon name={`${isFavorite ? 'MdFavorite' : 'MdFavoriteBorder'}`} />
		</button>
	)
}

export default FavoriteButton
