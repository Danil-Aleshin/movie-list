import { adminServices } from '@/services/admin/admin.services'
import { useQuery } from 'react-query'

const useStatistics = () => {

	const { data: countMovies, isLoading: countMoviesLoading } = useQuery('count movies', () =>
		adminServices.getCountMovies(),
	)

	const { data: countUsers, isLoading: countUsersLoading } = useQuery('count movies', () =>
		adminServices.getCountUsers(),
	)

	return { countMovies,countUsers,countMoviesLoading,countUsersLoading }
}
export default useStatistics
