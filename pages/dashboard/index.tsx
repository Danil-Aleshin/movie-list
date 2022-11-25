import Statistics from '@/components/screens/dashboard/statistics/Statistics'
import { NextPageAuth } from '@/shared/types/auth.types'

interface IStatisticsPage {}

const StatisticsPage: NextPageAuth<IStatisticsPage> = ({}) => {
	return <Statistics />
}
StatisticsPage.isOnlyAdmin = true

export default StatisticsPage
