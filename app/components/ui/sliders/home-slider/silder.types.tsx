import { IGenre, IMovie } from '@/shared/types/movie.types'

export interface ISlide {
	_id: string
	bigPoster: string
	poster: string
	title: string
	genres: IGenre[]
	link: string
	parameters: {
		year: number
		duration: number
		country: string
	}
}

export interface ISlider {
	slides: ISlide[]
}

export interface ISliderItem {
	slide: ISlide
}
