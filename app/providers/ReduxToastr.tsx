import ReduxToastrComp from 'react-redux-toastr'
const ReduxToastr = () => {
	return (
		<ReduxToastrComp
			newestOnTop={false}
			preventDuplicates
			progressBar
			closeOnToastrClick
			timeOut={3000}
			transitionIn="fadeIn"
			transitionOut="fadeOut"
		/>
	)
}
export default ReduxToastr
