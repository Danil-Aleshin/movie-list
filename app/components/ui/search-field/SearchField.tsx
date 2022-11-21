import MaterialIcon from '../MaterialIcon'
import styles from './SearchField.module.scss'
import { ChangeEvent, FC, memo } from 'react'
interface ISearchField {
	searchTerm: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
	className?: string
}

const SearchField: FC<ISearchField> = memo(({ handleSearch, searchTerm, className }) => {
	return (
		<div className={`${styles.search} ${className}`}>
			<MaterialIcon name="MdSearch" />
			<input value={searchTerm} onChange={handleSearch} placeholder="Search..." type="text" />
		</div>
	)
})
export default SearchField
