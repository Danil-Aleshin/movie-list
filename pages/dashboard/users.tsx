import UserList from '@/components/screens/dashboard/users/UserList'
import { NextPageAuth } from '@/shared/types/auth.types'


interface IUserPage{
	
}

const UserPage: NextPageAuth<IUserPage> = ({}) => {
	return <UserList/>
}
UserPage.isOnlyAdmin = true

export default UserPage