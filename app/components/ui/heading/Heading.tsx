import { FC } from 'react'

interface IHeading {
	title: string
	className?: string
}
const Heading: FC<IHeading> = ({ title, className }) => {
	return <h1 className={`uppercase text-white font-bold text-xl ${className}`}>{title}</h1>
}
export default Heading
