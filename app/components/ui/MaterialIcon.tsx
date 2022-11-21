import { TypeMaterialIconName } from '@/shared/types/icon.types'
import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
	const IconComponent = MaterialIcons[name]

	return <IconComponent /> || null
}
export default MaterialIcon
