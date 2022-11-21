import { ButtonHTMLAttributes, CSSProperties, InputHTMLAttributes } from 'react'
import { EditorProps } from 'draft-js'
import { FieldError } from 'react-hook-form'
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IFieldProps {
	placeholder: string
	error: any //FieldError | undefined
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {}

type TypeEditorPropsField = EditorProps & IFieldProps

export interface ITextEditor extends Omit<TypeEditorPropsField, 'editorState'> {
	onChange: (...e: any[]) => void
	value: string
}

export interface IUploadField {
	folder?: string
	value?: string
	onChange: (...e: any[]) => void
	placeholder: string
	error?: FieldError
	style?: CSSProperties
	isNoImage?: boolean
}
