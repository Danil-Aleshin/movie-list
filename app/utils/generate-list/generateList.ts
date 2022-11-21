export const generateList = (index: number, length: number, name: string) =>
	index + 1 === length ? name : name + ', '

export interface IArrayItem {
	name: string
}

export const generateListCommas = (array: IArrayItem[]) => array.map((i) => i.name).join(', ')
