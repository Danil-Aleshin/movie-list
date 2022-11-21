import { generateList, generateListCommas, IArrayItem } from './generateList'

describe('generateList', () => {
	const array: IArrayItem[] = [
		{
			name: 'Alex',
		},
		{
			name: 'Alisa',
		},
		{
			name: 'Danil',
		},
	]

	test('specific meaning', () => {
		expect(generateListCommas(array)).toBe('Alex, Alisa, Danil')
	})
	test('empty array', () => {
		expect(generateListCommas([])).toBe('')
	})
})
