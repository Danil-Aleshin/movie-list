import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'
import { ISlider } from './silder.types'
import SliderItem from './SliderItem'
import useSlider from './useSlider'
import styles from './Slider.module.scss'
import ArrowButton from './ArrowButton/ArrowButton'

const Slider: FC<ISlider> = ({ slides }) => {
	const { isNext, isPrev, showIndex, showSlide, handleArrowClick } = useSlider(slides.length)

	return (
		<div className={styles.slider}>
			<CSSTransition in={showSlide} timeout={300} classNames="slide-animation" unmountOnExit>
				<SliderItem slide={slides[showIndex]} />
			</CSSTransition>

			<div className={styles.buttons}>
				{isPrev && (
					<div className={styles.left}>
						<ArrowButton clickHandler={() => handleArrowClick('prev')} direction="left" />
					</div>
				)}
				{isNext && (
					<div className={styles.right}>
						<ArrowButton clickHandler={() => handleArrowClick('next')} direction="right" />
					</div>
				)}
			</div>
		</div>
	)
}

export default Slider
