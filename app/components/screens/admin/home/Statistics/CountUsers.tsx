import SkeletonLoader from '@/components/ui/SkeletonLoader'
import { adminServices } from '@/services/admin/admin.services'
import { FC } from 'react'
import { useQuery } from 'react-query'
import styles from '../Admin.module.scss'

interface ICountUsers {}
const CountUsers: FC<ICountUsers> = ({}) => {
	const { isLoading, data: response } = useQuery('count users', () => adminServices.getCountUsers())

	return (
		<div className={`${styles.container} ${styles.countUsers}`}>
			<div className="flex justify-center flex-col items-center">
				{isLoading ? (
					<SkeletonLoader className="h-28 w-16" />
				) : (
					<div className={styles.number}>{response?.data}</div>
				)}
				<div className={styles.description}>Users</div>
			</div>
		</div>
	)
}

export default CountUsers
