import MovieList from '@/components/screens/dashboard/movies/MovieList'
import { NextPage } from 'next'

interface IUserPage {}

const UserPage: NextPage<IUserPage> = ({}) => {
	return <MovieList />
}

export default UserPage
