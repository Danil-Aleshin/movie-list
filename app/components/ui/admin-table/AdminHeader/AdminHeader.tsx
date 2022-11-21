import { ChangeEvent, FC } from 'react'
import Button from '../../form-elements/Button'
import SearchField from '../../search-field/SearchField'
import styles from '../AdminTable.module.scss'

interface IAdminHeader {
	onClick?: () => void
	searchTherm: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

const AdminHeader: FC<IAdminHeader> = ({ handleSearch, searchTherm, onClick }) => {
	return (
		<div className={styles.header}>
			<SearchField handleSearch={handleSearch} searchTerm={searchTherm} />
			{onClick && <Button onClick={onClick}>Create new</Button>}
		</div>
	)
}

export default AdminHeader
