import { generateSlug } from './generateSlug'

describe('generate slug', () => {
	test('specific meaning', () => {
		expect(generateSlug('Spider Man No Way to Home')).toBe('spider-man-no-way-to-home')
	})
})
