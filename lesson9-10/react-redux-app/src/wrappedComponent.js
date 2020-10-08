import {connect} from 'react-redux'
import WithReduxPage from './WithReduxPage'
import mapDispatchToProps from './store/mapDispatchToProps'
import mapStateToProps from './store/mapStateToProps'

const COMPONENT_W = connect(mapStateToProps('WithReduxPage'), mapDispatchToProps('WithReduxPage'))(WithReduxPage)

export default COMPONENT_W