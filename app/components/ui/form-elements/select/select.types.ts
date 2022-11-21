import { IFieldProps } from '../form.types'
import { Options } from 'react-select'
import { ControllerRenderProps } from 'react-hook-form'

export interface IOption {
	label: string
	value: string
}

export interface ISelect extends IFieldProps {
	options: any //Options<IOption>
	isMulti?: boolean
	field: ControllerRenderProps<any, any>
	isLoading: boolean
}
