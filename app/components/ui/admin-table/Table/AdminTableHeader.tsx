import { FC } from 'react'
import styles from '../AdminTable.module.scss'
interface IAdminTableHeader {
	headerItems: string[]
}

const AdminTableHeader: FC<IAdminTableHeader> = ({ headerItems }) => {
	return (
		<div className={`${styles.item} ${styles.itemHeader}`}>
			{headerItems.map((value) => (
				<div key={value}>{value}</div>
			))}
			<div className="text-right">Actions</div>
		</div>
	)
}

export default AdminTableHeader
