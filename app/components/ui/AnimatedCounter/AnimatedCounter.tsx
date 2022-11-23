import { splitNumber } from '@/utils/split-number/splitNumber'
import { useEffect, useState } from 'react'

const AnimatedCounter = (to: number) => {
	const from: number = Number((to * 0.4).toFixed(0))
	const [currVal, setCurrVal] = useState(from)
	const step = currVal + to * 0.001
	const interval = 1

	useEffect(() => {
		if (currVal === to) {
			return
		} else if (currVal > to) {
			setCurrVal(to)
		} else {
			setTimeout(setCurrVal, interval, step)
		}
	}, [currVal, to])

	return splitNumber(Number(currVal.toFixed(0)))
}

export default AnimatedCounter
