import { splitNumber } from './splitNumber'

describe('splitNumber', () => {
	test('specific meaning', () => {
		expect(splitNumber(1000000000)).toBe('1,000,000,000')
	})
})
