import useDebounce from '@/hooks/useDebounce'
import { movieServices } from '@/services/movie/movie.services'
import { useQuery } from 'react-query'
import { useState, ChangeEvent } from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm.trim())

	const { asPath } = useRouter()

	useEffect(() => {
		setSearchTerm('')
	}, [asPath])

	const { isSuccess, data } = useQuery(
		['search movie list', debouncedSearch],
		() => movieServices.getAll(debouncedSearch),
		{
			select: ({ data }) => data,
			enabled: !!debouncedSearch,
		},
	)
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return { isSuccess, data, handleSearch, searchTerm }
}

export default useSearch
