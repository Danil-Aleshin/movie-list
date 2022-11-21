import Gallery from '@/components/ui/gallery/Gallery'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import useFavorites from './useFavorites'

const Favorites: FC = () => {
	const { favoriteMovies } = useFavorites()

	return (
		<Meta title="Favorite movies">
			<div className="flex flex-col gap-10">
				<div className="">
					<Heading title="Favorite movies" />
				</div>
				{favoriteMovies?.length ? (
					<Gallery gallery={favoriteMovies} />
				) : (
					<div className={'text-center mt-60 text-primary text-3xl'}>No favorite movies :(</div>
				)}
			</div>
		</Meta>
	)
}

export default Favorites
