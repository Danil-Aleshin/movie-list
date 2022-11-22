import ActorList from '@/components/screens/dashboard/actors/ActorList'
import { NextPageAuth } from '@/shared/types/auth.types'

interface IActorPage {}

const ActorPage: NextPageAuth<IActorPage> = ({}) => {
	return <ActorList />
}
ActorPage.isOnlyAdmin = true

export default ActorPage
