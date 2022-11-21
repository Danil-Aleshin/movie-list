export const convertMongoDate = (date: string) => new Date(date).toLocaleDateString('ru')

export const getTimeFromMins = (min: number) => {
	const hours = Math.trunc(min / 60)
	const minutes = min % 60
	return `${hours}h ${minutes}m.`
}
