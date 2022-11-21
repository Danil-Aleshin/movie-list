import UserList from '@/components/screens/dashboard/users/UserList'
import {NextPage} from 'next'

interface IUserPage{
	
}

const UserPage: NextPage<IUserPage> = ({}) => {
	return <UserList/>
}

export default UserPage