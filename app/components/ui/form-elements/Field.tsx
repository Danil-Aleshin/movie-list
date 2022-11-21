import { FC, forwardRef } from 'react'
import { IField } from './form.types'
import styles from './form.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, ...props }, ref) => {
		return (
			<div className={styles.field} style={style}>
				<label>
					<span>{placeholder}</span>
					<input type={type} ref={ref} {...props} />
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	},
)

Field.displayName = 'Field'

export default Field
