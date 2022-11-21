import { useAuth } from '@/shared/useAuth'
import { FC } from 'react'
import AuthButton from '../video-player/AuthPlaceholder/AuthButton'
import useRateMovie from './useRateMovie'
// @ts-ignore
import ReactStars from 'react-rating-stars-component'

interface IRateMovie {
	id: string
	slug: string
	defaultRating: number
}

const RateMovie: FC<IRateMovie> = ({ defaultRating, id, slug }) => {
	const { handleClick, rating, myRating } = useRateMovie(id, defaultRating)
	const { user } = useAuth()

	return (
		<div className="rounded-lg bg-darkBlue-900 flex flex-col items-center gap-2 mx-auto py-5 px-10">
			<h3 className="text-center text-white text-xl">How do you like the movie?</h3>
			<p className="text-center">Overall movie rating</p>
			{user ? (
				<ReactStars
					size={35}
					count={10}
					color={'black'}
					activeColor={'#facc15'}
					value={rating}
					isHalf={true}
					onChange={handleClick}
				/>
			) : (
				<AuthButton slug={slug} />
			)}
			{user && (
				<span className="text-primary">Your rating {String(myRating?.data.toFixed(1))}</span>
			)}
		</div>
	)
}

export default RateMovie
