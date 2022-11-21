import { TypeMaterialIconName } from '@/shared/types/icon.types'

export interface IMenu {
	title?: string
	items: IMenuItem[]
}

export interface IMenuItem {
	icon: TypeMaterialIconName
	link: string
	title: string
}
