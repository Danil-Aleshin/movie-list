import { FC } from 'react'
import useGenres from '@/components/layout/Navigation/MenuContainer/genres/useGenres'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Menu from '../Menu'

const GenresMenu:FC = () => {
	const { isLoading, data } = useGenres()
	return isLoading ? (
		<SkeletonLoader count={5} className="h-5 w-16 mt-6" />
	) : (
		<Menu options={{ title: 'Popular ganres', items: data || [] }} />
	)
}
export default GenresMenu
