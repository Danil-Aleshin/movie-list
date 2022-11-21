import { movieServices } from '@/services/movie/movie.services'
import { useMutation } from 'react-query'
import { useEffect } from 'react'

const useUpdateCountOpened = (slug: string) => {
	const { mutateAsync } = useMutation('update count opened', () =>
		movieServices.updateCountOpened(slug),
	)

	useEffect(() => {
		mutateAsync()
	}, [])
}
export default useUpdateCountOpened
