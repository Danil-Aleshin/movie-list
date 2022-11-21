import { genreServices } from '@/services/genre/genre.services'
import { useQuery } from 'react-query'
import { IMenuItem } from '@/components/layout/Navigation/MenuContainer/menu.types'
import { getGenreUrl } from '@/configs/url.config'

const useGenres = () => {
	const queryData = useQuery('genres menu', () => genreServices.getAll(), {
		select: ({ data }) =>
			data
				.filter((genre) => genre.icon && genre.name && genre.slug)
				.map(
					(genre) =>
						({
							icon: genre.icon,
							link: getGenreUrl(genre.slug),
							title: genre.name,
						} as IMenuItem),
				)
				.splice(0, 4),
	})

	return queryData
}

export default useGenres
