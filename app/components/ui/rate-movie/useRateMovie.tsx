import { ratingServices } from '@/services/rating/rating.services'
import { useAuth } from '@/shared/useAuth'
import { toastrError } from '@/utils/toastr-error'
import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'

const useRateMovie = (movieId: string, defaultRating: number) => {
	const [rating, setRating] = useState(defaultRating)

	const { user } = useAuth()

	const { refetch, data: myRating } = useQuery(
		['your movie rating', movieId],
		() => ratingServices.getByUser(movieId),
		{
			enabled: !!movieId && !!user,
		},
	)

	const { mutateAsync: rateMovie } = useMutation(
		'set rating movie',
		({ value }: { value: number }) => ratingServices.set(movieId, value),
		{
			onError(error) {
				toastrError(error, 'Rate movie')
			},
			onSuccess() {
				refetch()
			},
		},
	)

	const handleClick = async (nextValue: number) => {
		setRating(defaultRating)
		await rateMovie({ value: nextValue })
	}

	return {
		rating,
		handleClick,
		myRating,
	}
}

export default useRateMovie
