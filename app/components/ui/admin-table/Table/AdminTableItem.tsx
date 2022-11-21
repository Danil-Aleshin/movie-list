import { FC, memo } from 'react'
import { IAdminTableItem } from '../admin-table.types'
import styles from '../AdminTable.module.scss'
import AdminActions from './AdminActions'

const AdminTableItem: FC<IAdminTableItem> = memo(({ removeHandler, tableItem }) => {
	return (
		<div className={styles.item}>
			{tableItem.items.map((value) => (
				<div title={value} key={value}>
					{value.length > 15 ? value.substr(0, 15) + '...' : value}
				</div>
			))}
			<AdminActions editUrl={tableItem.editUrl} removeHandler={removeHandler} />
		</div>
	)
})

export default AdminTableItem
