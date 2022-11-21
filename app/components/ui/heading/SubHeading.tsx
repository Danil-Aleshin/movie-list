import { FC } from 'react'

interface ISubHeading {
	className?:string,
	title:string
}
const SubHeading: FC<ISubHeading> = ({className,title}) => {
	return <h2 className={`text-white font-semibold text-xl ${className}`}>{title}</h2>
}

export default SubHeading
