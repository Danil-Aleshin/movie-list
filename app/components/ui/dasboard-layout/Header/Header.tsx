import Search from '@/components/layout/Header/Search/Search'
import { FC,memo } from 'react'

interface IHeader {}

const Header: FC<IHeader> = memo(({}) => {
	return (
		<header>
			<div className="flex items-center gap-17.5 h-full">
				<h1 className="text-2xl hidden md:block">Dashboard</h1>
				<Search />
			</div>
		</header>
	)
})

export default Header
