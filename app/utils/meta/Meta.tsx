import { titleMerge, websiteName } from '@/configs/seo.config'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { ISEO } from './meta.types'
import logoImg from '@/assets/images/logo.svg'

const Meta: FC<ISEO> = ({ children, description, image, title }) => {
	const { asPath } = useRouter()

	const currentUrl = `${process.env.APP_URL} ${asPath}`
	return (
		<>
			<Head>
				<title itemProp="headline">{titleMerge(title)}</title>
				{description ? (
					<>
						<meta itemProp="description" name="description" content={description} />
						<link rel="canonical" href={currentUrl} />
						<meta property="og:locale" content="en" />
						<meta property="og:title" content={titleMerge(title)} />
						<meta property="og:url" content={currentUrl} />
						<meta property="og:image" content={image || logoImg} />
						<meta property="og:site_name" content={websiteName} />
						<meta property="og:description" content={description} />
					</>
				) : (
					<meta name="robots" content="noindex, nofollow" />
				)}
			</Head>
			{children}
		</>
	)
}
export default Meta
