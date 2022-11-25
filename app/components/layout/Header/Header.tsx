import { FC } from 'react'
import Search from './Search/Search'

interface IHeader {

}
const Header: FC<IHeader> = ({}) => {
	return (
		<header className="flex items-center">
			<Search />
		</header>
	)
}

export default Header
