import { useState } from 'react'

const useSlider = (length: number) => {
	const [showIndex, setShowIndex] = useState(0)
	const [showSlide, setShowSlide] = useState(true)

	const isNext = showIndex + 1 < length
	const isPrev = showIndex ? showIndex - 1 < length : false

	const handleArrowClick = (direction: 'next' | 'prev') => {
		const newIndex = direction === 'next' ? showIndex + 1 : showIndex - 1
		setShowSlide(false)

		setTimeout(() => {
			setShowIndex(newIndex)
			setShowSlide(true)
		}, 300)
	}

	return { showIndex, showSlide, isNext, isPrev, handleArrowClick }
}
export default useSlider
