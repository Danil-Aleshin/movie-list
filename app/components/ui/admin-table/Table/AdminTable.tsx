import { FC, memo } from 'react'
import Skeleton from 'react-loading-skeleton'
import { ITableItem } from '../admin-table.types'
import AdminTableHeader from './AdminTableHeader'
import AdminTableItem from './AdminTableItem'
import styles from '../AdminTable.module.scss'

interface IAdminTable {
	tableItems: ITableItem[]
	isLoading: boolean
	headerItems: string[]
	removeHandler: (id: string) => void
}
const AdminTable: FC<IAdminTable> = memo(
	({ headerItems, isLoading, removeHandler, tableItems }) => {
		return (
			<div className={styles.table}>
				<AdminTableHeader headerItems={headerItems} />
				{isLoading ? (
					<Skeleton count={6} height={48} className="mt-4" />
				) : tableItems.length ? (
					tableItems.map((tableItem) => (
						<AdminTableItem
							key={tableItem._id}
							removeHandler={() => removeHandler(tableItem._id)}
							tableItem={tableItem}
						/>
					))
				) : (
					<div className={styles.notFound}>Elements not found</div>
				)}
			</div>
		)
	},
)

export default AdminTable
