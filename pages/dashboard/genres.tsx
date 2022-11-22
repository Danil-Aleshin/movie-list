import GenreList from '@/components/screens/dashboard/genres/GenreList'
import { NextPageAuth } from '@/shared/types/auth.types'

interface IGenresPage {}

const GenresPage: NextPageAuth<IGenresPage> = ({}) => {
	return <GenreList />
}

GenresPage.isOnlyAdmin = true

export default GenresPage
