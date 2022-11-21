import { useRouter } from 'next/router'
import { FC } from 'react'
import MaterialIcon from '../../MaterialIcon'
import styles from '../AdminTable.module.scss'
interface IAdminActions {
	editUrl?: string
	removeHandler: () => void
}
const AdminActions: FC<IAdminActions> = ({ editUrl, removeHandler }) => {
	const { push } = useRouter()

	const remove = () => {
		const removeConfirm = confirm('Confirm deletion')

		if (removeConfirm) removeHandler()
	}

	return (
		<div className={styles.actions}>
			{editUrl && (
				<button onClick={() => push(editUrl)}>
					<MaterialIcon name="MdEdit" />
				</button>
			)}
			<button onClick={() => remove()}>
				<MaterialIcon name="MdClose" />
			</button>
		</div>
	)
}

export default AdminActions
