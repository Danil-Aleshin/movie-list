import { FC } from 'react'
import styles from './Select.module.scss'
import formStyles from '../form.module.scss'
import makeAnimated from 'react-select/animated'
import { IOption, ISelect } from './select.types'
import ReactSelect, { OnChangeValue } from 'react-select'

const animatedComponents = makeAnimated()

const Select: FC<ISelect> = ({ field, isLoading, options, placeholder, error, isMulti }) => {
	const onChange = (newValue: unknown | OnChangeValue<IOption, boolean>) => {
		field.onChange(
			isMulti ? (newValue as IOption[]).map((item) => item.value) : (newValue as IOption).value,
		)
	}

	const getValue = () => {
		if (field.value) {
			return isMulti
				? options.filter((option: any) => field.value.indexOf(option.value) >= 0)
				: options.find((option: any) => option.value === field.value)
		} else {
			return isMulti ? [] : ('' as any)
		}
	}

	return (
		<div className={styles.selectContainer}>
			<label>
				<span>{placeholder}</span>
				<ReactSelect
					classNamePrefix="custom-select"
					options={options}
					value={getValue()}
					isMulti={isMulti}
					onChange={onChange}
					components={animatedComponents}
					isLoading={isLoading}
				/>
			</label>
			{error && <div className={formStyles.error}>{error.message}</div>}
		</div>
	)
}

export default Select
