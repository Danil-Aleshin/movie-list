import { IGalleryItem } from '@/components/ui/gallery/gallery.type'
import { getMovieUrl } from '@/configs/url.config'
import { userServices } from '@/services/users/user.services'
import { useAuth } from '@/shared/useAuth'
import { toastrError } from '@/utils/toastr-error'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from 'react-query'

const useFavorites = () => {
	const { user } = useAuth()
	const { push } = useRouter()
	const { data: favoriteMovies, refetch } = useQuery(
		'get favorites',
		() => userServices.getFavorites(),
		{
			select: ({ data }) =>
				data.map(
					(movie) =>
						({
							_id: movie._id,
							poster: movie.poster,
							rating: movie.rating,
							url: getMovieUrl(movie.slug),
							title: movie.title,
						} as IGalleryItem),
				),
			enabled: !!user,
		},
	)

	const { mutateAsync } = useMutation(
		'toggle favorites',
		(id: string) => userServices.toggleFavorite(id),
		{
			onSuccess: () => {
				refetch()
			},
			onError: (error) => {
				toastrError(error, 'Failed to toggle favorites')
			},
		},
	)

	const toggleFavorites = async (movieId: string) => {
		if (user) {
			await mutateAsync(movieId)
		} else {
			push('/auth')
		}
	}
	return { toggleFavorites, favoriteMovies }
}
export default useFavorites
