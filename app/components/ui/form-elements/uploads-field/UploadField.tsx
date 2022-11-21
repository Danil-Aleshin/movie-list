import { FC } from 'react'
import { IUploadField } from '../form.types'
import useUpload from './useUpload'
import styles from '../form.module.scss'
import Image from 'next/image'
import SkeletonLoader from '../../SkeletonLoader'
const UploadField: FC<IUploadField> = ({
	error,
	onChange,
	folder,
	isNoImage = false,
	style,
	value,
	placeholder,
}) => {
	const { isLoading, uploadFile } = useUpload(onChange, folder)

	return (
		<div className={`${styles.uploadField}`}>
			<div className={styles.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type={'file'} onChange={uploadFile} />
					{error && <div className={styles.error}>{error.message}</div>}
				</label>
				{!isNoImage && (
					<div className={styles.uploadImageContainer}>
						{isLoading ? (
							<SkeletonLoader count={1} className="w-full h-full" />
						) : (
							value && <Image alt="" src={value} layout="fill" unoptimized />
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default UploadField
