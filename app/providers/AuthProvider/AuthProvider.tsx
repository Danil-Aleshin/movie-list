import { useActions } from '@/hooks/useActions'
import { TypeComponentAuthFields } from '@/shared/types/auth.types'
import { useAuth } from '@/shared/useAuth'
import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

const AuthProvider: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser },
}) => {
	const { user } = useAuth()
	const { logout, checkAuth } = useActions()
	const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })
	const { pathname } = useRouter()

	useEffect(() => {
		const accessToket = Cookies.get('accessToken')
		if (accessToket) checkAuth()
	}, [])

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (!refreshToken && user) logout()
	}, [])

	return !isOnlyAdmin && !isOnlyUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyAdmin, isOnlyUser }}>{children}</DynamicCheckRole>
	)
}
export default AuthProvider
