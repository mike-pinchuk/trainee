import {bindActionCreators} from 'redux'
import {increment, decrement} from './actions'
import COMPONENT from '../WithReduxPage'

function mapDispatchToProps (component) {
    if(COMPONENT) {
        return function (dispatch) {
            return {
                change_plus: bindActionCreators(increment, dispatch),
                change_minus: bindActionCreators(decrement, dispatch)
            }
        }      
    // } else if (decrement) {
    //     return {
            
    //     }
    }
    
}

export default mapDispatchToProps