import { useAppSelector } from '@/hooks/useTypedSelector'

export const useAuth = () => useAppSelector((state) => state.user)
