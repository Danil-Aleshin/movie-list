import Search from '@/components/layout/Header/Search/Search'
import { FC } from 'react'

interface IHeader {}

const Header: FC<IHeader> = ({}) => {
	return (
		<header>
			<div className="flex items-center gap-17.5 h-full">
				<h1 className="text-2xl">Dashboard</h1>
				<Search />
			</div>
		</header>
	)
}

export default Header
