import { FC } from 'react'
import MaterialIcon from '../../../MaterialIcon'
import styles from './ArrowButton.module.scss'

interface IArrowButton {
	direction: 'left' | 'right'
	clickHandler: () => void
}

const ArrowButton: FC<IArrowButton> = ({ direction, clickHandler }) => {
	return (
		<button onClick={clickHandler} className={styles.arrowBtn}>
			<MaterialIcon name={direction === 'left' ? 'MdKeyboardArrowLeft' : 'MdKeyboardArrowRight'} />
		</button>
	)
}

export default ArrowButton
