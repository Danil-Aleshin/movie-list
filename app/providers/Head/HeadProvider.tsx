import Head from 'next/head'
import ProgressBar from 'nextjs-progressbar'
import { FC } from 'react'

import Favicons from './Favicons'
interface IHeadeProvider {
	children: JSX.Element
}
const HeadProvider: FC<IHeadeProvider> = ({ children }) => {
	return (
		<>
			<ProgressBar
				showOnShallow
				color={'#00B9AE'}
				startPosition={0.3}
				stopDelayMs={200}
				height={2}
			/>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5.0" />

				<Favicons />

				<meta name="theme-color" content={'#21242D'} />
				<meta name="msapplication-navbutton-color" content={'#21242D'} />
				<meta name="apple-mobile-web-app-status-bar-style" content={'#21242D'} />
			</Head>
			{children}
		</>
	)
}

export default HeadProvider
