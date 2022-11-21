import { getAdminHomeUrl, getAdminUrl } from '@/configs/url.config'
import { INavItem } from './navigation.types'

export const navList:INavItem[] = [
	{
		link: getAdminHomeUrl(),
		title: 'Statistics',
	},
	{
		link: getAdminUrl('users'),
		title: 'Users',
	},
	{
		link: getAdminUrl('movies'),
		title: 'Movies',
	},
	{
		link: getAdminUrl('actors'),
		title: 'Actors',
	},
	{
		link: getAdminUrl('genres'),
		title: 'Genres',
	},

]
