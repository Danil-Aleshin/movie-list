import { IMenu } from '@/components/layout/Navigation/MenuContainer/menu.types'
import { getAdminHomeUrl, getAdminUrl } from '@/configs/url.config'

export const navList: IMenu = {
	title: '',
	items: [
		{
			link: getAdminHomeUrl(),
			title: 'Statistics',
			icon: 'MdOutlineBarChart',
		},
		{
			link: getAdminUrl('users'),
			title: 'Users',
			icon: 'MdPeopleOutline',
		},
		{
			link: getAdminUrl('movies'),
			title: 'Movies',
			icon: 'MdOutlineLocalMovies',
		},
		{
			link: getAdminUrl('actors'),
			title: 'Actors',
			icon: 'MdOutlineRecentActors',
		},
		{
			link: getAdminUrl('genres'),
			title: 'Genres',
			icon: 'MdOutlineCollections',
		},
	],
}
