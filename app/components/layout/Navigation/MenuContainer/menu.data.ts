import { IMenu } from './menu.types'

export const mainMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			icon: 'MdOutlineHome',
			link: '/',
			title: 'Home',
		},
		{
			icon: 'MdOutlineExplore',
			link: '/genres',
			title: 'Discovery',
		},
		{
			icon: 'MdRefresh',
			link: '/fresh',
			title: 'Fresh movies',
		},
		{
			icon: 'MdOutlineLocalFireDepartment',
			link: '/trending',
			title: 'Trending now',
		},
	],
}


