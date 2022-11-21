import { FC, memo } from 'react'
import { IButton } from './form.types'
import styles from './form.module.scss'

const Button: FC<IButton> = memo(({ className, children, ...props }) => {
	return (
		<button className={`${styles.button} ${className}`} {...props}>
			{children}
		</button>
	)
})

export default Button
