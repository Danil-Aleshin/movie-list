import { convertMongoDate, getTimeFromMins } from './convertDate'

describe('getTimeFromMins', () => {
	test('specific meaning', () => {
		expect(getTimeFromMins(112)).toBe('1h 52m.')
	})
})

describe('convertMongoDate', () => {
	test('specific meaning', () => {
		expect(convertMongoDate('2022-10-19T14:17:25.379Z')).toBe('19.10.2022')
	})
})
