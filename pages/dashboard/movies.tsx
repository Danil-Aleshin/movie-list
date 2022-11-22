import MovieList from '@/components/screens/dashboard/movies/MovieList'
import { NextPageAuth } from '@/shared/types/auth.types'


interface IMoviesPage {}

const MoviesPage: NextPageAuth<IMoviesPage> = ({}) => {
	return <MovieList />
}
MoviesPage.isOnlyAdmin = true

export default MoviesPage
