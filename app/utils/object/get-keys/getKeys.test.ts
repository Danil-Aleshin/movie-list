import { getKeys } from './getKeys'

describe('get keys', () => {
	test('specific meaning', () => {
		const obj = {
			title: 'Spider-Man',
			duration: 108,
			genres: ['Action', 'Adventure'],
		}
		expect(getKeys(obj)).toEqual(['title', 'duration', 'genres'])
	})
})
