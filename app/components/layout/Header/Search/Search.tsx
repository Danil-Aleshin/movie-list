import SearchField from '@/components/ui/search-field/SearchField'
import { FC } from 'react'
import SearchList from './searchList/SearchList'
import useSearch from './useSearch'

const Search: FC = () => {
	const { data,handleSearch,isSuccess,searchTerm} = useSearch()
	return (
		<div className="relative">
			<SearchField handleSearch={handleSearch} searchTerm={searchTerm}/>
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	)
}
export default Search
