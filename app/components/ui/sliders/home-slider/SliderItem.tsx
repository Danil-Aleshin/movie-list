import { getGenreUrl } from '@/configs/url.config'
import { getTimeFromMins } from '@/utils/date/convertDate'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import Button from '../../form-elements/Button'
import { ISliderItem } from './silder.types'
import styles from './Slider.module.scss'

const SliderItem: FC<ISliderItem> = ({
	slide: { _id, bigPoster, genres, link, poster, title, parameters },
}) => {
	const { push } = useRouter()

	return (
		<div className={styles.slide}>
			<Image
				layout="fill"
				className={'image-bg rounded-2xl blur-sm'}
				src={bigPoster}
				alt={title}
				draggable={false}
				unoptimized
				priority
			/>
			<div className={styles.heading}>
				<Link href={link}>
					<a>
						<Image
							className={styles.poster}
							src={poster}
							alt={title}
							width={170}
							height={250}
							draggable={false}
							unoptimized
							priority
						/>
					</a>
				</Link>
				<div className={styles.info}>
					<h1 className={styles.title}>{title}</h1>
					<ul className={styles.parameters}>
						<li>{parameters.year}</li>
						<li>{getTimeFromMins(parameters.duration)}</li>
						<li>{parameters.country}</li>
					</ul>
					<div className={styles.genres}>
						{genres.map((g) => (
							<Link href={getGenreUrl(g.slug)} key={g._id}>
								<a>{g.name}</a>
							</Link>
						))}
					</div>
					<Button onClick={() => push(link)}>Watch</Button>
				</div>
			</div>
		</div>
	)
}

export default SliderItem
