import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './Logo.module.scss'
import logoImage from '@/assets/images/logo.png'
const Logo: FC = () => {
	return (
		<Link href={'/'}>
			<a className={styles.logo}>
				<Image
					src={logoImage}
					width={35}
					height={35}
					className={styles.logoImage}
					draggable={false}
					alt={'Logo'}
				/>
				<h1>Movies</h1>
			</a>
		</Link>
	)
}
export default Logo
