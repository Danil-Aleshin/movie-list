import { IGalleryItem } from '@/components/ui/gallery/gallery.type'
import { ISlide } from '@/components/ui/sliders/home-slider/silder.types'

export interface IHome {
	slides: ISlide[]
	mostPopularMovies: IGalleryItem[]
	actors:IGalleryItem[]
}
